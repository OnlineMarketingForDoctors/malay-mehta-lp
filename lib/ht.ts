/**
 * Content for the hair transplant landing page, kept out of the components so
 * the copy can be edited without touching layout.
 *
 * Everything here is carried over from the clinic's Sapphire FUE page
 * (drmalaymehta.com/sapphire-fue-hair-transplant-lp/) and its About and
 * Meet Dr Malay pages, re-set in UK English. Figures, graft counts and the
 * pricing are the clinic's own and are reproduced as written.
 */

/** Headline figures. The page's recurring device is a mono numeral over a
 *  hairline rule, and these are its source. */
export const ledger: { figure: string; unit: string; label: string }[] = [
  { figure: "98", unit: "–100%", label: "Graft viability rate" },
  { figure: "6,130", unit: " max", label: "Grafts in one sitting" },
  { figure: "1", unit: " day", label: "One sitting, then home" },
  { figure: "7", unit: " days", label: "Back to normal" },
];

/** The eight things a sapphire blade changes, from the FUE page. */
export const sapphirePoints: { value: string; label: string }[] = [
  { value: "Near 100%", label: "Survival rate of grafts" },
  { value: "No", label: "Visible scars" },
  { value: "Minimum", label: "Downtime" },
  { value: "Minimum", label: "Pain" },
  { value: "Highest", label: "Patient comfort" },
  { value: "Natural", label: "Hairline" },
  { value: "Maximum", label: "Density" },
  { value: "Maximum", label: "Coverage" },
];

/** Steel against sapphire, the comparison the old page led with. */
export const bladeCompare = {
  steel: {
    name: "FUE with steel blades",
    detail: "Larger two-dimensional slits.",
  },
  sapphire: {
    name: "FUE with sapphire blades",
    detail:
      "Three-dimensional channels the size of the graft, opened with a sapphire tip.",
  },
};

/** The three arguments for sapphire, kept in the clinic's own framing. */
export const sapphireCase: { title: string; body: string }[] = [
  {
    title: "Fuller, more natural-looking results",
    body: "A sapphire tip opens a channel the size of the graft, so grafts sit closer together without competing for blood supply. That is what makes real density possible, and what lets grade 6 and 7 Norwood Hamilton patterns be covered properly rather than thinly. Beard grafts fill the mid scalp and crown where the scalp donor area will not stretch any further.",
  },
  {
    title: "Fast recovery",
    body: "Smaller channels scab less and close faster. The sapphire edge is sharper, harder and antimicrobial, so there is less trauma to the tissue around each graft and less risk of complication. Most patients are back to normal in about seven days.",
  },
  {
    title: "Maximum efficiency",
    body: "Harvesting is where grafts are lost. Imported punches on a German motor keep transection to around 1 to 2%, and four tables running together mean 5,000 to 6,000 grafts can be taken and placed in one surgery. Most clinics in Mumbai split that across two operations six months apart, which doubles both the cost and the wait.",
  },
];

/** The four procedures the clinic performs, each with its own frame. */
export const procedures: {
  key: string;
  title: string;
  lede: string;
  body: string;
  img: string;
  alt: string;
}[] = [
  {
    key: "male",
    title: "Male hair transplantation",
    lede: "The full front, mid scalp and crown.",
    body: "The whole pattern in one sitting: hairline, frontotemporal angles, temples, mid scalp and crown. Most men looking for a hair transplant doctor in Andheri or Bandra are really asking one question, which is whether it will still look right in ten years. That is settled at the planning stage, by how much donor hair is spent now and how much is deliberately held back.",
    img: "/img/ht/patient.webp",
    alt: "A man in his thirties with a full, natural hairline",
  },
  {
    key: "hairline",
    title: "Hairline reconstruction",
    lede: "The line that decides whether anyone can tell.",
    body: "The hairline is the only part of the work a stranger ever assesses, and it is drawn by hand before a single graft is taken. An irregular transition instead of a straight line, single hairs at the front, each one angled to leave the scalp the way your own hair does. This is the part that comes from experience rather than equipment, and it is what Dr Mehta is known for.",
    img: "/img/ht/hairline.webp",
    alt: "Dr Malay Mehta drawing a new hairline on a patient with a surgical marker",
  },
  {
    key: "repair",
    title: "Failed hair transplant repair",
    lede: "Correcting somebody else's work.",
    body: "A transplant fails in two ways: a hairline placed badly, and a donor area spent badly. Both can be corrected, but revision is harder than a first surgery, because less has to cover more and scarring makes harvesting slower. Dr Mehta has been 100% successful in repairing the failed transplants brought to him, often using beard grafts to make up numbers the scalp can no longer give.",
    img: "/img/ht/theatre.webp",
    alt: "Dr Malay Mehta operating under magnifying loupes",
  },
  {
    key: "beard",
    title: "Moustache and beard reconstruction",
    lede: "The same craft, a different frame.",
    body: "The same craft, applied to a patchy beard or moustache. Facial hair grows flatter and in more directions than scalp hair, so grafts go in one at a time at the angle each area actually needs. Dr Mehta is a leading beard and moustache reconstruction surgeon in India, with 100% successful, natural-looking results across the cases performed.",
    img: "/img/ht/beard.webp",
    alt: "A man with a dense, evenly grown beard",
  },
];

/** Why the clinic, from the old page's "Why Choose Dr Malay Mehta" block. */
export const reasons: { title: string; body: string }[] = [
  {
    title: "Experience",
    body: "MBBS and MD qualified, and among the longest-practising hair transplant surgeons in the city. Volume of cases is what teaches you where a hairline belongs on a particular face, and how much donor hair to leave for the next decade. It is why he has the name he has as the best hair transplant surgeon in Bandra, Mumbai.",
  },
  {
    title: "We go beyond surgery",
    body: "The operation is one day of a twelve-month process, and a good deal of what decides the result happens after it. Every patient is taken through the aftercare properly, and Dr Mehta answers questions himself, before the surgery and long after it.",
  },
  {
    title: "We are different",
    body: "The session is built around the patient rather than the schedule. Advanced equipment, run to a protocol, chosen for what it does to the graft and to the scalp rather than for how many people it can move through a day.",
  },
  {
    title: "We offer the best price in the area",
    body: "From 7,000 INR per 1,000 grafts, the cheapest hair transplant in and around Andheri, Mumbai, payable monthly at 0% interest. Compare it against any hair plantation cost in Mumbai you have been quoted, but compare per graft rather than per package, which is where the difference usually hides.",
  },
  {
    title: "We deliver the most natural-looking results",
    body: "A natural result comes down to two things: the surgeon's judgement, and the instruments in their hands. Grafts set at the wrong angle or the wrong density are what make a transplant obvious, and nothing done afterwards corrects it.",
  },
  {
    title: "We correct failures from the past",
    body: "Had a transplant elsewhere that went wrong? Revision is a large part of the work here, including cases other surgeons have turned down because the donor area looked exhausted.",
  },
];

/** The three assurances that closed the old "why" section. */
export const assurances: { title: string; body: string }[] = [
  {
    title: "Totally safe",
    body: "One protocol, applied at every step and every level, in a theatre maintained to it. That is what guarantees 100% safety.",
  },
  {
    title: "Painless procedure",
    body: "Extraction and placement use disposable instruments of 1mm or less, under local anaesthetic. Patients tend to describe the day as long rather than painful.",
  },
  {
    title: "Maximum viability guaranteed",
    body: "Graft viability here is 98 to 100%. Independent studies put the industry average at about 50%, which is the difference between the grafts you pay for and the grafts that grow.",
  },
];

/** The credentials that matter to a transplant, set as a ledger. */
export const education: [string, string][] = [
  ["Qualified", "MBBS 2011 · MD 2014 · Registration No. G-46106"],
  ["Fellowships", "Microsurgical training, McGill University, Montreal · Gold Skin Care Centre, Nashville"],
  ["Practice", "Chief surgeon and managing director, Vile Parle West, Mumbai"],
  ["Theatre", "Four surgical tables and a full trained team"],
  ["Largest sitting", "6,130 grafts · 4,650 scalp and 1,480 beard"],
];

/** The two written testimonials from the old page, verbatim. */
export const testimonials: {
  quote: string;
  name: string;
  role: string;
  photo: string;
}[] = [
  {
    quote:
      "I went through hair transplant treatment 8 months ago. Previously I thought changing the look is a marketing gimmick and it would not help in building my confidence. But believe me, it did really happen. This treatment had immensely helped me in improving my professional career and also helped me in developing my confidence in interacting personally with people around me. I am very thankful to Dr. Malay Mehta as he has done a fantastic job. He is undoubtedly the best hair transplant surgeon in Mumbai.",
    name: "Aayush Parmar",
    role: "Web Designer",
    photo: "/img/ht/voices/aayush-parmar.webp",
  },
  {
    quote:
      "I was suffering from hair fall problem because of my stress and lifestyle. Before visiting Dr. Malay Mehta, I consulted many doctors regarding this issue but all that was in vain. Finally I consulted Dr. Malay Mehta and he explained me the reason for hair fall and also focused on importance of diet. Now I am using hair style products without worrying about losing my hairs.",
    name: "Jay Shah",
    role: "Model",
    photo: "/img/ht/voices/jay-shah.webp",
  },
];

/** The promise the FUE page opened with, kept as the page's second beat. */
export const promise = {
  lead: "One day, one sitting,",
  em: "and a rich look forever.",
  body: "Thinning hair is one of the first things you notice in a photograph, and one of the last things you can do anything about on your own. A hair transplant ends it in a day: minimally invasive, permanent, and performed personally by Dr Malay Mehta with a graft viability rate of 98 to 100%.",
  points: [
    ["Over 98%", "Graft survival"],
    ["One day", "Start to finish"],
    ["From 7,000 INR", "Per 1,000 grafts, monthly"],
  ] as [string, string][],
};

/** What a patient travelling to Mumbai needs to know, from the old page. */
export const travelSteps: string[] = [
  "Call or message the clinic and we will arrange a phone consultation at no charge.",
  "Email photographs of the area for Dr Mehta to assess. Most travelling patients are planned entirely remotely, in some cases as late as the day before surgery.",
  "At the consultation you are told your graft count, what it will cost and whether surgery is the right answer at all.",
  "Once the date is booked a deposit is taken, and your pre and post-operative instructions follow straight away.",
];

export const travelFacts: [string, string][] = [
  ["Where", "104 Cosmos Court, Vile Parle West, Mumbai"],
  ["On the day", "5 to 6 hours, under local anaesthetic"],
  ["Stay", "4 days in Mumbai is what we recommend"],
  ["Getting there", "Minutes from both Mumbai airports"],
];

export const hotels: string[] = [
  "Hotel Bawa International",
  "Hotel Parle International",
  "Novotel Mumbai Juhu Beach",
  "Hotel Sahara Star",
  "W Marriott",
];

/** Questions the cost and procedure keywords ask, answered on the page. */
export const faqs: { q: string; a: string }[] = [
  {
    q: "How much does a hair transplant cost in Mumbai?",
    a: "At this clinic the Sapphire FUE hair transplant starts at 7,000 INR per 1,000 grafts, which is the follicular unit count rather than the hair count. What you pay depends on how many grafts your plan needs, and you are given that number and that figure at your consultation, before anything is booked. The cost can be paid in monthly instalments over up to 8 months at 0% interest.",
  },
  {
    q: "How many grafts will I need?",
    a: "It depends on your Norwood Hamilton grade, the density you want and what your donor area can give. Grade 3 is often around 2,600 grafts; grade 5 to 6 is usually 4,000 to 4,600; the largest single sitting we have done is 6,130, combining 4,650 scalp and 1,480 beard grafts. Dr Mehta counts your donor area at the consultation rather than quoting a range down the phone.",
  },
  {
    q: "Is it done in one sitting?",
    a: "In almost all cases, yes. We can harvest and implant around 5,000 to 6,000 grafts in a single surgery, which takes 5 to 6 hours under local anaesthetic. Many clinics in Mumbai split that across two surgeries six months apart, which doubles both the cost and the wait.",
  },
  {
    q: "Will anyone be able to tell?",
    a: "That is decided by the hairline, and the hairline is drawn by hand before anything else happens. Angle, direction and density are matched to your face and to the way your own hair grows, which is why the temple area and the frontal line take the longest to plan and the longest to place.",
  },
  {
    q: "When will I see the result?",
    a: "Recovery takes about 7 days. Transplanted hair sheds first and then grows back, so the picture changes month by month. Most patients see a clear change at 6 months and the final result at 10 to 12 months.",
  },
  {
    q: "Can a failed hair transplant be repaired?",
    a: "Usually. Revision work is harder than a first surgery because the donor area is already depleted and scarred, and an unnatural hairline has to be camouflaged rather than simply added to. Beard grafts are often used to make up the numbers. Bring photographs of the original surgery to your consultation.",
  },
];

/**
 * Before and after photographs of the clinic's own patients, downloaded from
 * the Sapphire FUE page. Real patients, shown with their eyes redacted as they
 * were published. The case detail is the clinic's own.
 */
export const results: {
  src: string;
  grafts: string;
  title: string;
  meta: [string, string][];
  note: string;
}[] = [
  {
    src: "/results/ht/28-male.webp",
    grafts: "Grade 4",
    title: "28, male",
    meta: [
      ["Baldness", "4 Norwood Hamilton"],
      ["Surgery", "Sapphire FUE, local anaesthetic"],
      ["Recovery", "7 days"],
      ["Shown at", "6 months"],
    ],
    note: "Placed at high density with the hairline built to look unforced. Better punches, better implantation and micro forceps have moved what is achievable well past simply covering the bald area. The final result is expected at 10 to 12 months.",
  },
  {
    src: "/results/ht/34-male.webp",
    grafts: "≈5,000",
    title: "34, male · revision",
    meta: [
      ["Baldness", "7 Norwood Hamilton"],
      ["Surgery", "Sapphire FUE, revision"],
      ["Donor", "Scalp and beard grafts"],
      ["Shown at", "7 months"],
    ],
    note: "The donor area was already exhausted, which is what a first surgery by an untrained doctor or technician usually leaves behind, so a large area had to be covered from very little. The previous hairline was a hard straight line, and the new pattern had to be built to hide it rather than sit behind it.",
  },
  {
    src: "/results/ht/before-after-1.webp",
    grafts: "4,230",
    title: "47, male · revision",
    meta: [
      ["Previous surgery", "FUE, told 4,000 grafts"],
      ["This surgery", "4,230 grafts implanted"],
      ["Challenge", "Scarred, limited donor"],
      ["Shown at", "4 months"],
    ],
    note: "He had been told the first surgery placed 4,000 grafts. What it actually left was a scarred, limited donor area, which makes every extraction slower. 4,230 grafts went in this time, and the final result is expected at 8 to 10 months.",
  },
  {
    src: "/results/ht/before-after-2.webp",
    grafts: "4,100",
    title: "Grade 5 baldness",
    meta: [
      ["Baldness", "5 Norwood Hamilton"],
      ["Grafts", "4,100"],
      ["Shown at", "11 months"],
    ],
    note: "A full frontal and mid scalp rebuild across a grade 5 pattern, photographed at eleven months, by which point the transplanted hair has thickened rather than simply appeared.",
  },
  {
    src: "/results/ht/before-after-3.webp",
    grafts: "3,000",
    title: "28, male · crown",
    meta: [
      ["Procedure", "Crown hair transplant"],
      ["Grafts", "3,000"],
      ["Shown at", "1 year"],
    ],
    note: "The crown is the area most surgeons are least confident about. The whorl has to be rebuilt as a spiral, with the direction changing across it, and a crown filled as if it were a flat panel never sits right.",
  },
  {
    src: "/results/ht/before-after-4.webp",
    grafts: "4,642",
    title: "45, male",
    meta: [
      ["Baldness", "6 Norwood Hamilton"],
      ["Grafts", "4,642"],
      ["Shown at", "1 year"],
    ],
    note: "Grade 6 covered in a single sitting rather than staged across two, photographed at one year.",
  },
  {
    src: "/results/ht/before-after-5.webp",
    grafts: "6,130",
    title: "30, male · largest sitting",
    meta: [
      ["Baldness", "7 Norwood Hamilton"],
      ["Surgery", "Sapphire bio FUE"],
      ["Donor", "4,650 scalp · 1,480 beard"],
      ["Shown at", "1 year"],
    ],
    note: "6,130 grafts in a single sitting, the largest performed here. A grade 7 pattern needs more than a scalp can give on its own, so the beard was opened as a second donor area to reach the number.",
  },
  {
    src: "/results/ht/before-after-6.webp",
    grafts: "2,600",
    title: "Grade 3 baldness",
    meta: [
      ["Baldness", "3 Norwood Hamilton"],
      ["Grafts", "2,600"],
      ["Challenge", "An undetectable hairline"],
    ],
    note: "Transplanting hair is the easy part. Delivering a hairline nobody can detect, at real density, is the hard part, and it is what a grade 3 case is planned around. The difference shows in the line itself and in how thickly it is filled.",
  },
  {
    src: "/results/ht/before-after-7.webp",
    grafts: "4,600",
    title: "Grade 6 · repair",
    meta: [
      ["Previous surgery", "≈500 grafts, damaged"],
      ["This surgery", "4,600 grafts, 800 from beard"],
      ["Baldness", "6 Norwood Hamilton"],
    ],
    note: "The first surgery put in roughly 500 to 600 grafts and may have destroyed more than 2,500 in the process, which is a loss no second operation can undo. The hairline it left was badly placed and had almost no density behind it. This is why the first clinic matters more than the second.",
  },
  {
    src: "/results/ht/before-after-8.webp",
    grafts: "4,320",
    title: "28, male · temples",
    meta: [
      ["Baldness", "5 Norwood Hamilton"],
      ["Grafts", "4,320"],
      ["Shown at", "8 months"],
    ],
    note: "The temples are the giveaway. Hair there is fine and grows downwards, so angle matters more than volume, and a badly done temple grows sideways and reads as artificial from across a room. This part is closer to drawing than to surgery.",
  },
  {
    src: "/results/ht/before-after-9.webp",
    grafts: "Sapphire FUE",
    title: "Frontal rebuild",
    meta: [
      ["Surgery", "Sapphire FUE"],
      ["Anaesthetic", "Local"],
      ["Recovery", "7 days"],
    ],
    note: "The frontal third rebuilt on a receding pattern, with the hairline set where it suits the face rather than as low as it could physically go. A line placed too low is the most common regret in this surgery.",
  },
];

/**
 * The clinic's own documented cases, from the surgical notes and photographs
 * in case-studies/ at the root of the repo. The summary of each is the
 * clinic's own website wording; the detail is drawn from its operative note.
 *
 * The photographs are real patients. They are cropped to the treated area, so
 * in most of them the face is not the subject. The source files are kept out
 * of public/ so the full-resolution originals and the operative notes are not
 * served.
 */
export const caseStudies: {
  n: string;
  who: string;
  procedure: string;
  grafts: string;
  facts: [string, string][];
  summary: string;
  detail: string;
  before: string;
  after: string;
  alt: string;
}[] = [
  {
    n: "01",
    who: "28, male",
    procedure: "Sapphire FUE",
    grafts: "4,800",
    facts: [
      ["Diagnosis", "Androgenetic alopecia, Norwood Hamilton grade V"],
      ["Treated", "Hairline, frontotemporal angles, temples, mid scalp, crown"],
      ["Shown at", "8 months"],
    ],
    summary:
      "Grafts were used to restore the frontal hairline, temples, mid scalp and crown. At 8 months the patient showed improved scalp coverage, density and natural hair direction.",
    detail:
      "Advanced male-pattern loss across the whole scalp, planned for comprehensive coverage while keeping the hairline age-appropriate. The donor area was deliberately preserved, so a further procedure remains possible if it is ever needed.",
    before: "/results/cases/case-1-before.webp",
    after: "/results/cases/case-1-after.webp",
    alt: "Crown and mid scalp of a 28-year-old man, before and eight months after a 4,800 graft Sapphire FUE transplant",
  },
  {
    n: "02",
    who: "52, male",
    procedure: "FUE",
    grafts: "5,200",
    facts: [
      ["Diagnosis", "Androgenetic alopecia, Norwood Hamilton grade VI"],
      ["Treated", "Frontal hairline, mid scalp, crown"],
      ["Shown at", "8 months"],
    ],
    summary:
      "Treatment focused on rebuilding an age-appropriate hairline and improving coverage across the mid scalp and crown. Results shown at 8 months, with further crown maturation expected.",
    detail:
      "The hairline was drawn as an irregular zigzag rather than a straight line, which is what stops a rebuilt front reading as artificial. The crown matures more slowly than the front, so the final result on a case like this is assessed at around 12 to 14 months.",
    before: "/results/cases/case-2-before.webp",
    after: "/results/cases/case-2-after.webp",
    alt: "Crown of a 52-year-old man, before and eight months after a 5,200 graft FUE transplant",
  },
  {
    n: "03",
    who: "49, male",
    procedure: "FUE",
    grafts: "5,200",
    facts: [
      ["Diagnosis", "Androgenetic alopecia"],
      ["Treated", "Frontal hairline, mid scalp, crown"],
      ["Follow-up", "Six-monthly"],
    ],
    summary:
      "A conservative, age-appropriate hairline was designed, with grafts distributed across the frontal area, mid scalp and crown. The patient continues to attend six-monthly follow-up appointments.",
    detail:
      "Age and facial proportion set the plan here: a slightly higher forehead was kept rather than dropping the hairline as low as it could go, with an irregular transition to make it read naturally. Donor resources were preserved for long-term planning.",
    before: "/results/cases/case-3-before.webp",
    after: "/results/cases/case-3-after.webp",
    alt: "Crown of a 49-year-old man, before and after a 5,200 graft FUE transplant",
  },
  {
    n: "04",
    who: "26, male",
    procedure: "Sapphire FUE",
    grafts: "3,200",
    facts: [
      ["Diagnosis", "Traction alopecia"],
      ["Treated", "Hairline, frontotemporal angles, temples"],
      ["Shown at", "1 year"],
    ],
    summary:
      "Treatment addressed traction alopecia affecting the frontal hairline, frontotemporal angles and temples. At 1 year the patient showed good density and natural-appearing hairline restoration.",
    detail:
      "Not pattern baldness but chronic mechanical tension on the hair, which had pulled the frontal and temporal hairline back. The temples are the hardest part of a case like this: the hair there is fine and grows downwards, so angle and direction matter more than volume.",
    before: "/results/cases/case-4-before.webp",
    after: "/results/cases/case-4-after.webp",
    alt: "Temple and frontal hairline of a 26-year-old man, before and one year after a 3,200 graft Sapphire FUE transplant",
  },
  {
    n: "05",
    who: "47, male",
    procedure: "Revision FUE",
    grafts: "5,500–5,800",
    facts: [
      ["Diagnosis", "Androgenetic alopecia, Norwood Hamilton grade VII"],
      ["Previously", "≈5,200 grafts at a clinic in Turkey"],
      ["Donor", "Scalp, beard and chest"],
    ],
    summary:
      "Following a previous transplant, grafts from the scalp, beard and chest were used to improve coverage across the hairline, mid scalp and crown, despite limited remaining scalp donor hair.",
    detail:
      "The hardest kind of case: the most advanced grade of loss, and a scalp donor area already depleted by an earlier surgery abroad. Beard and chest grafts made up the numbers the scalp no longer could, and the hairline was advanced on where the previous transplant had left it.",
    before: "/results/cases/case-5-before.webp",
    after: "/results/cases/case-5-after.webp",
    alt: "Crown of a 47-year-old man, before and after a revision FUE transplant of 5,500 to 5,800 grafts",
  },
];
