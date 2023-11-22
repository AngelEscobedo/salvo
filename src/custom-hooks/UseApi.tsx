import { useEffect, useState } from "react"

export const useApi = (url: RequestInfo | URL) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchApi = async () => {
        let data;
        const response = await fetch(url).catch(error => {
            throw new Error(error);
        });
        if (response && response.status) {
            data = await response?.json().catch((error: any) => {
                throw new Error(error);
            });
        }
        setLoading(false)
        setData(data)
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return { loading, data }
};
