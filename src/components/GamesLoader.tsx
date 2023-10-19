"use client"
import { useGames } from "@/hooks/useGames";
import { Card } from "./Card";
import { Loader } from "./Loader";

export function GamesLoader() {
    const { games, isError, isLoading } = useGames();

    if(isLoading) return <Loader />;
    if(isError) return "Hubo un error...";

    return(
        <section className="relative p-4 grid grid-cols-3 gap-4 items-center place-items-center bg-marble sm:rounded-lg lg:rounded-2xl">
            {games.map((game , index) => (
                <Card game={game} key={index+game.id} />
            ))}
        </section>
    ) 
}