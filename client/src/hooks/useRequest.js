import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const baseUrl = "https://softuni-react-project-336p.onrender.com/api";

export default function useRequest(url, initialState) {
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = async (url, method, data, config = {}, signal) => {
        setLoading(true);
        setError(null);
        try {
            let options = {
                credentials: "include",
                signal,
                ...config,
            };

            if (method) {
                options.method = method;
            }

            if (data) {
                options.headers = {
                    "Content-Type": "application/json",
                    ...options.headers,
                };
                options.body = JSON.stringify(data);
            }

            const response = await fetch(`${baseUrl}${url}`, options);

            if (response.status === 404) {
                throw new Error(`Server Error: ${response.status} Not Found`);
            }

            if (!response.ok) {
                const errorResult = await response.json();
                if (errorResult.message) throw new Error(errorResult.message);
                throw new Error(
                    errorResult.message || `Server Error: ${errorResult.status}`
                );
            }

            if (response.status === 204) {
                return {};
            }

            return await response.json();
        } catch (error) {
            if (error.name === "AbortError") {
                console.log("Request aborted");
            } else {
                setError(error.message);
                toast.error(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!url) return;

        const controller = new AbortController();
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const result = await request(
                    url,
                    null,
                    null,
                    {},
                    controller.signal
                );
                setData(result);
            } catch (err) {
                console.error(err);
                setData(initialState);
            }
        };

        fetchData();

        return () => controller.abort();
    }, [url]);

    return {
        request,
        data,
        setData,
        loading,
        error,
    };
}
