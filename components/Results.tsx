import Image from "next/image";

const cases = [
  {
    src: "/results/gfc-case-01.jpg",
    who: "27, Male",
    condition: "Androgenetic alopecia",
    detail: "Medical treatment, laser helmet and 4 GFC sessions.",
  },
  {
    src: "/results/gfc-case-02.jpg",
    who: "24, Female",
    condition: "Female pattern hair loss",
    detail: "Medication and 5 monthly GFC sessions.",
  },
  {
    src: "/results/gfc-case-03.jpg",
    who: "28, Female",
    condition: "Telogen effluvium (post-illness)",
    detail: "Four GFC sessions and a multivitamin.",
  },
];

export default function Results() {
  return (
    <section className="block cream" id="results">
      <div className="wrap">
        <div className="head center">
          <span className="eyebrow">Before &amp; after</span>
          <h2>
            Real Patient <b>Results</b>
          </h2>
          <p>
            A few of our GFC patients. Every plan is personalised, and results vary from
            person to person.
          </p>
        </div>

        <div className="bagrid">
          {cases.map((item) => (
            <div className="bacard" key={item.src}>
              <Image
                src={item.src}
                alt={`GFC before and after, ${item.who}, ${item.condition}`}
                width={800}
                height={500}
                sizes="(max-width: 900px) 100vw, 360px"
              />
              <div className="babody">
                <div className="bawho">{item.who}</div>
                <div className="bacond">{item.condition}</div>
                <div className="bades">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="badisc">
          Real patients treated at the clinic, shown with their consent. Results are
          individual and not typical; outcomes vary from person to person and are not
          guaranteed. As noted, each plan combined GFC with other treatments.
        </p>

        <div className="sectioncta center">
          <a href="#book" className="btn lg">
            Book a consultation
          </a>
        </div>
      </div>
    </section>
  );
}
