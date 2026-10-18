import type { Metadata } from 'next';
import { CheckIcon } from '@heroicons/react/24/solid';
import Card from '../components/Card';
import LoginButton from '../components/LoginButton';
import ContactButton from '../components/ContactButton';

export const metadata: Metadata = {
  title: 'Pricing for AI meeting coordination',
  description:
    'Explore Ask My Envoy pricing for meeting coordination across calendars and organizations, with plans designed to reduce scheduling back-and-forth.',
  alternates: {
    canonical: 'https://askmyenvoy.com/pricing',
  },
  robots: 'index, follow',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-compact bg-surface-base">
        <div className="container-4xl">
          <div className="flow-md items-center">
            <h1 className="hero-heading text-center text-ink-primary">
              Three ways to use Ask My Envoy
            </h1>

            <p className="text-lead text-center text-copy-muted max-w-3xl">
              Connect your calendar for free, or get your own Envoy and pay per completion or through a monthly subscription.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-loose bg-surface-soft">
        <div className="container-7xl">
          <div className="grid-three items-stretch pt-3">
            <div className="bg-surface-base rounded-2xl p-8 md:p-10 flex flex-col h-full border border-line-default shadow-sm">
              <h2 className="section-subheading text-ink-primary mb-6">
                Share my calendar
              </h2>

              <div className="mb-2">
                <span className="text-5xl font-semibold text-emphasis-primary">Free</span>
              </div>

              <p className="text-body text-copy-muted mb-6">
                Let others coordinate meetings with you.
              </p>

              <p className="text-body text-copy-primary mb-8">
                Connect your calendar so other people&apos;s Envoys can coordinate meetings with you.
              </p>

              <h3 className="text-sm font-semibold text-ink-primary mb-4 uppercase tracking-wide">
                Included:
              </h3>

              <ul className="stack-xs">
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">
                    Control who can access your calendar availability through your Trust Center.
                  </span>
                </li>
              </ul>

              <div className="mt-auto pt-10 flow-xs items-center">
                <LoginButton size="large" className="px-10">
                  Connect my calendar
                </LoginButton>
              </div>
            </div>

            <div className="relative flex flex-col h-full">
              <p
                className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-emphasis-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-copy-inverse shadow-sm"
                aria-hidden="true"
              >
                Web Summit promo
              </p>

              <div className="bg-surface-base rounded-2xl p-8 md:p-10 flex flex-col h-full flex-1 border-2 border-emphasis-primary shadow-md">
              <h2 className="section-subheading text-ink-primary mb-6">
                Pay per booking
              </h2>

              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-semibold text-emphasis-primary leading-tight">
                  €0.30 / booking
                </span>
              </div>

              <p className="text-body text-copy-muted mb-4">
                First 5 bookings free. No subscription.
              </p>

              <p className="text-sm text-copy-primary mb-6">
                Sign up by December 31, 2026, and keep this price permanently. €0.50/booking thereafter for new customers.
              </p>

              <p className="text-body text-copy-primary mb-8">
                Get your own Envoy to coordinate meetings on your behalf. Pay only for completed bookings.
              </p>

              <h3 className="text-sm font-semibold text-ink-primary mb-4 uppercase tracking-wide">
                Included:
              </h3>

              <ul className="stack-xs">
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">Schedule, reschedule and cancel meetings</span>
                </li>
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">Coordinate across Google Calendar and Microsoft Outlook</span>
                </li>
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">Coordinate across organizations and time zones</span>
                </li>
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">
                    Control who can access your calendar availability through your Trust Center
                  </span>
                </li>
              </ul>

              <div className="mt-auto pt-10 flow-xs items-center">
                <LoginButton size="large" className="px-10">
                  Get my Envoy
                </LoginButton>
              </div>
              </div>
            </div>

            <div className="bg-surface-base rounded-2xl p-8 md:p-10 flex flex-col h-full border border-line-default shadow-sm">
              <h2 className="section-subheading text-ink-primary mb-6">
                Unlimited bookings
              </h2>

              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-semibold text-emphasis-primary leading-tight">
                  €29 / month
                </span>
              </div>

              <p className="text-body text-copy-muted mb-6">
                Unlimited bookings. Cancel anytime.
              </p>

              <p className="text-body text-copy-primary mb-8">
                Get your own Envoy to coordinate as many meetings as you need for a fixed monthly price.
              </p>

              <h3 className="text-sm font-semibold text-ink-primary mb-4 uppercase tracking-wide">
                Included:
              </h3>

              <ul className="stack-xs">
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">Schedule, reschedule and cancel meetings</span>
                </li>
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">Coordinate across Google Calendar and Microsoft Outlook</span>
                </li>
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">Coordinate across organizations and time zones</span>
                </li>
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">
                    Control who can access your calendar availability through your Trust Center
                  </span>
                </li>
              </ul>

              <div className="mt-auto pt-10 flow-xs items-center">
                <LoginButton size="large" className="px-10">
                  Get my Envoy
                </LoginButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-standard bg-surface-base">
        <div className="container-4xl">
          <h2 className="section-heading text-center text-ink-primary mb-12">
            Frequently asked questions
          </h2>

          <div className="flow-md">
            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                Is there a special offer for{' '}
                <a
                  href="https://websummit.com/appearances/lis26/93d5c8e6-1afa-4f7a-afc4-548ec7738710/ask-my-envoy-/"
                  className="text-action-primary hover:underline"
                >
                  Web Summit 2026
                </a>
                ?
              </h3>
              <p className="text-body text-copy-primary">
                Yes! To celebrate our participation in{' '}
                <a
                  href="https://websummit.com/appearances/lis26/93d5c8e6-1afa-4f7a-afc4-548ec7738710/ask-my-envoy-/"
                  className="text-action-primary hover:underline"
                >
                  Web Summit 2026
                </a>
                , we&apos;re offering Pay Per Completion at €0.30 instead of €0.50 per completed booking.
              </p>
              <p className="text-body text-copy-primary mt-3">
                Sign up before December 31, 2026, and keep this discounted rate permanently.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                Can I try Ask My Envoy for free?
              </h3>
              <p className="text-body text-copy-primary">
                Yes. Your first 5 completed bookings are free. No credit card or billing information is required to get started.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                What happens after my 5 free bookings?
              </h3>
              <p className="text-body text-copy-primary">
                After your first 5 free bookings, you can continue with Pay Per Completion or choose a monthly subscription. With Pay Per Completion, simply add credit to your account, starting at €5. Each completed booking is deducted from your balance. You can top up your credit whenever you need.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                How does Pay Per Completion work?
              </h3>
              <p className="text-body text-copy-primary">
                With Pay Per Completion, you pay €0.50 each time your Envoy successfully completes a booking. No subscription required, and no charge for unsuccessful attempts.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                What&apos;s the difference between Pay Per Completion and a subscription?
              </h3>
              <p className="text-body text-copy-primary">
                Pay Per Completion charges you for each completed booking, while a subscription gives you unlimited bookings for €29/month.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                Can I cancel anytime?
              </h3>
              <p className="text-body text-copy-primary">
                Yes. There is no long-term commitment. If you cancel your subscription, it remains active until the end of your current billing period. With Pay Per Completion, there is no subscription to cancel.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                What if I only want to connect my calendar?
              </h3>
              <p className="text-body text-copy-primary">
                You can connect your calendar for free so approved Envoys can take your availability into account when coordinating with you. You don&apos;t need a subscription or an Envoy of your own.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                Who can see what&apos;s in my calendar once I connect it?
              </h3>
              <p className="text-body text-copy-primary">
                Connecting your calendar does not make its contents visible to other people. Approved Envoys only get the information they need to coordinate with you, such as whether you are available at a given time. You control who can coordinate with you through your Trust Center.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                Do people I schedule with need their own Envoy?
              </h3>
              <p className="text-body text-copy-primary">
                No. They can connect their calendar to Ask My Envoy for free, without having an Envoy of their own. This lets approved Envoys take their availability into account when coordinating meetings with them.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                How does my Envoy get access to someone else&apos;s availability?
              </h3>
              <p className="text-body text-copy-primary">
                You can invite people you work with through the Trust Center. They connect their calendar and explicitly choose to share their availability with your Envoy. They don&apos;t need an Envoy of their own, and your Envoy only gets the access they approve.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                Can I get more than one Envoy?
              </h3>
              <p className="text-body text-copy-primary">
                Yes. You can have multiple Envoys, each with its own Pay Per Completion or subscription plan.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                Can I add more Envoys?
              </h3>
              <p className="text-body text-copy-primary">
                Yes. You can start with one Envoy and add more as your needs grow. Each Envoy can coordinate meetings on behalf of a different person.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                Which calendars does Ask My Envoy support?
              </h3>
              <p className="text-body text-copy-primary">
                Ask My Envoy works across Google Calendar and Microsoft Outlook.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-loose bg-surface-soft">
        <div className="container-4xl">
          <div className="max-w-3xl mx-auto rounded-2xl border border-line-default bg-surface-soft p-8 md:p-10 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <h2 className="section-heading text-ink-primary mb-4">
              Still have a question?
            </h2>
            <p className="text-body text-copy-primary mb-8">
              If the FAQ didn&apos;t cover it, get in touch and we&apos;ll help.
            </p>
            <ContactButton size="large">
              Contact us
            </ContactButton>
          </div>
        </div>
      </section>
    </div>
  );
}
