# Design Guidelines: PPH Prototype Platform

## Design Approach

**Selected Framework: Material Design System**  
Justification: This prototype is a utility-focused, enterprise-grade platform requiring clean information architecture, robust form handling, and professional data visualization. Material Design's well-established patterns for forms, navigation, and dashboard components align perfectly with the requirement to demonstrate architectural quality and future scalability.

**Design Principles:**
1. **Professional Clarity** - Clean, trustworthy interface that communicates technical competence
2. **Functional Efficiency** - Prioritize usability and clear information hierarchy over decorative elements
3. **Scalable Structure** - Component-based design that clearly shows extensibility
4. **Data Accessibility** - Emphasize readability in forms, dashboards, and technical content

---

## Typography System

**Primary Font:** Inter (via Google Fonts CDN)  
**Secondary Font:** JetBrains Mono (for code snippets and technical content)

**Hierarchy:**
- **Page Titles (H1):** 2xl (24px), font-bold, tracking-tight
- **Section Headers (H2):** xl (20px), font-semibold
- **Subsections (H3):** lg (18px), font-medium
- **Body Text:** base (16px), font-normal, leading-relaxed
- **Captions/Labels:** sm (14px), font-medium
- **Technical/Code:** JetBrains Mono, sm (14px)

---

## Layout System

**Container Strategy:**
- Maximum content width: `max-w-7xl` for main application areas
- Form containers: `max-w-2xl` centered
- Dashboard grid sections: `max-w-full` with internal grid constraints

**Spacing Primitives:**  
Standardize on Tailwind units: **2, 4, 6, 8, 12, 16**
- Component internal padding: `p-4` to `p-6`
- Section spacing: `mb-8`, `mt-12`
- Card/panel spacing: `p-6` to `p-8`
- Form field gaps: `space-y-4`
- Grid gaps: `gap-6` to `gap-8`

---

## Component Library

### Navigation
**Global Navigation Bar:**
- Fixed top navigation with subtle shadow (`shadow-sm`)
- Height: `h-16`
- Logo positioned left, navigation links center-right, user profile/logout right
- Active route indicator with bottom border accent
- Mobile: Hamburger menu collapsing to slide-out drawer

### Authentication Pages
**Registration/Login Forms:**
- Centered card layout (`max-w-md mx-auto`)
- Single-column form with consistent field spacing
- Email verification: 6-digit code input with individual character boxes
- reCAPTCHA positioned below form, above submit button
- Clear error states with inline validation messages
- Profile page: Simple two-column layout (avatar left, details right on desktop; stacked on mobile)

### Translation Feature (Functional)
**Layout:** Two-column split view
- Left panel: Source text input (textarea, `min-h-[200px]`)
- Right panel: Translation output (readonly textarea, matching height)
- Language selectors above each panel (dropdowns)
- Translate button centered between panels
- Status indicator showing translation in progress

### Dashboard (Analytics)
**Grid Layout:** 3-column responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Each chart card: White background, rounded corners, shadow-sm, padding p-6
- Placeholder chart areas: `h-64` with centered placeholder text
- Chart titles: H3 typography, `mb-4`
- Metrics displayed above charts (large numbers with labels)

### Placeholders
**Payment Integration:**
- Card with centered content (`max-w-lg mx-auto`)
- Payment provider logos (Stripe/PayPal) displayed
- Primary button "Initialize Payment" leading to "Pending Integration" page
- Pending page: Simple centered message with return navigation

**AI Customer Support:**
- Floating action button (fixed bottom-right, circular)
- Placeholder chat window: Card overlay (`max-w-md`, positioned bottom-right)
- Simple chat UI mockup (header, message area, input field)

**Cloud Storage:**
- Upload area: Dashed border box (`border-dashed border-2`)
- Cloud icon centered, upload button below
- Click shows placeholder modal/message

### Architecture Explanation Page
**Layout:** Single column, prose format (`max-w-4xl`)
- Section breakdown with H2/H3 headers
- Bullet lists for technical details
- Code blocks using JetBrains Mono for file structure
- Expansion points highlighted in distinct cards

---

## Card & Panel System

**Standard Card Pattern:**
- Background: White
- Border: `border border-gray-200` or none with `shadow-sm`
- Border radius: `rounded-lg`
- Padding: `p-6`
- Hover state (where interactive): `hover:shadow-md transition-shadow`

**Form Fields:**
- Input/textarea: `border border-gray-300 rounded-md p-3`
- Focus state: `focus:ring-2 focus:ring-blue-500 focus:border-transparent`
- Labels: `block mb-2 font-medium`
- Error states: Red border, small error text below field

---

## Animations

**Minimal, Purposeful Motion:**
- Page transitions: Subtle fade-in (`opacity-0 to opacity-100`)
- Form submission: Loading spinner on button
- Navigation: Smooth scroll to sections
- Modals/overlays: Gentle scale-in (`scale-95 to scale-100`)
- Avoid: Complex scroll animations, parallax effects, excessive hover transitions

---

## Page Structure Overview

1. **Landing/Home:** Brief hero section (h-auto, not full viewport) with platform tagline + feature grid (4 key features in 2x2 grid) + CTA to register
2. **Registration/Login:** Centered form layouts, clean field structure
3. **Dashboard:** Analytics grid with placeholder charts, key metrics at top
4. **Translation:** Side-by-side input/output interface
5. **Profile:** User details display, edit capability placeholder
6. **Architecture Explanation:** Documentation-style single column layout
7. **Placeholder Pages:** Payment/AI/Storage each get dedicated simple pages with clear messaging

---

## Images

**Where to Use Images:**
- **Hero Section (Home):** Abstract tech/connectivity visual (networking nodes, cloud infrastructure aesthetic) - small hero banner style, not full viewport
- **Architecture Page:** Optional diagram illustrations for system architecture
- **Profile Page:** User avatar placeholder (default icon)
- **Feature Cards (Home):** Icon-based representations (no photos needed)

**Critical:** No large full-viewport hero images. Keep hero section concise (h-auto based on content, approximately 60vh maximum) to immediately show feature value below fold.