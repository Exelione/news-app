import { useEffect, useState } from "react";


export const useDebounce = (value, delay) => {
    const [debouncedValye, setDebouncedValye] = useState(value);

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValye(value)
        }, delay);

        return () => {
            clearTimeout(handler)
        };        
    },[value, delay]);

    return debouncedValye
}