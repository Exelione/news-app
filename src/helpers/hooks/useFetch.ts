import { useEffect, useState } from "react"

interface FetchFunction<P, T>{
    (params?: P): Promise<T>
}
interface UseFetchRes<T>{
    data: T | null | undefined,
    isLoading: boolean,
    error: Error | null
}

export const useFetch = <T, P>(
    fetchFunction: FetchFunction<P,T>,
    params?: P
): UseFetchRes<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const stringParams = params ? new URLSearchParams(params).toString() : '';

    useEffect(()=> {
        (async () => {
        try {
            setIsLoading(true)
            const res = await fetchFunction(params)
            setData(res)
        }
        catch{
            setError(error)
           
        }
        finally{
            setIsLoading(false)
        }

    })();
    },[fetchFunction, stringParams]);

return {data, isLoading, error};

};