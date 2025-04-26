import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { blogPosts } from "@/data/blog-posts"

export const metadata: Metadata = {
  title: "Blog - GameCraftUK",
  description:
    "Explore our blog for articles about traditional wooden games, their history, and cultural significance.",
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-amber-600 dark:text-amber-400">Our Blog</h1>

        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-0">
              <Link href={`/blog/${post.slug}`} className="group">
                <div className="relative w-full h-64 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="mx-2">•</span>
                <span>{post.readingTime} min read</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-amber-600 dark:text-amber-400 font-medium hover:underline"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
