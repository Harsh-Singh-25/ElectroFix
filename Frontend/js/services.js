const services = [
    {
        id: "ac",
        ticket: "SVC-01 · AC REPAIR",
        heading: "Our AC Services",
        hero: {
            title: "Professional AC Repair & Service",
            description: "Installation, gas refilling, cooling repair, PCB repair and annual maintenance — handled by certified technicians, priced upfront."
        },
        button: "Book AC Technician",
        trust: [
            "4.8/5 rated",
            "90-day warranty",
            "Avg. 60 min arrival"
        ],
        cards: [
            {
                icon: "fa-snowflake",
                title: "AC Installation",
                description: "Professional installation for split, window and inverter ACs, all brands."
            },
            {
                icon: "fa-temperature-low",
                title: "Gas Refilling",
                description: "Complete gas charging with pressure and leak testing."
            },
            {
                icon: "fa-fan",
                title: "Cooling Issue",
                description: "Diagnose and fix low cooling, compressor and thermostat problems."
            },
            {
                icon: "fa-screwdriver-wrench",
                title: "General Service",
                description: "Filter cleaning, coil wash and full performance check-up."
            }
        ],
        issues: [
            "AC not cooling or blowing warm air",
            "Water leaking from indoor unit",
            "Unusual noise or vibration",
            "Remote or display not responding",
            "Frequent tripping or power cuts",
            "Foul smell from vents"
        ],
        pricing: [
            { service: "AC Installation", price: "₹799" },
            { service: "Gas Refilling", price: "₹1499" },
            { service: "General Service", price: "₹499" },
            { service: "Cooling Repair", price: "After Inspection" }
        ],
        contact: {
            title: "Need AC Repair Today?",
            description: "Our technician can reach your doorstep within 60 minutes."
        },
        footer: "© 2026 ElectroFix | AC Repair Service"
    },
    {
        id: "tv",
        ticket: "SVC-02 · LED TV REPAIR",
        heading: "Our T.V. Services",
        hero: {
            title: "Professional T.V. Repair & Service",
            description: "Wall mounting, backlight repair, motherboard fixing, sound troubleshooting, and panel maintenance — handled by certified technicians, priced upfront."
        },
        button: "Book T.V. Technician",
        trust: [
            "4.8/5 rated",
            "90-day warranty",
            "Avg. 60 min arrival"
        ],
        cards: [
            { icon: "fa-tv", title: "TV Wall Mounting", description: "Secure installation and uninstallation for LED, LCD, OLED, and Smart TVs on all wall types." },
            { icon: "fa-lightbulb", title: "Backlight Replacement", description: "Fixing dim screens, flashing pictures, or dark displays by replacing old LED strips." },
            { icon: "fa-microchip", title: "Motherboard Repair", description: "Diagnostic and micro-soldering fixes for dead power boards, logic boards, and HDMI ports." },
            { icon: "fa-screwdriver-wrench", title: "General Check-Up", description: "Internal dust removal, software updates, and color/sound calibration checks." }
        ],
        issues: [
            "TV screen turns on but has no picture or goes black",
            "Sound is working perfectly but screen shows no light",
            "TV is completely dead and power indicator light is off",
            "Horizontal or vertical colored lines appearing across the screen",
            "TV keeps turning off and restarting on its own continuously",
            "No sound or distorted audio coming from internal speakers"
        ],
        pricing: [
            { service: "TV Wall Mounting (Up to 43\")", price: "₹399" },
            { service: "TV Wall Mounting (Above 43\")", price: "₹599" },
            { service: "General Inspection & Dusting", price: "₹299" },
            { service: "Backlight & Board Repair", price: "After Inspection" }
        ],
        contact: {
            title: "Need T.V. Repair Today?",
            description: "Our technician can reach your doorstep within 60 minutes."
        },
        footer: "© 2026 ElectroFix | TV Repair Service"
    },
    {
        id: "fridge",
        ticket: "SVC-03 · Refrigerator REPAIR",
        heading: "Our Refrigerator Services",
        hero: {
            title: "Professional Refrigerator Repair & Service",
            description: "Installation, compressor checking, cooling repair and annual maintenance — handled by certified technicians, priced upfront."
        },
        button: "Book Refrigerator Technician",
        trust: [
            "4.8/5 rated",
            "90-day warranty",
            "Avg. 60 min arrival"
        ],
        cards: [
            { icon: "fa-snowflake", title: "Refrigerator Installation", description: "Professional installation for all refrigerator sizes, all brands." },
            { icon: "fa-temperature-low", title: "Gas Filling", description: "Complete gas refilling with pressure and leak testing." },
            { icon: "fa-fan", title: "Cooling Issue", description: "Diagnose and fix low cooling, compressor and thermostat problems." },
            { icon: "fa-screwdriver-wrench", title: "General Service", description: "Filter cleaning, coil wash, and full performance check-up." }
        ],
        issues: [
            "Refrigerator not cooling or blowing warm air",
            "Water leaking from compressor unit",
            "Unusual noise or vibration",
            "Remote or display not responding",
            "Frequent tripping or power cuts",
            "Foul smell from vents"
        ],
        pricing: [
            { service: "Refrigerator Installation", price: "₹799" },
            { service: "Pump Replace", price: "₹599" },
            { service: "General Service", price: "₹499" },
            { service: "Cooling Repair", price: "After Inspection" }
        ],
        contact: {
            title: "Need Refrigerator Repair Today?",
            description: "Our technician can reach your doorstep within 60 minutes."
        },
        footer: "© 2026 ElectroFix | Refrigerator Repair Service"
    },
    {
        id: "washingmachine",
        ticket: "SVC-04 · Washing Machine REPAIR",
        heading: "Our Washing Machine Services",
        hero: {
            title: "Professional Washing Machine Repair & Service",
            description: "Installation, drain pump fixing, drum bearing replacement, error code resolution, and annual maintenance — handled by certified technicians, priced upfront."
        },
        button: "Book Washing Machine Technician",
        trust: [
            "4.8/5 rated",
            "90-day warranty",
            "Avg. 60 min arrival"
        ],
        cards: [
            { icon: "fa-soap", title: "Setup & Installation", description: "Professional installation, inlet pipe plumbing, and perfect leveling for top and front load setups." },
            { icon: "fa-faucet-drip", title: "Drain Pump Swap", description: "Complete drain pump replacement, lint filter cleaning, and outlet pipe clearing to fix water clogging." },
            { icon: "fa-gear", title: "Drum & Motor Repair", description: "Fixing broken drum bearings, suspension springs, torn drive belts, and faulty spin motors." },
            { icon: "fa-screwdriver-wrench", title: "General Service", description: "Deep tub descaling, rubber gasket cleaning, water inlet valve flush, and safety check-up." }
        ],
        issues: [
            "Washing machine will not spin, agitate, or complete cycles",
            "Dirty water leaking from the bottom door or drain hose",
            "Heavy violent shaking, rattling, or thumping noise during spin",
            "Control panel flashing error codes or buttons not responding",
            "Machine stays dead or trips the main electric switch on startup",
            "Foul stagnant smells or mold buildup inside the washing tub"
        ],
        pricing: [
            { service: "Washing Machine Installation", price: "₹499" },
            { service: "Drain Pump Replacement", price: "₹549" },
            { service: "Deep Tub Descaling & Clean", price: "₹399" },
            { service: "PCB Motherboard & Motor Repair", price: "After Inspection" }
        ],
        contact: {
            title: "Need Washing Machine Repair Today?",
            description: "Our technician can reach your doorstep within 60 minutes."
        },
        footer: "© 2026 ElectroFix | Washing Machine Repair Service"
    },
    {
        id: "microwave",
        ticket: "SVC-05 · Microwave REPAIR",
        heading: "Our Microwave Services",
        hero: {
            title: "Professional Microwave Repair & Service",
            description: "Installation, turntable repair, control panel fixes, and routine maintenance — handled by certified technicians, priced upfront."
        },
        button: "Book Microwave Technician",
        trust: [
            "4.8/5 rated",
            "90-day warranty",
            "Avg. 60 min arrival"
        ],
        cards: [
            { icon: "fa-wave-square", title: "Microwave Installation", description: "Professional installation for microwaves, all brands." },
            { icon: "fa-rotate", title: "Turntable Motor Repair", description: "Repairing broken turntable motors, roller rings, and couplers to restore rotation." },
            { icon: "fa-border-all", title: "Control Panel Fix", description: "Fixing unresponsive touchpads, dead display screens, and faulty main control boards." },
            { icon: "fa-plug", title: "No-Power Fix", description: "Replacing blown thermal fuses, damaged power cords, and fixing short circuits." }
        ],
        issues: [
            "Microwave runs but food stays completely cold",
            "Sparks, arcing, or burning smells inside the cavity",
            "Glass plate / turntable does not rotate during cooking",
            "Touchpad buttons or start key not responding to touch",
            "Microwave does not turn on at all (dead display)",
            "Loud humming, buzzing, or rattling noises when running"
        ],
        pricing: [
            { service: "Microwave Installation", price: "₹799" },
            { service: "Grill Replace", price: "₹599" },
            { service: "General Service", price: "₹499" },
            { service: "Display Repair", price: "After Inspection" }
        ],
        contact: {
            title: "Need Microwave Repair Today?",
            description: "Our technician can reach your doorstep within 60 minutes."
        },
        footer: "© 2026 ElectroFix | Microwave Repair Service"
    },
    {
        id: "geyser",
        ticket: "SVC-06 · Geyser REPAIR",
        heading: "Our Geyser Services",
        hero: {
            title: "Professional Geyser Repair & Service",
            description: "Installation, pump checking, temperature control repair, and annual maintenance — handled by certified technicians, priced upfront."
        },
        button: "Book Geyser Technician",
        trust: [
            "4.8/5 rated",
            "90-day warranty",
            "Avg. 60 min arrival"
        ],
        cards: [
            { icon: "fa-faucet-drip", title: "Geyser Installation", description: "Professional mounting and plumbing for instant, storage, and gas geysers." },
            { icon: "fa-bolt", title: "Heating Element Change", description: "Complete replacement of burnt elements and sacrificial anodes to stop rusting." },
            { icon: "fa-temperature-high", title: "Temperature Control", description: "Diagnose and fix temperature control issues with the geyser." },
            { icon: "fa-soap", title: "Descaling Service", description: "Deep tank flush to remove hard water scale, mud, and improve heating speed." }
        ],
        issues: [
            "Water not heating or taking too long",
            "Water leaking from the main tank or safety valve",
            "Rust-colored or muddy water coming from taps",
            "Electric shocks or current felt on the tap water",
            "Geyser tripping the main MCB power switch instantly",
            "Popping or hissing noises coming from inside the tank"
        ],
        pricing: [
            { service: "Geyser Installation", price: "₹799" },
            { service: "Pump Replace", price: "₹599" },
            { service: "General Service", price: "₹499" },
            { service: "Cooling Repair", price: "After Inspection" }
        ],
        contact: {
            title: "Need Geyser Repair Today?",
            description: "Our technician can reach your doorstep within 60 minutes."
        },
        footer: "© 2026 ElectroFix | Geyser Repair Service"
    },
    {
        id: "cooler",
        ticket: "SVC-07 · Cooler REPAIR",
        heading: "Our Cooler Services",
        hero: {
            title: "Professional Cooler Repair & Service",
            description: "Installation, water pump replacement, fan motor repair, cooling pad fitting, and annual maintenance — handled by certified technicians, priced upfront."
        },
        button: "Book Cooler Technician",
        trust: [
            "4.8/5 rated",
            "90-day warranty",
            "Avg. 60 min arrival"
        ],
        cards: [
            { icon: "fa-truck-ramp-box", title: "Cooler Installation", description: "Professional unboxing, secure trolley mounting, and window frame fitting for all cooler sizes." },
            { icon: "fa-faucet-drip", title: "Water Pump Swap", description: "Complete replacement of dead submersible pumps, cleaning clogged water distributor pipes." },
            { icon: "fa-fan", title: "Motor & Swing Repair", description: "Fixing jammed fan blades, rewinding burnt main motors, and replacing broken swing louvers." },
            { icon: "fa-screwdriver-wrench", title: "General Service", description: "Tank pressure washing, water scale descaling, and installation of fresh Honeycomb or Aspen pads." }
        ],
        issues: [
            "Fan runs fine but the cooler is throwing warm air",
            "Water leaking out from the tank base or side frames",
            "Loud rattling, screeching, or vibrating noises during operation",
            "Motor humming softly but blades are completely jammed",
            "Cooler trips the main MCB power switch instantly when turned on",
            "Foul, musty, or swampy smell coming from the moist pads"
        ],
        pricing: [
            { service: "Air Cooler Assembly & Setup", price: "₹299" },
            { service: "Submersible Pump Replacement", price: "₹199" },
            { service: "Deep Tank Cleaning & Pad Wash", price: "₹349" },
            { service: "Main Fan Motor Replacement", price: "After Inspection" }
        ],
        contact: {
            title: "Need Cooler Repair Today?",
            description: "Our technician can reach your doorstep within 60 minutes."
        },
        footer: "© 2026 ElectroFix | Cooler Repair Service"
    },
    {
        id: "fan",
        ticket: "SVC-08 · Fan REPAIR",
        heading: "Our Fan Services",
        hero: {
            title: "Professional Fan Repair & Service",
            description: "Installation, capacitor replacement, motor rewinding, bearing lubrication, and speed regulator fixing — handled by certified technicians, priced upfront."
        },
        button: "Book Fan Technician",
        trust: [
            "4.8/5 rated",
            "90-day warranty",
            "Avg. 60 min arrival"
        ],
        cards: [
            { icon: "fa-wind", title: "Fan Installation", description: "Secure mounting, downrod assembly, balancing, and wiring for ceiling, wall, and exhaust fans." },
            { icon: "fa-bolt", title: "Capacitor Swap", description: "Replacing weak or burnt capacitors to restore optimal RPM speed and high air delivery." },
            { icon: "fa-shield-halved", title: "Bearings & Shaft Fix", description: "Replacing faulty ball bearings and worn shafts to stop grinding noises and friction." },
            { icon: "fa-screwdriver-wrench", title: "General Maintenance", description: "Thorough blade cleaning, motor oiling, insulation tests, and regulator switch tracking." }
        ],
        issues: [
            "Fan rotating extremely slowly even at the highest speed setting",
            "Loud humming, clicking, or squeaking noises while operating",
            "Fan wobbling violently or shaking from the ceiling mount",
            "Remote receiver unit or wall regulator switch not responding",
            "Fan motor getting abnormally hot or emitting a burning smell",
            "Fan completely dead and failing to turn on when switched on"
        ],
        pricing: [
            { service: "Standard Fan Installation", price: "₹149" },
            { service: "Capacitor Replacement", price: "₹99" },
            { service: "General Inspection & Oiling", price: "₹119" },
            { service: "Motor Rewinding & Overhaul", price: "After Inspection" }
        ],
        contact: {
            title: "Need Fan Repair Today?",
            description: "Our technician can reach your doorstep within 60 minutes."
        },
        footer: "© 2026 ElectroFix | Fan Repair Service"
    },
    {
        id: "mixer",
        ticket: "SVC-09 · Mixer Grinder REPAIR",
        heading: "Our Mixer Grinder Services",
        hero: {
            title: "Professional Mixer Grinder Repair & Service",
            description: "Installation, motor checking, blade repair, oiling and annual maintenance — handled by certified technicians, priced upfront."
        },
        button: "Book Mixer Grinder Technician",
        trust: [
            "4.8/5 rated",
            "90-day warranty",
            "Avg. 60 min arrival"
        ],
        cards: [
            { icon: "fa-rotate", title: "Coupler Replacement", description: "Fixing broken, worn-out, or jammed plastic and rubber jar-to-motor couplers." },
            { icon: "fa-bolt", title: "Motor Repair & Swap", description: "Carbon brush replacement, motor winding fix, or complete heavy-duty motor replacement." },
            { icon: "fa-wand-magic-sparkles", title: "Blade & Jar Overhaul", description: "Dull blade sharpening, jar leak fixing, and replacement of faulty jar bases or gaskets." },
            { icon: "fa-screwdriver-wrench", title: "General Service", description: "Internal carbon cleaning, speed selector switch fix, and performance safety check-up." }
        ],
        issues: [
            "Mixer grinder dead or not turning on at all",
            "Liquid leaking from the bottom of the jar unit",
            "Unusual loud grinding noise or extreme vibration",
            "Speed control knob or pulse switch not responding",
            "Overload protection switch tripping frequently",
            "Burning smell or sparks inside the base body"
        ],
        pricing: [
            { service: "Coupler Replacement", price: "₹199" },
            { service: "Jar Gasket & Blade Fix", price: "₹249" },
            { service: "General Service & Cleaning", price: "₹299" },
            { service: "Motor Overhaul & Repair", price: "After Inspection" }
        ],
        contact: {
            title: "Need Mixer Grinder Repair Today?",
            description: "Our technician can reach your doorstep within 60 minutes."
        },
        footer: "© 2026 ElectroFix | Mixer Grinder Repair Service"
    },
    {
        id: "waterpurifier",
        ticket: "SVC-10 · Water Purifier REPAIR",
        heading: "Our Water Purifier Services",
        hero: {
            title: "Professional Water Purifier Repair & Service",
            description: "RO installation, filter replacement, booster pump repair, TDS calibration, and annual maintenance — handled by certified technicians, priced upfront."
        },
        button: "Book Water Purifier Technician",
        trust: [
            "4.8/5 rated",
            "90-day warranty",
            "Avg. 60 min arrival"
        ],
        cards: [
            { icon: "fa-faucet-drip", title: "RO & UV Installation", description: "Professional wall mounting, counter-top placement, and inlet-outlet water line connection mapping." },
            { icon: "fa-faucet", title: "Filter & Membrane Kit", description: "Complete replacement of sediment filters, pre-carbon blocks, and RO membranes for clean taste." },
            { icon: "fa-gauge-high", title: "Booster Pump Repair", description: "Diagnosing and swapping low-pressure motors, SMPS power adapters, and auto-cut off floats." },
            { icon: "fa-screwdriver-wrench", title: "General Service", description: "Internal storage tank sanitization, pipeline leakage check, and precise TDS level calibration." }
        ],
        issues: [
            "Water purifier is dead, indicator lights not turning on",
            "Continuous water leaking from the bottom body or filter housings",
            "Water flow from the tap is extremely slow or down to drops",
            "Water tastes unusual, salty, bitter, or smells foul",
            "Purifier makes constant vibrating or loud humming noises",
            "Reject water pipe runs non-stop or tank never fills completely"
        ],
        pricing: [
            { service: "Water Purifier Installation", price: "₹399" },
            { service: "General Service & TDS Check", price: "₹299" },
            { service: "Pre-Filter Outer Kit Change", price: "₹499" },
            { service: "Full RO Membrane Overhaul", price: "After Inspection" }
        ],
        contact: {
            title: "Need Water Purifier Repair Today?",
            description: "Our technician can reach your doorstep within 60 minutes."
        },
        footer: "© 2026 ElectroFix | Water Purifier Repair Service"
    }
];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const service = services.find(item => item.id === id);
const errorPanel = document.getElementById("serviceError");
const servicePage = document.getElementById("servicePage");

if (!service) {
    if (errorPanel) {
        errorPanel.style.display = "block";
    }
    if (servicePage) {
        servicePage.style.display = "none";
    }
    document.title = "Service not found | ElectroFix";
} else {
    document.title = `${service.hero.title} | ElectroFix`;
    document.getElementById("ticketId").textContent = service.ticket;
    document.getElementById("heroTitle").textContent = service.hero.title;
    document.getElementById("heroDescription").textContent = service.hero.description;
    document.getElementById("servicesHeading").textContent = service.heading;
    const bookBtn = document.getElementById("bookBtn");
    bookBtn.textContent = service.button;
    bookBtn.href = "#contact";
    document.getElementById("contactTitle").textContent = service.contact.title;
    document.getElementById("contactDescription").textContent = service.contact.description;
    document.getElementById("footerText").textContent = service.footer;
    document.getElementById("contactBookBtn").textContent = service.button;

    const cardContainer = document.getElementById("serviceCards");
    const issueContainer = document.getElementById("issueList");
    const pricingTable = document.getElementById("pricingTable");
    const trustList = document.getElementById("trustList");

    cardContainer.innerHTML = "";
    issueContainer.innerHTML = "";
    pricingTable.innerHTML = "";
    trustList.innerHTML = "";

    service.trust.forEach(item => {
        trustList.innerHTML += `<div class="trust-item"><i class="fa-solid fa-star"></i> ${item}</div>`;
    });

    service.cards.forEach((card, index) => {
        cardContainer.innerHTML += `
            <div class="card">
                <span class="tag">01.${index + 1}</span>
                <i class="fa-solid ${card.icon}"></i>
                <h3>${card.title}</h3>
                <p>${card.description}</p>
            </div>
        `;
    });

    service.issues.forEach(issue => {
        issueContainer.innerHTML += `
            <div class="issue">
                <i class="fa-solid fa-check"></i>
                ${issue}
            </div>
        `;
    });

    service.pricing.forEach(item => {
        pricingTable.innerHTML += `
            <tr>
                <td>${item.service}</td>
                <td>${item.price}</td>
            </tr>
        `;
    });
}
