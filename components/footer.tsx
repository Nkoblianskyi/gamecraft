import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-600 dark:text-amber-400">GameCraftUK</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Discover the joy of traditional wooden games with GameCraftUK. Explore our collection of handcrafted
              wooden games including Pliko and more.
            </p>
            <p className="text-gray-600 dark:text-gray-400">&copy; {currentYear} GameCraftUK. All rights reserved.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-600 dark:text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-600 dark:text-amber-400">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-600 dark:text-amber-400">Contact</h3>
            <address className="not-italic text-gray-600 dark:text-gray-400">
              <p className="mb-2">221B Baker Street</p>
              <p className="mb-2">London, NW1 6XE</p>
              <p className="mb-2">United Kingdom</p>
              <p className="mb-2">+44 20 7946 0123</p>
              <p className="mb-2">info@gamecraftuk.com</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  )
}
