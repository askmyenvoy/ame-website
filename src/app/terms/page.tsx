import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of service',
  description:
    'Read the Ask My Envoy terms of service governing use of the platform, accounts, subscriptions, and related services.',
  alternates: {
    canonical: 'https://askmyenvoy.com/terms',
  },
  robots: 'index, follow',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface-base">
      <section className="section-standard">
        <div className="container-3xl">

          {/* Header */}
          <div className="mb-12">
            <h1 className="hero-heading text-ink-primary mb-4">
              Terms of Service
            </h1>
            <p className="text-meta text-copy-muted">Last updated: October 2026</p>
          </div>

          <div className="prose prose-gray max-w-none stack-xl text-body text-copy-primary">

            <p>
              These Terms of Service ("Terms") govern your use of Ask My Envoy (the "Services").
              By using the Services, you agree to these Terms.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">1. Provider</h2>
              <p>
                Ask My Envoy is operated by Ask My Envoy, a French SASU with share capital of €1,000, registered with the Paris Trade and Companies Register under SIREN 106 746 670, VAT number FR51 106 746 670, with its registered office at 48 rue de Moscou, 75008 Paris, France ("we", "us").
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">2. Access and service plans</h2>
              <ul className="stack-xs list-disc list-inside">
                <li>The Services may evolve as we improve features, reliability and performance.</li>
                <li>We may update, modify or discontinue features where necessary, subject to applicable law and contractual commitments.</li>
                <li>Access to certain features depends on your service plan and account configuration.</li>
              </ul>
              <p className="mt-4">
                <strong>Free participation.</strong> You may connect your calendar and use the Trust Center without purchasing a subscription or prepaid credits. This allows authorized Envoys to coordinate meetings with you according to the permissions you grant.
              </p>
              <p className="mt-4">
                <strong>Pay Per Completion.</strong> You may obtain your own Envoy without a recurring subscription and pay for successfully completed bookings using prepaid credits. Eligible new customers receive their first five completed bookings free of charge.
              </p>
              <p className="mt-4">
                <strong>Paid subscriptions.</strong> Subscription plans provide access to the features and usage allowances specified in the selected plan. Subscription pricing and billing conditions are presented before purchase.
              </p>
              <p className="mt-4">
                The pricing and features applicable to each plan are described on our{' '}
                <a href="/pricing" className="text-ink-primary underline underline-offset-2">
                  Pricing
                </a>{' '}
                page.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">3. Your account</h2>
              <ul className="stack-xs list-disc list-inside">
                <li>You're responsible for activity under your account.</li>
                <li>Don't share access in a way that compromises security.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">4. Acceptable use</h2>
              <p>You agree not to:</p>
              <ul className="mt-3 stack-xs list-disc list-inside">
                <li>Attempt to bypass security, scrape, reverse engineer, or disrupt the Services.</li>
                <li>Use the Services for unlawful activity or to violate others' rights.</li>
                <li>Upload malicious content or abuse the platform.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">5. Calendar connections</h2>
              <p>
                If you connect a calendar provider such as Google Calendar or Microsoft Outlook, you authorize Ask
                My Envoy to access and process calendar data as permitted by the permissions you grant.
              </p>
              <p className="mt-4">
                If you connect your calendar so that another person&apos;s Envoy can coordinate meetings with you, and
                you authorize that access, that Envoy can access only your free/busy availability for the relevant
                period. It cannot access your meeting titles, participants, descriptions, locations or other event
                details.
              </p>
              <p className="mt-4">
                If you have your own Envoy, it can access the full details of your calendar, including meeting
                titles, participants, descriptions, locations and other event information, as needed to schedule,
                reschedule or cancel meetings on your behalf.
              </p>
              <p className="mt-4">
                You remain responsible for managing the permissions and access you grant through Ask My Envoy and
                your calendar provider.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">6. Availability of the Services</h2>
              <p>
                The Services are provided as is and as available. We do not guarantee uninterrupted or error-free operation or continuous availability.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">7. Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, we are not liable for indirect or consequential damages, including loss of data, revenue or profits.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">8. Billing and cancellation</h2>
              <p>
                <strong>Pay Per Completion.</strong> Under this plan, you are charged for each successfully completed booking at the rate applicable to your account.
              </p>
              <p className="mt-4">
                A booking is considered completed when Ask My Envoy successfully creates the corresponding calendar event following your instructions.
              </p>
              <p className="mt-4">
                Unsuccessful booking attempts are not charged. A subsequent cancellation of a successfully completed booking does not automatically entitle you to a refund of the original booking charge.
              </p>
              <p className="mt-4">
                The first five successfully completed bookings are free for eligible new customers.
              </p>
              <p className="mt-4">
                <strong>Subscriptions.</strong> Subscriptions are billed in advance at the price and frequency shown when you subscribe. Unless otherwise stated, subscriptions renew automatically until cancelled.
              </p>
              <p className="mt-4">
                You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period unless otherwise stated.
              </p>
              <p className="mt-4">
                Cancelling a subscription does not automatically terminate your Ask My Envoy account or access to free participation features.
              </p>
              <p className="mt-4">
                <strong>Pricing and promotional offers.</strong> The applicable rates are disclosed before purchase and are available on our{' '}
                <a href="/pricing" className="text-ink-primary underline underline-offset-2">
                  Pricing
                </a>{' '}
                page.
              </p>
              <p className="mt-4">
                Customers eligible for the Web Summit 2026 promotional offer who register before December 31, 2026, retain the promotional Pay Per Completion rate for future eligible bookings without a fixed expiration date.
              </p>
              <p className="mt-4">
                Changes to standard pricing do not affect permanent promotional rates previously granted to eligible customers.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">9. Prepaid credits</h2>
              <p>
                Pay Per Completion operates through prepaid credits purchased in advance.
              </p>
              <p className="mt-4">
                An initial purchase of at least €5 is required to continue using paid coordination services after the free booking allowance has been exhausted. All subsequent credit purchases are also subject to a minimum of €5.
              </p>
              <p className="mt-4">
                Each successfully completed booking deducts the applicable charge from your available credit balance.
              </p>
              <p className="mt-4">
                Purchased credits are valid for 12 months from their purchase date. Each additional credit purchase has its own validity period. Credits are consumed in order of purchase, starting with the oldest available credits.
              </p>
              <p className="mt-4">
                Unused credits expire at the end of their validity period and cannot be used for subsequent bookings.
              </p>
              <p className="mt-4">
                When your available balance is insufficient to cover a booking, paid coordination services are suspended until additional credits are purchased.
              </p>
              <p className="mt-4">
                Prepaid credits are non-refundable, except where required by applicable law. Closing your account does not entitle you to a refund of unused credits beyond any mandatory statutory rights.
              </p>
              <p className="mt-4">
                Credits are intended exclusively for purchasing Ask My Envoy services. They cannot be transferred to another account or redeemed for cash, except where required by applicable law.
              </p>
              <p className="mt-4">
                Credit expiration does not affect any permanent promotional booking rate associated with your account.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">10. Consumer withdrawal rights</h2>
              <p>
                If you are a consumer, you may benefit from a statutory right of withdrawal within 14 days of entering into a distance contract, in accordance with applicable French and European Union law.
              </p>
              <p className="mt-4">
                If you expressly request that paid services begin during the withdrawal period, you may be required to pay for services already performed before exercising your withdrawal right, as permitted by applicable law.
              </p>
              <p className="mt-4">
                Where a service has been fully performed following your express request and acknowledgment of the resulting loss of withdrawal rights, that service may no longer qualify for withdrawal.
              </p>
              <p className="mt-4">
                Unused prepaid credits will be refunded where required by applicable law, including following the valid exercise of a statutory withdrawal right.
              </p>
              <p className="mt-4">
                Refunds required by law will be processed in accordance with applicable statutory deadlines and payment requirements.
              </p>
              <p className="mt-4">
                Nothing in these Terms limits any mandatory consumer protection rights.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">11. Governing law</h2>
              <p>
                These Terms are governed by French law, without prejudice to any mandatory consumer protection
                rights that may apply under the laws of your country of residence.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="item-heading text-ink-primary mb-3">12. Contact</h2>
              <p>
                Questions:{' '}
                <a href="mailto:legal@askmyenvoy.com" className="text-ink-primary underline underline-offset-2">
                  legal@askmyenvoy.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
