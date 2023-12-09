import {Extra as ExtraType, ApiEndpoints} from 'types'
import Extra from './components/Extra/Extra'
import { useFetch } from 'hooks/useFetch'

type Props = {
    isAnnualQuote: boolean,
    setExtrasTotal: (_previousState: (prev: {annualTotal: number, monthlyTotal: number}) => {annualTotal: number, monthlyTotal: number}) => void
}

export default function Extras({isAnnualQuote, setExtrasTotal}: Props){
    const { fetchedData: extras = [], isLoading, error} = useFetch<ExtraType[]>(ApiEndpoints.EXTRAS)

     // Handle Loading or Error states
     if (isLoading) {
        return <div className="h-96 w-screen bg-red flex items-center justify-center">
            <h1 className='text-2xl animate-pulse'>Loading Extras...</h1>
        </div>
    }

    if (error) {
        return (
            <div className="h-96 w-screen bg-red flex items-center justify-center">
                <h1 className='text-2xl animate-pulse'>Sorry there was an error loading extras</h1>
                <p>{error.toString()}</p>
            </div>
        )
    }

    return (
        <section className='p-8'>
            <h3 className='text-3xl mb-8'>Tailor your cover with our optional extras</h3>
            <div className='w-full flex flex-wrap gap-8'>
                {extras.map((extra: ExtraType) => (
                    <Extra 
                        key={extra.title} 
                        extra={extra} 
                        isAnnualQuote={isAnnualQuote}
                        setExtrasTotal={setExtrasTotal}
                    />
                ))}
            </div>
        </section>
    )
}
