// All site copy lives here. Facts come from the career master file (v2.3.3).
const img = (f) => `./img/${f}`

export const profile = {
  first: 'Harender',
  name: 'Harender Singh',
  title: 'Business Excellence Consultant',
  city: 'Gurugram',
  email: 'harenrao999@gmail.com',
  phone: '+91 98129 69049',
  phoneHref: 'tel:+919812969049',
  linkedin: 'https://www.linkedin.com/in/harenrao/',
  linkedinLabel: 'linkedin.com/in/harenrao',
  cv: './HarenderSingh_cv.pdf',
  photo: img('harender-singh.jpg'),
  lead:
    '7+ years across transformation, business excellence and operations. I build the machinery that makes strategy survive contact with the operating floor: PMO and portfolio governance, policy and process architecture, enterprise Agile at scale, CMMI maturity and AI-driven transformation.',
}

export const nav = [
  ['home', 'Home'],
  ['services', 'Services'],
  ['projects', 'Projects'],
  ['resume', 'Resume'],
  ['ai', 'AI'],
  ['contact', 'Contact'],
]

export const stats = [
  { n: 7, suffix: '+', label: 'Years of experience' },
  { n: 106, suffix: '+', label: 'Project teams moved to Agile' },
  { n: 62.6, dec: 1, prefix: '₹', suffix: 'L', label: 'Annual savings delivered' },
  { n: 40, suffix: '+', label: 'Procedures in a 7-function policy set' },
]

export const services = [
  {
    icon: 'grid',
    title: 'PMO & Portfolio Governance',
    text: 'Portfolio and PMO functions set up end to end, from intake and prioritisation to KPIs, reporting cadence, escalation and stage-gates.',
    tags: ['PMO set-up', 'Portfolio dashboards', 'Stage-gates', 'PMP'],
  },
  {
    icon: 'cycle',
    title: 'Enterprise Agile Transformation',
    text: 'Scrum and Kanban at scale on Azure DevOps, with playbooks, governance, health surveys, adoption dashboards and an Agile CoE.',
    tags: ['106+ teams', 'Agile CoE', 'Azure DevOps', 'Coaching'],
    featured: true,
  },
  {
    icon: 'doc',
    title: 'Policy & Process Architecture',
    text: 'Enterprise policies, SOPs and process universes to L2/L3 in BPMN 2.0, with RACI, controls, decision rights and traceability to regulation.',
    tags: ['SOPs', 'BPMN 2.0', 'RACI & DoA', 'P2S2C'],
  },
  {
    icon: 'bars',
    title: 'CMMI & Maturity Frameworks',
    text: 'CMMI DEV and SVC implementation, appraisal readiness, bespoke evidence-weighted maturity frameworks and competency models.',
    tags: ['CMMI ML3', 'High Maturity', 'RAG tools', 'Benchmarking'],
  },
  {
    icon: 'gear',
    title: 'Operational Excellence & Lean Six Sigma',
    text: 'DMAIC, root-cause analysis, nested Gage R&R and control plans that turn diagnosis into hard savings and sustained gains.',
    tags: ['DMAIC', 'RCA', 'SPC', 'Black Belt'],
  },
  {
    icon: 'spark',
    title: 'AI-Driven Transformation',
    text: 'AI use cases placed on a 6-band cost-of-ownership spectrum, governed with clear decision rights, and built at the light-to-middle end.',
    tags: ['BPR++', 'AI governance', 'Claude Code', 'Use-case banding'],
  },
]

export const filters = [
  ['all', 'All'],
  ['gov', 'Governance & PMO'],
  ['agile', 'Agile & Maturity'],
  ['opex', 'Operational Excellence'],
  ['tech', 'Technology'],
]

export const projects = [
  { c: 'agile', tone: 'navy', tag: 'KPMG India · 2023 to 2024', metric: '106+', unit: 'project teams on Scrum & Kanban', client: 'Global IT services firm', title: 'Enterprise Agile Transformation', text: 'Moved 106+ teams to Scrum and Kanban on Azure DevOps with a full Agile Playbook, governance plan and Agile CoE.', bullets: ['+30% delivery efficiency', '−20% recurring issues'] },
  { c: 'gov', tone: 'blue', tag: 'Grant Thornton Bharat', metric: '6', unit: 'procurement towers in one manual', client: 'Leading UAE banking group', title: 'Group Sourcing Manual & Procurement Model', text: 'Authored a group-level sourcing manual codifying policy, roles, RACI, controls and decision rights, and defined the end-to-end P2S2C lifecycle with stage-gates.' },
  { c: 'gov', tone: 'lite', tag: 'Grant Thornton Bharat', metric: '7 · 40+', unit: 'policies · procedures across 7 functions', client: 'UAE-based AI and cloud enterprise', title: 'Enterprise Policy & Procedure Architecture', text: 'Coordinated seven enterprise policies and 40+ procedures with functional SMEs, defined the product and project lifecycle, and set up a governed policy repository.' },
  { c: 'agile', tone: 'blue', tag: 'KPMG India · 2023 to 2024', metric: 'ML3', unit: 'CMMI DEV & SVC achieved', client: 'Hong Kong-based IT services company', title: 'CMMI DEV & SVC Level 3', text: 'Built ML3-aligned development and service processes, closed workflow gaps, facilitated the appraisal and trained teams to sustain it.' },
  { c: 'agile', tone: 'navy', tag: 'KPMG India · 2024 to 2025', metric: '3.1 → 3.8', unit: 'maturity in six months', client: 'Global technology manufacturer', title: 'Competency Framework for PMs', text: 'Designed a competency model for project and programme managers, ran a capability-gap diagnosis and delivered targeted training.' },
  { c: 'gov', tone: 'lite', tag: 'KPMG India', metric: 'End to end', unit: 'portfolio & PMO function', client: 'Indian IT infrastructure company', title: 'Portfolio & PMO Set-Up', text: 'Governance framework, intake and prioritisation, templates, KPIs, reporting cadence, escalation model and an end-to-end business lifecycle with stage-gates.' },
  { c: 'opex', tone: 'blue', more: true, tag: 'Exxelia Alcon · 2023', metric: '−25%', unit: 'capacitor rejection, 135+ SKUs', client: 'Lean Six Sigma Black Belt project', title: 'Capacitor Rejection Reduction (DMAIC)', text: 'Nested Gage R&R, root-cause analysis, control charts and a control plan. Ranked first in the Black Belt project evaluation.' },
  { c: 'opex', tone: 'navy', more: true, tag: 'Exxelia Alcon', metric: '₹62.6L', unit: 'annual cost savings', client: 'Electronic components manufacturer', title: 'JIT Planning & Machine Investment', text: 'Just-in-time planning and machine investment analysis that delivered ₹62.6L in annual savings.' },
  { c: 'opex', tone: 'lite', more: true, tag: 'Starlite Lightings · 2022', metric: '−40%', unit: 'unplanned downtime', client: 'Lighting and appliance manufacturer', title: 'Preventive Maintenance & Downtime', text: 'Breakdown-time analysis, Fishbone and 5-Why on a shot-blasting line, then a preventive maintenance SOP and corrective actions.' },
  { c: 'tech', tone: 'navy', more: true, tag: 'TCS · 2020 to 2021', metric: '9,000+', unit: 'stores on the new platform', client: 'Walgreens, US retail pharmacy', title: 'Prescription Management Platform', text: 'Led QA and SIT for a greenfield platform migrating to Microsoft Azure. 100+ test cases a week, 20+ gaps a month surfaced as proxy product owner, 90%+ sprint accuracy.' },
  { c: 'tech', tone: 'blue', more: true, tag: 'TCS · 2018 to 2020', metric: '−25%', unit: 'batch job failures', client: 'IKEA, global home-furnishings retailer', title: 'Application Support & Pricing RCA', text: 'Ran cross-geography support at 100% CSI, 50+ problem requests at 94%+ accuracy, and RCA on pricing anomalies under offers worth €50M per week.' },
  { c: 'tech', tone: 'lite', more: true, tag: 'Intugine · 2022', metric: '16', unit: 'features prioritised for mobile', client: 'Logistics visibility SaaS company', title: 'Parcel-Tracking Mobile Adaptation', text: 'Competitive analysis, wireframes, Product Design Document and user stories. Ranked first in the SIOM summer internship evaluation.' },
]

// Only clients with a logo on file appear in the strip.
export const clientLogos = [
  [
    { src: img('emirates-nbd.png'), alt: 'Emirates NBD' },
    { src: img('g42.png'), alt: 'G42 / Inception.AI' },
    { src: img('ikea.png'), alt: 'IKEA' },
    { src: img('walgreens.png'), alt: 'Walgreens' },
  ],
  [
    { src: img('kpmg.png'), alt: 'KPMG India' },
    { src: img('mastek.png'), alt: 'Mastek' },
    { src: img('pccw.png'), alt: 'LPS-Lenovo' },
    { src: img('alcon.png'), alt: 'Exxelia Alcon' },
  ],
]

export const education = [
  {
    logo: img('siu.png'), org: 'Symbiosis (SIOM)', role: 'MBA, Operations Management', yr: '2021 to 2023', note: 'CGPA 7.92 · Top 2%',
    more: ['Rank 1 in fourth semester', 'Rank 1, Lean Six Sigma Black Belt project evaluation', 'Rank 1, summer internship evaluation', 'National Finalist, Wipro B.Pro 2.0 and Flipkart challenge', '8+ national case competition wins'],
  },
  {
    logo: img('dcrust.png'), org: 'DCRUST, Murthal', role: 'B.Tech, Electrical Engineering', yr: '2013 to 2017', note: 'CGPA 8.00 · Top 5%',
    more: ['Graduated with Honours, all exams cleared in a single sitting', 'Haryana Government Topper Scholarship', 'NSS Coordinator'],
  },
  {
    org: 'Govt. Sr. Sec. School, Sangwari', role: 'Senior Secondary, Non-Medical', yr: '2011 to 2012', note: 'CGPA 9.60',
    text: '2nd position in Class XII, Board of School Education Haryana. Best Volunteer, NSS 2012.',
  },
  { org: 'Holy Child Public School, Rewari', role: 'High School', yr: '2006 to 2010', note: 'CGPA 8.40' },
]

export const experience = [
  {
    mono: 'GT', org: 'Grant Thornton Bharat LLP', role: 'Assistant Manager, Business Excellence', yr: 'Jun 2025 to Present', note: 'Gurugram', current: true,
    more: ['Group sourcing manual across six procurement towers for a leading UAE banking group', 'Seven enterprise policies and 40+ procedures coordinated across seven functions for a UAE-based AI and cloud enterprise', 'Process universes documented to L2/L3 in BPMN 2.0 with RACI, controls and KPIs', 'AI accelerators built with Claude and Claude Code: RFP-to-proposal engine, maturity-framework builder, BPR++ and an AI maturity assessment tool'],
  },
  {
    logo: img('kpmg.png'), org: 'KPMG India', role: 'Consultant, Business Excellence', yr: 'Apr 2023 to Jun 2025', note: 'Gurugram',
    more: ['Enterprise Agile across 106+ teams, +30% delivery efficiency, −20% recurring issues', 'CMMI DEV & SVC ML3 for a Hong Kong-based IT services company', 'Portfolio and PMO function set up end to end', 'Competency framework lifting PM maturity from 3.1 to 3.8 in six months', 'CMMI High Maturity advisory and Appraisal Team Member'],
  },
  { org: 'Intugine Technologies', role: 'Product Intern', yr: 'Apr 2022 to Jun 2022', note: 'Bengaluru' },
  {
    logo: img('tcs.png'), org: 'Tata Consultancy Services', role: 'System Solution Engineer', yr: 'Oct 2017 to Sep 2021', note: 'Noida · Chennai',
    prog: 'Earlier: System Support Engineer (Nov 2018 to May 2020) · Assistant System Developer (Feb 2018 to Oct 2018) · Assistant System Engineer, Trainee (Oct 2017 to Jan 2018)',
    more: ['QA and SIT lead on a prescription platform for 9,000+ US pharmacy stores', 'Cross-geography application support for a global retailer at 100% CSI, −25% batch failures', 'PL/SQL for 30+ change requests with only two low-priority defects, −20% fetch time', 'Led a six-engineer team in the Initial Learning Program, highest skill points'],
  },
]

export const awards = [
  { tag: '2026', title: 'Spot Award, Team Player', text: 'For collaboration, consistent performance and quality delivery at client site.', mono: 'GT', by: 'Grant Thornton Bharat', when: 'Feb 2026' },
  { tag: '2024', title: 'Above and Beyond Award', text: 'For proactively exceeding client needs and delivering high-impact outcomes.', logo: img('kpmg.png'), by: 'KPMG India', when: 'Oct 2024' },
  { tag: '4 yrs', title: 'Service & Commitment Award', text: 'Four consecutive years, plus the highest skill points in the Initial Learning Program.', logo: img('tcs.png'), by: 'Tata Consultancy Services', when: '2018 to 2021' },
  { tag: 'Rank 1', title: 'Lean Six Sigma Black Belt Project', text: 'Ranked first in the Black Belt project evaluation for the capacitor rejection DMAIC project.', mono: 'LSS', by: 'Black Belt evaluation', when: '2023' },
  { tag: 'Rank 1', title: 'Summer Internship & Semester 4', text: 'Rank 1 in the SIOM summer internship evaluation and Rank 1 in the fourth semester.', logo: img('siu.png'), by: 'SIOM, Symbiosis', when: '2022' },
  { tag: '8+ wins', title: 'National Case Competitions', text: 'National Finalist in Wipro B.Pro 2.0. 1st Runner-Up at Matrix’22, IIM Kozhikode and Crack the Case 7.0, IIM Ranchi.', mono: 'B', by: 'IIMs & leading B-schools', when: '2022' },
  { tag: '2012', title: '2nd Position, Class XII', text: 'Board of School Education Haryana, with a Haryana Government merit scholarship and Best Volunteer, NSS.', mono: 'H', by: 'BSEH', when: '2012' },
]

export const certsHeadline = [
  { logo: img('pmp.png'), name: 'Project Management Professional', meta: 'PMI · 2024' },
  { name: 'Lean Six Sigma Black Belt (ICBB)', meta: '2023' },
  { logo: img('cmmi.png'), name: 'CMMI Associate', meta: 'ISACA · 2024' },
]

export const certsSupporting = [
  ['CSM® and CSPO®', 'Scrum Alliance · 2023 to 2024'],
  ['Atlassian Agile Project Management Professional', '2024'],
  ['Google Data Analytics', 'Google · 2022'],
  ['Change Management', 'LinkedIn · 2024'],
  ['Prompt Engineering for Generative AI', 'LinkedIn · 2023'],
  ['Digital & Data Foundations: AI and Automation', 'KPMG · 2023'],
  ['ITIL Foundation', '2018'],
]

export const ribbons = [
  ['Business Excellence', 'PMO Governance', 'Enterprise Agile', 'CMMI', 'Lean Six Sigma', 'Process Architecture'],
  ['Portfolio Management', 'Policy & SOPs', 'Operating Models', 'Change Management', 'AI Governance', 'Maturity Frameworks'],
]

export const bands = [
  { name: 'Prompt-level', what: 'A person and a chat window', time: 'Hours' },
  { name: 'Skills & Projects', what: 'Reusable instructions', time: 'Days' },
  { name: 'Copilot agents', what: 'An agent on a licensed platform', time: 'Weeks' },
  { name: 'RAG applications', what: 'Retrieval over own documents', time: 'Months' },
  { name: 'Custom platforms', what: 'Own app, database, SSO', time: 'Quarters' },
  { name: 'Embedded & edge ML', what: 'Models on operational streams', time: '~18 months' },
]

export const aiCards = [
  { icon: 'list', tone: 'navy', tag: 'Use cases', title: 'AI use cases inside real processes', text: 'Identified AI use cases along the business lifecycles built for two technology clients and across procurement for a UAE banking group and a development finance institution, each banded to target cycle-time reduction.', chips: ['Lifecycle', 'Procurement'] },
  { icon: 'code', tone: 'blue', tag: 'Tools built', title: 'Accelerators built with Claude Code', text: 'BPR++ for AI-native process redesign, an AI maturity assessment tool, an RFP-to-proposal engine and a maturity-framework builder. Each is a codified skill with gated review and a fixed output contract.', chips: ['Claude', 'Claude Code'] },
  { icon: 'shield', tone: 'navy', tag: 'Governance', title: 'Portfolio banding & agentic governance', text: 'Facilitated the banding of 26 candidate initiatives with every cost assumption visible to leadership, and defined which decisions can go to agents and which stay with a human.', chips: ['26 initiatives', 'Decision rights'] },
]

export const faqs = [
  ['What industries have you worked in?', 'Banking, development finance, technology and IT services, manufacturing, retail and logistics. Clients span Europe, the Americas, the Middle East and India.'],
  ['Can I download your resume?', 'Yes. Use the Download CV button at the top of the page or in the Certifications section for a PDF copy.'],
  ['What roles are you open to?', 'Business Excellence, Program Management and PMO roles, plus transformation work across governance, process architecture, Agile delivery and maturity uplift.'],
  ['What tools do you work with?', 'Azure DevOps, Jira, Confluence, Power BI, Tableau, SQL and PL/SQL, Visio and BPMN 2.0, Minitab and advanced Excel. For AI work: Claude, Claude Code, ChatGPT and Microsoft Copilot.'],
  ['How do you approach AI in a transformation?', 'As a touchpoint layer inside the client’s own policy, process, lifecycle and PMO work. Each use case is placed on the 6-band spectrum so cost of ownership, time to first value and governance are clear before anything is built.'],
]
