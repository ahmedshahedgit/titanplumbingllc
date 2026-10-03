import hero from "@/assets/hero.jpg";
import drain from "@/assets/drain.jpg";
import burst from "@/assets/burst-pipe.jpg";
import heater from "@/assets/water-heater.jpg";
import bathroom from "@/assets/bathroom.jpg";
import commercial from "@/assets/commercial.jpg";
import after from "@/assets/after.jpg";
import before from "@/assets/before.jpg";

export const IMG = { hero, drain, burst, heater, bathroom, commercial, after, before };

export const PHONE_DISPLAY = "309-260-0945";
export const PHONE_TEL = "tel:+13092600945";
export const SMS = "sms:+13092600945?&body=Hi%20Titan%20Plumbing%2C%20I%27d%20like%20to%20book%20a%20plumber.";
export const EMAIL = "titanplumbingep@gmail.com";
// Replace with the official Titan Plumbing, LLC Messenger link (e.g. https://m.me/yourpage)
export const MESSENGER_URL = "https://www.facebook.com/search/top?q=Titan%20Plumbing%2C%20LLC";
// Optional: drop a hosted .mp4 URL here to enable the cinematic hero video.
export const HERO_VIDEO_URL = "";
// Replace each with a Facebook Reel URL when ready.
export const REELS = ["", "", ""];

export const LICENSE = "IL# 058-200760";
export const AREAS = ["Minonk", "Bloomington", "Washington", "Gridley", "Germantown Hills", "Pontiac", "El Paso", "Roanoke", "Eureka", "Flanagan"];

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#trust" },
  { label: "Projects", href: "#projects" },
  { label: "Before / After", href: "#before-after" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Customer Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export const REVIEWS = [
  ["Jason Fasano", "Titan plumbing came to our house over some concerns I had about plumbing. They were so honest and polite and it's rare to find a company that is more concerned about the customer than a sale."],
  ["Cassie Lessen", "Today, my toilet decided to stop flushing. It had also been running for 2 months. Obviously we need a working toilet so I called 3 plumbers and no luck. Titan Plumbing came highly recommended so I called Jake and he was at my home an hour later. He made quick work and was so incredibly kind and professional."],
  ["Mason Spiker", "Jake came and unclogged main pipe and fixed back of toilet. he was fast and prompt and solved all the problems quickly. I will be calling again for all plumbing needs"],
  ["Megan Lyon", "Jake is such an awesome guy with an awesome family! He takes the time to do things the right way! He saved me from having to have my tile wall cut into to access my shower pipe inside the wall. HIGHLY recommended! Great Prices!"],
  ["Matt Milner", "I would highly recommend Jake from Titan plumbing got home from a trip found I had some broken water pipes he got here within an hour and stayed late till I had water back great guy"],
  ["Bailey Bertsche-Kemp", "Excellent customer service and quick response! Highly recommend!"],
  ["Ethan Faulk", "My kitchen sink and both bathtubs were leaking. Jake came in with an accurate diagnosis and some clean repairs. We needed a new faucet for the kitchen, he went out of his way to find us one for the best price and of high quality. Working with Titan plumbing is quick and painless!"],
  ["Shannon Hasselbacher", "What a great company! Quick, courteous, thorough, and honest service! I would recommend this company to everyone!"],
  ["Andrew Taylor", "This is a good, HONEST company. They are going to be very upfront and reasonable with you."],
  ["Shawna Mann", "I met Tyler and Kayla at Cornfest while checking out the booths, and I’m so glad I did! I was able to explain my plumbing issue, and Tyler came out shortly after to take a look. He not only fixed the problem I originally called about but also identified a couple of other leaks I didn’t even know were there"],
  ["Angela Chiarenza Russell", "I can’t recommend Jake Dehm at Titan Plumbing enough! He was professional, fast, and incredibly friendly, even on short notice. I had a leak that needed urgent attention, and he showed up quickly, and had it fixed in no time. It’s rare to find service this reliable and courteous these days."],
  ["Jenica Rarick", "Jake and Kayla are amazing!! We thought our water problem was coming from our old water heater but we weren’t 100% sure. They were super responsive and able to quickly come get things assessed. Jake immediately confirmed our old heater had seen much better days and was the leak."],
  ["Benjamin Russell", "I had a leak in the main water line coming into my home, and Jake from Titan Plumbing was able to come out on short notice. He quickly identified the issue and had it fixed in no time. Professional, efficient, and friendly service. I highly recommend Titan Plumbing!"],
  ["Anthony Ellis", "very prompt professional work. had me all fixed up and inspected fast and made sure the job was done right"],
  ["Amber Brunskill", "Jake came to unclog some pipes for us and did amazing! He was quick and efficient and he made sure things were all squared away properly. If you’re looking for a great plumber Jake’s the man to call. Titan plumbing will be our choice from here on out."],
  ["Joey Sleevar", "Jake went above and beyond when i called him with a back up in my pipes in my country home i was remodeling. He came out at 8:30 at night and located the problem and starting digging by hand to our septic tank. then the very next day we dug up our old cast septic pipe and replaced it and back filled it with pea gravel."],
].map(([name, text]) => ({ name: name as string, text: text as string }));
