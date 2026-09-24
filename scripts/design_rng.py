"""gpt-taste pre-flight: deterministic randomization for the C4 rebuild.
Seed = character count of the user's core request text (gpt-taste rule 1).
Run once; output is binding for the design_plan.
"""
import random

CORE_REQUEST = """
You deployed it to the wrong vercel i want you to delete it fro the tangison vercel
annd pey it here Targis and also wi have all of the assetts readynow but I would
rate this site a 2 on a scale of one to ten get all of the deaign taste and ui and
moredern awwards site taste aswell as rth vercells beat practice skills and audit
thia site Find atleast 12 skills to help you do so i cut you of here continue and
fix the bugs like ge scroll to top widget and the whatsapp widget and the cooywright
the notion carasols and also the himbergarer nmanu can ve customsed the search
system slider effercts grids and everything vlcan be awesomely build borrow
structure from here and make it nicely multiple pages and follow the gpt-taste
skill instructions now Just introduce a minimalism era and the copy must be on point
"""

seed = len(CORE_REQUEST.strip())
rng = random.Random(seed)

HEROES = ["Cinematic Center", "Artistic Asymmetry", "Editorial Split"]
FONTS = ["Satoshi", "Cabinet Grotesk", "Outfit", "Geist"]
COMPONENTS = [
    "Inline Typography Images",
    "Horizontal Accordions",
    "Infinite Marquee",
    "Testimonial Carousel",
]
GSAP_PARADIGMS = [
    "Scroll Pinning (title pinned, gallery scrolls)",
    "Image Scale & Fade Scroll",
    "Scrubbing Text Reveals",
    "Card Stacking",
]

hero = rng.choice(HEROES)
font = rng.choice(FONTS)
comps = rng.sample(COMPONENTS, 3)
gsap = rng.sample(GSAP_PARADIGMS, 2)

print(f"seed (prompt char count) = {seed}")
print(f"hero   -> {hero}")
print(f"font   -> {font}")
print(f"comps  -> {comps}")
print(f"gsap   -> {gsap}")
