// ═══════════════════════════════════════════
// HUMMING APP - app.js
// ═══════════════════════════════════════════

// ─── TRAVEL VIBE TYPE SYSTEM (8-letter MBTI-style) ───
// Axes: P/F (Planning/Flexible), E/L (Energetic/Leisurely),
//       C/X (Culture/Xplorer-chiller), S/Q (Sensory-slow/Quick-paced),
//       V/M (Visual-photo/Minimal), O/I (Open-social/Introvert),
//       A/B (Adventurous-saver/Budget-spender)... simplified to 4 letters:
// Letter 1: P (Planner) vs F (Flexible)
// Letter 2: E (Energetic) vs L (Leisurely)
// Letter 3: C (Culture-seeker) vs X (Xplorer/Chiller)
// Letter 4: S (Social) vs I (Introvert)
// = 16 types

const VIBE_TYPES = {
  PECS: {name:'The Pioneer',emoji:'🧭',desc:'Organized, energetic, culture-loving socialite. You curate the perfect trip and bring everyone along.',best:['FECS','PELX'],caut:['FLXI'],color:'#10b981'},
  PECX: {name:'The Scholar',emoji:'🏛️',desc:'Methodical explorer who goes deep into every destination. You know the history before you land.',best:['FLCX','PECS'],caut:['FELI'],color:'#2563eb'},
  PELX: {name:'The Sensualist',emoji:'🍷',desc:'Planned but unhurried. You savor every cafe, every gallery, every slow morning.',best:['FLCX','PECS'],caut:['FELI','FEXS'],color:'#7c3aed'},
  PELS: {name:'The Cultivator',emoji:'🌿',desc:'Organized slow traveler who builds deep connections everywhere they go.',best:['FELX','FLCS'],caut:['FEXS'],color:'#059669'},
  FECS: {name:'The Spark',emoji:'⚡',desc:'Spontaneous, high-energy, culture-hungry and social. You drag everyone to the best unexpected spots.',best:['PECS','FECX'],caut:['PLXI'],color:'#f59e0b'},
  FECX: {name:'The Solo Adventurer',emoji:'🎒',desc:'Free-spirited culture seeker. You go alone, absorb everything, and leave transformed.',best:['FLCX','FECS'],caut:['PECS'],color:'#0891b2'},
  FEXS: {name:'The Vibe Architect',emoji:'🪩',desc:'Spontaneous, active, fun-focused and social. You find the rooftop party every time.',best:['FECS','FLXS'],caut:['PELX','PLCI'],color:'#db2777'},
  FEXI: {name:'The Nomad',emoji:'🌊',desc:'Most adaptable traveler. No plan, no problem. You just go and figure it out.',best:['FEXS','FECS'],caut:['PLCI'],color:'#0e7490'},
  PLCS: {name:'The Pathfinder',emoji:'🗺️',desc:'Carefully planned trips, gentle pace, rich culture, wonderful people. The perfect group leader.',best:['FLCS','PLCI'],caut:['FEXI'],color:'#065f46'},
  PLCX: {name:'The Monk',emoji:'🧘',desc:'Journals instead of posts. Depth over breadth. You come home changed, not just traveled.',best:['PLCI','FLCX'],caut:['FEXS','FECS'],color:'#334155'},
  PLXI: {name:'The Slow Burner',emoji:'🌅',desc:'Unhurried, quiet, present. You spend a week in one neighborhood and love every moment.',best:['FLXI','PLCX'],caut:['FECS','FEXS'],color:'#9a3412'},
  PLXS: {name:'The Wanderer',emoji:'🌿',desc:'Relaxed planner who loves people. Happy to spend hours in one spot if the company is good.',best:['FLXS','PLCS'],caut:['FEXS'],color:'#166534'},
  FLCS: {name:'The Storyteller',emoji:'📖',desc:'Spontaneous culture lover who collects experiences and people. Every trip is a novel.',best:['FECS','PLCS'],caut:['PLXI'],color:'#78350f'},
  FLCX: {name:'The Flaneur',emoji:'🌆',desc:'Drifts through cities like a local. Three hours in one cafe? Architecture walks? Perfect.',best:['PLCX','PELX'],caut:['FECS','FEXS'],color:'#9a3412'},
  FLXI: {name:'The Sanctuary Seeker',emoji:'🌙',desc:'Quiet, intentional, restorative. You travel to recharge, not exhaust.',best:['PLXI','FLCX'],caut:['FECS','FEXS'],color:'#14532d'},
  FLXS: {name:'The Free Spirit',emoji:'🦋',desc:'Go-with-the-flow social traveler. No plan, great people, amazing food, zero stress.',best:['FEXS','FLCS'],caut:['PLCX'],color:'#6b21a8'},
};

const COMPANIONS = [
  {id:1,name:'Elena',age:26,dna:'FLCX',city:'Barcelona',country:'Spain',img:'https://i.pravatar.cc/300?img=25',match:98,langs:['EN','ES'],tags:['Photography','Vegan Foodie','Slow Travel'],verified:true,rating:4.9,reviews:18,desc:'Solo backpacker planning Japan this fall. Love hidden cafes, city walks, and authentic local experiences.',gender:'female',budget:'mid'},
  {id:2,name:'Marcus',age:31,dna:'PECS',city:'Oslo',country:'Norway',img:'https://i.pravatar.cc/300?img=11',match:92,langs:['EN','NO'],tags:['Hiking','Culture','Photography'],verified:true,rating:4.8,reviews:12,desc:'Looking for a hiking partner for the Dolomites. Value good conversation and early mornings.',gender:'male',budget:'mid'},
  {id:3,name:'Sophia',age:24,dna:'PECX',city:'Rome',country:'Italy',img:'https://i.pravatar.cc/300?img=44',match:85,langs:['EN','IT','FR'],tags:['Art','Museums','Food'],verified:true,rating:4.7,reviews:9,desc:'Art history buff on a mission to see every museum in Europe. Flexible schedule this summer!',gender:'female',budget:'mid'},
  {id:4,name:'David',age:29,dna:'FEXI',city:'New York',country:'USA',img:'https://i.pravatar.cc/300?img=67',match:79,langs:['EN','KO'],tags:['Surfing','Adventure','Budget'],verified:false,rating:4.5,reviews:5,desc:'Adventure seeker. Surfing in Portugal next month. Looking for someone to split costs.',gender:'male',budget:'budget'},
  {id:5,name:'Yuki',age:27,dna:'PLXS',city:'Tokyo',country:'Japan',img:'https://i.pravatar.cc/300?img=47',match:76,langs:['JA','EN'],tags:['Culture','Food','Local Knowledge'],verified:true,rating:4.9,reviews:21,desc:'Japanese local who loves showing hidden Tokyo spots. Planning a Korea trip next spring.',gender:'female',budget:'mid'},
  {id:6,name:'Carlos',age:33,dna:'FECS',city:'Mexico City',country:'Mexico',img:'https://i.pravatar.cc/300?img=52',match:71,langs:['ES','EN'],tags:['Food','Nightlife','Social'],verified:true,rating:4.6,reviews:14,desc:'Foodie traveler exploring Latin America. Always find the best street food spots!',gender:'male',budget:'mid'},
];

const REVIEWS_BASE = [
  {author:'Marcus Chen',avatar:'https://i.pravatar.cc/30?img=11',rating:5,text:'Elena is the perfect travel partner! Organized but knows when to go with the flow.',trip:'Patagonia Trek',date:'Mar 2024'},
  {author:'Sarah Jenkins',avatar:'https://i.pravatar.cc/30?img=20',rating:5,text:'Found the best hidden vegan spots in Tokyo I never would have found on my own!',trip:'Tokyo Wander',date:'Jan 2024'},
  {author:'James Park',avatar:'https://i.pravatar.cc/30?img=68',rating:4,text:'Great communicator and very punctual. Made the whole trip feel effortless.',trip:'Bali Expedition',date:'Nov 2023'},
  {author:'Mia Chen',avatar:'https://i.pravatar.cc/30?img=33',rating:5,text:'Traveled across Patagonia for 2 weeks. Her local knowledge was incredible.',trip:'Patagonia',date:'Oct 2023'},
];

const POSTS_DATA = [
  {id:1,cat:'itinerary',dest:'Iceland',title:'Iceland Ring Road: 7-Day Campervan Guide',body:'September is magical: Northern Lights start appearing and crowds drop 40%. Book your campervan 3 months early. vedur.is app is essential for weather. Best order: Reykjavik, Snaefellsnes, North, East Fjords, South Coast.',author:'Jamie K.',atype:'PECS',avatar:'https://i.pravatar.cc/34?img=47',time:'2h ago',likes:248,comments:67,tags:['Iceland','Roadtrip','Campervan'],img:'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&q=80',aiMatch:true},
  {id:2,cat:'question',dest:'Florence',title:'Is 1 night in Florence enough?',body:'Planning Rome to Florence to Venice. Want to see the Uffizi, Duomo, and Ponte Vecchio. Is 1 night too rushed or doable if I pre-book everything?',author:'Sarah J.',atype:'PECX',avatar:'https://i.pravatar.cc/34?img=20',time:'5h ago',likes:89,comments:73,tags:['Florence','Italy','Planning'],img:'https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?w=600&q=80',aiMatch:false},
  {id:3,cat:'food',dest:'Tokyo',title:'Tokyo Hidden Local Spots: Forget the Tourist Traps',body:'Late night ramen in Shimokitazawa, authentic curry in Koenji, back-alley izakaya near Yoyogi where locals go after work. Ask me for addresses in the comments!',author:'Yuki T.',atype:'FLCX',avatar:'https://i.pravatar.cc/34?img=44',time:'Yesterday',likes:412,comments:118,tags:['Tokyo','Food','Local'],img:'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',aiMatch:true},
  {id:4,cat:'tips',dest:'Bali',title:'Bali Reality Check: How to Not Get Scammed',body:'Always use Grab or Gojek. Exchange money in Ubud town, not the airport. Rent scooters from local shops not hotels. Kecak dance at Uluwatu is worth it, but book in advance.',author:'Carlos M.',atype:'FECS',avatar:'https://i.pravatar.cc/34?img=52',time:'2 days ago',likes:534,comments:142,tags:['Bali','Tips','Safety'],img:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',aiMatch:false},
  {id:5,cat:'tips',dest:'Kyoto',title:'Cherry Blossom Season: Instagram vs Reality',body:'The famous spots are overcrowded but worth it early morning. Yoshida Shrine at 6 AM is stunning with almost no one there. Philosophers Path before 8 AM is pure magic.',author:'Elena R.',atype:'FLCX',avatar:'https://i.pravatar.cc/34?img=25',time:'3 days ago',likes:687,comments:203,tags:['Kyoto','Japan','Photography'],img:'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&q=80',aiMatch:true},
];

const CATMETA = {
  tips:{lbl:'✈️ Travel Tips',col:'#2563eb',bg:'#eff6ff'},
  itinerary:{lbl:'🗺️ Itinerary',col:'#059669',bg:'#ecfdf5'},
  food:{lbl:'🍜 Food & Cafés',col:'#d97706',bg:'#fffbeb'},
  question:{lbl:'💬 Question',col:'#7c3aed',bg:'#faf5ff'},
};

const DNA_SECTIONS = [
  {lbl:'Planning Style',col:'#7c3aed',bg:'#faf5ff',pill:'🟣',intro:'How do you typically plan your trips?',ax:'PF',qs:[
    {q:'I make a detailed hour-by-hour itinerary before every trip.',d:1},
    {q:'Unexpected plan changes cause me significant stress.',d:1},
    {q:'I love making spontaneous changes to plans mid-trip.',d:-1},
    {q:'Accommodation and transport must be pre-booked for me to feel comfortable.',d:1},
  ]},
  {lbl:'Energy & Pace',col:'#ea580c',bg:'#fff7ed',pill:'🟠',intro:'What is your physical pace on the road?',ax:'EL',qs:[
    {q:'Walking 15,000+ steps a day on a trip is no problem.',d:1},
    {q:'I prefer visiting many spots in a day over staying in one place.',d:1},
    {q:'Too much walking or transit makes me exhausted.',d:-1},
    {q:'I get restless if a travel day has too much free time.',d:1},
  ]},
  {lbl:'Culture & Learning',col:'#2563eb',bg:'#eff6ff',pill:'🔵',intro:'What draws you into a destination?',ax:'CX',qs:[
    {q:'I seek out museums, galleries, and historical sites on every trip.',d:1},
    {q:'Gaining knowledge and inspiration is one of my main reasons to travel.',d:1},
    {q:'I prioritize cultural experiences over relaxing on a beach or in a cafe.',d:1},
    {q:'History and exhibitions feel boring to me.',d:-1},
  ]},
  {lbl:'Sensory & Slow',col:'#0891b2',bg:'#ecfeff',pill:'🩵',intro:'How do you savour moments?',ax:'QS',qs:[
    {q:'I enjoy lingering in one spot for hours to soak in the atmosphere.',d:1},
    {q:'A slow morning in a great cafe is the highlight of my trip.',d:1},
    {q:'Too much downtime on a trip feels like wasted time.',d:-1},
    {q:'I prefer deep experiences in fewer places over seeing more.',d:1},
  ]},
  {lbl:'Photo & Recording',col:'#db2777',bg:'#fdf2f8',pill:'🌸',intro:'How important is documenting your travels?',ax:'VM',qs:[
    {q:'Photography is a core and meaningful part of my travel experience.',d:1},
    {q:'I plan shots around angles, locations, and golden hour lighting.',d:1},
    {q:'Stopping for photos is annoying and slows down the experience.',d:-1},
    {q:'I would rather fully experience a moment than document it.',d:-1},
  ]},
  {lbl:'Social Style',col:'#059669',bg:'#ecfdf5',pill:'🟢',intro:'How do you connect with people while traveling?',ax:'OI',qs:[
    {q:'I easily start conversations with strangers in hostels or on tours.',d:1},
    {q:'Traveling with someone new is exciting rather than uncomfortable.',d:1},
    {q:'If my travel companion and I don\'t click, I prefer to go solo.',d:-1},
    {q:'I enjoy sharing meals or day plans with people I just met.',d:1},
  ]},
  {lbl:'Budget & Comfort',col:'#b45309',bg:'#fffbeb',pill:'🟡',intro:'How do you think about spending on trips?',ax:'AB',qs:[
    {q:'Value-for-money is the most important factor in my travel decisions.',d:1},
    {q:'I am happy to upgrade for comfort, even if it costs significantly more.',d:-1},
    {q:'I would choose a local guesthouse over a hotel to save money.',d:1},
    {q:'Splurging on a memorable experience is always worth it.',d:-1},
  ]},
];

const TRIPS_DATA = [
  {id:1,name:'Bali Expedition 2025',dest:'Ubud · Seminyak · Nusa Penida',dates:'Oct 12 – Oct 19',status:'upcoming',members:4,img:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80',budget:2000,spent:1240},
  {id:2,name:'Japan Cherry Blossom',dest:'Tokyo · Kyoto · Osaka',dates:'Apr 3 – Apr 14',status:'planning',members:2,img:'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&q=80',budget:3000,spent:0},
  {id:3,name:'Iceland Northern Lights',dest:'Reykjavik · Ring Road',dates:'Nov 20 – Nov 28',status:'planning',members:1,img:'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&q=80',budget:2500,spent:0},
];

const CHAT_CONTACTS = [
  {id:1,name:'Elena Rodriguez',avatar:'https://i.pravatar.cc/40?img=25',lastMsg:'This is exactly what I was hoping for! Want to plan together? 🌴',time:'2m',online:true,unread:2,match:98},
  {id:2,name:'Marcus Chen',avatar:'https://i.pravatar.cc/40?img=11',lastMsg:'Are you free the week of Oct 12?',time:'1h',online:false,unread:0,match:92},
  {id:3,name:'Sophia Rossi',avatar:'https://i.pravatar.cc/40?img=44',lastMsg:'Yes! The Uffizi is incredible 🏛️',time:'3h',online:false,unread:1,match:85},
  {id:4,name:'Yuki Tanaka',avatar:'https://i.pravatar.cc/40?img=47',lastMsg:'I know the perfect ramen spot 🍜',time:'1d',online:true,unread:0,match:76},
];

const CHAT_HISTORY_BY_ID = {
  1: [
    {me:false,text:'Hey! I saw we matched 98% on Humming. I\'m planning a Bali trip in October!',time:'10:24 AM'},
    {me:true,text:'That\'s amazing! I\'ve been to Bali twice. I know all the hidden spots.',time:'10:26 AM'},
    {me:false,text:'Seriously?? I want to avoid the tourist traps completely.',time:'10:27 AM'},
    {me:true,text:'There\'s a rice terrace near Tegallalang that 99% of tourists miss. And the Kecak dance at Uluwatu at sunset is incredible.',time:'10:29 AM'},
    {me:false,text:'This is exactly what I was hoping to find! Want to plan together? 🌴',time:'10:31 AM'},
  ],
  2: [
    {me:false,text:'Hi! I saw you\'re also into photography. The Dolomites light is unreal in October.',time:'9:15 AM'},
    {me:true,text:'The Tre Cime hike at golden hour is on my bucket list!',time:'9:18 AM'},
    {me:false,text:'Are you free the week of Oct 12?',time:'9:20 AM'},
  ],
  3: [
    {me:false,text:'Yes! The Uffizi is incredible 🏛️',time:'Yesterday'},
  ],
};

// ─── MY PROFILE ───
const MY_PROFILE = {
  name: 'Sarah Park',
  firstName: 'Sarah',
  lastName: 'Park',
  avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80',
  age: 26,
  city: 'Portland',
  country: 'US',
  hometown: 'Seoul, Korea',
  native: 'Korean',
  fluent: 'English',
  learning: 'Spanish',
  vibeType: 'FLCX',
  verified: true,
  tags: ['Photography', 'Slow Travel', 'Local Food', 'Museums'],
};

// ─── EXTRA REVIEWS (more visible) ───
const ALL_REVIEWS = [
  {author:'Marcus Chen',avatar:'https://i.pravatar.cc/30?img=11',rating:5,text:'Elena is the perfect travel partner — organized but knows when to just go with the flow. Shared a 2-week trek through Patagonia and she was so reliable.',trip:'Patagonia Trek',date:'Mar 2024'},
  {author:'Sarah Jenkins',avatar:'https://i.pravatar.cc/30?img=20',rating:5,text:'Highly recommend traveling with her. She found the best hidden vegan spots in Tokyo that I never would have found on my own!',trip:'Tokyo Wander',date:'Jan 2024'},
  {author:'James Park',avatar:'https://i.pravatar.cc/30?img=68',rating:4,text:'Great communicator and very punctual. Made the whole trip feel effortless and stress-free.',trip:'Bali Expedition',date:'Nov 2023'},
  {author:'Mia Chen',avatar:'https://i.pravatar.cc/30?img=33',rating:5,text:'One of the most thoughtful travelers I have ever met. Deep interest in local culture and always found the most authentic experiences.',trip:'Patagonia',date:'Oct 2023'},
  {author:'Diego M.',avatar:'https://i.pravatar.cc/30?img=52',rating:5,text:'She planned the most perfect slow itinerary through Kyoto. Not a single rushed moment, yet we saw everything we wanted to see.',trip:'Kyoto Spring',date:'Apr 2023'},
  {author:'Lily W.',avatar:'https://i.pravatar.cc/30?img=44',rating:4,text:'Very easy to communicate with. Flexible when plans changed and always had a backup idea ready.',trip:'Bali & Lombok',date:'Feb 2023'},
];

// ─── COMMUNITY COMMENTS ───
const POST_COMMENTS = {
  1: [
    {author:'Marcus C.',avatar:'https://i.pravatar.cc/28?img=11',text:'This is exactly the guide I needed! Did you find the F-roads passable in September?',time:'1h ago'},
    {author:'Sophia R.',avatar:'https://i.pravatar.cc/28?img=44',text:'Bookmarked! I am planning my Ring Road trip for next September.',time:'45m ago'},
    {author:'Jamie K.',avatar:'https://i.pravatar.cc/28?img=47',text:'Yes! The F208 near Landmannalaugar was open until late September. Just check vedur.is daily.',time:'30m ago'},
  ],
  2: [
    {author:'Elena R.',avatar:'https://i.pravatar.cc/28?img=25',text:'1 night is tight but doable if you pre-book. Get to the Uffizi right at opening.',time:'4h ago'},
    {author:'Carlos M.',avatar:'https://i.pravatar.cc/28?img=52',text:'I did 2 nights and still felt rushed honestly. Boboli Gardens alone takes half a day.',time:'3h ago'},
    {author:'Sarah J.',avatar:'https://i.pravatar.cc/28?img=20',text:'Thanks everyone! Going with 2 nights 😊',time:'2h ago'},
  ],
  3: [
    {author:'Marcus C.',avatar:'https://i.pravatar.cc/28?img=11',text:'Please share the Shimokitazawa ramen address! Been looking for this.',time:'Yesterday'},
    {author:'Yuki T.',avatar:'https://i.pravatar.cc/28?img=44',text:'DM me! It is called Fuunji, but get there before 6pm or there is a 45 min wait.',time:'Yesterday'},
    {author:'Diego M.',avatar:'https://i.pravatar.cc/28?img=52',text:'The Koenji curry place — is it the one near the south exit?',time:'18h ago'},
  ],
  4: [
    {author:'Elena R.',avatar:'https://i.pravatar.cc/28?img=25',text:'The Grab tip is SO important. I got scammed by a taxi on day 1 before I knew.',time:'1d ago'},
    {author:'Jamie K.',avatar:'https://i.pravatar.cc/28?img=47',text:'Also — Moneychanger on Jl. Raya Kuta has the best rates in Kuta area.',time:'23h ago'},
  ],
  5: [
    {author:'Marcus C.',avatar:'https://i.pravatar.cc/28?img=11',text:'The Yoshida Shrine tip is gold. Went at 6:30 AM and had it completely to myself.',time:'2d ago'},
    {author:'Sophia R.',avatar:'https://i.pravatar.cc/28?img=44',text:'What time does the Philosophers Path get crowded? Trying to plan around it.',time:'1d ago'},
    {author:'Elena R.',avatar:'https://i.pravatar.cc/28?img=25',text:'After 9 AM it gets busy. 6-7:30 AM is the sweet spot.',time:'18h ago'},
  ],
};

// ─── STATE ───
// ─── STATE ───
let ST = {
  screen: 's-landing',
  comFilter: 'all',
  dnaAnswers: {},
  dnaSec: 0,
  myReviews: [],
  loggedIn: true,  // demo: logged in as Evelyn
  expenses: [
    {cat:'🏨',label:'Maya Ubud Resort (3 nights)',payer:'Alex',total:480,per:120,color:'#fee2e2'},
    {cat:'🚗',label:'Private Driver (2 days)',payer:'Sarah',total:160,per:40,color:'#d1fae5'},
    {cat:'🍽️',label:'Welcome Dinner @ Locavore',payer:'Jordan',total:240,per:60,color:'#fef9c3'},
  ],
  currentRating: 0,
  tripChatMsgs: [
    {me:false,who:'Elena',av:'https://i.pravatar.cc/26?img=25',text:'Hey squad! Just booked my flight 🛫 Arriving DPS Oct 12, 9:30 AM'},
    {me:true,who:'You',av:'',text:'Amazing! Group Wallet is set up — everyone add your $300 contribution 💰'},
    {me:false,who:'Jordan',av:'https://i.pravatar.cc/26?img=7',text:'Just transferred my share. Love that Humming handles the escrow!'},
  ],
  currentChatId: 1,
  tripsFilter: 'upcoming',
  // loggedIn set above
  myVibeType: null,
};

// ─── NAVIGATION ───
function enterApp(screen) {
  pushState(screen || 's-explore');
  document.querySelectorAll('.sc').forEach(s => s.classList.remove('on'));
  document.getElementById('app-nav').classList.add('on');
  const id = screen || 's-explore';
  const el = document.getElementById(id);
  if (el) { el.classList.add('on'); window.scrollTo(0,0); }
  ST.screen = id;
  document.querySelectorAll('.nt').forEach(t => t.classList.remove('on'));
  const map = {
    's-explore':'nt-explore','s-profile':'nt-explore',
    's-community':'nt-community',
    's-trips':'nt-trips','s-trip-detail':'nt-trips',
    's-messages':'nt-messages',
    's-dna':'nt-dna','s-dna-result':'nt-dna',
    's-myprofile':'nt-home',
  };
  const nt = document.getElementById(map[id]);
  if (nt) nt.classList.add('on');
  if (id === 's-explore') renderCards();
  if (id === 's-community') renderCommunity();
  if (id === 's-trips') renderTrips();
  if (id === 's-messages') { renderChatList(); renderChatWindow(ST.currentChatId); }
  if (id === 's-dna') { ST.dnaAnswers = {}; ST.dnaSec = 0; renderDNASec(0); }
  if (id === 's-trip-detail') { tripDetailTab('chat'); renderTripChat(); renderTripExpenses(); }
}
function goLanding() {
  pushState('s-landing');
  document.querySelectorAll('.sc').forEach(s => s.classList.remove('on'));
  document.getElementById('app-nav').classList.remove('on');
  document.getElementById('s-landing').classList.add('on');
  window.scrollTo(0,0);
  renderLandingCarousels();
}
function navTo(id) { enterApp(id); }
function scrollToId(id) { document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); }

// ─── TOAST ───
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.style.display = 'block';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.style.display = 'none', 2800);
}

// ─── MODALS ───
function openModal(id) { document.getElementById(id).classList.add('on'); }
function closeModal(id) { document.getElementById(id).classList.remove('on'); }

// ─── AUTH ───
function doLogin() {
  ST.loggedIn = true;
  setNavLoggedIn();
  closeModal('login-modal');
  toast('Welcome back, ' + MY_PROFILE.firstName + '! 👋');
  if (ST.screen === 's-dna-result' && ST._lastDnaCode) {
    showDNAResult(ST._lastDnaCode, ST._lastDnaNorm);
  }
}
function doSignup() {
  ST.loggedIn = true;
  setNavLoggedIn();
  closeModal('signup-modal');
  toast('Welcome to Humming, ' + MY_PROFILE.firstName + '! 🌍');
  if (ST._lastDnaCode) {
    setTimeout(function(){ showDNAResult(ST._lastDnaCode, ST._lastDnaNorm); }, 400);
  } else {
    setTimeout(function(){ enterApp('s-dna'); }, 1500);
  }
}

// ─── CHIP HELPERS ───
function genderChip(btn) {
  document.querySelectorAll('#gender-chips .chip').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  renderCards();
}
function mbtiChip(btn) {
  if (btn.dataset.m === 'ALL') {
    document.querySelectorAll('#mbti-chips .chip').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
  } else {
    document.querySelector('#mbti-chips [data-m="ALL"]').classList.remove('on');
    btn.classList.toggle('on');
  }
  renderCards();
}
function budgetChip(btn) {
  document.querySelectorAll('[data-b]').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  renderCards();
}

function postCatChip(btn) {
  var parent = document.getElementById('post-cat-chips');
  if (parent) parent.querySelectorAll('.chip').forEach(function(b){ b.classList.remove('on'); });
  btn.classList.add('on');
}

// ─── COMPANION BOARD ───
function renderCards() {
  const q = (document.getElementById('search-input')?.value || '').toLowerCase();
  const dest = (document.getElementById('f-dest')?.value || '').toLowerCase();
  const genderEl = document.querySelector('#gender-chips .chip.on');
  const gender = genderEl?.dataset.g || 'all';
  const activeMBTI = [...document.querySelectorAll('#mbti-chips .chip.on')].map(b => b.dataset.m).filter(m => m !== 'ALL');
  const budgetEl = document.querySelector('[data-b].on');
  const budget = budgetEl?.dataset.b || 'mid';

  const filtered = COMPANIONS.filter(c => {
    const mQ = !q || c.name.toLowerCase().includes(q) || c.city.toLowerCase().includes(q) || c.tags.some(t => t.toLowerCase().includes(q));
    const mD = !dest || c.city.toLowerCase().includes(dest) || c.country.toLowerCase().includes(dest);
    const mG = gender === 'all' || c.gender === gender;
    const mM = activeMBTI.length === 0 || activeMBTI.includes(c.dna);
    const mB = c.budget === budget || budget === 'mid';
    return mQ && mD && mG && mM && mB;
  });

  const cc = document.getElementById('card-count');
  if (cc) cc.innerHTML = `Showing <b>${filtered.length}</b> available companions`;

  const grid = document.getElementById('companion-grid');
  if (!grid) return;

  grid.innerHTML = filtered.map(c => {
    const vt = VIBE_TYPES[c.dna] || {};
    const tags = c.tags.map(t => `<span style="background:#f1f5f9;color:#64748b;font-size:10px;font-weight:600;padding:2px 7px;border-radius:5px;">${t}</span>`).join('');
    return `
      <div class="ccard fu">
        <div style="height:220px;position:relative;overflow:hidden;background:#f1f5f9;">
          <img src="${c.img}" alt="${c.name}" style="width:100%;height:100%;object-fit:cover;" loading="lazy"/>
          <div style="position:absolute;top:10px;left:10px;background:rgba(16,185,129,.9);color:#fff;padding:4px 9px;border-radius:7px;font-size:11px;font-weight:800;">⚡ ${c.match}% MATCH</div>
          <button style="position:absolute;top:10px;right:10px;width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,.9);border:none;cursor:pointer;font-size:14px;" onclick="event.stopPropagation();this.style.color='#ef4444'">🤍</button>
          <div style="position:absolute;bottom:10px;left:12px;">
            <div style="font-size:18px;font-weight:900;color:#fff;text-shadow:0 1px 4px rgba(0,0,0,.5);">${c.name}, ${c.age} ${c.verified ? '✓' : ''}</div>
            <div style="display:flex;gap:5px;margin-top:3px;">
              <span style="font-size:10px;font-weight:700;background:rgba(255,255,255,.85);padding:2px 7px;border-radius:5px;color:#1e293b;">${c.dna}</span>
              <span style="font-size:11px;color:rgba(255,255,255,.9);">📍 ${c.city}</span>
            </div>
          </div>
        </div>
        <div style="padding:14px;">
          <div style="display:flex;align-items:center;gap:5px;margin-bottom:6px;">
            ${c.verified ? '<span class="vbadge">✓ Verified</span>' : ''}
            <span style="font-size:11px;color:#f59e0b;font-weight:700;margin-left:auto;">★ ${c.rating} (${c.reviews})</span>
          </div>
          <p style="font-size:12px;color:#64748b;line-height:1.55;margin-bottom:8px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${c.desc}</p>
          <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:10px;">${tags}</div>
          <button class="bp w-full" onclick="openProfile(${c.id})">View Profile →</button>
        </div>
      </div>`;
  }).join('');
}

function resetFilters() {
  const si = document.getElementById('search-input'); if (si) si.value = '';
  const fd = document.getElementById('f-dest'); if (fd) fd.value = '';
  document.querySelectorAll('#gender-chips .chip').forEach(b => b.classList.remove('on'));
  document.querySelector('#gender-chips [data-g="all"]')?.classList.add('on');
  document.querySelectorAll('#mbti-chips .chip').forEach(b => b.classList.remove('on'));
  document.querySelector('#mbti-chips [data-m="ALL"]')?.classList.add('on');
  renderCards();
}

function openProfile(id) {
  var c = COMPANIONS.find(function(x){ return x.id === id; });
  if (!c) return;
  var vt = VIBE_TYPES[c.dna] || {};
  var _s = function(elId, val) { var e = document.getElementById(elId); if (e) e.textContent = val; };
  var av = document.getElementById('p-avatar'); if (av) av.src = c.img;
  _s('p-name', c.name + (c.verified ? ' ✓' : ''));
  var pc = document.getElementById('p-city');
  if (pc) { var sp = pc.querySelector('span'); if (sp) sp.textContent = c.city + ', ' + c.country; else pc.textContent = '📍 ' + c.city + ', ' + c.country; }
  _s('p-trips', c.reviews + 2);
  _s('p-rating', c.rating + ' ★');
  _s('p-response', '98%');
  _s('p-match-pct', c.match + '%');
  _s('p-firstname', c.name);
  _s('p-dna-code', c.dna);
  _s('p-dna-tagline', '"' + (vt.name || '') + '"');
  _s('p-dna-desc', vt.desc || '');
  _s('review-count', c.reviews + ST.myReviews.length);

  // Update MBTI-style axis bars based on DNA type
  var axisMap = {
    'PECS':{pf:70,cx:65,oi:75,el:70}, 'PECX':{pf:72,cx:70,oi:35,el:68},
    'FLCX':{pf:30,cx:70,oi:35,el:30}, 'GLOW':{pf:35,cx:55,oi:50,el:30},
    'FECS':{pf:25,cx:60,oi:80,el:75}, 'FEXI':{pf:20,cx:30,oi:50,el:75},
    'PLXS':{pf:65,cx:35,oi:65,el:35}, 'FECS':{pf:25,cx:55,oi:75,el:70},
  };
  var axes = axisMap[c.dna] || {pf:50,cx:50,oi:50,el:50};

  function setBar(n, lpct) {
    var rpct = 100 - lpct;
    var lb = document.getElementById('p-bar'+n); if (lb) lb.style.width = lpct+'%';
    var rb = document.getElementById('p-bar'+n+'r'); if (rb) rb.style.width = rpct+'%';
    _s('p-bar'+n+'-lpct', lpct+'%');
    _s('p-bar'+n+'-rpct', rpct+'%');
    // Bold the dominant side
    var ll = document.getElementById('p-bar'+n+'-left');
    var rl = document.getElementById('p-bar'+n+'-right');
    if (ll) ll.style.fontWeight = lpct >= 50 ? '900' : '500';
    if (rl) rl.style.fontWeight = lpct < 50 ? '900' : '500';
  }
  setBar(1, axes.pf);   // P vs F
  setBar(2, axes.cx);   // C vs X
  setBar(3, axes.oi);   // O vs I
  setBar(4, axes.el);   // E vs L

  renderProfileReviews();
  navTo('s-profile');
}

function renderProfileReviews() {
  const all = [...ALL_REVIEWS, ...ST.myReviews];
  const c = document.getElementById('reviews-container');
  if (!c) return;
  c.innerHTML = all.map(r =>
    '<div class="rv-card"><div style="display:flex;align-items:center;gap:8px;margin-bottom:7px;"><img src="'+r.avatar+'" style="width:30px;height:30px;border-radius:50%;" alt=""/>'
    +'<div style="flex:1;"><div style="font-weight:700;font-size:12px;">'+r.author+'</div>'
    +'<div style="color:#f59e0b;font-size:13px;">'+'★'.repeat(r.rating)+'☆'.repeat(5-r.rating)+'</div></div>'
    +'<span style="font-size:10px;color:#94a3b8;">'+(r.date||'Just now')+'</span></div>'
    +'<p style="font-size:13px;color:#374151;line-height:1.6;font-style:italic;">"'+r.text+'"</p>'
    +(r.trip?'<div style="font-size:10px;color:#94a3b8;margin-top:5px;">📍 '+r.trip+'</div>':'')
    +'</div>'
  ).join('');
}

// ─── AI MATCH ───
async function runAIMatch() {
  var ld = document.getElementById('ai-loading');
  var rb = document.getElementById('ai-result-box');
  var rt = document.getElementById('ai-result-text');
  if (ld) ld.style.display = 'flex';
  if (rb) rb.style.display = 'none';

  // Show animated match cards
  var box = document.getElementById('ai-result-box');
  var txt = document.getElementById('ai-result-text');

  try {
    var res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 250,
        messages: [{role:'user', content:'You are a travel companion matching AI. The user is Evelyn (FLCX type: Flaneur - spontaneous, leisurely, culture-loving, introverted). Recommend exactly 2 companions from this list with a specific, warm reason for each (1 sentence each). List: Elena FLCX 98% Barcelona photographer, Marcus PECS 92% Oslo hiker, Sophia PECX 85% Rome art-lover, Yuki PLXS 76% Tokyo local. Format: [Name]|[reason]|[match%] on two lines, nothing else.'}]
      })
    });
    var data = await res.json();
    var rawText = (data.content && data.content[0]) ? data.content[0].text : '';
    var lines = rawText.trim().split('\n').filter(function(l){ return l.trim(); });
    var picks = [];
    lines.forEach(function(line) {
      var parts = line.split('|');
      if (parts.length >= 2) picks.push({name: parts[0].trim(), reason: parts[1].trim(), pct: parts[2] ? parts[2].trim() : ''});
    });
    if (picks.length === 0) picks = [{name:'Elena',reason:'Your shared FLCX type means you will both spend hours in one cafe and never feel it is wasted.',pct:'98%'},{name:'Yuki',reason:'A Tokyo local who knows every aesthetic hidden spot that no travel guide mentions.',pct:'76%'}];
    renderAIMatchCards(picks);
  } catch(e) {
    renderAIMatchCards([
      {name:'Elena',reason:'Your shared FLCX type means you will both happily spend hours in one cafe and never feel rushed.',pct:'98%'},
      {name:'Yuki',reason:'A Tokyo local who unlocks every hidden aesthetic spot that no guidebook mentions.',pct:'76%'}
    ]);
  }

  if (ld) ld.style.display = 'none';
}

function renderAIMatchCards(picks) {
  var box = document.getElementById('ai-result-box');
  if (!box) return;

  var nameToCompanion = {};
  COMPANIONS.forEach(function(c){ nameToCompanion[c.name] = c; });

  var cardsHTML = '<div style="background:linear-gradient(135deg,#ecfdf5,#d1fae5);border-radius:14px;padding:16px;margin-bottom:4px;">';
  cardsHTML += '<div style="display:flex;align-items:center;gap:6px;margin-bottom:12px;">';
  cardsHTML += '<div style="width:8px;height:8px;border-radius:50%;background:#10b981;animation:pulse 1.2s infinite;"></div>';
  cardsHTML += '<span style="font-size:11px;font-weight:800;color:#059669;text-transform:uppercase;letter-spacing:1px;">&#10022; AI Recommendations for You</span>';
  cardsHTML += '</div>';
  cardsHTML += '<div style="display:flex;gap:12px;flex-wrap:wrap;">';

  picks.forEach(function(pick, i) {
    var c = nameToCompanion[pick.name] || COMPANIONS[i] || COMPANIONS[0];
    cardsHTML += '<div class="pi" style="flex:1;min-width:200px;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #a7f3d0;box-shadow:0 4px 16px rgba(16,185,129,.12);animation-delay:'+(i*0.15)+'s;">';
    cardsHTML += '<div style="position:relative;height:120px;overflow:hidden;">';
    cardsHTML += '<img src="'+c.img+'" style="width:100%;height:100%;object-fit:cover;" loading="lazy"/>';
    cardsHTML += '<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.5),transparent);"></div>';
    cardsHTML += '<div style="position:absolute;top:8px;left:8px;background:rgba(16,185,129,.9);color:#fff;padding:3px 8px;border-radius:6px;font-size:11px;font-weight:800;">&#9889; '+(pick.pct||c.match+'%')+' MATCH</div>';
    cardsHTML += '<div style="position:absolute;bottom:8px;left:10px;color:#fff;"><div style="font-size:14px;font-weight:800;">'+c.name+', '+c.age+'</div>';
    cardsHTML += '<div style="font-size:10px;opacity:.85;">'+c.dna+' &bull; 📍 '+c.city+'</div></div>';
    cardsHTML += '</div>';
    cardsHTML += '<div style="padding:10px 12px;">';
    cardsHTML += '<p style="font-size:12px;color:#374151;line-height:1.5;margin-bottom:8px;">'+pick.reason+'</p>';
    cardsHTML += '<button class="bp" style="width:100%;padding:8px;font-size:12px;" onclick="openProfile('+c.id+')">View Profile &#8594;</button>';
    cardsHTML += '</div></div>';
  });

  cardsHTML += '</div></div>';
  box.innerHTML = cardsHTML;
  box.style.display = 'block';
}


function getFallbackMatch() {
  return '⚡ <b>Top pick: Elena (98%)</b> — You share the same FLCX Flaneur type, meaning you\'ll both happily spend hours in one cafe and never feel like it\'s wasted time. <b>Yuki (76%)</b> is a Tokyo local who\'ll unlock the hidden spots no map shows you.';
}

// ─── COMMUNITY ───
function filterCom(cat, btn) {
  ST.comFilter = cat;
  document.querySelectorAll('#s-community .chip[data-cat]').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  renderCommunity();
}

function renderCommunity() {
  var grid = document.getElementById('community-grid');
  if (!grid) return;
  var filtered = ST.comFilter === 'all' ? POSTS_DATA : POSTS_DATA.filter(function(p){ return p.cat === ST.comFilter; });
  var html = '';
  filtered.forEach(function(p) {
    var m = CATMETA[p.cat] || CATMETA.tips;
    var aiTag = p.aiMatch ? '<div style="display:inline-flex;align-items:center;gap:4px;background:linear-gradient(135deg,#7c3aed,#4f46e5);color:#fff;padding:2px 8px;border-radius:99px;font-size:9px;font-weight:700;margin-bottom:6px;">&#10022; AI Pick for You</div>' : '';
    var cover = '';
    if (p.img) {
      cover = '<div style="height:160px;position:relative;overflow:hidden;">'
        + '<img src="'+p.img+'" style="width:100%;height:100%;object-fit:cover;" loading="lazy"/>'
        + '<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.6),transparent);"></div>'
        + '<div style="position:absolute;bottom:10px;left:12px;right:12px;">'+aiTag
        + '<h3 style="font-size:13px;font-weight:800;color:#fff;line-height:1.3;text-shadow:0 1px 3px rgba(0,0,0,.5);">'+p.title+'</h3>'
        + '</div></div>';
    } else {
      cover = '<div style="height:110px;background:linear-gradient(135deg,#0f172a,#334155);padding:12px;display:flex;flex-direction:column;justify-content:flex-end;">'+aiTag
        + '<h3 style="font-size:13px;font-weight:800;color:#fff;line-height:1.3;">'+p.title+'</h3></div>';
    }
    html += '<div class="post-card fu" onclick="openPostDetail('+p.id+')">';
    html += cover;
    html += '<div style="padding:13px;">';
    html += '<div style="margin-bottom:7px;display:flex;align-items:center;gap:6px;">'
      + '<span style="padding:3px 10px;border-radius:99px;font-size:10px;font-weight:800;background:'+m.bg+';color:'+m.col+';">'+m.lbl+'</span>'
      + '<span style="font-size:10px;color:#94a3b8;">📍 '+p.dest+'</span>'
      + '</div>';
    html += '<p style="font-size:12px;color:#64748b;line-height:1.55;margin-bottom:9px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">'+p.body+'</p>';
    html += '<div style="display:flex;align-items:center;gap:6px;border-top:1px solid #f1f5f9;padding-top:8px;">'
      + '<img src="'+p.avatar+'" style="width:22px;height:22px;border-radius:50%;border:1.5px solid #e2e8f0;" alt=""/>'
      + '<span style="font-size:11px;font-weight:700;">'+p.author+'</span>'
      + '<span style="font-size:10px;color:#94a3b8;margin-left:auto;">'+p.time+'</span>'
      + '<span style="font-size:11px;color:#94a3b8;">♥ '+p.likes+'</span>'
      + '<span style="font-size:11px;color:#94a3b8;margin-left:4px;">💬 '+p.comments+'</span>'
      + '</div></div></div>';
  });
  grid.innerHTML = html;
}

function openPostDetail(id) {
  const p = POSTS_DATA.find(function(x){ return x.id === id; });
  if (!p) return;
  const m = CATMETA[p.cat] || CATMETA.tips;
  const comments = POST_COMMENTS[id] || [];

  let html = '<div class="modal-box" style="max-width:620px;">';
  // Header
  html += '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;">';
  html += '<div style="flex:1;padding-right:12px;">';
  html += '<span style="display:inline-block;padding:3px 10px;border-radius:99px;font-size:10px;font-weight:800;background:'+m.bg+';color:'+m.col+';margin-bottom:9px;">'+m.lbl+'</span>';
  html += '<h2 style="font-size:18px;font-weight:900;color:#0f172a;line-height:1.3;margin-bottom:9px;">'+p.title+'</h2>';
  html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;">';
  html += '<img src="'+p.avatar+'" style="width:26px;height:26px;border-radius:50%;"/>';
  html += '<span style="font-size:12px;font-weight:700;">'+p.author+'</span>';
  html += '<span style="font-size:11px;color:#94a3b8;">📍 '+p.dest+' · '+p.time+'</span>';
  html += '</div></div>';
  html += '<button id="post-modal-close" style="background:none;border:none;cursor:pointer;font-size:22px;color:#94a3b8;flex-shrink:0;">✕</button>';
  html += '</div>';
  // Cover
  html += '<div style="background:'+p.ig+';height:140px;border-radius:14px;margin-bottom:16px;"></div>';
  // Body
  html += '<p style="font-size:14px;color:#374151;line-height:1.75;margin-bottom:16px;">'+p.body+'</p>';
  // Tags
  html += '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:20px;">';
  p.tags.forEach(function(t){ html += '<span style="padding:4px 11px;border-radius:99px;font-size:12px;font-weight:700;border:1.5px solid #e2e8f0;background:#fff;">#'+t+'</span>'; });
  html += '</div>';
  // Actions
  html += '<div style="display:flex;gap:10px;padding-bottom:16px;border-bottom:2px solid #f1f5f9;margin-bottom:20px;">';
  html += '<button class="bp" style="flex:1;justify-content:center;padding:10px;" onclick="toast(\'Saved!\')" >📌 Save</button>';
  html += '<button class="bo" style="flex:1;justify-content:center;padding:10px;" onclick="toast(\'Link copied!\')" >📤 Share</button>';
  html += '</div>';
  // Comments
  html += '<div style="font-weight:800;font-size:15px;margin-bottom:14px;">💬 Comments ('+comments.length+')</div>';
  comments.forEach(function(c){
    html += '<div style="display:flex;gap:10px;margin-bottom:14px;">';
    html += '<img src="'+c.avatar+'" style="width:30px;height:30px;border-radius:50%;flex-shrink:0;"/>';
    html += '<div style="background:#f8fafc;border-radius:12px 12px 12px 4px;padding:11px 14px;flex:1;">';
    html += '<div style="display:flex;justify-content:space-between;margin-bottom:4px;">';
    html += '<span style="font-weight:700;font-size:12px;">'+c.author+'</span>';
    html += '<span style="font-size:10px;color:#94a3b8;">'+c.time+'</span></div>';
    html += '<p style="font-size:13px;color:#374151;line-height:1.5;">'+c.text+'</p>';
    html += '</div></div>';
  });
  // Add comment
  html += '<div style="display:flex;gap:8px;margin-top:16px;">';
  html += '<input class="fi" style="flex:1;font-size:13px;padding:10px 13px;" placeholder="Add a comment..." id="comment-input-'+id+'"/>';
  html += '<button class="bp" style="padding:10px 16px;" id="comment-btn-'+id+'">Post</button>';
  html += '</div>';
  html += '</div>';

  const modal = document.getElementById('post-detail-modal');
  if (!modal) return;
  modal.innerHTML = html;
  openModal('post-detail-modal');

  // Wire up buttons after DOM insert
  const closeBtn = document.getElementById('post-modal-close');
  if (closeBtn) closeBtn.onclick = function(){ closeModal('post-detail-modal'); };
  const commentBtn = document.getElementById('comment-btn-'+id);
  if (commentBtn) commentBtn.onclick = function(){ addComment(id); };
  const inp = document.getElementById('comment-input-'+id);
  if (inp) inp.onkeydown = function(e){ if(e.key==='Enter') addComment(id); };
}

function addComment(postId) {
  const inp = document.getElementById('comment-input-'+postId);
  const txt = inp ? inp.value.trim() : '';
  if (!txt) return;
  if (!POST_COMMENTS[postId]) POST_COMMENTS[postId] = [];
  POST_COMMENTS[postId].push({author:'Evelyn K.',avatar:MY_PROFILE.avatar,text:txt,time:'just now'});
  const p = POSTS_DATA.find(function(x){ return x.id === postId; });
  if (p) p.comments++;
  openPostDetail(postId);
}

function addComment(postId) {
  const inp = document.getElementById('comment-input');
  const txt = inp ? inp.value.trim() : '';
  if (!txt) return;
  if (!POST_COMMENTS[postId]) POST_COMMENTS[postId] = [];
  POST_COMMENTS[postId].push({author:'Evelyn K.',avatar:MY_PROFILE.avatar,text:txt,time:'just now'});
  const p = POSTS_DATA.find(x => x.id === postId);
  if (p) p.comments++;
  inp.value = '';
  openPostDetail(postId);
}

function submitPost() {
  const title = document.getElementById('post-title')?.value.trim();
  const body = document.getElementById('post-content')?.value.trim();
  const dest = document.getElementById('post-dest')?.value.trim() || 'Anywhere';
  if (!title || !body) { toast('Please fill in title and content!'); return; }
  const catEl = document.querySelector('#post-cat-chips .chip.on');
  const cat = catEl?.dataset.pc || 'tips';
  POSTS_DATA.unshift({id:Date.now(),cat,dest,title,body,author:'You',atype:'FLCX',avatar:'https://i.pravatar.cc/34?img=47',time:'just now',likes:0,comments:0,tags:[],ig:'linear-gradient(135deg,#1e3a5f,#2563eb)',aiMatch:false});
  closeModal('post-modal');
  renderCommunity();
  toast('Post published! 🚀');
  document.getElementById('post-title').value = '';
  document.getElementById('post-content').value = '';
}

// ─── REVIEW ───
function setRating(v) {
  ST.currentRating = v;
  document.querySelectorAll('#rating-stars-wrap .star').forEach((s, i) => s.classList.toggle('on', i < v));
}
function submitReview() {
  const text = document.getElementById('review-text')?.value.trim();
  const trip = document.getElementById('review-trip')?.value.trim() || 'Humming Trip';
  if (!text) { toast('Please write your review!'); return; }
  if (!ST.currentRating) { toast('Please select a star rating!'); return; }
  ST.myReviews.unshift({author:'You',avatar:'https://i.pravatar.cc/30?img=47',rating:ST.currentRating,text,trip,date:'Just now'});
  renderProfileReviews();
  closeModal('review-modal');
  toast('Review submitted! 🌟');
  document.getElementById('review-text').value = '';
  setRating(0);
}

// ─── TRIPS ───
function renderTrips() {
  const grid = document.getElementById('trips-grid');
  if (!grid) return;
  const filtered = TRIPS_DATA.filter(t => t.status === ST.tripsFilter || (ST.tripsFilter === 'upcoming' && t.status === 'upcoming'));
  grid.innerHTML = filtered.length ? filtered.map(t => {
    const pct = Math.round((t.spent / t.budget) * 100) || 0;
    const statusBadge = t.status === 'upcoming' ? '<span style="background:#ecfdf5;color:#059669;padding:2px 8px;border-radius:99px;font-size:10px;font-weight:700;">Upcoming</span>' :
      '<span style="background:#fef9c3;color:#b45309;padding:2px 8px;border-radius:99px;font-size:10px;font-weight:700;">Planning</span>';
    return `
      <div class="ccard cursor-pointer" onclick="openTrip(${t.id})">
        <div style="height:160px;position:relative;overflow:hidden;">
          <img src="${t.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy"/>
          <div style="position:absolute;top:10px;left:10px;">${statusBadge}</div>
          <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(0,0,0,.7),transparent);padding:14px;">
            <div style="font-size:16px;font-weight:800;color:#fff;">${t.name}</div>
            <div style="font-size:11px;color:rgba(255,255,255,.8);">📍 ${t.dest}</div>
          </div>
        </div>
        <div style="padding:14px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
            <span style="font-size:12px;color:#64748b;">📅 ${t.dates}</span>
            <span style="font-size:12px;color:#64748b;">👥 ${t.members} members</span>
          </div>
          ${t.spent > 0 ? `<div style="margin-bottom:4px;"><div style="display:flex;justify-content:space-between;font-size:11px;color:#64748b;margin-bottom:3px;"><span>Budget</span><span>$${t.spent} / $${t.budget}</span></div><div class="pbar"><div class="pfill" style="width:${pct}%"></div></div></div>` : ''}
          <button class="bp w-full mt-2 text-sm" onclick="event.stopPropagation();openTrip(${t.id})">Open Trip →</button>
        </div>
      </div>`;
  }).join('') : '<div class="col-span-3 text-center text-slate-400 py-16">No trips yet. <button class="text-emerald-500 font-semibold" onclick="openModal(\'new-trip-modal\')">Plan your first trip →</button></div>';
}

function tripsTab(tab) {
  ST.tripsFilter = tab;
  document.querySelectorAll('[id^="tt-"]').forEach(b => b.classList.remove('on'));
  document.getElementById('tt-' + tab)?.classList.add('on');
  renderTrips();
}

function openTrip(id) {
  enterApp('s-trip-detail');
}

function tripDetailTab(tab) {
  ['chat','itin','wallet'].forEach(t => {
    const el = document.getElementById('td-tab-' + t);
    const btn = document.getElementById('td-' + t);
    if (el) el.style.display = t === tab ? (t === 'chat' ? 'flex' : 'block') : 'none';
    if (el && t === 'chat') el.style.flexDirection = 'column';
    if (btn) btn.classList.toggle('on', t === tab);
  });
  if (tab === 'wallet') renderTripExpenses();
  if (tab === 'chat') renderTripChat();
}

function renderTripChat() {
  const msgs = document.getElementById('trip-chat-msgs');
  if (!msgs) return;
  msgs.innerHTML = '';
  ST.tripChatMsgs.forEach(m => {
    const el = document.createElement('div');
    if (m.me) {
      el.style.cssText = 'display:flex;flex-direction:column;align-items:flex-end;gap:2px;';
      el.innerHTML = `<div class="bm">${m.text}</div>`;
    } else {
      el.style.cssText = 'display:flex;align-items:flex-end;gap:7px;';
      el.innerHTML = `${m.av ? `<img src="${m.av}" style="width:22px;height:22px;border-radius:50%;flex-shrink:0;"/>` : ''}<div class="bt">${m.text}</div>`;
    }
    msgs.appendChild(el);
  });
  msgs.scrollTop = msgs.scrollHeight;
}

function sendTripChat() {
  const inp = document.getElementById('trip-chat-input');
  const txt = inp?.value.trim();
  if (!txt) return;
  ST.tripChatMsgs.push({me:true,who:'You',av:'',text:txt});
  renderTripChat();
  inp.value = '';
  setTimeout(() => {
    const replies = ['Got it! 🗺️', 'Sounds good, adding to the plan!', 'Elena: Love it! Should we vote on this?', 'Jordan: +1 from me!'];
    ST.tripChatMsgs.push({me:false,who:'Elena',av:'https://i.pravatar.cc/26?img=25',text:replies[Math.floor(Math.random()*replies.length)]});
    renderTripChat();
  }, 1200);
}

function renderTripExpenses() {
  const list = document.getElementById('td-expense-list');
  if (!list) return;
  list.innerHTML = ST.expenses.map(e =>
    `<div style="background:#fff;border-radius:12px;padding:12px;border:1px solid #e2e8f0;display:flex;align-items:center;gap:10px;">
      <div style="width:32px;height:32px;background:${e.color};border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;">${e.cat}</div>
      <div style="flex:1;"><div style="font-weight:700;font-size:12px;">${e.label}</div><div style="font-size:10px;color:#94a3b8;">Paid by ${e.payer}</div></div>
      <div style="text-align:right;"><div style="font-weight:800;font-size:13px;">$${e.total.toFixed(2)}</div><div style="font-size:10px;color:#64748b;">$${e.per.toFixed(2)}/person</div></div>
    </div>`
  ).join('');
}

function submitExpense() {
  const desc = document.getElementById('exp-desc')?.value.trim();
  const amt = parseFloat(document.getElementById('exp-amount')?.value);
  if (!desc || !amt || amt <= 0) { toast('Please enter a valid description and amount.'); return; }
  const catEl = document.querySelector('#exp-cat-chips .chip.on');
  const cats = {accommodation:'🏨',transport:'🚗',food:'🍜',activity:'🎭'};
  const cat = cats[catEl?.dataset.ec] || '📦';
  ST.expenses.push({cat,label:desc,payer:'You',total:amt,per:Math.round(amt/4*100)/100,color:'#f1f5f9'});
  renderTripExpenses();
  closeModal('expense-modal');
  toast(`$${amt.toFixed(2)} logged — split $${(amt/4).toFixed(2)}/person 💸`);
  if (document.getElementById('exp-desc')) document.getElementById('exp-desc').value = '';
  if (document.getElementById('exp-amount')) document.getElementById('exp-amount').value = '';
}

function createTrip() {
  const name = document.getElementById('nt-name')?.value.trim();
  const dest = document.getElementById('nt-dest')?.value.trim();
  if (!name) { toast('Please enter a trip name!'); return; }
  TRIPS_DATA.unshift({id:Date.now(),name,dest:dest||'TBD',dates:'TBD',status:'planning',members:1,img:'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80',budget:0,spent:0});
  closeModal('new-trip-modal');
  renderTrips();
  toast('Trip created! 🗺️ Start inviting companions.');
}

// ─── MESSAGES ───
function renderChatList() {
  const list = document.getElementById('chat-list-items');
  if (!list) return;
  list.innerHTML = CHAT_CONTACTS.map(c =>
    `<div class="flex items-center gap-3 p-4 cursor-pointer hover:bg-slate-50 border-b border-slate-100 transition-colors ${c.id === ST.currentChatId ? 'bg-emerald-50 border-l-4 border-l-emerald-500' : ''}" onclick="selectChat(${c.id})">
      <div class="relative flex-shrink-0">
        <img src="${c.avatar}" class="w-10 h-10 rounded-full object-cover"/>
        ${c.online ? '<div class="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white"></div>' : ''}
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex justify-between items-center">
          <span class="font-bold text-sm truncate">${c.name}</span>
          <span class="text-xs text-slate-400 flex-shrink-0">${c.time}</span>
        </div>
        <div class="text-xs text-slate-500 truncate">${c.lastMsg}</div>
      </div>
      ${c.unread ? `<span class="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">${c.unread}</span>` : ''}
    </div>`
  ).join('');
}

function selectChat(id) {
  ST.currentChatId = id;
  renderChatList();
  renderChatWindow(id);
  // Mobile only: hide list, show chat
  if (window.innerWidth < 768) {
    document.getElementById('messages-list-panel')?.classList.add('hidden');
    document.getElementById('messages-chat-panel')?.classList.remove('hidden');
  }
  // Desktop: both stay visible - just re-render chat window
}

function showChatList() {
  document.getElementById('messages-list-panel')?.classList.remove('hidden');
  document.getElementById('messages-chat-panel')?.classList.add('hidden');
}

function renderChatWindow(id) {
  const contact = CHAT_CONTACTS.find(c => c.id === id);
  if (!contact) return;
  const pa = document.getElementById('chat-partner-avatar'); if (pa) pa.src = contact.avatar;
  const pn = document.getElementById('chat-partner-name'); if (pn) pn.textContent = contact.name;
  const mb = document.getElementById('chat-match-badge'); if (mb) mb.textContent = `⚡ ${contact.match}% Match`;

  const msgs = document.getElementById('chat-messages');
  if (!msgs) return;
  const history = CHAT_HISTORY_BY_ID[id] || [];
  msgs.innerHTML = history.map(m => m.me
    ? `<div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px;"><div class="bm">${m.text}</div><div style="font-size:10px;color:#94a3b8;">${m.time} ✓✓</div></div>`
    : `<div style="display:flex;align-items:flex-end;gap:8px;"><img src="${contact.avatar}" style="width:24px;height:24px;border-radius:50%;flex-shrink:0;" /><div><div class="bt">${m.text}</div><div style="font-size:10px;color:#94a3b8;margin-top:2px;">${m.time}</div></div></div>`
  ).join('');
  msgs.scrollTop = msgs.scrollHeight;
}

function sendChat() {
  const inp = document.getElementById('chat-input');
  const txt = inp?.value.trim();
  if (!txt) return;
  const id = ST.currentChatId;
  if (!CHAT_HISTORY_BY_ID[id]) CHAT_HISTORY_BY_ID[id] = [];
  const now = new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
  CHAT_HISTORY_BY_ID[id].push({me:true,text:txt,time:now});
  renderChatWindow(id);
  if (inp) inp.value = '';

  setTimeout(() => {
    const contact = CHAT_CONTACTS.find(c => c.id === id);
    const replies = [
      'That sounds amazing! 🌴',
      'Definitely! Let\'s plan this properly.',
      'I\'d love that! What dates work for you?',
      'Great idea — should we use the Group Wallet for this?',
    ];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    CHAT_HISTORY_BY_ID[id].push({me:false,text:reply,time:new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})});
    renderChatWindow(id);
    if (contact) contact.lastMsg = reply;
    renderChatList();
  }, 900 + Math.random() * 600);
}

// ─── TRAVEL VIBE TEST (DNA) ───
function renderDNASec(idx) {
  ST.dnaSec = idx;
  const sec = DNA_SECTIONS[idx];
  const pct = Math.round((idx / DNA_SECTIONS.length) * 100);

  const prog = document.getElementById('dna-progress');
  if (prog) prog.style.width = pct + '%';
  const pctEl = document.getElementById('dna-pct');
  if (pctEl) pctEl.textContent = pct + '%';
  const lbl = document.getElementById('dna-section-lbl');
  if (lbl) lbl.textContent = `Section ${idx + 1} of ${DNA_SECTIONS.length}`;

  // Count answered in current section
  let answered = 0;
  sec.qs.forEach((_, qi) => { if (ST.dnaAnswers[idx + '_' + qi] !== undefined) answered++; });
  const isLast = idx === DNA_SECTIONS.length - 1;

  // Build HTML without re-rendering on each answer
  let html = `<div class="fu">
    <div style="display:inline-flex;align-items:center;gap:7px;padding:5px 14px;border-radius:99px;font-size:11px;font-weight:800;letter-spacing:.8px;text-transform:uppercase;background:${sec.bg};color:${sec.col};margin-bottom:16px;">${sec.pill} ${sec.lbl}</div>
    <h2 style="font-size:22px;font-weight:900;color:#0f172a;margin-bottom:6px;">${sec.intro}</h2>
    <p style="font-size:12px;color:#64748b;margin-bottom:20px;">Rate each statement: <b style="color:#ef4444;">1 = Strongly Disagree</b> → <b style="color:#22c55e;">5 = Strongly Agree</b></p>`;

  sec.qs.forEach((q, qi) => {
    const key = idx + '_' + qi;
    const sel = ST.dnaAnswers[key];
    const answered_row = sel !== undefined;
    html += `<div class="likert-row${answered_row ? ' answered' : ''}" id="lr-${key}">
      <div style="font-size:14px;font-weight:600;color:#1e293b;margin-bottom:12px;line-height:1.5;">${qi + 1}. ${q.q}</div>
      <div style="display:flex;gap:8px;">`;
    for (let v = 1; v <= 5; v++) {
      const cls = sel === v ? 'v' + v : 'u';
      html += `<button class="ls ${cls}" data-sec="${idx}" data-qi="${qi}" data-val="${v}" onclick="pickAnswer(this)">${v}</button>`;
    }
    html += `</div><div style="display:flex;justify-content:space-between;font-size:9px;color:#94a3b8;font-weight:600;margin-top:4px;"><span>✗ Strongly Disagree</span><span>✓ Strongly Agree</span></div></div>`;
  });

  const allAnswered = answered === sec.qs.length;
  html += `<div style="display:flex;justify-content:space-between;align-items:center;margin-top:28px;padding-top:20px;border-top:2px solid #e2e8f0;">
    ${idx > 0 ? `<button class="bg2" onclick="renderDNASec(${idx - 1})">← Back</button>` : '<span></span>'}
    <div style="display:flex;align-items:center;gap:10px;">
      <button class="bp" id="dna-next-btn" style="opacity:${allAnswered ? 1 : 0.5};" onclick="${isLast ? 'finishDNA()' : 'advanceDNA()'}">${isLast ? 'See My Type 🧬' : 'Next →'}</button>
    </div>
  </div></div>`;

  document.getElementById('dna-body').innerHTML = html;
}

function pickAnswer(btn) {
  var sec = parseInt(btn.dataset.sec);
  var qi = parseInt(btn.dataset.qi);
  var val = parseInt(btn.dataset.val);
  var key = sec + '_' + qi;

  ST.dnaAnswers[key] = val;

  // Update just this row's buttons — NO page reload
  var row = document.getElementById('lr-' + key);
  if (row) {
    row.classList.add('answered');
    row.querySelectorAll('.ls').forEach(function(b, i) {
      b.className = 'ls ' + (i + 1 === val ? 'v' + val : 'u');
    });
  }

  // Update progress bar only
  var totalAnswered = Object.keys(ST.dnaAnswers).length;
  var totalQs = DNA_SECTIONS.reduce(function(sum, s){ return sum + s.qs.length; }, 0);
  var pct = Math.round((totalAnswered / totalQs) * 100);
  var prog = document.getElementById('dna-progress'); if (prog) prog.style.width = pct + '%';
  var pctEl = document.getElementById('dna-pct'); if (pctEl) pctEl.textContent = pct + '%';

  // Enable next button when all answered
  var secData = DNA_SECTIONS[sec];
  var answered = 0;
  secData.qs.forEach(function(_, qi2){ if (ST.dnaAnswers[sec + '_' + qi2] !== undefined) answered++; });
  var nextBtn = document.getElementById('dna-next-btn');
  if (nextBtn) nextBtn.style.opacity = answered === secData.qs.length ? '1' : '0.5';
}

function advanceDNA() {
  const sec = DNA_SECTIONS[ST.dnaSec];
  let answered = 0;
  sec.qs.forEach((_, qi) => { if (ST.dnaAnswers[ST.dnaSec + '_' + qi] !== undefined) answered++; });
  if (answered < sec.qs.length && !confirm(`${sec.qs.length - answered} question(s) unanswered. Continue anyway?`)) return;
  renderDNASec(ST.dnaSec + 1);
  document.getElementById('s-dna').querySelector('.max-w-3xl').scrollTop = 0;
}

function calculateTravelDNA(userAnswers) {
  var userScores = { Planning:0, Energy:0, Culture:0, Pacing:0, Photo:0, Social:0, Budget:0 };
  var axisMapping = [
    'Planning','Planning','Planning','Planning',
    'Energy','Energy','Energy','Energy',
    'Culture','Culture','Culture','Culture',
    'Pacing','Pacing','Pacing','Pacing',
    'Photo','Photo','Photo','Photo',
    'Social','Social','Social','Social',
    'Budget','Budget','Budget','Budget'
  ];
  var scoreWeight = {1:-20, 2:-10, 3:0, 4:10, 5:20};
  userAnswers.forEach(function(answerValue, index) {
    var targetAxis = axisMapping[index];
    if (targetAxis && scoreWeight[answerValue] !== undefined) {
      userScores[targetAxis] += scoreWeight[answerValue];
    }
  });
  var archetypes = {
    'THE_COMMANDER':        {Planning:80,Energy:60,Culture:20,Pacing:80,Photo:20,Social:20,Budget:0},
    'THE_WANDERER':         {Planning:-80,Energy:-20,Culture:20,Pacing:-80,Photo:0,Social:40,Budget:-40},
    'THE_HISTORIAN':        {Planning:40,Energy:0,Culture:80,Pacing:-20,Photo:20,Social:-40,Budget:0},
    'THE_PARTY_ANIMAL':     {Planning:-40,Energy:80,Culture:-60,Pacing:40,Photo:60,Social:80,Budget:-20},
    'THE_LUXURY_LOUNGER':   {Planning:20,Energy:-60,Culture:0,Pacing:-60,Photo:60,Social:0,Budget:80},
    'THE_BACKPACKER':       {Planning:-20,Energy:80,Culture:40,Pacing:40,Photo:-20,Social:60,Budget:-80},
    'THE_CONTENT_CREATOR':  {Planning:60,Energy:40,Culture:-20,Pacing:60,Photo:80,Social:20,Budget:40},
    'THE_LOCAL_INSIDER':    {Planning:-60,Energy:20,Culture:60,Pacing:-40,Photo:-20,Social:60,Budget:-20},
    'THE_ZEN_SEEKER':       {Planning:-20,Energy:-80,Culture:40,Pacing:-80,Photo:-40,Social:-60,Budget:20},
    'THE_FOODIE':           {Planning:60,Energy:-20,Culture:60,Pacing:-20,Photo:60,Social:40,Budget:60},
    'THE_ADVENTURER':       {Planning:-40,Energy:80,Culture:0,Pacing:60,Photo:40,Social:40,Budget:-20},
    'THE_CAFE_HOPPER':      {Planning:20,Energy:-40,Culture:-60,Pacing:-60,Photo:80,Social:-20,Budget:20},
    'THE_SHOPAHOLIC':       {Planning:40,Energy:40,Culture:-80,Pacing:40,Photo:40,Social:20,Budget:80},
    'THE_LONE_WOLF':        {Planning:40,Energy:40,Culture:40,Pacing:40,Photo:-40,Social:-80,Budget:-20},
    'THE_SPONTANEOUS_SOUL': {Planning:-80,Energy:60,Culture:-20,Pacing:20,Photo:20,Social:20,Budget:0},
    'THE_CITY_EXPLORER':    {Planning:60,Energy:80,Culture:40,Pacing:80,Photo:40,Social:-20,Budget:20}
  };
  var bestMatch = 'THE_WANDERER';
  var minimumDistance = Infinity;
  Object.keys(archetypes).forEach(function(typeName) {
    var targetScores = archetypes[typeName];
    var currentDistance = 0;
    Object.keys(userScores).forEach(function(axis) {
      currentDistance += Math.abs(userScores[axis] - targetScores[axis]);
    });
    if (currentDistance < minimumDistance) {
      minimumDistance = currentDistance;
      bestMatch = typeName;
    }
  });
  return { code: bestMatch, scores: userScores };
}

// Archetype display metadata
var ARCHETYPE_META = {
  'THE_COMMANDER':       {emoji:'⚔️',name:'The Commander',color:'#dc2626',desc:'You are the trip architect. Detailed plans, decisive calls, and zero wasted time. Every journey runs like a mission.'},
  'THE_WANDERER':        {emoji:'🌊',name:'The Wanderer',color:'#0ea5e9',desc:'Structure is your enemy. You follow instincts, stumble into magic, and write the plan after you live it.'},
  'THE_HISTORIAN':       {emoji:'🏛️',name:'The Historian',color:'#7c3aed',desc:'Every site has a story and you know it. Museums, ruins, context — you travel to understand, not just see.'},
  'THE_PARTY_ANIMAL':    {emoji:'🪩',name:'The Party Animal',color:'#ec4899',desc:'Sleep is optional. The night is the destination. You find the rooftop, the dance floor, and the sunrise simultaneously.'},
  'THE_LUXURY_LOUNGER':  {emoji:'💎',name:'The Luxury Lounger',color:'#f59e0b',desc:'Thread count matters. You invest in comfort, curated experiences, and the best table in the room.'},
  'THE_BACKPACKER':      {emoji:'🎒',name:'The Backpacker',color:'#16a34a',desc:'Hostels, local buses, street food. You squeeze the most out of every dollar and every connection.'},
  'THE_CONTENT_CREATOR': {emoji:'📸',name:'The Content Creator',color:'#f97316',desc:'Golden hour is sacred. Every location is a frame. You travel to capture — and share — the world beautifully.'},
  'THE_LOCAL_INSIDER':   {emoji:'🗝️',name:'The Local Insider',color:'#0d9488',desc:'Tourist traps bore you. You find the neighborhood spot, learn three phrases, and leave with a story only you have.'},
  'THE_ZEN_SEEKER':      {emoji:'🧘',name:'The Zen Seeker',color:'#6366f1',desc:'Stillness is the destination. You travel to disconnect, breathe deeply, and return genuinely restored.'},
  'THE_FOODIE':          {emoji:'🍜',name:'The Foodie',color:'#b45309',desc:'The itinerary IS the restaurant list. Every trip is a culinary expedition with cultural context as the garnish.'},
  'THE_ADVENTURER':      {emoji:'⛰️',name:'The Adventurer',color:'#15803d',desc:'If your heart is not pounding at some point, was it even a trip? You seek the physical, the wild, the alive.'},
  'THE_CAFE_HOPPER':     {emoji:'☕',name:'The Cafe Hopper',color:'#92400e',desc:'Coffee is the compass. Aesthetics are everything. You move slowly between beautiful spaces, phone always nearby.'},
  'THE_SHOPAHOLIC':      {emoji:'🛍️',name:'The Shopaholic',color:'#a21caf',desc:'Local markets, designer districts, vintage finds. Shopping IS the cultural immersion for you.'},
  'THE_LONE_WOLF':       {emoji:'🐺',name:'The Lone Wolf',color:'#334155',desc:'Solo is the default setting. You travel on your schedule, without compromise, and love every second of it.'},
  'THE_SPONTANEOUS_SOUL':{emoji:'⚡',name:'The Spontaneous Soul',color:'#eab308',desc:'Plans are suggestions. You book a one-way ticket and figure the rest out with energy and optimism.'},
  'THE_CITY_EXPLORER':   {emoji:'🏙️',name:'The City Explorer',color:'#0284c7',desc:'Skylines, transit systems, architectural details. You decode urban life wherever you land, fast and thorough.'},
};

// Best/Worst match map per archetype
var ARCHETYPE_COMPAT = {
  'THE_COMMANDER':        {best:['THE_CITY_EXPLORER','THE_CONTENT_CREATOR'],worst:['THE_WANDERER','THE_SPONTANEOUS_SOUL']},
  'THE_WANDERER':         {best:['THE_SPONTANEOUS_SOUL','THE_LOCAL_INSIDER'],worst:['THE_COMMANDER','THE_CITY_EXPLORER']},
  'THE_HISTORIAN':        {best:['THE_LOCAL_INSIDER','THE_ZEN_SEEKER'],worst:['THE_PARTY_ANIMAL','THE_SHOPAHOLIC']},
  'THE_PARTY_ANIMAL':     {best:['THE_SPONTANEOUS_SOUL','THE_BACKPACKER'],worst:['THE_ZEN_SEEKER','THE_LONE_WOLF']},
  'THE_LUXURY_LOUNGER':   {best:['THE_FOODIE','THE_CONTENT_CREATOR'],worst:['THE_BACKPACKER','THE_ADVENTURER']},
  'THE_BACKPACKER':       {best:['THE_ADVENTURER','THE_LOCAL_INSIDER'],worst:['THE_LUXURY_LOUNGER','THE_COMMANDER']},
  'THE_CONTENT_CREATOR':  {best:['THE_CAFE_HOPPER','THE_FOODIE'],worst:['THE_ZEN_SEEKER','THE_LONE_WOLF']},
  'THE_LOCAL_INSIDER':    {best:['THE_WANDERER','THE_HISTORIAN'],worst:['THE_SHOPAHOLIC','THE_COMMANDER']},
  'THE_ZEN_SEEKER':       {best:['THE_LONE_WOLF','THE_HISTORIAN'],worst:['THE_PARTY_ANIMAL','THE_CITY_EXPLORER']},
  'THE_FOODIE':           {best:['THE_LOCAL_INSIDER','THE_CONTENT_CREATOR'],worst:['THE_ADVENTURER','THE_LONE_WOLF']},
  'THE_ADVENTURER':       {best:['THE_BACKPACKER','THE_SPONTANEOUS_SOUL'],worst:['THE_LUXURY_LOUNGER','THE_ZEN_SEEKER']},
  'THE_CAFE_HOPPER':      {best:['THE_CONTENT_CREATOR','THE_WANDERER'],worst:['THE_COMMANDER','THE_ADVENTURER']},
  'THE_SHOPAHOLIC':       {best:['THE_LUXURY_LOUNGER','THE_PARTY_ANIMAL'],worst:['THE_LONE_WOLF','THE_BACKPACKER']},
  'THE_LONE_WOLF':        {best:['THE_ZEN_SEEKER','THE_HISTORIAN'],worst:['THE_PARTY_ANIMAL','THE_BACKPACKER']},
  'THE_SPONTANEOUS_SOUL': {best:['THE_WANDERER','THE_PARTY_ANIMAL'],worst:['THE_COMMANDER','THE_HISTORIAN']},
  'THE_CITY_EXPLORER':    {best:['THE_COMMANDER','THE_CONTENT_CREATOR'],worst:['THE_ZEN_SEEKER','THE_WANDERER']},
};

function finishDNA() {
  // Collect answers in order for the new algorithm
  var userAnswers = [];
  var totalQs = DNA_SECTIONS.reduce(function(s,sec){ return s + sec.qs.length; }, 0);
  
  var secIdx = 0;
  DNA_SECTIONS.forEach(function(sec, si) {
    sec.qs.forEach(function(q, qi) {
      var ans = ST.dnaAnswers[si + '_' + qi] || 3;
      userAnswers.push(ans);
    });
  });
  
  // Pad to 28 if needed
  while (userAnswers.length < 28) userAnswers.push(3);

  var result = calculateTravelDNA(userAnswers);
  var code = result.code;
  var scores = result.scores;
  
  ST.myVibeType = code;
  ST._lastDnaCode = code;
  ST._lastDnaScores = scores;
  showDNAResult(code, scores);
}

function showDNAResult(code, scores) {
  var meta = ARCHETYPE_META[code] || {emoji:'🌊',name:code.replace(/_/g,' ').toLowerCase().replace(/\b\w/g,function(c){return c.toUpperCase();}),color:'#10b981',desc:'A unique traveler with a blend of styles.'};
  var compat = ARCHETYPE_COMPAT[code] || {best:[],worst:[]};
  var loggedIn = ST.loggedIn;

  var AXES = ['Planning','Energy','Culture','Pacing','Photo','Social','Budget'];
  var AXIS_LABELS = {Planning:'Planning',Energy:'Energy',Culture:'Culture Seeking',Pacing:'Pacing',Photo:'Photo/Content',Social:'Social',Budget:'Budget'};
  var AXIS_COLORS = {Planning:'#7c3aed',Energy:'#ea580c',Culture:'#2563eb',Pacing:'#0891b2',Photo:'#db2777',Social:'#059669',Budget:'#b45309'};

  function scoreBar(ax) {
    var val = scores ? (scores[ax] || 0) : 0;
    var pct = Math.round(((val + 80) / 160) * 100);
    var col = AXIS_COLORS[ax] || '#10b981';
    return '<div style="margin-bottom:14px;">'
      +'<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;">'
      +'<span style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:.6px;">'+(AXIS_LABELS[ax]||ax)+'</span>'
      +'<span style="font-size:11px;font-weight:800;color:'+col+';">'+val+'</span>'
      +'</div>'
      +'<div style="height:8px;background:#e2e8f0;border-radius:99px;overflow:hidden;">'
      +'<div style="height:100%;width:'+pct+'%;background:'+col+';border-radius:99px;transition:width .8s ease;"></div>'
      +'</div></div>';
  }

  function compatCard(c, type) {
    var m = ARCHETYPE_META[c] || {emoji:'?',name:c,color:'#64748b',desc:''};
    var bg = type==='best'?'linear-gradient(135deg,#f0fdf4,#dcfce7)':'linear-gradient(135deg,#fff7ed,#fef3c7)';
    var border = type==='best'?'#86efac':'#fcd34d';
    var badge = type==='best'?'Great Match':'Plan Ahead';
    var badgeCol = type==='best'?'#16a34a':'#d97706';
    return '<div style="flex:1;min-width:140px;background:'+bg+';border-radius:14px;padding:16px;border:1.5px solid '+border+';">'
      +'<div style="font-size:26px;margin-bottom:6px;">'+m.emoji+'</div>'
      +'<div style="font-size:11px;font-weight:900;color:'+m.color+';margin-bottom:4px;">'+m.name+'</div>'
      +'<p style="font-size:10px;color:#64748b;line-height:1.4;margin-bottom:8px;">'+m.desc.slice(0,70)+'...</p>'
      +'<span style="font-size:9px;font-weight:800;background:'+badgeCol+';color:#fff;padding:2px 8px;border-radius:99px;">'+badge+'</span>'
      +'</div>';
  }

  // All archetypes grid
  var allCodes = Object.keys(ARCHETYPE_META);
  var allTypesHTML = allCodes.map(function(c) {
    var m = ARCHETYPE_META[c]; var isMe = c === code;
    return '<div style="background:'+(isMe?'linear-gradient(135deg,'+meta.color+'22,'+meta.color+'11)':'#f8fafc')+';border-radius:12px;padding:12px;border:2px solid '+(isMe?meta.color:'transparent')+';cursor:pointer;" title="'+m.name+'">'
      +'<div style="font-size:18px;">'+m.emoji+'</div>'
      +'<div style="font-size:8px;font-weight:900;color:'+m.color+';margin-top:3px;line-height:1.2;">'+m.name.replace('The ','')+'</div>'
      +(isMe?'<div style="margin-top:4px;background:'+meta.color+';color:#fff;font-size:7px;font-weight:800;padding:1px 5px;border-radius:99px;display:inline-block;">YOU</div>':'')
      +'</div>';
  }).join('');

  var body = document.getElementById('dna-result-body');
  if (!body) return;

  var html = '<div style="padding-bottom:60px;">';

  // Back / retake button
  html += '<button class="bg2" id="dna-retake-btn" style="margin-bottom:20px;">&#8592; Retake Test</button>';

  // Hero result card
  html += '<div style="background:linear-gradient(135deg,'+meta.color+'18,'+meta.color+'08);border:2px solid '+meta.color+'30;border-radius:24px;padding:40px;margin-bottom:24px;text-align:center;">';
  html += '<div style="font-size:11px;font-weight:800;color:'+meta.color+';letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;">YOUR TRAVEL ARCHETYPE</div>';
  html += '<div style="font-size:72px;margin-bottom:10px;">'+meta.emoji+'</div>';
  html += '<div style="font-size:clamp(22px,3.5vw,32px);font-weight:900;color:#0f172a;margin-bottom:12px;">'+meta.name+'</div>';
  html += '<p style="font-size:15px;color:#374151;line-height:1.75;max-width:500px;margin:0 auto;">'+meta.desc+'</p>';
  html += '</div>';

  // Lock section for non-logged-in
  if (!loggedIn) {
    html += '<div style="background:linear-gradient(135deg,#0f172a,#1e293b);border-radius:20px;padding:32px;text-align:center;margin-bottom:24px;">';
    html += '<div style="font-size:36px;margin-bottom:12px;">&#128274;</div>';
    html += '<h3 style="color:#fff;font-size:20px;font-weight:900;margin-bottom:8px;">Unlock Your Full Profile</h3>';
    html += '<p style="color:rgba(255,255,255,.6);font-size:14px;margin-bottom:22px;max-width:400px;margin-left:auto;margin-right:auto;line-height:1.7;">See your full axis breakdown, best travel matches, worst matches, and get matched with real travelers who share your archetype.</p>';
    html += '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">';
    html += '<button id="dna-signup-btn" class="bp" style="font-size:15px;padding:13px 28px;">Join Humming Free &#8594;</button>';
    html += '<button id="dna-login-btn" style="background:rgba(255,255,255,.1);color:#fff;border:1.5px solid rgba(255,255,255,.25);padding:12px 20px;border-radius:12px;font-weight:700;font-size:14px;cursor:pointer;font-family:inherit;">Log In</button>';
    html += '</div></div>';
  }

  if (loggedIn) {
    // Detailed description
    html += '<div class="card" style="padding:24px;margin-bottom:20px;">';
    html += '<h3 style="font-weight:900;font-size:17px;margin-bottom:14px;">&#10024; What This Means For You</h3>';
    html += '<p style="font-size:14px;color:#374151;line-height:1.8;margin-bottom:16px;">'+meta.desc+'</p>';
    html += '<div style="background:#f8fafc;border-radius:12px;padding:16px;border-left:4px solid '+meta.color+';margin-bottom:10px;">';
    html += '<div style="font-size:10px;font-weight:800;color:'+meta.color+';text-transform:uppercase;letter-spacing:.8px;margin-bottom:6px;">You travel best when...</div>';
    html += '<p style="font-size:13px;color:#374151;line-height:1.65;">Your natural style comes through when partners respect your approach. Seek out people whose archetype complements, not clashes with, yours.</p>';
    html += '</div></div>';

    // 7-Axis breakdown
    html += '<div class="card" style="padding:24px;margin-bottom:20px;">';
    html += '<h3 style="font-weight:900;font-size:17px;margin-bottom:4px;">&#127994; Your 7-Axis Personality Score</h3>';
    html += '<p style="font-size:12px;color:#94a3b8;margin-bottom:20px;">Based on your answers — higher = stronger lean toward that trait</p>';
    html += AXES.map(function(ax){ return scoreBar(ax); }).join('');
    html += '</div>';

    // Best + Worst matches
    html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">';
    html += '<div class="card" style="padding:20px;">';
    html += '<h3 style="font-weight:900;font-size:14px;margin-bottom:12px;color:#16a34a;">&#10003; Best Travel Matches</h3>';
    html += '<div style="display:flex;gap:8px;flex-wrap:wrap;">'+compat.best.map(function(c){ return compatCard(c,'best'); }).join('')+'</div>';
    html += '</div>';
    html += '<div class="card" style="padding:20px;">';
    html += '<h3 style="font-weight:900;font-size:14px;margin-bottom:12px;color:#dc2626;">&#10007; Worst Travel Matches</h3>';
    html += '<div style="display:flex;gap:8px;flex-wrap:wrap;">'+compat.worst.map(function(c){ return compatCard(c,'worst'); }).join('')+'</div>';
    html += '</div>';
    html += '</div>';
  }

  // All 16 archetypes
  html += '<div class="card" style="padding:20px;margin-bottom:20px;">';
  html += '<h3 style="font-weight:900;font-size:15px;margin-bottom:14px;">All 16 Travel Archetypes</h3>';
  html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(90px,1fr));gap:8px;">'+allTypesHTML+'</div>';
  html += '</div>';

  // Bottom CTA
  html += '<div style="background:linear-gradient(135deg,#0f172a,#1e293b);border-radius:20px;padding:32px;text-align:center;">';
  html += '<div style="font-size:11px;font-weight:800;color:#10b981;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;">&#10022; NEXT STEP</div>';
  html += '<h2 style="font-size:22px;font-weight:900;color:#fff;margin-bottom:8px;">Find your '+meta.name+' companions</h2>';
  html += '<p style="color:rgba(255,255,255,.6);margin-bottom:22px;font-size:13px;">Your archetype is saved. Browse companions matched to your travel style.</p>';
  html += '<button id="dna-browse-btn" class="bp" style="font-size:15px;padding:14px 30px;">Browse Companions &#8594;</button>';
  html += '</div>';
  html += '</div>';

  body.innerHTML = html;
  navTo('s-dna-result');

  // Wire buttons after DOM set
  var retake = document.getElementById('dna-retake-btn');
  if (retake) retake.onclick = function(){ renderDNASec(0); navTo('s-dna'); };
  var browse = document.getElementById('dna-browse-btn');
  if (browse) browse.onclick = function(){ enterApp('s-explore'); };
  var signupBtn = document.getElementById('dna-signup-btn');
  if (signupBtn) signupBtn.onclick = function(){ openModal('signup-modal'); };
  var loginBtn = document.getElementById('dna-login-btn');
  if (loginBtn) loginBtn.onclick = function(){ openModal('login-modal'); };
}

function navToScreen(id) { enterApp(id); }
function showSignupFromResult() {
  closeModal('post-detail-modal');
  openModal('signup-modal');
}
function showLoginFromResult() {
  openModal('login-modal');
}

function setNavLoggedIn() {
  // Update BOTH navs (landing + app)
  ['nav-login-btn'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  var userDiv = document.getElementById('nav-user');
  if (userDiv) userDiv.style.display = 'flex';
  var av = document.getElementById('nav-avatar');
  if (av) av.src = MY_PROFILE.avatar;
  var un = document.getElementById('nav-username');
  if (un) un.textContent = MY_PROFILE.firstName;
  // Hide Join button too, show avatar instead
  document.querySelectorAll('.nav-join-btn').forEach(function(b){ b.style.display='none'; });
}

function renderMyProfile() {
  var nameEls = document.querySelectorAll('.my-profile-name');
  nameEls.forEach(function(el){ el.textContent = MY_PROFILE.name; });
  var avatarEls = document.querySelectorAll('.my-profile-avatar');
  avatarEls.forEach(function(el){ el.src = MY_PROFILE.avatar; });
  // Since loggedIn = true by default, apply logged-in nav state on load
  if (ST.loggedIn) setNavLoggedIn();
}


// ─── HISTORY ROUTING (Back button support) ───
function pushState(screen) {
  if (window.history && window.history.pushState) {
    window.history.pushState({screen: screen}, '', '#' + screen);
  }
}

window.addEventListener('popstate', function(e) {
  var screen = (e.state && e.state.screen) ? e.state.screen : 's-landing';
  if (screen === 's-landing') {
    goLandingNoHistory();
  } else {
    enterAppNoHistory(screen);
  }
});

// Internal nav without pushing new history entry
function enterAppNoHistory(screen) {
  document.querySelectorAll('.sc').forEach(function(s){ s.classList.remove('on'); });
  document.getElementById('app-nav').classList.add('on');
  var el = document.getElementById(screen);
  if (el) { el.classList.add('on'); window.scrollTo(0,0); }
  ST.screen = screen;
  document.querySelectorAll('.nt').forEach(function(t){ t.classList.remove('on'); });
  var map = {
    's-explore':'nt-explore','s-profile':'nt-explore',
    's-community':'nt-community',
    's-trips':'nt-trips','s-trip-detail':'nt-trips',
    's-messages':'nt-messages',
    's-dna':'nt-dna','s-dna-result':'nt-dna',
    's-myprofile':'nt-home',
  };
  var nt = document.getElementById(map[screen]);
  if (nt) nt.classList.add('on');
  if (screen === 's-explore') renderCards();
  if (screen === 's-community') renderCommunity();
  if (screen === 's-trips') renderTrips();
  if (screen === 's-messages') { renderChatList(); renderChatWindow(ST.currentChatId); }
  if (screen === 's-dna') { ST.dnaAnswers = {}; ST.dnaSec = 0; renderDNASec(0); }
  if (screen === 's-trip-detail') { tripDetailTab('chat'); renderTripChat(); renderTripExpenses(); }
}

function goLandingNoHistory() {
  document.querySelectorAll('.sc').forEach(function(s){ s.classList.remove('on'); });
  document.getElementById('app-nav').classList.remove('on');
  document.getElementById('s-landing').classList.add('on');
  window.scrollTo(0,0);
}

// ─── LANDING CAROUSELS ───
function renderLandingCarousels() {
  renderCompanionCarousel();
  renderCommunityCarousel();
  renderTripsCarousel();
}

function makeCard(clickFn, minWidth) {
  var div = document.createElement('div');
  div.style.cssText = 'min-width:'+minWidth+'px;max-width:'+minWidth+'px;background:#fff;border-radius:20px;overflow:hidden;border:1.5px solid #e2e8f0;cursor:pointer;scroll-snap-align:start;box-shadow:0 4px 16px rgba(0,0,0,.06);transition:transform .2s,box-shadow .2s;flex-shrink:0;';
  div.onclick = clickFn;
  div.onmouseover = function(){ this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 32px rgba(0,0,0,.12)'; };
  div.onmouseout = function(){ this.style.transform=''; this.style.boxShadow='0 4px 16px rgba(0,0,0,.06)'; };
  return div;
}

function renderCompanionCarousel() {
  var el = document.getElementById('companion-carousel');
  if (!el) return;
  el.innerHTML = '';

  var cards = [
    {id:1,name:'Elena Rodriguez',flag:'🇪🇸',verified:true,archetype:'The Flaneur',match:98,reply:'< 5 mins',trust:4.9,reviews:18,img:'https://i.pravatar.cc/300?img=25',city:'Barcelona'},
    {id:2,name:'Marcus Chen',flag:'🇳🇴',verified:true,archetype:'The City Explorer',match:94,reply:'< 15 mins',trust:4.8,reviews:12,img:'https://i.pravatar.cc/300?img=11',city:'Oslo'},
    {id:3,name:'Sophia Rossi',flag:'🇮🇹',verified:true,archetype:'The Historian',match:89,reply:'< 30 mins',trust:4.7,reviews:9,img:'https://i.pravatar.cc/300?img=44',city:'Rome'},
    {id:4,name:'Yuki Tanaka',flag:'🇯🇵',verified:true,archetype:'The Local Insider',match:85,reply:'< 10 mins',trust:4.9,reviews:21,img:'https://i.pravatar.cc/300?img=47',city:'Tokyo'},
    {id:5,name:'Jay Kim',flag:'🇰🇷',verified:true,archetype:'The Backpacker',match:82,reply:'< 20 mins',trust:4.6,reviews:7,img:'https://i.pravatar.cc/300?img=68',city:'Seoul'},
    {id:6,name:'Carlos Mendez',flag:'🇲🇽',verified:true,archetype:'The Foodie',match:78,reply:'< 1 hr',trust:4.6,reviews:14,img:'https://i.pravatar.cc/300?img=52',city:'Mexico City'},
  ];

  cards.forEach(function(c) {
    var card = makeCard(function(){ openProfile(c.id); }, 240);

    // Cover image
    var cover = document.createElement('div');
    cover.style.cssText = 'position:relative;height:180px;overflow:hidden;';
    cover.innerHTML = '<img src="'+c.img+'" style="width:100%;height:100%;object-fit:cover;" loading="lazy"/>'
      +'<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55),transparent);"></div>'
      +'<div style="position:absolute;top:10px;left:10px;background:rgba(16,185,129,.92);color:#fff;padding:3px 9px;border-radius:7px;font-size:11px;font-weight:800;">&#9889; '+c.match+'% MATCH</div>'
      +'<div style="position:absolute;bottom:10px;left:12px;">'
      +'<div style="font-size:14px;font-weight:800;color:#fff;">'+c.name+' '+c.flag+(c.verified?' <span style="background:rgba(16,185,129,.9);font-size:9px;padding:1px 5px;border-radius:4px;">&#10003;</span>':'')+'</div>'
      +'<div style="font-size:11px;color:rgba(255,255,255,.8);">&#128205; '+c.city+'</div>'
      +'</div>';

    // Body
    var body = document.createElement('div');
    body.style.cssText = 'padding:14px;';
    body.innerHTML = '<div style="font-size:11px;font-weight:700;color:#10b981;margin-bottom:9px;">'+c.archetype+'</div>'
      +'<div style="display:flex;flex-direction:column;gap:5px;margin-bottom:11px;">'
      +'<div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:#64748b;">&#9889; Match</span><span style="font-weight:800;color:#10b981;">'+c.match+'%</span></div>'
      +'<div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:#64748b;">&#8987; Replies in</span><span style="font-weight:700;color:#0f172a;">'+c.reply+'</span></div>'
      +'<div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:#64748b;">&#11088; Trust Score</span><span style="font-weight:700;color:#0f172a;">'+c.trust+' ('+c.reviews+')</span></div>'
      +'</div>';

    var btn = document.createElement('button');
    btn.style.cssText = 'width:100%;padding:9px;background:#10b981;color:#fff;border:none;border-radius:11px;font-weight:800;font-size:12px;cursor:pointer;font-family:inherit;';
    btn.textContent = 'View Profile →';
    btn.onclick = function(e){ e.stopPropagation(); openProfile(c.id); };

    body.appendChild(btn);
    card.appendChild(cover);
    card.appendChild(body);
    el.appendChild(card);
  });
}

function renderCommunityCarousel() {
  var el = document.getElementById('community-carousel');
  if (!el) return;
  el.innerHTML = '';

  var posts = [
    {id:1,title:'Iceland Ring Road: 7-Day Campervan Guide',cat:'🗺️ Itinerary',dest:'Iceland',author:'Jamie K.',likes:248,img:'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&q=80'},
    {id:3,title:'Tokyo Hidden Local Spots: Forget the Tourist Traps',cat:'🍜 Food & Local',dest:'Tokyo',author:'Yuki T.',likes:412,img:'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80'},
    {id:5,title:'Cherry Blossom Season: Instagram vs Reality',cat:'✈️ Travel Tips',dest:'Kyoto',author:'Elena R.',likes:687,img:'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=400&q=80'},
    {id:4,title:'Bali Reality Check: How to Not Get Scammed',cat:'✈️ Safety Tips',dest:'Bali',author:'Carlos M.',likes:534,img:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80'},
    {id:2,title:'Is 1 Night in Florence Enough?',cat:'💬 Question',dest:'Florence',author:'Sarah J.',likes:89,img:'https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?w=400&q=80'},
  ];

  posts.forEach(function(p) {
    var card = makeCard(function(){ enterApp('s-community'); openPostDetail(p.id); }, 260);
    card.innerHTML = '<div style="height:150px;position:relative;overflow:hidden;">'
      +'<img src="'+p.img+'" style="width:100%;height:100%;object-fit:cover;" loading="lazy"/>'
      +'<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.6),transparent);"></div>'
      +'<div style="position:absolute;bottom:10px;left:12px;right:12px;">'
      +'<span style="background:rgba(16,185,129,.9);color:#fff;font-size:9px;font-weight:800;padding:2px 8px;border-radius:5px;margin-bottom:4px;display:inline-block;">'+p.cat+'</span>'
      +'<div style="font-size:13px;font-weight:800;color:#fff;line-height:1.3;">'+p.title+'</div>'
      +'</div></div>'
      +'<div style="padding:13px;"><div style="display:flex;justify-content:space-between;align-items:center;">'
      +'<div style="font-size:11px;color:#64748b;">&#128205; '+p.dest+' &bull; '+p.author+'</div>'
      +'<div style="font-size:12px;color:#94a3b8;">&#9825; '+p.likes+'</div>'
      +'</div></div>';
    el.appendChild(card);
  });
}

function renderTripsCarousel() {
  var el = document.getElementById('trips-carousel');
  if (!el) return;
  el.innerHTML = '';

  var trips = [
    {id:1,name:'Bali Expedition 2025',dest:'Ubud · Seminyak',dates:'Oct 12–19',members:4,status:'upcoming',budget:2000,spent:1240,img:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80'},
    {id:2,name:'Japan Cherry Blossom',dest:'Tokyo · Kyoto',dates:'Apr 3–14',members:2,status:'planning',budget:3000,spent:0,img:'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&q=80'},
    {id:3,name:'Iceland Northern Lights',dest:'Reykjavik · Ring Road',dates:'Nov 20–28',members:1,status:'planning',budget:2500,spent:0,img:'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&q=80'},
    {id:4,name:'Portugal Road Trip',dest:'Lisbon · Porto · Algarve',dates:'Aug 5–15',members:3,status:'planning',budget:2200,spent:0,img:'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&q=80'},
  ];

  trips.forEach(function(t) {
    var card = makeCard(function(){ enterApp('s-trip-detail'); }, 260);
    var pct = t.spent > 0 ? Math.round((t.spent/t.budget)*100) : 0;
    var statusBg = t.status === 'upcoming' ? 'rgba(16,185,129,.9)' : 'rgba(245,158,11,.9)';
    var statusLbl = t.status === 'upcoming' ? '⏳ Upcoming' : '✏️ Planning';
    card.innerHTML = '<div style="height:150px;position:relative;overflow:hidden;">'
      +'<img src="'+t.img+'" style="width:100%;height:100%;object-fit:cover;" loading="lazy"/>'
      +'<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55),transparent);"></div>'
      +'<div style="position:absolute;top:10px;left:10px;background:'+statusBg+';color:#fff;padding:3px 9px;border-radius:7px;font-size:10px;font-weight:800;">'+statusLbl+'</div>'
      +'<div style="position:absolute;bottom:10px;left:12px;right:12px;">'
      +'<div style="font-size:15px;font-weight:800;color:#fff;">'+t.name+'</div>'
      +'<div style="font-size:11px;color:rgba(255,255,255,.8);">&#128205; '+t.dest+'</div>'
      +'</div></div>'
      +'<div style="padding:13px;">'
      +'<div style="display:flex;justify-content:space-between;margin-bottom:8px;">'
      +'<span style="font-size:11px;color:#64748b;">&#128197; '+t.dates+'</span>'
      +'<span style="font-size:11px;color:#64748b;">&#128100; '+t.members+' members</span>'
      +'</div>'
      +(t.spent>0?'<div style="font-size:10px;color:#64748b;display:flex;justify-content:space-between;margin-bottom:4px;"><span>Budget</span><span>$'+t.spent+'/$'+t.budget+'</span></div><div style="height:5px;background:#e2e8f0;border-radius:99px;overflow:hidden;"><div style="height:100%;width:'+pct+'%;background:#10b981;border-radius:99px;"></div></div>':'<div style="font-size:11px;color:#94a3b8;">&#127775; Start planning</div>')
      +'</div>';
    el.appendChild(card);
  });
}

// ─── runCommunityAI (needed for community screen) ───
function runCommunityAI() {
  var banner = document.getElementById('community-ai-banner-txt');
  if (banner) banner.textContent = 'Analyzing your archetype...';
  var myType = ST.myVibeType || MY_PROFILE.vibeType;
  var typeAffinities = {
    'FLCX':[1,3,5],'THE_WANDERER':[1,3,5],'THE_HISTORIAN':[2,3],
    'THE_FOODIE':[3,4],'THE_BACKPACKER':[4,5],'THE_CONTENT_CREATOR':[3,5],
  };
  var affinityIds = typeAffinities[myType] || [1,3,5];
  POSTS_DATA.forEach(function(p){ p.aiMatch = affinityIds.indexOf(p.id) !== -1; });
  setTimeout(function(){
    renderCommunity();
    if (banner) banner.textContent = 'Picks for ' + myType + ' — curated just for your travel style';
    toast('AI picks refreshed ✦');
  }, 600);
}

// ─── INIT ───
// Push initial history state
if (window.history && window.history.replaceState) {
  window.history.replaceState({screen:'s-landing'}, '', '#s-landing');
}
renderCards();
renderCommunity();
renderMyProfile();
renderLandingCarousels();
