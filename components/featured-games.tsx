import Link from "next/link"
import Image from "next/image"
import { games } from "@/data/games"

export default function FeaturedGames() {
  // Get first 3 games for featured section
  const featuredGames = games.slice(0, 3)

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-600 dark:text-amber-400">
            Popular Traditional Games
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Explore our collection of meticulously crafted traditional wooden games, each with its own rich history and
            unique gameplay.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredGames.map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="group block bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
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
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {game.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{game.origin}</p>
                <p className="text-gray-700 dark:text-gray-300 line-clamp-3">{game.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/games"
            className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
          >
            View All Games
          </Link>
        </div>
      </div>
    </section>
  )
}
