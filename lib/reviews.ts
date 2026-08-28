/**
 * Verbatim transcriptions of the clinic's Google reviews, taken from the
 * screenshots in public/reviews/. Wording, spelling and punctuation are the
 * reviewers' own — only paragraph breaks have been flattened to spaces.
 *
 * Note: these are all hair-transplant patients. The page sells non-surgical
 * treatment, so they are presented as reviews of the clinic and the doctor
 * rather than of PRP, GFC or exosome therapy.
 */
export type Review = {
  name: string;
  initial: string;
  meta: string;
  when: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Vipin Jamdekar",
    initial: "V",
    meta: "7 reviews · 7 photos",
    when: "5 months ago",
    text: "I know I am very late in posting this review, but I'm glad I waited because now I can share my true experience. Getting a hair transplant from Dr. Malay Mehta has completely changed my life. The results look 100% natural, just like hair from birth. Earlier, I never stepped out of my house without wearing a cap because of baldness. Today, I confidently style my hair the way I like and don't need a cap anymore.",
  },
  {
    name: "Rohit Deshmukh",
    initial: "R",
    meta: "Local Guide · 42 reviews",
    when: "4 months ago",
    text: "Its been 3.5 yrs since the transplant and the results have been amazing. The main part about hair transplant for me was the hairline and Dr Malay Mehta and his team have done an excellent job. It looks completely natural. Even during consultation, Dr Malay Mehta always has been very patient and tranparent in answering my queries.",
  },
  {
    name: "Renuka Nanda",
    initial: "R",
    meta: "2 reviews",
    when: "5 months ago",
    text: "There are many experts available in Mumbai but hardly a few are true doctors and who care for their patients. Dr. Malay is great human and the best doctor you could get w.r.t Hair Transplant and Skin Care. He is a saviour and I would recommend anyone confused and reading every article and reviews to find the best clinic, please visit here once before you take any call.",
  },
  {
    name: "Dhanesh",
    initial: "D",
    meta: "1 review",
    when: "2 weeks ago",
    text: "I had my hair transplant done 4 years ago, and the results are still amazing. No one can tell that I've had a hair transplant because Dr. Malay Mehta and his wonderful team made it look completely natural. If anyone is considering a hair transplant, I would highly recommend Dr. Malay Mehta without any hesitation. The entire experience was professional, comfortable, and the outcome exceeded my expectations.",
  },
  {
    name: "Harsh Rathod",
    initial: "H",
    meta: "6 reviews · 1 photo",
    when: "2 months ago",
    text: "I recently underwent an FUE hair transplant with Dr. Malay Mehta, and I am extremely happy with my experience. From the very first consultation, Dr. Mehta was honest, professional, and thorough in explaining the procedure, expected results, and post-operative care. The entire team was friendly, supportive, and made me feel comfortable throughout the process.",
  },
  {
    name: "Saarang Waghmare",
    initial: "S",
    meta: "2 reviews",
    when: "4 months ago",
    text: "I've had the best experience here at Dr. Malay Mehta's Hair Transplant Clinic. Right from the consultation to the actual hair transplant to the follow up, everything was perfect. The entire staff is very knowledgable. The manager is brilliant and very pleasant to speak to. The doctors, receptionists and the entire staff overall was very helpful.",
  },
  {
    name: "ricky rexton",
    initial: "R",
    meta: "1 review",
    when: "3 weeks ago",
    text: "I had a 2200 graft hair transpllant at Dr. Malay Mehta clinic, and it was a wonderful experience. Dr. Malay Mehta is an amazing person, incredibly honest and transparent, the whole staff are very warm and proficient making the client feel very comfortable and at home. Personally i did not experience any pain and recover and healed very quicly.",
  },
  {
    name: "Aman Gupta",
    initial: "A",
    meta: "Local Guide · 12 reviews",
    when: "3 months ago",
    text: "I had my hair transplant about 8 months back. I wasn't very confident in starting. I never told my family members about this. But now, after about 9 months, I have no regret that I did it. Thank you Dr. Malay Mehta and the whole team. Now i feel very confident. Really.",
  },
  {
    name: "Ashay Sabnis",
    initial: "A",
    meta: "2 reviews",
    when: "3 months ago",
    text: "Its been 11 months post my hair transplant and Dr Malay and his team have been truly instrumental and professional in guiding me throughout this journey. I've had a great experience and my results have been positive. Anyone looking for a hair transplant - Dr Malay is the go to man to transform your look.",
  },
  {
    name: "Mandeep Sheoran",
    initial: "M",
    meta: "4 reviews",
    when: "3 months ago",
    text: "I had great experience with Dr. Malay Mehta and his team. I visited him for my hair transplant. I was thoroughly and clearly guided about the procedure and after care. The procedure went smooth. The high point of this clinic is their availability and prompt response for patient queries during as well as after procedure.",
  },
];
