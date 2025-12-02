import { useEffect, useState } from "react";

const baseUrl = "https://softuni-react-project-336p.onrender.com/api";

export default function useRequest(url, initialState) {
    const [data, setData] = useState(initialState);
    const request = async (url, method, data, config = {}) => {
        let options = {
            credentials: "include",
        };

        if (method) {
            options.method = method;
        }

        if (data) {
            options.headers = {
                "Content-Type": "application/json",
            };
            options.body = JSON.stringify(data);
        }

        try {
            const response = await fetch(`${baseUrl}${url}`, options);

            if (!response.ok) {
                const errorResult = await response.json();
                throw new Error(errorResult.message || "Server error");
            }

            if (response.status === 204) {
                return {};
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Request failed:", error);
            throw error;
        }
    };

    useEffect(() => {
        if (!url) return;

        request(url)
            .then((result) => setData(result))
            .catch((err) => console.error(err));
    }, [url]);

    return {
        request,
        data,
        setData,
    };
}