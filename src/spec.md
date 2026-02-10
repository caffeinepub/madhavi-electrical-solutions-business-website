# Specification

## Summary
**Goal:** Add 5 premium, ultra-realistic looping electrician animations and integrate them into key site sections with reduced-motion fallbacks.

**Planned changes:**
- Generate 5 new ultra-realistic, seamless-loop GIF animation assets (hero, services panel wiring close-up, emergency repair, LED ceiling light installation, trust/quality panel inspection) with no embedded text/logos.
- Update the Home page Hero section to use the new premium hero animation as the background media while preserving existing overlay gradients, CTA behavior, and responsiveness.
- Integrate the new Services-related animations into the Services UI in prominent, style-consistent placements (panel/wiring, emergency repair highlight, and light fitting/LED work), keeping existing text and CTAs unchanged.
- Add a trust/quality animation placement in a brand-building section (e.g., About media area or a dedicated trust/quality subsection) with any new user-facing text in English.
- Ensure newly added animations respect prefers-reduced-motion via component-level non-animated fallback behavior (without editing immutable hook files).

**User-visible outcome:** The site displays new premium looping electrician animations in the Hero and key sections (Services and trust/quality) with responsive layout and accessible reduced-motion behavior.
