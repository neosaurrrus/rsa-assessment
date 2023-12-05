type ExtraType = {
    annualPrice: number,
    monthlyPrice: number,
    text: string,
    title: string
}

export default function Extra({extra}: {extra:ExtraType}) {
    const {annualPrice, monthlyPrice, text, title} = extra

    return (
        <div className='flex flex-col border p-4 gap-8'>
            <div className='flex justify-between'>
                <h4>{title}</h4>
                <span>£{monthlyPrice}</span>
            </div>
            <p>{text}</p>
            <div className='flex justify-end'>
                <button className='border'>Select this Extra</button>
            </div> 
        </div>
    )
} 