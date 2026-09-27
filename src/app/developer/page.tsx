import ExplanationPageHero from '../components/ExplanationPageHero';
import { buildReferenceArticleMetadata, ReferenceArticleJsonLd } from '@/lib/reference-article';
import { referenceArticle } from './reference-article.config';
import Link from 'next/link';

export const metadata = buildReferenceArticleMetadata(referenceArticle);

const inlineCode =
  'text-sm font-mono bg-surface-base px-1.5 py-0.5 rounded border border-line-default';

export default function DeveloperPage() {
  return (
    <div className="min-h-screen bg-surface-soft">
      <ReferenceArticleJsonLd config={referenceArticle} />

      <ExplanationPageHero backLabel="Back to previous page" />

      <section className="section-standard bg-surface-soft">
        <div className="container-4xl">
          <article className="max-w-3xl mx-auto stack-md text-body text-copy-primary">
            <h1 className="explanation-article-title text-ink-primary">
              Meeting coordination for the agentic web
            </h1>
            <p className="italic text-copy-muted">{referenceArticle.description}</p>
            <h2 className="explanation-article-heading explanation-article-heading--first">
              Why general-purpose AI agents need vertical agents
            </h2>

            <p>
              AI agents are becoming capable of handling increasingly broad tasks: researching
              information, drafting content, working with business software, calling APIs, and taking
              actions on behalf of users. But the agentic web will not be built by one general-purpose
              AI agent reproducing every workflow in every domain.
            </p>
            <p className="pt-4">
              Some problems require domain-specific logic, persistent rules, specialized
              integrations, and their own trust model. In those cases, a generalist AI agent needs to
              collaborate with a specialized agent, sometimes called a vertical AI agent: an agent
              designed to solve a narrower class of problems deeply rather than solve every problem
              broadly.
            </p>
            <p>
              <Link href="/meeting-coordination" className="text-action-primary hover:underline">
                Meeting coordination
              </Link>{' '}
              is one of those domains. Ask My Envoy is building Envoys,
              specialized AI agents for meeting coordination. An Envoy is designed to represent a
              person&apos;s scheduling preferences, calendars, availability, trust rules, and
              coordination constraints, and to work with other people or agents to reach a meeting
              outcome.
            </p>
            <p>
              Our conviction is that meeting coordination is not a simple scheduling task. It combines
              several layers that are deeply embedded in human relationships: trust, identity,
              permissions, availability, preferences, organizational boundaries, social conventions,
              and the protocols people use to negotiate time with one another.
            </p>
            <p>
              These layers are intertwined, context-dependent, and difficult to reproduce reliably
              inside a general-purpose agent. A generalist agent should understand the user&apos;s
              intent, recognize when specialized expertise is required, and delegate the coordination
              problem to an agent built for that domain.
            </p>
            <p>For meeting coordination, we call that specialized agent an Envoy.</p>

            <h2 className="explanation-article-heading">What does an Envoy do?</h2>
            <p>An Envoy coordinates meetings on a person&apos;s behalf.</p>
            <p>
              It sits between that person&apos;s calendars, scheduling preferences, trust rules, and
              the outside world. Its role is not simply to expose free time or create calendar events,
              but to manage the coordination process while respecting the boundaries that person has
              defined.
            </p>
            <p>
              An Envoy can work with a human, a general-purpose AI assistant, or another agent. It can
              participate in a multi-turn coordination process where requirements change, several people
              need to agree, and different levels of trust apply to different participants.
            </p>
            <p>
              That makes an Envoy different from a booking link, a calendar API, or a generic
              scheduling tool. Those tools expose functions. An Envoy owns the{' '}
              <Link
                href="/booking-links-and-meeting-coordination"
                className="text-action-primary hover:underline"
              >
                meeting-coordination workflow
              </Link>
              .
            </p>

            <h2 className="explanation-article-heading">
              Trust is part of meeting coordination
            </h2>
            <p>
              An AI agent that can access someone&apos;s calendar is touching one of that
              person&apos;s most sensitive operational resources: their time. It may be able to infer
              availability, create commitments, move meetings, invite other people, or expose
              information about when someone is free.
            </p>
            <p>
              But in cross-organization meeting coordination, trust is not only about what one agent
              can see in one calendar. It is also about the relationship between the people involved.
            </p>
            <p>
              A meeting often brings together individuals from different companies, with different
              calendars, different policies, and different levels of trust. Some may already have an
              Envoy. Others may not. Some may be willing to expose availability directly, while others
              may only want to share the minimum information required to coordinate a meeting. In every
              case, the coordination agent needs enough information to do its job without assuming that
              every participant, calendar, or agent should be treated equally.
            </p>
            <p>That makes trust relational.</p>
            <p>
              The question is not simply whether an AI agent can access a calendar. It is whether the
              people involved trust one another enough to let their agents coordinate, what each side is
              allowed to disclose, and which actions each agent is authorized to take on behalf of the
              person it represents.
            </p>
            <p>
              On the agentic web, that human relationship will increasingly be translated into
              relationships between AI agents. A person may trust a colleague, a client, or a partner
              to request time, while applying stricter rules to an unknown external agent. An Envoy
              therefore has to understand not only calendar permissions, but also who is asking, on
              whose behalf, and under what level of trust.
            </p>
            <p>
              Trust is therefore not a feature layered on top of meeting coordination. It is the
              foundation that determines whether coordination should happen at all, what information
              can be exchanged, and which actions an agent is allowed to take.
            </p>
            <p>
              Before an Envoy can propose a time, expose availability, or create a meeting, it has to
              establish the boundaries of the relationship it is operating within. The same request
              may be treated differently depending on whether it comes from a colleague, a client, a
              trusted partner, an unknown person, or another agent acting on someone else&apos;s behalf.
            </p>
            <p>
              This matters even more on the agentic web. As more interactions are initiated by
              software agents rather than directly by people, the system cannot assume that access to
              a calendar implies permission to coordinate someone&apos;s time. Identity, representation,
              authorization, and trust have to come first.
            </p>
            <p>
              That is why Ask My Envoy treats trust as a core part of the coordination model. An
              Envoy is not simply a scheduling agent with access to a calendar. It is a vertical AI
              agent responsible for coordinating time within the trust boundaries defined by the
              people involved.
            </p>

            <h2 className="explanation-article-heading">
              Open protocols are how agents find and work with each other
            </h2>
            <p>
              If generalist AI agents are going to work with specialized or vertical AI agents, they
              need standard ways to discover capabilities and communicate across systems. That is why
              Ask My Envoy is adopting open agent interoperability protocols rather than building a
              closed integration model.
            </p>
            <p>
              MCP, the Model Context Protocol, gives AI hosts and agents a standard way to discover
              and connect to external capabilities. Ask My Envoy operates a production remote MCP
              server and is published in the official MCP Registry as:
            </p>
            <p>
              <code className={inlineCode}>com.askmyenvoy/meeting-scheduling-coordination</code>
            </p>
            <p>The production MCP endpoint is:</p>
            <p>
              <code className={inlineCode}>https://mcp.askmyenvoy.com/mcp</code>
            </p>
            <p>
              For human-readable context, this <code className={inlineCode}>/developer</code> page is
              the canonical source. The Registry entry and MCP endpoint are machine-facing
              infrastructure.
            </p>
            <p>
              Ask My Envoy also supports A2A, the Agent2Agent protocol, for communication between
              agents. MCP and A2A solve different interoperability problems: MCP exposes capabilities
              to AI hosts and agents, while A2A provides a standard way for one agent to communicate
              with another.
            </p>
            <p>
              That distinction matters for meeting coordination because the interaction is not always
              a single tool call. A request can evolve as participants, timing, constraints, and trust
              relationships change. In those cases, a generalist AI agent needs more than access to a
              calendar function; it needs a way to delegate the coordination process to an Envoy.
            </p>

            <h2 className="explanation-article-heading">Why delegation matters</h2>
            <p>
              A general-purpose AI agent can reasonably act inside the environment of the user who has
              authorized it. It may read that user&apos;s calendar, suggest times, create events, or
              reorganize commitments within the permissions it has been given.
            </p>
            <p>
              Cross-organization meeting coordination is different. The moment an agent needs to
              negotiate access to another person&apos;s time, it is no longer operating only on behalf
              of its own user. It is entering a relationship governed by another person&apos;s
              preferences, permissions, trust rules, and right to control their own calendar.
            </p>
            <p>That creates an important scope boundary.</p>
            <p>
              A generalist agent should be able to express its user&apos;s intent: &ldquo;I want to
              meet Paul next week.&rdquo; It should not automatically acquire the right to inspect
              Paul&apos;s availability, decide what Paul is willing to disclose, or make commitments on
              Paul&apos;s behalf.
            </p>
            <p>Those decisions belong on Paul&apos;s side of the relationship.</p>
            <p>
              This is where delegation becomes more than a technical pattern. It preserves the
              separation between the agent representing the requester and the agent responsible for
              protecting the other person&apos;s time.
            </p>
            <p>
              On the agentic web, that boundary matters. Without it, a sufficiently capable generalist
              agent risks becoming an all-purpose intermediary with authority extending far beyond the
              user who chose it. Meeting coordination needs a model in which each person retains
              control over the agent that represents their time, while agents collaborate across that
              boundary.
            </p>

            <h2 className="explanation-article-heading">What is live today</h2>
            <p>
              Ask My Envoy now exposes a production MCP server, is published in the official MCP
              Registry, and has a working A2A interface. Those interfaces sit on top of the same
              coordination platform used by Envoys today.
            </p>
            <p>
              The protocol surface is still evolving, and we expect the implementation to change as
              the agent ecosystem matures. The underlying direction is more stable: when a generalist
              AI agent needs to coordinate a meeting, it should be able to work with an Envoy rather
              than rebuild meeting coordination itself.
            </p>

            <h2 className="explanation-article-heading">Building for the agentic web</h2>
            <p>
              As AI agents become interfaces to more of the software people use, the next challenge is
              not only what an agent can do. It is how agents acting on behalf of different people can
              work together without collapsing the boundaries, permissions, and trust relationships
              between those people.
            </p>
            <p>
              Meeting coordination makes that problem particularly visible because time is shared but
              control over it is individual. A general-purpose agent can represent the intent of the
              person who chose it, but coordinating with someone else requires respecting the rules and
              authority on the other side of the relationship.
            </p>
            <p>
              Ask My Envoy is being built for that model. An Envoy is the vertical AI agent
              responsible for meeting coordination on behalf of the person it represents, while MCP and
              A2A provide open ways for other agents to discover and interact with that capability.
            </p>
            <p>
              Our objective is not to make every AI agent capable of controlling every calendar. It is
              to make it possible for agents to collaborate across organizational boundaries while each
              person retains control over their own time.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
