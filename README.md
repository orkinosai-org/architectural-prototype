architectural-prototype — summary

Summary
This repository contains a prototype implementing placeholders and initial integrations intended to validate an architecture composed from cloud services, third-party APIs, and modular components. The full requirements are in REQUIREMENTS.md.

What’s in the repo (high level)
- client/ (React frontend scaffold)
- server/ (Express + TypeScript server scaffold)
- feature/port-email-captcha-azure (work-in-progress branch with email verification, captcha hooks, and Azure Blob helper)

Status
- A port of the event-registration-form's email verification flow has begun (emailService.ts committed).
- Azure Blob helper and other server & client components are staged/planned and will be added to feature/port-email-captcha-azure.
- The translation feature and a public demo URL are on the critical path (translation must work live for acceptance).

How reviewers should validate locally
1. Server
   - cd server
   - npm install
   - copy .env.example -> .env and set required ENV variables (listed below)
   - npm run dev

2. Client
   - cd client
   - npm install
   - npm run dev

Required environment variables (sample)
- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_FROM
- AZURE_STORAGE_CONNECTION_STRING, AZURE_BLOB_CONTAINER
- VERIFICATION_CODE_EXPIRY_MINUTES (optional)

Notes for reviewers
- No secrets are committed.
- The branch feature/port-email-captcha-azure contains the porting work. The PR will include a checklist and required env var instructions.

Next steps (if you approve)
- Move full requirements into REQUIREMENTS.md (done)
- Apply refactor to implement storage adapter pattern, idempotency middleware, env validation, structured logging, and robust error handling
- Add translation proxy endpoint to call LibreTranslate or another free API
- Add small deploy instructions and ensure demo is publicly accessible with no gating

Contact
All communication via GitHub issues and PRs.