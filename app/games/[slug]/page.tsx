import type { Metadata } from "next"
import Image from "next/image"
import { games } from "@/data/games"
import { notFound } from "next/navigation"

interface GamePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game = games.find((game) => game.slug === params.slug)

  if (!game) {
    return {
      title: "Game Not Found - GameCraftUK",
      description: "The requested game could not be found.",
    }
  }

  return {
    title: `${game.name} - Traditional Wooden Game | GameCraftUK`,
    description: game.description.substring(0, 160),
    openGraph: {
      title: `${game.name} - Traditional Wooden Game | GameCraftUK`,
      description: game.description.substring(0, 160),
      url: `https://gamecraftuk.com/games/${game.slug}`,
      siteName: "GameCraftUK",
      locale: "en_GB",
      type: "article",
    },
  }
}

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }))
}

export default function GamePage({ params }: GamePageProps) {
  const game = games.find((game) => game.slug === params.slug)

  if (!game) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-amber-600 dark:text-amber-400">{game.name}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">{game.origin}</p>

          <div className="relative w-full h-80 md:h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={game.image || "/placeholder.svg"}
              alt={game.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">About {game.name}</h2>
            <p className="mb-6">{game.description}</p>

            <h2 className="text-2xl font-semibold mb-4">Historical Background</h2>
            <p className="mb-6">{game.history}</p>

            <h2 className="text-2xl font-semibold mb-4">How to Play</h2>
            <p className="mb-6">{game.howToPlay}</p>

            {game.funFacts && (
              <>
                <h2 className="text-2xl font-semibold mb-4">Fun Facts</h2>
                <ul className="list-disc pl-6 mb-6">
                  {game.funFacts.map((fact, index) => (
                    <li key={index} className="mb-2">
                      {fact}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-12 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Interested in {game.name}?</h3>
              <p className="mb-4">
                Want to learn more about this fascinating game? Contact us for more information about the history,
                variations, and cultural significance of {game.name}.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
              >
                Get More Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
