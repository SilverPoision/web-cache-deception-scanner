const { sendRequest } = require("./http");
const { sleep } = require("./utils");

async function testPayload(baseReq, payload, cacheHeader, debug) {
  const authReq = {
    ...baseReq,
    url: new URL(baseReq.url.toString()),
  };

  authReq.url.pathname += payload;

  // Prime cache
  const authResp = await sendRequest(authReq, false, debug);

  // RULE 1: Cache header must exist
  const cacheVal = authResp.headers.get(cacheHeader);
  if (!cacheVal) {
    return { vulnerable: false };
  }

  // RULE 2: 404 responses are ignored
  if (authResp.status === 404) {
    if (debug) {
      console.log("[DEBUG] Skipping 404 response");
    }
    return { vulnerable: false };
  }

  await sleep(500);

  // Unauthenticated fetch
  const unauthResp = await sendRequest(authReq, true, debug);

  // ALSO ignore unauth 404s
  if (unauthResp.status === 404) {
    return { vulnerable: false };
  }

  // Final confirmation
  if (
    authResp.hash === unauthResp.hash &&
    authResp.length === unauthResp.length
  ) {
    return {
      vulnerable: true,
      payload,
      cacheHeader: cacheVal,
      authHash: authResp.hash,
      unauthHash: unauthResp.hash,
      url: authReq.url.toString(),
    };
  }

  return { vulnerable: false };
}

exports.testPayload = testPayload;
