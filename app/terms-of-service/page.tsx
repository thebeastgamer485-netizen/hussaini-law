import type { Metadata } from 'next'
import { LegalShell } from '@/components/sections/LegalShell'
import { FIRM } from '@/lib/navigation'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms governing your use of the Hussaini Law Group website, governed by the laws of New South Wales, Australia.',
}

const LAST_UPDATED = '21 June 2026'

export default function TermsOfServicePage() {
  return (
    <LegalShell
      title="Terms of Service"
      intro="These terms govern your access to and use of the Hussaini Law Group website."
      lastUpdated={LAST_UPDATED}
    >
      <p>
        These Terms of Service (<strong>&ldquo;Terms&rdquo;</strong>) apply to your access to and use of the website at
        hussainilaw.com.au (the <strong>&ldquo;Website&rdquo;</strong>), operated by Hussaini Law Group (
        <strong>&ldquo;we&rdquo;</strong>, <strong>&ldquo;us&rdquo;</strong> or <strong>&ldquo;our&rdquo;</strong>). By
        accessing or using the Website, you agree to be bound by these Terms. If you do not agree, please do not use the
        Website.
      </p>

      <h2>No legal advice</h2>
      <p>
        The content on this Website is provided for general information only. It does not constitute legal advice, is not
        a substitute for advice from a qualified legal practitioner, and should not be relied upon as such. Using the
        Website or contacting us through it does not create a solicitor–client relationship. Please see our{' '}
        <a href="/disclaimer">Disclaimer</a> for further detail.
      </p>

      <h2>Use of the Website</h2>
      <p>You agree to use the Website lawfully and not to:</p>
      <ul>
        <li>use the Website in any way that breaches any applicable law or regulation;</li>
        <li>
          interfere with or disrupt the Website, its servers, or networks, or attempt to gain unauthorised access to any
          part of it;
        </li>
        <li>introduce any virus, malware or other harmful code; or</li>
        <li>
          copy, reproduce, republish or distribute any content from the Website except as expressly permitted below or by
          law.
        </li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        Unless otherwise indicated, all content on the Website — including text, graphics, logos, images and design — is
        owned by or licensed to Hussaini Law Group and is protected by Australian and international intellectual property
        laws. You may view and print content for your own personal, non-commercial use, but you must not otherwise use,
        reproduce or modify it without our prior written consent.
      </p>

      <h2>Third-party links</h2>
      <p>
        The Website may contain links to third-party websites for your convenience. We do not control and are not
        responsible for the content, accuracy or practices of those websites, and a link does not imply our endorsement.
        You access third-party websites at your own risk.
      </p>

      <h2>Availability of the Website</h2>
      <p>
        We aim to keep the Website available and up to date, but we do not guarantee that it will be uninterrupted,
        error-free or secure. We may modify, suspend or discontinue any part of the Website at any time without notice.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, we exclude all liability for any loss or damage (including indirect or
        consequential loss) arising from your use of, or reliance on, the Website or its content.
      </p>
      <p>
        Nothing in these Terms excludes, restricts or modifies any consumer guarantee, right or remedy that you may have
        under the <strong>Australian Consumer Law</strong> or any other law that cannot lawfully be excluded. Where our
        liability cannot be excluded but can be limited, our liability is limited to the extent permitted by law.
      </p>

      <h2>Privacy</h2>
      <p>
        Your use of the Website is also governed by our <a href="/privacy-policy">Privacy Policy</a>, which explains how
        we handle your personal information.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of <strong>New South Wales, Australia</strong>. You submit to the
        non-exclusive jurisdiction of the courts of New South Wales and the Commonwealth of Australia in respect of any
        dispute arising in connection with the Website or these Terms.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. The current version will always be available on this page, and your
        continued use of the Website after any change constitutes acceptance of the updated Terms.
      </p>

      <h2>Contact us</h2>
      <p>If you have any questions about these Terms, please contact us:</p>
      <ul>
        <li>{FIRM.name}</li>
        <li>{FIRM.address}</li>
        <li>
          Phone: <a href={`tel:${FIRM.phoneTel}`}>{FIRM.phone}</a>
        </li>
        <li>
          Email: <a href={`mailto:${FIRM.email}`}>{FIRM.email}</a>
        </li>
      </ul>
    </LegalShell>
  )
}
