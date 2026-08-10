import { GoogleG } from "./icons";

/**
 * Placeholder reviews carried over from the mockup. Replace with the clinic's
 * verified Google reviews (or a live widget) before running traffic to the page —
 * and add review schema in app/layout.tsx only once these are real.
 */
const reviews = [
  {
    initial: "R",
    colour: "#BB3613",
    name: "Rahul S.",
    date: "2 weeks ago",
    body: "Very professional and honest consultation. Dr Mehta explained all my options clearly and never pushed anything. Genuinely helpful.",
  },
  {
    initial: "P",
    colour: "#4285F4",
    name: "Priya M.",
    date: "1 month ago",
    body: "The team was lovely and booking was easy. The doctor took time to understand my concerns and answered every question I had.",
  },
  {
    initial: "A",
    colour: "#34A853",
    name: "Aayush Parmar",
    date: "3 months ago",
    body: "Fantastic experience from start to finish. Dr Mehta is one of the best in Mumbai and the clinic is spotless.",
  },
];

export default function Reviews() {
  return (
    <section className="block cream" id="reviews">
      <div className="wrap">
        <div className="head center">
          <span className="eyebrow">Reviews</span>
          <h2>
            What Our <b>Patients Say</b>
          </h2>
          <div className="gbadge">
            <GoogleG /> <b>5.0</b> <span className="gs">★★★★★</span>{" "}
            <span>on Google Reviews</span>
          </div>
        </div>

        <div className="gcards">
          {reviews.map((review) => (
            <div className="gcard" key={review.name}>
              <div className="gtop">
                <div className="gav" style={{ background: review.colour }}>
                  {review.initial}
                </div>
                <div>
                  <div className="gname">{review.name}</div>
                  <div className="gdate">{review.date}</div>
                </div>
                <span className="gg">
                  <GoogleG />
                </span>
              </div>
              <div className="gs">★★★★★</div>
              <p>{review.body}</p>
            </div>
          ))}
        </div>

        <p className="gnote">
          Sample reviews shown. Connect the clinic&rsquo;s live Google reviews widget, or
          replace these with your latest verified Google reviews.
        </p>
      </div>
    </section>
  );
}
