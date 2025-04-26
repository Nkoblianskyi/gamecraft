import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { blogPosts } from "@/data/blog-posts"

export default function BlogSection() {
  // Get latest 3 blog posts
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-600 dark:text-amber-400">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Discover articles about traditional wooden games, their history, and cultural significance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-48">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{formatDate(post.date)}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 line-clamp-3">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
          >
            Read All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
