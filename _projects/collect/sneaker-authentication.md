---
layout: project
order: 4
meta-title: Sneaker authentication — Collect
meta-description: Partnering with Legitmark to bring authentication into Collect — reducing the risk of counterfeits, and creating a new revenue stream.
meta-img: authentication-meta.jpg
device: mobile
product: Collect
title: Sneaker authentication
card-description: Integrating with a digital authentication platform
hex-1: "AF0D0F"
hex-2: "FFEEEE"
type: Mobile App
start-year: 23
hero-mobile-1: authentication-herographic-1.jpg
hero-mobile-1-alt: A screenshot from the Collect mobile app showing the authentication instructions screen design
hero-mobile-2: authentication-herographic-2.jpg
hero-mobile-2-alt: A screenshot from the Collect mobile app showing the authentication upload screen design
hero-mobile-3: authentication-herographic-3.jpg
hero-mobile-3-alt: A screenshot from the Collect mobile app showing the authentication results screen design
hero-banner: authentication-herobanner.png
hero-banner-alt: A collage of three full-screen app screenshots as well as small highlight screenshots from various aspects of the user interface. The three full screenshots show different steps of the authentication photo-taking process, while the highlights show a fake and an authentic outcome to the flow.

section-1-1-nav: Overview
section-1-1-title: Overview
section-1-1-description-1: Trust is one of the biggest barriers in sneaker trading — peer-to-peer platforms are always one transaction away from someone receiving a fake, intentionally or not. We initially launched Collect without authentication, but the risk was relatively low considering that the platform was limited to existing SoleSavy members who already traded with one another through less secure channels.
section-1-1-description-2: But as we prepared to open Collect to the public, authentication became a necessary first step. So we partnered with Legitmark, a digital sneaker authentication service, to bring authentication directly into our order flows. Working closely with their team, we co-designed the experience while they built the API that would power it.
employer: SoleSavy
role: Senior Product Designer — Research, Ideation, Prototyping, User Testing, UI Design, Interaction Design
timeline: Q1 2023 — Q2 2023
section-1-1-inlinesmall-1: authentication-banner-1.jpg
section-1-1-inlinesmall-1-alt: Image of a sneakerhead using the Collect authentication feature infront of their sneaker collection

section-2-1-nav: Context
section-2-1-title: Context
section-2-1-description-1: Outside of members already trading with people they trusted, there was no real assurance that sneakers purchased through Collect were authentic. Adding authentication could give more members the confidence to transact while also supporting our larger goal of opening Collect to the public as a new acquisition channel.
section-2-1-description-2: Partnering with Legitmark gave us a practical way to introduce that trust, but it also came with the design challenge of making a third-party integration feel like a seamless part of Collect. Working closely with their team, we had to find the right balance between the experience and what the API could realistically support.
section-2-1-bustoutimage: authentication-feature-1.jpg
section-2-1-bustoutimage-alt: Screenshot grid of various screens from the Collect authentication feature

section-3-1-nav: Research
section-3-1-title: Research
section-3-1-description-1-title: The authentication process
section-3-1-description-1: We started by spending significant time with the Legitmark team understanding how their authentication process worked end to end. We walked through every step, edge case, and possible outcome — documenting every status and trigger that would require our app to communicate with the API.
section-3-1-description-2-title: Competitive analysis
section-3-1-description-2: Looking at how other peer-to-peer marketplaces implemented authentication showed us the patterns users were already familiar with and where we could tailor them to better fit Collect. Our findings directly informed when authentication was surfaced, how each step was structured, and what conditional logic shaped the experience.
section-3-1-description-3-title: Community expectations
section-3-1-description-3: Authentication was largely driven by customer feedback — they didn't trust themselves to reliably spot a counterfeit and wanted an easy way to authenticate a pair directly through Collect. But their existing experience with authentication also raised the bar — we needed it to feel as credible and trustworthy as the services they already use.
section-3-1-inlinesmall-1: authentication-interview-1.jpg
section-3-1-inlinesmall-1-alt: A screenshot of the Legitmark team and Jordan talking on a Google Meet call reviewing Legitmark's authentication process

section-4-1-nav: Ideation
section-4-1-title: Ideation
section-4-1-description-1-title: User flows
section-4-1-description-1: Our goal was to take a third-party integration with its own steps, timelines, and operational requirements, and find a way to make it feel like a native feature of Collect. So we started by mapping the full authentication journey — from every user action to API call, we laid out exactly how users would interact with the feature step by step.
section-4-1-description-2-title: Cross-team collaboration
section-4-1-description-2: Once we knew exactly how we wanted the experience to work in Collect, we sat down with Legitmark again to align on the scope of what API changes we could make and which constraints we had to design around. This left both teams with a shared source of truth and a plan for what we were going to be building in the coming months.
section-4-1-inlineimg-1: authentication-orderflow-1.jpg
section-4-1-inlineimg-1-alt: User flow map of the authentication feature

section-5-1-nav: Design
section-5-1-title: Design
section-5-1-description-1-title: Photo submission flow
section-5-1-description-1: Upon finishing the user flows, we moved straight into high-fidelity design. Our research and ideation gave us a clear direction for how the experience needed to work — users are taken through a step-by-step photo submission flow with one objective per screen, supported by examples and guidelines that significantly reduce the chance of mistakes.
section-5-1-description-2: We built this flow seamlessly into the screen our customers already used to manage their sneaker collection and marketplace listing, making it much easier for them to request authentication on both new and existing pairs.
section-5-1-mobileimg-1: authentication-screen-1.jpg
section-5-1-mobileimg-1-alt: Screenshot from the Collect authentication feature of the add shoes screen with authentication enabled
section-5-1-mobileimg-2: authentication-screen-2.jpg
section-5-1-mobileimg-2-alt: Screenshot from the Collect authentication feature of the add shoes screen with authentication enabled scrolled down
section-5-1-mobileimg-3: authentication-screen-3.jpg
section-5-1-mobileimg-3-alt: Screenshot from the Collect authentication feature of the photo guidelines modal
section-5-1-mobileimg-4: authentication-screen-4.jpg
section-5-1-mobileimg-4-alt: Screenshot from the Collect authentication feature of the sneaker outer sides capture screen
section-5-1-mobileimg-5: authentication-screen-5.jpg
section-5-1-mobileimg-5-alt: Screenshot from the Collect authentication feature of the sneaker outer sides help modal
section-5-1-mobileimg-6: authentication-screen-6.jpg
section-5-1-mobileimg-6-alt: Screenshot from the Collect authentication feature of the sneaker outer sides confirmation screen
section-5-1-mobileimg-7: authentication-screen-7.jpg
section-5-1-mobileimg-7-alt: Screenshot from the Collect authentication feature of the sneaker inner sides capture screen
section-5-1-mobileimg-8: authentication-screen-8.jpg
section-5-1-mobileimg-8-alt: Screenshot from the Collect authentication feature of the sneaker inner sides confirmation screen

section-5-2-description-1-title: Order flows
section-5-2-description-1: Beyond authenticating sneakers for peace of mind or making listings more attractive in the marketplace, the order flow was the key conversion moment for authentication. This was where buyers had to decide whether the added protection was worth paying for before moving forward with a transaction.
section-5-2-description-2: Through multiple rounds of A/B testing and iteration, we found the right balance of content length, language, and visual hierarchy. Our most effective messaging stayed concise — focusing on buyer assurance and an exclusive 48-hour window to purchase the sneakers once their authenticity was confirmed.
section-5-2-mobileimg-1: authentication-screen-9.jpg
section-5-2-mobileimg-1-alt: Screenshot from the Collect authentication feature of the sneaker listing screen
section-5-2-mobileimg-2: authentication-screen-10.jpg
section-5-2-mobileimg-2-alt: Screenshot from the Collect authentication feature of the sneaker listing screen scrolled down
section-5-2-mobileimg-3: authentication-screen-11.jpg
section-5-2-mobileimg-3-alt: Screenshot from the Collect authentication feature of the authentication upsell drawer
section-5-2-mobileimg-4: authentication-screen-12.jpg
section-5-2-mobileimg-4-alt: Screenshot from the Collect authentication feature of the authentication checkout screen

section-5-3-description-1-title: In-review state
section-5-3-description-1: Once a sneaker is submitted for authentication, it enters the review state. While authentication is in progress, users can't edit, delete, or use it in another transaction.
section-5-3-description-2: This allowed us to lock a sneaker into a single transaction when a buyer requested authentication as a condition of the deal, preventing it from changing or being committed elsewhere while its authenticity was being verified.
section-5-3-mobileimg-1: authentication-screen-13.jpg
section-5-3-mobileimg-1-alt: Screenshot from the Collect authentication feature of the user profile screen with a sneaker authentication in review
section-5-3-mobileimg-2: authentication-screen-14.jpg
section-5-3-mobileimg-2-alt: Screenshot from the Collect authentication feature of the sneaker listing screen with an in-review authentication state
section-5-3-mobileimg-3: authentication-screen-15.jpg
section-5-3-mobileimg-3-alt: Screenshot from the Collect authentication feature of the sneaker listing screen with an in-review authentication state scrolled down
section-5-3-mobileimg-4: authentication-screen-16.jpg
section-5-3-mobileimg-4-alt: Screenshot from the Collect authentication feature of the authentication detail screen with an in-review state

section-5-4-description-1-title: Resubmission flow
section-5-4-description-1: When Legitmark flagged photos that had been submitted incorrectly, they triggered a resubmission flow that notified users and guided them through retaking the photos.
section-5-4-description-2: The challenge was explaining what went wrong and how to fix it without making the experience feel punishing. By providing clear instructions on how to correct the issue and guiding users through only the photos that required attention, we were able to move them through the flow as painlessly as possible.
section-5-4-mobileimg-1: authentication-screen-17.jpg
section-5-4-mobileimg-1-alt: Screenshot from the Collect authentication feature of the resubmit authentication notification
section-5-4-mobileimg-2: authentication-screen-18.jpg
section-5-4-mobileimg-2-alt: Screenshot from the Collect authentication feature of the authentication detail screen with a resubmit state
section-5-4-mobileimg-3: authentication-screen-19.jpg
section-5-4-mobileimg-3-alt: Screenshot from the Collect authentication feature of the resubmission note drawer
section-5-4-mobileimg-4: authentication-screen-20.jpg
section-5-4-mobileimg-4-alt: Screenshot from the Collect authentication feature of the resubmit inner tag capture screen

section-5-5-description-1-title: Authentication result
section-5-5-description-1: Once authentication was complete, Legitmark triggered a results flow that walked users through each reason their sneakers were determined to be authentic or fake.
section-5-5-description-2: Authentic sneakers received a Legitmark-approved badge, increasing their credibility and desirability in the marketplace. If the sneaker was tied to an active transaction, the buyer was then given their 48-hour exclusive window to complete the purchase. On the other hand, fake sneakers were automatically removed from the marketplace, and any transactions or offers associated with them were cancelled.
section-5-5-mobileimg-1: authentication-screen-21.jpg
section-5-5-mobileimg-1-alt: Screenshot from the Collect authentication feature of the authentication complete notification
section-5-5-mobileimg-2: authentication-screen-22.jpg
section-5-5-mobileimg-2-alt: Screenshot from the Collect authentication feature of the authentication detail screen with an authentic state
section-5-5-mobileimg-3: authentication-screen-23.jpg
section-5-5-mobileimg-3-alt: Screenshot from the Collect authentication feature of the authentication note drawer
section-5-5-mobileimg-4: authentication-screen-24.jpg
section-5-5-mobileimg-4-alt: Screenshot from the Collect authentication feature of the authentication badge shown on a shop listing screen
section-5-5-mobileimg-5: authentication-screen-25.jpg
section-5-5-mobileimg-5-alt: Screenshot from the Collect authentication feature of the authentication complete notification for a fake result
section-5-5-mobileimg-6: authentication-screen-26.jpg
section-5-5-mobileimg-6-alt: Screenshot from the Collect authentication feature of the authentication detail screen with a fake state
section-5-5-mobileimg-7: authentication-screen-27.jpg
section-5-5-mobileimg-7-alt: Screenshot from the Collect authentication feature of the sneaker listing screen with a fake authentication state
section-5-5-mobileimg-8: authentication-screen-28.jpg
section-5-5-mobileimg-8-alt: Screenshot from the Collect authentication feature of the edit sneaker listing screen showing users can no longer list fake sneakers in the marketplace

section-5-6-description-1-title: In-app messenger
section-5-6-description-1: Another feature we launched shortly after authentication was our in-app messenger. With the public launch opening Collect to users outside of the SoleSavy community, we needed a simple way for buyers and sellers to discuss deals directly in the app. For authentication specifically, this gave buyers a way to ask questions, request additional photos, or ask sellers to cover the cost of authentication.
section-5-6-description-2: By integrating a third-party messaging API, we were able to launch the feature with minimal design and development effort while still making it feel like a native part of the app.
section-5-6-mobileimg-1: authentication-screen-29.jpg
section-5-6-mobileimg-1-alt: Screenshot from the Collect in-app messenger feature of the new message notification
section-5-6-mobileimg-2: authentication-screen-30.jpg
section-5-6-mobileimg-2-alt: Screenshot from the Collect in-app messenger feature of the messages screen
section-5-6-mobileimg-3: authentication-screen-31.jpg
section-5-6-mobileimg-3-alt: Screenshot from the Collect in-app messenger feature of a message detail screen with the user writing a message and uploading an image
section-5-6-mobileimg-4: authentication-screen-32.jpg
section-5-6-mobileimg-4-alt: Screenshot from the Collect in-app messenger feature of a message detail screen showing the message and image now sent
section-5-6-mobileimg-5: authentication-screen-33.jpg
section-5-6-mobileimg-5-alt: Screenshot from the Collect in-app messenger feature of an order detail screen with a new message notification
section-5-6-mobileimg-6: authentication-screen-34.jpg
section-5-6-mobileimg-6-alt: Screenshot from the Collect in-app messenger feature of a message detail screen with an active conversation
section-5-6-mobileimg-7: authentication-screen-35.jpg
section-5-6-mobileimg-7-alt: Screenshot from the Collect in-app messenger feature of a message detail screen with the user writing a message
section-5-6-mobileimg-8: authentication-screen-36.jpg
section-5-6-mobileimg-8-alt: Screenshot from the Collect in-app messenger feature of a message detail screen showing the message now sent

section-6-1-nav: Impact
section-6-1-title: Impact
section-6-1-description-1: Authentication not only addressed one of the biggest hurdles the marketplace faced, it also unlocked a new revenue stream for the business. By helping Legitmark pilot their API offering, we were able to help shape the integration around our needs.
section-6-1-description-2-title: More confident transactions
section-6-1-description-2: Our goal was to reduce buyer uncertainty when committing to a deal, while giving sellers the Legitmark-approved badge as a way to build credibility and stand out from other listings. After launching the feature, we saw our <b>transaction rate increase by over 24%</b>, reinforcing how directly buyer confidence could translate into completed transactions.
section-6-1-description-3-title: A new revenue stream
section-6-1-description-3: Each authentication processed through Collect generated referral revenue through our partnership with Legitmark, allowing us to improve trust in the marketplace while also contributing directly to our business targets.
section-6-1-bustoutimage: authentication-feature-2.jpg
section-6-1-bustoutimage-alt: Another screenshot grid of more various screens from the Collect authentication feature

svg-box: "0 0 42.02 56"
svg-path: "m42.02,29.65l-20.73,11.93L0,18.76v-6.95h0S20.69,0,20.69,0l9.33,10.18-6.09,3.47-.8.46-4-4.37-6.9,3.94,10.66,11.64,6.9-3.93-4-4.37,6.9-3.93,9.33,10.18v6.38ZM.69,22.11l.04,11.35,20.56,22.54,20.2-11.86-.05-.06h.05s0-11.64,0-11.64l-20.23,11.87m18.53-1.5l-6.5,3.71v-3.81l3.9-2.23.05-.03.29-.16,1.83-1.04.14-.08.29-.16v3.8Z"
---
