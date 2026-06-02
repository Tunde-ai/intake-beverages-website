# Technology Stack

**Project:** InTake Beverages — Luxury Brand Website Rebuild
**Researched:** 2026-06-02
**Confidence Level:** HIGH (verified against official docs, 2025 industry standards, current npm/library versions)

## Recommended Stack

### Core Framework & Markup
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| HTML5 | Latest | Semantic markup, video elements, form handling | Native browser support; accessibility via semantic tags; no framework overhead needed for static content |
| CSS3 | Latest | Layout, animations, responsive design, glass effects | Modern features (backdrop-filter, grid, flexbox) handle luxury design requirements; no preprocessor needed for clean static site |
| Vanilla JavaScript (ES6+) | Latest | DOM manipulation, form validation, animation triggers | Direct control over behavior; minimal payload; perfect for brand sites with targeted interactivity |

**Rationale:** The project is a brand/marketing site with no database, authentication, or dynamic content generation. HTML/CSS/JS gives maximum control with zero framework bloat. The site is static by design, so frameworks add unnecessary complexity and load time. This aligns directly with project constraints (no CMS, no backend app).

**Confidence:** HIGH — This is the explicit project constraint and standard practice for luxury brand sites.

---

### Animation & Motion Library
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **GSAP (GreenSock Animation Platform)** | 3.15.0 | Scroll-triggered animations, timeline choreography, easing | Industry standard for high-end websites; FREE (including ScrollTrigger plugin as of 2025); exceptional performance and browser support; handles complex sequences that pure CSS can't match; essential for luxury/cinematic feel |
| **ScrollTrigger (GSAP plugin)** | Included in GSAP 3.15.0 | Pin sections, scrub scrollbar to animation, parallax | Enables scroll-position-driven animations (background scrolling at different speeds than foreground); required for luxury site parallax effects; native Intersection Observer would only tell you when element enters viewport, not provide continuous scroll values |

**Alternatives Considered:**
- **Pure CSS Animations** — Sufficient for basic fades/slides, but insufficient for: scroll scrubbing (progress tied to scroll position), pinned elements, complex choreography, parallax effects
- **AOS (Animate On Scroll) v2.3.4** — Lightweight (24kb) but basic; good for simple fade-in effects; **use as supplement for simpler elements** (see below)
- **Intersection Observer API** — Zero JS overhead, great for lazy-loading images and basic reveal animations; **use in hybrid approach** for image lazy-loading (see below)

**Hybrid Approach (RECOMMENDED):**
- **GSAP ScrollTrigger** for: hero video animations, parallax scrolling, pinned testimonial carousel, product showcase scroll choreography
- **CSS transitions** for: hover effects, button states, micro-interactions
- **Intersection Observer API** for: lazy-loading images below the fold, basic fade-in reveals on simple elements
- **AOS v2.3.4** optionally for: supplementary scroll reveals on benefit cards (if GSAP feels overkill for those elements)

This hybrid approach balances performance (no JS for images), file size (don't load GSAP for simple reveals), and capability (GSAP for cinematic sequences).

**Confidence:** HIGH — GSAP is industry standard for luxury brands (used by Apple, Nike, luxury fintech platforms); 2025 made it free including plugins; ScrollTrigger is the de facto standard for scroll-driven animations.

**Installation:**
```javascript
// Via CDN (fastest for static site)
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.15.0/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.15.0/ScrollTrigger.min.js"></script>

// Via npm (if building with asset pipeline)
npm install gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
```

---

### Background Video & Media Optimization
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| HTML5 `<video>` tag | Native | Hero background video, autoplay muted | Native browser support; full control over playback; semantic HTML |
| **MP4 (H.264 codec)** | Latest | Primary video format | 96%+ browser support; excellent compression; standard for web video |
| **WebM (VP9/AV1 codec)** | Latest | Fallback for modern browsers | Smaller file size (10-20% reduction vs MP4); served alongside MP4 via `<source>` elements |
| **FFmpeg** | Latest | Video encoding/compression | Industry standard for video optimization; reduces file size without quality loss; free/open-source |
| **Intersection Observer API** | Native | Stop video playback when off-screen | Prevents wasted CPU when video not visible; improves performance on lower-end devices |

**Video Optimization Best Practices:**
- **Resolution:** Downscale to max viewport width needed (1920×1080 for desktop, 720p for mobile) — never serve 4K for web
- **File Size:** Use FFmpeg to compress: `ffmpeg -i input.mp4 -vcodec h264 -crf 23 -preset slow output.mp4`
- **Format Multiple Codecs:** Serve MP4 + WebM via `<source>` tags for fallback support
- **Remove Audio:** If muted (as in hero videos), strip audio track to save 10-15% file size
- **CSS Optimization:** Add `will-change: transform; transform: translateZ(0)` to absolutely-positioned background videos to create compositor layer; reduces repaints when video plays
- **Lazy Pause:** Use Intersection Observer to pause video when off-screen: saves CPU, improves scrolling performance

**Example HTML:**
```html
<video autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover;">
  <source src="hero.mp4" type="video/mp4">
  <source src="hero.webm" type="video/webm">
</video>
```

**Confidence:** HIGH — These are 2025 standard practices documented by web.dev, Cloudinary, and performance audits.

---

### Image Optimization
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **WebP format** | Latest | Primary image format | 25-35% smaller file size than JPEG at equivalent quality; 96%+ browser support as of 2025 |
| **AVIF format** | Latest | Next-gen format for modern browsers | 50% better compression than JPEG, 20% better than WebP; served with fallbacks |
| **HTML `<picture>` element** | Native | Responsive image serving | Serve WebP/AVIF to modern browsers, JPEG/PNG fallback to older browsers |
| **Native `loading="lazy"` attribute** | Native | Lazy-load images below fold | Built-in browser support; no JavaScript needed; improves LCP (Largest Contentful Paint) by deferring below-fold images |
| **`srcset` and `sizes` attributes** | Native | Responsive image sizing | Serve appropriately-sized images for different screen widths; reduces mobile image payload by 70%+ |
| **ImageMagick / Squoosh** | Latest | Batch image optimization | Automated compression + format conversion during asset pipeline |

**Implementation Pattern:**
```html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy" srcset="image-mobile.jpg 320w, image-tablet.jpg 768w, image-desktop.jpg 1200w" sizes="(max-width: 320px) 280px, (max-width: 768px) 720px, 1200px">
</picture>
```

**Important:** Do NOT lazy-load above-the-fold hero images — this hurts LCP score and perceived performance.

**Confidence:** HIGH — Core Web Vitals requirements for 2025 SEO; documented by MDN, web.dev, and luxury brand performance audits.

---

### Form Handling & Email Delivery
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Formspree** (Recommended) | 2025 API | Contact form + newsletter subscription backend | Simplest integration for static HTML; no server needed; form action="https://formspree.io/f/{form_id}"; instant setup; free tier includes 50 submissions/month; $10/month for unlimited |
| **Resend** (Alternative) | 2025 | Email API, requires serverless function | More powerful if using Vercel/Netlify Functions; pay-as-you-go ($0.0005/email on Scale plan); better for high-volume newsletters; requires backend wrapper (not pure static HTML) |

**Decision Matrix:**

| Feature | Formspree | Resend |
|---------|-----------|--------|
| Setup Complexity | HTML form action only | Requires serverless function |
| Code Required | None (pure HTML) | JavaScript + backend |
| Free Tier | 50 submissions/month | 3,000 emails/month |
| Paid Tier | $10/month unlimited | $20/month (50k emails) |
| Best For | Contact forms, simple use cases | High-volume newsletters, scheduled sends |
| WCAG Compliance | Built-in spam detection | Requires manual CAPTCHA |

**RECOMMENDATION: Formspree for Contact Form + Resend for Newsletter**
- **Contact form:** Use Formspree (simple, no backend)
- **Newsletter subscription:** Use Resend via Netlify/Vercel function (more scalable if list grows; better deliverability for campaigns)

**Formspree Implementation:**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required>
  <textarea name="message"></textarea>
  <button type="submit">Send</button>
</form>
```

**Confidence:** MEDIUM-HIGH for Formspree (verified via official docs); MEDIUM for Resend (powerful but requires serverless wrapper not in pure static scope).

---

### CSS Styling & Design System
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **CSS3 (native)** | Latest | Layout, responsive design, animations | No preprocessor needed for modern CSS; modern features handle luxury design: `backdrop-filter` for glassmorphism, CSS Grid/Flexbox for layouts, CSS custom properties (--variables) for design system |
| **Glass-Morphism (CSS3)** | Native | Frosted glass effect, luxury aesthetic | `backdrop-filter: blur(12px)` creates premium layered look; matches 2025-2026 luxury design trend; high GPU support on modern devices |
| **CSS Custom Properties (Variables)** | Native | Design system tokens | Define --primary-color, --gradient, --font-size across all styles; maintainability without preprocessor |
| **CSS Grid** | Native | Complex layouts (products, testimonials) | Superior to Flexbox for multi-dimensional layouts; responsive without media query gymnastics |
| **CSS Flexbox** | Native | Navigation, component layout | Perfect for single-dimension flex containers |

**Why Not a Preprocessor (Sass/Less)?**
- Modern CSS can do everything Sass does (nesting with CSS Cascade Layers coming, variables already native, functions via calc())
- Adds build complexity to static site
- No need for mixins/functions on a brand site (not heavy on logic)
- Keep it pure HTML/CSS/JS per project constraints

**Why Glassmorphism?**
Project requirements explicitly mention "glass/metallic text effects" and the current site uses this aesthetic. Glassmorphism is the 2025-2026 luxury design trend with good GPU support.

**Confidence:** HIGH — Native CSS handles all requirements; no third-party CSS library needed.

---

### Performance & Monitoring
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Google Lighthouse** | Native (Chrome DevTools) | Performance, accessibility, SEO audits | Industry standard; free; built into Chrome; measures Core Web Vitals (LCP, CLS, FID) |
| **Axe DevTools** | Latest | Accessibility testing beyond Lighthouse | Lighthouse uses axe-core, but Axe DevTools runs 70+ accessibility tests vs Lighthouse's subset; catches WCAG issues Lighthouse misses |
| **Pa11y** | Latest | CLI-based accessibility checker | Lightweight; easy CI/CD integration; generates readable reports |

**Testing Strategy:**
1. **Local Development:** Run Lighthouse on every major section (run in Chrome DevTools → Lighthouse → Audit)
2. **Accessibility:** Run Axe DevTools browser extension locally; integrate Pa11y into CI pipeline
3. **Responsive:** Test at 320px (mobile), 768px (tablet), 1200px+ (desktop) breakpoints
4. **Video:** Test hero video starts muted; confirm Intersection Observer pauses off-screen videos
5. **Forms:** Test Formspree submission; confirm email delivery

**Confidence:** HIGH — These are standard 2025 QA practices for web projects.

---

### Hosting & Deployment
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Static Site Hosting (Netlify or Vercel)** | — | Deploy and serve static files | Free tier sufficient for brand site; built-in CDN for global performance; automatic HTTPS; form submission support (Formspree integration) |
| **Cloudflare CDN** (Optional) | Latest | DDoS protection, caching layer | Optional layer on top of Netlify/Vercel; improves global delivery; image optimization via Cloudflare Polish |
| **GitHub Pages** (Minimal Option) | — | Free hosting if using GitHub | Minimal cost, but limited form handling; recommend Netlify/Vercel instead for better form integration |

**Recommendation:** **Netlify** or **Vercel** — both provide:
- Free tier with generous limits (sufficient for brand site)
- Automatic CDN
- One-click deploy from GitHub
- Built-in support for Formspree integration
- HTTPS by default
- Analytics

**Confidence:** HIGH — Standard practices for static sites in 2025.

---

## Alternatives Considered & Rejected

| Category | Recommended | Rejected Alternative | Why Not |
|----------|-------------|----------------------|---------|
| Framework | Vanilla JS | React / Next.js | Over-engineered for static brand site; adds 40kb+ JS payload; unnecessary complexity for content that doesn't change; kills maintainability ("When did we add that dependency?") |
| Animation | GSAP 3.15.0 | Motion.dev / Framer Motion | Motion.dev is React/TypeScript focused; Framer Motion requires React wrapper; GSAP is lighter and more universal |
| CSS | Native CSS3 | Tailwind CSS | Tailwind adds build step and class bloat; clean CSS is more maintainable for small site; no need for utility-first on brand site |
| CSS | Native CSS3 | Sass/LESS | Modern CSS handles all use cases; no need for compilation step on static site |
| Form Service | Formspree | Basin, Getform | Formspree is simplest for pure HTML forms; others require wrappers |
| Email | Formspree + Resend | Mailchimp | Mailchimp is for marketing automation; overkill for contact form + simple newsletter |
| Video Hosting | Self-hosted | YouTube/Vimeo embed | Self-hosting gives full control over autoplay, muting, styling; embeds can't match luxury site aesthetic requirements |
| Image Optimization | Native HTML `<picture>` | Third-party image service | Unnecessary cost; native HTML supports WebP/AVIF with fallbacks; sufficient for static site |

**Key Rejection Reason:** Every alternative adds complexity, cost, or dependencies. The recommended stack is the simplest stack that meets the requirements.

---

## Installation & Setup Quick Reference

### Prerequisites
- Git
- Code editor (VS Code, Sublime, etc.)
- Node.js optional (only if using npm for asset pipeline; not required for pure HTML/CSS/JS)
- Browser for testing (Chrome, Firefox, Safari, Edge)

### Minimal Setup (Recommended)
```bash
# 1. Create project folder
mkdir intake-beverages
cd intake-beverages

# 2. Initialize git
git init

# 3. Create basic structure
mkdir -p {css,js,images,videos}
touch index.html
touch css/style.css
touch js/main.js

# 4. No npm install needed — use CDN for GSAP
# Add to index.html <head>:
#   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.15.0/gsap.min.js"></script>
#   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.15.0/ScrollTrigger.min.js"></script>

# 5. Deploy to Netlify or Vercel
# Both support direct GitHub integration — no additional setup
```

### With Asset Pipeline (Optional)
```bash
# If wanting to minify/optimize assets during build:
npm install --save-dev @parcel/bundler
# Or use esbuild, webpack, etc.

# But: This is optional complexity. Pure HTML/CSS/JS works fine.
```

---

## DevOps & Build Checklist

- [ ] **Minification:** Minify CSS and JavaScript before deploy (Parcel, esbuild, or manual via online tools)
- [ ] **Image Compression:** Convert all images to WebP + AVIF with JPEG fallback; compress videos with FFmpeg
- [ ] **Lighthouse Audit:** Run before each deploy; target: Performance 90+, Accessibility 90+, SEO 100
- [ ] **Accessibility:** Run Axe DevTools on every page; fix all violations
- [ ] **Cross-browser:** Test on Chrome, Firefox, Safari, Edge (latest versions)
- [ ] **Mobile Testing:** Test responsive breakpoints at 320px, 768px, 1200px
- [ ] **Form Testing:** Verify Formspree submission delivers email; test Resend (if using)
- [ ] **Video Testing:** Confirm hero video autoplay/mute works; verify Intersection Observer pauses off-screen videos
- [ ] **Analytics:** Add Netlify/Vercel analytics or Google Analytics (optional for brand site)

---

## Summary

**The Stack:**
- **Markup:** HTML5 semantic
- **Styling:** CSS3 native (no preprocessor)
- **Behavior:** Vanilla JavaScript ES6+
- **Animation:** GSAP 3.15.0 + ScrollTrigger (free as of 2025)
- **Lazy Loading:** Intersection Observer API (native, zero JS)
- **Forms:** Formspree (contact) + Resend (newsletter via serverless)
- **Images:** WebP/AVIF with HTML `<picture>` element
- **Video:** HTML5 `<video>` with MP4/WebM, optimized with FFmpeg
- **Hosting:** Netlify or Vercel (static hosting + CDN)
- **Testing:** Lighthouse + Axe DevTools + Pa11y

**Philosophy:** Maximum control, minimum dependencies. No framework overhead. Every library chosen because the native alternative is insufficient. The site is static by design — treat it as such.

**Confidence:** HIGH overall. All recommendations verified against 2025 industry standards, official documentation, and current library versions (as of June 2026).

---

## Sources

### Animation & Performance
- [GSAP Official Docs](https://gsap.com/) — ScrollTrigger, versioning, free tier announcement
- [ScrollTrigger Documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) — Scroll-driven animation patterns
- [Should You Use Intersection Observer or GSAP](https://www.clcreative.co/blog/should-you-use-the-intersection-observer-api-or-gsap-for-scroll-animations) — Comparison and best practices
- [AOS Library GitHub](https://github.com/michalsnik/aos) — Lightweight alternative for simple reveals
- [GSAP ScrollTrigger Tutorial 2025](https://www.annnimate.com/blog/gsap-scrolltrigger-tutorial) — 2025-specific patterns

### Video Optimization
- [web.dev: Video Performance](https://web.dev/learn/performance/video-performance/) — Official Google guidance
- [Cloudinary: Video in HTML](https://cloudinary.com/guides/front-end-development/video-in-html) — Optimization techniques
- [Optimizing Background Videos](https://www.sitelint.com/blog/optimizing-video-backgrounds-for-fast-loading-tips-and-strategies-for-improved-user-experience) — 2025 best practices

### Image Optimization
- [Image Optimization 2025: WebP, AVIF & Best Practices](https://www.frontendtools.tech/blog/modern-image-optimization-techniques-2025) — Current standards
- [MDN: Fix LCP with Image Optimization](https://developer.mozilla.org/en-us/blog/fix-image-lcp/) — Core Web Vitals guidance

### Form Services
- [Formspree Official](https://formspree.io/) — Contact form backend
- [Resend Pricing Guide 2025](https://flexprice.io/blog/detailed-resend-pricing-guide) — Email API alternative
- [Resend Official Docs](https://resend.com/) — Email service features

### CSS & Design
- [Dark Glassmorphism: 2026 UI Trend](https://medium.com/@developer_89726/dark-glassmorphism-the-aesthetic-that-will-define-ui-in-2026-93aa4153088f) — Luxury design patterns
- [Glassmorphism 2.0: Modern CSS](https://weblogtrips.com/technology/glassmorphism-2-0-css-techniques-2026/) — Implementation guide

### Accessibility & Testing
- [Lighthouse Accessibility Docs](https://developer.chrome.com/docs/lighthouse/accessibility/scoring) — Performance auditing
- [Axe DevTools](https://www.deque.com/axe/devtools/) — WCAG compliance
- [Accessibility Testing Automation](https://www.accesify.io/blog/accessibility-testing-automation-axe-pa11y-lighthouse-ci/) — CI/CD integration

### Marquee / Scrolling
- [Infinite Scrolling Marquee Vanilla JS](https://www.cssscript.com/smooth-infinite-scrolling-marquee/) — Pure CSS + light JS alternative to deprecated HTML marquee

### Static Site Hosting
- [Luxury Website Examples & Design](https://www.wix.com/blog/luxury-website-examples) — Brand site standards
- [Static Website Best Practices 2025](https://snappify.com/blog/create-static-websites) — Modern approaches
