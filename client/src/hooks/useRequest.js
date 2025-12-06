import { useEffect, useState } from "react";

const baseUrl = "https://softuni-react-project-336p.onrender.com/api";

export default function useRequest(url, initialState) {
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = async (url, method, data, config = {}) => {
        setLoading(true);
        setError(null);
        
        try {
            let options = {
                credentials: "include",
                ...config
            };

            if (method) {
                options.method = method;
            }

            if (data) {
                options.headers = {
                    "Content-Type": "application/json",
                    ...options.headers
                };
                options.body = JSON.stringify(data);
            }

            const response = await fetch(`${baseUrl}${url}`, options);
            if (response.status===404) {
                throw new Error( `Server Error: ${response.status} Not Found` );
            }

            if (!response.ok) {
               
                const errorResult = await response?.json()
              
                if (errorResult.message) {
                    throw new Error(errorResult.message) 
                    
                }
                
                throw new Error(errorResult.message|| `Server Error: ${errorResult.status}` );
            }

            if (response.status === 204) {
                return {};
            }

            return await response.json();
        } catch (error) {
            setError(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            
            try {
                const result = await request(url);
                setData(result);
            } catch (err) {
                console.error(err);
                setData(initialState);
            }
        };

        fetchData();
    }, [url]);

    return {
        request,
        data,
        setData,
        loading,
        error
    };
}