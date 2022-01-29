import React, { useState } from "react";

const testiArray = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, vel ea velit equidem, ut solum homero mea. Ea sumo sale mea, tale semper audiam cu est, ex rebum pericula laboramus vix. ",
    webp: "/assets/testi1-min.webp",
    jpg: "/assets/testi1-min.jpg",
    name: "M. Müller",
    job: "Blumenliebhaber",
  },
  {
    id: 2,
    text: "Eam sint iuvaret dissentias ea. Ad recusabo torquatos sit. Sed modus alienum quaestio ea, te sed malis concludaturque, nec ea legere intellegebat.",
    webp: "/assets/testi2-min.webp",
    jpg: "/assets/testi2-min.jpg",
    name: "J. Jonas",
    job: "Student",
  },
  {
    id: 3,
    text: "Omnium electram pri id, ludus dolor blandit ius id. Duis dicit melius ea sed, mel id doctus utamur habemus. Te officiis percipitur vel, mel suas justo ex, et has periculis tincidunt. Nec ut velit zril oblique, ut corpora dignissim dissentias vim.",
    webp: "/assets/testi3-min.webp",
    jpg: "/assets/testi3-min.jpg",
    name: "J. Andrews",
    job: "Geschäftsführerin",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  return (
    <section className="" id="testimonials" aria-label="testimonials-section">
      <div className="container">
        <span>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3626 22.1233C14.1804 21.7829 12.9982 21.6102 11.8482 21.6102C10.0723 21.6102 8.59055 22.016 7.44156 22.513C8.54926 18.4578 11.2102 11.4607 16.5111 10.6727C17.002 10.5997 17.4043 10.2447 17.5382 9.76691L18.6968 5.62312C18.7944 5.27269 18.7365 4.89758 18.5367 4.59347C18.3368 4.28936 18.0155 4.08645 17.6555 4.0371C17.2643 3.98373 16.8655 3.95654 16.4703 3.95654C10.1076 3.95654 3.80631 10.5977 1.14733 20.1067C-0.413514 25.6855 -0.871193 34.0728 2.97352 39.352C5.12497 42.306 8.26378 43.8834 12.3028 44.041C12.3195 44.0415 12.3356 44.042 12.3522 44.042C17.3358 44.042 21.755 40.6857 23.0994 35.8808C23.9024 33.0084 23.5394 29.996 22.0762 27.3964C20.6287 24.826 18.2446 22.9525 15.3626 22.1233Z"
              fill="#FB7185"
            ></path>
            <path
              d="M46.5587 27.3969C45.1111 24.826 42.7271 22.9525 39.8451 22.1233C38.6628 21.7829 37.4806 21.6102 36.3311 21.6102C34.5553 21.6102 33.073 22.016 31.924 22.513C33.0317 18.4578 35.6927 11.4607 40.994 10.6727C41.4849 10.5997 41.8867 10.2447 42.0212 9.76691L43.1797 5.62312C43.2774 5.27269 43.2195 4.89758 43.0196 4.59347C42.8202 4.28936 42.499 4.08645 42.1385 4.0371C41.7478 3.98373 41.349 3.95654 40.9532 3.95654C34.5905 3.95654 28.2893 10.5977 25.6298 20.1067C24.0694 25.6855 23.6118 34.0728 27.457 39.353C29.6079 42.3065 32.7472 43.8845 36.7858 44.0415C36.8024 44.042 36.8185 44.0426 36.8356 44.0426C41.8188 44.0426 46.2385 40.6862 47.5828 35.8813C48.3849 33.0089 48.0214 29.996 46.5587 27.3969Z"
              fill="#FB7185"
            ></path>
          </svg>
        </span>
        <article>
          <p className="text-center testimonials_text">
            {testiArray[index].text}
          </p>
          <div className="testimonial_footer">
            <picture className="tesi_image">
              <source
                srcSet={`assets/images/testi${index + 1}-min.webp`}
                type="image/webp"
              />

              <img
                width="56"
                height="56"
                src={`assets/images/testi${index + 1}-min.png`}
                alt={testiArray[index].name}
              />
            </picture>
            <div className="testimonial_author">
              <p className="fw-bold heading-dark">{testiArray[index].name}</p>
              <p className="text-dark">{testiArray[index].job}</p>
            </div>
          </div>
        </article>

        <ul className="d-flex testimonial_dots">
          {Array.from({ length: 3 }, (_, number) => {
            return (
              <li>
                <button
                  className={`testimonial_dot ${
                    index === number ? "active" : ""
                  }`}
                  key={number}
                  onClick={() => {
                    setIndex(number);
                  }}
                >
                  {number + 1}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
