const fetch = require("node-fetch");
const { sha256 } = require("./utils");

async function sendRequest(req, stripAuth = false, debug = false) {
  const headers = { ...req.headers };

  if (stripAuth) {
    delete headers["Cookie"];
    delete headers["Authorization"];
  }

  if (debug) {
    console.log("\n--- REQUEST ---");
    console.log(req.method, req.url.toString());
    console.log(headers);
  }

  const res = await fetch(req.url.toString(), {
    method: req.method,
    headers,
    body: req.body || undefined,
    redirect: "manual",
  });

  const body = await res.text();

  if (debug) {
    console.log("\n--- RESPONSE ---");
    console.log("Status:", res.status);
    console.log(Object.fromEntries(res.headers.entries()));
    console.log("Body length:", body.length);
  }

  return {
    status: res.status,
    headers: res.headers,
    body,
    hash: sha256(body),
    length: body.length,
  };
}

module.exports = { sendRequest };
