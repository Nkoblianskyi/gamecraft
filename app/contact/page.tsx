import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us - GameCraftUK",
  description: "Get in touch with GameCraftUK for more information about our traditional wooden games.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-amber-600 dark:text-amber-400">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-6">
                We'd love to hear from you! Whether you have questions about our traditional wooden games, want to learn
                more about the history of these timeless classics, or are interested in receiving our newsletter, please
                don't hesitate to get in touch.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Our Details</h2>
              <p className="mb-1">
                <strong>Address:</strong> 221B Baker Street, London, NW1 6XE, United Kingdom
              </p>
              <p className="mb-1">
                <strong>Phone:</strong> +44 20 7946 0123
              </p>
              <p className="mb-6">
                <strong>Email:</strong> info@gamecraftuk.com
              </p>

              <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
              <p className="mb-1">
                <strong>Monday to Friday:</strong> 9:00 AM - 6:00 PM
              </p>
              <p className="mb-1">
                <strong>Saturday:</strong> 10:00 AM - 4:00 PM
              </p>
              <p className="mb-6">
                <strong>Sunday:</strong> Closed
              </p>

              <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <p className="mb-4">
                  Stay updated with the latest news, articles, and information about traditional wooden games by
                  subscribing to our newsletter.
                </p>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
