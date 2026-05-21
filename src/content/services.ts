export type ServiceCategory = "removal" | "cleanout" | "demolition" | "commercial" | "specialty";

export interface Service {
  slug: string;
  category: ServiceCategory;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  image?: string;
  intro: string[];
  whatsIncluded: string[];
  items?: string[];
  process?: string[];
  whyUs?: string[];
  related: string[];
  faq?: { q: string; a: string }[];
}

const closingProcess = [
  "Send us a photo, call, or fill out the quote form — anytime, day or night.",
  "We confirm a free estimate based on the space your junk takes up in the truck.",
  "You pick a window that works for you — same-day options most weeks.",
  "Our crew arrives, loads everything, and sweeps the area before they leave.",
  "Items get sorted for donation or recycling first, with the rest hauled to a licensed facility.",
];

export const services: Service[] = [
  {
    slug: "appliance-removal",
    category: "removal",
    title: "Appliance Removal",
    h1: "Appliance Removal in Northern Virginia",
    metaTitle: "Appliance Removal in Northern VA | Out Junk Out",
    metaDescription:
      "Fridge, washer, dryer, oven, AC — Out Junk Out hauls heavy appliances out of any room in Fairfax, Arlington, Springfield and across Northern VA. Same-day pickup available.",
    hero: "/images/services/Appliance-junk-removal.jpg",
    intro: [
      "When an appliance dies, the worst part isn't shopping for the new one — it's wrestling the old one out of the house. We do the wrestling for you.",
      "Our crews routinely move refrigerators down basement stairs, slide washers out of tight laundry closets, and detach in-wall AC units without damaging the trim. You point. We carry.",
    ],
    whatsIncluded: [
      "Disconnecting and capping the appliance safely before haul",
      "Floor and wall protection on the path out of the home",
      "Loading from any room, any floor — basements and attics included",
      "Eco-routing: recyclable metal goes to certified scrap, working units get donated",
    ],
    items: [
      "Refrigerators and freezers",
      "Washers and dryers",
      "Ovens, ranges, and cooktops",
      "Dishwashers",
      "Microwaves and range hoods",
      "Water heaters (gas or electric)",
      "Window and wall AC units",
      "Furnaces, radiators, baseboard heaters",
      "Small kitchen appliances",
    ],
    related: ["water-heater-disposal", "electronics-removal", "kitchen-demolition"],
    process: closingProcess,
  },
  {
    slug: "furniture-removal",
    category: "removal",
    title: "Furniture Removal",
    h1: "Furniture Removal & Haul-Away in Northern Virginia",
    metaTitle: "Furniture Removal in Northern VA | Out Junk Out",
    metaDescription:
      "Couches, mattresses, dressers, dining sets — we haul any piece of furniture out of any room. Same-day furniture removal across Fairfax, Arlington and Northern VA.",
    hero: "/images/services/furniture-removal.jpg",
    intro: [
      "A sofa that won't fit through the new front door, a sectional you outgrew, a mattress no charity will pick up. We take it.",
      "Sergio, Tommy and the rest of the crew show up with straps, blankets and dollies — the things people forget they need until they're stuck on the staircase landing.",
    ],
    whatsIncluded: [
      "Disassembly when furniture won't fit through the doorway",
      "Wall, floor and railing protection on the carry-out path",
      "Donation routing for usable pieces (we work with several NoVA non-profits)",
      "Mattress recycling at certified facilities — they don't hit the landfill",
    ],
    items: [
      "Sofas, sectionals, loveseats, recliners",
      "Mattresses, box springs, bed frames",
      "Dressers, armoires, wardrobes",
      "Dining tables and chairs",
      "Office desks and chairs",
      "Pianos and organs (uprights)",
      "Patio furniture and umbrellas",
      "Entertainment centers and bookcases",
    ],
    related: ["apartment-cleanout", "moving-cleanout", "bed-bug-furniture-removal"],
    process: closingProcess,
  },
  {
    slug: "hot-tub-removal",
    category: "demolition",
    title: "Hot Tub Removal",
    h1: "Hot Tub & Jacuzzi Removal in Northern Virginia",
    metaTitle: "Hot Tub Removal in Northern VA | Out Junk Out",
    metaDescription:
      "Old hot tub or jacuzzi taking up the backyard? We disconnect, break it down, and haul it away the same day. Serving Fairfax, Loudoun, Arlington and Prince William.",
    hero: "/images/services/jacuzzi.webp",
    intro: [
      "Hot tubs aren't a one-person job. Ours weigh 600-900 lbs dry, more if there's still water inside, and they don't fit through gates without strategy.",
      "We cut, lift, or sectionally demo a tub depending on the space — and we haul everything off the property in the same visit. No second trip, no scheduling games.",
    ],
    whatsIncluded: [
      "Power and plumbing disconnect at the unit",
      "Drainage if the tub still has water",
      "Cut-and-carry demo when the tub can't be wheeled out whole",
      "Site sweep — concrete pad stays, debris doesn't",
    ],
    related: ["pool-removal", "deck-demolition", "shed-demolition"],
    process: closingProcess,
  },
  {
    slug: "pool-removal",
    category: "demolition",
    title: "Above-Ground Pool Removal",
    h1: "Above-Ground Pool Removal in Northern Virginia",
    metaTitle: "Pool Removal & Demo in Northern VA | Out Junk Out",
    metaDescription:
      "Above-ground pool removal, dismantling, and haul-off across Northern Virginia. We drain, break it down, and take everything with us in one visit.",
    hero: "/images/services/pool-removal.jpg",
    intro: [
      "An empty above-ground pool turns into a backyard eyesore fast. We drain, dismantle the wall, take down the liner, and haul off the frame in a single visit.",
      "If you're planning to seed grass or pour a pad where the pool used to sit, we can also strip out the sand base.",
    ],
    whatsIncluded: [
      "Controlled drainage to the right grade so the yard doesn't flood",
      "Dismantling the steel or resin walls, liner, ladder, and pump",
      "Sand-base removal if you're prepping the spot for new use",
      "Loading and hauling every piece off the property",
    ],
    related: ["hot-tub-removal", "deck-demolition", "playset-removal"],
    process: closingProcess,
  },
  {
    slug: "playset-removal",
    category: "demolition",
    title: "Playset & Swing Set Removal",
    h1: "Playset & Swing Set Removal in Northern Virginia",
    metaTitle: "Swing Set & Playset Removal in Northern VA | Out Junk Out",
    metaDescription:
      "Kids outgrew the swing set? We dismantle wood and metal playsets, sandboxes and trampolines, and haul everything off — usually same-day.",
    hero: "/images/services/playset-removal.jpg",
    intro: [
      "Cedar swing sets and Rainbow play structures look great until the kids stop using them — then they're a yard hog. We bring the right tools to break them down without tearing up the grass.",
      "Sand from the box, the rubber mulch, the anchor posts — it all goes when we do.",
    ],
    whatsIncluded: [
      "Full disassembly of wood, vinyl or metal sets",
      "Removal of anchors, footings and ground sleeves",
      "Bagging and removing rubber mulch or play sand",
      "Trampoline and basketball-hoop removal",
    ],
    related: ["shed-demolition", "deck-demolition", "pool-removal"],
    process: closingProcess,
  },
  {
    slug: "mobile-home-demolition",
    category: "demolition",
    title: "Mobile Home & Mini-Home Demolition",
    h1: "Mobile Home Demolition in Northern Virginia",
    metaTitle: "Mobile Home Demolition in Northern VA | Out Junk Out",
    metaDescription:
      "Tear-down and haul-off of mobile homes, mini-homes, and trailers across Northern VA. Permitting guidance, full demo, and complete site clearing.",
    hero: "/images/services/mobile-home-demolition.jpg",
    intro: [
      "Mobile-home tear-downs aren't a one-truck job — they need permits, a plan for utilities, and a crew that's done it before. We bring all three.",
      "We handle everything from disconnecting and de-tagging to demo, scrapping the chassis, and clearing the pad.",
    ],
    whatsIncluded: [
      "Coordination on power, water, and sewer disconnects",
      "Full demolition of the unit including roof, walls and chassis",
      "Steel and aluminum recycling routed to certified scrappers",
      "Pad and tie-down cleanup so the site is ready for what's next",
    ],
    related: ["shed-demolition", "kitchen-demolition", "barn-cleanout"],
    process: closingProcess,
  },
  {
    slug: "bathroom-demolition",
    category: "demolition",
    title: "Bathroom Demolition",
    h1: "Bathroom Demolition in Northern Virginia",
    metaTitle: "Bathroom Demo & Gut-Out in Northern VA | Out Junk Out",
    metaDescription:
      "Renovating? We gut tile, vanities, tubs and toilets and haul it all out the same day. Bathroom demo for homeowners and contractors across Northern VA.",
    hero: "/images/services/bathroom-demolition.jpg",
    intro: [
      "If your contractor's quote got a lot cheaper when you offered to handle the demo yourself — let us be the people who actually do it. We strip a full bathroom to studs in a single visit.",
      "We work with floor protection from the front door to the bath, so the rest of the house stays clean.",
    ],
    whatsIncluded: [
      "Removal of tile, vanities, mirrors, lighting and trim",
      "Disconnect and haul of toilets, tubs and shower pans",
      "Stripping subfloor when needed",
      "Final sweep — your contractor walks into a clean shell",
    ],
    related: ["kitchen-demolition", "outdoor-kitchen-demolition", "property-cleanout"],
    process: closingProcess,
  },
  {
    slug: "outdoor-kitchen-demolition",
    category: "demolition",
    title: "Outdoor Kitchen Demolition",
    h1: "Outdoor Kitchen Demolition in Northern Virginia",
    metaTitle: "Outdoor Kitchen Demo in Northern VA | Out Junk Out",
    metaDescription:
      "Removing or redesigning a patio kitchen? We demo stone counters, built-in grills, smokers, and storage cabinets — and haul it all off in one visit.",
    hero: "/images/services/outdoor-kitchen-demolition.jpg",
    intro: [
      "Outdoor kitchens age faster than people expect — Virginia winters are tough on stone counters and built-in appliances. When it's time for a refresh, we strip the old one down to the slab.",
      "Stone, masonry, stainless and stucco all come out cleanly.",
    ],
    whatsIncluded: [
      "Disconnecting gas, electric, and water lines",
      "Removing stone counters and base cabinets",
      "Hauling out built-in grills, smokers and refrigerators",
      "Cleaning the slab so the next build starts on a fresh surface",
    ],
    related: ["built-in-bbq-removal", "kitchen-demolition", "deck-demolition"],
    process: closingProcess,
  },
  {
    slug: "built-in-bbq-removal",
    category: "demolition",
    title: "Built-In BBQ Removal",
    h1: "Built-In BBQ & Grill Removal in Northern Virginia",
    metaTitle: "Built-In BBQ Removal in Northern VA | Out Junk Out",
    metaDescription:
      "Old built-in BBQ pulling down property value? We disconnect the gas line, remove the grill, and haul out the surround in a single visit.",
    hero: "/images/services/built-in-bbq.jpg",
    intro: [
      "A cracked tile surround and a corroded grill is a buyer's red flag — but it doesn't have to be expensive to fix. We pop the grill and the masonry out fast.",
      "If you want the gas capped at the source rather than at the unit, we'll coordinate with a licensed plumber.",
    ],
    whatsIncluded: [
      "Safe gas-line shutoff and disconnect at the unit",
      "Removal of the grill, side burners, and warming drawers",
      "Demo of the stone, brick or stucco surround",
      "Site cleanup ready for new build or patio repair",
    ],
    related: ["outdoor-kitchen-demolition", "deck-demolition", "hot-tub-removal"],
    process: closingProcess,
  },
  {
    slug: "carpet-removal",
    category: "removal",
    title: "Carpet Removal",
    h1: "Carpet Removal & Haul-Away in Northern Virginia",
    metaTitle: "Carpet Removal in Northern VA | Out Junk Out",
    metaDescription:
      "Tearing out carpet for hardwood or LVP? We pull carpet, pad, tack strips and staples — and haul it all to the truck. Same-day in Fairfax & Arlington.",
    hero: "/images/services/Carpet.Removal.Fairfax.Virginia.OutJunkOut.webp",
    intro: [
      "Pulling carpet sounds easy until you're knee-deep in staples and the dust is everywhere. We do it the fast way: cut, roll, haul, repeat.",
      "Floors come back clean to the subfloor — ready for whatever you're installing next.",
    ],
    whatsIncluded: [
      "Cutting carpet into manageable rolls",
      "Removing pad, tack strips, and staples",
      "Vacuuming the subfloor before we leave",
      "All material loaded into the truck in one visit",
    ],
    related: ["furniture-removal", "moving-cleanout", "property-cleanout"],
    process: closingProcess,
  },
  {
    slug: "water-heater-disposal",
    category: "removal",
    title: "Water Heater Disposal",
    h1: "Water Heater Removal & Disposal in Northern Virginia",
    metaTitle: "Water Heater Removal in Northern VA | Out Junk Out",
    metaDescription:
      "Replacing a water heater? We haul the old tank — gas or electric — out of basements, garages and closets. Same-day pickup across Fairfax County.",
    hero: "/images/services/water-heater.jpg",
    intro: [
      "Plumbers love installing the new tank. They don't love wrestling the old corroded one up the stairs. We're the people they call.",
      "Whether it's a 40-gallon gas unit in a tight utility closet or an 80-gallon electric tank in a finished basement, we get it out without scarring the walls.",
    ],
    whatsIncluded: [
      "Drain-down and capping if the plumber hasn't done it yet",
      "Loading from any floor — including basements with bulkhead-only access",
      "Steel recycling at a certified scrapper",
      "Floor protection on the carry-out path",
    ],
    related: ["appliance-removal", "basement-cleanout", "garage-cleanout"],
    process: closingProcess,
  },
  {
    slug: "electronics-removal",
    category: "removal",
    title: "E-Waste & Electronics Removal",
    h1: "Electronics & E-Waste Removal in Northern Virginia",
    metaTitle: "Electronics Removal & E-Waste in Northern VA | Out Junk Out",
    metaDescription:
      "Old TVs, monitors, computers, printers, copiers — we haul them off and route to certified e-waste recyclers. Office and home pickups across Northern VA.",
    hero: "/images/services/electronics-removal.jpg",
    intro: [
      "Tossing an old CRT or a stack of office monitors in the dumpster isn't just illegal in Virginia — it's the kind of thing that ends up on the news. We route every piece to certified e-waste recyclers.",
      "Hard drives can be wiped, shredded or returned to you before pickup. Your call.",
    ],
    whatsIncluded: [
      "TVs (flat-panel and CRT), monitors and projectors",
      "Desktops, laptops, servers, copiers and printers",
      "Networking gear, UPS units, batteries",
      "Documented e-waste routing for HIPAA / FERPA / corporate IT trails",
    ],
    related: ["office-cleanout", "warehouse-cleanout", "equipment-removal"],
    process: closingProcess,
  },
  {
    slug: "equipment-removal",
    category: "commercial",
    title: "Equipment Removal",
    h1: "Equipment Removal in Northern Virginia",
    metaTitle: "Commercial Equipment Removal in Northern VA | Out Junk Out",
    metaDescription:
      "Restaurant equipment, gym gear, machinery, server racks — we disconnect and haul commercial equipment of any size across Northern VA.",
    hero: "/images/services/equipment-removal.jpg",
    intro: [
      "If it's bolted down, runs on 220V, or needs a pallet jack — we've moved it. Closing a restaurant, downsizing a gym, swapping a CNC, we've done it.",
      "We bring our own dollies, straps, ramps, and (when needed) extra hands to keep the schedule.",
    ],
    whatsIncluded: [
      "Disconnection of water, gas, and 220V power at the unit",
      "Loading from second-floor offices and basement workshops",
      "Coordination with property managers and loading-dock windows",
      "Resale, donation, or scrap routing depending on the asset",
    ],
    related: ["commercial-junk-removal", "office-cleanout", "warehouse-cleanout"],
    process: closingProcess,
  },
  {
    slug: "medical-furniture-removal",
    category: "commercial",
    title: "Medical Furniture Removal",
    h1: "Medical & Dental Furniture Removal in Northern Virginia",
    metaTitle: "Medical Office Furniture Removal in Northern VA | Out Junk Out",
    metaDescription:
      "Dental chairs, exam tables, X-ray equipment, waiting-room furniture — we clear out medical and dental offices on weekends so you don't miss patients.",
    hero: "/images/services/medical-furniture.jpg",
    intro: [
      "Medical office furniture moves are different — there are bio-hazard rules to follow, sensitive cabinetry to protect, and patients you can't disrupt. We work nights and weekends to keep your schedule intact.",
      "We handle dental ops, physical therapy rooms, urgent-care builds, and full medical-office cleanouts.",
    ],
    whatsIncluded: [
      "Removal of exam tables, dental chairs, X-ray and imaging units",
      "Waiting-room furniture and reception millwork",
      "Confidential records destruction routing (we partner with shredders)",
      "Weekend and after-hours scheduling at no surcharge",
    ],
    related: ["office-cleanout", "commercial-junk-removal", "equipment-removal"],
    process: closingProcess,
  },
  // ─── CLEANOUTS ──────────────────────────────────────────────
  {
    slug: "property-cleanout",
    category: "cleanout",
    title: "Property Cleanout",
    h1: "Property Cleanouts in Northern Virginia",
    metaTitle: "Property Cleanout Services in Northern VA | Out Junk Out",
    metaDescription:
      "Full property cleanouts for realtors, landlords and homeowners. We clear houses, garages, sheds and yards in one visit — Northern Virginia.",
    hero: "/images/services/property-cleanout.jpg",
    intro: [
      "Whether you're prepping a listing, settling an estate, or finally clearing a tenant's leftovers — we take it from a full property to a broom-swept shell in one job.",
      "We bring the trucks, the people, and the dumpsters if the volume calls for it.",
    ],
    whatsIncluded: [
      "Interior cleanout — every room, closet, and crawl space",
      "Garage, shed, and yard debris removal",
      "Donation and recycling routing on usable items",
      "Final sweep so the property is photo-ready",
    ],
    related: ["estate-cleanout", "foreclosure-cleanout", "eviction-cleanout"],
    process: closingProcess,
  },
  {
    slug: "apartment-cleanout",
    category: "cleanout",
    title: "Apartment Cleanout",
    h1: "Apartment Cleanouts in Northern Virginia",
    metaTitle: "Apartment Cleanout Services in Northern VA | Out Junk Out",
    metaDescription:
      "Moving out, downsizing, or turning a unit over? We clear apartments top-to-bottom across Arlington, Tysons, Reston and Fairfax. Same-day available.",
    hero: "/images/services/Apartment-cleanout-640w.webp",
    intro: [
      "High-rises in Pentagon City, garden apartments in Annandale, condos in Reston — we know which loading docks need reservation, which freight elevators are slow, and how to keep building management happy.",
      "If you've got 20 minutes on the truck-bay schedule, we can work with that.",
    ],
    whatsIncluded: [
      "Full apartment clear — every closet, every drawer",
      "COI on file for buildings that require it",
      "Donation pickup for kitchen and gently-used furniture",
      "Building hallway and elevator cleanup after load-out",
    ],
    related: ["moving-cleanout", "furniture-removal", "rental-cleanout"],
    process: closingProcess,
  },
  {
    slug: "estate-cleanout",
    category: "cleanout",
    title: "Estate Cleanout",
    h1: "Estate Cleanouts in Northern Virginia",
    metaTitle: "Estate Cleanout Services in Northern VA | Out Junk Out",
    metaDescription:
      "Compassionate, full-service estate cleanouts for families, executors, and probate attorneys across Northern VA. We sort, donate, recycle, and haul.",
    hero: "/images/services/estate-cleanout.jpg",
    intro: [
      "Estate cleanouts are heavier than a regular haul — emotionally as much as physically. We move at the pace the family needs, and we'll set aside anything you ask us to.",
      "We work with executors, probate attorneys, and out-of-state family who can only be on-site for a weekend.",
    ],
    whatsIncluded: [
      "Slow, careful sort — set aside everything family wants saved",
      "Donation pickup routing for furniture, clothing, kitchenware",
      "Records and document handling (we shred or hand to you)",
      "Photo documentation of contents on request",
    ],
    related: ["hoarder-cleanout", "property-cleanout", "home-cleanout"],
    process: closingProcess,
  },
  {
    slug: "garage-cleanout",
    category: "cleanout",
    title: "Garage Cleanout",
    h1: "Garage Cleanouts in Northern Virginia",
    metaTitle: "Garage Cleanout Services in Northern VA | Out Junk Out",
    metaDescription:
      "Get your garage back. We clear out years of stored junk, old paint, mowers and tools — and you park your car inside again. Northern VA.",
    hero: "/images/services/garage-cleanout.jpg",
    intro: [
      "Most NoVA garages haven't seen a car in years. Lawn equipment, kids' bikes, paint cans from 2014, the workbench that became a junk drawer. We clear all of it.",
      "Hazardous items like old paint, oil and chemicals get routed to the proper drop-off sites — we don't toss them in the truck.",
    ],
    whatsIncluded: [
      "Removal of old tools, equipment and yard gear",
      "Bike, mower and snowblower removal",
      "Proper handling of paint, solvents, and oil",
      "Sweep-out so the garage floor is clean",
    ],
    related: ["basement-cleanout", "attic-cleanout", "shed-demolition"],
    process: closingProcess,
  },
  {
    slug: "attic-cleanout",
    category: "cleanout",
    title: "Attic Cleanout",
    h1: "Attic Cleanouts in Northern Virginia",
    metaTitle: "Attic Cleanout Services in Northern VA | Out Junk Out",
    metaDescription:
      "Decades of attic storage gone in a day. We crawl, sort and haul — boxes, insulation, old furniture — across Fairfax, Arlington and Loudoun.",
    hero: "/images/services/attic-cleanout.jpg",
    intro: [
      "Attics in Northern VA tend to collect the things nobody wanted to throw out — old college textbooks, the wedding dress from 1986, three generations of holiday decor. We respect what's worth keeping and clear the rest.",
      "We bring portable lighting, dust masks, and the patience the job needs.",
    ],
    whatsIncluded: [
      "Crawl-space cleanout including low-clearance attics",
      "Box and storage-bin removal — emptied or whole",
      "Old insulation pulldown (loose and batt)",
      "Sweep and vacuum on the way out",
    ],
    related: ["basement-cleanout", "garage-cleanout", "hoarder-cleanout"],
    process: closingProcess,
  },
  {
    slug: "basement-cleanout",
    category: "cleanout",
    title: "Basement Cleanout",
    h1: "Basement Cleanouts in Northern Virginia",
    metaTitle: "Basement Cleanout Services in Northern VA | Out Junk Out",
    metaDescription:
      "Reclaim the basement. We haul out water-damaged furniture, old appliances, junk piles and unfinished projects across Northern Virginia.",
    hero: "/images/services/basement-cleanout.jpg",
    intro: [
      "Basements hide more than people think — old paint cans, the dehumidifier nobody remembered to drain, the recliner that's been there since the previous owner. We get it all out, even up the narrow stairs.",
      "If there's water damage, we'll bag and dispose of soft items the right way so the smell goes with them.",
    ],
    whatsIncluded: [
      "Full clear from bulkhead or interior stairs",
      "Water-damaged furniture and rug removal",
      "Old paint, chemical, and oil routing",
      "Junk piles, boxes and bins of any size",
    ],
    related: ["water-heater-disposal", "appliance-removal", "garage-cleanout"],
    process: closingProcess,
  },
  {
    slug: "barn-cleanout",
    category: "cleanout",
    title: "Barn & Outbuilding Cleanout",
    h1: "Barn & Outbuilding Cleanouts in Northern Virginia",
    metaTitle: "Barn Cleanout Services in Northern VA | Out Junk Out",
    metaDescription:
      "Old hay, tack, equipment and decades of stored junk hauled out of barns and outbuildings. Loudoun, Fauquier and western Fairfax horse country.",
    hero: "/images/services/Barn-cleanup-160w.webp",
    intro: [
      "Loudoun and Fauquier horse country is full of barns that have outlived their use — and they tend to fill up with everything from rusted equipment to old fencing.",
      "We bring trailers and trucks sized for rural access, plus the manpower to clear a barn in a day instead of a week.",
    ],
    whatsIncluded: [
      "Old hay, feed, and tack removal",
      "Tractor implements, fencing, and machinery",
      "Metal scrap routed to certified recyclers",
      "Loft cleanout including dropped flooring",
    ],
    related: ["farm-cleanout", "shed-demolition", "equipment-removal"],
    process: closingProcess,
  },
  {
    slug: "office-cleanout",
    category: "commercial",
    title: "Office Cleanout",
    h1: "Office Cleanouts in Northern Virginia",
    metaTitle: "Office Cleanout Services in Northern VA | Out Junk Out",
    metaDescription:
      "Lease ending? Downsizing? We clear offices of furniture, cubicles, servers and decades of files — nights and weekends to skip downtime.",
    hero: "/images/services/office-cleanout.jpg",
    intro: [
      "Office moves and shutdowns usually need to happen overnight — you can't have a half-empty floor when staff come in Monday. We work the off-hours.",
      "Cubicles, conference furniture, server racks, breakroom appliances, decades of files — we handle the whole list.",
    ],
    whatsIncluded: [
      "Cubicle breakdown and removal",
      "Server-rack and IT-gear handling with e-waste routing",
      "Confidential document destruction coordination",
      "Final broom-sweep for landlord walk-through",
    ],
    related: ["commercial-junk-removal", "electronics-removal", "warehouse-cleanout"],
    process: closingProcess,
  },
  {
    slug: "warehouse-cleanout",
    category: "commercial",
    title: "Warehouse Cleanout",
    h1: "Warehouse Cleanouts in Northern Virginia",
    metaTitle: "Warehouse Cleanout Services in Northern VA | Out Junk Out",
    metaDescription:
      "Pallet racking, machinery, dead inventory, and decades of warehouse buildup — we clear it all out. Roll-off and box-truck options across Northern VA.",
    hero: "/images/services/warehouse-cleanout.jpg",
    intro: [
      "When a warehouse needs to be turned back to a landlord, the leftover pallets, racking, and dead stock can take weeks to clear by hand. We bring the labor, the trucks, and the disposal plan.",
      "We coordinate with dock managers, loading-dock schedules, and equipment-rental windows.",
    ],
    whatsIncluded: [
      "Pallet rack tear-down and scrap routing",
      "Dead inventory liquidation or disposal",
      "Machinery, forklift, and conveyor removal",
      "Floor sweep with shop-vac on the way out",
    ],
    related: ["commercial-junk-removal", "equipment-removal", "office-cleanout"],
    process: closingProcess,
  },
  {
    slug: "foreclosure-cleanout",
    category: "cleanout",
    title: "Foreclosure Cleanout",
    h1: "Foreclosure Cleanouts in Northern Virginia",
    metaTitle: "Foreclosure & REO Cleanouts in Northern VA | Out Junk Out",
    metaDescription:
      "REO trash-outs done fast and documented. Banks, asset managers, and real estate agents — we clear, photograph, and turn properties around.",
    hero: "/images/services/foreclosure-cleanout.jpg",
    intro: [
      "Banks and asset managers want one thing: photos showing the property is clear, secured, and ready for listing. We deliver that — usually within 48 hours of the work order.",
      "We document before, during, and after, and we know what to flag (water damage, broken locks, hazardous leftovers).",
    ],
    whatsIncluded: [
      "Full interior and exterior junk removal",
      "Photo documentation packaged for asset manager review",
      "Hazard reporting (mold, leaks, electrical)",
      "Donation routing on items left in usable condition",
    ],
    related: ["eviction-cleanout", "property-cleanout", "estate-cleanout"],
    process: closingProcess,
  },
  {
    slug: "eviction-cleanout",
    category: "cleanout",
    title: "Eviction Cleanout",
    h1: "Eviction Cleanouts in Northern Virginia",
    metaTitle: "Eviction & Trash-Out Services in Northern VA | Out Junk Out",
    metaDescription:
      "Landlord trash-outs done quickly, legally, and quietly. We follow VA storage rules and document the unit so you can turn it fast.",
    hero: "/images/services/eviction-cleanout.jpg",
    intro: [
      "Evictions are tense — for the tenant and the landlord. We work quietly, document everything, and respect Virginia's notice and storage rules.",
      "If the property manager needs photos for the file, we provide them. If you need a contractor on standby for paint and turnover, we can refer one.",
    ],
    whatsIncluded: [
      "Sorted removal that respects state storage rules where applicable",
      "Photo documentation for landlord and court records",
      "Trash, furniture and appliance removal in one visit",
      "Unit ready for turnover crew the same day",
    ],
    related: ["foreclosure-cleanout", "rental-cleanout", "apartment-cleanout"],
    process: closingProcess,
  },
  {
    slug: "home-cleanout",
    category: "cleanout",
    title: "Whole-Home Cleanout",
    h1: "Whole-Home Cleanouts in Northern Virginia",
    metaTitle: "Whole-Home Cleanout Services in Northern VA | Out Junk Out",
    metaDescription:
      "From front door to attic, we clear the entire home in one job. Estate, downsize, listing prep — Fairfax, Arlington and across Northern VA.",
    hero: "/images/services/home-cleanout.jpg",
    intro: [
      "Whole-home cleanouts happen for happy reasons (downsizing, listing the house) and tough ones (death in the family, divorce). We approach every one with the same care and the same plan: sort, save, donate, haul.",
      "We size the crew to the home — three movers for a townhouse, six or more for a large McLean property.",
    ],
    whatsIncluded: [
      "Every floor, every room, every closet",
      "Garage, shed, attic and crawl space",
      "Donation pickup paperwork for tax records",
      "Final clean so the home is move-ready",
    ],
    related: ["estate-cleanout", "property-cleanout", "moving-cleanout"],
    process: closingProcess,
  },
  {
    slug: "hoarder-cleanout",
    category: "cleanout",
    title: "Hoarder Cleanout",
    h1: "Hoarder Cleanouts in Northern Virginia",
    metaTitle: "Hoarder Cleanout Services in Northern VA | Out Junk Out",
    metaDescription:
      "Discreet, compassionate hoarder cleanouts across Northern Virginia. We work with families and case workers — no judgment, ever.",
    hero: "/images/services/hoarder-cleanout.jpg",
    intro: [
      "Hoarder cleanouts are sensitive work — for the person involved and for the family arranging it. We move at the pace the situation needs, we don't talk about the home to anyone, and we don't throw away anything you tell us to keep.",
      "We've worked alongside case workers, adult-protective services, and probate attorneys on tough situations across Fairfax County.",
    ],
    whatsIncluded: [
      "Discreet arrival in unmarked or low-key vehicles when requested",
      "Item-by-item sort with family approval at the door",
      "Bio-cleanup partner referral if the home needs deeper sanitation",
      "Complete confidentiality — we don't post photos, ever",
    ],
    related: ["estate-cleanout", "home-cleanout", "property-cleanout"],
    process: closingProcess,
  },
  {
    slug: "bed-bug-furniture-removal",
    category: "specialty",
    title: "Bed Bug Furniture Removal",
    h1: "Bed Bug Furniture Removal in Northern Virginia",
    metaTitle: "Bed Bug Furniture Removal in Northern VA | Out Junk Out",
    metaDescription:
      "Sealed, careful bed bug furniture haul-away. We wrap, contain, and transport infested mattresses and couches to certified disposal sites.",
    hero: "/images/services/bed-bugs-in-furnitures.webp",
    intro: [
      "Pulling an infested mattress through the house spreads bed bugs into every hallway it touches. We wrap items in plastic at the source — no shake-outs, no shortcuts.",
      "Items are transported sealed and disposed of at sites that handle infested materials properly.",
    ],
    whatsIncluded: [
      "Plastic wrap and seal at the point of pickup",
      "Sealed transport to certified disposal",
      "Truck and equipment sanitation after each job",
      "Same-day pickup where availability allows",
    ],
    related: ["furniture-removal", "apartment-cleanout", "moving-cleanout"],
    process: closingProcess,
  },
  {
    slug: "shed-demolition",
    category: "demolition",
    title: "Shed Demolition",
    h1: "Shed Demolition & Removal in Northern Virginia",
    metaTitle: "Shed Demolition in Northern VA | Out Junk Out",
    metaDescription:
      "Old wood or metal shed taking up the yard? We demo, haul off, and clean up — same day, across Northern VA.",
    hero: "/images/services/shed-demolition.jpg",
    intro: [
      "A 20-year-old wood shed full of cobwebs and old paint cans isn't doing anyone any favors. We knock it down, haul it off, and clear the pad.",
      "If you want the slab broken up too, just say the word.",
    ],
    whatsIncluded: [
      "Full demolition of wood, vinyl or metal sheds",
      "Removal of contents before tear-down",
      "Slab breakup and haul-off (optional)",
      "Site sweep so grass seed or new build can start",
    ],
    related: ["deck-demolition", "barn-cleanout", "garage-cleanout"],
    process: closingProcess,
  },
  {
    slug: "deck-demolition",
    category: "demolition",
    title: "Deck Demolition",
    h1: "Deck Demolition in Northern Virginia",
    metaTitle: "Deck Demolition in Northern VA | Out Junk Out",
    metaDescription:
      "Rotten or outdated deck? We tear it down to footings and haul every board off — no waste left in the yard. Northern VA.",
    hero: "/images/services/deck-demolition.jpg",
    intro: [
      "Old pressure-treated decks become a safety problem the second the boards go soft. We strip them down to footings (or below, if you want them out) and clear every nail.",
      "Footings can stay or come out — your choice.",
    ],
    whatsIncluded: [
      "Removal of boards, railings, and stairs",
      "Joists and ledger board removal",
      "Footings dug out on request",
      "Cleanup so the yard is ready for sod or rebuild",
    ],
    related: ["shed-demolition", "hot-tub-removal", "pool-removal"],
    process: closingProcess,
  },
  {
    slug: "kitchen-demolition",
    category: "demolition",
    title: "Kitchen Demolition",
    h1: "Kitchen Demolition in Northern Virginia",
    metaTitle: "Kitchen Demo & Gut-Out in Northern VA | Out Junk Out",
    metaDescription:
      "Cabinets, counters, tile and old appliances out in a day. We gut kitchens for homeowners and contractors across Northern Virginia.",
    hero: "/images/services/kitchen-demolition.jpg",
    intro: [
      "When a kitchen reno starts, the slowest part is usually getting the old kitchen out of the house. We do that part fast.",
      "Cabinets, counters, backsplash, floor tile, appliances — we strip the room to studs and floor joists.",
    ],
    whatsIncluded: [
      "Cabinet, counter, and backsplash removal",
      "Appliance disconnect and haul",
      "Floor tile and subfloor strip (optional)",
      "Floor protection on the path out of the home",
    ],
    related: ["bathroom-demolition", "outdoor-kitchen-demolition", "property-cleanout"],
    process: closingProcess,
  },
  {
    slug: "retail-closure-cleanout",
    category: "commercial",
    title: "Plaza & Retail Closure Cleanout",
    h1: "Retail & Plaza Closure Cleanouts in Northern Virginia",
    metaTitle: "Retail Closure Cleanout in Northern VA | Out Junk Out",
    metaDescription:
      "Closing a store? We clear fixtures, signage, racks, displays and inventory — and turn the space back to the landlord, fast.",
    hero: "/images/services/retail-closure.jpg",
    intro: [
      "Retail closures run on a hard deadline — the landlord wants the keys back, the leaseholder wants out, and there's a lot of fixtures and dead stock standing in the way.",
      "We work nights to keep the storefront looking normal during business hours, or daytime if the lease is already up.",
    ],
    whatsIncluded: [
      "Slatwall, gondolas, displays, and racks",
      "Signage, lighting, and ceiling-mounted graphics",
      "POS systems and computers (e-waste routed)",
      "Floor sweep and final landlord walk-through prep",
    ],
    related: ["commercial-junk-removal", "office-cleanout", "warehouse-cleanout"],
    process: closingProcess,
  },
  {
    slug: "wedding-party-cleanout",
    category: "specialty",
    title: "Wedding & Event Cleanout",
    h1: "Wedding & Event Cleanout in Northern Virginia",
    metaTitle: "Wedding & Event Cleanout in Northern VA | Out Junk Out",
    metaDescription:
      "Post-wedding or post-event cleanup at venues, homes and tents. We haul everything away so you don't have to deal with it Sunday morning.",
    hero: "/images/services/wedding-cleanout.jpg",
    intro: [
      "Nobody wants to walk into the venue Sunday morning to deal with the trash from Saturday night. We come in, clear it, and you check out clean.",
      "Backyard weddings, corporate events, venue turnovers — we work the off-hours.",
    ],
    whatsIncluded: [
      "Catering and bar leftovers (food gets donated where possible)",
      "Decorations, signage, and rental cleanup coordination",
      "Linens routed to laundry partners on request",
      "Late-night and pre-dawn windows at no surcharge",
    ],
    related: ["commercial-junk-removal", "property-cleanout", "office-cleanout"],
    process: closingProcess,
  },
  {
    slug: "moving-cleanout",
    category: "cleanout",
    title: "Moving Cleanout",
    h1: "Moving Cleanouts in Northern Virginia",
    metaTitle: "Moving Cleanout Services in Northern VA | Out Junk Out",
    metaDescription:
      "Moving out? We clear what doesn't make the truck — old furniture, mattresses, paint cans, attic boxes — same day, no fuss.",
    hero: "/images/services/moving-cleanout.jpg",
    intro: [
      "The movers haul what you want. We haul what you don't. Coffee tables that won't fit the new place, mattresses you're upgrading, the contents of the attic — gone before you hand back the keys.",
      "We can come in before the move (to lighten the load) or after (to clear the leftovers).",
    ],
    whatsIncluded: [
      "Pre-move declutter to lighten the moving bill",
      "Post-move haul of leftovers and trash",
      "Donation routing for items in good shape",
      "Final broom-sweep for the landlord or buyer",
    ],
    related: ["apartment-cleanout", "home-cleanout", "furniture-removal"],
    process: closingProcess,
  },
  {
    slug: "storage-unit-cleanout",
    category: "cleanout",
    title: "Storage Unit Cleanout",
    h1: "Storage Unit Cleanouts in Northern Virginia",
    metaTitle: "Storage Unit Cleanout Services in Northern VA | Out Junk Out",
    metaDescription:
      "Done paying for storage? We clear the unit, donate what's good, recycle what we can, and haul the rest. Northern VA.",
    hero: "/images/services/storage-unit-cleanout.jpg",
    intro: [
      "Every storage unit reaches a point where the rent costs more than the contents are worth. When you're ready to let go, we make it a single afternoon.",
      "We work with most NoVA storage facilities directly — Public Storage, Extra Space, CubeSmart and the rest.",
    ],
    whatsIncluded: [
      "Full unit clear — top to bottom, back to front",
      "Donation pickup for usable items",
      "Sorted disposal: metal, e-waste, general waste routed correctly",
      "Empty unit handed back ready for inspection",
    ],
    related: ["moving-cleanout", "furniture-removal", "apartment-cleanout"],
    process: closingProcess,
  },
  {
    slug: "commercial-junk-removal",
    category: "commercial",
    title: "Commercial Junk Removal",
    h1: "Commercial Junk Removal in Northern Virginia",
    metaTitle: "Commercial Junk Removal in Northern VA | Out Junk Out",
    metaDescription:
      "Offices, retail, warehouses, restaurants — we clear commercial spaces fast, document for landlords, and route everything responsibly.",
    hero: "/images/services/Commercial-junk-removal-640w.webp",
    intro: [
      "Property managers, landlords, and corporate facilities teams call us when a tenant leaves a mess, a build-out wraps, or a space needs to be reset between leases.",
      "We document the job for asset managers, invoice on company terms, and work nights or weekends to avoid disrupting open spaces.",
    ],
    whatsIncluded: [
      "Net-30 corporate billing available",
      "COI on file for properties that require it",
      "Documentation package for asset managers",
      "Service across every NoVA commercial corridor",
    ],
    related: ["office-cleanout", "warehouse-cleanout", "retail-closure-cleanout"],
    process: closingProcess,
  },
  {
    slug: "storm-cleanout",
    category: "specialty",
    title: "Storm & Disaster Cleanout",
    h1: "Storm Damage Cleanouts in Northern Virginia",
    metaTitle: "Storm & Disaster Cleanouts in Northern VA | Out Junk Out",
    metaDescription:
      "After a storm, we haul fallen branches, soaked drywall, ruined furniture, and damaged appliances. Same-day response across Northern VA.",
    hero: "/images/services/storm-cleanout.jpg",
    intro: [
      "Derechos and hurricanes don't care about your weekend plans. When wind or water damages your property, we get on-site fast and start clearing what insurance is going to replace.",
      "We coordinate with adjusters and document everything by photo before it leaves the property.",
    ],
    whatsIncluded: [
      "Soaked drywall, insulation, and flooring removal",
      "Damaged furniture and appliance haul",
      "Storm debris and fallen tree-branch cleanup",
      "Photo documentation for insurance claims",
    ],
    related: ["property-cleanout", "appliance-removal", "carpet-removal"],
    process: closingProcess,
  },
  {
    slug: "rental-cleanout",
    category: "cleanout",
    title: "Rental Cleanout",
    h1: "Rental Property Cleanouts in Northern Virginia",
    metaTitle: "Rental Cleanout Services in Northern VA | Out Junk Out",
    metaDescription:
      "Landlords and property managers — we turn units fast. Junk out, broom-swept, photo documented. Northern VA.",
    hero: "/images/services/rental-cleanout.jpg",
    intro: [
      "Tenant turnover days are tight — and every hour the unit sits empty costs money. We make junk removal the fastest part of the turn.",
      "We coordinate with painters, cleaners, and repair crews so the unit is rent-ready in days, not weeks.",
    ],
    whatsIncluded: [
      "Tenant-leftover furniture, mattresses, and appliances",
      "Trash bags, food waste, and cleaning needs",
      "Photo records for security-deposit decisions",
      "Standing schedule for property managers on request",
    ],
    related: ["eviction-cleanout", "apartment-cleanout", "property-cleanout"],
    process: closingProcess,
  },
  {
    slug: "farm-cleanout",
    category: "specialty",
    title: "Farm & Land Cleanout",
    h1: "Farm & Land Cleanouts in Northern Virginia",
    metaTitle: "Farm Cleanout Services in Northern VA | Out Junk Out",
    metaDescription:
      "Old equipment, fencing, scrap metal, abandoned tractors — we clear farms and rural land across Loudoun, Fauquier and Prince William.",
    hero: "/images/services/farm-cleanout.jpg",
    intro: [
      "Farms accumulate decades of broken implements, rusted fencing, old vehicles, and outbuilding leftovers. When it's time to clean the land — for sale, lease, or just sanity — we bring the trucks.",
      "We route metal to scrappers, route equipment to resale where possible, and haul the rest.",
    ],
    whatsIncluded: [
      "Tractors, implements, and broken machinery",
      "Fencing, wire, and old gates",
      "Outbuilding contents and demolition",
      "Brush and burn-pile cleanup",
    ],
    related: ["barn-cleanout", "shed-demolition", "equipment-removal"],
    process: closingProcess,
  },
];

export const serviceCategories: Record<ServiceCategory, { label: string; description: string }> = {
  removal: {
    label: "Removal",
    description: "Single-item and bulk pickups: appliances, furniture, electronics, carpet and more.",
  },
  cleanout: {
    label: "Cleanouts",
    description: "Whole-room and whole-property clears — homes, garages, basements, estates.",
  },
  demolition: {
    label: "Light Demolition",
    description: "Sheds, decks, hot tubs, kitchens, baths — we knock it down and haul it off.",
  },
  commercial: {
    label: "Commercial",
    description: "Offices, retail, warehouses, medical and restaurants — full-service clearouts.",
  },
  specialty: {
    label: "Specialty",
    description: "Storm cleanup, bed-bug furniture, weddings, farms — we've seen it.",
  },
};

export const getService = (slug: string) => services.find((s) => s.slug === slug);
