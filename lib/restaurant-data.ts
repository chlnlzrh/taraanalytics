// The Potbelly Restaurant Chain Data
export const RESTAURANTS = [
  {
    id: 'chanakyapuri',
    name: 'The Potbelly',
    location: 'Chanakyapuri',
    fullName: 'The Potbelly (Chanakyapuri)',
    address: 'Bihar Niwas Plot Behind Yashwant Place, Chanakyapuri, New Delhi 110002 India',
    type: 'flagship',
    monthlyRevenue: 485000,
    primeCost: 56.2,
    foodCost: 31.5,
    laborCost: 24.7,
    customerSatisfaction: 4.8,
    ebitdaMargin: 17.2,
    status: 'green'
  },
  {
    id: 'gurugram',
    name: 'The Potbelly Divine',
    location: 'Gurugram',
    fullName: 'The Potbelly Divine (Gurugram)',
    address: 'Sector 15, 32nd Milestone, Gurugram (Gurgaon) 110021 India',
    type: 'premium',
    monthlyRevenue: 395000,
    primeCost: 54.8,
    foodCost: 29.8,
    laborCost: 25.0,
    customerSatisfaction: 4.6,
    ebitdaMargin: 18.1,
    status: 'green'
  },
  {
    id: 'shahpur-jat',
    name: 'The Potbelly Rooftop Cafe',
    location: 'Shahpur Jat',
    fullName: 'The Potbelly Rooftop (Shahpur Jat)',
    address: '116-C, 4th Floor Shahpur Jat, New Delhi India',
    type: 'rooftop',
    monthlyRevenue: 365000,
    primeCost: 58.4,
    foodCost: 33.2,
    laborCost: 25.2,
    customerSatisfaction: 4.5,
    ebitdaMargin: 15.8,
    status: 'yellow'
  }
] as const;

export const CHAIN_METRICS = {
  totalRevenue: RESTAURANTS.reduce((sum, r) => sum + r.monthlyRevenue, 0),
  averageRevenue: RESTAURANTS.reduce((sum, r) => sum + r.monthlyRevenue, 0) / RESTAURANTS.length,
  averagePrimeCost: RESTAURANTS.reduce((sum, r) => sum + r.primeCost, 0) / RESTAURANTS.length,
  averageCustomerSatisfaction: RESTAURANTS.reduce((sum, r) => sum + r.customerSatisfaction, 0) / RESTAURANTS.length,
  averageEbitdaMargin: RESTAURANTS.reduce((sum, r) => sum + r.ebitdaMargin, 0) / RESTAURANTS.length,
  restaurantCount: RESTAURANTS.length
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};