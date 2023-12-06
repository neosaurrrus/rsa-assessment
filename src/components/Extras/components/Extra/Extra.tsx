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
        <div className='flex flex-col border p-4 gap-8'>
            <div className='flex justify-between'>
                <h4>{title}</h4>
                <span>£{priceToUse} per {isAnnualQuote ? 'year' : 'month'}</span>
            </div>
            <p>{text}</p>
            <div className='flex justify-end'>
                <button 
                    className='w-40 border'
                    aria-live='polite'
                    onClick={handleButtonClick}>
                    {isAdded ? 'Remove' : 'Select'} this Extra
                </button>
            </div> 
        </div>
    )
} 