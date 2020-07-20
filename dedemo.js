const crypto = require("crypto");

var decrypt = function decrypt(data, key) {
  data =
    "jjUGSk4ZaZ+d7XumG0q4SI3aKQD1qGUdubcoqzVIGp4mrn2npFV9+cCW7o+3dOxMfWkJVOv339xsndM38pO+bD1EbIxgg2J+suNsICV6Qstd2LYoBBgNPioZ87ft3X10600FwysGsbvy12BdI6QiuW4t5Nhf3G/OaHJcWujN0g5ijh7+wl/U9oEUlIJboZRYimGXoERWU1HPyyqaTh3380xUFKmGLoxkc9vcIMLlQjZ8hc3FkrfHrjHW1GZ75PE3G/1PWy+/d/FqYDGybn6Z1kDqlbYWcnfno7HMaTwIyhv4ZaB941ZkEMCfo6HuvhH2cWBcyeSBp9mwFT+9MOoI4Q==";
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
