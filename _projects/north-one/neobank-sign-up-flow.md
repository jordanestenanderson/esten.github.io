---
layout: project
order: 1
meta-title: Sign up flow — North One
meta-description: Rebuilding the North One sign up flow from the ground up — reducing friction, streamlining processes, and boosting conversions.
meta-img: signup-meta.jpg
device: desktop
product: North One
title: Neobank sign up flow
card-description: Improving how customers apply a bank account
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
section-1-1-description-1: North One was a neobank built for small business owners — a technology focused alternative to the friction and fees of traditional banking. When I joined the team, my first task was to audit the existing sign up flow and come back with recommendations.
section-1-1-description-2: What I found had been patched together over time with new decisions layered on top of old decisions, many no longer serving the product or the user. The audit led to a larger conversation and eventually a complete rebuild.
employer: North One
role: Senior Product Designer — Research, Ideation, Prototyping, User Testing, UI Design, Interaction Design  
timeline: Q4 2023 — Q3 2024
section-1-1-inlinesmall-1: signup-banner-1.jpg
section-1-1-inlinesmall-1-alt: A photo of a North One customer online banking on their mobile device

section-2-1-nav: Context
section-2-1-title: Context
section-2-1-description-1: Setting a strong first impression is an important part of user retention. Unfortunately, not only did my audit reveal that we were setting a bad first impression, but also that we were converting users at a much lower rate than our competitors.
section-2-1-description-2-title: Starting fresh
section-2-1-description-2: It was hard to make meaningful improvements on top of our tech debt — not only had the flow accumulated fields and logic that were no longer needed, but many steps lacked consistency with the current design system and each other. With the support of our development team, a decision was reached to rebuild the flow from scratch.
section-2-1-description-3-title: Account funding
section-2-1-description-3: While the decision was originally made to require funding during sign up, the analytics showed that this was where we were losing people. Expecting users to deposit their money before getting to experience the product was not realistic, especially from a neobank whose biggest differentiator is the technology backing its service.
section-2-1-description-4-title: Manual review
section-2-1-description-4: About half of the users who signed up for North One were flagged for manual review, and our process felt like a punishment rather than a procedural step. Meanwhile, our trust and safety team was spending time on cases that could have been handled automatically.
section-2-1-bustoutimage: signup-feature-2.png
section-2-1-bustoutimage-alt: Screenshot grid of various screens from the North One sign up flow

section-3-1-nav: Research
section-3-1-title: Research
section-3-1-description-2-title: Competitive analysis
section-3-1-description-2: What stood out most about our competitors’ sign up flows was that nobody else asked users to fund their account before exploring the product. In addition, most had a more seamless experience — every step, redirect, and integration felt like one cohesive experience.
section-3-1-description-3-title: Stakeholder interviews
section-3-1-description-3: To determine what info we needed to collect, we met with most North One departments individually to unpack their core goals and challenges. This not only helped us uncover areas for improvement, but it gave us a chance to brainstorm solutions with them.
section-3-1-description-4-title: Analytics
section-3-1-description-4: Our data showed concentrated drop-off at three notable steps — ownership profiles, funding, and manual review. To better understand those friction points, we began watching countless recorded user sessions in Hotjar to analyse how they navigated the flow.
section-3-1-description-5-title: Customer interviews
section-3-1-description-5: We took this opportunity to talk to a handful of new customers as well as potential customers who dropped out of the flow part way. Focusing on their sign up experiences, we verified some of our predictions and uncovered new areas of improvement.
section-3-1-inlinesmall-1: signup-interview-1.jpg
section-3-1-inlinesmall-1-alt: A screenshot of a North One customer and Jordan talking on a Google Meet call while looking at the North One app

section-4-1-nav: Ideation
section-4-1-title: Ideation
section-4-1-description-1: Ideation began by mapping the user flows — what compliance or technical limitations we had, what order we should collect information in, and what branching logic we needed to support for each business type, edge case, and review flag.
section-4-1-description-2-title: Ownership profiles
section-4-1-description-2: We saw two key opportunities to improve our ownership profiles. First, we break the information into more digestible screens and give users a hub to add, edit, and delete co-owners. Then we introduce the ability to invite co-owners by email, allowing everyone to complete their own profile without sharing sensitive information.
section-4-1-description-3-title: Funding debate
section-4-1-description-3: Removing the funding requirement created genuine concern that funding numbers would drop and fraud would rise. But trading a narrow set of funded users for a larger group we could convert downstream was a growth risk we needed to take. With comparative data to support the decision, we agreed to run an A/B test after launch.
section-4-1-description-4-title: Manual review
section-4-1-description-4: Manual review was not only a major area of drop-off, but it also drained more of our internal team’s time than necessary. Working with the trust and safety team, we explored how integrations vetted by our developers could automate parts of the flow — leading us to plan our most ambitious multi-phase release of the sign up flow.
section-4-1-inlineimg-1: signup-userflow-1.jpg
section-4-1-inlineimg-1-alt: A user flow diagram illustrating the various paths a user can take throughout their sign up experience

section-5-1-nav: Design
section-5-1-title: Design
section-5-1-description-1: Our first design task was establishing new components for the design system. To make information easier to submit, we introduced input types that could collect different forms of data more effectively. Beyond the user-facing improvements, this also allowed us to collect information more consistently, resulting in cleaner and more reliable data.
section-5-1-inlineimg-1: signup-components.jpg
section-5-1-inlineimg-1-alt: A screenshot of all of the input components created for the North One design system

section-5-2-description-1-title: Opening an account
section-5-2-description-1: The first handful of screens focused on capturing the user’s email, setting expectations, and filtering out unqualified businesses. Once we had a way to re-engage users who dropped off, we used these early steps to make sure users had the information needed to complete the flow while preventing unqualified businesses from investing more time.
section-5-2-desktopimg-1: signup-screen-1.png
section-5-2-desktopimg-1-alt: Screenshot of the sign up page on the marketing website
section-5-2-desktopimg-2: signup-screen-2.png
section-5-2-desktopimg-2-alt: Screenshot from the North One sign up flow of the email verification screen
section-5-2-desktopimg-3: signup-screen-3.png
section-5-2-desktopimg-3-alt: Screenshot from the North One sign up flow of the welcome screen
section-5-2-desktopimg-4: signup-screen-4.png
section-5-2-desktopimg-4-alt: Screenshot from the North One sign up flow of the attestations screen

section-5-3-description-1-title: Business details
section-5-3-description-1: The experience began to branch in the business details section — by first asking users to select their business type, we could determine what they saw next. While the differences between most business types were negligible, sole proprietors were required to provide significantly less information. The design challenge was finding a sequence of grouped information that worked well for every business type.
section-5-3-desktopimg-1: signup-screen-5.png
section-5-3-desktopimg-1-alt: Screenshot from the North One sign up flow of the business type selection screen
section-5-3-desktopimg-2: signup-screen-6.png
section-5-3-desktopimg-2-alt: Screenshot from the North One sign up flow of the business information screen
section-5-3-desktopimg-3: signup-screen-7.png
section-5-3-desktopimg-3-alt: Screenshot from the North One sign up flow of the business contact screen
section-5-3-desktopimg-4: signup-screen-8.png
section-5-3-desktopimg-4-alt: Screenshot from the North One sign up flow of the expected revenue screen

section-5-4-description-1-title: Ownership details
section-5-4-description-1: Our research showed that the ownership section presented a major opportunity to improve conversions. Our theory was that by first prompting users to complete their own profile, they would become familiar with the process. Then, when asked to add co-owners, the next steps would feel less daunting.
section-5-4-description-2: This iteration also aligned naturally with our plan to support co-owner invitations by email, allowing everyone to complete their own profile without sharing sensitive information.
section-5-4-desktopimg-1: signup-screen-9.png
section-5-4-desktopimg-1-alt: Screenshot from the North One sign up flow of the owner profile screen
section-5-4-desktopimg-2: signup-screen-10.png
section-5-4-desktopimg-2-alt: Screenshot from the North One sign up flow of the ownership hub screen
section-5-4-desktopimg-3: signup-screen-11.png
section-5-4-desktopimg-3-alt: Screenshot from the North One sign up flow of the co-owner profile screen
section-5-4-desktopimg-4: signup-screen-12.png
section-5-4-desktopimg-4-alt: Screenshot from the North One sign up flow of the ownership hub screen with a co-owner added

section-5-5-description-1-title: Account funding
section-5-5-description-1: Until we had the data, we couldn’t remove the required funding step. So rather than invest more time in something we might ultimately remove, we simply reskinned the existing experience to make it feel like a consistent part of the flow.
section-5-5-description-2: As the results came in, our predictions were confirmed — removing the funding step meaningfully grew the top of the funnel. Then through various activation efforts, we recovered the funds we gave up while also driving more conversions overall.
section-5-5-desktopimg-1: signup-screen-13.png
section-5-5-desktopimg-1-alt: Screenshot from the North One sign up flow of the funding screen
section-5-5-desktopimg-2: signup-screen-14.png
section-5-5-desktopimg-2-alt: Screenshot from the North One sign up flow of the Plaid modal
section-5-5-desktopimg-3: signup-screen-15.png
section-5-5-desktopimg-3-alt: Screenshot from the North One sign up flow of the funding account selection screen
section-5-5-desktopimg-4: signup-screen-16.png
section-5-5-desktopimg-4-alt: Screenshot from the North One sign up flow of the funding amount screen

section-5-6-description-1-title: Account usage
section-5-6-description-1: Unfortunately, account usage was a compliance requirement — otherwise, we wouldn’t have included it at all. Working closely with the compliance team to find a compromise, we consolidated what had been six screens into one concise screen.
section-5-6-description-2: For about half of our users, terms and conditions is the final step of the flow. However, the other half are now sent to manual review due to mismatched information or risk levels.
section-5-6-desktopimg-1: signup-screen-17.png
section-5-6-desktopimg-1-alt: Screenshot from the North One sign-up flow of the usage screen
section-5-6-desktopimg-2: signup-screen-18.png
section-5-6-desktopimg-2-alt: Screenshot from the North One sign-up flow of the terms and conditions screen

section-5-7-description-1-title: Manual review
section-5-7-description-1: Through multiple rounds of iteration, we took a process that once confused most users and turned it into a cohesive, dynamic step-by-step experience. Whether users needed to verify their identity, business documents, or both, each stage clearly explained what they needed to upload, resubmit, or wait for.
section-5-7-description-2: Legitimate customers could now move through the process confidently — with automation sometimes getting them through in seconds. Our review team’s queue also shrank, allowing them to focus on the situations that actually required human intervention.
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
section-6-1-description-1: While I also worked on banking features at North One, the sign up flow was the project I started on my first day and continued iterating on until my last. From reworking entire steps to refining small pieces of content, A/B testing played a major role in how the flow evolved.
section-6-1-description-2: We also continued meeting with customers to review prototypes, test theories, and gather honest feedback along the way.
section-6-1-inlinesmall-1: signup-interview-2.jpg
section-6-1-inlinesmall-1-alt: Another screenshot of a different North One customer and Jordan talking on a Google Meet call while looking at the new sign up flow

section-7-1-nav: Impact
section-7-1-title: Impact
section-7-1-description-1: The new flow gave North One a proper foundation to iterate on. Removing the funding gate had the greatest immediate impact, but it also reset the scoreboard. The definition of a converted user had changed — a larger pool of sign ups was now getting through the door, challenging us to activate them further downstream.
section-7-1-description-2: Working from that new baseline, through a combination of other iterations, we <b>drove the conversion rate up by an additional 18%</b>.
section-7-1-bustoutimage: signup-feature-3.png
section-7-1-bustoutimage-alt: Another screenshot grid of various screens from the North One sign up flow

svg-box: "0 0 50 50"
svg-path: "M45 39.1943V45H39.1973L13.2041 19.0068V45H5V5H10.8428L45 39.1943ZM44.9961 26.6094L36.9062 18.4922V13.0986H31.5117L23.3945 5.00879H44.9961V26.6094Z"
---
