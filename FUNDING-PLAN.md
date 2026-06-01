# Courtside — Funding & Development Plan

**Last updated:** May 2026
**Status:** MVP built, seeking funding to develop and launch

---

## What is Courtside?

A free, mobile-first web app providing general legal information and support services for people navigating the family court system. Gender-neutral, country-aware, community-driven. No accounts, no data collection, no cost to users.

**Built with:** React + Vite
**Target:** Australia first, then global
**Positioning:** Information resource (not legal advice) — fully disclaimed

---

## Step 1: Structure & Registration (Week 1-2)

Before applying for any grants, Courtside needs a legal structure.

### Option A: Incorporated Association (Victoria)
- **Cost:** ~$37
- **Where:** Consumer Affairs Victoria — https://www.consumer.vic.gov.au/clubs-and-fundraising/incorporated-associations
- **Why:** Cheapest, simplest nonprofit structure. Unlocks most grant eligibility.
- **Need:** A committee of at least 5 people (you + 4 others — fellow students, family law professionals, community members)

### Option B: Social Enterprise (Pty Ltd with social purpose)
- **Cost:** ~$576 (ASIC registration)
- **Where:** ASIC — https://asic.gov.au/for-business/registering-a-company/
- **Why:** More flexibility, eligible for SEDI grants, can accept donations and sponsorship
- **Then:** Register on the Social Enterprise Directory — https://socialtraders.com.au/

### Option C: Auspice through a CLC
- **Cost:** Free
- **Why:** A Community Legal Centre applies for the grant and manages the money. You build the tech. Lowest admin burden.
- **How:** Pitch Courtside to a CLC (see Step 2)

**Recommendation:** Start with Option C (CLC partnership) while registering as an incorporated association (Option A). This gives you two paths to funding simultaneously.

---

## Step 2: Partner with a Community Legal Centre (Week 1-3)

This is the most important step. A CLC partnership:
- Gives you legal content verification (bulletproofs the app)
- Unlocks government grant eligibility
- Adds credibility to every application
- Provides real users and feedback

### Who to approach in Victoria:

| Organisation | Why | Contact |
|---|---|---|
| **Justice Connect** | Tech-forward, runs online legal help tools already | https://justiceconnect.org.au/contact/ |
| **Fitzroy Legal Service** | Community-focused, family law expertise | https://www.fitzroy-legal.org.au/ |
| **Women's Legal Service Victoria** | Family violence + family law specialisation | https://www.womenslegal.org.au/ |
| **Dads in Distress** | Direct access to the core user group | https://www.didgroup.com.au/ |
| **Men's Referral Service** | Support service, understands the gap | https://ntv.org.au/get-help/ |

### Pitch template:

> "I'm building a free, open-source web app called Courtside that provides general legal information for people navigating the family court system. It's not legal advice — it's an information resource with crisis links, support services, and a community. I'm looking for a legal partner to verify content accuracy and co-apply for access-to-justice funding. The app is already built as an MVP and I can demo it."

---

## Step 3: Apply for Grants

### Priority 1 — Apply immediately

#### Victoria Justice Anew — Change Grants
- **Amount:** Multi-year funding (varies)
- **Eligibility:** Victorian Community Legal Centres (need CLC partner)
- **Focus:** Tech integration, service innovation, access to justice
- **Link:** https://www.legalaid.vic.gov.au/about-us/our-funding-model
- **Action:** CLC partner applies, Courtside is the tech deliverable
- **Prioritises:** Technological integration, service model innovation, cross-sector partnerships

#### SEDI Capability Building Grants
- **Amount:** Up to $120,000
- **Eligibility:** Social enterprises
- **Link:** https://www.socialimpacthub.org/services/sedi-capability-building-grants
- **Action:** Register as social enterprise first (Step 1, Option B), then apply
- **Good for:** Platform development, user testing, community building

#### auDA Community Grant Program
- **Amount:** Varies
- **Period:** Jan-Dec 2026
- **Eligibility:** Australian community projects with web/digital focus
- **Link:** https://www.auda.org.au/public-impact/public-benefit-program/community-grant-program
- **Action:** Apply as incorporated association or social enterprise
- **Good for:** Domain registration, hosting, development costs

### Priority 2 — Next round

#### AWS Imagine Grant (AU/NZ)
- **Amount:** Up to USD $75,000 + AWS credits + technical support
- **Eligibility:** Registered nonprofits
- **Link:** https://aws.amazon.com/government-education/nonprofits/aws-imagine-grant-program/
- **Note:** June 2026 round may have passed — check for next intake
- **Good for:** Hosting, infrastructure, scaling to global

#### Google.org Impact Challenge
- **Amount:** $1M-$3M USD + Google engineering support
- **Eligibility:** Nonprofits, social enterprises
- **Link:** https://www.google.org/
- **Note:** Needs an AI angle — e.g., AI-powered situation assessment that directs users to relevant stages and local services
- **Good for:** Major scaling, adding AI features, going global

### Priority 3 — Supplementary / ongoing

#### R&D Tax Incentive
- **Amount:** 43.5% refundable tax offset on eligible R&D spend
- **Eligibility:** Australian companies (Pty Ltd) with turnover under $20M
- **Link:** https://business.gov.au/grants-and-programs/research-and-development-tax-incentive
- **Action:** Register as Pty Ltd, keep detailed records of all dev time
- **Good for:** Getting money back on development costs

#### LawTech Hub (Lander & Rogers)
- **Type:** Accelerator (not a grant) — mentorship, connections, workspace
- **Link:** https://www.landers.com.au/legal-innovation/lawtech-hub
- **Action:** Apply for 2026 cohort
- **Good for:** Legal industry connections, credibility, potential investment

#### RMIT Internal Grants
- **Action:** Check with your supervisor (Chris Barker) and the RMIT Research Office
- **Link:** https://www.rmit.edu.au/research/our-research/enabling-impact-platforms
- **Possibilities:** Social innovation seed funding, industry engagement grants, PhD top-up scholarships for applied projects
- **Note:** Courtside could potentially be framed as a practice-based PhD output

---

## Step 4: Launch Plan

### Phase 1 — Australia (Months 1-3)
- [ ] Register legal structure (incorporated association or social enterprise)
- [ ] Partner with at least one Victorian CLC
- [ ] CLC reviews and verifies all 7 stage guides for Australian accuracy
- [ ] Submit first grant application (Justice Anew or SEDI)
- [ ] Deploy to Vercel or Netlify (free tier)
- [ ] Register domain (courtside.org.au or courtside.app)
- [ ] Create Discord server with planned channels
- [ ] Soft launch to CLC clients and Dads in Distress / support group networks

### Phase 2 — Grow Australia (Months 3-6)
- [ ] Add state-specific legal information (each state has different protection order names, processes)
- [ ] Add Aboriginal and Torres Strait Islander specific services and culturally appropriate content
- [ ] Add CALD (Culturally and Linguistically Diverse) resources and translated crisis information
- [ ] Build community moderation team on Discord
- [ ] Submit additional grant applications (auDA, AWS)
- [ ] Gather user feedback and iterate
- [ ] Approach family law firms for pro bono content review

### Phase 3 — New Zealand + UK (Months 6-12)
- [ ] Partner with NZ Community Law Centre to verify NZ content
- [ ] Partner with UK Citizens Advice or Family Rights Group
- [ ] Community contributors fill in country-specific guides
- [ ] Apply for Google.org if adding AI features

### Phase 4 — Global (Year 2+)
- [ ] Open contribution system for community-verified legal guides
- [ ] PWA (Progressive Web App) for offline access
- [ ] Multilingual support
- [ ] AI-assisted situation assessment (which stage are you at?)

---

## Budget Estimate (MVP to Launch)

| Item | Cost | Notes |
|---|---|---|
| Domain (courtside.app or .org.au) | $15-50/yr | .org.au requires ABN/incorporation |
| Hosting (Vercel/Netlify) | $0 | Free tier sufficient for MVP |
| Incorporated association | $37 | One-time, Consumer Affairs VIC |
| Discord (Nitro for community) | $0 | Free tier works fine |
| Legal review (if no CLC partner) | $2,000-5,000 | Per-stage review by family lawyer |
| Design/branding | $0-500 | Can do in-house |
| **Total MVP launch** | **~$50-100** | With CLC partner providing legal review |
| **Total if self-funded** | **~$2,500-5,500** | With paid legal review |

---

## Key Links

### Grant Portals
- GrantConnect (all federal grants): https://www.grants.gov.au/go/list
- Community Grants Hub: https://www.communitygrants.gov.au/grants
- business.gov.au Grants Finder: https://business.gov.au/grants-and-programs
- The Grants Hub (aggregator): https://www.thegrantshub.com.au/

### Legal / Access to Justice
- Law Council of Australia — Justice Project: https://www.lawcouncil.asn.au/justice-project
- Victoria Legal Aid: https://www.legalaid.vic.gov.au/
- Federation of CLCs Victoria: https://www.fclc.org.au/
- NSW Access to Justice: https://dcj.nsw.gov.au/legal-and-justice/laws-and-legislation/legal-assistance-and-applications/civil-justice-action-plan.html

### Social Enterprise
- Social Traders (certification): https://socialtraders.com.au/
- Social Enterprise Australia: https://socialenterpriseaustralia.org.au/
- Impact Investing Australia: https://impactinvestingaustralia.com/

### Tech / Startup
- LaunchVic: https://launchvic.org/
- CSIRO Kick-Start: https://www.csiro.au/en/work-with-us/funding-programs/programs/kick-start
- Startmate: https://startmate.com/

---

## Notes

- Courtside collects zero user data — this is a strength for grant applications (privacy-first, GDPR-clean, no data liability)
- The app is already built as a working MVP — this puts you ahead of most applicants who are pitching ideas
- Frame it as "access to justice technology" not "legal tech startup" — the former unlocks government and nonprofit funding, the latter attracts VC (which isn't the right fit for a free community resource)
- Your RMIT PhD gives you academic credibility — use it in applications
- The community/Discord angle is strong for social impact framing
