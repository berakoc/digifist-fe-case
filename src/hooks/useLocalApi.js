import useSWR from "swr";

export default function useLocalApi(key, fetcher) {
    const { data, error } = useSWR(key, fetcher);

    return {
        data,
        isLoading: !error && !data,
        isError: error,
    }
}