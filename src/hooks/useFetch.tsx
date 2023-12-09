import { useState, useEffect } from "react"

export const useFetch = <T,>(url: string) => {
    const [fetchedData, setFetchedData] = useState<T>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<unknown>(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url)
                if(!response.ok) throw new Error(response.statusText)
                const json = await response.json()
                setIsLoading(false)
                setFetchedData(json)
                setError("")
            } catch (error) {
                setError(error)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url])

    return {fetchedData, isLoading, error}
}