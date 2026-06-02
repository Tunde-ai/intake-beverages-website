# Requirements: InTake Beverages Website Rebuild

**Defined:** 2026-06-02
**Core Value:** Communicate InTake's premium luxury identity — every section must feel high-end, cinematic, and intentional

## v1 Requirements

1:1 rebuild of the existing site (demowebsitedevelopmentnew.com/intakebeverages/) as static HTML/CSS/JS.

### Navigation

- [ ] **NAV-01**: Sticky header with InTake logo (cyan) in top-left position
- [ ] **NAV-02**: Navigation links for Home (active state) and Shop
- [ ] **NAV-03**: Social media icons (Facebook, Twitter, YouTube) in top-right
- [ ] **NAV-04**: Hamburger menu toggle for mobile responsive navigation
- [ ] **NAV-05**: Smooth scroll navigation to page sections

### Hero

- [ ] **HERO-01**: Full-height hero section with background video/motion (waterfall with tropical vegetation)
- [ ] **HERO-02**: Dark teal semi-transparent overlay gradient for text readability
- [ ] **HERO-03**: Centered "InTake" + "ENERGY + WATER" text with glass/metallic effect
- [ ] **HERO-04**: Tagline "ENERGY THAT REFLECTS YOU" below hero text
- [ ] **HERO-05**: Subheading about purpose of existence (energy, impact, growth)

### Benefits

- [ ] **BENF-01**: "What You Intake?" four-column card layout (Hydration, Energy, Boost, Sweeteners)
- [ ] **BENF-02**: Cards with semi-transparent backgrounds, centered text, heading + description
- [ ] **BENF-03**: Key Benefits three-column section (Increases, Sustains, Reflects)
- [ ] **BENF-04**: Each benefit column lists three sub-items (Energy/Hydration/Vitality, Endurance/Strength/Growth, Performance/Image/Elevation)

### Marquee

- [ ] **MARQ-01**: Infinite horizontal scrolling marquee with "LUXURY • LIFESTYLE • CULTURE • PERFORMANCE"
- [ ] **MARQ-02**: Cyan text on dark background, continuous loop animation

### Campaign

- [ ] **CAMP-01**: "InTake Paris - Apricot Mist" two-column product campaign section
- [ ] **CAMP-02**: Left column with poetic product story about Paris, apricot, and elderflower
- [ ] **CAMP-03**: Rich narrative-driven copy with italicized accent text for emphasis
- [ ] **CAMP-04**: Links to product pages from campaign section

### Overview

- [ ] **OVER-01**: Company overview section with background on InTake Global & Beverages
- [ ] **OVER-02**: Founder information and mission statement

### About

- [ ] **ABOU-01**: "We Serve The Best And Healthy Juice" headline section
- [ ] **ABOU-02**: Feature bullets: Fresh Juice, Many Variants, Hygienic Tools
- [ ] **ABOU-03**: "About Us" call-to-action link

### Statistics

- [ ] **STAT-01**: Four metrics displayed: Best Award, Happy Customer, Team Juicer, Hygienic
- [ ] **STAT-02**: Animated number counters or visual display for each metric

### Products

- [ ] **PROD-01**: "Taste Your Favourite Juice" products section heading
- [ ] **PROD-02**: Four-column responsive product grid
- [ ] **PROD-03**: Product cards with image, product name, price ($32-35 range)
- [ ] **PROD-04**: Visual "Add to cart" buttons on cards (non-functional, brand display only)

### Testimonials

- [ ] **TEST-01**: "Our Best Customers Says" testimonials section
- [ ] **TEST-02**: Carousel/slider with customer review cards
- [ ] **TEST-03**: Cards include quote text, customer photo, name, title (CEO)
- [ ] **TEST-04**: Auto-rotating slides with navigation controls
- [ ] **TEST-05**: Multiple customers: Andre Cole, Celine Gion, John Doe

### Ingredients

- [ ] **INGR-01**: "Inside Our Fresh Juice" ingredients section
- [ ] **INGR-02**: Four ingredient cards: Folate (11%), Vitamin C (83%), Potassium (20%), Thiamine B1 (19%)
- [ ] **INGR-03**: Four-column grid layout with percentage values

### Contact

- [ ] **CONT-01**: Two-column contact section layout
- [ ] **CONT-02**: Left column with Paris address, USA address, email info
- [ ] **CONT-03**: Right column with phone number and contact form
- [ ] **CONT-04**: Contact form fields: Name, Email, Subject, Message with submit button
- [ ] **CONT-05**: Contact form delivers submissions to email (via Formspree or similar)

### Footer

- [ ] **FOOT-01**: Quick Links section: About, Product, Campaigns, Contact
- [ ] **FOOT-02**: Campaigns list: Intake Paris, Intake Lux, Intake MVP, Intake Rescue, Intake 360, Intake Electric
- [ ] **FOOT-03**: Newsletter subscription form with email input and Subscribe button
- [ ] **FOOT-04**: Newsletter form delivers to email
- [ ] **FOOT-05**: Copyright: "The Worlds Brand & InTake Global. Copyright © 2026. All rights reserved."
- [ ] **FOOT-06**: Tagline: "Fuel from within, intake the energy that reflects you"

### Design System

- [ ] **DSGN-01**: Primary teal/cyan (#00BCD4) for logo, accents, links throughout
- [ ] **DSGN-02**: Dark navy (#1a3a3a) for backgrounds and text
- [ ] **DSGN-03**: Light cyan (#4DD0E1) for highlights and hover states
- [ ] **DSGN-04**: Semi-transparent dark overlays (rgba(0,0,0,0.4)) over images for text readability
- [ ] **DSGN-05**: Glass/metallic text effects on hero section
- [ ] **DSGN-06**: Bold sans-serif headings (24-48px), regular body text (14-16px), italicized accent text

### Responsive & Layout

- [ ] **RESP-01**: Mobile responsive design at 320px breakpoint (stacked columns, hamburger menu)
- [ ] **RESP-02**: Tablet responsive design at 768px breakpoint
- [ ] **RESP-03**: Desktop full-width layout at 1200px+ with max-width content containers
- [ ] **RESP-04**: Full-width background sections with centered content containers

### Assets

- [ ] **ASST-01**: All images pulled from existing live site and optimized
- [ ] **ASST-02**: Background video/motion asset pulled from existing site
- [ ] **ASST-03**: Customer testimonial photos pulled from existing site
- [ ] **ASST-04**: Product images pulled from existing site

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Performance & Optimization

- **PERF-01**: Lazy loading for below-fold images
- **PERF-02**: WebP/AVIF image format optimization with fallbacks
- **PERF-03**: Minified CSS and JavaScript for production
- **PERF-04**: Lighthouse performance score target 90+

### Accessibility

- **ACCS-01**: Semantic HTML structure throughout
- **ACCS-02**: Alt text for all images
- **ACCS-03**: ARIA labels for interactive elements
- **ACCS-04**: Keyboard navigation support
- **ACCS-05**: WCAG 2.1 AA color contrast compliance

### Advanced Interactions

- **ADVN-01**: Parallax scroll effects on content sections
- **ADVN-02**: GSAP ScrollTrigger animations for section reveals
- **ADVN-03**: Scroll-triggered animated number counters for statistics

### Future Sections

- **FUTR-01**: Athlete/ambassador partnership showcase
- **FUTR-02**: Sustainability/impact story section
- **FUTR-03**: Blog/content library
- **FUTR-04**: Product variant deep-dive pages

## Out of Scope

| Feature | Reason |
|---------|--------|
| Ecommerce / cart / checkout | Brand site only — purchases handled elsewhere |
| WordPress or any CMS | Static HTML/CSS/JS for direct control and performance |
| User accounts / authentication | Not needed for brand site |
| Backend server application | Forms via email service, no server needed |
| Mobile app | Web only |
| Real-time chat | Not part of current site |
| Search functionality | Single-page site, not needed |
| Multi-language support | English only |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| DSGN-01 | Phase 1 | Pending |
| DSGN-02 | Phase 1 | Pending |
| DSGN-03 | Phase 1 | Pending |
| DSGN-04 | Phase 1 | Pending |
| DSGN-05 | Phase 1 | Pending |
| DSGN-06 | Phase 1 | Pending |
| RESP-01 | Phase 1 | Pending |
| RESP-02 | Phase 1 | Pending |
| RESP-03 | Phase 1 | Pending |
| RESP-04 | Phase 1 | Pending |
| ASST-01 | Phase 2 | Pending |
| ASST-02 | Phase 2 | Pending |
| ASST-03 | Phase 2 | Pending |
| ASST-04 | Phase 2 | Pending |
| NAV-01 | Phase 3 | Pending |
| NAV-02 | Phase 3 | Pending |
| NAV-03 | Phase 3 | Pending |
| NAV-04 | Phase 3 | Pending |
| NAV-05 | Phase 3 | Pending |
| HERO-01 | Phase 3 | Pending |
| HERO-02 | Phase 3 | Pending |
| HERO-03 | Phase 3 | Pending |
| HERO-04 | Phase 3 | Pending |
| HERO-05 | Phase 3 | Pending |
| BENF-01 | Phase 4 | Pending |
| BENF-02 | Phase 4 | Pending |
| BENF-03 | Phase 4 | Pending |
| BENF-04 | Phase 4 | Pending |
| MARQ-01 | Phase 4 | Pending |
| MARQ-02 | Phase 4 | Pending |
| CAMP-01 | Phase 4 | Pending |
| CAMP-02 | Phase 4 | Pending |
| CAMP-03 | Phase 4 | Pending |
| CAMP-04 | Phase 4 | Pending |
| OVER-01 | Phase 4 | Pending |
| OVER-02 | Phase 4 | Pending |
| ABOU-01 | Phase 4 | Pending |
| ABOU-02 | Phase 4 | Pending |
| ABOU-03 | Phase 4 | Pending |
| STAT-01 | Phase 4 | Pending |
| STAT-02 | Phase 4 | Pending |
| PROD-01 | Phase 5 | Pending |
| PROD-02 | Phase 5 | Pending |
| PROD-03 | Phase 5 | Pending |
| PROD-04 | Phase 5 | Pending |
| TEST-01 | Phase 5 | Pending |
| TEST-02 | Phase 5 | Pending |
| TEST-03 | Phase 5 | Pending |
| TEST-04 | Phase 5 | Pending |
| TEST-05 | Phase 5 | Pending |
| INGR-01 | Phase 5 | Pending |
| INGR-02 | Phase 5 | Pending |
| INGR-03 | Phase 5 | Pending |
| CONT-01 | Phase 6 | Pending |
| CONT-02 | Phase 6 | Pending |
| CONT-03 | Phase 6 | Pending |
| CONT-04 | Phase 6 | Pending |
| CONT-05 | Phase 6 | Pending |
| FOOT-01 | Phase 6 | Pending |
| FOOT-02 | Phase 6 | Pending |
| FOOT-03 | Phase 6 | Pending |
| FOOT-04 | Phase 6 | Pending |
| FOOT-05 | Phase 6 | Pending |
| FOOT-06 | Phase 6 | Pending |

**Coverage:**
- v1 requirements: 58 total
- Mapped to phases: 58
- Unmapped: 0 ✓

---
*Requirements defined: 2026-06-02*
*Last updated: 2026-06-02 after roadmap creation — all 58 requirements mapped to 6 phases*
