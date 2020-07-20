const crypto = require("crypto");

var decrypt = function decrypt(data, key) {
  data =
    "jjUGSk4ZaZ+d7XumG0q4SLn0SGKanjCRzSUcpOFtdJ6ANyOHpFJmeica87jbBhFbKF1Ab0dnhwnYJELrMtrAWDmQrBtWL+W64q81RzpZr98=";
  if (key == null) {
    key = crypto
      .createHash("sha256")
      .update("zG2nSeEfSHfvTCHy5LCcqtBbQehKNLXn")
      .digest();
  } else {
    key = crypto.createHash("sha256").update(key).digest();
  }
  let decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    key,
    new Uint8Array(16)
  );
  decipher.setAutoPadding(false);
  let decrypted = decipher.update(data, "base64", "utf8");
  return decrypted;
};

console.log(decrypt());
