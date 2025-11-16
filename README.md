# BookMyForex Clone

A comprehensive foreign exchange and financial services platform built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Services
- **Currency Exchange**: Buy/sell foreign currency notes at competitive rates
- **Forex Cards**: Zero markup multi-currency cards accepted in 200+ countries
- **Money Transfer**: International money transfers with partner banks
- **Card Management**: Reload/unload forex cards online
- **Live Rates**: Real-time exchange rates updated every 5 seconds
- **Rate Alerts**: Get notified when rates reach your target

### User Features
- User authentication (Login/Register)
- Personal dashboard with order tracking
- KYC verification workflow
- Order history and management
- Forex card balance tracking
- Rate comparison and calculator

### Platform Features
- Responsive design (mobile, tablet, desktop)
- Real-time rate updates
- Secure payment integration ready
- SEO optimized
- Fast performance with Next.js 14

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **State Management**: React Hooks
- **API**: Next.js API Routes
- **Payment**: Razorpay integration
- **Database**: PostgreSQL (schema provided)
- **Deployment**: Vercel ready

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd bookmyforex-clone
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
bookmyforex-clone/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── rates/               # Exchange rates API
│   │   └── orders/              # Orders API
│   ├── exchange-currency/       # Currency exchange page
│   ├── forex-cards/             # Forex cards page
│   ├── transfer-money/          # Money transfer page
│   ├── dashboard/               # User dashboard
│   ├── login/                   # Login page
│   ├── register/                # Registration page
│   ├── rates/                   # Live rates page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
├── components/
│   ├── layout/                  # Header, Footer
│   ├── home/                    # Homepage components
│   ├── rates/                   # Rate components
│   ├── exchange/                # Exchange form
│   ├── transfer/                # Transfer form
│   ├── forex-cards/             # Forex card components
│   └── dashboard/               # Dashboard components
├── lib/
│   ├── db/                      # Database utilities
│   │   └── schema.sql          # PostgreSQL schema
│   └── utils.ts                 # Utility functions
├── types/                       # TypeScript types
└── public/                      # Static assets
```

## 🎨 Pages

1. **Homepage** (`/`) - Hero section, services, rate ticker, converter
2. **Exchange Currency** (`/exchange-currency`) - Buy/sell currency notes
3. **Forex Cards** (`/forex-cards`) - Browse and order forex cards
4. **Money Transfer** (`/transfer-money`) - International money transfers
5. **Live Rates** (`/rates`) - Real-time exchange rates with alerts
6. **Dashboard** (`/dashboard`) - User account overview
7. **Login** (`/login`) - User authentication
8. **Register** (`/register`) - New user registration

## 🗄️ Database Setup

The PostgreSQL schema is provided in `lib/db/schema.sql`. To set up:

```bash
# Create database
createdb bookmyforex

# Run schema
psql bookmyforex < lib/db/schema.sql
```

## 🔧 Environment Variables

Create a `.env.local` file:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/bookmyforex
NEXT_PUBLIC_API_URL=http://localhost:3000/api
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

## 🚀 Deployment

Deploy to Vercel:

```bash
npm run build
vercel deploy
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 💳 Payment Integration

The application now includes **Razorpay payment integration** (demo/test mode):

- **Payment API**: `/api/payment` - Creates Razorpay orders
- **Cart Checkout**: Integrated Razorpay checkout in cart page
- **Success Page**: `/payment-success` - Payment confirmation page
- **Failure Page**: `/payment-failed` - Payment error handling

### Demo Payment Setup

The integration uses Razorpay test keys by default. For production:

1. Get your Razorpay keys from [Razorpay Dashboard](https://dashboard.razorpay.com)
2. Add to `.env.local`:
   ```env
   RAZORPAY_KEY_ID=your_key_id
   RAZORPAY_KEY_SECRET=your_key_secret
   ```

### Testing Payments

Use Razorpay test cards:
- **Success**: 4111 1111 1111 1111
- **Failure**: 4000 0000 0000 0002
- **CVV**: Any 3 digits
- **Expiry**: Any future date

## 🎯 Next Steps

1. **Backend Integration**: Connect to real database and APIs
2. **Payment Gateway**: ✅ Razorpay integrated (demo mode)
3. **Authentication**: Implement JWT/OAuth
4. **KYC Integration**: Connect to KYC verification services
5. **Rate Provider**: Integrate live forex rate APIs
6. **Email/SMS**: Add notification services
7. **Admin Panel**: Build admin dashboard
8. **Testing**: Add unit and integration tests

## 📄 License

ISC

## 👨‍💻 Author

BookMyForex Clone - Built with ❤️ using Next.js

# final-forexchange-
