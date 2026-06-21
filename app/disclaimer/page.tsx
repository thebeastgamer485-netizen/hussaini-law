import type { Metadata } from 'next'
import { LegalShell } from '@/components/sections/LegalShell'
import { FIRM } from '@/lib/navigation'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description:
    'Important information about the use of content on the Hussaini Law Group website. General information only — not legal advice.',
}

const LAST_UPDATED = '21 June 2026'

export default function DisclaimerPage() {
  return (
    <LegalShell
      title="Disclaimer"
      intro="Please read this disclaimer carefully before relying on any information on this website."
      lastUpdated={LAST_UPDATED}
    >
      <h2>General information only</h2>
      <p>
        The information on this website is provided by Hussaini Law Group for general informational purposes only. It is
        not legal advice and must not be relied upon as a substitute for advice from a qualified legal practitioner about
        your particular circumstances. The law changes frequently and its application varies with the facts of each
        matter. You should not act, or refrain from acting, on the basis of any content on this website without first
        obtaining professional legal advice.
      </p>

      <h2>No solicitor–client relationship</h2>
      <p>
        Accessing this website, reading its content, or contacting us through it (including by submitting the contact
        form or sending an email) does not create a solicitor–client relationship between you and Hussaini Law Group. A
        solicitor–client relationship is established only once we have completed our conflict and identity checks and you
        have entered into a written costs agreement or engagement with us.
      </p>

      <h2>Confidential and time-critical information</h2>
      <p>
        Please do not send us confidential, sensitive or time-critical information through this website or by unencrypted
        email until a solicitor–client relationship has been established. Communications sent over the internet are not
        guaranteed to be secure or to be received, and unsolicited information may not be treated as confidential or
        privileged. If your matter is urgent, please telephone us on{' '}
        <a href={`tel:${FIRM.phoneTel}`}>{FIRM.phone}</a>.
      </p>

      <h2>Accuracy and currency</h2>
      <p>
        While we make reasonable efforts to ensure the information on this website is accurate and current at the time of
        publication, we make no representation or warranty as to its accuracy, completeness, reliability or suitability
        for any purpose. Content may not reflect the most recent legal developments and may be changed or removed at any
        time without notice.
      </p>

      <h2>External links</h2>
      <p>
        This website may contain links to external websites operated by third parties. We do not control or endorse those
        websites and are not responsible for their content or accuracy. Any reliance you place on third-party content is
        at your own risk.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Hussaini Law Group excludes all liability for any loss or damage
        (including indirect or consequential loss) suffered as a result of using, or relying on, the information on this
        website. Nothing in this disclaimer excludes any rights or remedies you may have under the Australian Consumer Law
        or any other law that cannot lawfully be excluded.
      </p>

      <h2>Regulation and professional standards</h2>
      <p>
        Hussaini Law Group is an Australian legal practice and its legal practitioners are regulated under the{' '}
        <strong>Legal Profession Uniform Law (NSW)</strong>. Liability is limited by a scheme approved under Professional
        Standards Legislation.
      </p>

      <h2>Contact us</h2>
      <p>If you have any questions about this disclaimer, please contact us:</p>
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
