import { useEffect, useState } from "react"

const useApi = (url: RequestInfo | URL) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchApi = async () => {
        let data;
        const response = await fetch(url).catch(error => {
            console.log(error);
        });
        if (response) {
            data = await response?.json().catch((error: any) => {
                console.log(error);
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

export default useApi;