# InTake Beverages — Brand Website Rebuild

## What This Is

A rebuild of the InTake Beverages LLC website — a luxury energy drink brand site with a modern, nature-inspired aesthetic featuring background video, motion effects, scrolling animations, and a storytelling-driven layout. This is a brand/marketing site (no ecommerce), rebuilt as clean static HTML/CSS/JS for direct control and maintainability.

## Core Value

Communicate InTake's premium luxury identity — every section must feel high-end, cinematic, and intentional. The site sells the brand, not the product directly.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Rebuild all sections from the current site with matching design and layout
- [ ] Full-height hero with background video/motion, overlay gradient, centered brand text
- [ ] "What You Intake?" four-column benefit cards (Hydration, Energy, Boost, Sweeteners)
- [ ] Infinite scrolling marquee ("LUXURY • LIFESTYLE • CULTURE • PERFORMANCE")
- [ ] Key Benefits three-column section (Increases, Sustains, Reflects)
- [ ] "InTake Paris - Apricot Mist" product campaign section with narrative copy
- [ ] Company overview section
- [ ] Contact section with two-column layout (addresses + working contact form with email delivery)
- [ ] "We Serve The Best" about section with feature bullets and CTA
- [ ] Statistics section (Best Award, Happy Customer, Team Juicer, Hygienic)
- [ ] Products showcase grid (4-column, visual only — no cart functionality)
- [ ] Testimonials carousel/slider with customer reviews
- [ ] Ingredients section with percentage cards (Folate, Vitamin C, Potassium, Thiamine)
- [ ] Sticky header with logo, nav links (Home, Shop), social icons, hamburger menu
- [ ] Footer with quick links, campaigns list, newsletter subscription form, copyright
- [ ] Design system: teal/cyan (#00BCD4) primary, dark navy (#1a3a3a) backgrounds, glass/metallic text effects
- [ ] Responsive design: mobile (320px), tablet (768px), desktop (1200px+)
- [ ] Background video and motion effects matching current site
- [ ] Smooth scroll navigation and section transitions
- [ ] Pull and optimize all images/videos from the existing live site
- [ ] Newsletter subscription form (email capture with email delivery)
- [ ] Accessibility: semantic HTML, alt text, ARIA labels, keyboard navigation

### Out of Scope

- Ecommerce / cart / checkout / payment processing — brand site only
- WordPress or any CMS — static HTML/CSS/JS for direct control
- Backend/server application — forms handled via email service (Formspree, Resend, or similar)
- Mobile app
- Blog or content management system
- User accounts or authentication

## Context

InTake Beverages LLC is a luxury energy drink company. The current site lives at demowebsitedevelopmentnew.com/intakebeverages/ and was built by an external developer on WordPress/WooCommerce. Rather than wait on the developer for updates, this rebuild gives direct control over the codebase. The rebuild should match the current site's design and content closely — this is a 1:1 rebuild in a cleaner stack, not a redesign. The site will deploy to a new domain. All assets (images, videos) will be pulled from the existing live site.

## Constraints

- **Stack**: HTML5, CSS3, vanilla JavaScript — no frameworks, no CMS
- **Design fidelity**: Must closely match the current live site's look and feel
- **Assets**: Must be pulled from the existing site (no original source files available)
- **Forms**: Contact form and newsletter subscription must deliver to email
- **Performance**: Optimized images, lazy loading, minified assets
- **Browser support**: Chrome, Firefox, Safari, Edge (latest versions)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Static HTML/CSS/JS over React/Next.js | Brand site with no dynamic content — framework adds unnecessary complexity | — Pending |
| No ecommerce | Brand/marketing focus; purchases happen through other channels | — Pending |
| Pull assets from live site | No access to original source files from developer | — Pending |
| Email-based form handling | Simple, no backend needed — use a service like Formspree or Resend | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-06-02 after initialization*
