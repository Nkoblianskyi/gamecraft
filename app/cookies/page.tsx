import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy - GameCraftUK",
  description: "Learn about how GameCraftUK uses cookies to enhance your browsing experience.",
}

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-amber-600 dark:text-amber-400">Cookie Policy</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-4">Last updated: April 26, 2025</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They
          are widely used to make websites work more efficiently and provide information to the owners of the site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
        <p>GameCraftUK uses cookies for several purposes, including:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Remembering your preferences and settings</li>
          <li>Understanding how you use our website</li>
          <li>Improving your experience on our site</li>
          <li>Ensuring the website functions properly</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Cookies</h3>
        <p>
          These cookies are necessary for the website to function properly. They enable core functionality such as
          security, network management, and accessibility. You may disable these by changing your browser settings, but
          this may affect how the website functions.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Analytics Cookies</h3>
        <p>
          These cookies help us understand how visitors interact with our website by collecting and reporting
          information anonymously. This helps us improve our website and your experience.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Cookies</h2>
        <p>
          Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or
          to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from
          version to version.
        </p>
        <p>
          Please note that blocking or deleting cookies may impact your experience on our website, as some features may
          not function properly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Our Cookie Policy</h2>
        <p>
          We may update our Cookie Policy from time to time. Any changes will be posted on this page with an updated
          revision date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>If you have any questions about our Cookie Policy, please contact us at:</p>
        <p>
          Email: info@gamecraftuk.com
          <br />
          Phone: +44 20 7946 0123
          <br />
          Address: 221B Baker Street, London, NW1 6XE, United Kingdom
        </p>
      </div>
    </div>
  )
}
