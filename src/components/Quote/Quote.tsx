import { useEffect, useState} from "react"

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

type Props = {
    isAnnualQuote: boolean,
    setIsAnnualQuote: (_previousState: (prev:boolean) => boolean) => void
    extrasTotal: {annualTotal: number, monthlyTotal: number}
}

export default function Quote({isAnnualQuote, setIsAnnualQuote, extrasTotal}: Props){
    const [quote, setQuote] = useState<QuoteType | null>(null)
    const {firstName, address1, address2, address3, quoteRef, startDate, monthlyPrice = 0, annualPrice = 0} = quote || {}
    

    const formattedAddress = `${address1} ${address2 ? `, ${address2}` : ''} ${address3 ? `, ${address3}` : ''}`
    const formattedStartDate =  startDate && new Date(startDate).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})
    const quotePriceToUse = (isAnnualQuote ? annualPrice : monthlyPrice)
    const extrasTotalToUse = isAnnualQuote ? extrasTotal.annualTotal : extrasTotal.monthlyTotal

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
        <section className='flex flex-wrap w-full justify-between'>
            <div className="flex flex-col gap-4 p-8 justify-center h-full">
                <h2 className='text-3xl mb-4'>Hey {firstName},</h2>
                <p>Here is your quote for {formattedAddress}</p>
                <p>Quote reference: {quoteRef}</p>
                <p>Cover starts on {formattedStartDate}.</p>
            </div>

           <div className='p-8'>
                <div className='h-full w-[550px] p-6 bg-white border border-black text-center flex flex-col justify-center gap-2 '>
                    <h2 className='text-5xl'>£{(quotePriceToUse + extrasTotalToUse).toFixed(2) }</h2> 
                    <p className='text-2xl'>per {isAnnualQuote ? 'year' : 'month'}</p>
                    <p className="px-16 mt-1">This price includes Insurance Premium Tax at the current rate. No charge for paying monthly.</p>
                    <div className="w-full flex justify-center">
                        <button
                            className='w-96 h-12 border mt-2 font-bold rounded-lg border-gray-800 bg-gray-200'
                            onClick={() => setIsAnnualQuote((prev:boolean) => !prev)}
                        >
                            Switch to {isAnnualQuote ? 'monthly' : 'annual'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}