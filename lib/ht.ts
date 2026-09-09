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
    body: "Sapphire blades allow for more dense transplantation, which makes it possible for individuals with advanced hair loss to undergo a fuller hair transformation. It also ensures more natural-looking results in all patients. We also use beard grafts for mid scalp or crown filling, so higher density can be achieved and surgeries can be performed in higher grades of baldness like grade 6 to 7 Norwood Hamilton.",
  },
  {
    title: "Fast recovery",
    body: "The blades are designed to minimise scab formation and speed up recovery by opening smaller micro channels within the recipient site. The risk of complications such as trauma and scalp tissue damage is reduced, thanks to the sapphire blade's sharpness, strength and antimicrobial qualities.",
  },
  {
    title: "Maximum efficiency",
    body: "Our graft harvesting is top notch. The punches we use are imported and run on a German motor, so transection of grafts is around 1 to 2%. Unlike most clinics in Mumbai, we can take around 5,000 to 6,000 grafts and implant them in one surgery. Most clinics in India and Mumbai cannot do that and require a second surgery after six months, leading to higher cost and double the time.",
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
    body: "If you are searching for the best hair transplant doctor in Andheri, Mumbai, we would suggest you end your search here. Dr Malay Mehta is going to do the best and his every job is directed towards ensuring 100% customer satisfaction, comparatively at a reasonable price.",
    img: "/img/ht/patient.webp",
    alt: "A man in his thirties with a full, natural hairline",
  },
  {
    key: "hairline",
    title: "Hairline reconstruction",
    lede: "The line that decides whether anyone can tell.",
    body: "Hairline reconstruction is one of the most important aspects of a successful hair transplant with natural looks. It is not only a procedure but an art which requires a lot of experience. Dr Malay Mehta is known for natural looking hairline reconstruction.",
    img: "/img/ht/hairline.webp",
    alt: "Dr Malay Mehta drawing a new hairline on a patient with a surgical marker",
  },
  {
    key: "repair",
    title: "Failed hair transplant repair",
    lede: "Correcting somebody else's work.",
    body: "Hair transplant surgeries many times result in failure or a botched hair transplant due to various reasons like an inexperienced surgeon or sloppy methods. Dr Malay Mehta has been 100% successful in repairing botched or failed hair transplants.",
    img: "/img/ht/theatre.webp",
    alt: "Dr Malay Mehta operating under magnifying loupes",
  },
  {
    key: "beard",
    title: "Moustache and beard reconstruction",
    lede: "The same craft, a different frame.",
    body: "Dr Malay Mehta is a leading moustache and beard reconstruction surgeon in India. We have done several cases of moustache and beard reconstruction with 100% successful results and natural looks.",
    img: "/img/ht/beard.webp",
    alt: "A man with a dense, evenly grown beard",
  },
];

/** Why the clinic, from the old page's "Why Choose Dr Malay Mehta" block. */
export const reasons: { title: string; body: string }[] = [
  {
    title: "Experience",
    body: "Dr Malay Mehta is one of the oldest in the field. He holds a degree in MBBS, MD in Dermatology, Venereology and Leprosy. With several years of experience in the field, he has earned the name and fame as the best hair transplant surgeon in Bandra, Mumbai.",
  },
  {
    title: "We go beyond surgery",
    body: "We care about the patient's post-treatment experience. We organise counselling sessions for patients regarding what needs to be done after the treatment.",
  },
  {
    title: "We are different",
    body: "We make our entire treatment session different from other clinics. Not only are we safe, we also ensure the use of advanced technology for the well-being of the patient thereafter.",
  },
  {
    title: "We offer the best price in the area",
    body: "We are also known for offering the cheapest hair transplant in and around Andheri, Mumbai. Can't believe our words? Well, you can compare the hair plantation cost in Mumbai with other clinics as well.",
  },
  {
    title: "We deliver the most natural-looking results",
    body: "The most natural-looking results are acquired because of the quality of surgery, which depends on the experience of the doctor and the quality of instruments being used, unlike many clinics where the results look artificial.",
  },
  {
    title: "We correct failures from the past",
    body: "Had a hair transplant in the past that went wrong? We also specialise in rectifying or repairing previously failed cases.",
  },
];

/** The three assurances that closed the old "why" section. */
export const assurances: { title: string; body: string }[] = [
  {
    title: "Totally safe",
    body: "Strict protocols are applied to all processes and at all levels to guarantee 100% safety.",
  },
  {
    title: "Painless procedure",
    body: "For extraction and placement, tiny disposable instruments are used with a diameter of 1mm or less.",
  },
  {
    title: "Maximum viability guaranteed",
    body: "Graft viability is 98 to 100%, while the industry average is about 50%, as per independent studies.",
  },
];

/** Dr Mehta's training, from the clinic's Meet Dr Malay page. */
export const education: [string, string][] = [
  ["MBBS", "2011 · Registration No. G-46106"],
  ["MD, Skin & VD", "2014 · Pramukhswami Medical College, Gujarat"],
  ["Fellowship", "Cosmetology and advanced medical dermatology, Jewish General Hospital, McGill University, Montreal"],
  ["Fellowship", "Laser and aesthetic medicine, Gold Skin Care Centre, Nashville, under Dr Michael Gold"],
];

/** The two written testimonials from the old page, verbatim. */
export const testimonials: {
  quote: string;
  name: string;
  role: string;
}[] = [
  {
    quote:
      "I went through hair transplant treatment 8 months ago. Previously I thought changing the look is a marketing gimmick and it would not help in building my confidence. But believe me, it did really happen. This treatment had immensely helped me in improving my professional career and also helped me in developing my confidence in interacting personally with people around me. I am very thankful to Dr. Malay Mehta as he has done a fantastic job. He is undoubtedly the best hair transplant surgeon in Mumbai.",
    name: "Aayush Parmar",
    role: "Web Designer",
  },
  {
    quote:
      "I was suffering from hair fall problem because of my stress and lifestyle. Before visiting Dr. Malay Mehta, I consulted many doctors regarding this issue but all that was in vain. Finally I consulted Dr. Malay Mehta and he explained me the reason for hair fall and also focused on importance of diet. Now I am using hair style products without worrying about losing my hairs.",
    name: "Jay Shah",
    role: "Model",
  },
];

/** What a patient travelling to Mumbai needs to know, from the old page. */
export const travelSteps: string[] = [
  "Contact our staff to arrange a complimentary phone consultation.",
  "You can email us images of yourself for Dr Mehta to review. In many instances we are able to prepare patients remotely, as late as the day before surgery.",
  "During your consultation we will assess your requirements and discuss your suitability.",
  "Once you have booked your procedure you will be asked for a deposit, and your pre and post operative instructions follow.",
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
    note: "High density graft plantation with a natural looking hairline. Advances in punches, implantation method and micro forceps have pushed the envelope of a better looking result. The final result is expected 10 to 12 months after surgery.",
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
    note: "The donor area was exhausted, as happens in almost all revision cases performed by an untrained doctor or technician, so a large scalp area had to be covered with limited resources. The previous hairline was very unnatural and a pattern had to be created to camouflage the linear one.",
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
    note: "Because of the previous surgery the donor area was limited, and scarring made harvesting more difficult. The final result is expected around 8 to 10 months.",
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
    note: "A full frontal and mid scalp rebuild across a grade 5 pattern, photographed at eleven months.",
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
    note: "The crown is the area most surgeons are least confident about, because the whorl has to be rebuilt as a spiral rather than a line.",
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
    note: "Grade 6 baldness covered in a single sitting, photographed at one year.",
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
    note: "Total 6,130 grafts in one sitting, with no co-morbid condition. The beard was used as a second donor area to reach the numbers a grade 7 pattern needs.",
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
    note: "It is relatively easy to transplant hair, but one of the most difficult things is to deliver an undetectable hairline with higher density. You can see the difference in the hairlines we create and their density.",
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
    note: "You can see how badly the hairline was given, and the density was next to nil. Roughly 500 to 600 grafts had been implanted in the first surgery and more than 2,500 may have been damaged, and that loss is irreversible. Choosing the right clinic is very important.",
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
    note: "The challenge here is a natural looking temple area. Hair there is thin and grows downward, so the angle and quality of the implanted hair matter enormously. In many badly performed surgeries the temple hair grows sideways and looks artificial. This is more like artistic work.",
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
    note: "A frontal third rebuilt on a receding pattern, with the hairline set to suit the face rather than to sit as low as possible.",
  },
];
