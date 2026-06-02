# Roadmap: InTake Beverages Website Rebuild

## Overview

Rebuild the InTake Beverages LLC brand website as clean static HTML/CSS/JS — a 1:1 match of the current WordPress/WooCommerce site with full control over the codebase. Six phases move from foundation outward: design system and scaffold first, then assets pulled from the live site, then sections rendered top-to-bottom (navigation and hero, brand story middle, product and social proof, forms and footer). Each phase delivers a verifiable slice of the page.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation & Design System** - HTML scaffold, CSS design system tokens, responsive framework
- [ ] **Phase 2: Assets** - Pull and optimize all images, video, and media from the live site
- [ ] **Phase 3: Navigation & Hero** - Sticky header, smooth scroll, full-height video hero section
- [ ] **Phase 4: Brand Story Sections** - Benefits, marquee, campaign, overview, about, statistics
- [ ] **Phase 5: Products, Testimonials & Ingredients** - Product grid, testimonials carousel, ingredients cards
- [ ] **Phase 6: Contact, Footer & Launch** - Contact form, footer, newsletter subscription, live deployment

## Phase Details

### Phase 1: Foundation & Design System
**Goal**: A working HTML/CSS scaffold exists with the design system applied — color tokens, typography, spacing, responsive breakpoints, and BEM component structure ready for all sections to be built into.
**Depends on**: Nothing (first phase)
**Requirements**: DSGN-01, DSGN-02, DSGN-03, DSGN-04, DSGN-05, DSGN-06, RESP-01, RESP-02, RESP-03, RESP-04
**Success Criteria** (what must be TRUE):
  1. Opening the HTML file in a browser shows a blank page with the correct dark navy (#1a3a3a) background and no errors in the console
  2. Resizing the browser from 320px to 1200px+ causes layout to reflow correctly at each breakpoint with no overflow or broken containers
  3. CSS custom properties for teal/cyan (#00BCD4), dark navy (#1a3a3a), and light cyan (#4DD0E1) are defined and applied to a sample heading to confirm the design tokens work
  4. BEM file structure and component naming convention is in place and documented in a comment block
**Plans**: 1/1 complete
**UI hint**: yes

### Phase 2: Assets
**Goal**: Every image, video, and media asset from the existing live site is downloaded, renamed, and optimized — ready to drop into HTML `src` attributes without hunting for URLs.
**Depends on**: Phase 1
**Requirements**: ASST-01, ASST-02, ASST-03, ASST-04
**Success Criteria** (what must be TRUE):
  1. An `assets/` directory exists with organized subdirectories (images/, video/, testimonials/, products/) containing all pulled media files
  2. The background waterfall video file plays locally in a browser `<video>` tag at desktop resolution with a poster image fallback
  3. All four product images open correctly in a browser at their pulled resolution
  4. All three customer testimonial photos open correctly as local files
**Plans**: TBD

### Phase 3: Navigation & Hero
**Goal**: A visitor landing on the site sees a full-height cinematic hero with background video and brand text, and can navigate the page via a sticky header — the first impression of the luxury brand is established.
**Depends on**: Phase 2
**Requirements**: NAV-01, NAV-02, NAV-03, NAV-04, NAV-05, HERO-01, HERO-02, HERO-03, HERO-04, HERO-05
**Success Criteria** (what must be TRUE):
  1. The page loads with a full-height hero section where the waterfall video plays looped as a background with a dark teal semi-transparent overlay
  2. The centered hero text ("InTake" + "ENERGY + WATER") renders with a glass/metallic effect, and "ENERGY THAT REFLECTS YOU" tagline appears below it
  3. The sticky header stays fixed at the top as the user scrolls, showing the cyan logo, Home/Shop nav links, and Facebook/Twitter/YouTube icons
  4. Clicking the hamburger menu icon on a 320px viewport opens a mobile navigation panel
  5. Clicking a nav link smooth-scrolls to the target section (once other sections exist)
**Plans**: TBD
**UI hint**: yes

### Phase 4: Brand Story Sections
**Goal**: The narrative middle of the page is complete — a visitor scrolling past the hero encounters the brand's story through benefit cards, the scrolling marquee, the Paris campaign, company overview, about section, and statistics, all matching the live site's layout and copy.
**Depends on**: Phase 3
**Requirements**: BENF-01, BENF-02, BENF-03, BENF-04, MARQ-01, MARQ-02, CAMP-01, CAMP-02, CAMP-03, CAMP-04, OVER-01, OVER-02, ABOU-01, ABOU-02, ABOU-03, STAT-01, STAT-02
**Success Criteria** (what must be TRUE):
  1. Four "What You Intake?" benefit cards (Hydration, Energy, Boost, Sweeteners) display in a four-column grid with semi-transparent backgrounds and heading + description text
  2. The infinite marquee "LUXURY • LIFESTYLE • CULTURE • PERFORMANCE" scrolls continuously without stuttering in cyan text on a dark background
  3. The "InTake Paris - Apricot Mist" section renders as a two-column layout with the poetic product story and italicized accent copy visible
  4. The statistics row displays all four metrics (Best Award, Happy Customer, Team Juicer, Hygienic) with their numeric values
  5. The "We Serve The Best And Healthy Juice" section shows the three feature bullets (Fresh Juice, Many Variants, Hygienic Tools) and an "About Us" CTA link
**Plans**: TBD
**UI hint**: yes

### Phase 5: Products, Testimonials & Ingredients
**Goal**: The social proof and product showcase sections are complete — a visitor can see the product grid, read customer testimonials in a working carousel, and view the ingredients breakdown, matching the live site's layout.
**Depends on**: Phase 4
**Requirements**: PROD-01, PROD-02, PROD-03, PROD-04, TEST-01, TEST-02, TEST-03, TEST-04, TEST-05, INGR-01, INGR-02, INGR-03
**Success Criteria** (what must be TRUE):
  1. Four product cards display in a responsive grid with product image, name, price ($32-35), and a visual "Add to cart" button (non-functional)
  2. The testimonials carousel shows customer review cards (quote text, photo, name, title) and auto-rotates between Andre Cole, Celine Gion, and John Doe
  3. Navigation controls on the testimonials carousel allow manual advancement between slides
  4. Four ingredient cards (Folate 11%, Vitamin C 83%, Potassium 20%, Thiamine B1 19%) display in a four-column grid with percentage values visible
**Plans**: TBD
**UI hint**: yes

### Phase 6: Contact, Footer & Launch
**Goal**: The page is complete and live — the contact form and newsletter subscription actually deliver email, the footer is rendered with all links and copy, and the site is deployed to a public URL.
**Depends on**: Phase 5
**Requirements**: CONT-01, CONT-02, CONT-03, CONT-04, CONT-05, FOOT-01, FOOT-02, FOOT-03, FOOT-04, FOOT-05, FOOT-06
**Success Criteria** (what must be TRUE):
  1. The contact section shows a two-column layout: left column with Paris address, USA address, and email info; right column with phone number and a form (Name, Email, Subject, Message fields)
  2. Submitting the contact form with valid inputs sends an email delivery and shows a success message on the page
  3. The footer renders Quick Links (About, Product, Campaigns, Contact), the six Campaigns list items, newsletter form, copyright line, and tagline
  4. Submitting the newsletter form with a valid email address delivers to email and shows a confirmation state
  5. The site loads at its public URL (Netlify or Vercel) and all sections render correctly in Chrome, Firefox, Safari, and Edge
**Plans**: TBD
**UI hint**: yes

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Design System | 1/1 | Complete | 2026-06-02 |
| 2. Assets | 0/TBD | Not started | - |
| 3. Navigation & Hero | 0/TBD | Not started | - |
| 4. Brand Story Sections | 0/TBD | Not started | - |
| 5. Products, Testimonials & Ingredients | 0/TBD | Not started | - |
| 6. Contact, Footer & Launch | 0/TBD | Not started | - |
