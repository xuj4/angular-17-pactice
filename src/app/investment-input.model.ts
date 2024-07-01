export type InvestmentInput = {
  initialInvestment: number,
  expectedReturn: number,
  duration: number, 
  annualInvestment: number
}

export type AnnualData = {
    year: number,
    interest: number, 
    valueEndOfYear: number, 
    annualInvestment: number, 
    totalInterest: number, 
    totalAmountInvested: number
}