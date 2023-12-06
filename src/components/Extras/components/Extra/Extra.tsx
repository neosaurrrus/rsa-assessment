import { useState } from "react"

type ExtraType = {
    annualPrice: number,
    monthlyPrice: number,
    text: string,
    title: string
}

type Props = {
    extra: ExtraType,
    isAnnualQuote: boolean,
    setExtrasTotal: (_previousState: (prev: {annualTotal: number, monthlyTotal: number}) => {annualTotal: number, monthlyTotal: number}) => void
}

export default function Extra({extra, isAnnualQuote, setExtrasTotal}: Props) {
    const {annualPrice, monthlyPrice, text, title} = extra
    
    const [isAdded, setIsAdded] = useState(false)
    const priceToUse = isAnnualQuote ? annualPrice : monthlyPrice

    function handleButtonClick ()  {
        if(isAdded) {
            setExtrasTotal(prev => {
                return {
                    ...prev, 
                    annualTotal: prev.annualTotal-annualPrice,
                    monthlyTotal: prev.monthlyTotal-monthlyPrice,
                }
            }) 
        } else {
            setExtrasTotal(prev => {
                return {
                    ...prev, 
                    annualTotal: prev.annualTotal+annualPrice,
                    monthlyTotal: prev.monthlyTotal+monthlyPrice,
                }
            }) 
        }
        setIsAdded(prev => !prev)
    }

    return (
        <div className='w-[500px] flex flex-col border border-gray-400 p-6 gap-6 bg-white justify-between'>
            <div>
                <div className='flex justify-between items-center mb-8'>
                    <h4 className='text-2xl'>{title}</h4>
                    <span>£{priceToUse} per {isAnnualQuote ? 'year' : 'month'}</span>
                </div>
                 <p>{text}</p>
            </div>
            <div className='flex justify-end'>
                <button 
                    className='w-48 h-12 border mt-2 font-bold rounded-lg border-gray-800 bg-gray-200'
                    aria-live='polite'
                    onClick={handleButtonClick}>
                    {isAdded ? 'Remove' : 'Select'} this Extra
                </button>
            </div> 
        </div>
    )
} 