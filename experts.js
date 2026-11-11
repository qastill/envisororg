// Envisor expert CVs. Used by advisor.html (cards) and expert.html (full CV page).
// Publish professional information only: no ID/tax numbers, home address, personal phone or family details.
window.EXPERTS = {
  qh: {
    name: 'Dr. Qashtalani Haramaini, S.T., M.T.', short: 'Dr. Qashtalani Haramaini',
    role: 'Energy & Power Systems Expert', card: 'Energy & Power Systems',
    deg: 'Dr. · M.T. · S.T.',
    specialist: 'Power Distribution, Loss Reduction & Energy Analytics',
    credentials: [
      { k: 'Doctorate', v: 'Electrical Engineering · Universitas Indonesia' },
      { k: 'M.T.', v: 'Electrical Engineering · Universitas Indonesia' },
      { k: 'S.T.', v: 'Electrical Engineering · Universitas Indonesia' },
      { k: 'Australia Awards', v: 'Waste to Energy · Griffith University' },
      { k: '8+ Publications', v: 'IEEE · IOP · Elsevier' }
    ],
    specializations: [
      { t: 'Power Distribution & Loss Reduction', d: 'Distribution operations and technical / non-technical loss reduction, from leading a PLN unit recognised as Best Unit for Losses Reduction and Cash Recovery.', s: ['Loss analysis', 'Energy transactions', 'Revenue recovery', 'Network operations'] },
      { t: 'Smart Metering & Load Forecasting', d: 'Research and practice in smart metering and data-driven load forecasting, published in IEEE, IOP and Elsevier venues.', s: ['Smart metering', 'Load forecasting', 'Data analytics', 'Smart grid'] },
      { t: 'Renewable Energy & Waste-to-Energy', d: 'Solar PV research and waste-to-energy study at Griffith University under Australia Awards, with a policy perspective on the energy transition.', s: ['Solar PV', 'Waste-to-energy', 'Energy policy'] },
      { t: 'Utility Customer & Energy Management', d: 'Key-account, engineering and energy-transaction experience at PLN, plus operations at ENGIE (GDF SUEZ), for efficiency and power-quality advisory.', s: ['Key accounts', 'Energy efficiency', 'Power quality'] }
    ],
    img: 'avatar-qashtalani.webp',
    headline: 'Unit Manager, PLN · ENGIE (GDF SUEZ) alumnus · Australia Awards awardee · Founder, Electra Academy',
    links: [{ label: 'qashtalani-haramaini.com', url: 'https://qashtalani-haramaini.com' }],
    summary: 'Power systems and energy professional with a career at PLN spanning key-account marketing, engineering, energy transactions and unit management, preceded by operations experience at ENGIE (GDF SUEZ). Doctorate and master\'s in electrical engineering from Universitas Indonesia, with waste-to-energy study at Griffith University under Australia Awards. Published researcher in smart metering, solar PV and load forecasting, and founder of Electra Academy.',
    experience: [
      { role: 'Unit Manager', org: 'PLN', period: '2021 – Present' },
      { role: 'Energy Transaction Supervisor', org: 'PLN', period: '2020 – 2021' },
      { role: 'Engineering Supervisor', org: 'PLN', period: '2019 – 2020' },
      { role: 'Key Account Marketing', org: 'PLN', period: '2018 – 2019' },
      { role: 'Operations', org: 'ENGIE (GDF SUEZ)', period: '2016' },
      { role: 'Founder', org: 'Electra Academy', period: '' }
    ],
    education: [
      { degree: 'Doctorate, Electrical Engineering', inst: 'Universitas Indonesia', period: '' },
      { degree: 'M.T., Electrical Engineering', inst: 'Universitas Indonesia', period: '2017 – 2019' },
      { degree: 'Waste to Energy (Australia Awards)', inst: 'Griffith University, Australia', period: '' },
      { degree: 'S.T., Electrical Engineering', inst: 'Universitas Indonesia', period: '2012 – 2015' }
    ],
    achievements: [
      'Best PLN Unit — Cash Recovery (2020)',
      'Best PLN Unit — Losses Reduction (2019)',
      'Green Category Best Inspirator (2019)',
      '8+ publications (IEEE / IOP / Elsevier) on smart metering, solar PV and load forecasting',
      'Speaker at international conferences in Kuala Lumpur, Bali, Istanbul and Nagoya'
    ],
    tags: ['Power Systems', 'Distribution & Losses', 'Renewable Energy', 'Energy Policy', 'Data Analytics', 'Smart Grid', 'Energy Efficiency', 'Power Quality']
  },

  da: {
    name: 'Dino Arla, S.T.', short: 'Dino Arla',
    role: 'Power Systems & Applied ML Expert', card: 'Power Systems & Applied ML',
    deg: 'M.M.T. · S.T. · Professional Engineer',
    specialist: 'Distribution Analytics, Machine Learning & IoT Telemetry',
    credentials: [
      { k: 'Professional Engineer', v: 'Insinyur Profesional' },
      { k: 'Master of Technology Mgmt.', v: 'Business Analytics · ITS' },
      { k: 'S.T.', v: 'Electrical Engineering' },
      { k: 'Patent', v: 'AQORTA IoT telemetry system' },
      { k: 'Best Paper', v: 'ICoDSA 2025' }
    ],
    specializations: [
      { t: 'Distribution Analytics & Loss Recovery', d: '8+ years building analytics for PLN\'s distribution network, including metering, energy-loss recovery and billing as Team Leader, Energy Transaction.', s: ['Loss recovery', 'Metering & billing', 'Energy transactions'] },
      { t: 'Applied Machine Learning', d: 'Developer of MAGNETO, a ranking system for electricity-theft detection, with 7 scientific publications and a Best Paper award.', s: ['Theft detection', 'Anomaly ranking', 'Predictive models'] },
      { t: 'IoT & Telemetry Systems', d: 'Inventor of AQORTA, a patented solar-powered IoT system for air-quality and noise telemetry.', s: ['IoT sensors', 'Solar-powered telemetry', 'Environmental monitoring'] },
      { t: 'Business Analytics', d: 'Master\'s in technology management (business analytics) applied to utility operations and decision-making.', s: ['Business analytics', 'Decision support', 'Data strategy'] }
    ],
    img: 'avatar-dino.webp',
    headline: 'Professional Engineer · Applied machine learning researcher · Founder, Arla Industri Teknopatih',
    links: [{ label: 'dinoarla.com', url: 'https://dinoarla.com' }],
    summary: 'Electrical engineer with 8+ years building and deploying analytics for Indonesia\'s national power distribution network at PLN, focused on metering, energy-loss recovery and billing. Applied machine learning researcher, patent holder and founder of Arla Industri Teknopatih.',
    experience: [
      { role: 'Team Leader, Energy Transaction', org: 'PLN Indramayu', period: '2023 – 2025',
        points: ['Led metering management, energy-loss recovery and billing for the unit'] },
      { role: 'Distribution analytics', org: 'PLN', period: '8+ years',
        points: ['Built and deployed analytics systems for the national power distribution network', 'Developed MAGNETO, a ranking system for electricity-theft detection'] },
      { role: 'Founder', org: 'Arla Industri Teknopatih', period: '2013 – Present' }
    ],
    education: [
      { degree: 'Master of Technology Management (Business Analytics)', inst: 'Institut Teknologi Sepuluh Nopember (ITS)', period: '' },
      { degree: 'S.T., Electrical Engineering', inst: '', period: '' }
    ],
    certifications: ['Professional Engineer'],
    projects: [
      {"t": "MAGNETO — Electricity-Theft Detection Ranking", "loc": "PLN distribution network, Indonesia", "y": "PLN", "cat": "Grid, Metering & Analytics", "role": "Developer", "org": "PLN", "client": "PLN (state utility)", "tech": ["Machine learning", "Metering data"], "scope": ["Developed MAGNETO, a ranking system for electricity-theft detection, to prioritise suspected cases for field inspection."]},
      {"t": "Energy Transaction & Loss Recovery", "loc": "Indramayu, West Java, Indonesia", "y": "2023–2025", "cat": "Grid, Metering & Analytics", "role": "Team Leader, Energy Transaction", "org": "PLN Indramayu", "client": "PLN (state utility)", "tech": ["Metering", "Billing", "Loss recovery"], "scope": ["Led metering management, energy-loss recovery and billing for the unit."]},
      {"t": "AQORTA — Solar-Powered IoT Telemetry (Patented)", "loc": "Indonesia", "y": "Patent", "cat": "Grid, Metering & Analytics", "role": "Inventor", "org": "Arla Industri Teknopatih", "tech": ["IoT", "Solar power", "Environmental sensing"], "scope": ["Invented AQORTA, a patented solar-powered IoT telemetry system for air-quality and noise monitoring."]}
    ],
    achievements: [
      'Patent: AQORTA — solar-powered IoT air-quality and noise telemetry system',
      '7 scientific publications',
      'Best Paper & Best Presenter, ICoDSA 2025'
    ],
    tags: ['Power Distribution', 'Energy Transactions', 'Loss Recovery', 'Machine Learning', 'Business Analytics', 'IoT & Telemetry']
  },

  fn: {
    name: 'M Farda Najih Arifani', short: 'M Farda Najih Arifani',
    role: 'Electrical Safety (K3) Expert', card: 'Electrical Safety (K3)',
    deg: 'Ahli K3 Listrik · Ahli K3 Umum',
    specialist: 'Electrical Safety, OHS Management & Fire Protection',
    credentials: [
      { k: 'Ahli K3 Listrik', v: 'Certified Electrical OHS Expert' },
      { k: 'Ahli K3 Umum', v: 'Certified General OHS Expert' },
      { k: 'Fire Warden Class D', v: 'Petugas Peran Kebakaran' },
      { k: 'D3 Electrical Eng.', v: 'Universitas Diponegoro' },
      { k: '9+ Years', v: 'Power distribution & HSE' }
    ],
    specializations: [
      { t: 'Electrical Safety (K3 Listrik)', d: 'Hazard identification and control for electrical installations and distribution work, as a certified electrical OHS expert.', s: ['HIRARC', 'LOTO', 'Safe work procedures', 'Electrical installation safety'] },
      { t: 'OHS & HSE Management', d: 'Running K3L (health, safety, security & environment) programmes and audits within a national utility.', s: ['K3L programmes', 'HSE audits', 'Incident prevention'] },
      { t: 'Fire Protection', d: 'Certified Class D fire warden, covering fire-risk awareness and emergency roles at work sites.', s: ['Fire risk', 'Emergency response roles'] },
      { t: 'Distribution Construction & Metering', d: 'Control of distribution-network construction and maintenance of energy-transaction metering (APP).', s: ['Construction control', 'APP metering', 'AI for reliability & safety'] }
    ],
    img: 'avatar-farda.webp',
    headline: 'Certified General & Electrical OHS Expert · Class D Fire Warden · Co-Founder, Electra Academy',
    summary: 'Occupational health and safety specialist with 9+ years in power distribution at Indonesia\'s national utility, covering distribution-network construction control, energy-transaction metering maintenance and HSE. Actively applies artificial intelligence to improve the reliability and safety of power systems, and co-founded Electra Academy.',
    experience: [
      { role: 'Power distribution — construction, metering & HSE', org: 'National electricity utility', period: '9+ years',
        points: ['Control of distribution-network construction', 'Maintenance of energy-transaction metering (APP)', 'Health, safety, security and environment (K3L) programmes', 'Applying AI to power-system reliability and safety'] },
      { role: 'Co-Founder', org: 'Electra Academy', period: '' }
    ],
    education: [
      { degree: 'D3, Electrical Engineering', inst: 'Universitas Diponegoro', period: '' },
      { degree: 'S1, Accounting', inst: 'Universitas Terbuka', period: '' }
    ],
    certifications: ['Ahli K3 Umum — Certified General OHS Expert', 'Ahli K3 Listrik — Certified Electrical OHS Expert', 'Petugas Peran Kebakaran Kelas D — Class D Fire Warden'],
    tags: ['General & Electrical OHS', 'HIRARC & LOTO', 'Distribution Construction', 'Metering & Energy Transactions', 'Fire Protection', 'HSE Audits']
  },

  sd: {
    name: 'Muhamad Hidayah Sidiq, S.T.', short: 'M. Hidayah Sidiq',
    role: 'Metering & Distribution Efficiency Expert', card: 'Metering & Distribution',
    deg: 'S.T. (Electrical Engineering)',
    specialist: 'Metering Systems, AMI & Distribution Loss Control',
    credentials: [
      { k: 'S.T.', v: 'Electrical Engineering · Institut Teknologi Telkom' },
      { k: 'AMI Operation', v: 'PLN UPDL Pandaan (2025)' },
      { k: '6+ Years', v: 'PLN distribution, West Java' }
    ],
    specializations: [
      { t: 'Metering Systems & AMI', d: 'Meter-system control for PLN\'s West Java distribution network, trained in Advanced Metering Infrastructure operation and automatic power control for postpaid meters.', s: ['Meter system control', 'AMI', 'Postpaid metering'] },
      { t: 'Energy Loss Control', d: 'Three years in an energy-transaction section controlling distribution losses.', s: ['Loss analysis', 'Energy transactions'] },
      { t: 'Public Street Lighting (PJU)', d: 'Management and control of public street-lighting connections and consumption.', s: ['PJU control', 'Consumption audits'] },
      { t: 'Distribution Performance', d: 'Unit performance monitoring and reporting for a PLN customer-service unit.', s: ['KPI monitoring', 'Performance reporting'] }
    ],
    img: 'avatar-sidik.webp',
    headline: 'Officer, Meter System Control — PLN Distribution West Java · 6+ years at PLN',
    summary: 'Electrical engineer at PLN since 2019, specialising in metering systems, energy-loss and street-lighting control, and distribution performance in West Java. Currently responsible for meter-system control within distribution efficiency, measurement and system quality at PLN\'s West Java distribution headquarters.',
    experience: [
      { role: 'Officer, Meter System Control', org: 'PLN UID Jawa Barat — Distribution Efficiency, Measurement & System Quality', period: 'Aug 2024 – Present',
        points: ['Meter-system control for the West Java distribution network'] },
      { role: 'Performance Officer', org: 'PLN ULP Cikedung, UP3 Indramayu', period: 'Dec 2022 – Jul 2024',
        points: ['Unit performance monitoring and reporting'] },
      { role: 'Assistant Engineer, Losses & Street Lighting (PJU) Control', org: 'PLN ULP Indramayu — Energy Transaction Section', period: 'Dec 2019 – Nov 2022',
        points: ['Energy-loss control and public street-lighting (PJU) management'] }
    ],
    education: [
      { degree: 'S.T., Electrical Engineering', inst: 'Institut Teknologi Telkom', period: '2012 – 2016' }
    ],
    training: [
      'Introduction to Design Thinking — PLN (2026)',
      'Advanced Metering Infrastructure (AMI) operation — PLN UPDL Pandaan (2025)',
      'IPMS100 application for PLN makers — Pandaan (2025)',
      'Innovation dissemination: SCADA-integrated portable automatic transfer switch for backup supply (2025)',
      'Innovation dissemination: APCS-PM automatic power control for postpaid meters (2025)',
      'Innovation dissemination: SUNTIC (MVTIC bypass) for MV cable branching (2025)',
      'Innovation dissemination: optimised disconnector placement on distribution networks using DSMF (2025)',
      'CSR and community development programme implementation — PLN UPDL Semarang (2020)',
      'Pre-service certification — PLN UPDL Semarang (2019)'
    ],
    tags: ['Metering Systems', 'Advanced Metering (AMI)', 'Loss Reduction', 'Energy Transactions', 'Street Lighting (PJU)', 'Distribution Efficiency']
  },

  rm: {
    name: 'M. Rizky Maulanda, S.T.', short: 'M. Rizky Maulanda',
    role: 'Power Transformer & OLTC Expert', card: 'Transformer & OLTC',
    deg: 'S.T. · Reinhausen PSP',
    specialist: 'Power Transformers & On-Load Tap Changers (OLTC)',
    credentials: [
      { k: 'Reinhausen PSP', v: 'Certified Premium Service Provider, MR OLTC' },
      { k: 'Factory Qualified', v: 'Regensburg, Germany · 2020, 2022, 2023' },
      { k: 'BNSP', v: 'Competence in Electrical Installation' },
      { k: 'S.T.', v: 'Electrical Engineering · Syiah Kuala University' },
      { k: '9+ Years', v: 'Power transformer industry' }
    ],
    specializations: [
      { t: 'On-Load Tap Changers (OLTC)', d: 'Inspection, maintenance, troubleshooting, retrofit and modification of MR OLTCs across Indonesia, Malaysia, Australia and Taiwan.', s: ['OILTAP M / V / R', 'VACUTAP VV / VM / VR', 'Retrofit & modification'] },
      { t: 'Power Transformer Testing', d: 'High-voltage testing and QC from Factory Acceptance Test to Site Acceptance Test, working with customer witnesses.', s: ['FAT / SAT', 'IVPD & impulse', 'Temperature rise', 'SFRA', 'Oil breakdown'] },
      { t: 'Voltage Regulation & Drives', d: 'Automatic voltage regulators, monitoring and motor drives for tap changers.', s: ['TAPCON AVR', 'ETOS', 'MA7 / MA9', 'TAPMOTION ED'] },
      { t: 'After-Sales & Service Networks', d: 'After-sales strategy, key-account management and service-partner training for utilities, OEMs and industry.', s: ['Service strategy', 'Partner training', 'Key accounts'] }
    ],
    img: 'avatar-rizky.webp',
    headline: 'After Sales Service Manager, PT Huaming Power Indonesia · Former Reinhausen (MR) certified Premium Service Provider',
    links: [{ label: 'LinkedIn', url: 'https://linkedin.com/in/mrizkymaulanda' }],
    summary: 'Electrical engineer with 9+ years in the power transformer industry, currently After Sales Service Manager at PT Huaming Power Indonesia and formerly a Reinhausen (MR) certified Premium Service Provider for OLTC products. Plans and executes after-sales and service-network strategy for Indonesia, managing utilities (incl. PLN), transformer OEMs and industrial accounts, and combines deep technical product expertise with consultative, customer-facing support across Indonesia, Malaysia, Australia and Taiwan.',
    experience: [
      { role: 'After Sales Service Manager', org: 'PT Huaming Power Indonesia (Shanghai Huaming Power Equipment Group)', period: '2024 – Present',
        points: ['Plans and executes the after-sales service and support strategy for Huaming tap-changer products across Indonesia', 'Maintains direct contact with utilities (incl. PLN), transformer OEMs and industrial end users; monitors customer satisfaction, industry trends and competing products', 'Develops the local representative and service-partner network through selection, training and supervision', 'Represents Huaming at industry trade shows, seminars and technical conferences; delivers technical presentations and product training'] },
      { role: 'Field Service Engineer', org: 'PT Reinhausen Indonesia (Maschinenfabrik Reinhausen Group)', period: '2019 – 2024',
        points: ['Primary technical contact for customers across Indonesia, Malaysia, Australia and Taiwan; certified Premium Service Provider for MR OLTC products', 'Inspection, maintenance, troubleshooting, retrofit and modification of MR on-load tap changers; product training for local and international customers', 'Supported order processing and after-sales quotations in SAP, with extensive travel across a multi-country territory'] },
      { role: 'Quality Control / Testing Engineer — Power Transformers', org: 'PT Sintra Sinarindo Elektrik (Sintra Power)', period: '2017 – 2019',
        points: ['High-voltage testing and QC of power transformers from Factory Acceptance Test (FAT) to Site Acceptance Test (SAT), working directly with customer witnesses', 'Full test suites incl. IVPD, impulse, temperature rise (ONAN/ONAF), LTAC, oil breakdown and SFRA'] }
    ],
    education: [
      { degree: 'Bachelor of Electrical Engineering', inst: 'Syiah Kuala University', period: '2012 – 2017' }
    ],
    certifications: [
      'Certified Premium Service Provider, Maschinenfabrik Reinhausen: OILTAP M, V, R; VACUTAP VV, VM, VR; AVR TAPCON BU/ISM/230, ETOS; motor drives MA7, MA7/8, MA9, TAPMOTION ED',
      'Factory qualifications, Regensburg (Germany): 2023 (VV, VM, VR, ETOS), 2022 (Type R, TAPCON 230), 2020 (Type V, M ED, MA7, MA9)',
      'OLTC & transformer training, Kuala Lumpur (2019)',
      'Certificate of Competence in Electrical Installation (BNSP)',
      'ISO 14001:2015 & OHSAS 18001:2007 implementation'
    ],
    skills: [
      'Consultative technical sales and after-sales management: needs analysis, solution presentations from engineering level to C-suite, representative-network development',
      'Market coverage: electric utilities, transformer OEMs, channel and service partners; competitor and industry-trend monitoring',
      'Tools: SAP, Microsoft Office, CRM and opportunity-funnel databases'
    ],
    languages: ['Bahasa Indonesia (native)', 'English (professional)'],
    projects: [
      {"t": "Huaming On-Load Tap Changer After-Sales Programme", "loc": "Indonesia", "y": "2024–Now", "cat": "Transformer & OLTC", "role": "After Sales Service Manager", "org": "PT Huaming Power Indonesia", "client": "Utilities (incl. PLN), transformer OEMs & industrial users", "tech": ["On-load tap changers", "Power transformers"], "scope": ["Plan and execute the after-sales service and support strategy for Huaming tap-changer products across Indonesia.", "Maintain direct contact with customer accounts — utilities (incl. PLN), transformer OEMs and industrial end users — monitoring customer satisfaction, industry trends and competitive offerings.", "Develop the local representative and service-partner network through selection, training and supervision of technical partners.", "Represent Huaming products at industry trade shows, seminars and technical conferences; deliver technical presentations and product training."]},
      {"t": "MR OLTC Field Service — Multi-Country Territory", "loc": "Indonesia, Malaysia, Australia & Taiwan", "y": "2019–2024", "cat": "Transformer & OLTC", "role": "Field Service Engineer · Certified Premium Service Provider", "org": "PT Reinhausen Indonesia (Maschinenfabrik Reinhausen Group)", "client": "Utilities, transformer OEMs & industrial users", "tech": ["On-load tap changers", "Voltage regulators", "Motor drives"], "scope": ["Primary technical contact for customer accounts across Indonesia, Malaysia, Australia and Taiwan.", "Inspection, maintenance, troubleshooting, retrofit and modification of MR on-load tap changers (OILTAP, VACUTAP; TAPCON, ETOS; MA7/MA9, TAPMOTION ED).", "Delivered product training to local and international customers.", "Supported order processing and after-sales quotations with SAP."]},
      {"t": "Power Transformer FAT & SAT Testing", "loc": "Indonesia", "y": "2017–2019", "cat": "Transformer & OLTC", "role": "Quality Control / Testing Engineer", "org": "PT Sintra Sinarindo Elektrik (Sintra Power)", "client": "Transformer buyers (customer witnesses)", "tech": ["Power transformers", "High-voltage testing"], "scope": ["High-voltage testing and QC of power transformers from Factory Acceptance Test (FAT) to Site Acceptance Test (SAT), interfacing directly with customer witnesses.", "Full test suites including IVPD, impulse, temperature rise (ONAN/ONAF), LTAC, oil breakdown and SFRA."]}
    ],
    tags: ['Power Transformers', 'On-Load Tap Changers', 'Transformer Testing (FAT/SAT)', 'SFRA & HV Testing', 'Retrofit & Maintenance', 'After-Sales Service']
  },
  ca: {
    name: 'Chaizar Ali Fachrudien, S.T.', short: 'Chaizar Ali Fachrudien',
    role: 'Renewable Energy Technical Specialist', card: 'Solar PV, BESS & Hybrid',
    img: 'avatar-chaizar.webp',
    links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/chaizar-ali-fachrudien-78720ab4/' }],
    deg: 'S.T. (Electrical Power) · Universitas Indonesia',
    specialist: 'Solar PV, Floating PV, BESS & Hybrid Power Systems',
    headline: 'Renewable Energy Technical Specialist, Akuo Energy Indonesia · 10 years in Indonesian renewables · PVsyst · HOMER · DIgSILENT',
    credentials: [
      { k: 'S.T.', v: 'Electrical (Power) Engineering · Universitas Indonesia · GPA 3.72' },
      { k: '10 Years', v: 'Solar, wind, hydro, BESS & hybrid in Indonesia' },
      { k: '37 Projects', v: '100 kWp rooftop to 425 MWp floating PV' },
      { k: 'BESS up to 350 MWh', v: 'Hybrid PV–BESS–genset systems' },
      { k: '6 Publications', v: 'International conference papers on PV' }
    ],
    specializations: [
      { t: 'Solar PV & Floating PV Design', d: 'Plant sizing, layout design and energy-yield simulation for ground-mounted, rooftop and floating PV, from 100 kWp rooftops to 425 MWp floating plants.', s: ['PVsyst', 'PVDesign', 'Helioscope', 'Energy yield', 'Floating PV'] },
      { t: 'BESS & Hybrid Systems', d: 'Hybrid PV–BESS–genset modelling and sizing (BESS up to 350 MWh), cluster-based village electrification and a 1 GW wind–solar–BESS–gas pre-feasibility.', s: ['HOMER', 'BESS sizing', 'Hybrid modelling', 'Microgrids'] },
      { t: 'Grid Interconnection & Impact Studies', d: 'Grid assessments, interconnection and impact studies with PLN for solar, wind and hydro, plus BESS integration on 20 kV distribution networks.', s: ['DIgSILENT', 'ETAP', 'Grid impact study', '20 kV distribution'] },
      { t: 'Tender, EPC & Feasibility Support', d: 'Technical bidding documents and EPC/OEM selection under PLN RFP/PPA and lender requirements, FEED, resource assessment and feasibility studies.', s: ['Technical specifications', 'EPC selection', 'Lender requirements', 'PPA support'] }
    ],
    summary: 'Renewable energy technical specialist with 10 years of experience in Indonesia across solar PV, floating PV, wind, hydro, BESS and hybrid systems. Skilled in grid interconnection and impact studies, power plant design, energy-yield simulation, and technical support for EPC and OEM tenders under PLN, C&I and lender requirements.',
    experience: [
      { role: 'Renewable Energy Technical Specialist', org: 'Independent', period: 'Oct 2023 – Present',
        points: ['Engineering support and deliverables for renewable energy development: hybrid system modelling, power system design and studies, energy-yield analysis, plant design and feasibility studies'] },
      { role: 'Renewable Energy Technical Specialist', org: 'Akuo Energy Indonesia', period: 'Oct 2022 – Present',
        points: ['Collects and analyses data for FEED, resource assessment, performance evaluation and feasibility studies', 'Defines technical specifications, scopes of work and requirements for technical bidding documents in line with PLN RFP/PPA and lender requirements', 'Coordinates technical consultants, OEMs and EPC contractors to optimise technology performance and competitiveness', 'Leads technical and ESG preparation, selection and execution of EPC contracts', 'Supports subsidiaries and project companies (SPCs); screens and recommends consultants, EPC contractors and OEMs'] },
      { role: 'Electrical Engineer', org: 'Akuo Energy Indonesia', period: 'Sep 2016 – Oct 2022',
        points: ['Grid assessments, grid impact studies, energy-yield assessments, power plant design and electrical engineering for solar, wind, hydro and biomass projects'] },
      { role: 'Research Assistant', org: 'Tropical Renewable Energy Center (TREC), Universitas Indonesia', period: 'Nov 2015 – Aug 2016',
        points: ['Research on off-grid and on-grid PV implementation in Indonesia; six papers published at international conferences'] },
      { role: 'Electrical Energy Conversion Laboratory Assistant', org: 'Department of Electrical Engineering, Universitas Indonesia', period: 'Aug 2014 – Aug 2016',
        points: ['Assisted power engineering and power electronics experiments; designed experiment modules and maintained equipment'] }
    ],
    education: [
      { degree: 'Bachelor of Engineering, Electrical (Power) Engineering — GPA 3.72/4.00', inst: 'Universitas Indonesia · Thesis: minimum line-loss calculation for optimum PV penetration capacity and location on radial distribution systems', period: '2016' }
    ],
    achievements: [
      'Six research papers published at international conferences',
      'Best Team, Student Energy Conference',
      '1st Place, Microcontroller Project',
      'Lotte Foundation Scholarship; DIKTI-PPA Scholarship'
    ],
    projects: [
      {"t": "Cluster-Based Hybrid System Village Electrification", "loc": "Indonesia", "y": "2026", "role": "Renewable Energy Technical Specialist", "org": "Independent", "tech": ["Hybrid system"], "scope": ["Developed power plant sizing, design, and yield simulation.", "Developed the cluster-based hybrid model and a simple sizing tool."], "d": "Developed power plant sizing, design, and yield simulation. Developed the cluster-based hybrid model and a simple sizing tool."},
      {"t": "Ground-Mounted PV 65 MWp (PLN Subsidiary)", "loc": "East Java, Indonesia", "y": "2026", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "client": "PLN subsidiary", "tech": ["Ground-mounted PV"], "scope": ["Developed power plant sizing, design, and yield simulation.", "Provided engineering support for the competitive bidding tender, including EPC tender selection."], "pv": 65, "d": "Developed power plant sizing, design, and yield simulation. Provided engineering support for the competitive bidding tender, including EPC tender selection."},
      {"t": "Ground-Mounted PV 16 MWp (C&I)", "loc": "Central Java, Indonesia", "y": "2026", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "client": "Commercial & industrial (C&I)", "tech": ["Ground-mounted PV"], "scope": ["Developed power plant sizing, design, and yield simulation.", "Provided engineering support for the competitive bidding tender, including EPC tender selection."], "pv": 16, "d": "Developed power plant sizing, design, and yield simulation. Provided engineering support for the competitive bidding tender, including EPC tender selection."},
      {"t": "Floating PV 130 MWp + 10 MWh BESS", "loc": "West Nusa Tenggara, Indonesia", "y": "2026", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "tech": ["Floating PV", "BESS"], "scope": ["Developed power plant sizing, design, and yield simulation."], "pv": 130, "bess": 10, "d": "Developed power plant sizing, design, and yield simulation."},
      {"t": "Floating PV 130 MWp", "loc": "Lampung, Indonesia", "y": "2026", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "tech": ["Floating PV"], "scope": ["Developed power plant sizing, design, and yield simulation."], "pv": 130, "d": "Developed power plant sizing, design, and yield simulation."},
      {"t": "Floating PV 425 MWp", "loc": "Lampung, Indonesia", "y": "2026", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "tech": ["Floating PV"], "scope": ["Developed power plant sizing, design, and yield simulation."], "pv": 425, "d": "Developed power plant sizing, design, and yield simulation."},
      {"t": "Hybrid PV 77 MWp + BESS 13 MWh (PLN)", "loc": "Central Java, Indonesia", "y": "2026", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "client": "PLN (state utility)", "tech": ["Solar PV", "BESS", "Hybrid system"], "scope": ["Developed power plant sizing, design, yield simulation, and grid interconnection study.", "Provided engineering support for the competitive bidding tender, including EPC tender selection."], "pv": 77, "bess": 13, "d": "Developed power plant sizing, design, yield simulation, and grid interconnection study. Provided engineering support for the competitive bidding tender, including EPC tender selection."},
      {"t": "BESS Initial Integration Study Consultation", "loc": "Jakarta, Indonesia", "y": "2026", "role": "Renewable Energy Technical Specialist", "org": "Independent", "tech": ["BESS"], "scope": ["Provided technical sizing and initial grid analysis for BESS integration in a 20 kV PLN distribution system."], "d": "Provided technical sizing and initial grid analysis for BESS integration in a 20 kV PLN distribution system."},
      {"t": "3 Wind Farm Sites – 750 MW", "loc": "Java, Indonesia", "y": "2025", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "tech": ["Wind"], "scope": ["Developed the grid assessment report for three potential sites."], "mw": 750, "d": "Developed the grid assessment report for three potential sites."},
      {"t": "Floating PV 348 MWp", "loc": "Banten, Indonesia", "y": "2025", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "tech": ["Floating PV"], "scope": ["Developed power plant sizing, design, and yield simulation."], "pv": 348, "d": "Developed power plant sizing, design, and yield simulation."},
      {"t": "Floating PV 114 MWp", "loc": "East Kalimantan, Indonesia", "y": "2025", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "tech": ["Floating PV"], "scope": ["Developed power plant sizing, design, and yield simulation."], "pv": 114, "d": "Developed power plant sizing, design, and yield simulation."},
      {"t": "Wind Farm 60 MW + BESS 13 MWh (PLN)", "loc": "West Sulawesi, Indonesia", "y": "2025", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "client": "PLN (state utility)", "tech": ["Wind", "BESS"], "scope": ["Performed the grid interconnection study in collaboration with PLN.", "Developed the electrical design and optimization, including the BESS.", "Provided engineering support for the competitive bidding tender, including EPC tender selection."], "bess": 13, "mw": 60, "d": "Performed the grid interconnection study in collaboration with PLN. Developed the electrical design and optimization, including the BESS. Provided engineering support for the competitive bidding tender, including EPC tender selection."},
      {"t": "Hybrid PV 12.8 MWp + BESS 15 MWh (PLN)", "loc": "North Maluku, Indonesia", "y": "2025", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "client": "PLN (state utility)", "tech": ["Solar PV", "BESS", "Hybrid system"], "scope": ["Developed power plant sizing, design, yield simulation, and grid interconnection study.", "Provided engineering support for the competitive bidding tender, including EPC tender selection."], "pv": 12.8, "bess": 15, "d": "Developed power plant sizing, design, yield simulation, and grid interconnection study. Provided engineering support for the competitive bidding tender, including EPC tender selection."},
      {"t": "Hybrid PV 6.7 MWp + BESS 4.5 MWh (PLN)", "loc": "Belitung, Indonesia", "y": "2025", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "client": "PLN (state utility)", "tech": ["Solar PV", "BESS", "Hybrid system"], "scope": ["Developed power plant sizing, design, yield simulation, and grid interconnection study.", "Provided engineering support for the competitive bidding tender, including EPC tender selection."], "pv": 6.7, "bess": 4.5, "d": "Developed power plant sizing, design, yield simulation, and grid interconnection study. Provided engineering support for the competitive bidding tender, including EPC tender selection."},
      {"t": "System Performance Analysis of Hybrid Power Plant", "loc": "East Nusa Tenggara, Indonesia", "y": "2025", "role": "Renewable Energy Technical Specialist", "org": "Independent", "tech": ["Hybrid system"], "scope": ["Analyzed hybrid power plant operation and provided input for future planning."], "d": "Analyzed hybrid power plant operation and provided input for future planning."},
      {"t": "Hybrid System Model Consultation", "loc": "Jakarta, Indonesia", "y": "2025", "role": "Renewable Energy Technical Specialist", "org": "Independent", "tech": ["Hybrid system"], "scope": ["Provided technical support and assistance for hybrid power plant modelling."], "d": "Provided technical support and assistance for hybrid power plant modelling."},
      {"t": "Ground-Mounted PV 50 MWp", "loc": "New Zealand", "y": "2024", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "tech": ["Ground-mounted PV"], "scope": ["Provided engineering support for project development and the grid connection process."], "pv": 50, "d": "Provided engineering support for project development and the grid connection process."},
      {"t": "Transformer Factory Audit", "loc": "China & Indonesia", "y": "2024", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "tech": ["Power transformers"], "scope": ["Supported a complete transformer factory audit in accordance with CIGRE standards at two manufacturers' facilities (China and Indonesia)."], "d": "Supported a complete transformer factory audit in accordance with CIGRE standards at two manufacturers' facilities (China and Indonesia)."},
      {"t": "Pre-Feasibility Study of 1 GW Hybrid Plant (Wind, Solar, BESS, Gas)", "loc": "South Sulawesi, Indonesia", "y": "2024", "role": "Renewable Energy Technical Specialist", "org": "Independent", "tech": ["Wind", "BESS", "Thermal (genset/gas)", "Hybrid system", "Solar PV"], "scope": ["Developed the hybrid system model, power plant design, and electrical system design."], "d": "Developed the hybrid system model, power plant design, and electrical system design."},
      {"t": "Hybrid PV 85 MWp + BESS 350 MWh (PLN Subsidiary)", "loc": "East Java, Indonesia", "y": "2024", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "client": "PLN subsidiary", "tech": ["Solar PV", "BESS", "Hybrid system"], "scope": ["Developed power plant sizing, design, and yield simulation.", "Provided engineering support for the competitive bidding tender, including EPC tender selection."], "pv": 85, "bess": 350, "d": "Developed power plant sizing, design, and yield simulation. Provided engineering support for the competitive bidding tender, including EPC tender selection."},
      {"t": "Ground-Mounted PV 70 MWp (PLN Subsidiary)", "loc": "Central Java, Indonesia", "y": "2024", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "client": "PLN subsidiary", "tech": ["Ground-mounted PV"], "scope": ["Developed power plant sizing, design, and yield simulation.", "Provided engineering support for the competitive bidding tender, including EPC tender selection."], "pv": 70, "d": "Developed power plant sizing, design, and yield simulation. Provided engineering support for the competitive bidding tender, including EPC tender selection."},
      {"t": "Wind Farm 55 MW (PLN Subsidiary)", "loc": "Aceh, Indonesia", "y": "2023", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "client": "PLN subsidiary", "tech": ["Wind"], "scope": ["Developed the electrical design and optimization and supported the grid impact study process.", "Provided engineering support for the competitive bidding tender, including EPC tender selection."], "mw": 55, "d": "Developed the electrical design and optimization and supported the grid impact study process. Provided engineering support for the competitive bidding tender, including EPC tender selection."},
      {"t": "Hybrid PV 100 MWp + BESS 350 MWh + Genset (PLN)", "loc": "Eastern Indonesia", "y": "2023", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "client": "PLN (state utility)", "tech": ["Solar PV", "BESS", "Thermal (genset/gas)", "Hybrid system"], "scope": ["Developed power plant sizing, design, and yield simulation.", "Provided engineering support for the competitive bidding tender, including EPC tender selection."], "pv": 100, "bess": 350, "d": "Developed power plant sizing, design, and yield simulation. Provided engineering support for the competitive bidding tender, including EPC tender selection."},
      {"t": "Floating PV 135 MWp (PLN Subsidiary)", "loc": "East Java, Indonesia", "y": "2023", "role": "Renewable Energy Technical Specialist", "org": "Akuo Energy Indonesia", "client": "PLN subsidiary", "tech": ["Floating PV"], "scope": ["Developed power plant sizing, design, and yield simulation.", "Provided engineering support for the competitive bidding tender, including EPC tender selection."], "pv": 135, "d": "Developed power plant sizing, design, and yield simulation. Provided engineering support for the competitive bidding tender, including EPC tender selection."},
      {"t": "Ground-Mounted PV 2 MWp (C&I)", "loc": "West Java, Indonesia", "y": "2022", "role": "Electrical Engineer", "org": "Akuo Energy Indonesia", "client": "Commercial & industrial (C&I)", "tech": ["Ground-mounted PV"], "scope": ["Developed power plant sizing, design, and yield simulation.", "Provided engineering support for the competitive bidding tender."], "pv": 2, "d": "Developed power plant sizing, design, and yield simulation. Provided engineering support for the competitive bidding tender."},
      {"t": "Rooftop PV 1 MWp (C&I)", "loc": "Banten, Indonesia", "y": "2022", "role": "Electrical Engineer", "org": "Akuo Energy Indonesia", "client": "Commercial & industrial (C&I)", "tech": ["Rooftop PV"], "scope": ["Developed power plant sizing, design, and yield simulation.", "Provided engineering support for the competitive bidding tender."], "pv": 1, "d": "Developed power plant sizing, design, and yield simulation. Provided engineering support for the competitive bidding tender."},
      {"t": "Floating PV 37 MWp (C&I)", "loc": "East Java, Indonesia", "y": "2021", "role": "Electrical Engineer", "org": "Akuo Energy Indonesia", "client": "Commercial & industrial (C&I)", "tech": ["Floating PV"], "scope": ["Developed power plant sizing, design, and yield simulation.", "Provided engineering support for the competitive bidding tender."], "pv": 37, "d": "Developed power plant sizing, design, and yield simulation. Provided engineering support for the competitive bidding tender."},
      {"t": "Ground-Mounted PV 20 MWp (C&I)", "loc": "South Sulawesi, Indonesia", "y": "2021", "role": "Electrical Engineer", "org": "Akuo Energy Indonesia", "client": "Commercial & industrial (C&I)", "tech": ["Ground-mounted PV"], "scope": ["Developed power plant sizing, design, and yield simulation.", "Provided engineering support for the competitive bidding tender."], "pv": 20, "d": "Developed power plant sizing, design, and yield simulation. Provided engineering support for the competitive bidding tender."},
      {"t": "Floating PV 60 MWp (PLN Subsidiary)", "loc": "West Java, Indonesia", "y": "2020", "role": "Electrical Engineer", "org": "Akuo Energy Indonesia", "client": "PLN subsidiary", "tech": ["Floating PV"], "scope": ["Developed power plant sizing, design, and yield simulation.", "Provided engineering support for the competitive bidding tender, including EPC tender selection."], "pv": 60, "d": "Developed power plant sizing, design, and yield simulation. Provided engineering support for the competitive bidding tender, including EPC tender selection."},
      {"t": "Floating PV 125 MWp (PLN Subsidiary)", "loc": "West Sumatra, Indonesia", "y": "2020", "role": "Electrical Engineer", "org": "Akuo Energy Indonesia", "client": "PLN subsidiary", "tech": ["Floating PV"], "scope": ["Developed power plant sizing, design, and yield simulation.", "Provided engineering support for the competitive bidding tender, including EPC tender selection."], "pv": 125, "d": "Developed power plant sizing, design, and yield simulation. Provided engineering support for the competitive bidding tender, including EPC tender selection."},
      {"t": "Mini Hydro 14 MW (PLN)", "loc": "Aceh, Indonesia", "y": "2020", "role": "Electrical Engineer", "org": "Akuo Energy Indonesia", "client": "PLN (state utility)", "tech": ["Mini hydro"], "scope": ["Performed the grid interconnection study and electrical design."], "mw": 14, "d": "Performed the grid interconnection study and electrical design."},
      {"t": "Floating PV 16 MWp (C&I)", "loc": "Banten, Indonesia", "y": "2019", "role": "Electrical Engineer", "org": "Akuo Energy Indonesia", "client": "Commercial & industrial (C&I)", "tech": ["Floating PV"], "scope": ["Developed the grid interconnection and feasibility study.", "Developed power plant sizing, design, and yield simulation.", "Provided engineering support for the competitive bidding tender, including EPC tender selection.", "Provided engineering support for the PPA negotiation."], "pv": 16, "d": "Developed the grid interconnection and feasibility study. Developed power plant sizing, design, and yield simulation. Provided engineering support for the competitive bidding tender, including EPC tender selection. Provided engineering support for the PPA negotiation."},
      {"t": "Mini Hydro 4 MW (PLN)", "loc": "Aceh, Indonesia", "y": "2018", "role": "Electrical Engineer", "org": "Akuo Energy Indonesia", "client": "PLN (state utility)", "tech": ["Mini hydro"], "scope": ["Performed the grid interconnection study and electrical design."], "mw": 4, "d": "Performed the grid interconnection study and electrical design."},
      {"t": "Wind Farm 66 MW (PLN)", "loc": "Central Java, Indonesia", "y": "2018", "role": "Electrical Engineer", "org": "Akuo Energy Indonesia", "client": "PLN (state utility)", "tech": ["Wind"], "scope": ["Performed the grid interconnection study in collaboration with PLN.", "Developed the electrical design and optimization."], "mw": 66, "d": "Performed the grid interconnection study in collaboration with PLN. Developed the electrical design and optimization."},
      {"t": "Rooftop PV 100 kWp (C&I)", "loc": "Banten, Indonesia", "y": "2018", "role": "Electrical Engineer", "org": "Akuo Energy Indonesia", "client": "Commercial & industrial (C&I)", "tech": ["Rooftop PV"], "scope": ["Performed the grid interconnection assessment and feasibility study.", "Developed the power plant design."], "pv": 0.1, "d": "Performed the grid interconnection assessment and feasibility study. Developed the power plant design."},
      {"t": "Hybrid PV 1.2 MWp + BESS 2.1 MWh", "loc": "East Kalimantan, Indonesia", "y": "2017", "role": "Electrical Engineer", "org": "Akuo Energy Indonesia", "tech": ["Solar PV", "BESS", "Hybrid system"], "scope": ["Supported the transformer factory acceptance test (FAT).", "Provided engineering support for plant operation."], "pv": 1.2, "bess": 2.1, "d": "Supported the transformer factory acceptance test (FAT). Provided engineering support for plant operation."},
      {"t": "Mini Hydro 4 MW (PLN)", "loc": "North Sumatra, Indonesia", "y": "2017", "role": "Electrical Engineer", "org": "Akuo Energy Indonesia", "client": "PLN (state utility)", "tech": ["Mini hydro"], "scope": ["Performed the grid interconnection study and electrical design."], "mw": 4, "d": "Performed the grid interconnection study and electrical design."}
    ],
    skills: [
      'Engineering software: PVsyst, HOMER, PVDesign, Helioscope, ETAP, DIgSILENT',
      'Design & productivity: QGIS, Google Earth, AutoCAD, CorelDRAW, Microsoft Office'
    ],
    languages: ['Bahasa Indonesia (native)', 'English (professional working proficiency)'],
    tags: ['Solar PV', 'Floating PV', 'BESS', 'Hybrid Systems', 'Wind', 'Mini Hydro', 'Grid Studies', 'PVsyst', 'HOMER', 'DIgSILENT']
  },
  ma: {
    name: 'Mokhammad Ardafillah, S.H., LL.M.', short: 'Mokhammad Ardafillah',
    role: 'Energy & Climate Policy and Regulatory Expert', card: 'Energy Law & Climate Policy',
    ini: 'MA',
    deg: 'LL.M. (ANU) · S.H. (UGM) · LPDP Awardee',
    specialist: 'Energy & Climate Policy, Regulation and Low-Emission Investment',
    headline: 'Expert Staff, House of Representatives of Indonesia (DPR RI) · Former Government Consultant to the Ministry of Finance (Tetra Tech) · Former Legal Analyst, WRI Indonesia',
    credentials: [
      { k: 'LL.M.', v: 'International Law · The Australian National University · GPA 5.375/7' },
      { k: 'S.H.', v: 'Law & Government · Universitas Gadjah Mada · GPA 3.91' },
      { k: 'LPDP Scholar', v: 'Indonesia Endowment Fund for Education, Ministry of Finance' },
      { k: 'Legislative Advisor', v: 'Expert Staff, DPR RI (2024 – present)' },
      { k: 'Best Research Paper', v: 'IV OIC Youth Scientific Congress, Kazan (2026)' }
    ],
    specializations: [
      { t: 'Energy & Climate Policy and Regulation', d: 'Policy, regulatory and incentive frameworks for low-emission growth in the energy and infrastructure sectors, supporting the Government of Indonesia through Tetra Tech.', s: ['Low-emission growth', 'Regulatory frameworks', 'Fiscal incentives', 'Energy infrastructure'] },
      { t: 'Legislative Drafting & Review', d: 'Providing expertise, analysis and support to members of the House of Representatives in crafting, reviewing and refining proposed bills.', s: ['Bill drafting', 'Legal analysis', 'Policy review', 'Parliamentary support'] },
      { t: 'Climate Finance & Green Investment', d: 'Legal and regulatory analysis of financial frameworks for a sustainable endowment fund (WRI Indonesia), investment-policy research (Jakarta Investment Center) and climate-funding research (Rumah Energi).', s: ['Climate finance', 'Endowment fund design', 'Investment policy', 'Public & private investment'] },
      { t: 'International & Regional Climate Diplomacy', d: 'International-law training and extensive ASEAN, Asia–Europe and UN engagement on climate change, human rights and sustainable development.', s: ['International law', 'ASEAN', 'Climate negotiations', 'Public diplomacy'] }
    ],
    summary: 'Lawyer and policy specialist focused on energy, climate and investment regulation. Holds an LL.M. in International Law from The Australian National University (LPDP scholarship) and a law degree from Universitas Gadjah Mada. Currently Expert Staff to the Indonesian House of Representatives, supporting the drafting and review of bills; previously a government consultant to the Ministry of Finance through Tetra Tech on policy, regulatory and incentive frameworks for low-emission growth in the energy and infrastructure sectors, and a legal analyst at WRI Indonesia on sustainable financing. Began in energy research at the Center for Energy Studies, Universitas Gadjah Mada.',
    experience: [
      { role: 'Expert Staff', org: 'House of Representatives of the Republic of Indonesia (DPR RI)', period: 'Nov 2024 – Present',
        points: ['Provides expertise, analysis and support to members of the legislature in crafting, reviewing and refining proposed bills'] },
      { role: 'Founder & Academy Director', org: 'Yakhero Academy', period: 'Apr 2026 – Present',
        points: ['Develops curricula in academic writing, research methodology and English; builds cross-sector partnerships and operational frameworks'] },
      { role: 'Korea–ASEAN Online Supporter', org: 'Mission of the Republic of Korea to ASEAN', period: 'Jun 2026 – Present',
        points: ['Promotes ASEAN–ROK relations through digital content and coverage of diplomatic events and regional initiatives'] },
      { role: 'Government Consultant for the Ministry of Finance', org: 'Tetra Tech', period: 'Jan 2024 – Aug 2024',
        points: ['Assisted the Government of Indonesia in establishing an effective policy, regulatory and incentive environment for low-emission growth in the energy and infrastructure sectors', 'Supported efforts to attract public and private investment into those sectors'] },
      { role: 'Expert Staff, Information Materials & Investment Policy', org: 'Jakarta Investment Center', period: 'Oct 2023 – Mar 2024',
        points: ['Researched investment policies worldwide and developed economics articles', 'Ensured the accuracy of the institution\'s press releases and media promotions'] },
      { role: 'Climate Policy Researcher', org: 'Rumah Energi', period: '2023',
        points: ['Synthesised insights on climate change, climate funding and cooperatives in Indonesia'] },
      { role: 'Fellow, ASEAN Youth Climate Leaders Programme', org: 'ASEAN Foundation', period: '2022',
        points: ['Co-created community-based climate adaptation and mitigation strategies tailored to Southeast Asian contexts'] },
      { role: 'Consultant — Legal Analyst', org: 'World Resources Institute (WRI) Indonesia', period: 'Jul 2021 – Dec 2021',
        points: ['Legal and regulatory analysis of financial frameworks to design a sustainable endowment fund model supporting ecological development in Papua'] },
      { role: 'Researcher', org: 'Forbil Institute', period: '2017',
        points: ['Research on the relationship between government as policy maker and business as main actor in improving Indonesia\'s competitiveness'] },
      { role: 'Research Assistant', org: 'Center for Energy Studies, Universitas Gadjah Mada', period: '2015 – 2016',
        points: ['Assisted the centre\'s energy research projects'] }
    ],
    education: [
      { degree: 'Master of Laws (LL.M.), International Law Specialisation — GPA 5.375', inst: 'The Australian National University · LPDP Overseas Master Degree Program (Batch 144); ANU College of Law International Excellence', period: '' },
      { degree: 'Bachelor of Law (S.H.), Law & Government Concentration — GPA 3.91', inst: 'Universitas Gadjah Mada · Pembangunan Jaya and PPA scholarships', period: '' }
    ],
    achievements: [
      'Best Research Paper Award, IV OIC Youth Scientific Congress, Kazan, Russia (2026)',
      'Selected participant and presenter, ASEFInnoLab6, Shanghai — Asia-Europe Foundation (2025)',
      'Most Outstanding Delegate, 5th Model ASEAN Inter-Parliamentary Assembly (2025)',
      'Selected participant, Asia-Pacific Youth Climathon — UN ESCAP (2024)',
      'Delegate, 21st ASEM Seminar on Human Rights: "Human Rights and Climate Change", Luxembourg (2022)',
      'Delegate, 3rd Asia Pacific Environmental Human Rights Defenders Forum — OHCHR & UNEP (2023)',
      'Finalist, Falling Walls Lab Indonesia — DAAD (2021)',
      'Gold Medal, National Undergraduate Student Scientific Week (PIMNAS XXIX), research field (2016)'
    ],
    training: [
      'Workshop & Policy Forum: Indonesia\'s Oil and Gas Methane Management Landscape — Energy Academy Indonesia (2026)',
      'Nature-based Solutions Capacity Building Series — EU & ASEAN Centre for Biodiversity (2026)',
      'Global Youth Climate Training Programme — University of Oxford & Global Youth Coalition (2025)',
      '[RE]POWER Energy Policy Bootcamp — New Energy Nexus Indonesia (2024)',
      'Collaborative Governance Bootcamp — Pijar Foundation (2024)',
      '9th ASEF Public Diplomacy Training: Climate Change Negotiations — Asia-Europe Foundation (2021)',
      'Freedom and Climate Change Workshop — Friedrich-Naumann-Stiftung (2021)'
    ],
    projects: [
      {"t":"Low-Emission Growth Policy & Incentives — Ministry of Finance","loc":"Jakarta, Indonesia","y":"2024","cat":"Policy, Regulation & ESG","role":"Government Consultant","org":"Tetra Tech","client":"Ministry of Finance of Indonesia","tech":["Energy policy","Infrastructure","Fiscal incentives"],"scope":["Assisted the Government of Indonesia in establishing an effective policy, regulatory and incentive environment for low-emission growth in the energy and infrastructure sectors.","Supported efforts to attract public and private sector investment in those sectors."]},
      {"t":"Sustainable Endowment Fund for Ecological Development in Papua","loc":"Papua, Indonesia","y":"2021","cat":"Policy, Regulation & ESG","role":"Consultant — Legal Analyst","org":"WRI Indonesia","tech":["Climate finance","Legal & regulatory analysis"],"scope":["Conducted legal and regulatory analysis of financial frameworks to design a sustainable endowment fund model that supports ecological development in Papua."]},
      {"t":"Legislative Support — Drafting & Review of Bills","loc":"Jakarta, Indonesia","y":"2024–Now","cat":"Policy, Regulation & ESG","role":"Expert Staff","org":"House of Representatives (DPR RI)","client":"Members of the legislature","tech":["Legislation","Policy analysis"],"scope":["Providing expertise, analysis and support to members of the legislature in crafting, reviewing and refining proposed bills."]},
      {"t":"Climate Funding & Cooperatives Research","loc":"Indonesia","y":"2023","cat":"Policy, Regulation & ESG","role":"Climate Policy Researcher","org":"Rumah Energi","tech":["Climate finance","Community energy"],"scope":["Synthesized insights on climate change, climate funding, and cooperatives in Indonesia."]}
    ],
    languages: ['Bahasa Indonesia (native)', 'English (professional)', 'Arabic'],
    tags: ['Energy Law', 'Climate Policy', 'Regulatory Frameworks', 'Climate Finance', 'Investment Policy', 'Legislative Drafting', 'International Law', 'ASEAN']
  },

  am: {
    name: 'Ario Maulana, B.Sc.', short: 'Ario Maulana',
    role: 'Energy Engineer & ESG Consultant (Scope 2/3)', card: 'Geothermal, O&G & ESG',
    img: 'avatar-ario.webp',
    deg: 'B.Sc. Petroleum Eng. (Summa Cum Laude) · PhD Candidate, KFUPM',
    specialist: 'Geothermal & Oil-and-Gas Energy Economics, ESG and GHG Accounting',
    headline: 'ESG & Sustainability Associate, DARA (Aurion Group) · Former Chevron, Pertamina, Ministry of Energy (ESDM) and UNDP · IPTC 2025 World Winner',
    links: [{ label: 'LinkedIn', url: 'https://linkedin.com/in/ariomaulana' }],
    credentials: [
      { k: 'B.Sc. Petroleum Engineering', v: 'Summa Cum Laude, GPA 3.96 · Valedictorian · Minor in Management' },
      { k: 'PhD Candidate', v: 'Oil & Gas Business (Operations & Supply Chain) · KFUPM, Saudi Arabia' },
      { k: 'IPTC 2025', v: '1st World Winner, Best Project Presentation, Kuala Lumpur' },
      { k: 'Exchange GPA 4.00', v: 'UT Austin & ITB — Petroleum and Geosciences Engineering' },
      { k: '2 Peer-Reviewed Papers', v: 'Blue hydrogen & supply-chain optimisation' }
    ],
    specializations: [
      { t: 'Geothermal Investment & Development', d: 'Pre-FS and FS feasibility analysis and partnership studies (BOT, JV, Joint Operation) for geothermal working areas at the Ministry of Energy (ESDM), plus machine-learning production optimisation on geothermal well data.', s: ['Pre-FS / FS', 'BOT · JV · JO schemes', 'Investment appraisal', 'Well performance ML'] },
      { t: 'ESG, GHG & Sustainability Analytics', d: 'GHG emissions analytics and ESG research for upstream oil & gas and petrochemical clients (DARA, Switzerland), and sustainability KPI and portfolio analysis across six Pertamina business units.', s: ['Scope 2/3 accounting', 'GHG analytics', 'ESG research', 'Sustainability KPIs'] },
      { t: 'Energy Transition Economics', d: 'Techno-economic and total-cost-of-ownership analysis for clean energy investments: hydrogen, CCS/CCUS, gas-to-power and geothermal, including published research on blue hydrogen for Indonesia\'s net-zero target.', s: ['Hydrogen & CCUS', 'TCO analysis', 'Techno-economics', 'Gas to power'] },
      { t: 'Upstream O&G Operations & Supply Chain', d: 'Drilling operations and supply-chain support at Chevron for a Permian Basin campaign: contractor assessment, AFE tracking and operational dashboards.', s: ['Drilling operations', 'Contractor evaluation', 'AFE budget tracking', 'Value stream mapping'] }
    ],
    summary: 'Energy engineer and ESG consultant with a petroleum engineering background (B.Sc., Summa Cum Laude, valedictorian) and a PhD candidacy in Oil & Gas Business at King Fahd University of Petroleum & Minerals. Professional exposure spans upstream drilling support at Chevron (Houston), sustainability strategy and business portfolio at Pertamina, geothermal investment and partnership analysis at the Ministry of Energy and Mineral Resources, ESG and GHG analytics at DARA (Switzerland), and regional clean-energy programme work with UNDP and FAO. Published researcher in energy-transition economics and supply-chain optimisation, and winner of the IPTC 2025 Best Project Presentation.',
    experience: [
      { role: 'ESG & Sustainability Associate (Management Trainee)', org: 'DARA – Digital Asset Rating Agency GmbH (Aurion Group), Zug, Switzerland', period: 'Dec 2025 – Present',
        points: ['ESG and sustainability research for international energy clients including upstream O&G and petrochemical companies', 'Built analytical dashboards for GHG emissions data and total-cost-of-ownership analyses for energy-transition investment decisions', 'Supply-chain and operational-efficiency analysis of client energy asset portfolios across European, Asian and Middle Eastern markets'] },
      { role: 'Drilling Engineer Support', org: 'Chevron Corporation, Houston, Texas', period: 'Oct 2025 – Dec 2025',
        points: ['Supported an active Permian Basin drilling engagement, building a consolidated operational dashboard that cut report preparation from 3 days to 1', 'Applied total-cost-of-ownership analysis to drilling service provider selection and analysed workflows for non-productive-time reduction', 'Coordinated equipment and service schedules across four external drilling contractors and tracked milestones against AFE budgets'] },
      { role: 'Program & Coordination, Secretariat Office', org: 'Ministry of Investment and Downstream Industry / BKPM', period: 'Jul 2025 – Aug 2025',
        points: ['Coordinated an industrial investment programme involving 40+ government and private-sector partners in the energy sector', 'Market research and analysis on Indonesia\'s industrial investment and energy-sector dynamics'] },
      { role: 'Sustainability Strategy & Business Portfolio', org: 'PT Pertamina (Persero)', period: 'Feb 2025 – Jun 2025',
        points: ['Analysed clean energy and business portfolio programmes including hydrogen, CCS/CCUS, gas-to-power and geothermal', 'Built sustainability KPI dashboards across six business units and total-cost-of-ownership analyses for clean energy investments'] },
      { role: 'Geothermal Investment & Partnership Analyst (Intern)', org: 'Ministry of Energy and Mineral Resources (ESDM)', period: 'Sep 2024 – Dec 2024',
        points: ['Pre-FS and FS feasibility analyses for geothermal working areas (WKP)', 'Partnership studies evaluating BOT, JV and Joint Operation schemes with multi-criteria decision frameworks', 'Analysed geothermal investment supply chains: equipment procurement, service-provider selection and operating cost structures'] },
      { role: 'Geothermal Development Specialist (MSIB Intern)', org: 'PT Anugerah Indonesia Lima (AILIMA)', period: 'Sep 2024 – Dec 2024',
        points: ['Applied machine learning to geothermal well performance data (JIWA system) to build predictive models for field capacity estimation and production optimisation, within a 7-member technical team'] },
      { role: 'Project Management Consultant, Climate Community Directory', org: 'UNDP Asia & the Pacific (with Microsoft)', period: 'Apr 2026 – May 2026',
        points: ['Regional clean-energy programme delivery and market research on clean energy supply chains and green finance across Asia-Pacific partners'] },
      { role: 'Asia-Pacific Lead Research Assistant, Integrated Policy Review', org: 'Food and Agriculture Organization (FAO)', period: 'Jan 2023 – Mar 2026',
        points: ['Led research for a UN-funded Integrated Policy Review on food systems, energy and rural development in Indonesia'] },
      { role: 'Founder & Director', org: 'Climate Chapter Indonesia', period: 'Dec 2020 – Present',
        points: ['Leads a 3,600+ member climate organisation across 15 regions, delivering 29+ programmes with 40+ government, corporate and international partners including UNDP and Microsoft'] }
    ],
    education: [
      { degree: 'PhD Candidate, Oil and Gas Business (Operations & Supply Chain Management)', inst: 'King Fahd University of Petroleum & Minerals, Saudi Arabia', period: 'Present' },
      { degree: 'B.Sc. Petroleum Engineering (Minor: Management) — Summa Cum Laude, GPA 3.96', inst: 'Balikpapan College of Oil and Gas Technology · Final project: economic analysis of the government drilling model to enhance geothermal development in WKP X, Maluku', period: '' },
      { degree: 'Fall Exchange, Petroleum and Geosciences Engineering — GPA 4.00', inst: 'University of Texas at Austin', period: 'Aug 2025 – Dec 2025' },
      { degree: 'Summer Exchange, FTTM — GPA 4.00', inst: 'Bandung Institute of Technology (ITB)', period: 'Feb 2024 – Jun 2024' },
      { degree: 'Leadership Program on Natural Resources Management and Policy (YSEALI)', inst: 'University of Hawai\'i at Mānoa', period: 'Apr 2025 – May 2025' }
    ],
    achievements: [
      '1st World Winner, Best Project Presentation — 17th International Petroleum Technology Conference (IPTC) 2025, Kuala Lumpur',
      'Student paper invitation, Stanford University Geothermal Workshop (2026)',
      'Climate Catalyst Fellow — UNDP & Microsoft, Asia-Pacific (2026); beVisioneers Fellow — Mercedes-Benz (2026)',
      'YSEALI Academic Fellow — U.S. Department of State, selected from 10,000+ applicants (2025)',
      'Most Outstanding Student, LLDIKTI Region XI; 1st place, East Kalimantan National Outstanding Student Competition (2025)',
      'Publication: "The Role of Blue Hydrogen in Supporting Indonesia\'s Net Zero Emissions Target and Electric Vehicle Development Policy" — ISEJOU (2025)',
      'Publication: "Total Cost of Ownership and Value Stream Mapping for Cost Optimization in Sunflower Supply Chains" — Countable (2025)',
      'UNFCCC observer and Indonesian youth delegate at COP28, COP29 and COP30; SPE Scholarship recipient'
    ],
    projects: [
      {"t":"Geothermal Working Area Investment & Partnership Study","loc":"Indonesia","y":"2024","cat":"Geothermal & O&G","role":"Geothermal Investment & Partnership Analyst (Intern)","org":"Ministry of Energy and Mineral Resources (ESDM)","client":"Government of Indonesia","tech":["Geothermal","Investment appraisal"],"scope":["Conducted Pre-FS and FS feasibility analyses for geothermal working areas (WKP) using quantitative investment appraisal.","Developed partnership studies evaluating BOT, JV and Joint Operation schemes with multi-criteria decision frameworks.","Analysed geothermal investment supply chains, including equipment procurement, service provider selection and operating cost structures."]},
      {"t":"Geothermal Well Performance — Machine-Learning Optimisation","loc":"Indonesia","y":"2024","cat":"Geothermal & O&G","role":"Geothermal Development Specialist (Intern)","org":"PT Anugerah Indonesia Lima","tech":["Geothermal","Machine learning"],"scope":["Applied machine-learning algorithms to geothermal well performance data from the JIWA data management system.","Developed predictive models for field capacity estimation and production optimisation with a 7-member technical team."]},
      {"t":"Permian Basin Drilling Campaign — Operations & Supply Chain Support","loc":"Texas, United States","y":"2025","cat":"Geothermal & O&G","role":"Drilling Engineer Support","org":"Chevron Corporation","client":"Chevron (upstream drilling)","tech":["Upstream oil & gas","Drilling operations"],"scope":["Built a consolidated operational dashboard that cut report preparation from 3 days to 1.","Applied total-cost-of-ownership analysis to drilling service provider selection and mapped workflows to identify NPT reduction.","Coordinated equipment and service schedules across four external drilling contractors, tracked against AFE budgets."]},
      {"t":"Clean Energy & Sustainability Portfolio Analysis","loc":"Jakarta, Indonesia","y":"2025","cat":"Policy, Regulation & ESG","role":"Sustainability Strategy & Business Portfolio","org":"PT Pertamina (Persero)","client":"Pertamina business units","tech":["Hydrogen","CCS/CCUS","Gas to power","Geothermal"],"scope":["Analysed clean energy and business portfolio programmes covering hydrogen, CCS/CCUS, gas-to-power and geothermal.","Built sustainability KPI dashboards across six business units and total-cost-of-ownership analyses for clean energy investment decisions."]},
      {"t":"ESG & GHG Analytics for International Energy Clients","loc":"Zug, Switzerland (remote)","y":"2025–Now","cat":"Policy, Regulation & ESG","role":"ESG & Sustainability Associate","org":"DARA (Aurion Group)","client":"Upstream O&G and petrochemical companies","tech":["ESG","GHG accounting"],"scope":["ESG and sustainability research for international energy-sector clients across Europe, Asia and the Middle East.","Developed analytical dashboards for GHG emissions data and TCO analyses for energy-transition investment decisions."]},
      {"t":"Integrated Policy Review — Food Systems, Energy & Rural Development","loc":"Indonesia","y":"2023–2026","cat":"Policy, Regulation & ESG","role":"Asia-Pacific Lead Research Assistant","org":"Food and Agriculture Organization (FAO)","client":"United Nations","tech":["Policy research","Energy & food systems"],"scope":["Led research for a UN-funded Integrated Policy Review on food systems, energy and rural development in Indonesia across five research domains."]}
    ],
    skills: [
      'Analysis: techno-economic feasibility, total cost of ownership (TCO), value stream mapping, multi-criteria decision-making, econometrics',
      'Tools: advanced Excel dashboards and modelling, Power BI (basic), Python (basic), JIWA geothermal data system',
      'Domains: upstream O&G and geothermal supply chains, hydrogen value chains, GHG accounting, government energy investment and partnerships'
    ],
    languages: ['English (IELTS 8.5, CEFR C2)', 'Bahasa Indonesia (fluent)', 'Malay (fluent)', 'Arabic, French, Spanish (intermediate)', 'Chinese (basic)'],
    tags: ['Geothermal', 'Petroleum Engineering', 'ESG (Scope 2/3)', 'GHG Accounting', 'Hydrogen & CCUS', 'Techno-Economics', 'Supply Chain', 'Energy Investment']
  }
};
window.EXPERT_ORDER = ['qh', 'da', 'fn', 'sd', 'rm', 'ca', 'ma', 'am'];
