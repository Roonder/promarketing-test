import { Button } from "@/components/Button";
import Link from "next/link";
import { HiArchive } from "react-icons/hi"

export default function Buttons() { 
    return (
        <main className="p-2">

            <h2 className="text-primary uppercase font-bold text-3xl">¡Botones!</h2>

            <div className="w-full bg-marble p-2">
                <Link href={"/"}>
                    <Button text="¡Vuelve a los Juegos!"/>
                </Link>
            </div>

            <div className="mt-4 grid sm:grid-cols-3 items-center place-items-center lg:grid-cols-6 gap-10 p-10 w-full bg-marble sm:rounded-lg lg:rounded-2xl">
                <Button variant="accent" type="only-icon" icon={<HiArchive />} />
                    
                <Button text="Left" icon={<HiArchive />}/>
                    
                <Button variant="accent" type="icon-right" text="Right" icon={<HiArchive />}/>

                <Button variant="primary" type="contained" text="Contained" />

                <Button variant="accent-outline" type="outline" text="Outline" />

                <Button variant="primary-outline" type="outline" text="Outline"  />
            </div>
        </main>
    )
}