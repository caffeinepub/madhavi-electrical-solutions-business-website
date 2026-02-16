# Publishing Guide for Madhavi Electrical Solutions

This document provides a concise runbook for building and publishing the Madhavi Electrical Solutions website.

## Pre-Publish Checklist

Before triggering a build, verify the following:

### 1. Asset Verification
- [ ] Confirm GIF assets are present in `frontend/public/assets/generated/`:
  - `hero-electrician-distribution-board.dim_1600x900.gif` (Hero section background - ultra-realistic electrician working animation)
  - Core service GIFs (5 files):
    - `service-home-wiring.dim_800x600.gif`
    - `service-emergency-repairs.dim_800x600.gif`
    - `service-fuse-panel-upgrades.dim_800x600.gif`
    - `service-led-light-fitting.dim_800x600.gif`
    - `service-appliance-installation.dim_800x600.gif`
  - Additional service GIFs (12 files for additional services)
  - Work video GIFs: `walking.dim_600x600.gif`, `working.dim_600x600.gif`
  - Logo: `madhavi-logo-transparent.dim_200x200.png`

### 2. Component Integration
- [ ] Verify `frontend/src/components/Hero.tsx` references `madhavi-logo-transparent.dim_200x200.png` and `hero-electrician-distribution-board.dim_1600x900.gif` as animated source
- [ ] Verify `frontend/src/components/Header.tsx` references `madhavi-logo-transparent.dim_200x200.png`
- [ ] Verify `frontend/src/components/Footer.tsx` references `madhavi-logo-transparent.dim_200x200.png`
- [ ] Verify `frontend/src/components/Hero.tsx` has proper reduced-motion fallback to static image
- [ ] Verify `frontend/src/components/Services.tsx` references all core and additional service GIFs
- [ ] Verify `frontend/src/lib/workVideoPhotos.ts` references only .jpg files (not .gif) for default montage images

### 3. Configuration
- [ ] Confirm contact details are correct:
  - Phone: 9953854470
  - WhatsApp: 9953854470
  - Business name: Madhavi Electrical Solutions
  - Location: Ghaziabad/Noida
- [ ] Verify all navigation links work (Home, Services, About Us, Contact)

### 4. Build Prerequisites
- [ ] Node.js and pnpm installed
- [ ] DFX (Internet Computer SDK) installed
- [ ] All dependencies installed (`pnpm install`)

## Build & Publish Flow

This project uses the Internet Computer (IC) platform for deployment. The build process is managed by the existing template tooling.

### Standard Build Process

1. **Generate Backend Bindings**
   ```bash
   dfx generate backend
   ```

2. **Build Frontend**
   ```bash
   pnpm build:skip-bindings
   ```
   This command:
   - Builds the React application with Vite
   - Copies environment configuration to dist folder
   - Outputs production-ready files to `frontend/dist/`

3. **Deploy to Internet Computer**
   ```bash
   dfx deploy
   ```
   This deploys both backend and frontend canisters to the IC network.

### Full Setup & Deploy (First Time)

If this is your first deployment or you need to set up from scratch:

