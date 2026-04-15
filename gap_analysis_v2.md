# Gap Analysis V2: Casami MVP vs. Enterprise System

## 1. Data Persistence
- **Current (MVP):** State managed in memory via `StoreContext`. Refreshing the page resets everything.
- **Enterprise Requirement:** Real-time persistence using a backend (Node/Go/Python) and database (PostgreSQL/Redis).

## 2. Dynamic Image Assets
- **Current (MVP):** Generic icons used as placeholders.
- **Enterprise Requirement:** Content Management System (CMS) or AWS S3 integration for actual product photography and marketing banners.

## 3. Advanced Search & SEO
- **Current (MVP):** Client-side JS filtering.
- **Enterprise Requirement:** Server-side search with typo tolerance and vehicle compatibility database (Year/Make/Model lookup).

## 4. Real Payments & Invoicing
- **Current (MVP):** "Cobrar" button simulates a transaction and updates local stock.
- **Enterprise Requirement:** Integration with SAT (Mexico) for CFDI 4.0 invoicing and Stripe/Conekta for payment processing.

## 5. Security
- **Current (MVP):** All views accessible via the navigation bar for demo purposes.
- **Enterprise Requirement:** JWT-based authentication and HTTPS-only environment.
