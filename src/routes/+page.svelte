<!--
  - MIT License
  -
  - Copyright (c) 2023 Luke Myers
  -
  - Permission is hereby granted, free of charge, to any person obtaining a copy
  - of this software and associated documentation files (the "Software"), to deal
  - in the Software without restriction, including without limitation the rights
  - to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  - copies of the Software, and to permit persons to whom the Software is
  - furnished to do so, subject to the following conditions:
  -
  - The above copyright notice and this permission notice shall be included in all
  - copies or substantial portions of the Software.
  -
  - THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  - IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  - FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  - AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  - LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  - OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  - SOFTWARE.
  -->
<script lang="ts">
	import type { PageData } from './$types';

	import {
		Button,
		Card,
		FlexLayout,
		Heading,
		HeroCard,
		Icon,
		PageSection,
		SiteFooter,
		SiteHeader,
		Subhead
	} from '$lib/component';

	import { flexList } from './styles.css';

	export let data: PageData;
</script>

<svelte:head>
	<title>Luke Myers</title>
</svelte:head>

<SiteHeader style={data.theme.header}>
	<svelte:fragment slot="content">
		<Heading>Hello, I'm Luke</Heading>
		<Subhead>UCSD CSE '23. Passionate about Android app design & development.</Subhead>
	</svelte:fragment>
	<svelte:fragment slot="image">
		<img
			alt="Me!"
			sizes="50svw"
			src="/assets/images/header-960.webp"
			srcset="/assets/images/header-640.webp 640w, /assets/images/header-960.webp 960w, /assets/images/header-1920.webp 1920w"
		/>
	</svelte:fragment>
</SiteHeader>

<main>
	<PageSection>
		<Heading>Experience</Heading>

		<FlexLayout>
			<Card>
				<svelte:fragment slot="content">
					<Heading>Online Tutor</Heading>
					<p><strong>The Princeton Review</strong></p>
					<p>2023</p>
					<p>&nbsp;</p>
					<p>
						Tutor for The Princeton Review’s Tutor.com online tutoring service. Assisted K-12 and
						college students in subjects including computer science principles, Java, SQL databases,
						and web development.
					</p>
				</svelte:fragment>
			</Card>
			<Card>
				<svelte:fragment slot="content">
					<Heading>Student Android Developer</Heading>
					<p><strong>Qualcomm Institute @ UCSD</strong></p>
					<p>2021 – 2023</p>
					<p>&nbsp;</p>
					<p>
						Developed and maintained multiple Android applications; worked as the Android developer
						on a team of mobile, web, and backend developers.
					</p>
					<p>&nbsp;</p>
					<p>
						Projects include: a survey app for a cancer research study conducted by UCSD and the MD
						Anderson Cancer Center; a prototype SDK that collects device data for use in user
						fingerprinting and authentication; and others.
					</p>
				</svelte:fragment>
			</Card>
			<Card>
				<svelte:fragment slot="content">
					<Heading>Computer Science Tutor</Heading>
					<p><strong>UC San Diego CSE Department</strong></p>
					<p>2021</p>
					<p>&nbsp;</p>
					<p>
						Tutor for CSE 12 (Data Structures) + CSE 15L for two quarters. Graded programming
						assignments and quizzes; proctored labs; helped resolve student questions via the
						Autograder ticket system.
					</p>
				</svelte:fragment>
			</Card>
		</FlexLayout>
	</PageSection>

	<PageSection>
		<Heading>Education</Heading>
		<HeroCard cardPosition="right" style={data.theme.education}>
			<svelte:fragment slot="image">
				<img
					alt="Me in my graduation regalia!"
					sizes="50svw"
					src="/assets/images/education-960.webp"
					srcset="/assets/images/education-640.webp 640w, /assets/images/education-960.webp 960w, /assets/images/education-1920.webp 1920w"
				/>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<p>
					In 2023, I graduated from the <strong>University of California San Diego</strong> with a bachelor's
					in computer science. My degree gave me hands-on and theoretical experience with areas including
					algorithms, computer architecture, machine learning, and software engineering.
				</p>
				<p>&nbsp;</p>
				<strong>Coursework includes:</strong>
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
			</svelte:fragment>
		</HeroCard>
		<HeroCard style={data.theme.robotics}>
			<svelte:fragment slot="image">
				<img
					alt="Me at a robotics competition!"
					sizes="50svw"
					src="/assets/images/robotics-960.webp"
					srcset="/assets/images/robotics-640.webp 640w, /assets/images/robotics-960.webp 960w, /assets/images/robotics-1920.webp 1920w"
				/>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<p>
					In high school, I joined <strong>FRC Team 980 ThunderBots</strong>, where I worked with my
					peers to design, build, and program robots to compete in the
					<strong>FIRST Robotics Competition</strong> each year.
				</p>
				<p>&nbsp;</p>
				<p>
					I took charge of programming four robots (C++ and Java) and two Arduino coprocessors over
					three competition seasons. I used this opportunity to investigate multiple programming
					languages and build systems, design and test autonomous route plans, and integrate vision
					systems that assist the human operators in scoring game pieces.
				</p>
				<p>&nbsp;</p>
				<p>
					I also took leadership in multiple team programs and initiatives, including our LEGO
					Robo-Camp in the off-season, for which I revised the curriculum and participated in the
					instruction of young kids in how to design their own robots. I was then promoted to
					co-captain in my final year of high school.
				</p>
			</svelte:fragment>
		</HeroCard>
	</PageSection>

	<PageSection>
		<Heading>Skills and Abilities</Heading>

		<FlexLayout>
			<ul class={flexList}>
				<li>Professional experience with Java, Android, and Kotlin</li>
				<li>Developed with Retrofit, Room, Hilt, and other libraries</li>
				<li>Worked with Python, C, C++, C#, SQL, and other programming languages</li>
			</ul>
			<ul class={flexList}>
				<li>Application design with Google’s Material Design system & Jetpack Compose</li>
				<li>Frontend website development in Svelte (HTML/CSS/TypeScript)</li>
				<li>Backend development in Kotlin & Ktor (REST, ROP)</li>
			</ul>
		</FlexLayout>
	</PageSection>

	<PageSection>
		<Heading>Projects</Heading>

		<FlexLayout>
			<Card>
				<svelte:fragment slot="content">
					<Heading>Tasks (chara.dev)</Heading>
					<p>2022 – 2023</p>
					<p>&nbsp;</p>
					<p>
						Created a functional and colorful tasks app with Kotlin Multiplatform, Ktor, and
						SvelteKit. Features a unique and friendly design, a home-rolled account system, and
						cross-device sync. Available on all major web and mobile platforms.
					</p>
					<p>&nbsp;</p>
					<p>
						Built with Koin, SQLDelight, Compose Multiplatform, & Decompose on mobile; Ktor,
						MariaDB, Firebase Cloud Messaging, & Quartz Scheduler on the backend; and TypeScript on
						the web.
					</p>
				</svelte:fragment>
				<svelte:fragment slot="actions">
					<Button href="https://tasks.chara.dev">
						<Icon>app_shortcut</Icon>
						<p>Launch (Web)</p>
					</Button>
					<Button href="https://github.com/19lmyers/tasks-kmm">
						<Icon>code</Icon>
						<p>View on GitHub (Mobile)</p>
					</Button>
				</svelte:fragment>
			</Card>
			<Card>
				<svelte:fragment slot="content">
					<Heading>Portfolio Website</Heading>
					<p>2023</p>
					<p>&nbsp;</p>
					<p>
						Created a fully server-side portfolio website using SvelteKit and Material Design.
						Hosted via GitHub Pages.
					</p>
				</svelte:fragment>
				<svelte:fragment slot="actions">
					<Button href="https://github.com/19lmyers/lukemyers.dev">
						<Icon>code</Icon>
						<p>View on GitHub</p>
					</Button>
				</svelte:fragment>
			</Card>
			<Card>
				<svelte:fragment slot="content">
					<Heading>ThunderScout 3</Heading>
					<p>2021</p>
					<p>&nbsp;</p>
					<p>
						Redesigned and rebuilt my Android-based scouting app for FIRST Robotics Competition
						teams, using Android’s Jetpack libraries, Material Design Components, and Bluetooth
						communication stack to collect, transfer, and display user-defined data on multiple
						devices.
					</p>
				</svelte:fragment>
				<svelte:fragment slot="actions">
					<Button href="https://github.com/19lmyers/ThunderScout">
						<Icon>code</Icon>
						<p>View on GitHub</p>
					</Button>
				</svelte:fragment>
			</Card>
		</FlexLayout>
	</PageSection>
</main>

<SiteFooter />
