/**
 * Hub data for all 9 Delta Air Lines hub pages.
 * Two design variants: 'full' (domestic hubs) and 'compact' (smaller hubs).
 */

export const hubOrder = ['atl', 'lga', 'jfk', 'bos', 'dtw', 'msp', 'slc', 'lax', 'sea'];

export const hubNavLabels = {
  atl: 'ATL · Atlanta',
  lga: 'LGA · New York LaGuardia',
  jfk: 'JFK · New York JFK',
  bos: 'BOS · Boston',
  dtw: 'DTW · Detroit',
  msp: 'MSP · Minneapolis',
  slc: 'SLC · Salt Lake City',
  lax: 'LAX · Los Angeles',
  sea: 'SEA · Seattle',
};

export const hubs = {

// ─── ATL ────────────────────────────────────────────────────────────────
atl: {
  iata: 'ATL',
  variant: 'full',
  title: 'Delta Air Lines ATL Hub Status — Atlanta Hartsfield-Jackson Delays, On-Time Performance & Flight Tracker',
  description: 'Live Delta Air Lines status at Atlanta Hartsfield-Jackson (ATL). Real-time delays, cancellations, on-time performance, and departure schedules. Delta\'s largest hub and global headquarters — updated every 30 seconds.',
  keywords: 'Delta Air Lines ATL delays, Delta Atlanta hub status, Delta Air Lines ATL on-time, Delta ATL cancellations today, Delta Air Lines Atlanta delays, ATL flight status, Delta hub Atlanta, Delta Air Lines Atlanta departures',
  ogTitle: 'Delta Air Lines ATL Hub — Live Atlanta Hartsfield-Jackson Status',
  ogDescription: 'Real-time Delta Air Lines operations at Atlanta Hartsfield-Jackson. Delays, cancellations, on-time %, and schedules.',
  ogImageAlt: 'Widget Watch — Delta Air Lines ATL Hub Status',
  twitterTitle: 'Delta Air Lines ATL Hub — Live Atlanta Hartsfield-Jackson Status',
  twitterDescription: 'Real-time delays, cancellations, on-time performance at Delta\'s global headquarters and largest hub. Updated every 30 seconds.',
  breadcrumbName: 'ATL — Atlanta Hartsfield-Jackson',
  faqSchema: [
    {
      question: 'Is Delta Air Lines delayed at ATL today?',
      answer: 'Widget Watch tracks every Delta Air Lines flight at Atlanta Hartsfield-Jackson in real time. Check the live status panel above for current delay counts, cancellations, and on-time performance. The dashboard updates every 30 seconds with data from Flightradar24 and FAA sources.',
    },
    {
      question: 'What terminal is Delta Air Lines at Atlanta?',
      answer: 'Delta Air Lines operates from Concourses A, B, C, D, and T (domestic shuttle) at Hartsfield-Jackson Atlanta International Airport. International flights depart from the Maynard H. Jackson Jr. International Terminal (Terminal F). Delta Sky Club lounges are located throughout all concourses. The underground Plane Train connects all terminals.',
    },
    {
      question: 'How many Delta flights depart from ATL daily?',
      answer: 'Delta Air Lines operates approximately 1,000 daily departures from Atlanta Hartsfield-Jackson — more than any other carrier at any other hub. ATL connects to over 250 domestic and international destinations, making it the centerpiece of Delta\'s global network.',
    },
    {
      question: 'What causes the most delays at ATL for Delta?',
      answer: 'Atlanta\'s location in the Southeast makes it vulnerable to severe summer thunderstorms and convective weather that can trigger ground stops affecting thousands of passengers. Winter ice storms — while rare — can paralyze the airport for days. ATL\'s hub-and-spoke dominance means a ground stop here cascades across Delta\'s entire network more severely than at any other hub.',
    },
  ],
  airportSchema: {
    name: 'Hartsfield-Jackson Atlanta International Airport',
    iataCode: 'ATL',
    addressLocality: 'Atlanta',
    addressRegion: 'GA',
    addressCountry: 'US',
    latitude: 33.6407,
    longitude: -84.4277,
    url: 'https://www.atl.com',
  },
  headerTitle: 'Delta Air Lines at <span class="iata">ATL</span> — Atlanta Hartsfield-Jackson',
  subtitle: 'Delta\'s global headquarters & largest hub · ~1,000 daily departures · Concourses A–D · International Terminal F',
  jumpNav: [
    { href: '#overview', label: 'Overview' },
    { href: '#delay-patterns', label: 'Delay Patterns' },
    { href: '#construction', label: 'Construction' },
    { href: '#faq', label: 'FAQ' },
    { href: '#all-hubs', label: 'All Hubs' },
  ],
  contentHtml: `
  <!-- Dive Deep -->
  <div class="section">
    <h2>Dive Deep at Widget Watch</h2>
    <p><strong>Widget Watch</strong> is the only real-time operations dashboard built specifically for Delta Air Lines passengers. Live flight tracking, delay alerts, and IRROPS monitoring, updated in real-time.</p>
    <p>This page gives you the overview — but the real action is on the dashboard. Track every Delta flight at ATL in real time, set up flight watch alerts, check equipment swaps, and monitor weather radar overlaid on the live map.</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px">
      <a class="cta" href="/?hub=atl" style="margin:0">🗺️ Live ATL Map</a>
      <a class="cta" href="/?tab=schedule&hub=atl" style="margin:0">📋 ATL Schedules</a>
      <a class="cta" href="/?tab=irrops&hub=atl" style="margin:0">⚠️ IRROPS Monitor</a>
    </div>
  </div>

  <!-- Hub Overview -->
  <div class="section">
    <h2 id="overview">Hub Overview</h2>
    <p>Hartsfield-Jackson Atlanta International Airport is <strong>Delta Air Lines' global headquarters and largest hub</strong> — the busiest airport in the world by passenger count. With approximately 1,000 daily departures, ATL connects to over 250 destinations across every continent Delta serves.</p>
    <p>Delta operates from <strong>Concourses A, B, C, D</strong> (domestic) and the <strong>Maynard H. Jackson Jr. International Terminal (Terminal F)</strong>, linked by the underground Plane Train. Delta Sky Club lounges are located throughout all concourses, including a flagship Delta One lounge in Concourse F for premium international travelers. Delta has been the dominant carrier at ATL since acquiring Eastern Air Lines' assets in 1991.</p>

    <div class="highlight-box">
      <strong>ATL by the numbers:</strong> ~1,000 daily departures · 250+ destinations · 5 concourses (A–D, F) · World's busiest airport · Delta global HQ since 1997 · 5 parallel runways
    </div>

    <div class="highlight-box" style="border-left-color:var(--dl-yellow)">
      <span id="construction"></span><strong>⚠️ Construction Alert:</strong> The <a href="https://www.atl.com/about-atl/atl-development/" target="_blank" rel="noopener noreferrer">ATL Next</a> transformation project is underway, including a new consolidated rental car facility, updated ground transportation center, and concourse modernization projects. Expect construction impacts on ground transportation and terminal access through 2028.
    </div>

    <h3>Key Routes from ATL</h3>
    <ul>
      <li><strong>Domestic:</strong> JFK, LGA, BOS, DTW, MSP, SLC, LAX, SEA — all Delta hub connections plus extensive Southeast/nationwide network</li>
      <li><strong>Transatlantic:</strong> LHR, FRA, CDG, AMS, MUC, FCO, ZRH, LIS, MAD, BCN, DUB, CPH, ARN — Delta's largest transatlantic hub</li>
      <li><strong>Latin America:</strong> CUN, MEX, GDL, BOG, LIM, GRU, EZE, SCL, PTY, SJO — extensive Central and South America coverage</li>
      <li><strong>Africa:</strong> ADD, ACC, JNB — direct widebody service to sub-Saharan Africa</li>
    </ul>
  </div>

  <!-- Delay Patterns -->
  <div class="section">
    <h2 id="delay-patterns">Delay Patterns at ATL</h2>
    <p>Atlanta's geography and ATL's status as the world's busiest hub create a unique delay environment. Disruptions here have outsized effects on Delta's entire network:</p>

    <h3>Summer (Jun–Sep)</h3>
    <p>Afternoon thunderstorms are ATL's most frequent delay driver. Convective weather builds rapidly over Georgia, producing lightning, heavy rain, and occasional hail. Ground stops issued at ATL can halt departures from dozens of other cities simultaneously. Lines of departing aircraft during recovery periods can stretch for hours.</p>

    <h3>Winter (Dec–Feb)</h3>
    <p>Atlanta is uniquely vulnerable to ice storms. A thin layer of ice on runways and taxiways can shut down ATL for 12–24+ hours — the airport has limited de-icing equipment relative to northern hubs. Even minor winter weather events in the Southeast can cause major disruptions that ripple across the entire Delta network.</p>

    <h3>Year-Round: Hub Congestion</h3>
    <p>With ~1,000 daily departures, ATL operates with minimal buffer. Any delay cascades quickly. The airport's five parallel runway system provides capacity, but the sheer volume of aircraft means even short weather events create long recovery tails.</p>

    <div class="highlight-box">
      <strong>Tip:</strong> Early morning departures (before 9 AM) consistently have the best on-time performance at ATL. Avoid afternoon connections in summer — thunderstorm season turns late afternoon connecting windows into significant risk.
    </div>
  </div>

  <!-- FAQ (visible, matches schema) -->
  <div class="section">
    <h2 id="faq">Frequently Asked Questions</h2>

    <h3>Is Delta Air Lines delayed at ATL today?</h3>
    <p>Check the live status panel at the top of this page for current on-time performance, delay counts, and cancellations. For flight-level detail, <a href="/?hub=atl">open ATL on Widget Watch</a> to see every flight in real time.</p>

    <h3>What terminal is Delta at Atlanta?</h3>
    <p>Delta mainline domestic flights operate from Concourses A, B, C, and D. International flights depart from the Maynard H. Jackson Jr. International Terminal (Concourse F). The underground Plane Train connects all concourses. Delta Sky Club lounges are located in all concourses.</p>

    <h3>How many Delta flights depart from ATL daily?</h3>
    <p>Approximately 1,000 daily departures — more than any other airline at any other hub in the world. ATL is the undisputed center of Delta's global network.</p>

  </div>`,
},

// ─── LGA ────────────────────────────────────────────────────────────────
lga: {
  iata: 'LGA',
  variant: 'full',
  title: 'Delta Air Lines LGA Hub Status — New York LaGuardia Delays, On-Time Performance & Flight Tracker',
  description: 'Live Delta Air Lines status at New York LaGuardia (LGA). Real-time delays, cancellations, on-time performance, and departure schedules. Delta\'s primary New York domestic hub — updated every 30 seconds.',
  keywords: 'Delta Air Lines LGA delays, Delta LaGuardia hub status, Delta Air Lines LGA on-time, Delta LGA cancellations today, Delta Air Lines LaGuardia delays, LGA flight status, Delta hub LaGuardia, Delta Air Lines LGA departures',
  ogTitle: 'Delta Air Lines LGA Hub — Live New York LaGuardia Status',
  ogDescription: 'Real-time Delta Air Lines operations at New York LaGuardia. Delays, cancellations, on-time %, and schedules.',
  ogImageAlt: 'Widget Watch — Delta Air Lines LGA Hub Status',
  twitterTitle: 'Delta Air Lines LGA Hub — Live New York LaGuardia Status',
  twitterDescription: 'Real-time delays, cancellations, on-time performance at Delta\'s New York domestic hub. Updated every 30 seconds.',
  breadcrumbName: 'LGA — New York LaGuardia',
  faqSchema: [
    {
      question: 'Is Delta Air Lines delayed at LGA today?',
      answer: 'Widget Watch tracks every Delta Air Lines flight at New York LaGuardia in real time. Check the live status panel above for current delay counts, cancellations, and on-time performance. The dashboard updates every 30 seconds with data from Flightradar24 and FAA sources.',
    },
    {
      question: 'What terminal is Delta Air Lines at LaGuardia?',
      answer: 'Delta Air Lines operates from the new Terminal C and Terminal D at LaGuardia Airport. The brand-new Terminal C opened in phases starting 2022, replacing the old Delta Terminal C. Delta Sky Club lounges are located in both terminals. The new terminals feature a unified layout with improved passenger flow.',
    },
    {
      question: 'How many Delta flights depart from LGA daily?',
      answer: 'Delta Air Lines operates approximately 350 daily departures from LaGuardia, making it the dominant carrier at LGA. The airport serves primarily domestic routes with shuttle service to Boston and Washington D.C.',
    },
    {
      question: 'What causes the most delays at LGA for Delta?',
      answer: 'LaGuardia is chronically one of the most delay-prone airports in the United States. Its shared New York TRACON airspace with JFK and Newark (EWR) creates airspace congestion even in clear weather. Two crossing runways limit capacity, and any weather — thunderstorms, fog, wind, or snow — immediately triggers ground delay programs. LGA delays ripple across Delta\'s entire East Coast network.',
    },
  ],
  airportSchema: {
    name: 'LaGuardia Airport',
    iataCode: 'LGA',
    addressLocality: 'Queens',
    addressRegion: 'NY',
    addressCountry: 'US',
    latitude: 40.7769,
    longitude: -73.8740,
    url: 'https://www.laguardiaairport.com',
  },
  headerTitle: 'Delta Air Lines at <span class="iata">LGA</span> — New York LaGuardia',
  subtitle: 'Delta\'s New York domestic hub · ~350 daily departures · Terminals C & D (new)',
  jumpNav: [
    { href: '#overview', label: 'Overview' },
    { href: '#delay-patterns', label: 'Delay Patterns' },
    { href: '#construction', label: 'Construction' },
    { href: '#faq', label: 'FAQ' },
    { href: '#all-hubs', label: 'All Hubs' },
  ],
  contentHtml: `
  <!-- Dive Deep -->
  <div class="section">
    <h2>Dive Deep at Widget Watch</h2>
    <p><strong>Widget Watch</strong> is the only real-time operations dashboard built specifically for Delta Air Lines passengers. Live flight tracking, delay alerts, and IRROPS monitoring, updated in real-time.</p>
    <p>This page gives you the overview — but the real action is on the dashboard. Track every Delta flight at LGA in real time, set up flight watch alerts, check equipment swaps, and monitor weather radar overlaid on the live map.</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px">
      <a class="cta" href="/?hub=lga" style="margin:0">🗺️ Live LGA Map</a>
      <a class="cta" href="/?tab=schedule&hub=lga" style="margin:0">📋 LGA Schedules</a>
      <a class="cta" href="/?tab=irrops&hub=lga" style="margin:0">⚠️ IRROPS Monitor</a>
    </div>
  </div>

  <!-- Hub Overview -->
  <div class="section">
    <h2 id="overview">Hub Overview</h2>
    <p>LaGuardia Airport is <strong>Delta Air Lines' primary New York domestic hub</strong> — the airline's base for shuttle service and high-frequency domestic routes from the New York metro area. With approximately 350 daily departures, LGA serves as the domestic face of Delta's massive New York presence.</p>
    <p>Delta operates from the new <strong>Terminal C</strong> and <strong>Terminal D</strong>, part of the $8 billion LaGuardia Airport Redevelopment Program. The new terminals, opened in phases since 2022, replaced the aging Delta terminal with a modern unified facility. Delta Sky Club lounges are located in both terminals. The Delta Shuttle (to Boston and Washington D.C.) operates from LGA with high-frequency service.</p>

    <div class="highlight-box">
      <strong>LGA by the numbers:</strong> ~350 daily departures · Terminals C & D (new, 2022+) · Delta's #1 carrier by share · Delta Shuttle hub · 2 runways (crossing configuration) · 8 miles from Midtown Manhattan
    </div>

    <div class="highlight-box" style="border-left-color:var(--dl-green)">
      <span id="construction"></span><strong>✅ Redevelopment Update:</strong> The new <a href="https://www.laguardiaairport.com/en/redevelopment" target="_blank" rel="noopener noreferrer">LaGuardia Terminal C</a> is substantially complete, with modern gates, updated concessions, and improved amenities. Delta Sky Club in Terminal C opened 2023. The new Delta terminal is a vast improvement over the former facility.
    </div>

    <h3>Key Routes from LGA</h3>
    <ul>
      <li><strong>Shuttle Service:</strong> BOS (Boston), DCA (Washington Reagan) — multiple daily frequencies, walk-up fares</li>
      <li><strong>Domestic Hubs:</strong> ATL, JFK, BOS, DTW, MSP, SLC, LAX, SEA — all Delta hub connections</li>
      <li><strong>High-Frequency Domestic:</strong> ORD, CLT, MIA, FLL, MCO, TPA, BNA, RDU — extensive Northeast feeder network</li>
    </ul>
  </div>

  <!-- Delay Patterns -->
  <div class="section">
    <h2 id="delay-patterns">Delay Patterns at LGA</h2>
    <p>LaGuardia consistently ranks among the most delay-prone airports in the United States. Its constrained geometry and shared airspace create persistent challenges:</p>

    <h3>Airspace Congestion (Year-Round)</h3>
    <p>LGA shares the New York TRACON with JFK and Newark (EWR). Even in clear weather, arrival rates are constrained by airspace complexity. Ground delay programs (GDPs) are a near-daily occurrence during peak hours. Weather at any of the three NYC-area airports affects all three simultaneously.</p>

    <h3>Summer (Jun–Aug)</h3>
    <p>Thunderstorms along the Eastern Seaboard cascade through all three New York airports simultaneously. LGA's two crossing runways cannot maintain throughput in low-visibility or wind-shear conditions. The combination of peak travel demand and weather creates the worst delays of the year.</p>

    <h3>Winter (Dec–Feb)</h3>
    <p>Nor'easters, ice, and snow reduce runway capacity significantly. De-icing operations extend departure sequences. LGA's urban location means ground transportation disruptions compound airside delays — if you miss your flight, getting to an alternate airport is difficult.</p>

    <div class="highlight-box">
      <strong>Tip:</strong> The earliest morning departures from LGA (before 8 AM) have the best on-time performance. If using the Delta Shuttle, the first flight of the day is reliably on time. Afternoon and evening flights carry significant delay risk.
    </div>
  </div>

  <!-- FAQ (visible, matches schema) -->
  <div class="section">
    <h2 id="faq">Frequently Asked Questions</h2>

    <h3>Is Delta Air Lines delayed at LGA today?</h3>
    <p>Check the live status panel at the top of this page for current on-time performance, delay counts, and cancellations. For flight-level detail, <a href="/?hub=lga">open LGA on Widget Watch</a> to see every flight in real time.</p>

    <h3>What terminal is Delta at LaGuardia?</h3>
    <p>Delta operates from Terminals C and D, both part of the new LaGuardia redevelopment (completed 2022–2023). Delta Sky Club lounges are in Terminal C. The new terminals are connected and vastly improved from the former facilities.</p>

    <h3>How many Delta flights depart from LGA daily?</h3>
    <p>Approximately 350 daily departures. Delta is the dominant carrier at LGA, operating the high-frequency shuttle and extensive domestic network from New York.</p>
  </div>`,
},

// ─── JFK ────────────────────────────────────────────────────────────────
jfk: {
  iata: 'JFK',
  variant: 'full',
  title: 'Delta Air Lines JFK Hub Status — New York JFK Delays, On-Time Performance & Flight Tracker',
  description: 'Live Delta Air Lines status at John F. Kennedy International (JFK). Real-time delays, cancellations, on-time performance, and departure schedules. Delta\'s New York international gateway — updated every 30 seconds.',
  keywords: 'Delta Air Lines JFK delays, Delta JFK hub status, Delta Air Lines JFK on-time, Delta JFK cancellations today, Delta Air Lines JFK delays, JFK flight status, Delta hub JFK, Delta Air Lines JFK departures',
  ogTitle: 'Delta Air Lines JFK Hub — Live New York JFK Status',
  ogDescription: 'Real-time Delta Air Lines operations at New York JFK. Delays, cancellations, on-time %, and schedules.',
  ogImageAlt: 'Widget Watch — Delta Air Lines JFK Hub Status',
  twitterTitle: 'Delta Air Lines JFK Hub — Live New York JFK Status',
  twitterDescription: 'Real-time delays, cancellations, on-time performance at Delta\'s New York international gateway. Updated every 30 seconds.',
  breadcrumbName: 'JFK — New York JFK',
  faqSchema: [
    {
      question: 'Is Delta Air Lines delayed at JFK today?',
      answer: 'Widget Watch tracks every Delta Air Lines flight at JFK International in real time. Check the live status panel above for current delay counts, cancellations, and on-time performance. The dashboard updates every 30 seconds with data from Flightradar24 and FAA sources.',
    },
    {
      question: 'What terminal is Delta Air Lines at JFK?',
      answer: 'Delta Air Lines operates from Terminal 4 at John F. Kennedy International Airport. Terminal 4 is Delta\'s international hub at JFK, with Delta Sky Club lounges including a flagship Delta One lounge for premium passengers. Delta also uses Terminal 2 for select domestic flights.',
    },
    {
      question: 'How many Delta flights depart from JFK daily?',
      answer: 'Delta Air Lines operates approximately 200 daily departures from JFK, making it Delta\'s primary international gateway in New York. JFK handles the majority of Delta\'s transatlantic, transpacific, and Latin American flights from the New York metro area.',
    },
    {
      question: 'What causes the most delays at JFK for Delta?',
      answer: 'JFK shares the New York TRACON with LaGuardia and Newark, creating persistent airspace congestion. Summer thunderstorms trigger simultaneous ground stops at all three NYC-area airports. Runway configuration changes for wind shifts reduce throughput. International arrival banks create periodic congestion peaks throughout the day.',
    },
  ],
  airportSchema: {
    name: 'John F. Kennedy International Airport',
    iataCode: 'JFK',
    addressLocality: 'Queens',
    addressRegion: 'NY',
    addressCountry: 'US',
    latitude: 40.6413,
    longitude: -73.7781,
    url: 'https://www.jfkairport.com',
  },
  headerTitle: 'Delta Air Lines at <span class="iata">JFK</span> — John F. Kennedy International',
  subtitle: 'Delta\'s New York international gateway · ~200 daily departures · Terminal 4',
  jumpNav: [
    { href: '#overview', label: 'Overview' },
    { href: '#delay-patterns', label: 'Delay Patterns' },
    { href: '#construction', label: 'Construction' },
    { href: '#faq', label: 'FAQ' },
    { href: '#all-hubs', label: 'All Hubs' },
  ],
  contentHtml: `
  <!-- Dive Deep -->
  <div class="section">
    <h2>Dive Deep at Widget Watch</h2>
    <p><strong>Widget Watch</strong> is the only real-time operations dashboard built specifically for Delta Air Lines passengers. Live flight tracking, delay alerts, and IRROPS monitoring, updated in real-time.</p>
    <p>This page gives you the overview — but the real action is on the dashboard. Track every Delta flight at JFK in real time, set up flight watch alerts, check equipment swaps, and monitor weather radar overlaid on the live map.</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px">
      <a class="cta" href="/?hub=jfk" style="margin:0">🗺️ Live JFK Map</a>
      <a class="cta" href="/?tab=schedule&hub=jfk" style="margin:0">📋 JFK Schedules</a>
      <a class="cta" href="/?tab=irrops&hub=jfk" style="margin:0">⚠️ IRROPS Monitor</a>
    </div>
  </div>

  <!-- Hub Overview -->
  <div class="section">
    <h2 id="overview">Hub Overview</h2>
    <p>John F. Kennedy International Airport is <strong>Delta Air Lines' primary international gateway in New York</strong> and a major hub for transatlantic, transpacific, and Latin American service. With approximately 200 daily departures, JFK is where Delta deploys its most premium widebody aircraft.</p>
    <p>Delta operates primarily from <strong>Terminal 4</strong>, the airport's main international terminal, with Delta Sky Club lounges and a flagship <strong>Delta One lounge</strong> for premium international travelers. Select domestic flights use Terminal 2. Terminal 4 is JFK's largest terminal, handling a significant share of all international arrivals and departures.</p>

    <div class="highlight-box">
      <strong>JFK by the numbers:</strong> ~200 daily departures · Terminal 4 (international) · Delta's primary transatlantic gateway in NY · JFK AirTrain connects to NYC subway · 4 runways · 15 miles from Midtown
    </div>

    <div class="highlight-box" style="border-left-color:var(--dl-yellow)">
      <span id="construction"></span><strong>⚠️ Construction Alert:</strong> The <a href="https://www.jfkairport.com/jfk-forward" target="_blank" rel="noopener noreferrer">JFK Forward</a> redevelopment project is transforming JFK with a new Terminal 6 (set to open in phases) and upgrades to Terminals 1, 4, and 8. Expect construction impacts on ground transportation and some terminal areas through 2030.
    </div>

    <h3>Key Routes from JFK</h3>
    <ul>
      <li><strong>Domestic Hubs:</strong> ATL, LGA, BOS, DTW, MSP, SLC, LAX, SEA</li>
      <li><strong>Transatlantic:</strong> LHR, CDG, FRA, AMS, ZRH, FCO, MAD, BCN, LIS, DUB, EDI, TLV, ADD, ACC, JNB, CAI — one of Delta's most important transatlantic gateways</li>
      <li><strong>Latin America:</strong> BOG, GRU, EZE, LIM, SCL, CUN, SJU — premium widebody service</li>
      <li><strong>Long-haul Pacific:</strong> NRT, HND, ICN, DEL, BOM, SIN — select widebody routes</li>
    </ul>
  </div>

  <!-- Delay Patterns -->
  <div class="section">
    <h2 id="delay-patterns">Delay Patterns at JFK</h2>
    <p>JFK shares New York's complex airspace environment and faces unique challenges from international arrival banking:</p>

    <h3>Airspace Congestion (Year-Round)</h3>
    <p>JFK's airspace is shared with LaGuardia and Newark across the New York TRACON — one of the busiest in the world. Even in clear weather, arrival rates are managed carefully. International banks create periodic congestion peaks, particularly in the morning and early afternoon as overnight transatlantic flights arrive simultaneously.</p>

    <h3>Summer (Jun–Aug)</h3>
    <p>Summer thunderstorms along the Eastern Seaboard trigger ground stops at all three NYC-area airports simultaneously. JFK's longer runways can handle more aircraft types in weather, but shared airspace congestion means delays are still common. International connections are particularly vulnerable to weather-driven cascades.</p>

    <h3>Winter (Dec–Feb)</h3>
    <p>Nor'easters bring snow, ice, and wind shifts that require runway configuration changes. International flights face additional complexity: inbound international passengers who miss connections may face significant rebooking challenges. Allow extra connection time in winter.</p>

    <div class="highlight-box">
      <strong>Tip:</strong> Early morning departures (before 9 AM) have the best on-time performance at JFK. International arrivals in the morning can create congestion — if connecting through JFK, build in at least 90 minutes for domestic connections and 2+ hours for international.
    </div>
  </div>

  <!-- FAQ (visible, matches schema) -->
  <div class="section">
    <h2 id="faq">Frequently Asked Questions</h2>

    <h3>Is Delta Air Lines delayed at JFK today?</h3>
    <p>Check the live status panel at the top of this page for current on-time performance, delay counts, and cancellations. For flight-level detail, <a href="/?hub=jfk">open JFK on Widget Watch</a> to see every flight in real time.</p>

    <h3>What terminal is Delta at JFK?</h3>
    <p>Delta operates primarily from Terminal 4, JFK's main international terminal. Delta Sky Club and Delta One lounge are in Terminal 4. Select domestic flights use Terminal 2. JFK AirTrain connects all terminals.</p>

    <h3>How many Delta flights depart from JFK daily?</h3>
    <p>Approximately 200 daily departures. JFK is Delta's primary international gateway in New York, handling most transatlantic and long-haul routes.</p>
  </div>`,
},

// ─── BOS ────────────────────────────────────────────────────────────────
bos: {
  iata: 'BOS',
  variant: 'full',
  title: 'Delta Air Lines BOS Hub Status — Boston Logan Delays, On-Time Performance & Flight Tracker',
  description: 'Live Delta Air Lines status at Boston Logan International (BOS). Real-time delays, cancellations, on-time performance, and departure schedules. Delta\'s New England hub — updated every 30 seconds.',
  keywords: 'Delta Air Lines BOS delays, Delta Boston hub status, Delta Air Lines BOS on-time, Delta BOS cancellations today, Delta Air Lines Boston delays, BOS flight status, Delta hub Boston, Delta Air Lines Boston departures',
  ogTitle: 'Delta Air Lines BOS Hub — Live Boston Logan Status',
  ogDescription: 'Real-time Delta Air Lines operations at Boston Logan International. Delays, cancellations, on-time %, and schedules.',
  ogImageAlt: 'Widget Watch — Delta Air Lines BOS Hub Status',
  twitterTitle: 'Delta Air Lines BOS Hub — Live Boston Logan Status',
  twitterDescription: 'Real-time delays, cancellations, on-time performance at Delta\'s New England hub. Updated every 30 seconds.',
  breadcrumbName: 'BOS — Boston Logan',
  faqSchema: [
    {
      question: 'Is Delta Air Lines delayed at BOS today?',
      answer: 'Widget Watch tracks every Delta Air Lines flight at Boston Logan International in real time. Check the live status panel above for current delay counts, cancellations, and on-time performance. The dashboard updates every 30 seconds with data from Flightradar24 and FAA sources.',
    },
    {
      question: 'What terminal is Delta Air Lines at Boston Logan?',
      answer: 'Delta Air Lines operates from Terminal A at Boston Logan International Airport. Delta Sky Club lounges are located in Terminal A. Delta Connection regional flights also depart from Terminal A. The Silver Line bus provides direct service between terminals and South Station.',
    },
    {
      question: 'How many Delta flights depart from BOS daily?',
      answer: 'Delta Air Lines operates approximately 200 daily departures from Boston Logan, making it Delta\'s primary New England hub. BOS connects to Delta hubs, key domestic markets, and select transatlantic destinations including London and Amsterdam.',
    },
    {
      question: 'What causes the most delays at BOS for Delta?',
      answer: 'Boston Logan\'s coastal location makes it susceptible to nor\'easters, winter storms, and fog from Massachusetts Bay. Runway 33L/15R is frequently affected by crosswinds that force single-runway operations, reducing capacity. Summer thunderstorms moving up the Eastern Seaboard also cause delays, and New York TRACON ground delay programs frequently affect northbound BOS departures.',
    },
  ],
  airportSchema: {
    name: 'Boston Logan International Airport',
    iataCode: 'BOS',
    addressLocality: 'Boston',
    addressRegion: 'MA',
    addressCountry: 'US',
    latitude: 3.3656,
    longitude: -71.0096,
    url: 'https://www.massport.com/logan-airport/',
  },
  headerTitle: 'Delta Air Lines at <span class="iata">BOS</span> — Boston Logan International',
  subtitle: 'Delta\'s New England hub · ~200 daily departures · Terminal A',
  jumpNav: [
    { href: '#overview', label: 'Overview' },
    { href: '#delay-patterns', label: 'Delay Patterns' },
    { href: '#construction', label: 'Construction' },
    { href: '#faq', label: 'FAQ' },
    { href: '#all-hubs', label: 'All Hubs' },
  ],
  contentHtml: `
  <!-- Dive Deep -->
  <div class="section">
    <h2>Dive Deep at Widget Watch</h2>
    <p><strong>Widget Watch</strong> is the only real-time operations dashboard built specifically for Delta Air Lines passengers. Live flight tracking, delay alerts, and IRROPS monitoring, updated in real-time.</p>
    <p>This page gives you the overview — but the real action is on the dashboard. Track every Delta flight at BOS in real time, set up flight watch alerts, check equipment swaps, and monitor weather radar overlaid on the live map.</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px">
      <a class="cta" href="/?hub=bos" style="margin:0">🗺️ Live BOS Map</a>
      <a class="cta" href="/?tab=schedule&hub=bos" style="margin:0">📋 BOS Schedules</a>
      <a class="cta" href="/?tab=irrops&hub=bos" style="margin:0">⚠️ IRROPS Monitor</a>
    </div>
  </div>

  <!-- Hub Overview -->
  <div class="section">
    <h2 id="overview">Hub Overview</h2>
    <p>Boston Logan International Airport is <strong>Delta Air Lines' New England hub</strong> and a key node in the Northeast corridor network. With approximately 200 daily departures, BOS connects New England to Delta's domestic hubs and select international destinations.</p>
    <p>Delta operates from <strong>Terminal A</strong>, with Delta Sky Club lounges serving business and premium travelers. The airport sits on Boston Harbor, 3 miles from downtown via the Silver Line or Logan Express. Delta is one of BOS's largest carriers, offering extensive connections to ATL, JFK, LGA, DTW, MSP, SLC, LAX, and SEA, as well as direct service to London Heathrow and Amsterdam.</p>

    <div class="highlight-box">
      <strong>BOS by the numbers:</strong> ~200 daily departures · Terminal A · 3 miles from downtown Boston · Directly served by Silver Line bus rapid transit · Key Northeast corridor hub · Transatlantic service to LHR, AMS
    </div>

    <div class="highlight-box" style="border-left-color:var(--dl-yellow)">
      <span id="construction"></span><strong>⚠️ Construction Alert:</strong> Massport's <a href="https://www.massport.com/logan-airport/about-logan/airport-planning/" target="_blank" rel="noopener noreferrer">Logan Forward</a> plan includes Terminal E modernization (international) and apron improvements. Check the Massport website for current construction impacts.
    </div>

    <h3>Key Routes from BOS</h3>
    <ul>
      <li><strong>Delta Shuttle:</strong> LGA (New York LaGuardia), DCA (Washington Reagan) — high-frequency shuttle service</li>
      <li><strong>Domestic Hubs:</strong> ATL, JFK, LGA, DTW, MSP, SLC, LAX, SEA</li>
      <li><strong>Transatlantic:</strong> LHR (London Heathrow), AMS (Amsterdam) — nonstop widebody service</li>
      <li><strong>Northeast Feeder:</strong> Extensive connections to ORD, CLT, MIA, FLL, MCO and other key markets</li>
    </ul>
  </div>

  <!-- Delay Patterns -->
  <div class="section">
    <h2 id="delay-patterns">Delay Patterns at BOS</h2>
    <p>Boston's coastal New England location creates a distinctive delay profile shaped by nor'easters and Northeast corridor congestion:</p>

    <h3>Winter (Nov–Mar)</h3>
    <p>Nor'easters are BOS's most severe delay event. A major snowstorm can shut down operations for 6–18 hours. Boston receives significant snowfall, and the airport's proximity to the harbor means freezing rain and ice are common. De-icing queues and reduced runway capacity extend departure times significantly.</p>

    <h3>Fog (Year-Round)</h3>
    <p>Boston Harbor's coastal location makes fog a year-round delay driver. Sea fog can reduce visibility to near-zero with minimal warning. When fog restricts BOS to single-runway instrument operations, arrival rates drop significantly and cascading delays build quickly.</p>

    <h3>Summer Thunderstorms (Jun–Aug)</h3>
    <p>Afternoon thunderstorms moving up the Eastern Seaboard affect BOS, compounded by New York TRACON ground delay programs for northbound traffic. Morning flights have the best on-time performance in summer.</p>

    <div class="highlight-box">
      <strong>Tip:</strong> First flights of the day from BOS (before 8 AM) are reliably on time. If traveling in winter, check the forecast 24 hours ahead — nor'easters can cancel 500+ flights with little notice.
    </div>
  </div>

  <!-- FAQ (visible, matches schema) -->
  <div class="section">
    <h2 id="faq">Frequently Asked Questions</h2>

    <h3>Is Delta Air Lines delayed at BOS today?</h3>
    <p>Check the live status panel at the top of this page for current on-time performance, delay counts, and cancellations. For flight-level detail, <a href="/?hub=bos">open BOS on Widget Watch</a> to see every flight in real time.</p>

    <h3>What terminal is Delta at Boston Logan?</h3>
    <p>Delta operates from Terminal A. Delta Sky Club lounge is in Terminal A. The Silver Line bus rapid transit connects the terminal to downtown Boston and South Station.</p>

    <h3>How many Delta flights depart from BOS daily?</h3>
    <p>Approximately 200 daily departures, including the Delta Shuttle to LGA and DCA, hub connections, and transatlantic service to LHR and AMS.</p>
  </div>`,
},

// ─── DTW ────────────────────────────────────────────────────────────────
dtw: {
  iata: 'DTW',
  variant: 'full',
  title: 'Delta Air Lines DTW Hub Status — Detroit Metro Delays, On-Time Performance & Flight Tracker',
  description: 'Live Delta Air Lines status at Detroit Metropolitan Wayne County Airport (DTW). Real-time delays, cancellations, on-time performance, and departure schedules. Delta\'s Midwest hub — updated every 30 seconds.',
  keywords: 'Delta Air Lines DTW delays, Delta Detroit hub status, Delta Air Lines DTW on-time, Delta DTW cancellations today, Delta Air Lines Detroit delays, DTW flight status, Delta hub Detroit, Delta Air Lines Detroit departures',
  ogTitle: 'Delta Air Lines DTW Hub — Live Detroit Metro Status',
  ogDescription: 'Real-time Delta Air Lines operations at Detroit Metro Wayne County. Delays, cancellations, on-time %, and schedules.',
  ogImageAlt: 'Widget Watch — Delta Air Lines DTW Hub Status',
  twitterTitle: 'Delta Air Lines DTW Hub — Live Detroit Metro Status',
  twitterDescription: 'Real-time delays, cancellations, on-time performance at Delta\'s Midwest hub. Updated every 30 seconds.',
  breadcrumbName: 'DTW — Detroit Metro',
  faqSchema: [
    {
      question: 'Is Delta Air Lines delayed at DTW today?',
      answer: 'Widget Watch tracks every Delta Air Lines flight at Detroit Metro in real time. Check the live status panel above for current delay counts, cancellations, and on-time performance. The dashboard updates every 30 seconds with data from Flightradar24 and FAA sources.',
    },
    {
      question: 'What terminal is Delta Air Lines at Detroit Metro?',
      answer: 'Delta Air Lines operates from the McNamara Terminal (Terminal A) at Detroit Metropolitan Wayne County Airport. The McNamara Terminal is Delta\'s dedicated terminal with over 120 gates. Delta Sky Club lounges are located throughout the concourse. An automated people mover connects to the North Terminal.',
    },
    {
      question: 'How many Delta flights depart from DTW daily?',
      answer: 'Delta Air Lines operates approximately 350 daily departures from Detroit Metro, making it one of Delta\'s key Midwest hubs. DTW connects to over 160 destinations domestically and internationally.',
    },
    {
      question: 'What causes the most delays at DTW for Delta?',
      answer: 'Detroit\'s Great Lakes location means significant winter weather — snow, ice, and freezing rain are common from November through March. Lake-effect snow from Lake Erie and Lake St. Clair can produce heavy localized snowfall. Summer thunderstorms, while less severe than the Southeast, also cause delays. DTW\'s hub-and-spoke operation means inbound delays from connecting flights compound throughout the day.',
    },
  ],
  airportSchema: {
    name: 'Detroit Metropolitan Wayne County Airport',
    iataCode: 'DTW',
    addressLocality: 'Romulus',
    addressRegion: 'MI',
    addressCountry: 'US',
    latitude: 42.2162,
    longitude: -83.3554,
    url: 'https://www.metroairport.com',
  },
  headerTitle: 'Delta Air Lines at <span class="iata">DTW</span> — Detroit Metropolitan Wayne County',
  subtitle: 'Delta\'s Midwest hub · ~350 daily departures · McNamara Terminal',
  jumpNav: [
    { href: '#overview', label: 'Overview' },
    { href: '#delay-patterns', label: 'Delay Patterns' },
    { href: '#construction', label: 'Construction' },
    { href: '#faq', label: 'FAQ' },
    { href: '#all-hubs', label: 'All Hubs' },
  ],
  contentHtml: `
  <!-- Dive Deep -->
  <div class="section">
    <h2>Dive Deep at Widget Watch</h2>
    <p><strong>Widget Watch</strong> is the only real-time operations dashboard built specifically for Delta Air Lines passengers. Live flight tracking, delay alerts, and IRROPS monitoring, updated in real-time.</p>
    <p>This page gives you the overview — but the real action is on the dashboard. Track every Delta flight at DTW in real time, set up flight watch alerts, check equipment swaps, and monitor weather radar overlaid on the live map.</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px">
      <a class="cta" href="/?hub=dtw" style="margin:0">🗺️ Live DTW Map</a>
      <a class="cta" href="/?tab=schedule&hub=dtw" style="margin:0">📋 DTW Schedules</a>
      <a class="cta" href="/?tab=irrops&hub=dtw" style="margin:0">⚠️ IRROPS Monitor</a>
    </div>
  </div>

  <!-- Hub Overview -->
  <div class="section">
    <h2 id="overview">Hub Overview</h2>
    <p>Detroit Metropolitan Wayne County Airport is <strong>Delta Air Lines' primary Midwest hub</strong> — a massive connecting complex serving the Great Lakes region and beyond. With approximately 350 daily departures, DTW connects to over 160 domestic and international destinations.</p>
    <p>Delta operates exclusively from the <strong>McNamara Terminal (Terminal A)</strong>, a 120+ gate unified concourse that is one of the largest Delta terminals in the world. Delta Sky Club lounges are located at multiple locations throughout the concourse. An automated people mover connects to the older North Terminal used by other carriers.</p>

    <div class="highlight-box">
      <strong>DTW by the numbers:</strong> ~350 daily departures · McNamara Terminal (120+ gates) · Delta's dedicated terminal · Automated people mover on-site · 160+ destinations · 6 runways
    </div>

    <div class="highlight-box" style="border-left-color:var(--dl-yellow)">
      <span id="construction"></span><strong>⚠️ Construction Alert:</strong> DTW McNamara Terminal gate area renovations continue with incremental improvements to gate areas and concourse amenities. Check <a href="https://www.metroairport.com" target="_blank" rel="noopener noreferrer">Detroit Metro Airport</a> for current updates.
    </div>

    <h3>Key Routes from DTW</h3>
    <ul>
      <li><strong>Delta Hubs:</strong> ATL, LGA, JFK, BOS, MSP, SLC, LAX, SEA — full hub connectivity</li>
      <li><strong>Transatlantic:</strong> LHR (London Heathrow), AMS (Amsterdam), CDG (Paris) — nonstop widebody service</li>
      <li><strong>Domestic:</strong> Extensive Midwest coverage plus Florida, California, and Texas markets</li>
      <li><strong>Canada:</strong> YYZ (Toronto), YUL (Montreal), YVR (Vancouver)</li>
    </ul>
  </div>

  <!-- Delay Patterns -->
  <div class="section">
    <h2 id="delay-patterns">Delay Patterns at DTW</h2>
    <p>Detroit's Great Lakes geography creates a distinctive winter delay profile that every DTW traveler should understand:</p>

    <h3>Winter (Nov–Mar)</h3>
    <p>Lake-effect snow from Lake Erie and Lake St. Clair can deposit several inches of snow in just a few hours with little warning. Heavy snowfall reduces runway capacity and creates significant de-icing queues. DTW is well-equipped for winter operations compared to southern hubs, but major snowstorms still cause significant delays and cancellations.</p>

    <h3>Summer (Jun–Aug)</h3>
    <p>Summer thunderstorms are less severe than the Southeast but can produce ground stops. The Midwest storm track brings periodic severe weather to the Detroit area, typically in the afternoon and evening hours.</p>

    <h3>Connecting Hub Congestion</h3>
    <p>DTW's hub-and-spoke operation means inbound delays cascade into missed connections. The McNamara Terminal's single-corridor layout means gates can be far apart, so allow adequate connection time — particularly for flights arriving at the far ends of the concourse.</p>

    <div class="highlight-box">
      <strong>Tip:</strong> Morning departures (before 10 AM) have the best on-time performance at DTW in all seasons. Connection times of 45 minutes or more are recommended given the terminal's length.
    </div>
  </div>

  <!-- FAQ (visible, matches schema) -->
  <div class="section">
    <h2 id="faq">Frequently Asked Questions</h2>

    <h3>Is Delta Air Lines delayed at DTW today?</h3>
    <p>Check the live status panel at the top of this page for current on-time performance, delay counts, and cancellations. For flight-level detail, <a href="/?hub=dtw">open DTW on Widget Watch</a> to see every flight in real time.</p>

    <h3>What terminal is Delta at Detroit Metro?</h3>
    <p>Delta Air Lines operates exclusively from the McNamara Terminal (Terminal A), a 120+ gate dedicated Delta terminal. Delta Sky Club lounges are in multiple locations throughout the concourse. The automated people mover connects to the North Terminal.</p>

    <h3>How many Delta flights depart from DTW daily?</h3>
    <p>Approximately 350 daily departures, making DTW one of Delta's key Midwest hubs with connections to 160+ destinations domestically and internationally.</p>
  </div>`,
},

// ─── MSP ────────────────────────────────────────────────────────────────
msp: {
  iata: 'MSP',
  variant: 'full',
  title: 'Delta Air Lines MSP Hub Status — Minneapolis-Saint Paul Delays, On-Time Performance & Flight Tracker',
  description: 'Live Delta Air Lines status at Minneapolis-Saint Paul International (MSP). Real-time delays, cancellations, on-time performance, and departure schedules. Delta\'s Upper Midwest hub — updated every 30 seconds.',
  keywords: 'Delta Air Lines MSP delays, Delta Minneapolis hub status, Delta Air Lines MSP on-time, Delta MSP cancellations today, Delta Air Lines Minneapolis delays, MSP flight status, Delta hub Minneapolis, Delta Air Lines MSP departures',
  ogTitle: 'Delta Air Lines MSP Hub — Live Minneapolis-Saint Paul Status',
  ogDescription: 'Real-time Delta Air Lines operations at Minneapolis-Saint Paul International. Delays, cancellations, on-time %, and schedules.',
  ogImageAlt: 'Widget Watch — Delta Air Lines MSP Hub Status',
  twitterTitle: 'Delta Air Lines MSP Hub — Live Minneapolis-Saint Paul Status',
  twitterDescription: 'Real-time delays, cancellations, on-time performance at Delta\'s Upper Midwest hub. Updated every 30 seconds.',
  breadcrumbName: 'MSP — Minneapolis-Saint Paul',
  faqSchema: [
    {
      question: 'Is Delta Air Lines delayed at MSP today?',
      answer: 'Widget Watch tracks every Delta Air Lines flight at Minneapolis-Saint Paul International in real time. Check the live status panel above for current delay counts, cancellations, and on-time performance. The dashboard updates every 30 seconds with data from Flightradar24 and FAA sources.',
    },
    {
      question: 'What terminal is Delta Air Lines at Minneapolis?',
      answer: 'Delta Air Lines operates primarily from the Lindbergh Terminal (Terminal 1) at Minneapolis-Saint Paul International Airport. Delta Sky Club lounges are located in Concourses C, F, and G. Delta Connection regional flights also operate from the Lindbergh Terminal. The Humphrey Terminal (Terminal 2) is used by other carriers.',
    },
    {
      question: 'How many Delta flights depart from MSP daily?',
      answer: 'Delta Air Lines operates approximately 400 daily departures from Minneapolis-Saint Paul, making it Delta\'s primary Upper Midwest hub. MSP connects to over 170 domestic and international destinations.',
    },
    {
      question: 'What causes the most delays at MSP for Delta?',
      answer: 'Minnesota\'s harsh winters are the dominant delay factor at MSP. Blizzards, heavy snow, and extreme cold (temperatures below -20°F are not uncommon) can reduce capacity significantly. De-icing operations are extensive in winter, and even moderate snowstorms require careful runway management. Summer thunderstorms are the second major delay driver, particularly in July and August.',
    },
  ],
  airportSchema: {
    name: 'Minneapolis-Saint Paul International Airport',
    iataCode: 'MSP',
    addressLocality: 'Minneapolis',
    addressRegion: 'MN',
    addressCountry: 'US',
    latitude: 44.8848,
    longitude: -93.2223,
    url: 'https://www.mspairport.com',
  },
  headerTitle: 'Delta Air Lines at <span class="iata">MSP</span> — Minneapolis-Saint Paul International',
  subtitle: 'Delta\'s Upper Midwest hub · ~400 daily departures · Lindbergh Terminal · Concourses C, F, G',
  jumpNav: [
    { href: '#overview', label: 'Overview' },
    { href: '#delay-patterns', label: 'Delay Patterns' },
    { href: '#construction', label: 'Construction' },
    { href: '#faq', label: 'FAQ' },
    { href: '#all-hubs', label: 'All Hubs' },
  ],
  contentHtml: `
  <!-- Dive Deep -->
  <div class="section">
    <h2>Dive Deep at Widget Watch</h2>
    <p><strong>Widget Watch</strong> is the only real-time operations dashboard built specifically for Delta Air Lines passengers. Live flight tracking, delay alerts, and IRROPS monitoring, updated in real-time.</p>
    <p>This page gives you the overview — but the real action is on the dashboard. Track every Delta flight at MSP in real time, set up flight watch alerts, check equipment swaps, and monitor weather radar overlaid on the live map.</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px">
      <a class="cta" href="/?hub=msp" style="margin:0">🗺️ Live MSP Map</a>
      <a class="cta" href="/?tab=schedule&hub=msp" style="margin:0">📋 MSP Schedules</a>
      <a class="cta" href="/?tab=irrops&hub=msp" style="margin:0">⚠️ IRROPS Monitor</a>
    </div>
  </div>

  <!-- Hub Overview -->
  <div class="section">
    <h2 id="overview">Hub Overview</h2>
    <p>Minneapolis-Saint Paul International Airport is <strong>Delta Air Lines' Upper Midwest hub</strong> — a large connecting complex serving the Twin Cities and the northern tier of the country. With approximately 400 daily departures, MSP connects to over 170 destinations.</p>
    <p>Delta operates from the <strong>Lindbergh Terminal (Terminal 1)</strong>, with Delta Sky Club lounges in Concourses C, F, and G. MSP is connected to both downtown Minneapolis and Saint Paul by the Metro Blue Line light rail, which stops directly at the terminal. Delta has operated at MSP since its merger with Northwest Airlines in 2008, inheriting Northwest's massive Upper Midwest network.</p>

    <div class="highlight-box">
      <strong>MSP by the numbers:</strong> ~400 daily departures · Lindbergh Terminal (Concourses C, F, G) · 170+ destinations · Metro Blue Line direct to downtown · Former Northwest hub · 4 runways
    </div>

    <div class="highlight-box" style="border-left-color:var(--dl-yellow)">
      <span id="construction"></span><strong>⚠️ Construction Alert:</strong> The <a href="https://www.mspairport.com/about-msp/capital-improvement-program" target="_blank" rel="noopener noreferrer">MSP Capital Improvement Program</a> includes ongoing concourse and gate area upgrades. Check the MSP Airport website for current project status.
    </div>

    <h3>Key Routes from MSP</h3>
    <ul>
      <li><strong>Delta Hubs:</strong> ATL, LGA, JFK, BOS, DTW, SLC, LAX, SEA</li>
      <li><strong>Transatlantic:</strong> LHR (London Heathrow), CDG (Paris), AMS (Amsterdam), NRT (Tokyo) — nonstop widebody service</li>
      <li><strong>Domestic:</strong> Extensive Upper Midwest coverage plus Florida, California, Texas, Mountain West destinations</li>
      <li><strong>Canada:</strong> YYZ (Toronto), YVR (Vancouver), YYC (Calgary)</li>
    </ul>
  </div>

  <!-- Delay Patterns -->
  <div class="section">
    <h2 id="delay-patterns">Delay Patterns at MSP</h2>
    <p>Minnesota's climate creates some of the most severe winter operating conditions of any major U.S. hub:</p>

    <h3>Winter (Nov–Mar)</h3>
    <p>Blizzards, extreme cold, and persistent snow are MSP's primary delay drivers. Minnesota winters can produce sustained temperatures below -20°F with wind chills to -50°F — cold enough to affect aircraft systems and require extended warm-up procedures. De-icing operations are comprehensive but time-consuming. MSP has invested heavily in winter operations infrastructure, but major storms still cause significant disruption.</p>

    <h3>Summer (Jun–Aug)</h3>
    <p>Afternoon and evening thunderstorms are the summer delay driver. The Upper Midwest storm track produces intense convective weather in July and August. Unlike winter, summer delays are typically shorter in duration but can cascade through the hub.</p>

    <h3>Spring Freeze-Thaw (Mar–Apr)</h3>
    <p>Late-season snowstorms in March and April are often the heaviest of the year. Rapidly changing temperatures during freeze-thaw cycles can create icy runway conditions that require careful management.</p>

    <div class="highlight-box">
      <strong>Tip:</strong> Morning departures from MSP have the best on-time rates year-round. Check weather forecasts 24–48 hours in advance during winter — Minnesota blizzards can arrive quickly and cause mass cancellations.
    </div>
  </div>

  <!-- FAQ (visible, matches schema) -->
  <div class="section">
    <h2 id="faq">Frequently Asked Questions</h2>

    <h3>Is Delta Air Lines delayed at MSP today?</h3>
    <p>Check the live status panel at the top of this page for current on-time performance, delay counts, and cancellations. For flight-level detail, <a href="/?hub=msp">open MSP on Widget Watch</a> to see every flight in real time.</p>

    <h3>What terminal is Delta at Minneapolis?</h3>
    <p>Delta operates from the Lindbergh Terminal (Terminal 1), Concourses C, F, and G. Delta Sky Club lounges are in all three concourses. The Metro Blue Line light rail connects the terminal directly to downtown Minneapolis and Saint Paul.</p>

    <h3>How many Delta flights depart from MSP daily?</h3>
    <p>Approximately 400 daily departures, making MSP Delta's key Upper Midwest hub with connections to 170+ destinations and nonstop transatlantic service.</p>
  </div>`,
},

// ─── SLC ────────────────────────────────────────────────────────────────
slc: {
  iata: 'SLC',
  variant: 'full',
  title: 'Delta Air Lines SLC Hub Status — Salt Lake City Delays, On-Time Performance & Flight Tracker',
  description: 'Live Delta Air Lines status at Salt Lake City International (SLC). Real-time delays, cancellations, on-time performance, and departure schedules. Delta\'s Mountain West hub — updated every 30 seconds.',
  keywords: 'Delta Air Lines SLC delays, Delta Salt Lake City hub status, Delta Air Lines SLC on-time, Delta SLC cancellations today, Delta Air Lines Salt Lake City delays, SLC flight status, Delta hub Salt Lake City, Delta Air Lines SLC departures',
  ogTitle: 'Delta Air Lines SLC Hub — Live Salt Lake City Status',
  ogDescription: 'Real-time Delta Air Lines operations at Salt Lake City International. Delays, cancellations, on-time %, and schedules.',
  ogImageAlt: 'Widget Watch — Delta Air Lines SLC Hub Status',
  twitterTitle: 'Delta Air Lines SLC Hub — Live Salt Lake City Status',
  twitterDescription: 'Real-time delays, cancellations, on-time performance at Delta\'s Mountain West hub. Updated every 30 seconds.',
  breadcrumbName: 'SLC — Salt Lake City',
  faqSchema: [
    {
      question: 'Is Delta Air Lines delayed at SLC today?',
      answer: 'Widget Watch tracks every Delta Air Lines flight at Salt Lake City International in real time. Check the live status panel above for current delay counts, cancellations, and on-time performance. The dashboard updates every 30 seconds with data from Flightradar24 and FAA sources.',
    },
    {
      question: 'What terminal is Delta Air Lines at Salt Lake City?',
      answer: 'Delta Air Lines operates from the new Salt Lake City International Airport terminal, which opened in phases starting 2020. The new terminal replaced the aging legacy facility with a modern two-concourse design. Delta Sky Club lounges are located in Concourse A and Concourse B.',
    },
    {
      question: 'How many Delta flights depart from SLC daily?',
      answer: 'Delta Air Lines operates approximately 300 daily departures from Salt Lake City, making it Delta\'s Mountain West hub. SLC connects to over 120 domestic destinations and serves as a gateway to ski resorts across Utah, Colorado, and the Mountain West.',
    },
    {
      question: 'What causes the most delays at SLC for Delta?',
      answer: 'Salt Lake City\'s valley location between mountain ranges creates unique weather challenges. Winter inversion events trap cold air and fog in the valley, reducing visibility for days. Heavy snow from Pacific storm systems can also impact operations. Summer convective weather from the desert Southwest moves through periodically. The new SLC airport has improved efficiency significantly compared to the former terminal.',
    },
  ],
  airportSchema: {
    name: 'Salt Lake City International Airport',
    iataCode: 'SLC',
    addressLocality: 'Salt Lake City',
    addressRegion: 'UT',
    addressCountry: 'US',
    latitude: 40.7899,
    longitude: -111.9791,
    url: 'https://www.slcairport.com',
  },
  headerTitle: 'Delta Air Lines at <span class="iata">SLC</span> — Salt Lake City International',
  subtitle: 'Delta\'s Mountain West hub · ~300 daily departures · New Terminal (2020+)',
  jumpNav: [
    { href: '#overview', label: 'Overview' },
    { href: '#delay-patterns', label: 'Delay Patterns' },
    { href: '#construction', label: 'Construction' },
    { href: '#faq', label: 'FAQ' },
    { href: '#all-hubs', label: 'All Hubs' },
  ],
  contentHtml: `
  <!-- Dive Deep -->
  <div class="section">
    <h2>Dive Deep at Widget Watch</h2>
    <p><strong>Widget Watch</strong> is the only real-time operations dashboard built specifically for Delta Air Lines passengers. Live flight tracking, delay alerts, and IRROPS monitoring, updated in real-time.</p>
    <p>This page gives you the overview — but the real action is on the dashboard. Track every Delta flight at SLC in real time, set up flight watch alerts, check equipment swaps, and monitor weather radar overlaid on the live map.</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px">
      <a class="cta" href="/?hub=slc" style="margin:0">🗺️ Live SLC Map</a>
      <a class="cta" href="/?tab=schedule&hub=slc" style="margin:0">📋 SLC Schedules</a>
      <a class="cta" href="/?tab=irrops&hub=slc" style="margin:0">⚠️ IRROPS Monitor</a>
    </div>
  </div>

  <!-- Hub Overview -->
  <div class="section">
    <h2 id="overview">Hub Overview</h2>
    <p>Salt Lake City International Airport is <strong>Delta Air Lines' Mountain West hub</strong> — the gateway to Utah's world-famous ski resorts and the Mountain West region. With approximately 300 daily departures, SLC connects to over 120 destinations and serves as a key connecting point between the coasts.</p>
    <p>Delta operates from the brand-new <strong>Salt Lake City International Airport</strong>, which opened in phases starting 2020 with a $4.1 billion investment — one of the largest airport construction projects in U.S. history. The new terminal features two concourses (A and B) with Delta Sky Club lounges in both. The old terminal is fully decommissioned. Delta is the dominant carrier at SLC with ~70% market share.</p>

    <div class="highlight-box">
      <strong>SLC by the numbers:</strong> ~300 daily departures · New terminal (opened 2020, $4.1B) · 120+ destinations · Delta's dominant carrier (~70% share) · Gateway to 10 ski resorts within 90 minutes · 4 runways
    </div>

    <div class="highlight-box" style="border-left-color:var(--dl-green)">
      <span id="construction"></span><strong>✅ New Terminal Complete:</strong> The new <a href="https://www.slcairport.com/the-new-slc/" target="_blank" rel="noopener noreferrer">Salt Lake City International Airport</a> terminal and concourses are fully operational as of 2024. The modern facility is a vast improvement over the former 1960s-era terminal.
    </div>

    <h3>Key Routes from SLC</h3>
    <ul>
      <li><strong>Delta Hubs:</strong> ATL, LGA, JFK, BOS, DTW, MSP, LAX, SEA</li>
      <li><strong>Mountain West:</strong> Extensive regional coverage including ski resort markets (EGE, HDN, MTJ, JAC, SUN, SGU, CDC)</li>
      <li><strong>Domestic:</strong> ORD, DFW, PHX, LAS, DEN plus comprehensive East Coast markets</li>
      <li><strong>International:</strong> YVR (Vancouver), CUN (Cancún), and seasonal international service</li>
    </ul>
  </div>

  <!-- Delay Patterns -->
  <div class="section">
    <h2 id="delay-patterns">Delay Patterns at SLC</h2>
    <p>Salt Lake City's unique geography between the Wasatch Mountains and the Great Salt Lake creates a distinctive delay environment:</p>

    <h3>Winter Inversions (Nov–Feb)</h3>
    <p>Temperature inversions trap cold air and pollution in the Salt Lake valley for days at a time, creating persistent fog and reduced visibility. During inversion events, SLC can operate in IFR conditions even when the surrounding mountains are clear. These are SLC's most operationally challenging periods.</p>

    <h3>Winter Snow (Oct–Apr)</h3>
    <p>Pacific storm systems bring heavy wet snow to the Salt Lake valley. While ski resorts celebrate "The Greatest Snow on Earth," heavy snow events reduce runway capacity. De-icing operations are well-organized at SLC given its ski resort clientele, but major storms still cause delays.</p>

    <h3>Summer Monsoon (Jul–Sep)</h3>
    <p>The North American monsoon brings afternoon convective storms from the desert Southwest. Evening thunderstorms can produce lightning, heavy rain, and gusty winds. These are typically shorter in duration than winter disruptions but can cause significant afternoon/evening delays.</p>

    <div class="highlight-box">
      <strong>Tip:</strong> Morning departures have the best on-time performance at SLC in all seasons. For ski trips, check weather the day before — major winter storms can cause significant delays and cancellations at SLC.
    </div>
  </div>

  <!-- FAQ (visible, matches schema) -->
  <div class="section">
    <h2 id="faq">Frequently Asked Questions</h2>

    <h3>Is Delta Air Lines delayed at SLC today?</h3>
    <p>Check the live status panel at the top of this page for current on-time performance, delay counts, and cancellations. For flight-level detail, <a href="/?hub=slc">open SLC on Widget Watch</a> to see every flight in real time.</p>

    <h3>What terminal is Delta at Salt Lake City?</h3>
    <p>Delta operates from the new Salt Lake City International Airport terminal (opened 2020), with Delta Sky Club lounges in Concourses A and B. The new terminal replaced the former 1960s facility entirely.</p>

    <h3>How many Delta flights depart from SLC daily?</h3>
    <p>Approximately 300 daily departures. Delta controls ~70% of the market at SLC and serves as the hub for Mountain West connections and ski resort destinations.</p>
  </div>`,
},

// ─── LAX ────────────────────────────────────────────────────────────────
lax: {
  iata: 'LAX',
  variant: 'full',
  title: 'Delta Air Lines LAX Status — Los Angeles Delays, On-Time Performance & Flight Tracker',
  description: 'Live Delta Air Lines status at Los Angeles International (LAX). Real-time delays, cancellations, on-time performance, and departure schedules. Delta\'s Pacific gateway hub — updated every 30 seconds.',
  keywords: 'Delta Air Lines LAX delays, Delta Los Angeles status, Delta Air Lines LAX on-time, Delta LAX cancellations today, Delta Air Lines Los Angeles delays, LAX flight status, Delta LAX, Delta Air Lines LAX departures',
  ogTitle: 'Delta Air Lines LAX — Live Los Angeles International Status',
  ogDescription: 'Real-time Delta Air Lines operations at Los Angeles International. Delays, cancellations, on-time %, and schedules.',
  ogImageAlt: 'Widget Watch — Delta Air Lines LAX Hub Status',
  twitterTitle: 'Delta Air Lines LAX — Live Los Angeles International Status',
  twitterDescription: 'Real-time delays, cancellations, on-time performance at Delta\'s Pacific gateway. Updated every 30 seconds.',
  breadcrumbName: 'LAX — Los Angeles',
  faqSchema: [
    {
      question: 'Is Delta Air Lines delayed at LAX today?',
      answer: 'Widget Watch tracks every Delta Air Lines flight at Los Angeles International in real time. Check the live status panel above for current delay counts, cancellations, and on-time performance. The dashboard updates every 30 seconds with data from Flightradar24 and FAA sources.',
    },
    {
      question: 'What terminal is Delta Air Lines at LAX?',
      answer: 'Delta Air Lines operates from Terminals 7 and 8 at Los Angeles International Airport. Terminal 7 handles most domestic flights, while Terminal 8 serves additional domestic and some international departures. Delta Sky Club lounges are located in both terminals. Delta Connection regional flights also depart from Terminals 7 and 8.',
    },
    {
      question: 'How many Delta flights depart from LAX daily?',
      answer: 'Delta Air Lines operates approximately 200 daily departures from Los Angeles International. While LAX is a hub and Pacific gateway, it is a key Pacific gateway and connects to destinations across the U.S., Asia, Australia, and the Pacific Islands.',
    },
    {
      question: 'What causes the most delays at LAX for Delta?',
      answer: 'LAX delays are most commonly caused by morning marine layer fog (May Gray / June Gloom) that can reduce visibility and require instrument approaches, reducing runway throughput. LAX\'s complex airspace shared with nearby airports (BUR, SNA, LGB, ONT) creates congestion. Late-night construction on taxiways and runways can also cause delays during early morning hours.',
    },
  ],
  airportSchema: {
    name: 'Los Angeles International Airport',
    iataCode: 'LAX',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
    latitude: 33.9425,
    longitude: -118.4081,
    url: 'https://www.flylax.com',
  },
  headerTitle: 'Delta Air Lines at <span class="iata">LAX</span> — Los Angeles International',
  subtitle: 'Delta\'s Pacific gateway hub · ~200 daily departures · Terminals 7 & 8',
  jumpNav: [
    { href: '#overview', label: 'Overview' },
    { href: '#delay-patterns', label: 'Delay Patterns' },
    { href: '#construction', label: 'Construction' },
    { href: '#faq', label: 'FAQ' },
    { href: '#all-hubs', label: 'All Hubs' },
  ],
  contentHtml: `
  <!-- Dive Deep -->
  <div class="section">
    <h2>Dive Deep at Widget Watch</h2>
    <p><strong>Widget Watch</strong> is the only real-time operations dashboard built specifically for Delta Air Lines passengers. Live flight tracking, delay alerts, and IRROPS monitoring, updated in real-time.</p>
    <p>This page gives you the overview — but the real action is on the dashboard. Track every Delta flight at LAX in real time, set up flight watch alerts, check equipment swaps, and monitor weather radar overlaid on the live map.</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px">
      <a class="cta" href="/?hub=lax" style="margin:0">🗺️ Live LAX Map</a>
      <a class="cta" href="/?tab=schedule&hub=lax" style="margin:0">📋 LAX Schedules</a>
      <a class="cta" href="/?tab=irrops&hub=lax" style="margin:0">⚠️ IRROPS Monitor</a>
    </div>
  </div>

  <!-- Hub Overview -->
  <div class="section">
    <h2 id="overview">Hub Overview</h2>
    <p>Los Angeles International Airport is <strong>a key Pacific gateway for Delta Air Lines</strong> and a major focus city on the West Coast. With approximately 200 daily departures, LAX connects to destinations across the U.S., Asia, Australia, and the Pacific Islands. LAX is critical for Delta's transcontinental and transpacific operations.</p>
    <p>Delta operates from <strong>Terminals 7 and 8</strong>, located on the south side of the LAX horseshoe. Terminal 7 handles the majority of domestic flights, while Terminal 8 serves additional domestic routes and some international departures. Delta Sky Club lounges are available in both terminals (Terminal 7 near gate 71, Terminal 8 near gate 80s), plus a <strong>Delta One lounge</strong> in Terminal 7 near gate 71A for premium international travelers. Delta Connection partners operate from the same terminals.</p>

    <div class="highlight-box">
      <strong>LAX by the numbers:</strong> ~200 daily departures · Terminals 7 & 8 · Pacific gateway hub · Key Pacific gateway · Widebody-heavy route mix · Polaris service to Asia & Australia
    </div>


    <div class="highlight-box" style="border-left-color:var(--dl-yellow)">
      <span id="construction"></span><strong>⚠️ Construction Alert:</strong> The <a href="https://www.flylax.com/lax-people-mover" target="_blank" rel="noopener noreferrer">LAX Automated People Mover (APM)</a> elevated train is under construction with a target 2026 opening, connecting terminals to Metro K Line and the consolidated rental car facility. Expect ongoing construction impacts on ground transportation.
    </div>

    <h3>Key Routes from LAX</h3>
    <ul>
      <li><strong>Domestic:</strong> ATL, LGA, JFK, BOS, DTW, MSP, SLC, SEA — all Delta hub connections plus extensive West Coast network</li>
      <li><strong>Transpacific:</strong> NRT, HND, SYD, MEL, PVG, TPE — Delta's largest Pacific gateway</li>
      <li><strong>Transatlantic:</strong> LHR (year-round widebody service)</li>
      <li><strong>Latin America:</strong> CUN, GDL, PVR, SJD, MEX</li>
      <li><strong>Hawaii:</strong> HNL, OGG, LIH, KOA — multiple daily frequencies</li>
    </ul>
  </div>

  <!-- Delay Patterns -->
  <div class="section">
    <h2 id="delay-patterns">Delay Patterns at LAX</h2>
    <p>LAX benefits from Southern California's generally mild weather but faces unique operational challenges from its complex airspace and marine layer conditions:</p>

    <h3>Marine Layer (May–Jun)</h3>
    <p>"May Gray" and "June Gloom" bring persistent morning fog and low clouds that can reduce visibility below IFR minimums. When marine layer is thick, LAX switches to instrument approaches which reduce throughput from 4 runways to 2, causing cascading delays. Conditions typically burn off by midday.</p>

    <h3>Santa Ana Winds (Oct–Jan)</h3>
    <p>Hot, dry Santa Ana winds can force runway configuration changes and create turbulent approach conditions. While not a major delay driver, they occasionally require go-arounds and diversions, especially for regional jets.</p>

    <h3>Year-Round: Airspace Congestion</h3>
    <p>LAX shares the LA Basin airspace with Burbank (BUR), Long Beach (LGB), Orange County (SNA), and Ontario (ONT). This creates one of the most complex approach corridors in the U.S. Late arrivals from East Coast airports — especially weather-delayed JFK and BOS flights — ripple into LAX evening operations.</p>

    <div class="highlight-box">
      <strong>Tip:</strong> Afternoon departures from LAX typically have the best on-time performance. Morning marine layer affects early flights in May–June, and East Coast ripple effects hit evening departures year-round.
    </div>
  </div>

  <!-- FAQ (visible, matches schema) -->
  <div class="section">
    <h2 id="faq">Frequently Asked Questions</h2>

    <h3>Is Delta Air Lines delayed at LAX today?</h3>
    <p>Check the live status panel at the top of this page for current on-time performance, delay counts, and cancellations. For flight-level detail, <a href="/?hub=lax">open LAX on Widget Watch</a> to see every flight in real time.</p>

    <h3>What terminal is Delta at LAX?</h3>
    <p>Delta Air Lines operates from Terminals 7 and 8 on the south side of the LAX horseshoe. Both terminals have Delta Sky Club lounges. Terminals 7 and 8 are connected airside, so you can move between them without re-clearing security.</p>

    <h3>How many Delta flights depart from LAX daily?</h3>
    <p>Approximately 200 daily departures. LAX is Delta's key Pacific gateway with widebody service to Asia, Australia, and extensive Hawaii frequencies.</p>
  </div>`,
},

// ─── SEA ────────────────────────────────────────────────────────────────
sea: {
  iata: 'SEA',
  variant: 'full',
  title: 'Delta Air Lines SEA Hub Status — Seattle-Tacoma Delays, On-Time Performance & Flight Tracker',
  description: 'Live Delta Air Lines status at Seattle-Tacoma International (SEA). Real-time delays, cancellations, on-time performance, and departure schedules. Delta\'s Pacific Northwest hub — updated every 30 seconds.',
  keywords: 'Delta Air Lines SEA delays, Delta Seattle hub status, Delta Air Lines SEA on-time, Delta SEA cancellations today, Delta Air Lines Seattle delays, SEA flight status, Delta hub Seattle, Delta Air Lines Seattle departures',
  ogTitle: 'Delta Air Lines SEA Hub — Live Seattle-Tacoma Status',
  ogDescription: 'Real-time Delta Air Lines operations at Seattle-Tacoma International. Delays, cancellations, on-time %, and schedules.',
  ogImageAlt: 'Widget Watch — Delta Air Lines SEA Hub Status',
  twitterTitle: 'Delta Air Lines SEA Hub — Live Seattle-Tacoma Status',
  twitterDescription: 'Real-time delays, cancellations, on-time performance at Delta\'s Pacific Northwest hub. Updated every 30 seconds.',
  breadcrumbName: 'SEA — Seattle-Tacoma',
  faqSchema: [
    {
      question: 'Is Delta Air Lines delayed at SEA today?',
      answer: 'Widget Watch tracks every Delta Air Lines flight at Seattle-Tacoma International in real time. Check the live status panel above for current delay counts, cancellations, and on-time performance. The dashboard updates every 30 seconds with data from Flightradar24 and FAA sources.',
    },
    {
      question: 'What terminal is Delta Air Lines at Seattle?',
      answer: 'Delta Air Lines operates from the Main Terminal and Concourses A, B, and C at Seattle-Tacoma International Airport. Delta Sky Club lounges are located in Concourse C and in the Central Terminal. International flights use the International Arrivals Facility (IAF). Link Light Rail connects directly to the airport from downtown Seattle.',
    },
    {
      question: 'How many Delta flights depart from SEA daily?',
      answer: 'Delta Air Lines operates approximately 250 daily departures from Seattle-Tacoma, making it a significant Pacific Northwest hub. SEA connects to Delta hubs, extensive domestic markets, and transpacific destinations including Tokyo, Seoul, and Shanghai.',
    },
    {
      question: 'What causes the most delays at SEA for Delta?',
      answer: 'Seattle\'s famously rainy climate creates persistent low clouds and fog that can reduce SEA to instrument operations for extended periods, particularly in fall and winter (Oct–Mar). Low ceilings limit arrival rates on the parallel runway system. Summer is relatively clear with occasional smoke impacts from wildfires in the Pacific Northwest. Wind events near the Cascades can also cause turbulent approaches.',
    },
  ],
  airportSchema: {
    name: 'Seattle-Tacoma International Airport',
    iataCode: 'SEA',
    addressLocality: 'SeaTac',
    addressRegion: 'WA',
    addressCountry: 'US',
    latitude: 47.4502,
    longitude: -122.3088,
    url: 'https://www.portseattle.org/sea-tac',
  },
  headerTitle: 'Delta Air Lines at <span class="iata">SEA</span> — Seattle-Tacoma International',
  subtitle: 'Delta\'s Pacific Northwest hub · ~250 daily departures · Concourses A, B & C',
  jumpNav: [
    { href: '#overview', label: 'Overview' },
    { href: '#delay-patterns', label: 'Delay Patterns' },
    { href: '#construction', label: 'Construction' },
    { href: '#faq', label: 'FAQ' },
    { href: '#all-hubs', label: 'All Hubs' },
  ],
  contentHtml: `
  <!-- Dive Deep -->
  <div class="section">
    <h2>Dive Deep at Widget Watch</h2>
    <p><strong>Widget Watch</strong> is the only real-time operations dashboard built specifically for Delta Air Lines passengers. Live flight tracking, delay alerts, and IRROPS monitoring, updated in real-time.</p>
    <p>This page gives you the overview — but the real action is on the dashboard. Track every Delta flight at SEA in real time, set up flight watch alerts, check equipment swaps, and monitor weather radar overlaid on the live map.</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px">
      <a class="cta" href="/?hub=sea" style="margin:0">🗺️ Live SEA Map</a>
      <a class="cta" href="/?tab=schedule&hub=sea" style="margin:0">📋 SEA Schedules</a>
      <a class="cta" href="/?tab=irrops&hub=sea" style="margin:0">⚠️ IRROPS Monitor</a>
    </div>
  </div>

  <!-- Hub Overview -->
  <div class="section">
    <h2 id="overview">Hub Overview</h2>
    <p>Seattle-Tacoma International Airport is <strong>Delta Air Lines' Pacific Northwest hub</strong> — the gateway to the Pacific Northwest and a key node for transpacific service. With approximately 250 daily departures, SEA connects to Delta hubs, domestic markets, and Asia-Pacific destinations.</p>
    <p>Delta operates from <strong>Concourses A, B, and C</strong> in the Main Terminal, with Delta Sky Club lounges in Concourse C and the Central Terminal. The International Arrivals Facility (IAF) handles all international arrivals. <strong>Link Light Rail</strong> connects directly to the airport, providing a 40-minute ride to downtown Seattle. Delta serves SEA with both narrowbody domestic aircraft and widebody transpacific jets.</p>

    <div class="highlight-box">
      <strong>SEA by the numbers:</strong> ~250 daily departures · Concourses A, B & C · Link Light Rail to downtown Seattle (40 min) · Key transpacific gateway · International Arrivals Facility · 4 runways
    </div>

    <div class="highlight-box" style="border-left-color:var(--dl-yellow)">
      <span id="construction"></span><strong>⚠️ Construction Alert:</strong> The <a href="https://www.portseattle.org/sea-tac/at-the-airport/construction-updates" target="_blank" rel="noopener noreferrer">SEA airport expansion</a> includes a new International Arrivals Facility (opened 2022), Concourse D expansion planning, and ongoing gate area improvements. Check the Port of Seattle website for current project status.
    </div>

    <h3>Key Routes from SEA</h3>
    <ul>
      <li><strong>Delta Hubs:</strong> ATL, LGA, JFK, BOS, DTW, MSP, SLC, LAX</li>
      <li><strong>Transpacific:</strong> NRT (Tokyo Narita), ICN (Seoul), PVG (Shanghai), HND (Tokyo Haneda) — nonstop widebody service</li>
      <li><strong>Domestic:</strong> ORD, DFW, PHX, LAS, DEN plus extensive Pacific Northwest regional network</li>
      <li><strong>Hawaii:</strong> HNL, OGG, KOA, LIH — daily frequencies</li>
      <li><strong>Alaska:</strong> ANC (Anchorage) — year-round service</li>
    </ul>
  </div>

  <!-- Delay Patterns -->
  <div class="section">
    <h2 id="delay-patterns">Delay Patterns at SEA</h2>
    <p>Seattle's maritime climate creates a distinctive delay profile centered on low clouds and persistent rain rather than dramatic weather events:</p>

    <h3>Fall/Winter (Oct–Mar)</h3>
    <p>Low ceilings and drizzle are the norm for Seattle from October through March. These conditions regularly require instrument approaches and can reduce arrival rates when ceilings drop below minimum separation requirements. While SEA rarely closes for weather, it frequently operates in reduced capacity. Multiple days of continuous IFR conditions are common in the rainy season.</p>

    <h3>Fog (Year-Round)</h3>
    <p>Radiation fog is common in the Puget Sound lowlands, particularly in autumn mornings. Fog events can drop ceilings to near-zero for several hours before burning off. Unlike the dramatic weather delays of other hubs, SEA delays are often low-visibility, moderate, and persistent.</p>

    <h3>Summer Wildfire Smoke (Jul–Sep)</h3>
    <p>In recent years, wildfire smoke from Oregon and Washington has reduced SEA visibility significantly. Smoke events can reduce SEA to instrument operations even on otherwise clear days, causing unexpected delays during the typically clear summer season.</p>

    <div class="highlight-box">
      <strong>Tip:</strong> Midday and afternoon departures from SEA have the best on-time performance in fall and winter, as morning fog typically burns off by late morning. Summer departures are generally reliable, though allow extra time for wildfire smoke events.
    </div>
  </div>

  <!-- FAQ (visible, matches schema) -->
  <div class="section">
    <h2 id="faq">Frequently Asked Questions</h2>

    <h3>Is Delta Air Lines delayed at SEA today?</h3>
    <p>Check the live status panel at the top of this page for current on-time performance, delay counts, and cancellations. For flight-level detail, <a href="/?hub=sea">open SEA on Widget Watch</a> to see every flight in real time.</p>

    <h3>What terminal is Delta at Seattle?</h3>
    <p>Delta operates from Concourses A, B, and C in the Main Terminal. Delta Sky Club lounges are in Concourse C and the Central Terminal. The International Arrivals Facility (IAF) handles all international arrivals. Link Light Rail connects to downtown Seattle.</p>

    <h3>How many Delta flights depart from SEA daily?</h3>
    <p>Approximately 250 daily departures, including transpacific service to Tokyo, Seoul, and Shanghai, plus extensive domestic and Hawaii routes.</p>
  </div>`,
},

}; // end hubs
