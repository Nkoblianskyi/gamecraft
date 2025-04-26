import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-amber-50 dark:bg-gray-800 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-300 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-rose-300 rounded-full opacity-20 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Discover the Joy of <span className="text-amber-600 dark:text-amber-400">Traditional Wooden Games</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              Explore our collection of meticulously crafted wooden games, including the popular Pliko board. Experience
              centuries of gaming tradition brought to life with modern craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/games"
                className="px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
              >
                Explore Games
              </Link>
              <Link
                href="/blog"
                className="px-6 py-3 bg-white dark:bg-gray-700 text-amber-600 dark:text-amber-400 border border-amber-600 dark:border-amber-400 rounded-lg font-medium hover:bg-amber-50 dark:hover:bg-gray-600 transition-colors"
              >
                Read Our Blog
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/colorful-pegboard.png"
                alt="Traditional Wooden Pliko Game"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-100 dark:bg-amber-900/30 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-teal-100 dark:bg-teal-900/30 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
