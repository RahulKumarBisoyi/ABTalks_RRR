**PROMT 1**

We are building a hackathon prototype called ABTalks.

PRODUCT

ABTalks is a 60-day coding journey for college students.

Core identity:

BUILD. SHIP. LEVEL UP.

The student receives one practical coding mission each day, builds the project independently, submits proof through GitHub + LinkedIn, and tracks their progress through streaks, XP, achievements, rankings, and skills.

This is a prototype for a hackathon, not a production application.

IMPORTANT CONSTRAINTS

Do NOT build:

Authentication

Backend

Database

Admin panel

Real user accounts

Real GitHub API integration

Real LinkedIn API integration

Recruiter dashboard

Use:

React

JavaScript

Tailwind CSS

React Router

Mock JSON/JavaScript data

localStorage for persistence where appropriate

The application must actually work. Do not create a static UI mockup.

REQUIRED ROUTES

Create exactly these primary routes:

//dashboard/day/12

The hackathon evaluator will open these routes directly at 390px mobile width, so mobile-first design is extremely important.

VISUAL IDENTITY

Do NOT use the typical:

Purple/white SaaS design

Purple gradients

Generic glassmorphism

Excessive rounded cards

Generic AI dashboard styling

Use this visual direction:

Dark/black interface

Bright yellow as the primary accent

White/light text

High contrast

Developer-focused

Energetic and slightly competitive

Modern but not generic

Strong typography

Subtle animations

Clean spacing

Use the 🔥 fire/streak visual as an important recurring identity element

The brand should feel like a developer mission/progression platform.

The main brand message is:

BUILD. SHIP. LEVEL UP.

CORE PRODUCT LOOP

The experience should communicate this journey:

DISCOVER→ Today's Mission

BUILD→ Student codes independently

SHIP→ Student publishes project to GitHub

PROVE→ Student submits GitHub + LinkedIn links

LEVEL UP→ XP + streak + achievements

GROW→ Skills + progress + ranking

RETURN→ Come back for tomorrow's mission

CORE FEATURES

The prototype should support:

60-day challenge progress

Daily missions

Current streak

XP

Achievements

Mock daily ranking

Skill progression

GitHub proof submission

LinkedIn proof submission

Persistent mock student progress using localStorage

First-day state

Missed-day state

Empty-profile state

A future-ready AI Mentor section that can later connect to Breeth

Do not integrate Breeth yet. Keep the architecture clean so an AI API can be added later.

MOCK STUDENT

Create realistic mock data for one student.

Example:

Name: RahulTrack: Frontend DevelopmentCurrent day: 12Current streak: 12XP: 1450

Also create mock leaderboard users so the ranking feels realistic.

Create enough challenge data to demonstrate the 60-day journey, even if only several challenges need detailed content.

IMPORTANT PRODUCT PRINCIPLE

This must feel like a developer journey, not a website containing a list of coding questions.

The student should always understand:

"What is my mission today?"

"What do I need to build?"

"How do I prove it?"

"How am I progressing?"

"What do I unlock next?"

DEVELOPMENT APPROACH

First create the project foundation and architecture.

Set up:

React application

Tailwind CSS

React Router

Reusable components

Data structure for challenges

Data structure for student profile

Data structure for achievements

Data structure for leaderboard

localStorage utility/state handling

Create a clean and scalable folder structure.

Do NOT try to finish all three pages in this first step.

For now, build the foundation and make sure the application runs correctly.

After completing this foundation, explain:

What you created

Folder structure

How to run it

Which files we should edit next

Do not add unnecessary libraries or dependencies.



**PROMT 2**

Now build **Step 2: the ABTalks Landing Page** at:

`/`

Do not build the dashboard or challenge-day page yet.

## GOAL

The landing page is the first experience for a college student who has never heard of ABTalks.

Within a few seconds, the student should understand:

* What ABTalks is
* What they will do
* Why they should care
* How the 60-day journey works
* What they will gain
* How to start

The page should make the student feel:

**"I want to start this challenge."**

## BRAND

Product name:

**ABTalks**

Tagline:

**BUILD. SHIP. LEVEL UP.**

Use the existing ABTalks visual identity from the previous prompt.

## VISUAL DIRECTION

Maintain the established design system:

* Dark/black background
* Bright yellow as the primary accent
* White/light text
* High contrast
* Developer-focused
* Energetic
* Slightly competitive
* Premium but not corporate
* Strong typography
* Minimal decoration
* Subtle animations
* Avoid excessive rounded cards
* Avoid glassmorphism
* Avoid purple
* Avoid generic AI/SaaS dashboard styling

The page should feel like a **developer challenge platform**, not an online course website.

Use the 🔥 fire/streak visual carefully as part of the identity.

Do not use excessive gradients.

## MOBILE FIRST

The primary target is:

**390px width**

Design the page for mobile first.

Make sure:

* No horizontal scrolling
* Text never overflows
* Buttons are easy to tap
* Navigation works on small screens
* Sections have appropriate spacing
* Important information appears above the fold
* Desktop should still look good as a secondary layout

## LANDING PAGE STRUCTURE

Build the page in the following hierarchy.

### 1. NAVBAR

Keep it simple.

Left:

**ABTalks**

Right:

A compact navigation/menu element appropriate for mobile.

Do not overcrowd the navbar.

---

### 2. HERO SECTION

This is the most important section.

Use strong typography.

Suggested content:

**BUILD. SHIP. LEVEL UP.**

Supporting message:

**60 days. 60 missions. One stronger developer.**

Explain briefly:

Complete one practical coding mission every day, build real projects, prove your work, and track your developer journey.

Primary CTA:

**START YOUR 60-DAY JOURNEY**

Secondary action can be:

**SEE HOW IT WORKS**

The primary CTA should be visually dominant.

Include a visually interesting but lightweight representation of:

**🔥 STREAK**

**⚡ XP**

**60 DAYS**

Do not turn the hero into a complicated dashboard.

---

### 3. THE 60-DAY CONCEPT

Explain the challenge simply.

Show the journey as:

**DAY 01 → DAY 15 → DAY 30 → DAY 45 → DAY 60**

Use a visual progress/path concept rather than a generic row of cards.

Message:

**One mission every day.**

Explain that students learn by building consistently instead of only watching tutorials.

---

### 4. HOW IT WORKS

Create three clear steps:

### BUILD

Get today's practical coding mission and build it yourself.

### SHIP

Publish your work and turn your learning into a real project.

### PROVE

Submit your GitHub repository and LinkedIn post.

Then connect this to:

**LEVEL UP**

Show that completing missions increases progress, XP, streaks and achievements.

The visual flow should be:

BUILD → SHIP → PROVE → LEVEL UP

---

### 5. WHY ABTALKS

Do not use generic marketing claims.

Focus on concrete student benefits:

* Build instead of only consuming tutorials
* Create projects for your portfolio
* Build consistency
* Make your progress visible
* Develop real-world skills
* Have proof of your work

Make the section concise and visually interesting.

---

### 6. PROGRESSION / LEVEL-UP SECTION

Introduce the idea that students aren't simply checking off days.

Show a small visual example:

```text
HTML       ✓
CSS        ✓
JavaScript ✓
React      →
APIs       🔒
Backend    🔒
AI         🔒
```

Headline:

**You're not just completing days. You're building your developer profile.**

This should communicate our differentiation.

---

### 7. STREAK / MOTIVATION SECTION

Introduce the fire streak identity.

Example:

**🔥 KEEP THE CHAIN ALIVE**

12 days today.

13 tomorrow.

Don't break the chain.

This should feel motivating without becoming childish or overly gamified.

---

### 8. FINAL CTA

End with a strong CTA.

Example:

**YOUR NEXT 60 DAYS START HERE.**

Supporting text:

Build something every day. Ship your work. Become a stronger developer.

Button:

**START YOUR JOURNEY →**

---

## INTERACTIONS

The landing page must be functional, not just visual.

Implement:

* Smooth scrolling for relevant navigation links
* CTA buttons should navigate appropriately
* "Start Your Journey" should navigate to `/dashboard`
* Buttons should have hover/tap states
* Subtle entrance animations are acceptable
* Do not add unnecessary animation libraries

Since authentication is out of scope, the CTA can directly take the user to the demo dashboard.

## IMPORTANT

Do not invent a completely different layout.

Follow the product blueprint and visual direction above.

Do not create:

* Pricing
* Testimonials
* Blog
* Recruiter section
* Login/signup
* Fake company logos
* Unnecessary marketing sections

This is a focused hackathon prototype.

## CODE QUALITY

Use reusable components where appropriate.

Keep the landing page easy to modify later.

Do not duplicate large blocks of JSX unnecessarily.

Use the existing project structure from Step 1.

Do not install unnecessary dependencies.

## AFTER COMPLETION

Test the landing page at approximately **390px width**.

Check:

* No overflow
* No broken elements
* CTA works
* Navigation works
* Typography is readable
* Page loads correctly at `/`

Then tell me:

1. What you implemented
2. Which files you changed
3. How the landing page behaves
4. Any issues that remain

Do not build `/dashboard` or `/day/12` yet.



**PROMT 3**

Now build **Step 3: the ABTalks Student Dashboard** at:

`/dashboard`

Do not build `/day/12` yet.

The dashboard is the student's main home screen after starting the 60-day challenge.

## CORE GOAL

The dashboard should immediately answer:

1. What is my current progress?
2. What do I need to do today?
3. How am I performing?
4. What should I do next?

The most important element must be **Today's Mission**.

Do not turn the dashboard into a generic analytics dashboard.

---

# BRAND

Use:

**ABTalks**

**BUILD. SHIP. LEVEL UP.**

Continue using the existing ABTalks visual system from the landing page.

---

# VISUAL DIRECTION

Maintain the existing design:

* Dark/black background
* Bright yellow as the primary accent
* White/light text
* High contrast
* Developer-focused
* Energetic
* Slightly competitive
* Strong typography
* Clean spacing
* Subtle animations
* Minimal decoration
* No purple
* No purple gradients
* No generic SaaS dashboard appearance
* No excessive glassmorphism
* Avoid making every element a rounded floating card

The 🔥 streak visual should remain an important part of the identity.

Do not redesign the visual language established on the landing page.

---

# MOBILE FIRST

The hackathon evaluator will open the site at:

**390px width**

Design the dashboard mobile-first.

Check carefully for:

* Horizontal overflow
* Text overflow
* Buttons that are too small
* Cards wider than the viewport
* Unnecessary horizontal scrolling
* Poor spacing
* Tiny unreadable text

Desktop should be a secondary responsive layout.

---

# DASHBOARD STRUCTURE

Build the dashboard in this hierarchy.

## 1. TOP HEADER

Show:

**ABTalks**

Then a compact profile area.

Example:

**Rahul**

**Frontend Development**

Do not create a full authentication/profile system.

This is mock student data.

---

# 2. STREAK HERO

Make the streak visually prominent.

Example:

**🔥 12 DAY STREAK**

Supporting message:

**Keep the chain alive.**

Also show a small indication of the previous/recent streak days.

For example:

`M T W T F S S`

with completed/current states.

The fire/streak element should feel like one of ABTalks' recognizable visual features.

---

# 3. TODAY'S MISSION — MOST IMPORTANT SECTION

Create the primary dashboard section.

Example:

**DAY 12 / 60**

**WEATHER INTELLIGENCE**

Build a weather application that retrieves and displays live weather information.

Show:

* Difficulty
* Skills
* XP reward

Example:

**MEDIUM**

`React · JavaScript · APIs`

**+100 XP**

Primary button:

**START MISSION →**

This button must navigate to:

`/day/12`

Make this the strongest CTA on the dashboard.

---

# 4. 60-DAY JOURNEY PROGRESS

Show the student's overall challenge progress.

Example:

**YOUR JOURNEY**

`12 / 60 DAYS`

Include a visually interesting progress indicator.

Also show:

**20% COMPLETE**

The progress should feel like a journey rather than a generic progress bar.

---

# 5. XP / LEVEL

Create an XP section.

Example:

**LEVEL 6**

**1,450 XP**

Show progress toward the next level.

The numbers should come from the mock student data rather than being hardcoded directly into multiple components.

---

# 6. DEVELOPER SKILLS

Show the student's skill progression.

Example:

**YOUR SKILLS**

HTML        ✓
CSS         ✓
JavaScript  ✓
React       ████████░░
APIs        ███░░░░░░░
Backend     🔒

Make this visually compact.

The goal is to communicate:

**The student is developing a skill profile, not merely completing days.**

---

# 7. DAILY RANKING

Add a compact leaderboard section.

Title:

**TODAY'S BUILDERS**

Show approximately 5 mock students.

Example:

`#18  Aarav      1,520 XP`
`#19  Priya      1,500 XP`
`#20  Rahul      1,450 XP`
`#21  Dev        1,420 XP`

Highlight the current student.

The ranking is mock data for the prototype.

Add a small action such as:

**VIEW FULL RANKING →**

but do not create a separate ranking route.

---

# 8. ACHIEVEMENTS

Show the student's recent achievements.

Example:

🔥 **7-Day Warrior**

⚡ **First Ship**

🏆 **10 Missions**

Use a compact horizontal/scrollable presentation on mobile if necessary, but ensure it remains usable at 390px.

---

# 9. AI MENTOR PREVIEW

Create a small section called:

**YOUR AI MENTOR**

This is currently a prototype/mock feature.

Example:

> "You've been building strong frontend fundamentals. Your next challenge introduces API integration — a good opportunity to expand your skill set."

Add a subtle label:

**PERSONALIZED INSIGHT**

Do NOT integrate Breeth yet.

Do not pretend this is a real AI response.

Structure the component so Breeth can be connected later.

---

# 10. RECENT ACTIVITY

Show a small timeline.

Example:

**Yesterday**
✓ Completed Day 11
+100 XP

**2 days ago**
✓ Completed Day 10
+100 XP

**3 days ago**
🏆 Unlocked "10 Mission Builder"

This should make the student's journey feel alive.

---

# 11. MOBILE NAVIGATION

Create a simple mobile-friendly navigation system.

It should allow the student to easily access:

* Home/Dashboard
* Current Mission
* Progress/Profile

Do not add unnecessary pages that are outside the hackathon scope.

If appropriate, use a compact bottom navigation on mobile.

Make sure it does not cover important content.

---

# FUNCTIONALITY

The dashboard must actually work.

Implement:

### Today's Mission button

Navigate to:

`/day/12`

### Progress

Read from the central mock student data/state.

### XP

Use the existing student data structure.

### Streak

Use the existing student data structure.

### Ranking

Use mock leaderboard data.

### Achievements

Use mock achievement data.

### localStorage

Use localStorage where appropriate so that progress changes made later from `/day/12` can be reflected on the dashboard.

Do not create fake buttons that do nothing.

---

# IMPORTANT STATE SUPPORT

The dashboard should be structured so it can handle these states later:

### Normal state

Student is currently on Day 12.

### First-day state

Student has:

`0 day streak`

and has not completed any missions.

The UI should not show a broken or confusing empty dashboard.

### Missed-day state

Student missed a challenge.

Show an appropriate recovery state instead of making the interface look broken.

### Empty profile state

If profile information is missing, show sensible placeholders.

Do not build separate pages for these states yet. Make the components/data architecture capable of supporting them.

---

# DATA ARCHITECTURE

Do not hardcode the same values in many components.

Use the existing mock data structure from the project foundation.

For example, student data should contain fields for:

* name
* track
* currentDay
* streak
* xp
* level
* skills
* achievements
* recentActivity

Challenge data should contain:

* day
* title
* description
* difficulty
* skills
* xpReward

Leaderboard data should be separate.

Keep the data reusable because `/day/12` will use the same challenge data.

---

# UX PRINCIPLE

When the student opens the dashboard, the visual hierarchy should feel approximately like:

**STREAK**
↓
**TODAY'S MISSION**
↓
**JOURNEY PROGRESS**
↓
**XP / SKILLS**
↓
**RANKING / ACHIEVEMENTS**
↓
**AI MENTOR / ACTIVITY**

Today's mission must remain the main action.

---

# DO NOT

Do not add:

* Authentication
* Backend
* Database
* Real GitHub API
* Real LinkedIn API
* Recruiter features
* Admin features
* Chat system
* Notifications backend
* Pricing
* Unnecessary pages
* Unnecessary dependencies

Do not rebuild the landing page unless a shared component needs a small adjustment for consistency.

---

# TESTING

After implementing the dashboard:

1. Open `/dashboard`
2. Test at approximately 390px width
3. Test the Start Mission button
4. Confirm it navigates to `/day/12`
5. Check for horizontal scrolling
6. Check all text and buttons
7. Check that existing landing page styling remains consistent

Do not build `/day/12` yet.

After completing this step, tell me:

1. What you implemented
2. Which files you changed
3. How the dashboard works
4. Any issues or warnings
5. Whether `/dashboard` works correctly at 390px width


**PROMT 4**

Now build Step 4: the ABTalks Mission Page at:

/day/12

Do not build backend, authentication, GitHub API, LinkedIn API, or real AI features yet.

This page represents the student's active coding mission after clicking "START MISSION →" from the dashboard.

The goal is to make the student understand:
1. What they have to build today
2. Why this mission matters
3. What skills they will practice
4. How to complete and submit the mission

Continue using the existing ABTalks design system.

BRAND

ABTalks

BUILD. SHIP. LEVEL UP.

Maintain the same visual identity:

- Dark/black background
- Bright yellow accent
- White text
- Developer-focused
- Competitive energy
- Strong typography
- Minimal decoration
- Subtle animations
- No purple
- No generic SaaS dashboard style


MOBILE FIRST

The evaluator will test at:

390px width

Ensure:

- No horizontal scrolling
- Buttons fit properly
- Text does not overflow
- Sections stack correctly
- Touch targets are mobile friendly


PAGE STRUCTURE


1. TOP HEADER

Show:

ABTalks

Back button:
← Dashboard

Compact student info:

Rahul
Frontend Development


2. MISSION HERO

Make this the strongest section.

Show:

DAY 12 / 60

WEATHER INTELLIGENCE

Build a weather application that retrieves and displays live weather information.


Include:

Difficulty:
MEDIUM

Skills:
React · JavaScript · APIs

Reward:
+100 XP


3. MISSION OBJECTIVE

Create a section:

MISSION OBJECTIVE

Explain:

Build a responsive weather application where users can search locations and view weather information using an API.

Keep it concise.


4. WHAT YOU WILL BUILD

Show the expected outcome.

Example:

✓ Search weather by city
✓ Display temperature
✓ Show weather conditions
✓ Handle API responses
✓ Create responsive UI


5. LEARNING OUTCOMES

Show skills gained:

React Components
API Integration
Async JavaScript
State Management
UI Design


6. DAILY STEPS

Create a simple checklist:

Step 1:
Create project structure

Step 2:
Design weather interface

Step 3:
Connect weather API

Step 4:
Handle loading and errors


7. SUBMISSION SECTION

Create:

SUBMIT MISSION

Show:

GitHub Repository
LinkedIn Post

These are prototype fields only.

Do not integrate APIs.

Create buttons/UI that are ready for future functionality.


8. COMPLETE MISSION BUTTON

Create a primary CTA:

COMPLETE MISSION

For now:

- Update localStorage
- Increase completed missions/progress data
- Update XP/streak data structure

Do not actually finish Day 12 permanently if the architecture is not ready.

Keep state reusable for future.


9. AI MENTOR TIP

Add small section:

AI MENTOR TIP

Example:

"Focus on handling API states properly. Professional developers build systems that handle loading and errors gracefully."


Mark it:

PERSONALIZED INSIGHT

Prototype only.


10. MOBILE NAVIGATION

Maintain consistent navigation:

Dashboard
Mission
Progress/Profile


DATA ARCHITECTURE

Do not hardcode repeated values.

Use reusable data structures.

Challenge data should include:

- day
- title
- description
- difficulty
- skills
- xpReward
- steps
- outcomes


Student data should include:

- completedDays
- streak
- xp
- level
- progress


The dashboard and mission page should use the same mock data source.


IMPORTANT

Do not redesign existing pages.

Do not modify the landing page unnecessarily.

Do not add:

- Authentication
- Database
- Backend
- Real API calls
- GitHub integration
- LinkedIn integration
- Chat
- Notifications


TESTING

After implementation:

1. Open /day/12
2. Test Start Mission navigation from dashboard
3. Test at 390px width
4. Test Complete Mission interaction
5. Confirm dashboard data can update later
6. Confirm existing pages still work


After completing this step, report:

1. Files changed
2. Components created
3. Data structures added
4. How mission completion works
5. Any issues found


**PROMT 5**

# STEP 5 — CONNECT THE ABTALKS JOURNEY FLOW

Continue from the existing ABTalks project.

The following are already completed:

- Landing page /
- Student Dashboard /dashboard
- Mission Page /day/12
- GitHub + LinkedIn submission fields
- Mission completion
- XP/streak update
- localStorage-based progress

Do NOT rebuild these pages.

Do NOT redesign the existing ABTalks visual identity.

Now improve and connect the complete student journey so the application behaves like one coherent product.


# CORE GOAL

The complete ABTalks loop must work:

DISCOVER
↓
Today's Mission
↓
BUILD
↓
SHIP
↓
PROVE
↓
LEVEL UP
↓
TRACK GROWTH
↓
RETURN TOMORROW


The student should feel that completing a mission actually changes their journey.


# 1. CENTRAL STUDENT STATE

Create or improve a single reusable student progress/data source.

The student data should include:

- name
- track
- currentDay
- completedDays
- streak
- xp
- level
- skills
- achievements
- recentActivity
- submittedProjects


Avoid storing the same information separately in multiple components.


# 2. CENTRAL CHALLENGE DATA

Create reusable challenge data.

Day 12 should contain:

- day
- title
- description
- difficulty
- skills
- xpReward
- requirements
- steps
- outcomes


The Mission Page and Dashboard must read Day 12 from the same challenge data.

Do not duplicate the mission title, XP, skills, etc. in multiple files.


# 3. DASHBOARD LIVE SYNCHRONIZATION

When the student completes Day 12:

The dashboard should automatically reflect the updated progress when the student returns.

Before completion:

12 / 60 DAYS
12 DAY STREAK
1,450 XP


After completion:

13 / 60 DAYS
13 DAY STREAK
1,550 XP


Update:

- Journey progress
- XP
- Level
- Streak
- Completed missions
- Recent activity
- Achievements
- Current mission state


The dashboard should not require manually changing hardcoded numbers.


# 4. COMPLETED MISSION STATE

If Day 12 has already been completed:

The dashboard should NOT continue presenting it as an untouched mission.

Instead show something like:

✓ DAY 12 COMPLETED

+100 XP EARNED

Then provide a suitable next action.

For this prototype, because only Day 12 exists:

VIEW COMPLETED MISSION →

can return to /day/12.

Do NOT create Day 13 yet.


# 5. DUPLICATE XP PROTECTION

Make sure completing Day 12 multiple times cannot repeatedly award:

+100 XP

The system must detect that Day 12 is already completed.

If the student tries again:

- Do not increase XP
- Do not increase streak again
- Do not duplicate achievements
- Do not duplicate recent activity


# 6. ACHIEVEMENT SYSTEM

Create a reusable achievement structure.

Support achievements such as:

First Mission
7-Day Warrior
10 Missions
30-Day Builder
Consistency Master


For the current prototype:

If Day 12 is completed, the appropriate achievement should be unlocked if its condition is met.

Example:

🏆 10 Missions

Do not unlock achievements repeatedly.


# 7. XP AND LEVEL SYSTEM

Create reusable XP logic.

Current student:

1,450 XP
Level 6


After Day 12:

1,550 XP


Create a simple reusable level calculation/progression system.

Do not hardcode the level separately from XP.

The exact level thresholds can remain simple mock logic suitable for the prototype.

The dashboard should derive the displayed level from the student data.


# 8. STREAK SYSTEM

Create reusable streak logic.

For the prototype:

Completing today's mission should increase the streak.

Example:

12 DAY STREAK

→

13 DAY STREAK


Prevent duplicate completion from increasing the streak again.


The architecture should later support:

- first-day state
- consecutive completion
- missed day
- recovery state


Do not build a complicated date/calendar engine yet.


# 9. RECENT ACTIVITY

When Day 12 is completed, add a new activity item.

Example:

Today
✓ Completed Day 12
+100 XP


The activity should come from student data rather than being permanently hardcoded in the component.


# 10. SUBMISSION RECORD

When the student completes Day 12, save their submitted links.

Store:

- day
- githubUrl
- linkedinUrl
- completedAt


inside the student's submittedProjects/progress data.

These are mock submissions.

Do NOT validate the actual existence of the GitHub repository or LinkedIn post.


# 11. JOURNEY PROGRESS

The dashboard should calculate:

completedDays / 60

For example:

12 completed days:

20%


13 completed days:

21.67%


Do not hardcode the percentage.


The journey UI should continue to feel like a developer journey rather than a generic progress bar.


# 12. SKILL PROGRESSION

When missions are completed, the architecture should be capable of updating skills.

For Day 12:

React
JavaScript
APIs


For now, use a simple mock progression.

Do not create an overly complicated skill algorithm.

The important thing is that skills come from challenge data and can later be updated as missions are completed.


# 13. LOCALSTORAGE

Use localStorage as the persistence layer.

The student should be able to:

1. Complete Day 12
2. Refresh the browser
3. Return to /dashboard
4. Still see the updated progress


Make sure the application safely handles:

- missing localStorage data
- corrupted/invalid data
- first-time visitors


Use sensible defaults if data is missing.


# 14. RESET DEMO DATA

Because this is a hackathon prototype, add a small developer/demo reset mechanism if appropriate.

For example:

Reset Demo Progress

It should:

- restore the original mock student state
- clear completed Day 12 state
- restore XP
- restore streak
- restore achievements
- restore recent activity


Do not make this visually prominent.

It can be a small utility in an appropriate location.


# 15. MISSION PAGE STATE

The Mission Page should respond to completion state.

Before completion:

COMPLETE MISSION →


After completion:

MISSION COMPLETE ✓


and show:

+100 XP
🔥 13 DAY STREAK


Do not allow duplicate rewards.


# 16. DASHBOARD STATE

The dashboard should show meaningful information based on the student's current state.

Normal:

Today's mission is available.


Completed:

Day 12 is completed.


First-day:

0 completed days.


Do not create separate routes for these states.


# 17. PRESERVE DESIGN

Keep the existing ABTalks design.

Do not change:

- Brand colors
- Typography direction
- Layout philosophy
- Mobile-first approach
- Existing landing page design


The product should continue feeling:

BUILD.
SHIP.
LEVEL UP.


# 18. MOBILE TESTING

Test the complete flow at approximately:

390px width


Check:

- Dashboard
- Mission page
- Submission inputs
- Completion state
- Progress
- Navigation
- No horizontal scrolling


# 19. DO NOT BUILD

Do NOT add:

- Backend
- Database
- Authentication
- Real GitHub API
- Real LinkedIn API
- Real Breeth integration
- Chat
- Notifications
- Admin
- Recruiter dashboard
- Day 13 page
- Complex calendar system


# FINAL TEST FLOW

Test exactly this:

1. Open /
2. Go to /dashboard
3. Confirm current progress
4. Click START MISSION
5. Open /day/12
6. Enter GitHub URL
7. Enter LinkedIn URL
8. Complete mission
9. Confirm +100 XP
10. Confirm streak increases
11. Confirm achievement state
12. Confirm recent activity
13. Return to dashboard
14. Confirm dashboard updates
15. Refresh browser
16. Confirm progress persists
17. Try completing Day 12 again
18. Confirm no duplicate XP/streak/achievement
19. Use reset demo data
20. Confirm original demo state returns
21. Test everything at 390px width


# IMPORTANT

This step is about making the existing ABTalks pages behave as ONE connected product.

Do not add unnecessary new features.

Do not rebuild existing pages.

Do not create Day 13.

After implementation, report:

1. Files changed
2. Central data/state architecture
3. localStorage structure
4. XP logic
5. Streak logic
6. Achievement logic
7. Submission storage
8. Dashboard synchronization
9. Reset demo implementation
10. Any warnings/issues
11. 390px mobile testing result


**PROMT 6**

# STEP 6 — ABTALKS DEVELOPER JOURNEY & PROGRESSION

Continue from the existing ABTalks project.

The following are already completed and working:

- Landing page /
- Dashboard /dashboard
- Mission page /day/12
- GitHub + LinkedIn submission
- Mission completion
- XP system
- Streak system
- Achievement system
- localStorage persistence
- Dashboard synchronization

Do NOT rebuild the existing pages.

Do NOT change the core ABTalks visual identity.

This step should improve the feeling of a real 60-day developer journey.


# CORE GOAL

ABTalks should feel like:

"I am progressing through a developer journey."

Not:

"I am just looking at a dashboard."

The student should be able to visually understand:

- How many days they completed
- Where they are now
- Their streak
- Their XP/level
- Which skills they have unlocked
- Their achievements
- What remains in the 60-day journey


# 1. 60-DAY JOURNEY SECTION

Add a prominent section to the dashboard:

YOUR DEVELOPER JOURNEY


Show:

DAY 12 / 60

or the current calculated day based on student state.


Create a visual journey/progression indicator.

It should communicate:

Completed → Current → Upcoming


Do not make it look like a generic SaaS progress bar.


# 2. 60-DAY CALENDAR

Add a compact journey calendar/grid to the dashboard.

Title:

60-DAY JOURNEY


The calendar should represent the 60 challenge days.

Example:

01 ✓
02 ✓
03 ✓
04 ✓
05 ✓
06 ✓
07 ✓
08 ✓
09 ✓
10 ✓
11 ✓
12 🔥
13 ○
14 ○
...


States:

✓ = completed

🔥 = current day

○ = upcoming

If a day is missed later, the architecture should support:

× = missed


IMPORTANT:

This is NOT a full calendar/scheduling system.

It is a 60-day challenge tracker.

Do not build events, reminders, appointments, or date scheduling.


# 3. MOBILE CALENDAR

The evaluator will test at 390px.

Make sure the 60-day grid:

- Fits within the screen
- Does not create horizontal scrolling
- Has readable numbers
- Has enough spacing
- Is easy to understand

If necessary, divide it into smaller sections such as:

Days 1–30
Days 31–60


or use a compact responsive grid.

Do not make the numbers tiny just to fit everything.


# 4. JOURNEY MILESTONES

Add milestone markers at meaningful points.

Examples:

DAY 1
FIRST BUILD


DAY 7
7-DAY WARRIOR


DAY 10
10 MISSIONS


DAY 30
30-DAY BUILDER


DAY 60
CONSISTENCY MASTER


These should be connected to the achievement system.

Do not show achievements as unlocked unless their conditions are met.

Upcoming milestones can appear locked.


# 5. DEVELOPER SKILL JOURNEY

Improve the existing skill section.

Show something like:

YOUR DEVELOPER JOURNEY

HTML       ✓
CSS        ✓
JavaScript ✓
React      ████████░░
APIs       ███░░░░░░░
Backend    🔒
AI         🔒


The exact values should come from the student data.

Do not hardcode the same skill progress in multiple components.


The idea should be:

The student is unlocking their developer skill path.


# 6. XP + LEVEL PROGRESSION

Improve the XP section.

Show:

LEVEL 6

1,550 XP


Then:

NEXT LEVEL

450 XP remaining


Use the existing XP/level logic.

Do not create a second XP system.

Calculate the progress toward the next level from the central student state.


# 7. STREAK VISUAL

Make the streak feel more important.

Show:

🔥 13 DAY STREAK

KEEP THE CHAIN ALIVE


Also show a compact recent-day indicator.

Example:

M  T  W  T  F  S  S

✓  ✓  ✓  ✓  🔥  ○  ○


Use the existing streak/progress data.

Do not create a separate streak data source.


# 8. ACHIEVEMENT SHOWCASE

Improve the achievements section.

Show:

🏆 FIRST MISSION
🔥 7-DAY WARRIOR
⚡ 10 MISSIONS
🔒 30-DAY BUILDER
🔒 CONSISTENCY MASTER


Unlocked achievements should be visually distinct.

Locked achievements should clearly communicate that they are future milestones.

Do not create fake unlocked achievements.


# 9. COMPLETION CELEBRATION

When a mission has just been completed, show a subtle celebration.

For example:

MISSION COMPLETE ✓

+100 XP

🔥 STREAK INCREASED

🏆 ACHIEVEMENT UNLOCKED


Use a lightweight animation.

Do NOT add excessive confetti or distracting effects.

The animation should feel energetic but professional.


# 10. RECENT ACTIVITY

Make recent activity more meaningful.

Example:

Today
✓ Completed Day 12
+100 XP


Yesterday
✓ Completed Day 11
+100 XP


3 days ago
🏆 Unlocked "10 Mission Builder"


Read this from the central student data.

Do not hardcode repeated activity directly in the UI.


# 11. AI MENTOR

Keep the existing:

YOUR AI MENTOR

PERSONALIZED INSIGHT


Example:

"You've been building strong frontend fundamentals. Your next challenge introduces API integration — a good opportunity to expand your skill set."


This remains mock content.

Do NOT integrate Breeth yet.


# 12. DASHBOARD HIERARCHY

Do not allow the new journey/calendar sections to overpower Today's Mission.

The dashboard priority should remain:

1. Streak
2. Today's Mission
3. Journey Progress
4. XP / Level
5. Developer Skills
6. Journey Calendar
7. Ranking
8. Achievements
9. AI Mentor
10. Recent Activity


Today's Mission must remain the strongest action.


# 13. DATA ARCHITECTURE

Continue using the existing central student data and challenge data.

Do not duplicate:

- XP
- streak
- completed days
- achievements
- skills
- level

across multiple components.


The journey calendar should derive its state from:

completedDays
currentDay
streak

and other existing student state where appropriate.


# 14. LOCALSTORAGE

Do not create a new unrelated storage system.

Continue using the existing localStorage architecture from Prompt 5.

After refresh:

- completed days remain
- XP remains
- streak remains
- achievements remain
- skill progression remains


# 15. FIRST-DAY STATE

Make sure the journey UI works if:

completedDays = 0
streak = 0
xp = 0


Show:

DAY 1 / 60

with a sensible starting state.

Do not display broken percentages or empty UI.


# 16. MISSED-DAY STATE

The architecture should support a missed day.

If a day is marked missed:

- Show a missed visual state
- Do not break the journey
- Do not incorrectly show it as completed


Do not build a complex recovery system yet.


# 17. MOBILE-FIRST DESIGN

Test at:

390px


Check:

- Journey grid
- Streak
- XP
- Skills
- Achievements
- Dashboard cards/sections
- Navigation
- No horizontal scrolling


Avoid making every section a large rounded card.

Use spacing, typography, dividers, and simple containers where appropriate.


# 18. PRESERVE EXISTING DESIGN

Keep:

- Black/dark background
- Bright yellow accent
- White/light text
- ABTalks typography
- Developer-focused identity
- BUILD. SHIP. LEVEL UP.

Do NOT introduce:

- Purple
- Purple gradients
- Generic AI/SaaS styling
- Excessive glassmorphism


# 19. DO NOT BUILD

Do NOT add:

- Backend
- Database
- Authentication
- Real GitHub API
- Real LinkedIn API
- Breeth API
- Chat
- Notifications
- Admin
- Recruiter features
- Day 13 page
- Full calendar/scheduling system
- Payment/pricing


# FINAL TESTING

After implementation:

1. Open /dashboard
2. Confirm Today's Mission is still the primary action
3. Confirm journey progress
4. Confirm 60-day journey tracker
5. Confirm current day state
6. Confirm completed-day states
7. Confirm upcoming-day states
8. Confirm XP/level progression
9. Confirm streak visualization
10. Confirm achievements
11. Complete Day 12
12. Confirm journey tracker changes
13. Confirm XP/streak/achievement changes
14. Refresh browser
15. Confirm state persists
16. Test first-day data if possible
17. Test at approximately 390px width
18. Confirm there is no horizontal scrolling
19. Confirm / and /day/12 still work


# IMPORTANT

This is still a prototype.

Do not add unnecessary complexity.

The purpose of this step is to make ABTalks feel like a memorable 60-day developer journey while keeping the existing product simple and functional.

After implementation, report:

1. Files changed
2. Components created/updated
3. Journey/calendar implementation
4. Skill progression implementation
5. Achievement implementation
6. XP/level implementation
7. Streak visualization
8. Any localStorage changes
9. Any warnings/issues
10. 390px mobile testing result


**PROMT 7**

# STEP 7 — ABTALKS COMPLETE 60-DAY MISSION SYSTEM
# FINAL FUNCTIONALITY STEP

Continue from the existing ABTalks project.

IMPORTANT:
This is the FINAL FUNCTIONALITY step.

After this step, do NOT add new major product functionality.
The next phase will be UI/UX redesign and visual polish only.

The following are already working:

- Landing page /
- Dashboard /dashboard
- Mission page
- GitHub submission
- LinkedIn submission
- Mission completion
- XP
- Streak
- Achievements
- Skills
- Leaderboard
- Recent activity
- 60-day journey/activity map
- localStorage persistence
- Responsive mobile layout

Do NOT rebuild these from scratch.

Do NOT unnecessarily change the existing design.

The goal of this step is to make the ABTalks product behave like a real 60-day coding journey from Day 1 through Day 60.


# CORE PRODUCT RULE

A fresh student starts at:

DAY 1

They complete Day 1.

Day 2 becomes available on the NEXT CALENDAR DAY.

It must NOT unlock exactly 24 hours after completion.

Example:

Student completes Day 1 on August 8 at 11:50 PM.

Day 2 becomes available on August 9 at 12:00 AM.

The rule is:

COMPLETE TODAY'S MISSION
        ↓
NEXT MISSION LOCKED UNTIL NEXT DAY
        ↓
NEW CALENDAR DAY
        ↓
NEXT MISSION UNLOCKS


# 1. FRESH STUDENT MUST START FROM DAY 1

A new/reset student should have:

name: Rahul
track: Frontend Development
currentDay: 1
completedDays: []
streak: 0
xp: 0
level: appropriate starting level
achievements: []
recentActivity: []
submittedProjects: []

Do NOT make Day 12 the default state for a fresh student.

The application must be capable of starting naturally from Day 1.


# 2. 60-DAY CHALLENGE DATA

Create a reusable challenge dataset covering:

DAY 1 → DAY 60

Each challenge should contain at least:

- day
- title
- description
- difficulty
- skills
- xpReward
- requirements
- steps

Use practical coding projects.

The projects should gradually increase in difficulty.

Example progression:

Day 1:
HTML/CSS landing page

Day 2:
JavaScript interactive project

Day 3:
DOM-based application

Day 4:
Responsive UI project

Day 5:
JavaScript utility

Continue progressing toward:

React
APIs
State management
Advanced frontend
Backend fundamentals
Databases
Authentication concepts
AI/API integration
Deployment
Portfolio projects

Do not make every mission overly complicated.

The goal is to create believable mock challenge data for the hackathon prototype.


# 3. DYNAMIC MISSION ROUTE

The application must support:

/day/1
/day/2
/day/3
...
/day/60

Use one reusable Mission Page component.

The mission displayed should be determined by the day parameter.

Do NOT create 60 separate page components.


# 4. DASHBOARD CURRENT MISSION

The Dashboard must dynamically determine the current mission from:

student.currentDay

Example:

Fresh student:

DAY 1 / 60
TODAY'S MISSION
Day 1 title
[ START MISSION → ]


After Day 1 is completed and the next calendar day arrives:

DAY 2 / 60
TODAY'S MISSION
Day 2 title
[ START MISSION → ]


Do NOT hardcode Day 12 as the permanent Today's Mission.


# 5. PREVIOUS MISSIONS

Completed missions should remain visible in the journey.

Example:

DAY 1 ✓
DAY 2 ✓
DAY 3 ✓
DAY 4 🔥
DAY 5 🔒


The student should be able to open completed missions to review them.

However:

Completed missions must NOT award XP again.

Do not allow duplicate completion.


# 6. CURRENT MISSION

The current mission should be clearly identified.

Example:

🔥 DAY 4
TODAY'S MISSION


The Start Mission button should navigate to:

/day/4

depending on the current day.


# 7. UPCOMING MISSIONS

Upcoming missions should be locked.

Example:

DAY 5
🔒 AVAILABLE TOMORROW


DAY 6
🔒 LOCKED


DAY 7
🔒 LOCKED


Do not allow the student to complete future missions early.


# 8. NEXT-DAY UNLOCK LOGIC

This is extremely important.

Store enough information to know when the current mission was completed.

For example:

lastCompletedAt

or an equivalent timestamp/date field.

When the student completes Day N:

- Day N becomes completed
- XP is awarded
- streak is updated
- achievement is checked
- nextDayUnlockDate is set to the next calendar day

Before the next calendar day:

Day N+1 remains locked.

At the start of the next calendar day:

Day N+1 becomes available.

Use the user's local calendar date.

Do NOT require exactly 24 hours to pass.


# 9. DAY 1 SPECIAL CASE

If a new student has never completed a mission:

Day 1 should be immediately available.

They do NOT need to wait.


# 10. MISSION COMPLETION

When the student completes a mission:

Validate:

GitHub Repository URL
LinkedIn Post URL

Both must be provided.

If missing:

Show a clear validation message.

If valid:

- Mark mission completed
- Award XP
- Update streak
- Update currentDay state appropriately
- Record submission
- Add recent activity
- Check achievements
- Update skills
- Persist everything to localStorage


# 11. CURRENT DAY AFTER COMPLETION

Do NOT immediately make the next mission available.

Example:

Student completes Day 1 today.

Immediately after completion:

DAY 1 ✓ COMPLETED

DAY 2 🔒
AVAILABLE TOMORROW


When the next calendar day begins:

DAY 2 🔥
TODAY'S MISSION


The dashboard should communicate this clearly.


# 12. STREAK LOGIC

Maintain the ABTalks streak.

Example:

Complete Day 1:
🔥 1 DAY STREAK

Next day complete Day 2:
🔥 2 DAY STREAK

Next day complete Day 3:
🔥 3 DAY STREAK


Do not increase the streak more than once for the same mission.

If a student misses a day, the architecture should support the streak resetting/recovery state.

Do not build an overly complicated streak recovery system.


# 13. XP LOGIC

Each mission has its own xpReward.

When completed:

student.xp += challenge.xpReward

Do not award XP again if the mission is already completed.

The level should be derived from the existing XP/level system.

Do not create multiple competing XP systems.


# 14. ACHIEVEMENTS

Use reusable achievement conditions.

Examples:

First Mission
7-Day Warrior
10 Missions
30-Day Builder
Consistency Master

Unlock achievements only when conditions are met.

Do not duplicate achievements.

Example:

After completing Day 1:

🏆 FIRST MISSION


After completing Day 10:

🏆 10 MISSIONS


After completing Day 30:

🏆 30-DAY BUILDER


After Day 60:

🏆 CONSISTENCY MASTER


# 15. SKILL PROGRESSION

Skills should come from the challenge data.

When a mission is completed:

Use its skills to update the student's skill progression.

Example:

Day 1:
HTML
CSS

Day 2:
JavaScript

Day 3:
DOM

Day 10:
React

etc.

Do not build a complicated skill algorithm.

Just make the architecture reusable and consistent.


# 16. SUBMISSION RECORD

When completing a mission, save:

- day
- githubUrl
- linkedinUrl
- completedAt

inside:

student.submittedProjects

Do not integrate real GitHub or LinkedIn APIs.


# 17. RECENT ACTIVITY

When a mission is completed, add:

Today
✓ Completed Day N
+XP


Do not duplicate the activity if the mission is completed again.


# 18. LEADERBOARD SYNCHRONIZATION

Fix the issue discovered during testing.

Currently:

Student XP:
1,550

Leaderboard:
Rahul — 1,450 XP

This is incorrect.

The current student's leaderboard entry must use the same central student XP.

Example:

Rahul — 1,550 XP


Other leaderboard users can remain mock data.

Do not create a real backend leaderboard.


# 19. JOURNEY MAP

The 60-day journey map should dynamically reflect:

COMPLETED
CURRENT
LOCKED
MISSED (if applicable)


Example for Day 4:

Day 1 ✓
Day 2 ✓
Day 3 ✓
Day 4 🔥
Day 5 🔒
Day 6 🔒


Do not hardcode these states.


# 20. PROGRESS CALCULATION

Calculate progress from completed missions.

Example:

0 / 60
0%

1 / 60
1.67%

10 / 60
16.67%

30 / 60
50%

60 / 60
100%


Do not hardcode progress percentages.


# 21. RESET DEMO DATA

Keep/add a small developer/demo reset mechanism.

Reset should return the student to:

Day 1
0 completed missions
0 XP
0 streak
starting level
no achievements
empty recent activity
empty submissions
initial skills


This is important for the hackathon demo.

The reset control does NOT need to be prominent.

Do not create a separate page for it.


# 22. DEMO TESTING SUPPORT

Because judges cannot wait multiple real days during the presentation, make the code easy for the development team to test future days.

If there is already a demo/reset utility, extend it appropriately.

A simple developer-only mechanism may allow the team to simulate the next calendar day.

Do NOT expose a confusing "skip 60 days" button to normal students.

The normal user experience must still enforce the daily unlock rule.


# 23. LOCALSTORAGE

Continue using the existing central localStorage architecture.

Do not create unrelated storage systems.

Persist:

- student progress
- completed days
- current day
- XP
- streak
- achievements
- skills
- recent activity
- submissions
- completion dates


Handle safely:

- first-time user
- missing data
- invalid/corrupted stored data


Use sensible defaults.


# 24. MISSION PAGE STATES

The reusable mission page should support:

AVAILABLE

Example:
DAY 2
TODAY'S MISSION
[ COMPLETE MISSION → ]


COMPLETED

Example:
DAY 1
✓ MISSION COMPLETE
+100 XP


LOCKED

Example:
DAY 3
🔒 AVAILABLE TOMORROW


FUTURE

Example:
DAY 10
🔒 LOCKED


Do not allow completion of locked/future missions.


# 25. DASHBOARD STATES

The Dashboard should support:

FIRST DAY

DAY 1 / 60
Today's mission available


CURRENT DAY

DAY N / 60
Today's mission available


JUST COMPLETED

DAY N ✓
NEXT MISSION AVAILABLE TOMORROW


NEXT DAY

DAY N+1 🔥
Today's mission available


COMPLETED JOURNEY

DAY 60 ✓
60 / 60
100%
🏆 CONSISTENCY MASTER


# 26. IMPORTANT DEMO STATE

The default state for a completely fresh installation must be:

DAY 1

Do not initialize the app with:

DAY 12
12-day streak
1,450 XP

Those values can still exist as optional mock/demo data for testing, but the normal fresh experience must start from Day 1.


# 27. PRESERVE EXISTING WORK

Do not unnecessarily rebuild:

/
 /dashboard
existing styling
existing components

Reuse existing components whenever possible.

Only change what is necessary to support the dynamic 60-day system.


# 28. DO NOT BUILD

This is the final functionality step.

Do NOT add:

- Authentication
- Backend
- Database
- Real GitHub API
- Real LinkedIn API
- Real Breeth API
- Chat
- Notifications backend
- Admin dashboard
- Recruiter dashboard
- Payments
- Complex calendar scheduling
- Real-time multiplayer
- Social network
- New unrelated features


# FINAL FUNCTIONALITY TEST

After implementation, test the following:

### Fresh user

1. Reset demo data
2. Confirm app starts at Day 1
3. Confirm Day 1 is available
4. Confirm Day 2 is locked


### Complete Day 1

5. Open /day/1
6. Enter GitHub URL
7. Enter LinkedIn URL
8. Complete Day 1
9. Confirm XP increases
10. Confirm streak becomes 1
11. Confirm Day 1 becomes completed
12. Confirm Day 2 says "Available tomorrow"


### Next-day simulation

13. Simulate the next calendar day using the developer/demo mechanism
14. Confirm Day 2 unlocks
15. Confirm Dashboard now shows Day 2
16. Open /day/2
17. Confirm Day 2 mission data is displayed


### Previous mission

18. Confirm Day 1 remains accessible
19. Confirm Day 1 cannot award XP again


### Persistence

20. Refresh the browser
21. Confirm progress remains


### Leaderboard

22. Confirm Rahul's leaderboard XP matches current student XP


### Journey

23. Confirm completed/current/locked states are correct
24. Confirm progress percentage is calculated dynamically


### Final day architecture

25. Confirm the system supports /day/60
26. Confirm Day 60 can become the final mission
27. Confirm 60/60 and 100% can be displayed


### Mobile

28. Test at approximately 390px
29. Confirm no horizontal scrolling
30. Confirm no broken layouts


# IMPORTANT FINAL INSTRUCTION

Do NOT redesign the UI in this step.

Do NOT try to make the site visually different.

Focus only on completing the underlying 60-day journey functionality.

After implementation, report:

1. Files changed
2. Challenge data structure
3. Student state structure
4. Dynamic routing implementation
5. Day unlocking logic
6. Current-day logic
7. XP/streak logic
8. Achievement logic
9. Submission storage
10. Leaderboard synchronization
11. Reset/demo mechanism
12. localStorage structure
13. Testing results
14. Any warnings/issues
15. 390px testing result

This is the FINAL FUNCTIONALITY STEP.
After this, stop adding functionality.


**PROMT 8**

I am attaching my current ABTalks project and screenshots of a teammate's design.

IMPORTANT:
DO NOT CHANGE ANY FUNCTIONALITY.

DO NOT TOUCH:
- Routes
- React logic
- State management
- localStorage
- Day progression system
- Day unlock system
- XP system
- Streak system
- Leaderboard logic
- Badges logic
- Activity map logic
- Profile page
- Reset Demo button
- Mission completion flow
- GitHub/LinkedIn submission forms

Everything currently works correctly.

My goal is ONLY a visual redesign.

================================================

DESIGN TARGET

Study the attached teammate screenshots carefully.

My current UI feels:
- Flat
- Too white
- Too much cream
- Weak visual hierarchy
- Not colorful enough
- Not exciting enough

I want the SAME visual energy and attractiveness as the teammate UI.

================================================

COLOR SYSTEM

Replace the current mostly cream/orange appearance.

Use a colorful pastel system.

Streak Card:
Background: soft peach
Accent: coral orange

XP Card:
Background: warm yellow
Accent: amber

Rank Card:
Background: soft sky blue
Accent: cyan

Completion Card:
Background: mint green
Accent: emerald

Badges:
Every badge should have its own color identity.

Examples:
Orange
Blue
Green
Purple
Pink
Yellow

Locked badges:
light gray with reduced opacity.

================================================

CARD DESIGN

All cards should feel premium.

Use:

border-radius: 18px

soft shadow

subtle hover lift

colored background tint

NOT plain white cards.

Every dashboard card should immediately stand out.

================================================

TOP HERO SECTION

The greeting section should look much richer.

Add:

soft gradient background

better spacing

colored phase pill

streak pill

XP pill

level pill

improved circular level indicator

more visual depth

The top section should become the strongest visual element on the page.

================================================

TODAY MISSIONS

Mission cards should feel alive.

Completed missions:
soft green background

Current mission:
soft orange border/accent

XP reward:
highlighted

Done badge:
green pill

Use spacing similar to the teammate design.

================================================

BADGES SECTION

Current badges feel dull.

Make badges:

larger

more colorful

more collectible

Use:

gradient icon circles

soft colored backgrounds

achievement-game style appearance

Locked badges should still look attractive.

================================================

LEADERBOARD

Top 3 should have special styling.

#1:
gold tint

#2:
silver tint

#3:
bronze tint

Current user row should be highlighted.

================================================

ACTIVITY MAP

Increase color intensity.

Use multiple shades.

Very active:
strong green

Medium:
mint

Low:
light mint

Missed:
light red

Today:
orange highlight

================================================

TYPOGRAPHY

Increase hierarchy.

Large numbers:
bold

Section titles:
strong

Secondary text:
lighter gray

Make the dashboard feel modern and polished.

================================================

PROFILE

Keep existing functionality.

Only improve visual design.

Profile card should match dashboard styling.

================================================

FINAL GOAL

Do not add features.

Do not remove features.

Do not change functionality.

Only redesign the UI so it feels as polished, colorful, modern, and visually attractive as the teammate screenshots while keeping my existing ABTalks functionality exactly the same.