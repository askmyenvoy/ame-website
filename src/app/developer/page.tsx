import ExplanationPageHero from '../components/ExplanationPageHero';
import { buildReferenceArticleMetadata, ReferenceArticleJsonLd } from '@/lib/reference-article';
import { referenceArticle } from './reference-article.config';

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

            <p>
              AI agents are becoming capable of handling increasingly broad tasks: researching
              information, drafting content, working with business software, calling APIs, and taking
              actions on behalf of users. But the agentic web will not be built by one general-purpose
              AI agent reproducing every workflow in every domain.
            </p>
            <p>
              Some problems require domain-specific logic, persistent rules, specialized
              integrations, and their own trust model. In those cases, a generalist AI agent needs to
              collaborate with a specialized agent, sometimes called a vertical AI agent: an agent
              designed to solve a narrower class of problems deeply rather than solve every problem
              broadly.
            </p>
            <p>
              Meeting coordination is one of those domains. Ask My Envoy is building Envoys,
              specialized AI agents for meeting coordination. An Envoy is designed to represent a
              person&apos;s scheduling preferences, calendars, availability, trust rules, and
              coordination constraints, and to work with other people or agents to reach a meeting
              outcome.
            </p>
            <p>
              Our premise is simple: when a generalist AI agent needs to arrange a meeting, it should
              not have to recreate meeting coordination from scratch. It should be able to work with
              an Envoy that already understands how that person&apos;s time can be coordinated.
            </p>

            <h2 className="explanation-article-heading explanation-article-heading--first">
              Why general-purpose agents need specialized agents
            </h2>
            <p>
              A general-purpose AI agent can understand intent very well. It can understand a request
              such as &ldquo;schedule a meeting with Paul next week,&rdquo; identify that a calendar
              is involved, and potentially call an API that creates an event.
            </p>
            <p>That does not mean it understands meeting coordination.</p>
            <p>
              Creating a calendar event is a relatively simple software operation. A system needs a
              date, a start time, a duration, some participants, and access to a calendar. The
              difficult part usually happens before the event can be created.
            </p>
            <p>
              The system has to determine which participants matter, which calendars are
              authoritative, what availability can be disclosed, what scheduling preferences apply,
              which time zones are involved, whether several people need to be consulted, and what
              happens when the first proposed time does not work.
            </p>
            <p>
              Across organizations, that problem becomes more complex because the agent is no longer
              operating inside a single trusted environment. It may be interacting with people it does
              not know, calendars it cannot directly access, and other agents acting on behalf of
              different users.
            </p>
            <p>That creates a trust problem as much as a scheduling problem.</p>
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
              This is why Ask My Envoy treats trust as part of meeting coordination rather than as a
              separate security feature. A scheduling agent that simply reads and writes calendar
              events is not enough. A meeting coordination agent needs to understand participants,
              relationships, permissions, and boundaries across organizations.
            </p>
            <p>That is the role of an Envoy.</p>
            <p>
              An Envoy is a vertical AI agent specialized in meeting coordination. It represents a
              person&apos;s scheduling preferences, calendars, availability, and trust rules, and uses
              that context to coordinate with other people and agents while revealing no more
              information than necessary.
            </p>

            <h2 className="explanation-article-heading">What is an Envoy?</h2>
            <p>An Envoy is a specialized AI agent for meeting coordination.</p>
            <p>
              It sits between a person&apos;s calendars, scheduling preferences, trust rules, and the
              outside world. Its role is not simply to expose free time or create calendar events. Its
              role is to coordinate a meeting on that person&apos;s behalf while respecting the
              boundaries that person has defined.
            </p>
            <p>
              An Envoy can work with a human, a general-purpose AI assistant, or another specialized
              agent. It can participate in a multi-turn coordination process where the requirements
              change, several people need to agree, and different levels of trust apply to different
              participants.
            </p>
            <p>
              That makes an Envoy different from a booking link, a calendar API, or a generic
              scheduling tool. Those tools expose functions. An Envoy represents a coordination
              capability.
            </p>
            <p>
              This is the model we are building toward for the agentic web: generalist agents handle
              the broad user relationship, while specialized or vertical agents handle
              domain-specific work. For meeting coordination, the specialized agent is an Envoy.
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
              agents. MCP and A2A solve different parts of the interoperability problem: MCP exposes
              capabilities to AI hosts and agents, while A2A provides a protocol for agents to
              communicate with other agents.
            </p>
            <p>
              That distinction matters for meeting coordination because the interaction is not always
              a single tool call. A request can evolve as participants, timing, constraints, and trust
              relationships change. In those cases, a generalist AI agent needs more than access to a
              calendar function; it needs a way to work with a specialized meeting-coordination agent.
            </p>
            <p>
              Ask My Envoy is building that agent layer around the Envoy: a vertical AI agent
              specialized in meeting coordination, designed to work with humans, generalist agents,
              and other agents across organizational boundaries.
            </p>

            <h2 className="explanation-article-heading">The coordination logic stays with the Envoy</h2>
            <p>The protocols are only the external interface. The difficult part remains the coordination engine behind them.</p>
            <p>
              An Envoy still has to deal with participant resolution, Google Calendar and Microsoft
              Calendar access, scheduling logic, time zones, trust and permissions,
              cross-organization boundaries, and the operational details required to turn a request
              into a confirmed meeting.
            </p>
            <p>
              That is why we do not see agent interoperability as a replacement for the scheduling
              system. It is the way other agents gain access to it.
            </p>
            <p>
              The objective is to let an external AI agent delegate meeting coordination without
              needing to understand how Ask My Envoy handles calendars, trust, scheduling constraints,
              or organizational boundaries internally.
            </p>

            <h2 className="explanation-article-heading">Why this matters</h2>
            <p>
              Much of the current agent ecosystem is still organized around tools. An agent
              discovers a tool, sends it structured input, and receives a result. That works well
              for many operations, but meeting coordination is often not a single call. It can
              require context, clarification, negotiation, and several turns before the task is
              complete.
            </p>
            <p>
              That is one reason we believe specialized agents will matter. Some workflows are
              better represented as a capability owned by another agent than as a collection of
              low-level tools.
            </p>
            <p>Meeting coordination is one of those workflows.</p>

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

            <h2 className="explanation-article-heading">Building for an agent-to-agent web</h2>
            <p>
              The web moved from documents to applications, then from applications to APIs. AI agents
              add another layer, where software does not just expose functions but increasingly
              exposes capabilities that other agents can discover and use.
            </p>
            <p>
              Ask My Envoy is being built for that environment. The role of the Envoy is not to
              become another generic assistant, but to become the specialized agent that other agents
              can rely on when the task is meeting coordination.
            </p>
            <p>
              That is the technical direction behind our work with MCP, A2A, agent discovery, Agent
              Cards, and cross-organization scheduling.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
