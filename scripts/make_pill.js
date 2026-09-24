// Small decorative pill derivative for the bento heading background image.
const sharp = require("sharp");
sharp("public/photos/kitchen-a.webp")
  .resize(320, 200, { fit: "cover", position: "attention" })
  .webp({ quality: 60 })
  .toFile("public/photos/pill-kitchen.webp")
  .then((i) => console.log("pill:", i.size, "bytes"));
