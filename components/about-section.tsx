export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-600 dark:text-amber-400">
            Celebrating Wooden Game Traditions
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            At GameCraftUK, we're passionate about preserving and sharing the rich heritage of traditional wooden games.
            Our collection features meticulously crafted games that have entertained generations across cultures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-amber-50 dark:bg-gray-800 p-8 rounded-xl">
            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-amber-600 dark:text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Handcrafted Quality</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Each game in our collection is meticulously crafted using premium hardwoods and traditional woodworking
              techniques, ensuring exceptional quality and durability.
            </p>
          </div>

          <div className="bg-teal-50 dark:bg-gray-800 p-8 rounded-xl">
            <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-teal-600 dark:text-teal-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Historical Authenticity</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We research the historical origins and cultural significance of each game, preserving authentic gameplay
              while making them accessible to modern players.
            </p>
          </div>

          <div className="bg-rose-50 dark:bg-gray-800 p-8 rounded-xl">
            <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/50 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-rose-600 dark:text-rose-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Social Connection</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our games bring people together, fostering meaningful connections and creating memorable experiences
              across generations, just as they have for centuries.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">The GameCraftUK Story</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Founded in 2025, GameCraftUK began with a simple mission: to preserve and share the joy of traditional
                wooden games in an increasingly digital world. Our founder's passion for woodworking and game history
                led to the creation of our first Pliko board, which quickly gained popularity for its exceptional
                craftsmanship and authentic gameplay.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Today, we continue to expand our collection, researching and recreating historical games from around the
                world. Each piece in our collection represents our commitment to quality, authenticity, and the timeless
                joy of play.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-teal-500 opacity-20 rounded-lg"></div>
              <div className="absolute inset-4 border-2 border-dashed border-amber-600 dark:border-amber-400 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">Est. 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
