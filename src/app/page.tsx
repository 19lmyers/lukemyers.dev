import Image from "next/image";
import {Source_Code_Pro} from "next/font/google";

import styles from "./page.module.css";

import headerImage from './header.jpg'
import educationImage from './education.jpg'
import Link from "next/link";

const sourceCodePro = Source_Code_Pro({subsets: ["latin"]});

export default function Home() {
    return (
        <>
            <header className={`${styles.hero} ${styles.pageHeader}`}>
                <div className={styles.heroText}>
                    <h1 className={sourceCodePro.className}>Luke Myers</h1>
                    <p>Computer Science Tutor & Full-Stack Application Developer</p>
                </div>
                <div className={styles.heroImage}>
                    <Image src={headerImage}
                           priority={true}
                           alt="Luke Myers"
                    />
                </div>
            </header>
            <main>
                <section className={styles.section}>
                    <h2 className={sourceCodePro.className}>Experience</h2>
                    <div className={styles.cardLayout}>
                        <div className={styles.card}>
                            <h3 className={sourceCodePro.className}>Online Tutor</h3>
                            <strong>The Princeton Review</strong>
                            <p>Sep 2023 – Present</p>
                            <p>&nbsp;</p>
                            <ul>
                                <li>Assisted K-12 and college students one on one in subjects including computer science
                                    principles, Java, SQL databases,
                                    and web development
                                </li>
                                <li>Scheduled sessions with regular students; answered tutor queue for drop in support
                                </li>
                                <li>Utilized screen sharing, coding notepad, and audio tools to identify student issues
                                    and educate on best practices
                                </li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3 className={sourceCodePro.className}>Student Android Developer</h3>
                            <strong>Qualcomm Institute @ UCSD</strong>
                            <p>Aug 2021 – Aug 2023</p>
                            <p>&nbsp;</p>
                            <ul>
                                <li>Developed and maintained multiple Android applications as the sole Android developer
                                    using Kotlin & Firebase
                                </li>
                                <li>Projects include: a survey app for a cancer research study conducted by UCSD and the
                                    MD
                                    Anderson Cancer Center; a
                                    prototype SDK that collects device data for use in user fingerprinting and
                                    authentication; and others
                                </li>
                                <li>Communicated with iOS, web, and backend developers to identify issues and
                                    collaborate on
                                    solutions to common
                                    problems
                                </li>
                                <li>Interfaced with clients and stakeholders to establish feature design and iterate on
                                    feature implementation
                                </li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3 className={sourceCodePro.className}>Computer Science Tutor</h3>
                            <strong>UC San Diego CSE Department</strong>
                            <p>Jan 2021 — Jun 2021</p>
                            <p>&nbsp;</p>
                            <ul>
                                <li>
                                    Tutor for Data Structures & Software Tools and Techniques for two quarters
                                </li>
                                <li>Graded programming assignments and quizzes; proctored labs; helped resolve student
                                    questions via ticket system
                                </li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3 className={sourceCodePro.className}>Lead Programmer & Co-Captain</h3>
                            <strong>FRC Team 980 ThunderBots</strong>
                            <p>Sep 2015 — Aug 2019</p>
                            <p>&nbsp;</p>
                            <ul>
                                <li>Programmed four robots (C++ and Java) and two Arduino coprocessors over three
                                    competition seasons
                                </li>
                                <li>Developed the original ThunderScout Android app with Android Studio over 3+ years
                                </li>
                                <li>Took leadership in multiple team programs and initiatives, including the second year
                                    of our LEGO Robo-Camp program at the Burbank Public Library
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className={styles.section}>
                    <h2 className={sourceCodePro.className}>Education</h2>
                    <div className={styles.hero}>
                        <div className={styles.heroImage}>
                            <Image src={educationImage}
                                   alt="Luke Myers"
                            />
                        </div>
                        <div className={styles.heroText}>
                            <p>In 2023, I graduated from the <strong>University of California San Diego</strong> with a
                                bachelor&apos;s in
                                computer science. My degree gave me hands-on and theoretical experience with areas
                                including
                                algorithms, computer architecture, machine learning, and software engineering.
                            </p>
                            <p>&nbsp;</p>
                            <p><strong>Coursework includes:</strong></p>
                            <ul>
                                <li>Advanced Data Structures</li>
                                <li>Software Engineering</li>
                                <li>Principles of Computer Operating Systems</li>
                                <li>Database System Applications</li>
                                <li>Web Client Languages</li>
                                <li>Online Database Analytics Applications</li>
                                <li>AI: Search and Reasoning</li>
                                <li>Intro to Machine Learning</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className={styles.section}>
                    <h2 className={sourceCodePro.className}>Skills and Abilities</h2>
                    <ul className={styles.list}>
                        <li>Experience with Java, Python, C, C++, C#, SQL, and other programming languages</li>
                        <li>Website development in Svelte & React (HTML/CSS/TypeScript)</li>
                    </ul>
                </section>
                <section className={styles.section}>
                    <h2 className={sourceCodePro.className}>Projects</h2>
                    <div className={styles.cardLayout}>
                        <div className={styles.card}>
                            <h3 className={sourceCodePro.className}>Tasks (chara.dev)</h3>
                            <p>2022 — 2023</p>
                            <p>&nbsp;</p>
                            <ul>
                                <li>Created a functional and vibrant tasks app with Kotlin Multiplatform, Ktor, and
                                    SvelteKit
                                </li>
                                <li>Featured a unique and friendly design, a home-rolled account system, and
                                    cross-device sync; available on all major web
                                    and mobile platforms
                                </li>
                                <li>Built with Koin, SQLDelight, Compose Multiplatform, & Decompose on mobile; Ktor,
                                    MariaDB, Firebase Cloud Messaging,
                                    & Quartz Scheduler on the backend; and SvelteKit & TypeScript on the web
                                </li>
                            </ul>
                            <div className={`${styles.buttonRow} ${sourceCodePro.className}`}>
                                <a className={styles.button} href="https://github.com/19lmyers/tasks-kmm">View on
                                    GitHub</a>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <h3 className={sourceCodePro.className}>ThunderScout 3</h3>
                            <p>2021</p>
                            <p>&nbsp;</p>
                            <ul>
                                <li>Redesigned and rebuilt my Android-based scouting app for FIRST Robotics Competition
                                    teams using Android Jetpack
                                </li>
                                <li>Utilized Bluetooth communication to collect, transfer, and display user-defined data
                                    on multiple devices
                                </li>
                            </ul>
                            <div className={`${styles.buttonRow} ${sourceCodePro.className}`}>
                                <a className={styles.button} href="https://github.com/19lmyers/ThunderScout">View on
                                    GitHub</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className={styles.pageFooter}>
                <nav className="ccytv53"><Link className="_1xebasn1 _1xebasn0" href="/">Luke Myers</Link></nav>
                <nav className="ccytv54 ccytv52" role="none">
                    <a href="/resume.pdf">Resume</a>
                    <a href="https://github.com/19lmyers">GitHub</a>
                    <a href="https://www.linkedin.com/in/luke-myers-dev/">LinkedIn</a>
                </nav>
            </footer>
        </>
    );
}
