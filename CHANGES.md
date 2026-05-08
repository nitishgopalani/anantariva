# Content & Layout Changes — Review Sheet Implementation

This document lists every text/code change applied based on the review sheet
screenshots (Existing → New). Files touched are noted next to each item, and
any open / unclear points are listed at the bottom for follow-up.

---

## 1. Navigation (Header)

File: `src/content/site.ts`

| Existing | New |
| --- | --- |
| Company | **Our Company** |
| Partnerships & Clients | **Partners & Clients** |

Logo click already routes to home (`/`). No change needed for that.

---

## 2. Languages (Header dropdown)

File: `src/components/layout/navbar.tsx`

- English flag changed from US 🇺🇸 to **United Kingdom 🇬🇧** (custom SVG Union Jack).
- Existing: English, Hindi, Spanish, Arabic, French.
- **Added Russian** (`🇷🇺`, Google code `ru`).
- **Added Chinese** (`🇨🇳`, Google code `zh-CN`).
- Hindi remains second (after English / India flag stays the India flag).

> Note: We use country flag SVGs/emojis. If brand wants official `.svg`
> images instead, list of locales can be mapped to assets in
> `public/flags/` later.

---

## 3. Homepage — Hero

File: `src/content/home.ts` → `homeContent.hero.subtext`

**Old**
> In an era of regulatory complexity, climate urgency, and evolving responsible
> value chains, organizations need partners who combine global expertise with
> deep local insight. Anantariva delivers credible, science-based solutions
> with the agility of a focused consultancy and the rigor of established
> standards.

**New**
> In an era of business complexities, ever increasing regulatory and quality
> infrastructure challenges, climate urgency, and evolving responsible value
> chains, businesses & organizations need partners who combine global
> expertise with deep local insight. Anantariva delivers credible,
> science-based solutions with the agility of a focused consultancy meeting
> the rigor of established standards.

---

## 4. Homepage — “Startup Agility. Global Expertise.” section

File: `src/content/home.ts` → `homeContent.startupAgility`

- Title renamed: **Startup Agility. Global Expertise.** → **Business Agility. Global Expertise.**
- Feature reordering:
  1. Global Technical Insights
  2. Cross-Sector Experience
  3. Regulatory Knowledge
  4. **Policy Advisory** (moved up, before Field Implementation)
  5. Field Implementation
  6. **Capacity Building** (new)
- **Policy Advisory** description updated:
  - Old: *Strategic guidance at the intersection of industry, government, and development*
  - New: *Key policy & strategic guidance with action plans to industry, government, and other stakeholders*
- **Capacity Building** (new) description:
  - *Consulting, training, gap assessment, hand-holding, and other technical & management services for industry, businesses and other stakeholders*

> Open item: Capacity Building reuses the field implementation image
> (`img4_field_implementation.png`) for now. Add a dedicated illustration if
> available (e.g. `img6_capacity_building.png`) and update the path.

---

## 5. Homepage — “A Global Voice for Responsible Growth”

File: `src/content/home.ts` → `homeContent.globalVoice`

- Description rewritten so it starts with audiences:
  > We partner with industry leaders, businesses, government bodies,
  > development agencies, SMEs, farmer collectives, other cooperatives, and
  > institutions committed to sustainable transformation. Rooted in the
  > Indian subcontinent with a truly global outlook.
- Partner chips now also include **Businesses** and **Other Cooperatives**.

---

## 6. Homepage — “Who We Are” core focus list

File: `src/content/home.ts` → `homeContent.whoWeAre.coreFocus`

| Old item | New item |
| --- | --- |
| Assurance & Monitoring | **Assurance & Compliance** |
| Project & Programme Advisory | **Projects & Programmes** |
| Consultancy for Accreditation & Certification | **Accreditation, Certification, Inspection & Testing Consultancy** |

Other items unchanged.

---

## 7. Homepage — Service Highlights cards

File: `src/content/home.ts` → `homeContent.serviceHighlights`

| Card | Old | New |
| --- | --- | --- |
| Assurance | Title: *Assurance & Monitoring* | **Assurance & Compliance** |
| M&E Solutions | Desc: *Robust monitoring and evaluation frameworks for development programs* | **Project programme conceptualization, with robust monitoring and evaluation frameworks, and implementation** |
| Policy & Strategic Advisory | Desc: *Expert counsel at the intersection of policy, regulation, and implementation* | **Expert counsel on business & policy matters, regulations, quality & other technical matters.** |

---

## 8. Homepage — “Our Wide Range of Service Offerings” / OUR CORE EXPERTISE & STRENGTHS

File: `src/content/home.ts` → `homeContent.serviceOfferings`

- Subtitle: *Section of Offerings* → **Our Core Expertise & Strengths** (rendered uppercase by the section header style).
- Title: *Our Wide Range of Service Offerings* → **Policy, Strategy, Action Plans, Implementation, Technical Expertise**

> Open item: The four pillar categories below this header (Corporate &
> Growth Strategy, Transaction Strategy & Execution, Supply Chain &
> Transformation, Customer Experience) were not changed because the sheet
> only flagged the header. Confirm whether these pillar names should remain
> the same.

---

## 9. Services & Industries page hero

File: `src/content/services.ts` → `servicesContent.hero`

| Field | Old | New |
| --- | --- | --- |
| Title | Services & Industries | **Manufacturing & Services** |
| Subtitle | Comprehensive solutions across sectors | **Comprehensive solutions across industry sectors** |

---

## 10. Partners & Clients page hero

File: `src/content/clients.ts` → `clientsContent.hero`

| Field | Old | New |
| --- | --- | --- |
| Title | Partnerships & Clients | **Partners & Clients** |
| Subtitle | Building strategic collaborations for sustainable impact | *(unchanged — already matches sheet)* |
| Description | *As a newly established organization, we are actively building strategic collaborations…* | **As a future-ready organization we are actively building strategic collaborations…** |

---

## 11. Investor Relations page

File: `src/content/investors.ts` → `investorsContent.hero`
File: `src/app/investors/client.tsx` (renders new `note` field)

- Subtitle: *Building value at the intersection of sustainability and growth*
  → **Enabling Relationships & Sustained Value Creation**
- Description (now starts the page with this paragraph):
  > With a strong foundation built on technical expertise & consistent
  > performance, we present an array of investment opportunities for
  > potential growth across industry sectors. Discover our track record and
  > diverse portfolio. We are open to hearing from Institutional as well as
  > Individual investors, including technical professionals, who would like
  > to partner with us.
- New italic note line added below the description:
  > Anantariva maintains a valuable relationship and trust with all our
  > stakeholders by ensuring a transparent reporting system.

> The original description text (“Anantariva operates at the convergence of
> ESG transition…”) was replaced as per the sheet (“rest remains same” was
> noted only for the rest of the page).

---

## 12. Contact page

File: `src/content/contact.ts` → `contactContent.contacts.items`

| Old | New |
| --- | --- |
| **General Inquiries** — *For general questions about our services and capabilities* | **General & Business Enquiries** — *For general information and business enquiries about our services and capabilities* |
| Investors email: `investors@anantariva.com` | **`director@anantariva.com`** |

Also updated everywhere this email appears:

- `src/content/site.ts` (`siteConfig.emails.investors`)
- `src/content/investors.ts` (`investorsContent.engagement.email`)
- `src/app/contact/client.tsx` (Strategic Engagement “Discuss Partnership” button mailto)

---

## 13. Footer & Strategic Engagement card background

(Earlier task — kept here for reference)

- `src/components/layout/footer.tsx` — `bg-navy` → **`bg-[#00008B]`**
- `src/app/contact/client.tsx` Strategic Engagement card — `bg-navy` → **`bg-[#00008B]`**

---

## Open / unclear items (need product owner confirmation)

1. **Logo & spelling**: Sheet says “Correct logo and spelling” next to the
   header logo block. Current logo path: `/logo/Anantavira%202.png`
   (filename spelt **Anantavira** — note the missing `r`). Action:
   confirm correct asset name (e.g. `Anantariva.svg` / `.png`) and replace
   in `src/components/layout/navbar.tsx` line ~226.
2. **Capacity Building image**: Currently reuses the Field Implementation
   image. Provide a dedicated illustration if available.
3. **OUR CORE EXPERTISE & STRENGTHS pillars**: Confirm if the four pillar
   names (Corporate & Growth Strategy, Transaction Strategy & Execution,
   Supply Chain & Transformation, Customer Experience) should be replaced
   with “Policy / Strategy / Action Plans / Implementation / Technical
   Expertise”-themed cards.
4. **Russian / Chinese translation**: The new languages rely on Google
   Translate. If brand wants vetted manual translations, content must be
   localized in code rather than via the translate widget.
5. **Misc font / size / punctuation cleanup**: Sheet has a general note —
   *“Unnecessary full stop after 1–2 words may be removed. Font byte/size
   at some places need to be checked – at somewhere font type / size differs
   in continuation para.”* Not actionable as a single code change; flag
   specific instances for follow-up.

---

## Not Yet Implemented (Items I Could Not Complete From the Sheet)

These items are explicitly flagged here so the team knows what is **still
pending** from the screenshots and **why**.

### A. Header logo correction (Screenshot 4)
- **Sheet says:** *"Correct logo and spelling"* next to the
  "Anantariva — Where Abundance Meets Vision" block.
- **What is missing:** A correct, high-resolution logo asset. Current file
  in `public/logo/` is `Anantavira 2.png` (note: filename is mis-spelt as
  **Anantavira** instead of **Anantariva**, missing one `r`).
- **Why not done:** No corrected logo file was provided. Renaming the file
  is risky without the brand-approved artwork (the bitmap inside the file
  may also still read "Anantavira").
- **What you need to provide:** Final logo file, preferably as
  `public/logo/anantariva.svg` (or `.png` at 2× resolution) with the
  correct spelling and tagline if any. Once added, update the path in
  `src/components/layout/navbar.tsx` (and footer if used there).

### B. Dedicated "Capacity Building" image (Screenshot 2)
- **Sheet says:** *"Add new Box after field implementation"* with the new
  Capacity Building feature.
- **What is in code now:** Card content, title and description are added,
  but the image path reuses the Field Implementation image
  (`/img_of_Startup_Agility/img4_field_implementation.png`).
- **Why not done:** No `img6_capacity_building.png` (or equivalent) was
  available in `public/img_of_Startup_Agility/`.
- **What you need to provide:** A dedicated PNG/SVG illustration. Once
  added, update the `image` path inside
  `src/content/home.ts` → `startupAgility.features` (Capacity Building entry).

### C. Four "OUR CORE EXPERTISE & STRENGTHS" pillar cards (Screenshot 4)
- **Sheet says:** Header changed to *"Our Core Expertise & Strengths"* /
  *"Policy, Strategy, Action Plans, Implementation, Technical Expertise"*.
- **What is implemented:** Header text is updated.
- **What is NOT changed:** The four pillar cards underneath still use the
  generic strategy-consulting items (Corporate & Growth Strategy,
  Transaction Strategy & Execution, Supply Chain & Transformation, Customer
  Experience).
- **Why not done:** The sheet did not specify replacement content for the
  four cards. Replacing them blind would change the visible offering on
  Home page.
- **What you need to confirm:** Whether each of the four cards should be
  rewritten around the new theme (Policy / Strategy / Action Plans /
  Implementation / Technical Expertise). If yes, please share the new card
  titles + bullet items per card.

### D. Vetted translations for Russian / Chinese (Screenshot 1)
- **Sheet says:** Add **Russian** and **Chinese** to the language menu.
- **What is implemented:** Both options are added with country flags and
  hooked into the existing Google Translate-based switcher.
- **Why not fully complete:** Google Translate is automatic and may produce
  imperfect translations of marketing/legal copy. There is no manually
  curated translation file for these locales.
- **What you need to provide:** Either (a) accept Google Translate output,
  or (b) supply locale-specific JSON content for `EN/HI/ES/AR/FR/RU/ZH`,
  which we can wire up via `next-intl` (or similar) instead of Google
  Translate.

### E. Generic punctuation / font sizing cleanup (Screenshot 1)
- **Sheet says:**
  > *Unnecessary full stop after 1–2 words may be removed. Font
  > byte/size at some places need to be checked – at somewhere font
  > type / size differs in continuation para.*
- **Why not done:** The note is general — no specific words / pages are
  pointed out. Doing a blind sweep risks breaking intentional copy.
- **What you need to provide:** Specific examples (page + section + line)
  where the trailing full stop must be removed and where the font feels
  inconsistent. Easiest way: annotate a screenshot per instance.

### F. "More languages coming soon" indicator (Screenshot 1)
- **Sheet says:** *"Add Hindi after India flag (More is coming)"*.
- **What is implemented:** All flags listed in the sheet are added in
  order; the current language dropdown does not show a "more coming soon"
  hint.
- **Why not done:** The hint is optional UX text and was not concretely
  worded.
- **What you need to confirm:** Should we add a small "More languages
  coming soon" footnote at the bottom of the language dropdown? If yes,
  share the exact text.

### G. Service Offerings (Home) — section heading already updated
- ✅ This was missed in the first pass and has now been fixed:
  `src/app/page.tsx` line 305 — *"Our Service Offerings"* → **"Our Services"**.
  Listed here only so the team knows it is *not* part of the original miss.

---

_Last updated: this commit._
