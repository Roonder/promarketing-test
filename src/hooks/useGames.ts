import useSWR from 'swr';
import { Game } from '@/interfaces/Game';

const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    return await response.json();
};


export function useGames(): {
    games: Game[],
    isLoading: boolean,
    isError: boolean
} {
    const {data, error, isLoading} = useSWR("https://demo8881327.mockable.io/promarketing", fetcher);

    return {
        games: data,
        isLoading,
        isError: error
    }
}