Nice — below is a complete, practical **plan to clone *BookMyForex* (UI + full functionality)**. I’ve reverse-engineered the public site and included the exact features you’ll need, recommended tech stack, architecture, database model, integrations, security/compliance pointers, an MVP vs stretch roadmap, and an implementation checklist you can hand to developers. I also call out the specific site features I observed (with sources). Let’s do it.

---

# 1) Quick product summary (what we’ll clone)

A marketplace + direct services site that lets users:

* buy/sell foreign currency notes and forex cards, view **live exchange rates**, book same-day doorstep delivery, and reload/unload cards. ([BookMyForex][1])
* transfer money abroad (wire transfers) with online booking and partner banks. ([BookMyForex][1])
* apply for/ manage a branded forex card product (zero-markup card described on site). ([BookMyForex][1])
* offers: cashback, referral program, rate alerts, “request better rate” / call back widgets, and promotional banners. ([BookMyForex][1])

(These features are the load-bearing elements the plan below implements.)

---

# 2) High-level architecture & tech stack (recommended)

* Frontend: **Next.js (React)** — server side rendering for SEO, fast page loads, React components.
* Styling/UI: **Tailwind CSS** + component library (shadcn/ui or Chakra) — responsive, quick.
* Backend API: **TypeScript + Node.js (NestJS or Express + TypeORM)** OR **Django Rest Framework** (if you prefer Python).
* Database: **PostgreSQL** (transactions, relational data).
* Cache / Realtime rates: **Redis** for caching rates, sessions, rate alerts.
* Message broker: **RabbitMQ** or **Redis Streams** for async jobs (order processing, emails, SMS).
* Worker runtime: **Node/Python workers** (for payment reconciliation, KYC processing).
* Storage: **S3-compatible** (AWS S3 / DigitalOcean Spaces) for images/documents.
* Hosting / Infra: **AWS** (ECS/EKS) or **GCP** (GKE) with Docker containers. Use CloudFront / CDN.
* CI/CD: GitHub Actions → deploy to Kubernetes/ECS or Managed App Service.
* Monitoring: Sentry + Datadog / Prometheus + Grafana.
* SSL & Security: Let’s Encrypt / ACM, WAF, rate limiting.
* Analytics: Google Analytics + server side events; Hotjar for UX.

Why Next.js: SEO pages like offers, rates, banks need SSR for search visibility and social previews.

---

# 3) Functional modules & pages (UI elements + behaviour)

I list each UI page/component and the main interactions to implement.

### Public pages

* **Home / Hero carousel** (promotional banners, CTAs: “Order Forex”, “Transfer Money”). ([BookMyForex][1])
* **Services** (Currency Exchange, Transfer Money Abroad, Forex Cards, Sim Cards, Travel Insurance). ([BookMyForex][1])
* **Rate widgets**:

  * Real-time top currency row (USD, EUR, GBP, etc). Auto-refresh. ([BookMyForex][1])
  * Full rate card modal / page.
  * “Refresh rates”, “Set Rate Alert”, “Request Better Rate” CTAs. ([BookMyForex][1])
* **Order forms** (Buy/Sell Forex; Transfer Money; Apply for Card; Reload/Unload Card). Inline validation, dynamic rate calculation, order summary, book button. ([BookMyForex][1])
* **Offers / Promo** page (cashback, referral). ([BookMyForex][1])
* **Help / FAQs / Contact / Care**.
* **Login / My Account**: order history, manage card, track shipments, referral link.

### User flows / widgets

* **Live rate lookups** (currency selector + amount → effective rate, fees breakdown). ([BookMyForex][1])
* **Checkout**: create order (capture user contact, KYC doc if required, payment options).
* **Same-day booking & courier scheduling** (show ETA and allow selecting doorstep delivery). ([BookMyForex][1])
* **KYC flow**: Aadhar/PAN upload, OCR, verification status.
* **Notifications**: Email + SMS + in-app.
* **Referral & cashback** dashboard. ([BookMyForex][1])

### Admin panel

* Dashboard (orders, revenue, conversion metrics).
* Rate management (override rates, set spread).
* Partner management (money exchangers, banks, couriers).
* Promo management (banners, offers, referral rules).
* KYC review queue, dispute resolution, refunds.
* Logs / audit trail.

---

# 4) Data model (core tables)

* users (id, name, email, phone, KYC_status, created_at)
* addresses (user_id, address, city, pincode)
* orders (id, user_id, type [buy/sell/transfer/reload], status, amount_src, amount_dst, rate, fees, partner_id, scheduled_at)
* forex_rates (currency_pair, rate, source, timestamp)
* partners (banks/exchangers, contact, city coverage, api_credentials)
* cards (card_id, user_id, balance, kit_number, status)
* payouts/transfers (for remittances)
* coupons/referrals (code, user_id, reward_status)
* audit_logs, events, webhooks

---

# 5) Integrations you must implement

These are crucial and non-trivial:

1. **Live exchange rates provider(s)** — Get interbank/market rates and apply your margins. Options: commercial APIs (XE, OANDA, Open Exchange Rates, CurrencyLayer) + aggregated bank/partner feeds. Cache aggressively.
2. **Payment gateway(s)** — To accept card/UPI/Netbanking: **Razorpay / PayU / Stripe** (for INR flows). Support card 3DS, refunds, webhooks.
3. **Bank / partner connections for transfers** — Integrate with partner banks’ APIs or payment rails for inward/outward transfers; for India, consider partner bank integrations and remittance processors.
4. **Courier / logistic partner** — For same-day delivery of currency/cards (integration for booking & tracking).
5. **KYC verification** — Use an identity verification provider (e.g., Onfido, IDfy, Karza) for document OCR and verification.
6. **SMS & Email** — Twilio / Route / MSG91 + transactional email (Sendgrid/Mailgun).
7. **Card issuing / management** — If issuing a card product, you need a fintech partner or issuer (card BIN sponsor) + card management API. BookMyForex shows a managed card product — this requires bank/issuer partnerships. ([BookMyForex][1])

(Each of the above requires legal/contractual onboarding.)

---

# 6) Important legal & compliance points

* **RBI & FEMA compliance** for forex and remittances (India): check licensing, KYC/AML rules, transaction limits. Work with legal counsel.
* **PCI-DSS** compliance if you store/process card data — ideally use tokenized payments via payment gateway to avoid storing card data.
* **Data protection**: encrypt PII at rest; secure file storage for KYC docs.
* **Financial partner contracts**: banks, remittance processors, card issuers.
  These are non-optional for a forex/money-transfer business.

---

# 7) UX / UI details to clone (visual & interactive cues)

* Top sticky header with phone/contact, profile, services dropdown. ([BookMyForex][1])
* Prominent rate ticker / small currency cards across header/hero. ([BookMyForex][1])
* Big CTA cards for “Order Forex”, “Transfer Money”, “Apply Card” on homepage. ([BookMyForex][1])
* Modal/inline calculators where rate changes reflect totals and fees. ([BookMyForex][1])
* Carousel banners for offers with “Know More” buttons. ([BookMyForex][1])

---

# 8) Backend business logic highlights

* **Rate computation**: base_rate (provider) → apply margin/fees → display effective rate; store rate snapshot with order.
* **Idempotent order creation** + background worker to call partner APIs, book courier & schedule KYC pickup.
* **Retry & reconciliation** for transfers & payments with webhooks and cron jobs.
* **Fraud detection**: velocity checks, device fingerprinting, OTP verification.

---

# 9) Testing & QA

* Automated unit tests + integration tests for payment & partner API flows.
* End-to-end QA for booking cycles (order → KYC → delivery → settlement).
* Load testing for rate endpoints and homepage (simulate many rate refreshes).
* Security testing (pen test, dependency scans).

---

# 10) MVP vs Stretch features

MVP (must have to operate):

* Live rates display & rate calculator, Buy/Sell order flow, Checkout with payments, basic KYC upload, order management, partner booking (manual or API), admin dashboard, email/SMS notifications. ([BookMyForex][1])

Stretch (after launch):

* Full card issuing & in-app wallet, mobile apps, advanced referral engine, dynamic A/B testing for offers, advanced analytics, price-beat guarantees, mobile app deep integrations. ([BookMyForex][1])

---

# 11) Deployment & scaling notes

* Use **Kubernetes/ECS** with autoscaling; put rate APIs behind a highly cached layer (Redis + CDN) to avoid provider rate limits.
* Use **edge caching** for static pages and banners; dynamic endpoints use short TTL caching.
* For high availability, run workers across AZs and persist critical queues.

---

# 12) Security checklist (must do)

* No PII in client-side logs.
* PCI via tokenized payments; no raw card storage.
* Harden APIs with OAuth2 or JWT + rate limiting.
* WAF, DDoS protection, encrypted backups.
* Audit logs and MFA for admin.

---

# 13) Key human resources (roles you’ll need)

* Product owner / PM
* 2–3 frontend devs (React/Next)
* 2 backend devs (Node/Python)
* 1 devops/infra engineer
* 1 QA engineer
* 1 designer (UI/UX)
* 1 compliance/legal advisor (RBI/FEMA specialist)
* 1 sales/partnership + ops person for on-boarding money exchangers & couriers

---

# 14) Deliverables checklist (what you’ll hand over)

* Complete codebase (frontend + backend) in Git repo.
* Deployment manifests + CI/CD.
* Admin panel + documentation (API docs).
* Runbooks for KYC, refunds, disputes.
* Test suites and load test reports.
* Legal/compliance checklist and partner contracts template.

---

# 15) Example API endpoints (suggested)

* `POST /api/orders` — create order (buy/sell/transfer).
* `GET /api/rates?pair=USDINR` — get latest cached rate.
* `POST /api/payments/webhook` — handle payments.
* `POST /api/kyc/upload` — upload KYC doc.
* `GET /api/admin/orders` — admin order list.
* `POST /api/partners/book` — internal partner booking webhook.

---

# 16) Cost & time — how to proceed (no estimates given)

I won’t guess exact timelines or fixed cost here, but to move forward you should:

1. Decide MVP scope (which services: only buy/sell notes, or full remittance + card?)
2. Prepare required business/legal documents and partner introductions (banks, couriers, payment gateway).
3. Build a prioritized backlog from the MVP checklist above and staff the roles listed.
4. Start with a 2-phase development: (a) Core rate & buy/sell flows + payments + KYC; (b) Partner automation, cards, transfer rails, referrals.

---

# 17) Next concrete step (what I can give you right now)

I’ve prepared a full technical plan above. If you want, I can immediately (pick one and I’ll produce it in this chat right now):

* A **detailed DB schema** (SQL table definitions) for the core tables above.
* A **Next.js page and component skeleton** (file/folder structure + sample React code for the rate widget + order form).
* A **Postgres data model + example API spec (OpenAPI)** for orders & rates.
* A **developer-ready job brief** (one-page) you can post to hire contractors.

Tell me which of these to generate and I’ll produce it right away (fully detailed, copy-paste ready). No waiting. ✅

---

If you want I can also extract and annotate more specific UI elements from the live site (header components, exact form fields, content text snippets we should copy/adapt) and produce pixel-accurate component specs.

[1]: https://www.bookmyforex.com/ "Online Foreign Exchange (Currency, Cards, Money Transfer)"

Great — I’ll deliver three ready-to-use artifacts right now (copy-paste ready):

1. A short **developer-ready job brief** you can post to hire contractors.
2. A **Next.js + React component skeleton** (TypeScript) for: rate ticker, rate calculator, order form and a sample homepage — Tailwind-ready. Drop these into a Next.js app and they’ll work with a simple rates API.
3. A **Postgres core DB schema** (SQL) for the essential tables used by the frontend flows.

---

# 1) Developer-ready job brief (one page — paste to Upwork / Fiverr / LinkedIn)

Title: Senior Full-Stack Engineer — Clone BookMyForex UI + Core Flows (Next.js + Node)

Summary:
We need an experienced full-stack engineer (or small team) to implement a production-quality clone of BookMyForex UI and core flows: live rate display, rate calculator, order creation (buy/sell forex), checkout integration (Razorpay/Stripe), KYC upload flow, admin basic dashboard. Priority on fast, responsive UI (Next.js + Tailwind) and a robust backend (Node/Express or NestJS + PostgreSQL). Must follow security & PCI best-practices.

Must-have:

* 3+ years React + Next.js (TypeScript) experience
* Backend: Node.js (Express/Nest) + PostgreSQL
* Experience with payment gateway integration (Razorpay/Stripe) and webhooks
* Familiar with KYC upload & secure file storage (S3)
* Familiarity with caching (Redis) and using rate providers for FX
* Ability to deliver tested code (unit + integration) and CI/CD config
* Good communication + deliverable-based milestones

Deliverables (MVP):

1. Frontend: Home, Rates widget, Rate calculator modal, Order form, Login/Signup/KYC upload, Order history.
2. Backend: Rates API (cached), Orders API, Payments webhook endpoint, KYC upload endpoints, Admin endpoints for orders and rate override.
3. Database schema + seed data.
4. Deployment manifests (Docker + GitHub Actions).
5. Basic pen-test checklist and runbook.

Milestones (example):

* Week 1: UI skeleton + rates widget + basic API with mocked data
* Week 2: Order creation + checkout integration + KYC upload
* Week 3: Admin panel + partner booking stub + tests + deployment

Budget & time: Quote required with deadlines. Attach previous relevant work.

Contact: [Your contact details]

---

# 2) Next.js + React TypeScript component skeleton (drop-in)

Assumptions:

* Project created with `create-next-app@latest --ts`
* Tailwind already configured.
* A backend endpoint exists: `GET /api/rates?pairs=USDINR,EURINR` returning JSON `{ pair: "USDINR", rate: 83.21, timestamp: "..." }`
* A backend endpoint `POST /api/orders` will accept order creation.

Files below — create them in your Next.js project.

---

## File: `components/RateTicker.tsx`

```tsx
// components/RateTicker.tsx
import React, { useEffect, useState } from "react";

type Rate = {
  pair: string;
  rate: number;
  timestamp: string;
};

export default function RateTicker({ pairs = ["USDINR","EURINR","GBPINR"] }: { pairs?: string[] }) {
  const [rates, setRates] = useState<Rate[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchRates() {
    try {
      const res = await fetch(`/api/rates?pairs=${pairs.join(",")}`);
      if (!res.ok) throw new Error("Failed to fetch rates");
      const data: Rate[] = await res.json();
      setRates(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRates();
    const id = setInterval(fetchRates, 30_000); // refresh every 30s
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full overflow-x-auto py-2 bg-white shadow-sm">
      <div className="flex gap-4 px-4 items-center min-w-max">
        {loading ? (
          <div className="text-sm text-gray-500">Loading rates...</div>
        ) : (
          rates.map(r => (
            <div key={r.pair} className="flex flex-col items-start p-2 border rounded-md min-w-[160px]">
              <div className="text-xs text-gray-500">{r.pair}</div>
              <div className="text-lg font-semibold">{r.rate.toFixed(4)}</div>
              <div className="text-xs text-gray-400">{new Date(r.timestamp).toLocaleTimeString()}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
```

---

## File: `components/RateCalculator.tsx`

```tsx
// components/RateCalculator.tsx
import React, { useEffect, useState } from "react";

type Rate = { pair: string; rate: number };

export default function RateCalculator() {
  const [pair, setPair] = useState("USDINR");
  const [amount, setAmount] = useState<number | "">("");
  const [rate, setRate] = useState<number | null>(null);
  const [marginPct, setMarginPct] = useState(1.0); // 1% margin by default
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchRate() {
      setLoading(true);
      try {
        const res = await fetch(`/api/rates?pairs=${pair}`);
        if (!res.ok) throw new Error("failed");
        const data: Rate[] = await res.json();
        setRate(data[0]?.rate ?? null);
      } catch (err) {
        console.error(err);
        setRate(null);
      } finally {
        setLoading(false);
      }
    }
    fetchRate();
  }, [pair]);

  const effectiveRate = rate ? rate * (1 + marginPct / 100) : null;
  const calcConverted = () => {
    if (!effectiveRate || amount === "") return "";
    // For Buy (INR -> USDINR) show how much foreign currency user gets: foreign = INR / rate
    if (pair.endsWith("INR")) {
      return (Number(amount) / effectiveRate).toFixed(4);
    }
    return "";
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-sm">
      <h3 className="text-lg font-semibold mb-2">Rate calculator</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <select value={pair} onChange={(e)=>setPair(e.target.value)} className="p-2 border rounded">
          <option value="USDINR">USD / INR</option>
          <option value="EURINR">EUR / INR</option>
          <option value="GBPINR">GBP / INR</option>
        </select>
        <input
          inputMode="numeric"
          value={amount}
          onChange={(e)=> setAmount(e.target.value === "" ? "" : Number(e.target.value))}
          placeholder="Amount (INR)"
          className="p-2 border rounded"
        />
        <div className="flex items-center gap-2">
          <label className="text-sm">Margin %</label>
          <input type="number" value={marginPct} onChange={(e)=>setMarginPct(Number(e.target.value))} className="p-2 border rounded w-28" />
        </div>
        <div>
          <div className="text-sm text-gray-500">Provider rate</div>
          <div className="font-mono text-xl">{loading ? "..." : rate ? rate.toFixed(4) : "—"}</div>
        </div>
      </div>

      <div className="mt-4 border-t pt-3">
        <div className="flex justify-between">
          <div>
            <div className="text-xs text-gray-500">Effective rate</div>
            <div className="text-lg font-semibold">{effectiveRate ? effectiveRate.toFixed(4) : "—"}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">You get</div>
            <div className="text-lg font-semibold">{calcConverted()}</div>
          </div>
        </div>

        <div className="mt-3 flex gap-2">
          <a href="#order" className="inline-block px-4 py-2 bg-blue-600 text-white rounded">Order Now</a>
          <button className="px-4 py-2 border rounded">Set rate alert</button>
        </div>
      </div>
    </div>
  );
}
```

---

## File: `components/OrderForm.tsx`

```tsx
// components/OrderForm.tsx
import React, { useState } from "react";

type CreateOrderPayload = {
  user: { name: string; phone: string; email?: string; city: string };
  type: "buy" | "sell";
  pair: string;
  amount_inr: number;
  effective_rate: number;
  address?: string;
};

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [pair, setPair] = useState("USDINR");
  const [amount, setAmount] = useState<number | "">("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // In real app compute effective_rate via backend or RateCalculator share
  const effective_rate = 83.5;

  async function submitOrder(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    const payload: CreateOrderPayload = {
      user: { name, phone, email: undefined, city },
      type: "buy",
      pair,
      amount_inr: Number(amount),
      effective_rate,
      address: undefined
    };

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.message || "Order failed");
      }
      const data = await res.json();
      setMessage(`Order created: ${data.order_id}. Proceed to payment.`);
      // optionally redirect to payment page or handle gateway client token
    } catch (err: any) {
      console.error(err);
      setMessage(err?.message ?? "Failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form id="order" onSubmit={submitOrder} className="p-4 bg-white rounded-md shadow-sm">
      <h3 className="text-lg font-semibold mb-3">Order Forex (Buy)</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input className="p-2 border rounded" placeholder="Full name" value={name} onChange={(e)=>setName(e.target.value)} required />
        <input className="p-2 border rounded" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} required />
        <input className="p-2 border rounded" placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)} required />
        <select value={pair} onChange={(e)=>setPair(e.target.value)} className="p-2 border rounded">
          <option value="USDINR">USD / INR</option>
          <option value="EURINR">EUR / INR</option>
        </select>
        <input inputMode="numeric" className="p-2 border rounded" placeholder="Amount (INR)" value={amount} onChange={(e)=>setAmount(e.target.value === "" ? "" : Number(e.target.value))} required />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div>
          <div className="text-xs text-gray-500">Rate</div>
          <div className="font-mono">{effective_rate.toFixed(4)}</div>
        </div>
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded" disabled={submitting}>
          {submitting ? "Creating..." : "Create Order"}
        </button>
      </div>

      {message && <div className="mt-3 text-sm text-gray-700">{message}</div>}
    </form>
  );
}
```

---

## File: `pages/index.tsx` (sample homepage)

```tsx
// pages/index.tsx
import React from "react";
import RateTicker from "../components/RateTicker";
import RateCalculator from "../components/RateCalculator";
import OrderForm from "../components/OrderForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">MyForexClone</div>
          <div className="flex items-center gap-4">
            <a className="text-sm">Login</a>
            <a className="text-sm px-3 py-1 bg-blue-600 text-white rounded">Order</a>
          </div>
        </div>
      </header>

      <RateTicker pairs={["USDINR","EURINR","GBPINR"]} />

      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <RateCalculator />
          <div className="mt-6">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-semibold">Why choose us</h3>
              <ul className="mt-2 text-sm text-gray-600">
                <li>- Best rates & same-day delivery</li>
                <li>- Secure KYC & PCI-compliant payments</li>
                <li>- 24x7 support</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <OrderForm />
        </div>
      </div>
    </main>
  );
}
```

---

## Minimal backend stub examples (for local dev)

Create `pages/api/rates.ts` and `pages/api/orders.ts` as dev stubs to test the UI quickly.

`pages/api/rates.ts`

```ts
// pages/api/rates.ts (Next.js API route for dev)
import { NextApiRequest, NextApiResponse } from "next";

const example = {
  USDINR: 83.5,
  EURINR: 89.2,
  GBPINR: 103.7
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pairs } = req.query;
  const pairsArr = typeof pairs === "string" ? pairs.split(",") : ["USDINR","EURINR"];
  const out = pairsArr.map((p) => ({
    pair: p,
    rate: example[p as keyof typeof example] ?? 0,
    timestamp: new Date().toISOString(),
  }));
  res.status(200).json(out);
}
```

`pages/api/orders.ts` (dev stub)

```ts
// pages/api/orders.ts
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const orderId = "ORD" + Math.floor(Math.random()*1000000);
    // In real app, validate payload, persist to DB, return order and payment info
    res.status(201).json({ order_id: orderId });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
```

---

# 3) Postgres core DB schema (SQL) — essential tables

```sql
-- 01_users
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(200),
  email VARCHAR(200) UNIQUE,
  phone VARCHAR(32) UNIQUE,
  password_hash VARCHAR(255) NULL,
  kyc_status VARCHAR(32) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 02_addresses
CREATE TABLE addresses (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT REFERENCES users(id) ON DELETE CASCADE,
  line1 TEXT,
  city VARCHAR(150),
  state VARCHAR(150),
  pincode VARCHAR(20),
  country VARCHAR(100) DEFAULT 'India',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 03_forex_rates
CREATE TABLE forex_rates (
  id BIGSERIAL PRIMARY KEY,
  pair VARCHAR(16) NOT NULL,
  provider VARCHAR(100) NOT NULL,
  rate NUMERIC(18,8) NOT NULL,
  meta JSONB,
  fetched_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
CREATE INDEX idx_forex_pair_time ON forex_rates(pair, fetched_at DESC);

-- 04_orders
CREATE TABLE orders (
  id BIGSERIAL PRIMARY KEY,
  external_id VARCHAR(64) UNIQUE,
  user_id BIGINT REFERENCES users(id),
  type VARCHAR(16) NOT NULL, -- buy, sell, transfer, reload
  pair VARCHAR(16) NOT NULL,
  amount_src NUMERIC(18,2) NOT NULL, -- INR amount for buy/sell
  amount_dst NUMERIC(18,6), -- foreign currency qty
  effective_rate NUMERIC(18,8) NOT NULL,
  fees NUMERIC(18,2) DEFAULT 0,
  status VARCHAR(32) DEFAULT 'created', -- created, pending_kyc, confirmed, picked, completed, cancelled
  partner_id BIGINT NULL,
  kyc_doc_id BIGINT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 05_partners
CREATE TABLE partners (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  type VARCHAR(64), -- exchanger, bank, courier
  contact JSONB,
  active BOOLEAN DEFAULT TRUE,
  meta JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 06_cards
CREATE TABLE cards (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT REFERENCES users(id),
  bin VARCHAR(16),
  last4 VARCHAR(8),
  card_status VARCHAR(32),
  provider_meta JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 07_kyc_docs
CREATE TABLE kyc_docs (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT REFERENCES users(id),
  doc_type VARCHAR(64),
  file_key VARCHAR(512), -- s3 key
  status VARCHAR(32) DEFAULT 'uploaded',
  provider_verification JSONB,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 08_payments
CREATE TABLE payments (
  id BIGSERIAL PRIMARY KEY,
  order_id BIGINT REFERENCES orders(id),
  provider VARCHAR(100),
  provider_payment_id VARCHAR(200),
  amount NUMERIC(18,2),
  currency VARCHAR(8) DEFAULT 'INR',
  status VARCHAR(64),
  meta JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 09_audit_logs
CREATE TABLE audit_logs (
  id BIGSERIAL PRIMARY KEY,
  entity_type VARCHAR(64),
  entity_id BIGINT,
  action VARCHAR(128),
  payload JSONB,
  created_by BIGINT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

---

# Quick integration notes (to wire components to real backend)

* `/api/rates` → should return latest cached rates from `forex_rates` table; update via a worker that queries rate providers every 10–60s and writes to DB + Redis cache.
* `/api/orders` → validate user, snapshot rate (store `effective_rate`), create `orders` row, return `order_id`. Then create payment session (Razorpay/Stripe) server-side and return client token.
* KYC files → upload to signed S3 URL (server endpoint `POST /api/kyc/upload-url`) and then update `kyc_docs`.
* Use Redis for rate caching (`GET /rates:USDINR`) to avoid DB load.
* Secure API endpoints with JWT/OAuth and protect admin endpoints with RBAC.

---


