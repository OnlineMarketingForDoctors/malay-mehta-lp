import { Fragment } from "react";

const facts = [
  <>
    <b>Doctor-led</b> assessment
  </>,
  <>
    <b>MD Dermatology</b> (MBBS, MD)
  </>,
  <>
    Clinic established <b>2018</b>
  </>,
  <>
    <b>Vile Parle West</b>, Mumbai
  </>,
];

export default function Strip() {
  return (
    <div className="strip">
      <div className="wrap">
        {facts.map((fact, i) => (
          <Fragment key={i}>
            <span>{fact}</span>
            {i < facts.length - 1 && <span className="dot">·</span>}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
