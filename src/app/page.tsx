import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { HiArchive } from "react-icons/hi"

export default function Home() {
  return (
    <main>
      {/* <Card /> */}
      <Button variant="accent" type="only-icon" icon={<HiArchive />} />
        
      <Button text="Left" icon={<HiArchive />}/>
        
      <Button variant="accent" type="icon-right" text="Right" icon={<HiArchive />}/>

      <Button variant="primary" type="contained" text="Contained" />

      <Button variant="accent-outline" type="outline" text="Outline" />

      <Button variant="primary-outline" type="outline" text="Outline"  />
    </main>
  )
}
