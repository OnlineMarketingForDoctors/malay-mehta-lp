import { Check } from "./icons";

const credentials = [
  "MBBS · MD Dermatology, Venereology & Leprosy",
  "International fellowships at McGill (Canada) & Nashville (USA)",
  "Founder & chief dermatologist, Vile Parle, Mumbai",
];

export default function About() {
  return (
    <section className="block about" id="about">
      <div className="wrap">
        <div className="row">
          <div>
            <span className="eyebrow">About the doctor</span>
            <h2>Dr Malay Mehta</h2>
            <p>
              Dr Mehta is a dermatologist specialising in hair and skin, with an MBBS and
              an MD in Dermatology, Venereology &amp; Leprosy. He is the founder and chief
              dermatologist of Malay Mehta Aesthetic Clinic in Mumbai.
            </p>
            <p>
              He has trained in advanced medical and cosmetic dermatology internationally,
              including a microsurgical and advanced medical dermatology fellowship under
              Dr Robin Billick at McGill University, Canada, and a laser and cosmetic
              dermatology fellowship under Dr Michael Gold in Nashville, USA.
            </p>
            <ul className="creds">
              {credentials.map((credential) => (
                <li key={credential}>
                  <Check /> {credential}
                </li>
              ))}
            </ul>
          </div>
          {/* Placeholder frame from the mockup — drop a photo in /public and swap in <Image>. */}
          <div className="photo">
            <span>Add a photo of Dr Malay Mehta or the clinic here</span>
          </div>
        </div>
      </div>
    </section>
  );
}
