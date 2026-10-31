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
    tags: ['Power Transformers', 'On-Load Tap Changers', 'Transformer Testing (FAT/SAT)', 'SFRA & HV Testing', 'Retrofit & Maintenance', 'After-Sales Service']
  },
  ca: {
    name: 'Chaizar Ali Fachrudien, S.T.', short: 'Chaizar Ali Fachrudien',
    role: 'Renewable Energy Technical Specialist', card: 'Solar PV, BESS & Hybrid',
    ini: 'CA',
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
      { t: "Cluster-Based Hybrid System Village Electrification", loc: "Indonesia", y: '2026', d: "Plant sizing, design and yield simulation; cluster-based hybrid model and sizing tool (independent)" },
      { t: "Ground-Mounted PV 65 MWp (PLN subsidiary)", loc: "East Java", y: '2026', d: "Sizing, design, yield simulation; EPC tender support" },
      { t: "Ground-Mounted PV 16 MWp (C&I)", loc: "Central Java", y: '2026', d: "Sizing, design, yield simulation; EPC tender support" },
      { t: "Floating PV 130 MWp + 10 MWh BESS", loc: "West Nusa Tenggara", y: '2026', d: "Sizing, design and yield simulation" },
      { t: "Floating PV 130 MWp", loc: "Lampung", y: '2026', d: "Sizing, design and yield simulation" },
      { t: "Floating PV 425 MWp", loc: "Lampung", y: '2026', d: "Sizing, design and yield simulation" },
      { t: "Hybrid PV 77 MWp + BESS 13 MWh (PLN)", loc: "Central Java", y: '2026', d: "Sizing, design, yield simulation and grid interconnection study; EPC tender support" },
      { t: "BESS Initial Integration Study", loc: "Jakarta", y: '2026', d: "Technical sizing and initial grid analysis for BESS on a 20 kV PLN distribution system (independent)" },
      { t: "3 Wind Farm Sites \u2014 750 MW", loc: "Java", y: '2025', d: "Grid assessment report for three potential sites" },
      { t: "Floating PV 348 MWp", loc: "Banten", y: '2025', d: "Sizing, design and yield simulation" },
      { t: "Floating PV 114 MWp", loc: "East Kalimantan", y: '2025', d: "Sizing, design and yield simulation" },
      { t: "Wind Farm 60 MW + BESS 13 MWh (PLN)", loc: "West Sulawesi", y: '2025', d: "Grid interconnection study with PLN; electrical design and BESS optimisation; EPC tender support" },
      { t: "Hybrid PV 12.8 MWp + BESS 15 MWh (PLN)", loc: "North Maluku", y: '2025', d: "Sizing, design, yield simulation and grid interconnection study; EPC tender support" },
      { t: "Hybrid PV 6.7 MWp + BESS 4.5 MWh (PLN)", loc: "Belitung", y: '2025', d: "Sizing, design, yield simulation and grid interconnection study; EPC tender support" },
      { t: "Hybrid Power Plant Performance Analysis", loc: "East Nusa Tenggara", y: '2025', d: "Operational analysis and input for future planning (independent)" },
      { t: "Hybrid System Model Consultation", loc: "Jakarta", y: '2025', d: "Technical support for hybrid power plant modelling (independent)" },
      { t: "Ground-Mounted PV 50 MWp", loc: "New Zealand", y: '2024', d: "Engineering support for development and grid connection" },
      { t: "Transformer Factory Audit", loc: "China & Indonesia", y: '2024', d: "Complete factory audit to CIGRE standards at two manufacturers" },
      { t: "1 GW Hybrid Plant Pre-Feasibility (Wind, Solar, BESS, Gas)", loc: "South Sulawesi", y: '2024', d: "Hybrid system model, plant and electrical system design (independent)" },
      { t: "Hybrid PV 85 MWp + BESS 350 MWh (PLN subsidiary)", loc: "East Java", y: '2024', d: "Sizing, design, yield simulation; EPC tender support" },
      { t: "Ground-Mounted PV 70 MWp (PLN subsidiary)", loc: "Central Java", y: '2024', d: "Sizing, design, yield simulation; EPC tender support" },
      { t: "Wind Farm 55 MW (PLN subsidiary)", loc: "Aceh", y: '2023', d: "Electrical design and optimisation; grid impact study; EPC tender support" },
      { t: "Hybrid PV 100 MWp + BESS 350 MWh + Genset (PLN)", loc: "Eastern Indonesia", y: '2023', d: "Sizing, design, yield simulation; EPC tender support" },
      { t: "Floating PV 135 MWp (PLN subsidiary)", loc: "East Java", y: '2023', d: "Sizing, design, yield simulation; EPC tender support" },
      { t: "Ground-Mounted PV 2 MWp (C&I)", loc: "West Java", y: '2022', d: "Sizing, design, yield simulation; tender support" },
      { t: "Rooftop PV 1 MWp (C&I)", loc: "Banten", y: '2022', d: "Sizing, design, yield simulation; tender support" },
      { t: "Floating PV 37 MWp (C&I)", loc: "East Java", y: '2021', d: "Sizing, design, yield simulation; tender support" },
      { t: "Ground-Mounted PV 20 MWp (C&I)", loc: "South Sulawesi", y: '2021', d: "Sizing, design, yield simulation; tender support" },
      { t: "Floating PV 60 MWp (PLN subsidiary)", loc: "West Java", y: '2020', d: "Sizing, design, yield simulation; EPC tender support" },
      { t: "Floating PV 125 MWp (PLN subsidiary)", loc: "West Sumatra", y: '2020', d: "Sizing, design, yield simulation; EPC tender support" },
      { t: "Mini Hydro 14 MW (PLN)", loc: "Aceh", y: '2020', d: "Grid interconnection study and electrical design" },
      { t: "Floating PV 16 MWp (C&I)", loc: "Banten", y: '2019', d: "Grid interconnection and feasibility study; sizing, design, yield simulation; EPC tender and PPA negotiation support" },
      { t: "Mini Hydro 4 MW (PLN)", loc: "Aceh", y: '2018', d: "Grid interconnection study and electrical design" },
      { t: "Wind Farm 66 MW (PLN)", loc: "Central Java", y: '2018', d: "Grid interconnection study with PLN; electrical design and optimisation" },
      { t: "Rooftop PV 100 kWp (C&I)", loc: "Banten", y: '2018', d: "Grid interconnection assessment, feasibility study and plant design" },
      { t: "Hybrid PV 1.2 MWp + BESS 2.1 MWh", loc: "East Kalimantan", y: '2017', d: "Transformer factory acceptance test (FAT); plant operation support" },
      { t: "Mini Hydro 4 MW (PLN)", loc: "North Sumatra", y: '2017', d: "Grid interconnection study and electrical design" }
    ],
    skills: [
      'Engineering software: PVsyst, HOMER, PVDesign, Helioscope, ETAP, DIgSILENT',
      'Design & productivity: QGIS, Google Earth, AutoCAD, CorelDRAW, Microsoft Office'
    ],
    languages: ['Bahasa Indonesia (native)', 'English (professional working proficiency)'],
    tags: ['Solar PV', 'Floating PV', 'BESS', 'Hybrid Systems', 'Wind', 'Mini Hydro', 'Grid Studies', 'PVsyst', 'HOMER', 'DIgSILENT']
  }
};
window.EXPERT_ORDER = ['qh', 'da', 'fn', 'sd', 'rm', 'ca'];
