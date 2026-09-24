#!/usr/bin/env python3
"""Process the client-supplied bunk bed photo with the established pipeline:
2x Lanczos upscale + unsharp mask, then save as WebP for the site.
Also produce a 13:10 derivative crop for the rooms grid (object-cover safe)."""
from PIL import Image, ImageFilter

SRC = "/home/z/my-project/assets-incoming/bunk-bed.jpg"
OUT = "/home/z/my-project/public/photos/bedroom.webp"

img = Image.open(SRC).convert("RGB")
print("source:", img.size)

# 2x Lanczos upscale (matches the site asset pipeline used for client photos)
up = img.resize((img.width * 2, img.height * 2), Image.LANCZOS)

# Unsharp mask to recover crispness after upscaling
up = up.filter(ImageFilter.UnsharpMask(radius=2, percent=110, threshold=2))

# Subtle saturation lift to match the warm, honest house palette
from PIL import ImageEnhance
up = ImageEnhance.Color(up).enhance(1.04)

up.save(OUT, "WEBP", quality=80, method=6)
print("saved:", OUT, up.size)

import os
print("bytes:", os.path.getsize(OUT) // 1024, "KB")
