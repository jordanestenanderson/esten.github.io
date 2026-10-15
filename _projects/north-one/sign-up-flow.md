---
layout: project
order: 1
meta-title: Sign up flow — North One
meta-description: Opening a business bank account
meta-img: signup-meta.jpg
device: desktop
product: North One
title: Sign up flow
hex-1: "09C080"
hex-2: "EEFEE4"
type: Web + Mobile App
start-year: 23
end-year: 24
hero-desktop: signup-herographic.png
hero-desktop-alt: A screenshot from the North One web app showing the sign up screen design
hero-banner: signup-herobanner.png
hero-banner-alt: A collage of two app screenshots and a North One debit card. The first screenshot is from the North One web app showing the sign up screen, the second screenshot is from the mobile app showing the business type selection screen of the sign up flow. 

section-1-1-nav: Overview
section-1-1-title: Overview
section-1-1-description-1: North One was a neo-bank built for small business owners — a technology focused alternative to the friction and fees of traditional banking. When I joined the team, my first assignment was to audit the existing sign up flow end-to-end and come back with recommendations.
section-1-1-description-2: What I uncovered was a flow that had been patched together over time with decisions layered on top of decisions, many no longer serving the product or the user. The audit led to a larger conversation and ultimetely a complete rebuild.
employer: North One
role: Senior Product Designer — Research, Ideation, Prototyping, User Testing, UI Design, Interaction Design  
timeline: Q4 2023 — Q3 2024
section-1-1-inlinesmall-1: signup-banner-1.jpg
section-1-1-inlinesmall-1-alt: A photo of a North One customer online banking on their mobile device

section-2-1-nav: Context
section-2-1-title: Context
section-2-1-description-1: Setting a strong first impression is an important part of user retention. Unfortunately, not only did my audit reveal that we were setting a bad first impression, but that we were converting users at a much lower rate than our competitors.
section-2-1-description-2-title: Starting fresh
section-2-1-description-2: We were in too deep with tech debt to meaningfully improve through iteration. Not only had the flow accumulated steps, fields, and logic that were no longer needed, but many steps lacked consistency with the current design system and even each other. With the support of our development team, a decision was reached to rebuild the flow from scratch.
section-2-1-description-3-title: Account funding
section-2-1-description-3: While the decision was originally made to require funding during the sign up process, the analytics made it clear that this is where we were losing people. Expecting users to deposit their hard earned money before getting to experience the product was a lot to ask, especially from a neo-bank whose biggest differentiator is the technology backing their service.
section-2-1-description-4-title: Manual review
section-2-1-description-4: Up to this point, about half of the users that had signed up for North One were flagged for manual review. The current process was confusing and felt like a punishment rather than a procedural step. Meanwhile, the Trust & Safety team was spending time on cases that could have been handled automatically.
section-2-1-bustoutimage: signup-feature-2.png
section-2-1-bustoutimage-alt: Screenshot grid of various screens from the North One sign up flow

section-3-1-nav: Research
section-3-1-title: Research
section-3-1-description-2-title: Competitive analysis
section-3-1-description-2: What stood out most about the sign up flows of our competitors was that nobody else was asking users to fund their account before exploring the product. In addition, most of our competitors had a more seamless experience than us — every step, platform redirect, and third party integration felt like one cohesive experience.
section-3-1-description-3-title: Stakeholder interviews
section-3-1-description-3: To understand what information we needed to collect, we sat down with the Trust & Safety team, CX team, Compliance team, and Marketing team individually to better understand the core goals and challenges. This not only helped us uncover department dependencies, but it gave us a chance to brainstorm solutions with them.
section-3-1-description-4-title: Analytics
section-3-1-description-4: Filtering out fraud accounts, the data showed concentrated drop-off at three notable steps — ownership profiles, funding, and manual review. To better understand those friction points in the redesign, we began watching countless recorded user sessions in Hotjar, analysing exactly how they navigated through the flow, from every click to page scroll.
section-3-1-description-5-title: Customer interviews
section-3-1-description-5: With everything we had learned so far, we took this opportunity to talk to a handful of new customers, as well as potential customers that dropped out of the flow part way. The interviews focused on them sharing their sign up experiences, allowing us to both verify some of our predictions and uncover new areas of improvement.
section-3-1-inlinesmall-1: signup-interview-1.jpg
section-3-1-inlinesmall-1-alt: A screenshot of a North One customer and Jordan talking on a Google Meet call while looking at the North One app

section-4-1-nav: Ideation
section-4-1-title: Ideation
section-4-1-description-1: Ideation began with mapping the user flow — what compliance or technical limitations do we have, what information should we collect first and why, and what branching logic do we need to account for in regards to business types, edge cases, and review flags.
section-4-1-description-2-title: Ownership profiles
section-4-1-description-2: Based on analytics and customer interviews, we saw two key phases in improving this part of the flow. The first phase would focus on breaking the overbearing amount of information into multiple digestible screens — allowing users to add, edit, and delete owners from a hub. The second phase would then introduce the functionality of inviting co-owners by email to fill out their own profile, avoiding the need to share sensitive information between owners.
section-4-1-description-3-title: Funding debate
section-4-1-description-3: Removing this step from the flow required internal advocacy — there was genuine concern that we would see our funding numbers drop and fraud numbers rise. My position was that we were trading a narrow set of users willing to fund immediately for a larger set of users we can convert downstream through marketing and activation design. With the comparative data to back it up, we agreed to run some experiments through A/B testing.
section-4-1-description-4-title: Manual review
section-4-1-description-4: We knew how important this improvement was, not only because of the drop-off we currently experienced here, but because of how many hours our team was spending on the manual review step. Working closely with the Trust & Safety team, we explored how we could automate parts of the flow through third party solutions vetted by our developers — leading us to planning our most ambitious multi-phase release for the sign up flow.
section-4-1-inlineimg-1: signup-userflow-1.jpg
section-4-1-inlineimg-1-alt: A user flow diagram illustrating the various paths a user can take throughout their sign up experience

section-5-1-nav: Design
section-5-1-title: Design
section-5-1-description-1: The first step into design was establishing an updated set of components for the design system. To improve the ease of content entry, we added new input types that could more effectively collect different forms of information — while ensuring both old and new inputs had consistent and extensive state handling. Beyond the user-facing improvements, this update also allowed us to collect information more consistently between users, resulting in cleaner, more reliable data on the back end.
section-5-1-inlineimg-1: signup-components.jpg
section-5-1-inlineimg-1-alt: A screenshot of all of the input components created for the North One design system

section-5-2-description-1-title: Opening an account
section-5-2-description-1: With the new components in place, our high-fidelity designs came together smoothly. Our first handful of screens were all about capturing the user's email, setting expectations, and filtering out unqualified businesses. Once we've secured a way to re-engage users if they drop off, we take the opportunity to ensure they have all the information needed to complete the flow, while also preventing unqualified businesses from investing unnecessary time.
section-5-2-desktopimg-1: signup-screen-1.png
section-5-2-desktopimg-1-alt: Screenshot of the sign up page on the marketing website
section-5-2-desktopimg-2: signup-screen-2.png
section-5-2-desktopimg-2-alt: Screenshot from the North One sign up flow of the email verification screen
section-5-2-desktopimg-3: signup-screen-3.png
section-5-2-desktopimg-3-alt: Screenshot from the North One sign up flow of the welcome screen
section-5-2-desktopimg-4: signup-screen-4.png
section-5-2-desktopimg-4-alt: Screenshot from the North One sign up flow of the attestations screen

section-5-3-description-1-title: Business details
section-5-3-description-1: As users move into the business section of the flow, the experience starts to branch. By asking users to first select their business type, our branching logic allows us to determine what information we need to collect next. While the differences between most business types are negligible, sole proprietors are required to provide significantly less information. The design challenge in this section was finding the right grouping, sequencing, and balance of information — ultimately leading us to these four screens.
section-5-3-desktopimg-1: signup-screen-5.png
section-5-3-desktopimg-1-alt: Screenshot from the North One sign up flow of the business type selection screen
section-5-3-desktopimg-2: signup-screen-6.png
section-5-3-desktopimg-2-alt: Screenshot from the North One sign up flow of the business information screen
section-5-3-desktopimg-3: signup-screen-7.png
section-5-3-desktopimg-3-alt: Screenshot from the North One sign up flow of the business contact screen
section-5-3-desktopimg-4: signup-screen-8.png
section-5-3-desktopimg-4-alt: Screenshot from the North One sign up flow of the expected revenue screen

section-5-4-description-1-title: Ownership details
section-5-4-description-1: Based on our research, the ownership section presented a major opportunity to improve our conversion rate. Our theory was that by first prompting users to complete their own profile, they would become familiar with the information required before reaching the ownership hub. When they're then asked to add additional co-owners, the next step feels more predictable.
section-5-4-description-2: Looking ahead, this iteration naturally set us up to allow co-owners to fill out their own profile in the future through an email invitation — removing the need for business partners to share personal information with one another.
section-5-4-desktopimg-1: signup-screen-9.png
section-5-4-desktopimg-1-alt: Screenshot from the North One sign up flow of the owner profile screen
section-5-4-desktopimg-2: signup-screen-10.png
section-5-4-desktopimg-2-alt: Screenshot from the North One sign up flow of the ownership hub screen
section-5-4-desktopimg-3: signup-screen-11.png
section-5-4-desktopimg-3-alt: Screenshot from the North One sign up flow of the co-owner profile screen
section-5-4-desktopimg-4: signup-screen-12.png
section-5-4-desktopimg-4-alt: Screenshot from the North One sign up flow of the ownership hub screen with a co-owner added

section-5-5-description-1-title: Account funding
section-5-5-description-1: Until we had concrete A/B test results, we needed to keep the funding section in the flow. Rather than invest more time in something we might remove, we simply reskinned the existing funding steps — focusing on making them feel like a consistent part of the flow without rethinking the user experience.
section-5-5-description-2: As the results came in, our predictions were confirmed — removing the funding gate meaningfully grew the top of the funnel. Through various iterations of activation design, we were not only able to recover the guaranteed funds we gave up, but also significantly increase conversions overall.
section-5-5-desktopimg-1: signup-screen-13.png
section-5-5-desktopimg-1-alt: Screenshot from the North One sign up flow of the funding screen
section-5-5-desktopimg-2: signup-screen-14.png
section-5-5-desktopimg-2-alt: Screenshot from the North One sign up flow of the Plaid modal
section-5-5-desktopimg-3: signup-screen-15.png
section-5-5-desktopimg-3-alt: Screenshot from the North One sign up flow of the funding account selection screen
section-5-5-desktopimg-4: signup-screen-16.png
section-5-5-desktopimg-4-alt: Screenshot from the North One sign up flow of the funding amount screen

section-5-6-description-1-title: Account usage
section-5-6-description-1: While the account usage section wasn’t our biggest area of drop-off, we saw an opportunity for a quick win. Unfortunately, this section was a compliance requirement — otherwise, we wouldn’t have included it at all. So, working closely with the Compliance team to find a compromise, we consolidated what were once many questions across six screens down to one clean and concise screen.
section-5-6-description-2: For about half of our users, once they accept the terms and conditions, they’ve completed the flow. However, the manual review process was next for everybody else, typically flagged due to mismatched information or signaling a high risk.
section-5-6-desktopimg-1: signup-screen-17.png
section-5-6-desktopimg-1-alt: Screenshot from the North One sign-up flow of the usage screen
section-5-6-desktopimg-2: signup-screen-18.png
section-5-6-desktopimg-2-alt: Screenshot from the North One sign-up flow of the terms and conditions screen

section-5-7-description-1-title: Manual review
section-5-7-description-1: Manual review was one of the areas where we had the biggest impact, both for users and the team managing it. What users saw before was an experience that felt opaque and punishing — unclear steps, an unpredictable timeline, and no real sense of what was happening. This friction became especially costly when legitimate customers got caught in the process.
section-5-7-description-2: Through multiple rounds of iteration, we arrived at a cohesive experience that walks users through a dynamic step-by-step process. Whether they need to verify their identity, business documents, or both, each stage clearly lays out what they need to upload, resubmit, or whether they simply need to wait.
section-5-7-description-3: Legitimate customers now move through the process faster and with more confidence — with automation sometimes getting them through in seconds. Bad actors are caught without anyone needing to touch those cases. The Trust & Safety team's queue has shrunk to the situations that actually warrant their expertise.
section-5-7-desktopimg-1: signup-manualreview-1.png
section-5-7-desktopimg-1-alt: Screenshot from the North One sign up flow of the identity verification screen
section-5-7-desktopimg-2: signup-manualreview-2.png
section-5-7-desktopimg-2-alt: Screenshot from the North One sign up flow of the identity verification in-progress screen
section-5-7-desktopimg-3: signup-manualreview-3.png
section-5-7-desktopimg-3-alt: Screenshot from the North One sign up flow of the submit business documents screen
section-5-7-desktopimg-4: signup-manualreview-4.png
section-5-7-desktopimg-4-alt: Screenshot from the North One sign up flow of the submit business documents screen with a document uploaded
section-5-7-desktopimg-5: signup-manualreview-5.png
section-5-7-desktopimg-5-alt: Screenshot from the North One sign up flow of the submitting documents loading screen
section-5-7-desktopimg-6: signup-manualreview-6.png
section-5-7-desktopimg-6-alt: Screenshot from the North One sign up flow of the documents in-review state
section-5-7-desktopimg-7: signup-manualreview-7.png
section-5-7-desktopimg-7-alt: Screenshot from the North One sign up flow of the documents resubmit state
section-5-7-desktopimg-8: signup-manualreview-8.png
section-5-7-desktopimg-8-alt: Screenshot from the North One sign up flow of the documents approved state

section-6-1-nav: Iteration
section-6-1-title: Iteration
section-6-1-description-1: During my time at North One, I worked on most parts of the business, but the sign up flow was the project I started on my first day and continued iterating on until my last. From layout changes and content rewrites to entirely new sections, A/B testing completely shaped how the flow evolved.
section-6-1-description-2: Outside of analytics and A/B testing, we continued booking sessions with new customers to review prototypes, test theories, and gather honest feedback along the way.
section-6-1-inlinesmall-1: signup-interview-2.jpg
section-6-1-inlinesmall-1-alt: Another screenshot of a different North One customer and Jordan talking on a Google Meet call while looking at the new sign up flow

section-7-1-nav: Impact
section-7-1-title: Impact
section-7-1-description-1: The new sign up flow gave North One a foundation to iterate on. The tech debt that had been constraining product decisions was cleared, and the team had a codebase and design system aligned with the product's current direction.
section-7-1-description-2: Removing the funding gate had the greatest immediate impact, but it also reset the scoreboard. The definition of a converted user had changed — a larger pool of sign ups was now getting through the door, challenging us to activate them further downstream.
section-7-1-description-3: Working from that new baseline, through a combination of other iterations, we <b>drove the conversion rate up by an additional 18%</b>.
section-7-1-bustoutimage: signup-feature-3.png
section-7-1-bustoutimage-alt: Another screenshot grid of various screens from the North One sign up flow

svg-box: "0 0 50 50"
svg-path: "M45 39.1943V45H39.1973L13.2041 19.0068V45H5V5H10.8428L45 39.1943ZM44.9961 26.6094L36.9062 18.4922V13.0986H31.5117L23.3945 5.00879H44.9961V26.6094Z"
---
