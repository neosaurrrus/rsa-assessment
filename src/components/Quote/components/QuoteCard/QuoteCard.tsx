type Props  = {
    quotePrice: string,
    isAnnualQuote: boolean,
    setIsAnnualQuote: (_previousState: (prev:boolean) => boolean) => void
}

export default function QuoteCard({ isAnnualQuote, quotePrice, setIsAnnualQuote}: Props) {
    return (
        <section className='h-full w-[550px] p-6 bg-white dark:bg-gray-800 border border-gray-500 text-center flex flex-col justify-center gap-2'>
        <h2 className='text-5xl'>£{quotePrice}</h2> 
        <p className='text-2xl'>per {isAnnualQuote ? 'year' : 'month'}</p>
        <p className='px-16 mt-1'>This price includes Insurance Premium Tax at the current rate. No charge for paying monthly.</p>
        <div className='w-full flex justify-center'>
            <button
                className='w-3/4 h-12 border mt-2 font-bold text-white rounded-lg border-gray-800 bg-rsaBrand hover:scale-105 duration-300'
                onClick={() => setIsAnnualQuote((prev:boolean) => !prev)}
            >
                Switch to {isAnnualQuote ? 'monthly' : 'annual'}
            </button>
        </div>
        </section>
    )
}
