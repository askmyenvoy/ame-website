import type { Metadata } from 'next';
import Link from 'next/link';

type Milestone = {
  period: string;
  isoDate: string;
  title: string;
  paragraphs: string[];
  readMore?: {
    href: string;
    label: string;
  };
};

const milestones: Milestone[] = [
  {
    period: 'October 2025',
    isoDate: '2025-10',
    title: 'The first Envoy proof of concept',
    paragraphs: [
      'After several months of experimentation, meeting coordination became a product in its own right. The first Envoy could work across multiple calendars, combine availability and carry a scheduling conversation far enough to coordinate a real meeting.',
      'It was still a proof of concept, but it established the core idea: instead of sending a booking link or exchanging availability by email, an Envoy could coordinate the meeting on someone\'s behalf.',
    ],
  },
  {
    period: 'December 2025',
    isoDate: '2025-12',
    title: 'A new engine for a new product',
    paragraphs: [
      'As the scheduling conversations became richer, the original calendar agent reached its limits. The original architecture became increasingly difficult to extend reliably as scheduling conversations grew more complex.',
      'The scheduling architecture was rebuilt from the ground up, creating the first version of what became Ask My Envoy\'s meeting scheduling engine. That architectural shift also marked the beginning of the transition from TsunAImi to a product focused specifically on meeting coordination.',
    ],
  },
  {
    period: 'April 2026',
    isoDate: '2026-04',
    title: 'A purpose-built meeting coordination engine',
    paragraphs: [
      'The new architecture matured into a dedicated coordination engine. The Envoy could capture several constraints from a single request, understand corrections across a conversation, reason about dates and times, coordinate availability and handle different meeting operations within the same coordination flow.',
      'Natural language remained the interface, but scheduling decisions increasingly relied on structured, deterministic platform logic rather than leaving the coordination itself to the language model.',
    ],
  },
  {
    period: 'June 2026',
    isoDate: '2026-06',
    title: 'Trust becomes part of coordination',
    paragraphs: [
      'Coordinating someone\'s time requires more than access to a calendar. The platform introduced a dedicated Trust & Control layer to determine who can reach an Envoy, when identity is required and what someone is allowed to do.',
      'Owners could choose how open their Envoy should be, invite specific people and approve access requests. Scheduling and managing an existing meeting could also require different levels of permission, establishing trust as part of the coordination architecture rather than an afterthought.',
    ],
  },
  {
    period: 'July 2026',
    isoDate: '2026-07',
    title: 'Meeting management takes shape',
    paragraphs: [
      'The coordination engine expanded beyond creating new meetings. Cancellation and rescheduling were brought into the same underlying architecture for identifying meetings, resolving ambiguity, understanding time references and maintaining context across a conversation.',
      'This laid the foundation for an Envoy that can manage the lifecycle of a meeting rather than treating every interaction as a new booking request.',
    ],
  },
  {
    period: 'August 2026',
    isoDate: '2026-08',
    title: 'Ready for customers',
    paragraphs: [
      'Ask My Envoy moved from product development into commercial use. Subscription management, per-Envoy pricing, seat management, billing, tax handling and automated activation were integrated into the platform, allowing individuals and organizations to subscribe and deploy Envoys through a self-service flow.',
      'At the same time, the website, onboarding and product experience were aligned around Ask My Envoy as the public product, creating the foundation for a broader commercial push.',
    ],
  },
  {
    period: 'September 2026',
    isoDate: '2026-09',
    title: 'Opening Ask My Envoy to the agent ecosystem',
    paragraphs: [
      'Ask My Envoy took a first step toward interoperability with other AI agents. A production remote MCP server was published in the official MCP Registry, and work on A2A support continued as part of the broader agent-to-agent architecture.',
      'The objective is to make meeting coordination available beyond the Ask My Envoy interface, so generalist AI agents can eventually work with specialized meeting-coordination agents instead of rebuilding that logic themselves.',
    ],
    readMore: {
      href: '/developer',
      label: 'Read more about meeting coordination for the agentic web →',
    },
  },
];

export const metadata: Metadata = {
  title: 'Milestones',
  description:
    'See how Ask My Envoy evolved from an early meeting scheduling prototype into a purpose-built platform for meeting coordination, trust and meeting management.',
  alternates: {
    canonical: 'https://askmyenvoy.com/milestones',
  },
  robots: 'index, follow',
};

export default function MilestonesPage() {
  return (
    <div className="min-h-screen">
      <section className="section-hero-compact bg-surface-base">
        <div className="container-4xl">
          <div className="flow-md items-center text-center">
            <h1 className="hero-heading text-ink-primary">Building Ask My Envoy</h1>
            <div className="max-w-3xl text-copy-muted stack-sm">
              <p className="text-lead">
                Ask My Envoy grew from an early multi-calendar scheduling experiment into a purpose-built platform for meeting coordination.
              </p>
              <p className="text-lead">
                These are the milestones that changed what an Envoy can do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-standard bg-surface-soft">
        <div className="container-5xl">
          <article className="mx-auto mb-14 max-w-4xl stack-sm text-body text-copy-primary">
            <p>
              The first working prototype dates back to June 2025, built on top of the TsunAImi platform. It already connected Google and Microsoft calendars through MCP and could coordinate a basic booking across multiple calendars.
            </p>
          </article>

          <div className="mx-auto max-w-4xl stack-xl">
            {milestones.map((milestone) => (
              <article key={milestone.period}>
                <time
                  dateTime={milestone.isoDate}
                  className="text-base font-semibold uppercase tracking-[0.14em] text-action-primary"
                >
                  {milestone.period}
                </time>
                <div className="mt-2 rounded-xl border border-line-default/70 bg-surface-base p-6 md:p-7">
                  <h2 className="item-heading text-ink-primary">{milestone.title}</h2>
                  <div className="mt-3 stack-sm">
                    {milestone.paragraphs.map((paragraph, index) => (
                      <p key={`${milestone.period}-${index}`} className="text-body text-copy-primary">
                        {paragraph}
                      </p>
                    ))}
                    {milestone.readMore ? (
                      <p>
                        <Link
                          href={milestone.readMore.href}
                          className="text-action-primary hover:underline"
                        >
                          {milestone.readMore.label}
                        </Link>
                      </p>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
