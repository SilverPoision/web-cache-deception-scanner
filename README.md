# Web Cache Deception Tester (WCD)

## Features

- Accepts raw HTTP requests (Burp-style .txt)
- Supports authenticated → unauthenticated cache priming flow
- User-specified cache indicator header
- Large payload set targeting path confusion & normalization
- Cryptographic response fingerprinting (SHA-256 + length)
- 404-safe logic to avoid cached error false positives
- Full request & response debug output
- Modular architecture (parser, detector, HTTP, utils)
- Stops execution only after confirmed cache deception

## Installation

### Requirements
- Node.js 14+
- npm

### Dependencies

```bash
npm install node-fetch@2 minimist
or
npm install
```

## Usage

```bash
node index.js
--req request.txt
--ch X-Cache
```

### Flags

```
--req	Raw HTTP request file
--ch	Cache indicator header (e.g. X-Cache, CF-Cache-Status)
--debug	Print full request & response for each payload
```

### Request File (request.txt) Requirements

The request.txt file must contain an authenticated endpoint along with the cookies or authorization headers that represent a logged-in user. This is critical for accurately testing Web Cache Deception, as the attack relies on caching user-specific or sensitive responses.

## Example

```bash
node index.js --req account.txt --ch X-Cache
```

### High-level approach

1. Identify cache behavior using headers
2. Prime the cache using authenticated requests
3. Retrieve the same resource without authentication
4. Confirm deception using strict response equivalence

### Step-by-step Logic

1. Parse raw HTTP request
- Preserves headers, cookies, auth context
2. Send baseline authenticated request
- Stores response hash & length
3. Accept cache header from user
- Used as the authoritative cache indicator
4. Iterate over payloads
- Modify request path using cache confusion payloads
5. Prime cache (authenticated)
- Ensure cache header is present
- Reject 404 responses
6. Unauthenticated fetch
- Cookies & auth headers removed
7. Verification
- Compare authenticated vs unauthenticated responses
- Confirm only if:
- Cache header present
- Status ≠ 404
- Hash & length match
8. Stop execution on confirmed deception

## Payload Strategy

Payloads target discrepancies between:

- CDN cache key normalization
- Backend routing logic

Examples:

- Path parameters (;, ?, &)
- Encoded traversal
- Static file extensions
- Encoded delimiters

Payloads are applied incrementally to the original request path.

## Report Output

- Exact payload used
- Cache headers before/after
- Authenticated response hash
- Unauthenticated response hash
- Reproduction steps

### Example Repro Steps

```text
1. Login to the application
2. GET https://target.com/account;.css

3. Logout / remove cookies
4. GET https://target.com/account;.css

```

## Debug Mode

When --debug is enabled, the tool prints:

- Full HTTP request
- Full response headers
- Status codes
- Response body length

This is useful for:

- CDN normalization analysis
- False positive debugging
- Triager validation

## Improvements

1. Add support for custom cookies and headers, or parse full raw requests
2. Specify requests fully via flags (headers, cookies)
3. Add a function to auto-detect cache headers
4. Enforce Age header constraints (TTL progression)
5. Extract a user-specific indicator from authenticated responses and verify its presence in cached responses
6. Add concurrency / multi-threading
7. Explicit testing without cookies
8. Expand payloads for CDN and backend normalization differences
9. Add a rate limiter to avoid WAF/CDN bans
10. Extend the tool to identify cache deception without authentication, by analyzing unauthenticated cache behavior and content variance
