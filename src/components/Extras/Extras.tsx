import {useEffect, useState} from 'react'
import Extra from './components/Extra/Extra'


type ExtraType = {
    annualPrice: number,
    monthlyPrice: number,
    text: string,
    title: string
}

export default function Extras(){
    const [extras, setExtras] = useState<ExtraType[] | null>(null)
    
    useEffect(() => {
    fetch('http://localhost:3000/addons')
        .then(res => res.json())
        .then(res => setExtras(res))
        .catch(err => console.log(err))
    },[])

    if(!extras) {
        return null
    }

    return (
        <section>
            <h3>Tailor your cover with our optional extras</h3>
            {extras.map((extra: ExtraType) => (
                <Extra key={extra.title} extra={extra} />
            ))}
        </section>
    )
}
