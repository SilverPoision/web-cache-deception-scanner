const crypto = require("crypto");

function sha256(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function debugLog(debug, title, data) {
  if (!debug) return;

  console.log(`\n===== ${title} =====`);
  console.log(data);
  console.log("===== END =====\n");
}

module.exports = { sha256, sleep, debugLog };
