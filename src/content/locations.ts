export type LocationType = "city" | "neighborhood";
export type County =
  | "Fairfax"
  | "Arlington"
  | "Loudoun"
  | "Prince William"
  | "Alexandria"
  | "Fauquier";

export interface Location {
  slug: string;
  name: string;
  fullName: string;
  type: LocationType;
  county: County;
  zips?: string[];
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  neighborhoods: string[];
  landmarks: string[];
  roads: string[];
  featured?: boolean;
}

const fc = "Fairfax" as const;
const ar = "Arlington" as const;
const ld = "Loudoun" as const;
const pw = "Prince William" as const;
const ax = "Alexandria" as const;
const fq = "Fauquier" as const;

export const locations: Location[] = [
  // ─── Existing core 14 ──────────────────────────────────────
  {
    slug: "springfield",
    name: "Springfield",
    fullName: "Springfield, VA",
    type: "city",
    county: fc,
    zips: ["22150", "22151", "22152", "22153"],
    metaTitle: "Junk Removal in Springfield, VA | Out Junk Out",
    metaDescription:
      "Same-day junk removal in Springfield, VA. We haul furniture, appliances, and full cleanouts from North Springfield to Newington. Call (571) 505-9697.",
    intro: [
      "Springfield is our home base — our trucks live here. From Cromwell Drive to Old Keene Mill, from North Springfield to Newington, you'll see us most days.",
      "Whether you're clearing a townhouse off Backlick Road or hauling a basement's worth of junk out of a single-family near Lake Accotink, we can usually be there the same day.",
    ],
    neighborhoods: [
      "North Springfield",
      "West Springfield",
      "Newington",
      "Newington Forest",
      "Saratoga",
      "Cardinal Forest",
      "Daventry",
      "Crestwood",
      "Greenbriar",
      "Lake Accotink",
    ],
    landmarks: [
      "Springfield Town Center",
      "Lake Accotink Park",
      "Franconia-Springfield Metro",
      "Hilton Springfield",
      "Franconia Government Center",
    ],
    roads: ["I-95", "I-395", "I-495 Capital Beltway", "Backlick Road", "Old Keene Mill Road"],
    featured: true,
  },
  {
    slug: "fairfax",
    name: "Fairfax",
    fullName: "Fairfax, VA",
    type: "city",
    county: fc,
    zips: ["22030", "22031", "22032", "22033"],
    metaTitle: "Junk Removal in Fairfax, VA | Out Junk Out",
    metaDescription:
      "Same-day junk removal across Fairfax City and Fairfax County — appliances, furniture, garage cleanouts, foreclosures. Call (571) 505-9697.",
    intro: [
      "Fairfax City and the wider Fairfax County corridor is the heart of our service area. From Old Town Fairfax to Fair Lakes and Penderbrook, we know the streets, the HOAs, and the quirks of every old garden apartment.",
      "Same-day pickups are the rule, not the exception. Our crews are usually within fifteen minutes of any Fairfax address.",
    ],
    neighborhoods: [
      "Old Town Fairfax",
      "Fair Oaks",
      "Penderbrook",
      "Greenbriar",
      "Robinson",
      "Fair Lakes",
      "Mantua",
    ],
    landmarks: [
      "George Mason University",
      "Fair Oaks Mall",
      "Fairfax Government Center",
      "Old Town Square",
      "Fairfax County Courthouse",
    ],
    roads: ["I-66", "Route 50", "Route 123", "Fairfax County Parkway", "Lee Highway"],
    featured: true,
  },
  {
    slug: "arlington",
    name: "Arlington",
    fullName: "Arlington, VA",
    type: "city",
    county: ar,
    zips: ["22201", "22202", "22203", "22204", "22205", "22206", "22207", "22209"],
    metaTitle: "Junk Removal in Arlington, VA | Out Junk Out",
    metaDescription:
      "Junk removal in Arlington — high-rise apartment cleanouts, condo turnovers, office decommissioning. Pentagon City to Ballston. Call (571) 505-9697.",
    intro: [
      "Arlington's high-rises in Pentagon City, Crystal City, Rosslyn and Ballston have rules — COI requirements, freight-elevator reservations, dock windows — and we know them all.",
      "We've cleared everything from 1-BR condos in Courthouse to whole floors of office space in Rosslyn. If your building has a checklist, we already meet it.",
    ],
    neighborhoods: [
      "Rosslyn",
      "Courthouse",
      "Clarendon",
      "Ballston",
      "Crystal City",
      "Pentagon City",
      "Shirlington",
      "Westover",
      "Aurora Highlands",
    ],
    landmarks: [
      "The Pentagon",
      "Reagan National Airport",
      "Arlington National Cemetery",
      "Ballston Quarter",
      "Crystal City Shops",
    ],
    roads: ["I-395", "I-66", "Route 50", "GW Parkway", "Wilson Boulevard"],
    featured: true,
  },
  {
    slug: "annandale",
    name: "Annandale",
    fullName: "Annandale, VA",
    type: "city",
    county: fc,
    zips: ["22003"],
    metaTitle: "Junk Removal in Annandale, VA | Out Junk Out",
    metaDescription:
      "Annandale junk removal — appliance pickups, full home cleanouts, restaurant and Koreatown commercial clearouts. Same-day. Call (571) 505-9697.",
    intro: [
      "Annandale's mix of older single-family homes off Little River Turnpike and busy commercial strips along Columbia Pike keeps us moving. We do a lot of restaurant equipment and furniture removal in the Koreatown corridor.",
      "Townhouse cleanouts off Heritage Drive, apartment turnovers in the high-rises near Beltway Plaza — same-day windows are standard.",
    ],
    neighborhoods: [
      "Koreatown",
      "Heritage Square",
      "Wakefield",
      "Holmes Run",
      "Camelot",
      "Lincolnia",
    ],
    landmarks: [
      "Annandale Community Park",
      "Beltway Plaza",
      "NOVA Annandale Campus",
      "Heritage Mall",
    ],
    roads: ["I-495 Capital Beltway", "Little River Turnpike", "Columbia Pike", "Braddock Road"],
  },
  {
    slug: "burke",
    name: "Burke",
    fullName: "Burke, VA",
    type: "city",
    county: fc,
    zips: ["22015"],
    metaTitle: "Junk Removal in Burke, VA | Out Junk Out",
    metaDescription:
      "Burke and Burke Centre junk removal — basement clears, hot tub demos, garage cleanouts. Fast pickup across 22015. Call (571) 505-9697.",
    intro: [
      "Burke and Burke Centre are full of 80s and 90s single-family homes that have been holding onto storage for a long time. Basements, garages and sheds make up most of what we clear here.",
      "If you're on the lake side or out by Burke VRE, our trucks can usually be there the same morning.",
    ],
    neighborhoods: [
      "Burke Centre",
      "Lake Braddock",
      "Burke Station",
      "Cherry Run",
      "Signal Hill",
      "The Ponds",
    ],
    landmarks: [
      "Burke Lake Park",
      "Burke Centre Conservancy",
      "Burke VRE Station",
      "Lake Braddock Secondary",
    ],
    roads: ["Fairfax County Parkway", "Burke Lake Road", "Route 123", "Braddock Road"],
  },
  {
    slug: "centreville",
    name: "Centreville",
    fullName: "Centreville, VA",
    type: "city",
    county: fc,
    zips: ["20120", "20121"],
    metaTitle: "Junk Removal in Centreville, VA | Out Junk Out",
    metaDescription:
      "Centreville junk removal — townhome turnovers, garage cleanouts, hot tub haul-offs. Across 20120 and 20121. Call (571) 505-9697.",
    intro: [
      "Centreville's mix of newer townhome communities and Sully Station-era single-family homes means we see a little of everything — moving cleanouts, hot tub demos, garage clears.",
      "We work the I-66 corridor heavily, so most Centreville addresses get same-day windows.",
    ],
    neighborhoods: [
      "Sully Station",
      "Centre Ridge",
      "Faircrest",
      "Stone Heather",
      "Virginia Run",
      "Sequoia Farms",
    ],
    landmarks: ["Sully Historic Site", "Bull Run Regional Park", "Centreville High School"],
    roads: ["I-66", "Route 28", "Route 29", "Braddock Road"],
  },
  {
    slug: "fair-lakes",
    name: "Fair Lakes",
    fullName: "Fair Lakes, VA",
    type: "neighborhood",
    county: fc,
    zips: ["22033"],
    metaTitle: "Junk Removal in Fair Lakes, VA | Out Junk Out",
    metaDescription:
      "Fair Lakes junk removal — condo, townhome and office clears across the Fair Lakes Promenade and Fair Oaks corridor. Call (571) 505-9697.",
    intro: [
      "Fair Lakes is mostly newer condos, townhomes and Class A office space — so we handle a lot of move-outs and small-office decommissioning here.",
      "If your building manager needs a COI, just ask — we keep them on file for most Fair Lakes properties.",
    ],
    neighborhoods: ["Fair Lakes Promenade", "Fair Ridge", "Fair Oaks Estates"],
    landmarks: ["Fair Oaks Mall", "Fair Lakes Shopping Center", "Inova Fair Oaks Hospital"],
    roads: ["I-66", "Fairfax County Parkway", "Route 50", "West Ox Road"],
  },
  {
    slug: "fairfax-station",
    name: "Fairfax Station",
    fullName: "Fairfax Station, VA",
    type: "city",
    county: fc,
    zips: ["22039"],
    metaTitle: "Junk Removal in Fairfax Station, VA | Out Junk Out",
    metaDescription:
      "Fairfax Station junk removal — estate-sized homes, barns, sheds, and detached garages. Big-property service across 22039. Call (571) 505-9697.",
    intro: [
      "Fairfax Station means big lots, long driveways, and a lot of garages and outbuildings. Cleanouts here often involve a barn, a shed, or both.",
      "We bring the trucks and the crew the size of the job calls for — sometimes that's three movers, sometimes it's seven.",
    ],
    neighborhoods: ["South Run", "Crosspointe", "Crosspointe Estates", "Hampton Forest"],
    landmarks: ["Burke Lake Park", "Fairfax Station Railroad Museum", "Lake Mercer"],
    roads: ["Fairfax County Parkway", "Ox Road (Route 123)", "Hooes Road", "Burke Lake Road"],
  },
  {
    slug: "falls-church",
    name: "Falls Church",
    fullName: "Falls Church, VA",
    type: "city",
    county: fc,
    zips: ["22041", "22042", "22043", "22044", "22046"],
    metaTitle: "Junk Removal in Falls Church, VA | Out Junk Out",
    metaDescription:
      "Falls Church junk removal — Eden Center, Seven Corners, Bailey's Crossroads commercial and home cleanouts. Call (571) 505-9697.",
    intro: [
      "Falls Church gives us a mix of older single-family near the City of Falls Church, dense garden apartments around Seven Corners, and a busy commercial scene at Eden Center.",
      "We work this area daily — same-day windows are easy here.",
    ],
    neighborhoods: [
      "Seven Corners",
      "Bailey's Crossroads",
      "Pimmit Hills",
      "Westlawn",
      "Idylwood",
      "Greenway Downs",
    ],
    landmarks: ["Eden Center", "Tysons Corner (nearby)", "Skyline Towers", "State Theatre"],
    roads: ["I-495", "Route 7 (Leesburg Pike)", "Route 50", "Wilson Boulevard"],
  },
  {
    slug: "great-falls",
    name: "Great Falls",
    fullName: "Great Falls, VA",
    type: "city",
    county: fc,
    zips: ["22066"],
    metaTitle: "Junk Removal in Great Falls, VA | Out Junk Out",
    metaDescription:
      "Great Falls estate cleanouts, basement clears, hot tub removal and full-property work. Large-home specialists in 22066. Call (571) 505-9697.",
    intro: [
      "Great Falls means estate properties — large homes on multi-acre lots with detached garages, finished basements, pool houses and a lot of accumulated possessions.",
      "We staff Great Falls jobs with bigger crews and book half-day windows. This is the kind of work that's worth doing right.",
    ],
    neighborhoods: ["Great Falls Forest", "Riverbend", "Brooks Farm", "Falcon Ridge"],
    landmarks: ["Great Falls Park", "Riverbend Park", "Colvin Run Mill", "Madeira School"],
    roads: ["Georgetown Pike (Route 193)", "Old Dominion Drive", "Walker Road"],
  },
  {
    slug: "lorton",
    name: "Lorton",
    fullName: "Lorton, VA",
    type: "city",
    county: fc,
    zips: ["22079"],
    metaTitle: "Junk Removal in Lorton, VA | Out Junk Out",
    metaDescription:
      "Lorton junk removal — Laurel Hill homes, townhomes, and self-storage cleanouts in 22079. Call (571) 505-9697.",
    intro: [
      "Lorton blends Laurel Hill's newer townhome communities with the older single-family neighborhoods east of I-95. Storage-unit cleanouts and townhome turnovers are a regular call here.",
      "We work the Workhouse and Gunston Cove corridors weekly.",
    ],
    neighborhoods: ["Laurel Hill", "Lorton Station", "Mason Neck", "South Lorton"],
    landmarks: ["Workhouse Arts Center", "Mason Neck State Park", "Pohick Bay Regional Park"],
    roads: ["I-95", "Route 1 (Richmond Highway)", "Lorton Road", "Furnace Road"],
  },
  {
    slug: "manassas",
    name: "Manassas",
    fullName: "Manassas, VA",
    type: "city",
    county: pw,
    zips: ["20109", "20110", "20111", "20112"],
    metaTitle: "Junk Removal in Manassas, VA | Out Junk Out",
    metaDescription:
      "Manassas junk removal — home cleanouts, garage clears, light demo. Old Town to Bull Run. Call (571) 505-9697.",
    intro: [
      "Manassas is a big, varied service area — Old Town historic homes, large suburban developments near Liberia, and the busy commercial belt out by I-66.",
      "We handle the full range here: residential cleanouts, light demo, and small-commercial work.",
    ],
    neighborhoods: ["Old Town Manassas", "Sudley", "Bull Run", "Liberia", "Yorkshire", "Wellington"],
    landmarks: ["Manassas National Battlefield Park", "Manassas Regional Airport", "Old Town Manassas"],
    roads: ["I-66", "Route 28 (Centreville Road)", "Route 234 (Sudley Road)", "Liberia Avenue"],
  },
  {
    slug: "mclean",
    name: "McLean",
    fullName: "McLean, VA",
    type: "city",
    county: fc,
    zips: ["22101", "22102"],
    metaTitle: "Junk Removal in McLean, VA | Out Junk Out",
    metaDescription:
      "McLean junk removal — large estates, embassy housing, basement and garage clears. Discreet, insured, same-day. Call (571) 505-9697.",
    intro: [
      "McLean has some of the largest homes in our service area — and some of the most discreet clients. We can show up in unmarked trucks, work the back driveway, and keep the front of the house quiet.",
      "Embassy housing, estate-sized properties, and commercial work on the Tysons side all get the same careful treatment.",
    ],
    neighborhoods: ["Langley", "Chesterbrook", "Salona Village", "Franklin Park", "Pimmit Hills"],
    landmarks: ["Tysons Corner Center", "Tysons Galleria", "McLean Central Park", "Capital One HQ"],
    roads: ["I-495", "Route 7", "Route 123 (Chain Bridge Road)", "Dolley Madison Boulevard"],
  },
  {
    slug: "vienna",
    name: "Vienna",
    fullName: "Vienna, VA",
    type: "city",
    county: fc,
    zips: ["22180", "22181", "22182"],
    metaTitle: "Junk Removal in Vienna, VA | Out Junk Out",
    metaDescription:
      "Vienna junk removal — Town of Vienna and Tysons-adjacent neighborhoods. Same-day pickup, full home and garage cleanouts. Call (571) 505-9697.",
    intro: [
      "Vienna covers a mix of in-town single-family homes near Maple Avenue and Tysons-adjacent neighborhoods like Dunn Loring and Merrifield.",
      "We work this area daily — and we know which streets have parking restrictions and which ones don't.",
    ],
    neighborhoods: ["Dunn Loring", "Merrifield", "Mosaic District", "Tysons", "Hunter Mill"],
    landmarks: [
      "Mosaic District",
      "Wolf Trap National Park",
      "Vienna Metro",
      "Tysons Corner Center",
    ],
    roads: ["I-66", "Route 7", "Maple Avenue (Route 123)", "Dulles Toll Road"],
    featured: true,
  },
  // ─── Expansion ─────────────────────────────────────────────
  {
    slug: "reston",
    name: "Reston",
    fullName: "Reston, VA",
    type: "city",
    county: fc,
    zips: ["20190", "20191", "20194"],
    metaTitle: "Junk Removal in Reston, VA | Out Junk Out",
    metaDescription:
      "Reston junk removal — condos, townhomes, single-family. Town Center to Lake Anne. Same-day pickup. Call (571) 505-9697.",
    intro: [
      "Reston's planned-community layout means there's something here for every kind of cleanout — luxury condos at Town Center, classic '70s-era townhomes near Lake Anne, big single-family homes near Reston National.",
      "We run the Dulles Toll Road corridor daily, so most Reston pickups are same-day.",
    ],
    neighborhoods: ["Lake Anne", "Hunters Woods", "Reston Town Center", "South Lakes", "North Point"],
    landmarks: ["Reston Town Center", "Lake Anne Plaza", "Reston National Golf Course", "W&OD Trail"],
    roads: ["Dulles Toll Road (Route 267)", "Reston Parkway", "Wiehle Avenue", "Sunrise Valley Drive"],
    featured: true,
  },
  {
    slug: "herndon",
    name: "Herndon",
    fullName: "Herndon, VA",
    type: "city",
    county: fc,
    zips: ["20170", "20171"],
    metaTitle: "Junk Removal in Herndon, VA | Out Junk Out",
    metaDescription:
      "Herndon junk removal — homes, offices, hot tubs, sheds. Across 20170 and 20171. Call (571) 505-9697.",
    intro: [
      "Herndon's mix of historic downtown homes, suburban single-family neighborhoods, and Dulles-corridor offices keeps us busy. Office decommissionings near the airport are a regular Friday call here.",
      "Same-day pickups are standard.",
    ],
    neighborhoods: ["Downtown Herndon", "Sterling Park", "Worldgate", "Franklin Farm"],
    landmarks: ["Herndon Centennial Golf Course", "W&OD Trail", "Dulles International Airport"],
    roads: ["Dulles Toll Road", "Elden Street", "Centreville Road", "Route 28"],
  },
  {
    slug: "chantilly",
    name: "Chantilly",
    fullName: "Chantilly, VA",
    type: "city",
    county: fc,
    zips: ["20151", "20152"],
    metaTitle: "Junk Removal in Chantilly, VA | Out Junk Out",
    metaDescription:
      "Chantilly junk removal — Sully Plaza area homes and offices, light demo, full cleanouts. Call (571) 505-9697.",
    intro: [
      "Chantilly's big mix of suburban developments (South Riding-adjacent, Greenbriar) and the busy Route 50 commercial corridor gives us a steady stream of both home and office work.",
      "We're in this area daily and most pickups are booked the same day.",
    ],
    neighborhoods: ["Greenbriar", "Pleasant Valley", "Lees Corner", "Poplar Tree"],
    landmarks: ["Udvar-Hazy Air & Space Museum", "Dulles Expo Center", "Sully Plaza"],
    roads: ["Route 50", "Route 28", "Stringfellow Road", "West Ox Road"],
  },
  {
    slug: "oakton",
    name: "Oakton",
    fullName: "Oakton, VA",
    type: "city",
    county: fc,
    zips: ["22124"],
    metaTitle: "Junk Removal in Oakton, VA | Out Junk Out",
    metaDescription:
      "Oakton junk removal — estate-sized properties, basement and garage cleanouts. Same-day across 22124. Call (571) 505-9697.",
    intro: [
      "Oakton has the bigger-lot, set-back-from-the-road style of Fairfax County living. Garages here tend to be detached, basements tend to be finished, and cleanouts tend to take a full crew.",
      "We staff Oakton jobs accordingly.",
    ],
    neighborhoods: ["Vale", "Oakton Glen", "Five Oaks", "Oakton Highlands"],
    landmarks: ["Oakton High School", "Vienna Metro (adjacent)"],
    roads: ["Route 123", "Hunter Mill Road", "Vale Road"],
  },
  {
    slug: "clifton",
    name: "Clifton",
    fullName: "Clifton, VA",
    type: "city",
    county: fc,
    zips: ["20124"],
    metaTitle: "Junk Removal in Clifton, VA | Out Junk Out",
    metaDescription:
      "Clifton junk removal — large lot homes, barn and shed cleanouts, light demo. Across 20124. Call (571) 505-9697.",
    intro: [
      "Clifton is rural-feeling Fairfax — multi-acre lots, horse properties, the occasional barn. We bring rural-access trucks and the crew the property calls for.",
      "Saturday and evening pickups available with no surcharge.",
    ],
    neighborhoods: ["Historic Clifton", "Balmoral", "Bull Run", "Little Rocky Run"],
    landmarks: ["Historic Clifton", "Hemlock Overlook Regional Park", "Paradise Springs Winery"],
    roads: ["Route 28", "Compton Road", "Clifton Road", "Fairfax County Parkway"],
  },
  {
    slug: "tysons",
    name: "Tysons",
    fullName: "Tysons (Tysons Corner), VA",
    type: "city",
    county: fc,
    zips: ["22102", "22182"],
    metaTitle: "Junk Removal in Tysons, VA | Out Junk Out",
    metaDescription:
      "Tysons / Tysons Corner junk removal — high-rises, condos, Class A offices, restaurants. COI on file. Call (571) 505-9697.",
    intro: [
      "Tysons Corner has gone from mall-and-highway to a true downtown — and we work the high-rises, condo towers, and corporate offices that came with it.",
      "We have COIs on file for most major Tysons buildings and can hit Saturday-morning move windows easily.",
    ],
    neighborhoods: ["Tysons Central", "Tysons East", "Tysons West", "Pimmit Hills"],
    landmarks: ["Tysons Corner Center", "Tysons Galleria", "Capital One Hall", "The Boro"],
    roads: ["I-495", "Route 7", "Route 123", "Westpark Drive"],
    featured: true,
  },
  {
    slug: "dunn-loring",
    name: "Dunn Loring",
    fullName: "Dunn Loring, VA",
    type: "neighborhood",
    county: fc,
    zips: ["22027"],
    metaTitle: "Junk Removal in Dunn Loring, VA | Out Junk Out",
    metaDescription:
      "Dunn Loring junk removal — Metro-side condos, single-family clears, Mosaic-area apartments. Call (571) 505-9697.",
    intro: [
      "Dunn Loring sits right between Vienna and the Mosaic District — Metro-side condos, an older single-family belt, and the Merrifield commercial scene all give us steady work here.",
    ],
    neighborhoods: ["Mosaic District", "Merrifield", "Dunn Loring proper"],
    landmarks: ["Dunn Loring–Merrifield Metro", "Mosaic District", "Inova Fairfax Hospital"],
    roads: ["I-66", "Route 29 (Lee Highway)", "Gallows Road"],
  },
  {
    slug: "merrifield",
    name: "Merrifield",
    fullName: "Merrifield, VA",
    type: "neighborhood",
    county: fc,
    zips: ["22030", "22031"],
    metaTitle: "Junk Removal in Merrifield, VA | Out Junk Out",
    metaDescription:
      "Merrifield junk removal — Mosaic District condos, restaurant equipment, office gear. Same-day pickup. Call (571) 505-9697.",
    intro: [
      "Merrifield blends the Mosaic District's newer condos and restaurants with older garden-apartment stock along Lee Highway. We handle the full range here.",
      "Restaurant equipment removal and office cleanouts are common in the Mosaic corridor.",
    ],
    neighborhoods: ["Mosaic District", "Pine Ridge", "Pinecrest"],
    landmarks: ["Mosaic District", "Inova Fairfax Hospital", "Dunn Loring Metro"],
    roads: ["I-66", "Lee Highway", "Gallows Road"],
  },
  {
    slug: "pimmit-hills",
    name: "Pimmit Hills",
    fullName: "Pimmit Hills, VA",
    type: "neighborhood",
    county: fc,
    zips: ["22043"],
    metaTitle: "Junk Removal in Pimmit Hills, VA | Out Junk Out",
    metaDescription:
      "Pimmit Hills junk removal — classic single-family clears, basement and garage cleanouts. Same-day. Call (571) 505-9697.",
    intro: [
      "Pimmit Hills is one of NoVA's oldest planned neighborhoods — and those mid-century homes tend to have decades of stored stuff. Basements, garages, and detached storage are our regular calls here.",
    ],
    neighborhoods: ["Pimmit Hills proper", "Westhampton"],
    landmarks: ["Tysons Corner Center", "McLean Hamlet"],
    roads: ["I-495", "Route 7", "Magarity Road"],
  },
  {
    slug: "mantua",
    name: "Mantua",
    fullName: "Mantua, VA",
    type: "neighborhood",
    county: fc,
    zips: ["22031"],
    metaTitle: "Junk Removal in Mantua, VA | Out Junk Out",
    metaDescription:
      "Mantua junk removal — single-family cleanouts and pool/hot tub demo. Across 22031. Call (571) 505-9697.",
    intro: [
      "Mantua is solid mid-century single-family stock with a lot of in-ground pools and aging hot tubs — both regular calls for us.",
      "Same-day pickups are easy in this corridor.",
    ],
    neighborhoods: ["Mantua Hills", "Country Club Manor"],
    landmarks: ["Mantua Elementary", "Accotink Stream"],
    roads: ["I-495", "Route 50", "Pickett Road"],
  },
  {
    slug: "north-springfield",
    name: "North Springfield",
    fullName: "North Springfield, VA",
    type: "neighborhood",
    county: fc,
    zips: ["22151"],
    metaTitle: "Junk Removal in North Springfield, VA | Out Junk Out",
    metaDescription:
      "North Springfield junk removal — fastest response in 22151. Out Junk Out is based here. Call (571) 505-9697.",
    intro: [
      "North Springfield is where our trucks live. Eight miles, fifteen minutes, often less — we're usually the closest junk removal team to your house.",
    ],
    neighborhoods: ["North Springfield proper", "Ravensworth", "Bren Mar Park"],
    landmarks: ["Lake Accotink Park", "Springfield Town Center", "Long Branch Stream Park"],
    roads: ["I-395", "I-495", "Backlick Road", "Braddock Road"],
  },
  {
    slug: "west-springfield",
    name: "West Springfield",
    fullName: "West Springfield, VA",
    type: "neighborhood",
    county: fc,
    zips: ["22152"],
    metaTitle: "Junk Removal in West Springfield, VA | Out Junk Out",
    metaDescription:
      "West Springfield junk removal — large single-family clears, garage cleanouts, hot tub haul-offs. Call (571) 505-9697.",
    intro: [
      "West Springfield's larger lots and finished basements give us bigger jobs — full-day garage cleanouts and basement clears are typical here.",
    ],
    neighborhoods: ["Rolling Valley", "Daventry", "Saratoga", "Cardinal Forest"],
    landmarks: ["West Springfield High School", "Pohick Library", "Rolling Valley Park"],
    roads: ["Fairfax County Parkway", "Old Keene Mill Road", "Rolling Road"],
  },
  {
    slug: "newington",
    name: "Newington",
    fullName: "Newington, VA",
    type: "neighborhood",
    county: fc,
    zips: ["22122", "22153"],
    metaTitle: "Junk Removal in Newington, VA | Out Junk Out",
    metaDescription:
      "Newington junk removal — Lorton-adjacent townhomes, commercial corridor pickups. Call (571) 505-9697.",
    intro: [
      "Newington's commercial corridor sees a lot of small-business turnover and storage-unit clears. Townhome cleanouts in Newington Forest are also regular.",
    ],
    neighborhoods: ["Newington Forest", "Newington Heights"],
    landmarks: ["Pohick Bay Regional Park", "Fort Belvoir (adjacent)"],
    roads: ["I-95", "Route 1", "Fairfax County Parkway"],
  },
  {
    slug: "baileys-crossroads",
    name: "Bailey's Crossroads",
    fullName: "Bailey's Crossroads, VA",
    type: "neighborhood",
    county: fc,
    zips: ["22041", "22044"],
    metaTitle: "Junk Removal in Bailey's Crossroads, VA | Out Junk Out",
    metaDescription:
      "Bailey's Crossroads junk removal — high-rise apartment turnovers, Skyline-area office gear, restaurant equipment. Call (571) 505-9697.",
    intro: [
      "Bailey's Crossroads is dense apartment living, big-box retail, and the Skyline office towers. We pull furniture out of high-rises here weekly.",
    ],
    neighborhoods: ["Skyline", "Lake Barcroft (adjacent)", "Glen Forest"],
    landmarks: ["Skyline Towers", "Bailey's Crossroads Shopping Center", "Patrick Henry Drive"],
    roads: ["Route 7", "Columbia Pike", "I-395"],
  },
  {
    slug: "seven-corners",
    name: "Seven Corners",
    fullName: "Seven Corners, VA",
    type: "neighborhood",
    county: fc,
    zips: ["22044"],
    metaTitle: "Junk Removal in Seven Corners, VA | Out Junk Out",
    metaDescription:
      "Seven Corners junk removal — Eden Center commercial, garden-apartment turnovers, home cleanouts. Call (571) 505-9697.",
    intro: [
      "Seven Corners packs garden apartments, Eden Center's restaurants and shops, and a busy commercial intersection into one area. We're here most days.",
    ],
    neighborhoods: ["Eden Center", "Sleepy Hollow", "Falls Church-adjacent"],
    landmarks: ["Eden Center", "Seven Corners Center", "Sleepy Hollow Bath & Racquet Club"],
    roads: ["Route 7", "Route 50", "Wilson Boulevard"],
  },
  {
    slug: "sterling",
    name: "Sterling",
    fullName: "Sterling, VA",
    type: "city",
    county: ld,
    zips: ["20164", "20165", "20166"],
    metaTitle: "Junk Removal in Sterling, VA | Out Junk Out",
    metaDescription:
      "Sterling junk removal — Cascades and Sugarland Run cleanouts, Dulles-corridor offices, home and garage clears. Call (571) 505-9697.",
    intro: [
      "Sterling covers a huge area — from Sugarland Run's older townhomes to Cascades' newer single-family stock to the Dulles-corridor offices.",
      "We work this region daily and can usually book same-day or next-day windows.",
    ],
    neighborhoods: ["Sugarland Run", "Cascades", "CountrySide", "Lowes Island", "Algonkian"],
    landmarks: ["Algonkian Regional Park", "Cascades Marketplace", "Dulles Town Center"],
    roads: ["Route 7", "Route 28", "Cascades Parkway", "Algonkian Parkway"],
  },
  {
    slug: "ashburn",
    name: "Ashburn",
    fullName: "Ashburn, VA",
    type: "city",
    county: ld,
    zips: ["20146", "20147", "20148"],
    metaTitle: "Junk Removal in Ashburn, VA | Out Junk Out",
    metaDescription:
      "Ashburn junk removal — Brambleton, One Loudoun, Broadlands cleanouts. Newer-home specialists. Call (571) 505-9697.",
    intro: [
      "Ashburn is newer Loudoun County — Brambleton, Broadlands, One Loudoun, Belmont. Move-in/move-out cleanouts and basement clears are our regular calls.",
      "We're in the Dulles corridor daily.",
    ],
    neighborhoods: ["Brambleton", "Broadlands", "Belmont", "One Loudoun", "Ashburn Farm"],
    landmarks: ["One Loudoun", "Loudoun Station Metro", "Ashburn Village"],
    roads: ["Route 7", "Route 28", "Loudoun County Parkway", "Greenway (Route 267)"],
    featured: true,
  },
  {
    slug: "leesburg",
    name: "Leesburg",
    fullName: "Leesburg, VA",
    type: "city",
    county: ld,
    zips: ["20175", "20176"],
    metaTitle: "Junk Removal in Leesburg, VA | Out Junk Out",
    metaDescription:
      "Leesburg junk removal — historic downtown, Lansdowne, Brandon Park. Estate and barn cleanouts a specialty. Call (571) 505-9697.",
    intro: [
      "Leesburg blends historic downtown homes with Lansdowne and Brandon Park's newer developments — and out past the bypass, you get into proper Loudoun horse country.",
      "Barn and farm cleanouts are common calls here.",
    ],
    neighborhoods: ["Historic Downtown", "Lansdowne", "Brandon Park", "Greenway Farm"],
    landmarks: ["Downtown Leesburg", "Oatlands Historic House", "Morven Park", "Lansdowne Resort"],
    roads: ["Route 7", "Route 15", "Greenway (Route 267)", "Edwards Ferry Road"],
  },
  {
    slug: "manassas-park",
    name: "Manassas Park",
    fullName: "Manassas Park, VA",
    type: "city",
    county: pw,
    zips: ["20111"],
    metaTitle: "Junk Removal in Manassas Park, VA | Out Junk Out",
    metaDescription:
      "Manassas Park junk removal — townhome turnovers, garage cleanouts. Same-day across 20111. Call (571) 505-9697.",
    intro: [
      "Manassas Park is a tight, walkable city tucked into Prince William — lots of townhomes, lots of turnover work.",
    ],
    neighborhoods: ["Centennial Place", "Manassas Park Center"],
    landmarks: ["Manassas Park Community Center", "Costello Park"],
    roads: ["Route 28", "Route 234", "I-66"],
  },
  {
    slug: "woodbridge",
    name: "Woodbridge",
    fullName: "Woodbridge, VA",
    type: "city",
    county: pw,
    zips: ["22191", "22192", "22193"],
    metaTitle: "Junk Removal in Woodbridge, VA | Out Junk Out",
    metaDescription:
      "Woodbridge junk removal — Potomac Mills area homes, apartments, commercial clearouts. Call (571) 505-9697.",
    intro: [
      "Woodbridge spans a huge area along I-95 — Lake Ridge, Old Bridge, the Potomac Mills corridor. We work the whole footprint.",
      "Hot tub demos, basement clears, and apartment turnovers make up most of our regular calls here.",
    ],
    neighborhoods: ["Lake Ridge", "Old Bridge", "Featherstone", "Belmont Bay"],
    landmarks: ["Potomac Mills", "Stonebridge at Potomac Town Center", "Occoquan Bay NWR"],
    roads: ["I-95", "Route 1", "Prince William Parkway", "Old Bridge Road"],
  },
  {
    slug: "lake-ridge",
    name: "Lake Ridge",
    fullName: "Lake Ridge, VA",
    type: "neighborhood",
    county: pw,
    zips: ["22192"],
    metaTitle: "Junk Removal in Lake Ridge, VA | Out Junk Out",
    metaDescription:
      "Lake Ridge junk removal — single-family cleanouts, garages, hot tubs. Same-day in 22192. Call (571) 505-9697.",
    intro: [
      "Lake Ridge sits on the west side of Occoquan Bay — single-family homes, mature trees, and a lot of finished basements that need clearing every few years.",
    ],
    neighborhoods: ["Cedar Point", "Sandy Run", "Tanyard Hill"],
    landmarks: ["Occoquan River", "Old Hickory Golf Club", "Lake Ridge Park"],
    roads: ["Prince William Parkway", "Old Bridge Road", "I-95"],
  },
  {
    slug: "dale-city",
    name: "Dale City",
    fullName: "Dale City, VA",
    type: "city",
    county: pw,
    zips: ["22193"],
    metaTitle: "Junk Removal in Dale City, VA | Out Junk Out",
    metaDescription:
      "Dale City junk removal — single-family cleanouts, garage clears, townhome turnovers. Call (571) 505-9697.",
    intro: [
      "Dale City is one of the largest single-tracked communities on the East Coast — and the homes built here in the '60s and '70s have collected a lot. Basements and garages dominate our work in Dale City.",
    ],
    neighborhoods: ["Lindendale", "Antietam", "Ashdale", "Birchdale"],
    landmarks: ["Hillendale Park", "Chinn Park Regional Library"],
    roads: ["I-95", "Route 234", "Dale Boulevard"],
  },
  {
    slug: "dumfries",
    name: "Dumfries",
    fullName: "Dumfries, VA",
    type: "city",
    county: pw,
    zips: ["22025", "22026"],
    metaTitle: "Junk Removal in Dumfries, VA | Out Junk Out",
    metaDescription:
      "Dumfries junk removal — Montclair area homes, Marine Corps-adjacent cleanouts, commercial. Call (571) 505-9697.",
    intro: [
      "Dumfries and Montclair sit just outside Quantico — we do a lot of PCS-related cleanouts here when military families move in or out.",
    ],
    neighborhoods: ["Montclair", "Triangle (adjacent)", "Quantico Creek"],
    landmarks: ["Leesylvania State Park", "Prince William Forest Park"],
    roads: ["I-95", "Route 1", "Dumfries Road"],
  },
  {
    slug: "gainesville",
    name: "Gainesville",
    fullName: "Gainesville, VA",
    type: "city",
    county: pw,
    zips: ["20155"],
    metaTitle: "Junk Removal in Gainesville, VA | Out Junk Out",
    metaDescription:
      "Gainesville junk removal — Heritage Hunt, Virginia Oaks, single-family clears. Same-day in 20155. Call (571) 505-9697.",
    intro: [
      "Gainesville's mix of active-adult communities (Heritage Hunt) and newer single-family neighborhoods means a lot of downsizing cleanouts and move-out work.",
    ],
    neighborhoods: ["Heritage Hunt", "Virginia Oaks", "Piedmont"],
    landmarks: ["Jiffy Lube Live", "Atlas Walk", "Heritage Hunt"],
    roads: ["I-66", "Route 29", "Route 15"],
  },
  {
    slug: "haymarket",
    name: "Haymarket",
    fullName: "Haymarket, VA",
    type: "city",
    county: pw,
    zips: ["20169"],
    metaTitle: "Junk Removal in Haymarket, VA | Out Junk Out",
    metaDescription:
      "Haymarket junk removal — Dominion Valley, Piedmont, large-lot cleanouts. Call (571) 505-9697.",
    intro: [
      "Haymarket means bigger lots and newer construction — Dominion Valley, Piedmont, and the family neighborhoods around them.",
      "Garage and basement clears dominate our work here.",
    ],
    neighborhoods: ["Dominion Valley", "Piedmont", "Bull Run Mountain"],
    landmarks: ["Dominion Valley Country Club", "Old Town Haymarket"],
    roads: ["I-66", "Route 15", "Route 55", "Antioch Road"],
  },
  {
    slug: "alexandria",
    name: "Alexandria",
    fullName: "Alexandria, VA",
    type: "city",
    county: ax,
    zips: ["22301", "22302", "22303", "22304", "22305", "22311", "22312", "22314"],
    metaTitle: "Junk Removal in Alexandria, VA | Out Junk Out",
    metaDescription:
      "Alexandria junk removal — Old Town, Del Ray, Eisenhower. Apartment, condo and townhouse clears. Call (571) 505-9697.",
    intro: [
      "Alexandria gives us tight Old Town streets, dense Del Ray rowhouses, and the high-rises along Eisenhower. We know which alleys our trucks fit and which we have to walk the dolly down.",
      "Same-day windows are easy here.",
    ],
    neighborhoods: ["Old Town", "Del Ray", "Eisenhower", "Rosemont", "Parkfairfax"],
    landmarks: ["King Street", "Mount Vernon Trail", "Eisenhower Metro", "Old Town Waterfront"],
    roads: ["I-95", "I-395", "GW Parkway", "Duke Street", "King Street"],
    featured: true,
  },
  {
    slug: "old-town-alexandria",
    name: "Old Town Alexandria",
    fullName: "Old Town Alexandria, VA",
    type: "neighborhood",
    county: ax,
    zips: ["22314"],
    metaTitle: "Junk Removal in Old Town Alexandria, VA | Out Junk Out",
    metaDescription:
      "Old Town Alexandria junk removal — historic rowhouses, condos, small office clears. Tight-street experts. Call (571) 505-9697.",
    intro: [
      "Old Town's narrow streets, cobblestones and alley-only access make a lot of haulers nervous. They don't make us nervous — we work this neighborhood weekly.",
    ],
    neighborhoods: ["Old Town North", "Old Town proper", "Founders Park"],
    landmarks: ["King Street", "Torpedo Factory", "Carlyle House"],
    roads: ["King Street", "Washington Street (Route 1)", "GW Parkway"],
  },
  {
    slug: "del-ray",
    name: "Del Ray",
    fullName: "Del Ray, Alexandria",
    type: "neighborhood",
    county: ax,
    zips: ["22301"],
    metaTitle: "Junk Removal in Del Ray, VA | Out Junk Out",
    metaDescription:
      "Del Ray junk removal — bungalow basements, attic clears, alley pickups. Call (571) 505-9697.",
    intro: [
      "Del Ray's bungalows and rowhouses are charming — and their basements and attics are tight. We bring smaller crews and the right hand-tools for this kind of work.",
    ],
    neighborhoods: ["Del Ray Center", "Del Ray North", "Del Ray South"],
    landmarks: ["Mount Vernon Avenue", "Pat Miller Square", "Four Mile Run Park"],
    roads: ["Mount Vernon Avenue", "Route 1", "GW Parkway"],
  },
  {
    slug: "mount-vernon",
    name: "Mount Vernon",
    fullName: "Mount Vernon, VA",
    type: "neighborhood",
    county: fc,
    zips: ["22309"],
    metaTitle: "Junk Removal in Mount Vernon, VA | Out Junk Out",
    metaDescription:
      "Mount Vernon junk removal — large-lot homes, estate cleanouts, water heater and appliance haul-off. Call (571) 505-9697.",
    intro: [
      "Mount Vernon's stately homes, generous lots and finished basements give us big-job material. We staff these with full crews and book half-day windows.",
    ],
    neighborhoods: ["Riverside", "Stratford Landing", "Hollin Hall"],
    landmarks: ["Mount Vernon Estate", "Fort Belvoir (adjacent)", "Pohick Bay"],
    roads: ["GW Parkway", "Route 1 (Richmond Highway)", "Fairfax County Parkway"],
  },
  {
    slug: "rosslyn",
    name: "Rosslyn",
    fullName: "Rosslyn, Arlington",
    type: "neighborhood",
    county: ar,
    zips: ["22209"],
    metaTitle: "Junk Removal in Rosslyn, Arlington | Out Junk Out",
    metaDescription:
      "Rosslyn junk removal — high-rise condo and office clearouts, COI on file. Call (571) 505-9697.",
    intro: [
      "Rosslyn is high-rises and Class A offices — we work the freight elevators, the COI requirements, and the dock-window restrictions.",
    ],
    neighborhoods: ["Central Place", "Colonial Village"],
    landmarks: ["Rosslyn Metro", "Iwo Jima Memorial", "Key Bridge"],
    roads: ["I-66", "Route 50", "GW Parkway", "Wilson Boulevard"],
  },
  {
    slug: "clarendon",
    name: "Clarendon",
    fullName: "Clarendon, Arlington",
    type: "neighborhood",
    county: ar,
    zips: ["22201"],
    metaTitle: "Junk Removal in Clarendon, VA | Out Junk Out",
    metaDescription:
      "Clarendon junk removal — condo turnovers, restaurant equipment, retail closure cleanouts. Call (571) 505-9697.",
    intro: [
      "Clarendon's mix of mid-rise condos and restaurant-heavy retail keeps us busy. Restaurant equipment removal and end-of-lease commercial cleanouts are regulars here.",
    ],
    neighborhoods: ["Lyon Park", "Lyon Village", "Ashton Heights"],
    landmarks: ["Clarendon Metro", "Market Common Clarendon"],
    roads: ["I-66", "Wilson Boulevard", "Clarendon Boulevard"],
  },
  {
    slug: "ballston",
    name: "Ballston",
    fullName: "Ballston, Arlington",
    type: "neighborhood",
    county: ar,
    zips: ["22203"],
    metaTitle: "Junk Removal in Ballston, VA | Out Junk Out",
    metaDescription:
      "Ballston junk removal — high-rise condo turnovers, Ballston Quarter retail, office decommissioning. Call (571) 505-9697.",
    intro: [
      "Ballston's high-rise condos, Ballston Quarter retail, and corporate offices all see us regularly. We work the freight schedule and keep buildings happy.",
    ],
    neighborhoods: ["Bluemont", "Ballston-Virginia Square"],
    landmarks: ["Ballston Quarter", "Ballston Metro", "Marymount University"],
    roads: ["I-66", "Wilson Boulevard", "Glebe Road"],
  },
  {
    slug: "shirlington",
    name: "Shirlington",
    fullName: "Shirlington, Arlington",
    type: "neighborhood",
    county: ar,
    zips: ["22206"],
    metaTitle: "Junk Removal in Shirlington, VA | Out Junk Out",
    metaDescription:
      "Shirlington junk removal — Village at Shirlington condos, restaurants, retail. Call (571) 505-9697.",
    intro: [
      "Shirlington's tight pedestrian footprint and dense mid-rises mean creative loading — alleys, side entrances, off-hours. We know the playbook.",
    ],
    neighborhoods: ["Village at Shirlington", "Fairlington"],
    landmarks: ["Village at Shirlington", "Signature Theatre", "Shirlington Library"],
    roads: ["I-395", "Quaker Lane", "Shirlington Road"],
  },
  {
    slug: "crystal-city",
    name: "Crystal City",
    fullName: "Crystal City, Arlington",
    type: "neighborhood",
    county: ar,
    zips: ["22202"],
    metaTitle: "Junk Removal in Crystal City, VA | Out Junk Out",
    metaDescription:
      "Crystal City junk removal — high-rise condos, federal offices, Amazon HQ2 area commercial. Call (571) 505-9697.",
    intro: [
      "Crystal City and the National Landing area give us a steady mix of federal-contractor offices, condo turnovers, and retail. Amazon HQ2's neighbors call us a lot.",
    ],
    neighborhoods: ["National Landing", "Aurora Highlands"],
    landmarks: ["Reagan National Airport", "Crystal City Shops", "Amazon HQ2"],
    roads: ["GW Parkway", "Route 1", "Crystal Drive"],
  },
  {
    slug: "pentagon-city",
    name: "Pentagon City",
    fullName: "Pentagon City, Arlington",
    type: "neighborhood",
    county: ar,
    zips: ["22202"],
    metaTitle: "Junk Removal in Pentagon City, VA | Out Junk Out",
    metaDescription:
      "Pentagon City junk removal — high-rise apartment turnovers, Fashion Centre commercial, condo clears. Call (571) 505-9697.",
    intro: [
      "Pentagon City's high-rises are some of the busiest in the DMV — and the buildings are strict about loading windows. We're on the COI list at most of them.",
    ],
    neighborhoods: ["Pentagon City proper", "Aurora Highlands"],
    landmarks: ["Fashion Centre at Pentagon City", "The Pentagon", "Reagan National Airport"],
    roads: ["I-395", "Route 1", "South Hayes Street"],
  },
  {
    slug: "courthouse",
    name: "Courthouse",
    fullName: "Courthouse, Arlington",
    type: "neighborhood",
    county: ar,
    zips: ["22201"],
    metaTitle: "Junk Removal in Courthouse, Arlington | Out Junk Out",
    metaDescription:
      "Courthouse Arlington junk removal — condo turnovers, county-government area. Call (571) 505-9697.",
    intro: [
      "Courthouse's mid-rise condos and government-adjacent commercial give us steady weekday work. We keep the buildings happy.",
    ],
    neighborhoods: ["Colonial Village", "Lyon Village"],
    landmarks: ["Arlington County Courthouse", "Courthouse Metro"],
    roads: ["I-66", "Wilson Boulevard", "Clarendon Boulevard"],
  },
  {
    slug: "warrenton",
    name: "Warrenton",
    fullName: "Warrenton, VA",
    type: "city",
    county: fq,
    zips: ["20186", "20187"],
    metaTitle: "Junk Removal in Warrenton, VA | Out Junk Out",
    metaDescription:
      "Warrenton junk removal — large-property cleanouts, barn and farm work, hot tub demo. Call (571) 505-9697.",
    intro: [
      "Warrenton means properties with elbow room — multi-acre lots, barns, outbuildings, and the kind of accumulated storage that's been there for two generations.",
      "We bring rural-access trucks and bigger crews. Saturday and evening windows available.",
    ],
    neighborhoods: ["Old Town Warrenton", "Brookside", "Casanova"],
    landmarks: ["Old Town Warrenton", "Airlie Center", "Whitney State Forest"],
    roads: ["Route 29", "Route 17", "Route 211", "Route 28"],
  },
];

export const counties: County[] = ["Fairfax", "Arlington", "Loudoun", "Prince William", "Alexandria", "Fauquier"];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
