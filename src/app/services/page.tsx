import Link from "next/link";
import React from "react";
import styles from "./services.module.css";

function page() {
  return (
    <div>
      <div className={`${styles.serviceUpper}`}>
        <h1>
          As a frontend developer, my focus is on creating seamless, responsive,
          and visually engaging web experiences. Here are some of the key
          services I offer to help businesses create powerful and engaging
          digital presences.
        </h1>
      </div>

      <div className={`${styles.servicesPara2}`}>
        <p>
          I specialize in bringing designs to life with clean, efficient code
          and ensuring that each project not only meets technical standards but
          also prioritizes user experience.
        </p>
      </div>

      {/* CARD CONTAINER */}
      <div className={`${styles.serviceCardContainer}`}>
        {/* CARD 1 */}
        <div className={`${styles.card}`}>
          <div className={`${styles.cardHoverDiv}`}>
            <Link href={"/contact"} className={`${styles.cardHoverButton}`}>
              {" "}
              Let&apos;s Talk
            </Link>
          </div>
          <div className={`${styles.cardsvgandTextParent}`}>
            <div className={`${styles.cardsvgParent}`}>
              <svg
                className={`${styles.cardsvg}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <div className={`${styles.cardTextParent}`}>
              <h1>WEB DEVELOPMENT</h1>
              <p>
                I specialize in creating high-performance websites that combine
                sleek design with seamless functionality.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className={`${styles.card}`}>
          <div className={`${styles.cardHoverDiv}`}>
            <Link href={"/contact"} className={`${styles.cardHoverButton}`}>
              {" "}
              Let&apos;s Talk
            </Link>
          </div>
          <div className={`${styles.cardsvgandTextParent}`}>
            <div className={`${styles.cardsvgParent}`}>
              <svg
                className={`${styles.cardsvg}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <rect x="7" y="4" width="10" height="16" rx="1" />{" "}
                <line x1="11" y1="5" x2="13" y2="5" />{" "}
                <line x1="12" y1="17" x2="12" y2="17.01" />
              </svg>
            </div>
            <div className={`${styles.cardTextParent}`}>
              <h1>RESPONSIVE WEB DESIGN</h1>
              <p>
                Create websites that adapt smoothly to any device, ensuring an
                optimal experience for users on phones, tablets, and desktops.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className={`${styles.card}`}>
          <div className={`${styles.cardHoverDiv}`}>
            <Link href={"/contact"} className={`${styles.cardHoverButton}`}>
              {" "}
              Let&apos;s Talk
            </Link>
          </div>
          <div className={`${styles.cardsvgandTextParent}`}>
            <div className={`${styles.cardsvgParent}`}>
              <svg
                className={`${styles.cardsvg}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />{" "}
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className={`${styles.cardTextParent}`}>
              <h1>PERFORMANCE OPTIMIZATION</h1>
              <p>
                Enhance website performance by streamlining code, optimizing
                images, and minimizing load times to deliver a fast, responsive
                experience.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className={`${styles.card}`}>
          <div className={`${styles.cardHoverDiv}`}>
            <Link href={"/contact"} className={`${styles.cardHoverButton}`}>
              {" "}
              Let&apos;s Talk
            </Link>
          </div>
          <div className={`${styles.cardsvgandTextParent}`}>
            <div className={`${styles.cardsvgParent}`}>
              <svg
                className={`${styles.cardsvg}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className={`${styles.cardTextParent}`}>
              <h1>SINGLE PAGE APPLICATIONS</h1>
              <p>
                Develop fast, interactive applications where content loads
                dynamically without page reloads, providing users with a
                seamless, app-like experience.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 5 */}
        <div className={`${styles.card}`}>
          <div className={`${styles.cardHoverDiv}`}>
            <Link href={"/contact"} className={`${styles.cardHoverButton}`}>
              {" "}
              Let&apos;s Talk
            </Link>
          </div>
          <div className={`${styles.cardsvgandTextParent}`}>
            <div className={`${styles.cardsvgParent}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={`${styles.cardsvg}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                />
              </svg>
            </div>
            <div className={`${styles.cardTextParent}`}>
              <h1>FRONTEND MAINTENANCE & DEBUGGING</h1>
              <p>
                Regular maintenance and troubleshooting keep the website running
                smoothly and allow for continuous improvements based on user
                feedback and evolving requirements.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 6 */}
        <div className={`${styles.card}`}>
          <div className={`${styles.cardHoverDiv}`}>
            <Link href={"/contact"} className={`${styles.cardHoverButton}`}>
              {" "}
              Let&apos;s Talk
            </Link>
          </div>
          <div className={`${styles.cardsvgandTextParent}`}>
            <div className={`${styles.cardsvgParent}`}>
              <svg
                className={`${styles.cardsvg}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M9 12l2 2l4 -4" />{" "}
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
              </svg>
            </div>
            <div className={`${styles.cardTextParent}`}>
              <h1 >SUPPORT & MAINTENANCE</h1>
              <p>
                My commitment doesn’t end at launch. I provide ongoing support
                and maintenance to keep websites performing at their best. This
                includes regular updates, bug fixes, and performance
                optimizations to adapt to new technologies .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
