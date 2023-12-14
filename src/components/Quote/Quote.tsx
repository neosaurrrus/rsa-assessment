import { useFetch } from 'hooks/useFetch'
import {Quote as QuoteType, ApiEndpoints} from 'types/index' 
import QuoteCard from './components/QuoteCard/QuoteCard'

type Props = {
    isAnnualQuote: boolean,
    setIsAnnualQuote: (_previousState: (prev:boolean) => boolean) => void
    extrasTotal: {annualTotal: number, monthlyTotal: number}
}

export default function Quote({isAnnualQuote, setIsAnnualQuote, extrasTotal}: Props){
    const { fetchedData: quote = [], isLoading, error} = useFetch<QuoteType[]>(ApiEndpoints.QUOTE)

    const {firstName, address1, address2, address3, quoteRef, startDate, monthlyPrice = 0, annualPrice = 0} = quote[0] || {}
    
    const formattedAddress:string = `${address1} ${address2 ? `, ${address2}` : ''} ${address3 ? `, ${address3}` : ''}`
    const formattedStartDate =  startDate && new Date(startDate).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})
    const quotePrice = (isAnnualQuote ? annualPrice + extrasTotal.annualTotal : monthlyPrice + extrasTotal.monthlyTotal).toFixed(2)

    if (isLoading || error) {
        return <div className='h-96 w-screen bg-red flex items-center justify-center'>
            <h1 className='text-2xl animate-pulse'>{error ? 'Sorry! There was an error getting your quote' : 'Loading Your Quote...'}</h1>
        </div>
    }

    return (
        <div className='flex flex-wrap p-8 pt-10 gap-8 items-center w-full '>
            <section className='flex flex-col gap-4 justify-center w-[550px]'>
                <h2 className='text-5xl mb-8'>Hey {firstName},</h2>
                <p>Here is your quote for {formattedAddress}</p>
                <p>Quote reference: {quoteRef}</p>
                <p>Cover starts on {formattedStartDate}.</p>
            </section>
            <QuoteCard isAnnualQuote={isAnnualQuote} quotePrice={quotePrice} setIsAnnualQuote={setIsAnnualQuote}/>
        </div>
    )
}
