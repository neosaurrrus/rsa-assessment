import { useEffect, useState } from "react"

type QuoteType = {
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

export default function Quote(){
    const [quote, setQuote] = useState<QuoteType | null>(null)
    const {firstName, address1, address2, address3, quoteRef, startDate, monthlyPrice} = quote || {}
    const formattedStartDate =  startDate && new Date(startDate).toDateString()

    useEffect(() => {
        fetch('http://localhost:3000/quote')
            .then(res => res.json())
            .then(res => setQuote(res[0]))
            .catch(err => console.log(err))
    }, [])

    
    if (!quote) {
        return null 
    }

    return (
        <section className='flex bg-slate-200 w-full h-64'>
            <div className="flex flex-col gap-4 h-48 p-4 justify-center">
                <h2 className='text-2xl'>Hey {firstName},</h2>
                <p>Here is your quote for Royal & Sun Alliance FORMAT FUNCTION{address1}, {address2}, {address3}</p>
                <p>Quote reference: {quoteRef}</p>
                <p>Cover starts on {formattedStartDate}.</p>
            </div>

            <div className='w-full p-8'>
                <div className='h-full w-full border border-black text-center'>
                    <h2 className='text-4xl'>£{monthlyPrice}</h2>
                    <p>per month</p>
                    <p>This price includes Insurance Premium Tax at the current rate. No charge for paying monthly</p>
                    <button>Switch to annual</button>
                </div>
            </div>
        </section>
    )
}

// Quote Card