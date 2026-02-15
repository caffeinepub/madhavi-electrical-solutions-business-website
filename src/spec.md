# Specification

## Summary
**Goal:** Make the Work Video section reliably show content by supporting local video upload with inline playback, and ensuring the default photo montage has robust fallbacks when assets fail to load.

**Planned changes:**
- Add a local video file picker in the Work Video section (e.g., .mp4/.webm) and render the selected file in an inline HTML5 video player with standard controls.
- Add a clear control to remove/clear the uploaded video and revert back to the default montage/placeholder experience.
- Improve the default montage reliability by validating referenced asset paths and adding an English fallback UI if montage images are missing or fail to load (no blank/black canvas; no crashes).
- Update the Work Video UI labels so it’s obvious whether the user is viewing an uploaded video or the photo montage, while keeping the section responsive and consistent with existing styling.

**User-visible outcome:** Users can upload and play a real work video directly on the page, clearly see whether they’re viewing an uploaded video or the montage, and if montage assets fail to load they see a helpful English fallback message instead of a broken/blank section.
