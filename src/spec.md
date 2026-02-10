# Specification

## Summary
**Goal:** Improve the electrician website’s clarity and conversions with simplified navigation, clearer service presentation, stronger CTAs, testimonials, basic SEO, and better performance/security.

**Planned changes:**
- Simplify primary navigation (desktop + mobile) and footer quick links to exactly: Home, Services, About Us, Contact; enable smooth scrolling to each section with proper offset for the fixed header.
- Rework the Services section to prominently show 5 distinct service entries: Home Wiring, Emergency Repairs, Fuse/Panel Upgrades, Light Fitting/LED Work, Appliance Installation; each with title, short description, icon, professional image, descriptive alt text, and a contact/booking CTA.
- Add prominent CTAs (“Get a Free Quote”, “Book Now”, “Call Us”) across major sections; ensure “Call Us” uses tel:9953854470.
- Add a floating always-available contact CTA with Call and WhatsApp actions that does not obstruct key content (especially the Contact form).
- Add a testimonials/social proof section with at least 3 static reviews including names and star ratings, placed logically in the single-page flow.
- Apply basic on-page SEO updates: keyword-focused page title and meta description (English), and meaningful English alt text for key imagery.
- Improve performance by optimizing image loading (lazy-load below-the-fold images) and ensuring images are appropriately sized for their containers.
- Ensure secure linking/no mixed content by using only https external URLs (e.g., WhatsApp) and removing any http references.
- Add and wire new professional static images under `frontend/public/assets/generated` for Hero/Services/About (team) as appropriate.

**User-visible outcome:** Visitors can quickly navigate a single-page site (smooth scroll), clearly understand the 5 core services with visuals, see trust-building testimonials, and easily contact via prominent CTAs (including call/WhatsApp), with improved SEO, faster loading, and no mixed-content warnings.
