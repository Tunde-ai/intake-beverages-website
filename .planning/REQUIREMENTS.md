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
| NAV-01 | TBD | Pending |
| NAV-02 | TBD | Pending |
| NAV-03 | TBD | Pending |
| NAV-04 | TBD | Pending |
| NAV-05 | TBD | Pending |
| HERO-01 | TBD | Pending |
| HERO-02 | TBD | Pending |
| HERO-03 | TBD | Pending |
| HERO-04 | TBD | Pending |
| HERO-05 | TBD | Pending |
| BENF-01 | TBD | Pending |
| BENF-02 | TBD | Pending |
| BENF-03 | TBD | Pending |
| BENF-04 | TBD | Pending |
| MARQ-01 | TBD | Pending |
| MARQ-02 | TBD | Pending |
| CAMP-01 | TBD | Pending |
| CAMP-02 | TBD | Pending |
| CAMP-03 | TBD | Pending |
| CAMP-04 | TBD | Pending |
| OVER-01 | TBD | Pending |
| OVER-02 | TBD | Pending |
| ABOU-01 | TBD | Pending |
| ABOU-02 | TBD | Pending |
| ABOU-03 | TBD | Pending |
| STAT-01 | TBD | Pending |
| STAT-02 | TBD | Pending |
| PROD-01 | TBD | Pending |
| PROD-02 | TBD | Pending |
| PROD-03 | TBD | Pending |
| PROD-04 | TBD | Pending |
| TEST-01 | TBD | Pending |
| TEST-02 | TBD | Pending |
| TEST-03 | TBD | Pending |
| TEST-04 | TBD | Pending |
| TEST-05 | TBD | Pending |
| INGR-01 | TBD | Pending |
| INGR-02 | TBD | Pending |
| INGR-03 | TBD | Pending |
| CONT-01 | TBD | Pending |
| CONT-02 | TBD | Pending |
| CONT-03 | TBD | Pending |
| CONT-04 | TBD | Pending |
| CONT-05 | TBD | Pending |
| FOOT-01 | TBD | Pending |
| FOOT-02 | TBD | Pending |
| FOOT-03 | TBD | Pending |
| FOOT-04 | TBD | Pending |
| FOOT-05 | TBD | Pending |
| FOOT-06 | TBD | Pending |
| DSGN-01 | TBD | Pending |
| DSGN-02 | TBD | Pending |
| DSGN-03 | TBD | Pending |
| DSGN-04 | TBD | Pending |
| DSGN-05 | TBD | Pending |
| DSGN-06 | TBD | Pending |
| RESP-01 | TBD | Pending |
| RESP-02 | TBD | Pending |
| RESP-03 | TBD | Pending |
| RESP-04 | TBD | Pending |
| ASST-01 | TBD | Pending |
| ASST-02 | TBD | Pending |
| ASST-03 | TBD | Pending |
| ASST-04 | TBD | Pending |

**Coverage:**
- v1 requirements: 58 total
- Mapped to phases: 0
- Unmapped: 58 ⚠️

---
*Requirements defined: 2026-06-02*
*Last updated: 2026-06-02 after initial definition*
