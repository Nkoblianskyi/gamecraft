import type { Metadata } from "next"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { blogPosts } from "@/data/blog-posts"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found - GameCraftUK",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | GameCraftUK Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | GameCraftUK Blog`,
      description: post.excerpt,
      url: `https://gamecraftuk.com/blog/${post.slug}`,
      siteName: "GameCraftUK",
      locale: "en_GB",
      type: "article",
      publishedTime: post.date,
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-amber-600 dark:text-amber-400">{post.title}</h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="mx-2">•</span>
            <span>{post.readingTime} min read</span>
          </div>

          <div className="relative w-full h-80 md:h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <div className="prose dark:prose-invert max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}

            {post.sections &&
              post.sections.map((section, index) => (
                <div key={index} className="mt-8">
                  <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-6">
                      {paragraph}
                    </p>
                  ))}
                  {section.image && (
                    <div className="relative w-full h-64 my-6 rounded-xl overflow-hidden">
                      <Image
                        src={section.image || "/placeholder.svg"}
                        alt={section.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 768px"
                      />
                    </div>
                  )}
                </div>
              ))}

            <div className="mt-12 p-6 dark:bg-amber-900/20 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Interested in Traditional Games?</h3>
              <p className="mb-4">
                Explore our collection of traditional wooden games and discover the rich history and cultural
                significance behind these timeless classics.
              </p>
              <a
                href="/games"
                className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
              >
                Discover Our Games
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
