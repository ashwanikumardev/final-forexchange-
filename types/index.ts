export interface Currency {
  code: string
  name: string
  symbol: string
  flag: string
}

export interface ExchangeRate {
  id: string
  baseCurrency: string
  targetCurrency: string
  buyRate: number
  sellRate: number
  lastUpdated: Date
  margin: number
}

export interface Order {
  id: string
  userId: string
  orderType: 'BUY' | 'SELL' | 'TRANSFER' | 'RELOAD'
  status: 'PENDING' | 'CONFIRMED' | 'PROCESSING' | 'COMPLETED' | 'CANCELLED'
  fromCurrency: string
  toCurrency: string
  fromAmount: number
  toAmount: number
  rate: number
  deliveryAddress?: string
  deliveryDate?: Date
  createdAt: Date
  updatedAt: Date
}

export interface User {
  id: string
  email: string
  name: string
  phone: string
  kycStatus: 'NOT_STARTED' | 'PENDING' | 'VERIFIED' | 'REJECTED'
  createdAt: Date
}

export interface ForexCard {
  id: string
  userId: string
  cardNumber: string
  cardType: string
  currency: string
  balance: number
  status: 'ACTIVE' | 'BLOCKED' | 'EXPIRED'
  expiryDate: Date
}

