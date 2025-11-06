ARCHITECTURAL PROTOTYPE — REQUIREMENTS (extracted from original README)

Purpose
This prototype confirms architectural direction, cloud component compatibility, and future scalability. Focus on integrating third-party APIs, SaaS/PaaS components, and cloud services rather than building every module from scratch. The structure should be clean, extendable, and reusable.

Core functional requirements
1. User registration and login:
   - Scalable login and authentication structure
   - Email verification flow
   - A simple user profile page layout

2. Payment placeholder:
   - Reserve a location for integrating Stripe or PayPal
   - Display a payment button
   - After clicking, go to a “Pending Integration” page

3. AI customer support placeholder:
   - Provide an entry button on the interface
   - Reserve a display area for a future AI chat window

4. Cross-language text translation (must work):
   - The user inputs text and receives a translation result
   - Can use a free open API (for example, LibreTranslate)
   - Left side shows the input, right side shows the translated result
   - Voice translation is not required

5. Analytics dashboard layout:
   - Placeholder chart for user growth trends
   - Placeholder chart for activity metrics
   - Placeholder chart for order data
   - Layout only — no real data required

6. Visual frontend:
   - Global navigation bar
   - Multiple pages with normal navigation
   - Backend-only work is not accepted

7. Backend structure:
   - Simple routing design
   - Clear folder organization
   - Reserve several empty API endpoints for future use

8. Cloud object storage placeholder (S3 compatible):
   - Upload button
   - When clicked, display a placeholder message

9. Idempotency placeholder:
   - Reserve an idempotency key field in the API design (comment acceptable)

10. Architecture explanation page:
   - One simple English page describing the structure and future expansion directions (must be shown in-app)

Delivery and acceptance constraints
- Provide a publicly accessible URL (no auth/invites/whitelists)
- No passwords or manual approvals required to view the demo
- Translation feature must be functional in the demo
- Source code must be in a public repository and browsable online
- ZIP-only, screenshots-only, or video-only submissions are not accepted

Technology stack requirements
- Frontend: React or Next.js (recommended)
- Backend: Node.js with Express or Nest.js
- Database (placeholder allowed): MongoDB or PostgreSQL
- Cloud storage: S3 compatible service
- Do not use legacy stacks (PHP/Laravel, JSP)
- Follow modular and modern architecture patterns suitable for future expansion

--- END OF REQUIREMENTS ---