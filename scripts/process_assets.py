#!/usr/bin/env python3
"""
C4 asset pipeline: filebin uploads -> optimized web assets.
- 12 real photos: 2x Lanczos upscale + unsharp, WebP q78
- hero photo (garage w/ sign): 2.5x for full-bleed use
- 6 transparent cutouts: dehalo alpha (erode + smooth), 2x upscale, WebP alpha q90
- sample ochre accent from building photo for design token
"""
from PIL import Image, ImageFilter, ImageEnhance
import os, glob

BASE = "/home/z/my-project/upload/filebin"
OUT = "/home/z/my-project/public"
os.makedirs(f"{OUT}/photos", exist_ok=True)
os.makedirs(f"{OUT}/cutouts", exist_ok=True)

def upscale(im, factor):
    w, h = im.size
    return im.resize((round(w * factor), round(h * factor)), Image.LANCZOS)

def unsharp(im, percent=110, radius=1.6, threshold=2):
    return im.filter(ImageFilter.UnsharpMask(radius=radius, percent=percent, threshold=threshold))

def dehalo(im, smooth=0.8):
    """Erode alpha to kill white fringe, then smooth edge back."""
    r, g, b, a = im.convert("RGBA").split()
    a = a.filter(ImageFilter.MinFilter(3))
    a = a.filter(ImageFilter.MinFilter(3))
    a = a.filter(ImageFilter.GaussianBlur(smooth))
    out = Image.merge("RGBA", (r, g, b, a))
    return out

PHOTO_NAMES = {
    "01_Living_Common_Room.png": ("living-room", 2.0),
    "02_Bedroom.png": ("bedroom", 2.0),
    "03_Bathroom.png": ("bathroom", 2.0),
    "04_Kitchen_Angle_A.png": ("kitchen-a", 2.0),
    "05_Kitchen_Angle_B.png": ("kitchen-b", 2.0),
    "06_Toilet.png": ("toilet", 2.0),
    "07_Exterior_Roof_Entry.png": ("exterior-roof", 2.0),
    "08_Exterior_Wide_Garage.png": ("exterior-garage", 2.5),
    "09_Exterior_Close_Dishes.png": ("exterior-dishes", 2.0),
    "10_Exterior_Side_Wall_Geyser.png": ("exterior-geyser", 2.0),
    "11_Exterior_Back_Entrance.png": ("exterior-entrance", 2.0),
    "12_Exterior_Side_Path.png": ("exterior-path", 2.0),
}

print("== photos ==")
for f, (name, factor) in PHOTO_NAMES.items():
    p = f"{BASE}/individual-photos/C4-Individual-Photos/{f}"
    im = Image.open(p).convert("RGB")
    im = unsharp(upscale(im, factor))
    im.save(f"{OUT}/photos/{name}.webp", "WEBP", quality=78, method=6)
    kb = os.path.getsize(f"{OUT}/photos/{name}.webp") // 1024
    print(f"{name}.webp {im.size} {kb}KB")

print("== cutouts ==")
CUTOUTS = {
    "01_Student_Male_Backpack.png": ("student-backpack", 2.0),
    "02_Student_Female_Mug.png": ("student-mug", 2.0),
    "03_Building_Tower_Detail.png": ("tower", 2.0),
    "04a_Bed_Angle_A.png": ("bed-a", 2.0),
    "04b_Bed_Angle_B.png": ("bed-b", 2.0),
    "05_Couple_Walking.png": ("couple-walking", 2.0),
}
for f, (name, factor) in CUTOUTS.items():
    p = f"{BASE}/hero-cutouts/C4-Hero-Assets-Cutouts/{f}"
    im = Image.open(p)
    im = dehalo(im)
    im = upscale(im, factor)
    r, g, b, a = im.split()
    rgb = Image.merge("RGB", (r, g, b))
    rgb = unsharp(rgb, percent=90, radius=1.4)
    im = Image.merge("RGBA", (*rgb.split(), a))
    im.save(f"{OUT}/cutouts/{name}.webp", "WEBP", quality=90, method=6, lossless=False)
    kb = os.path.getsize(f"{OUT}/cutouts/{name}.webp") // 1024
    print(f"{name}.webp {im.size} {kb}KB")

print("== ochre sample ==")
im = Image.open(f"{BASE}/individual-photos/C4-Individual-Photos/07_Exterior_Roof_Entry.png").convert("RGB")
small = im.resize((80, 80))
from collections import Counter
cnt = Counter(small.getdata())
warm = [(c, n) for c, n in cnt.most_common(60) if c[0] > 130 and c[0] > c[2] + 30]
for c, n in warm[:5]:
    print("#%02X%02X%02X" % c, n)
