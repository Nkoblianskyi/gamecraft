import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - GameCraftUK",
  description: "Learn about how GameCraftUK protects your privacy and handles your personal data.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-amber-600 dark:text-amber-400">Privacy Policy</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-4">Last updated: April 26, 2025</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
        <p>
          GameCraftUK ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you visit our website gamecraftuk.com (the
          "Site").
        </p>
        <p>
          Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please
          do not access the Site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Personal Data</h3>
        <p>
          We may collect personal identification information from you in a variety of ways, including, but not limited
          to, when you visit our site, register on the site, subscribe to our newsletter, respond to a survey, fill out
          a form, and in connection with other activities, services, features, or resources we make available on our
          Site. You may be asked for, as appropriate:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Mailing address</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Non-Personal Data</h3>
        <p>
          We may collect non-personal identification information about you whenever you interact with our Site.
          Non-personal identification information may include the browser name, the type of computer, and technical
          information about your means of connection to our Site, such as the operating system and the Internet service
          providers utilized and other similar information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <p>We may use the information we collect from you in the following ways:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            To personalize your experience and to deliver content and product offerings relevant to your interests
          </li>
          <li>To improve our website in order to better serve you</li>
          <li>To allow us to better service you in responding to your customer service requests</li>
          <li>To administer a contest, promotion, survey, or other site feature</li>
          <li>To send periodic emails regarding your order or other products and services</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Protection of Your Information</h2>
        <p>
          We adopt appropriate data collection, storage, and processing practices and security measures to protect
          against unauthorized access, alteration, disclosure, or destruction of your personal information, username,
          password, transaction information, and data stored on our Site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing Your Personal Information</h2>
        <p>
          We do not sell, trade, or rent your personal identification information to others. We may share generic
          aggregated demographic information not linked to any personal identification information regarding visitors
          and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Websites</h2>
        <p>
          You may find content on our Site that links to the sites and services of our partners, suppliers, advertisers,
          sponsors, licensors, and other third parties. We do not control the content or links that appear on these
          sites and are not responsible for the practices employed by websites linked to or from our Site. In addition,
          these sites or services, including their content and links, may be constantly changing. These sites and
          services may have their own privacy policies and customer service policies. Browsing and interaction on any
          other website, including websites which have a link to our Site, is subject to that website's own terms and
          policies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p>
          GameCraftUK has the discretion to update this Privacy Policy at any time. We encourage you to frequently check
          this page for any changes. You acknowledge and agree that it is your responsibility to review this Privacy
          Policy periodically and become aware of modifications.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Acceptance of These Terms</h2>
        <p>
          By using this Site, you signify your acceptance of this Privacy Policy. If you do not agree to this Privacy
          Policy, please do not use our Site. Your continued use of the Site following the posting of changes to this
          Privacy Policy will be deemed your acceptance of those changes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this
          site, please contact us at:
        </p>
        <p>
          GameCraftUK
          <br />
          221B Baker Street
          <br />
          London, NW1 6XE
          <br />
          United Kingdom
          <br />
          Phone: +44 20 7946 0123
          <br />
          Email: info@gamecraftuk.com
        </p>
      </div>
    </div>
  )
}
