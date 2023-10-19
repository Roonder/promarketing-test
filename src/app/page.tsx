import { GamesLoader } from "@/components/GamesLoader";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex flex-col gap-5 p-4">

      <div className="w-full bg-marble p-2">
        <Link href={"/buttons"}>
          <Button text="¡Display de los Botones!"/>
        </Link>
      </div>

      <h1 className="text-primary uppercase font-bold text-3xl text-center">¡Juegos!</h1>

      <GamesLoader />
      
    </main>
  )
}
