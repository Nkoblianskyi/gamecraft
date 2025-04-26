import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { games } from "@/data/games"

export const metadata: Metadata = {
  title: "Traditional Wooden Games - GameCraftUK",
  description: "Explore our collection of traditional wooden games, including Pliko and other historical classics.",
}

export default function GamesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-amber-600 dark:text-amber-400">
          Traditional Wooden Games
        </h1>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p>
            Discover our collection of meticulously crafted traditional wooden games. Each game represents centuries of
            history and cultural heritage, bringing timeless entertainment to the modern world.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="group block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-64">
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {game.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{game.origin}</p>
                <p className="text-gray-700 dark:text-gray-300 line-clamp-3">{game.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
