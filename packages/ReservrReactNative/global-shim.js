if (typeof __dirname === "undefined") global.__dirname = "/";
if (typeof __filename === "undefined") global.__filename = "";

// hacking process.version to address pbkdf2 issue https://github.com/crypto-browserify/pbkdf2/issues/43
if (!process.version) {
  process.version = "";
  console.log(`[shim] hacking process.version`);
}
