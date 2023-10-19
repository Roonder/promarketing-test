import { Card } from "@/components/Card";

const dull = {
  "id": 1,
  "disabled": true,
  "info": {
      "moodBonus": true,
      "rtp": "95.50%",
      "version": "v715"
  },
  "name": "Wolf Gold",
  "src": "https://cdn.wcbackoffice.com/winchile/providers/pragmatic/normal/Wolf_Gold_Power_Jackpot.jpeg",
  "supplier": "playtech"
}

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Card game={dull} />
    </main>
  )
}
