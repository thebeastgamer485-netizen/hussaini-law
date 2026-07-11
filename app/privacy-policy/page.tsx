import type { Metadata } from 'next'
import { LegalShell } from '@/components/sections/LegalShell'
import { FIRM } from '@/lib/navigation'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Hussaini Law Group collects, uses, stores and protects your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.',
  alternates: { canonical: '/privacy-policy' },
}

const LAST_UPDATED = '21 June 2026'

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      intro="Hussaini Law Group is committed to protecting your privacy and handling your personal information in accordance with Australian law."
      lastUpdated={LAST_UPDATED}
    >
      <p>
        This Privacy Policy explains how Hussaini Law Group (<strong>&ldquo;we&rdquo;</strong>,{' '}
        <strong>&ldquo;us&rdquo;</strong> or <strong>&ldquo;our&rdquo;</strong>) collects, uses, discloses and protects
        your personal information. We are bound by the <strong>Privacy Act 1988 (Cth)</strong> and the{' '}
        <strong>Australian Privacy Principles (APPs)</strong>, and as a legal practice we also handle your information in
        accordance with our professional and ethical obligations under the Legal Profession Uniform Law (NSW).
      </p>
      <p>
        By using this website or providing your information to us, you consent to the collection and use of your
        information as described in this policy.
      </p>

      <h2>What personal information we collect</h2>
      <p>The personal information we collect depends on your dealings with us, and may include:</p>
      <ul>
        <li>your name, email address, telephone number and postal address;</li>
        <li>the details of your legal enquiry or matter that you choose to provide;</li>
        <li>your preferred language of communication;</li>
        <li>
          information you submit through our online contact form, or provide by email, telephone or in person; and
        </li>
        <li>
          any other information reasonably necessary to provide legal services to you or to comply with our legal and
          professional obligations.
        </li>
      </ul>
      <p>
        Some of the information we collect may be <strong>sensitive information</strong> (for example, information about
        criminal matters, immigration status, health or family circumstances). We only collect sensitive information
        where it is reasonably necessary for your matter and, where required, with your consent or as otherwise permitted
        by law.
      </p>

      <h2>How we collect your information</h2>
      <p>We generally collect personal information directly from you, including when you:</p>
      <ul>
        <li>complete and submit the contact form on this website;</li>
        <li>contact us by email, telephone or in person; or</li>
        <li>engage us to act on your behalf.</li>
      </ul>
      <p>
        In the course of acting for you, we may also collect information about you from third parties such as courts and
        tribunals, government agencies, other parties to your matter, barristers, experts and other professional
        advisers, where it is reasonably necessary for your matter and permitted by law.
      </p>

      <h2>Why we collect and how we use your information</h2>
      <p>We collect, hold and use your personal information to:</p>
      <ul>
        <li>respond to your enquiries and provide you with legal advice and services;</li>
        <li>communicate with you about your matter;</li>
        <li>administer and manage our practice, including billing and record-keeping;</li>
        <li>comply with our legal, regulatory and professional obligations; and</li>
        <li>improve our services and this website.</li>
      </ul>

      <h2>Disclosure of your information</h2>
      <p>
        We do not sell your personal information. We may disclose your personal information where reasonably necessary for
        the purposes described above, including to:
      </p>
      <ul>
        <li>courts, tribunals, government and regulatory bodies;</li>
        <li>barristers, experts, mediators and other professional advisers engaged for your matter;</li>
        <li>other parties (and their representatives) to your matter, where appropriate; and</li>
        <li>
          third-party service providers who help us operate our practice and website (for example, IT, hosting, email
          and document-management providers), under obligations of confidentiality.
        </li>
      </ul>

      <h2>Overseas disclosure</h2>
      <p>
        Some of our service providers (including website hosting, email delivery and content-management providers) may
        store or process data on servers located outside Australia. Where we disclose personal information to overseas
        recipients, we take reasonable steps to ensure your information is handled consistently with the Australian
        Privacy Principles.
      </p>

      <h2>This website</h2>
      <p>
        When you submit our contact form, the information you provide is transmitted to us by email. Our web host may also
        collect standard technical information (such as your IP address and browser type) in server logs for security and
        operational purposes. We do not use this website to sell your information or to build marketing profiles.
      </p>

      <h2>Security of your information</h2>
      <p>
        We take reasonable steps to protect your personal information from misuse, interference and loss, and from
        unauthorised access, modification or disclosure. However, no method of transmission over the internet or
        electronic storage is completely secure, and you should not send us confidential or sensitive information through
        this website if you have concerns about security. Please contact us by telephone to arrange a secure method of
        communication.
      </p>

      <h2>Accessing and correcting your information</h2>
      <p>
        You may request access to the personal information we hold about you, and ask us to correct it if it is
        inaccurate, out of date, incomplete or misleading. To make a request, please contact us using the details below.
        We may need to verify your identity before providing access, and in limited circumstances permitted by law we may
        decline a request (in which case we will explain why).
      </p>

      <h2>Complaints</h2>
      <p>
        If you believe we have breached the Australian Privacy Principles or otherwise mishandled your personal
        information, please contact us using the details below so we can investigate and respond. If you are not satisfied
        with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at{' '}
        <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">
          www.oaic.gov.au
        </a>
        .
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The current version will always be available on this page,
        and the &ldquo;last updated&rdquo; date above indicates when it was last revised.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
      </p>
      <ul>
        <li>{FIRM.name}</li>
        <li>{FIRM.address}</li>
        <li>
          Phone:{' '}
          <a href={`tel:${FIRM.phoneTel}`}>{FIRM.phone}</a>
        </li>
        <li>
          Email:{' '}
          <a href={`mailto:${FIRM.email}`}>{FIRM.email}</a>
        </li>
      </ul>
    </LegalShell>
  )
}
