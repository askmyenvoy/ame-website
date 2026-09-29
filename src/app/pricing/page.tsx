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
              Two ways to use Ask My Envoy
            </h1>

            <p className="text-lead text-center text-copy-muted max-w-3xl">
              Connect your calendar for free, or get your own Envoy to coordinate meetings for you.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-loose bg-surface-soft">
        <div className="container-7xl">
          <div className="grid-two items-stretch">
            <div className="bg-surface-base rounded-2xl p-8 md:p-10 flex flex-col h-full border border-line-default shadow-sm">
              <h2 className="section-subheading text-ink-primary mb-6">
                Let Envoys coordinate with me
              </h2>

              <p className="text-body text-copy-muted mb-6">
                Connect your calendar so other people&apos;s Envoys can coordinate with you.
                Control who can coordinate with you through your Trust Center.
              </p>

              <div className="mb-2">
                <span className="text-5xl font-semibold text-emphasis-primary">Free</span>
              </div>

              <p className="text-body text-copy-primary mb-8">
                No subscription. No Envoy required.
              </p>

              <h3 className="text-sm font-semibold text-ink-primary mb-4 uppercase tracking-wide">
                Included:
              </h3>

              <ul className="stack-xs">
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">Connect Google Calendar or Microsoft Outlook</span>
                </li>
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">Let approved Envoys take your availability into account</span>
                </li>
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">Control who can coordinate with you through your Trust Center</span>
                </li>
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">Revoke access whenever you want</span>
                </li>
              </ul>

              <div className="mt-auto pt-10 flow-xs items-center">
                <LoginButton size="large" className="px-10">
                  Connect my calendar
                </LoginButton>
              </div>
            </div>

            <div className="bg-surface-base rounded-2xl p-8 md:p-10 flex flex-col h-full border border-line-default shadow-sm">
              <h2 className="section-subheading text-ink-primary mb-6">
                Your Envoy
              </h2>

              <div className="mb-2">
                <div className="row-inline-xs">
                  <span className="text-5xl font-semibold text-emphasis-primary">30-day</span>
                  <span className="text-3xl text-copy-primary">free trial</span>
                </div>
              </div>

              <p className="text-lg text-copy-muted mb-6">€29 / seat / month after your trial</p>

              <p className="text-body text-copy-primary mb-8">
                No credit card required. Cancel anytime.
              </p>

              <h3 className="text-sm font-semibold text-ink-primary mb-4 uppercase tracking-wide">
                Included:
              </h3>

              <ul className="stack-xs">
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">Schedule meetings</span>
                </li>
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">Reschedule meetings</span>
                </li>
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">Cancel meetings</span>
                </li>
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">Coordinate across Google Calendar and Microsoft Outlook</span>
                </li>
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">Work across companies, participants and time zones</span>
                </li>
                <li className="row-start-tight">
                  <CheckIcon className="w-5 h-5 text-ink-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-copy-primary">Control who can access your availability through the Trust Center</span>
                </li>
              </ul>

              <div className="mt-auto pt-10 flow-xs items-center">
                <LoginButton size="large" className="px-10">
                  Start your 30-day free trial
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
                Is there a free trial?
              </h3>
              <p className="text-body text-copy-primary">
                Yes. Your first 30 days are completely free. No payment method or billing information is required to start.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                What happens at the end of the 30-day trial?
              </h3>
              <p className="text-body text-copy-primary">
                To keep using your Envoy, you&apos;ll need to add a payment method before the trial ends. If you don&apos;t, your subscription will automatically be cancelled and you won&apos;t be charged.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                Can I cancel anytime?
              </h3>
              <p className="text-body text-copy-primary">
                Yes. There is no long-term commitment. If you cancel, your subscription remains active until the end of your current billing period, and you won&apos;t be charged again after that.
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
                Yes. You can subscribe to as many Envoys as you need.
              </p>
            </Card>

            <Card className="rounded-xl p-6 md:p-8">
              <h3 className="item-heading text-ink-primary mb-3">
                Can I add more Envoys?
              </h3>
              <p className="text-body text-copy-primary">
                Yes. Your subscription is based on the number of Envoys you use. You can start with one and add more later for people you manage or work with.
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
