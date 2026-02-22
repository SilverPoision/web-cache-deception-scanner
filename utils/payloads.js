module.exports = [
  "/.css", // Path parameter
  "/nonexistent1.css", // Path parameter
  "/../nonexistent2.css", // Path traversal
  "/%2e%2e/nonexistent3.css", // Encoded path traversal
  "%0Anonexistent4.css", // Encoded Newline
  "%00nonexistent5.css", // Encoded Null Byte
  "%09nonexistent6.css", // Encoded Tab
  "%3Bnonexistent7.css", // Encoded Semicolon
  "%23nonexistent8.css", // Encoded Pound
  "%3Fname=valnonexistent9.css", // Encoded Question Mark
  "%26name=valnonexistent10.css", // Encoded Ampersand
  ";nonexistent11.css", // Semicolon
  "?nonexistent12.css", // Question Mark
  "&nonexistent13.css", // Ampersand
  "%0A%2f%2e%2e%2fresources%2fnonexistent1.css", // Encoded Path Traversal to static directory using Encoded Newline
  "%00%2f%2e%2e%2fresources%2fnonexistent2.css", // Encoded Path Traversal to static directory using Encoded Null Byte
  "%09%2f%2e%2e%2fresources%2fnonexistent3.css", // Encoded Path Traversal to static directory using Encoded Tab
  "%3B%2f%2e%2e%2fresources%2fnonexistent4.css", // Encoded Path Traversal to static directoryEncoded using Semicolon
  "%23%2f%2e%2e%2fresources%2fnonexistent5.css", // Encoded Path Traversal to static directory using Encoded Pound
  "%3F%2f%2e%2e%2fresources%2fnonexistent6.css", // Encoded Path Traversal to static directory using Encoded Question Mark
  "%26%2f%2e%2e%2fresources%2fnonexistent7.css", // Encoded Path Traversal to static directory using Encoded Ampersand
  ";%2f%2e%2e%2fresources%2fnonexistent8.css", // Encoded Path Traversal to static directory using Semicolon
  "?%2f%2e%2e%2fresources%2fnonexistent9.css", // Encoded Path Traversal to static directory using Question Mark
  "&%2f%2e%2e%2fresources%2fnonexistent10.css", // Encoded Path Traversal to static directory using Ampersand
  "%0A%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2frobots.txt", // Encoded Path Traversal to robots.txt using Encoded Newline
  "%00%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2frobots.txt", // Encoded Path Traversal to robots.txt directory using Encoded Null Byte
  "%09%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2frobots.txt", // Encoded Path Traversal to robots.txt directory using Encoded Tab
  "%3B%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2frobots.txt", // Encoded Path Traversal to robots.txt directoryEncoded using Semicolon
  "%23%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2frobots.txt", // Encoded Path Traversal to robots.txt directory using Encoded Pound
  "%3F%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2frobots.txt", // Encoded Path Traversal to robots.txt directory using Encoded Question Mark
  "%26%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2frobots.txt", // Encoded Path Traversal to robots.txt directory using Encoded Ampersand
  ";%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2frobots.txt", // Encoded Path Traversal to robots.txt directory using Semicolon
  "?%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2frobots.txt", // Encoded Path Traversal to robots.txt directory using Question Mark
  "&%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2frobots.txt", // Encoded Path Traversal to robots.txt directory using Ampersand
];
