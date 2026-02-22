const fs = require("fs");
const { URL } = require("url");

function parseRawRequest(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.split("\n");

  const [method, path] = lines[0].trim().split(" ");
  let headers = {};
  let body = "";
  let host = "";

  let i = 1;
  for (; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) break;
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const val = line.slice(idx + 1).trim();
    headers[key] = val;
    if (key.toLowerCase() === "host") host = val;
  }

  body = lines.slice(i + 1).join("\n");
  const scheme = host.includes("localhost") ? "http" : "https";
  const url = new URL(`${scheme}://${host}${path}`);

  return { method, url, headers, body };
}

module.exports = { parseRawRequest };
