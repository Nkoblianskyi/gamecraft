export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-600 dark:text-amber-400">Contact Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We'd love to hear from you! Whether you have questions about our traditional wooden games, want to learn
            more, or are interested in receiving our newsletter, please don't hesitate to get in touch.
          </p>
        </div>
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
