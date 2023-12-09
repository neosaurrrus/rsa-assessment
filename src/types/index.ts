export type Quote = {
    address1: string,
    address2: string,
    address3: '',
    annualPrice: number,
    firstName: string
    lastName: string,
    monthlyPrice: number,
    postcode: string
    quoteRef: string
    startDate: Date,
    town: string
}

export type Extra = {
    annualPrice: number,
    monthlyPrice: number,
    text: string,
    title: string
}

export enum ApiEndpoints { // In reality this would likely be an environment variable
 QUOTE = 'http://localhost:3000/quote',
 EXTRAS = 'http://localhost:3000/addons' 
}