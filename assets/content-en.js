/* ============================================================
   PB Courses — Tutor Training · ENGLISH content
   Source: "Entrenamiento Nuevo Modelo Educativo" (EM_Draft),
           Follow Mode instructions, Kodland Sparks tutor guide.
   ============================================================ */
window.CONTENT = {
lang: 'en',

/* ---------------- interface strings ---------------- */
ui: {
  loginTitle: 'New Educational Model',
  loginSub: 'Tutor training for the 4 updated Kodland courses. Sign in with your work e-mail so we can show you the courses you are assigned to.',
  loginBtn: 'Enter the training',
  loginHint: 'Use the same e-mail you use for Back Office (…@kodland.team). Your progress is saved in this browser.',
  emailPlaceholder: 'yourname@kodland.team',
  errEmpty: 'Please type your e-mail address.',
  errFormat: 'That does not look like an e-mail address.',
  errNotFound: 'We could not find that e-mail on the training list. Check for typos, or contact your Course Consultant so they can add you.',

  heroEyebrow: '🚀 Tutor Training Programme',
  heroTitle: 'The <span class="h-pill">new</span> educational model',
  heroSub: 'Four core modules for everyone, then the first 4 lessons of the courses you are assigned to teach. Each module ends with a short check — pass it to unlock the next one.',
  homeNote: 'Progress is stored in this browser only. If you switch computer or clear your browser data, you will start again. Questions about the content? Talk to your Course Consultant.',
  footer: 'Kodland · Tutor Development · New Educational Model training',

  modulesLabel: 'modules',
  completeWord: 'complete',
  allDone: 'all done!',
  allDoneShort: '🏆 All done!',
  generalTitle: 'Core training',
  generalSub: 'Everyone completes these four, in order — whatever course you teach.',
  courseTitle: 'Your course training',
  courseSub: 'The first 4 lessons of each course you are assigned to teach.',
  noCourses: 'No courses are linked to your e-mail yet. <b>Contact your Course Consultant</b> so they can assign you.',
  lockPrev: 'Pass the previous module first',
  lockGeneral: 'Finish the 4 core modules first',

  badgeDone: '✓ Done',
  badgeStart: 'Start →',
  badgeLocked: '🔒 Locked',
  score: 'Score',
  reviewed: '✓ Reviewed',
  resetProgress: 'Reset my progress and start again',
  resetConfirm: 'Reset your progress for this language? Every module goes back to locked and your scores are cleared. This cannot be undone.',
  goal: 'Goal',

  qType: { mcq: 'Multiple choice', multi: 'Select all that apply', match: 'Matching', open: 'Written answer' },
  multiHint: '☑️ More than one answer is correct — select every one that applies.',
  matchHint: '🔗 Choose the matching answer for each row.',
  openHint: '✍️ Write your own answer — at least {n} characters. There is no single right wording; you will see a model answer to compare against.',
  openPlaceholder: 'Type your answer here…',
  checkAnswer: 'Check my answer',
  submitAnswer: 'Submit my answer',
  choose: 'Choose',
  recorded: 'Answer recorded.',
  modelAnswer: 'Model answer — compare with yours',
  markReviewed: 'I have finished reading this module',
  moduleReviewed: 'Module marked as reviewed',

  devOn: 'DEV MODE — everything unlocked',
  devHint: 'Press Shift+D three times to switch dev mode off and clear this progress.',
  devEmail: 'dev.preview@kodland.org',

  takeQuiz: '📝 Take the module check →',
  retakeQuiz: '🔁 Retake the module check →',
  question: 'Question',
  correct: 'Correct!',
  incorrect: 'Not quite —',
  nextQ: 'Next question →',
  seeResults: 'See my result →',
  exitQuiz: 'Exit check',
  modules: 'Modules',
  logout: 'Sign out',
  logoutConfirm: 'Sign out? Your module progress stays saved in this browser.',

  passTitle: 'Module passed!',
  failTitle: 'Almost there',
  passSub: 'You answered {n} of {t} correctly. This module is now marked as complete.',
  failSub: 'You answered {n} of {t} correctly. You need {p}% to pass — review the module and try again.',
  tryAgain: 'Try again',
  reviewModule: 'Review the module',
  backModules: '← Back to modules',
  nextModule: 'Next',
  goFinalDst: 'Go to the final DST',
  seeCert: 'See my certificate',

  certLabel: 'Training complete',
  certTitle: 'New Educational Model · Tutor Training',
  certSub: 'You completed all {n} modules with an average score of {avg}%.',
  certNote: 'Nice work. Keep this training open as a reference during your first lessons — you can come back to any module at any time.',

  finalDstTitle: 'Final DST for this course',
  finalDstGo: 'Open the final DST',
  finalDstLocked: 'Pass the module check first',
  finalDstLockedNote: 'Complete the knowledge check above to unlock the final DST.',
  finalDstSoon: 'Link coming soon',
  finalDstSoonNote: 'Your Course Consultant will share the DST link here shortly. In the meantime you can mark the module as read below.',

  videoFallback: 'Your browser cannot play this video.',
  watchOnYouTube: 'Watch on YouTube ↗',
  videoMissing: 'Video coming soon — ask your Course Consultant for the Follow Mode walkthrough.'
},

/* ============================================================
   CORE MODULES
   ============================================================ */
general: [

/* ---------------------------------------------------------- G1 */
{
  id: 'g1', kind: 'general', num: 'Core module 1', emoji: '🧩', color: '#2B8EF0',
  title: 'All about the new model',
  desc: 'What actually changed, the new tools you will use in class, and the 4 courses that follow this methodology.',
  meta: '5 mixed-format questions',
  chips: ['🎯 Sparks', '👁 Follow Mode', '📝 Teacher notes'],
  objective: 'Understand what the new educational model is, where the lesson guide now lives, and how Follow Mode and Kodland Sparks change the way you run a class.',
  cards: [
    { type: 'h', ic: '🔍', t: 'What is this about?' },
    { type: 'text', p: 'Kodland is updating the way some of its courses are taught. This is <strong>not only a change of technical content</strong> — it is a change of <strong>methodology</strong>: how a class is structured, what role the tutor plays, and how artificial intelligence is built into learning rather than used as a shortcut.' },
    { type: 'text', p: 'The model is already live in <strong>4 specific courses</strong>. Your training as a tutor has two halves: the general mindset (this core training) and the specific knowledge of the course you will teach (your course modules).' },

    { type: 'h', ic: '🤔', t: 'Why a new model?' },
    { type: 'text', p: 'Because today\'s students learn differently than students did a few years ago. The tools changed, the way children and teenagers relate to technology changed, and AI is already part of their everyday life.' },
    { type: 'iclist', h: 'Updating our courses means…', items: [
      { ic: '🛠', t: 'Working with tools students actually recognise and use today.' },
      { ic: '🧠', t: 'Teaching them to use AI <strong>with judgement</strong> — neither fearing it nor depending blindly on it.' },
      { ic: '✨', t: 'Keeping the learning experience relevant, so every class is worth showing up for.' }
    ]},

    { type: 'h', ic: '🎓', t: 'Which courses use this methodology?' },
    { type: 'table', head: ['Course', 'Age', 'Lesson', 'Programme'], rows: [
      ['<strong>[2058]</strong> Digital Creativity Level 2', '10–12', '60 min', '40 lessons'],
      ['<strong>[2063]</strong> Creator Lab: Games, AI', '8–9', '60 min', '40 lessons'],
      ['<strong>[2060]</strong> GameDev Creator Lab', '10–12', '90 min', '40 lessons'],
      ['<strong>[2059]</strong> Coding Lab', '12–17', '90 min', '40 lessons']
    ]},
    { type: 'good', t: '<strong>Is this a definitive replacement for how Kodland teaches?</strong> No. Existing groups keep their course exactly as it is. This is an <strong>additional</strong> methodology that lives alongside the current one.' },

    { type: 'divider' },
    { type: 'h', ic: '⚡', t: 'New hub: Kodland Sparks' },
    { type: 'text', p: '<strong>Kodland Sparks</strong> is the new platform where students publish their projects, keep learning between classes, and receive feedback from classmates and from an AI agent. It is where the portfolio students build across the course actually lives.' },
    { type: 'link', ic: '⚡', href: 'https://portfolio.kodland.org/feed', t: 'Open Kodland Sparks', d: 'portfolio.kodland.org/feed — the public feed where student projects are published' },
    { type: 'iclist', h: 'What you need to know as a tutor', items: [
      { ic: '🔐', t: 'Students enter with <strong>one button from the main platform (SSO)</strong> — they do not register separately.' },
      { ic: '🔑', t: '<strong>Tutors log in with separate credentials</strong>, different from Back Office. You will receive them once you complete this training.' },
      { ic: '🎨', t: 'Sparks has two modes: <strong>Studio</strong> (create from scratch — web, Python, pixel art, Minecraft skin, music, Scratch) and <strong>Challenges</strong> (structured tasks with automatic checking and a reward).' },
      { ic: '💬', t: 'There are no classic likes or comments. Instead: <strong>reactions</strong> (emoji), <strong>reviews</strong> (three fields: overall impression, strengths, what to improve) and <strong>subscriptions/friends</strong>.' },
      { ic: '🏆', t: 'Gamification runs on <strong>crystals → chests → cosmetic rewards</strong>. Reviews from a tutor or admin are visually highlighted, so students recognise official feedback.' }
    ]},
    { type: 'tip', t: 'Reviews you leave are marked as official. Use the three-field structure — overall impression, strengths, one thing to improve — and keep the "improve" field concrete rather than comparative.' },

    { type: 'divider' },
    { type: 'h', ic: '📝', t: 'New manuals: goodbye wiki' },
    { type: 'hi', ic: '📌', h: 'The single most important change to your prep routine', p: 'These new courses have <strong>no wiki manuals and no presentations</strong>. The entire guide for a lesson now lives <strong>inside the lesson itself</strong>: in Back Office you will find the <strong>teacher notes</strong> that tell you how to run each activity.' },
    { type: 'iclist', h: 'What teacher notes can contain', items: [
      { ic: '⏱', t: '<strong>Exact time</strong> in minutes (sometimes a range, e.g. "5–7 minutes").' },
      { ic: '🎯', t: '<strong>The objective</strong> of the activity.' },
      { ic: '🙋', t: '<strong>What the tutor should do</strong> — a concrete action.' },
      { ic: '👀', t: '<strong>What to watch for / what NOT to do.</strong>' },
      { ic: '✅', t: '<strong>Success criterion</strong> — how you know, observably, that the objective was met.' }
    ]},
    { type: 'img', src: 'images/tutor-notes-1.png', alt: 'Teacher notes block in the Kodland platform', cap: 'Teacher notes appear as a dotted orange block inside the lesson card — here, the lesson overview for Coding Lab Lesson 1.' },
    { type: 'img', src: 'images/tutor-notes-2.png', alt: 'Teacher notes with estimated time and instructions', cap: 'Notes sit right next to the activity they describe, with estimated time and step-by-step guidance for that specific card.' },

    { type: 'h', ic: '🙈', t: 'If the guide is inside the activity, can students see it?' },
    { type: 'text', p: '<strong>No.</strong> When you are on the <strong>Tasks</strong> tab showing an activity, <strong>you are not sharing your screen</strong>. You simply tell the student to open the Tasks tab. Thanks to Follow Mode the student is taken automatically to the same activity you are viewing — but the tutor guide is only visible to the tutor.' },

    { type: 'divider' },
    { type: 'h', ic: '👁', t: 'Follow Mode' },
    { type: 'text', p: '<strong>What it is:</strong> in Follow Mode, students automatically see <strong>the same task you have open</strong>. It is not screen sharing — each student gets their own copy of the task open, which they can actually work in. It only works inside the lesson.' },
    { type: 'video', h: 'Follow Mode in action', p: 'A short walkthrough of turning the mode on and moving the group through a lesson.', yt: 'HDWga8ZROik' },
    { type: 'steps', items: [
      { h: 'Open any task in the lesson', p: 'Click it in the task list. The toggle only appears when a task is open.' },
      { h: 'Find the "Lead the group" toggle', p: 'It appears next to the open task.' },
      { h: 'Turn it on', p: 'From that moment students move automatically to whatever task you open.' }
    ]},
    { type: 'iclist', h: 'How it behaves during class', items: [
      { ic: '➡️', t: 'You <strong>change task</strong> → it changes for everyone following you.' },
      { ic: '❌', t: 'You <strong>close a task</strong> → it closes for them too.' },
      { ic: '🖱', t: 'You <strong>scroll through blocks</strong> inside an interactive task → their position catches up to yours automatically.' },
      { ic: '🕐', t: 'A student who <strong>joins late</strong> lands directly on the task you have open.' },
      { ic: '🚪', t: 'If you <strong>step away</strong>, students see a "tutor stepped away" notice; following resumes when you return.' },
      { ic: '👥', t: 'Next to each student name you see a marker showing <strong>who is following you</strong> and who is working independently.' }
    ]},
    { type: 'good', t: '<strong>The student is not locked in.</strong> They can unhook with the <strong>"Work independently"</strong> button and work on whatever they want. They still see a banner ("The tutor is on task…") with a <strong>"Return"</strong> button to resync in one click. If you change task while they work alone, the banner updates quietly without interrupting them.' },
    { type: 'tip', t: 'With the mode off, everything works exactly as before — nothing changes. Turn it off when you want students to explore freely.' },

    { type: 'divider' },
    { type: 'h', ic: '📤', t: 'Do not forget the Submit button' },
    { type: 'warn', t: 'Many activities are interactive. <strong>If the student does not click Submit, we cannot track their progress</strong> — even if they completed the activity perfectly on screen. Remind them actively, especially in the first classes. This is also what makes the classwork-completion metric improve.' },
    { type: 'img', src: 'images/submit-button.png', alt: 'The Submit button at the end of an interactive activity', cap: 'The pink Submit button at the end of an interactive card — the moment a student\'s work actually gets recorded.' }
  ],
  quiz: [
  { type: 'open',
    ctx: 'It is Sunday evening. You are preparing tomorrow\'s lesson — your first with one of these courses. You open the platform looking for the wiki manual and the presentation you normally teach from. Neither one exists.',
    q: 'Write down how you will prepare instead. Say where the guide for the lesson actually lives now, and name at least three things it will tell you about each activity.',
    min: 180,
    model: 'A good answer covers: <ul><li>These courses have <strong>no wiki manual and no presentation</strong> — that is by design, not a file that is missing.</li><li>The whole guide lives <strong>inside the lesson itself</strong>, in Back Office, as <strong>teacher notes</strong> attached to each activity card.</li><li>The notes give you the <strong>exact time</strong> for the activity, its <strong>objective</strong>, <strong>what you should do</strong>, <strong>what to watch for or NOT do</strong>, and the <strong>success criterion</strong> — how you know, observably, that the objective was met.</li><li>So your prep is: open the lesson in BO and read the notes card by card, open the finished result you will show at the start, and read the next lesson too so you can build anticipation at the close.</li></ul>',
    fb: 'Compare your answer with the model below.' },

  { type: 'match',
    q: 'You are reading tomorrow\'s lesson in Back Office and four practical questions come up. Match each one to the teacher-note field that answers it.',
    pairs: [
      { l: '"Am I supposed to spend 5 minutes here or 20?"', r: 'Exact time' },
      { l: '"How do I know this activity actually worked before I move on?"', r: 'Success criterion' },
      { l: '"Should I demonstrate this myself, or let them try first?"', r: 'What the tutor should do' },
      { l: '"There is a trap here that students always fall into — is it flagged?"', r: 'What to watch for / what NOT to do' }
    ],
    fb: 'Every teacher-note field answers a different practical question. "Success criterion" is the one most easily overlooked — it is what tells you the activity is finished, not the clock.' },

  { type: 'multi',
    ctx: 'You have <strong>"Lead the group"</strong> switched on. Halfway through the lesson, one student clicks <strong>"Work independently"</strong> and goes back to an earlier task.',
    q: 'Which of the following are true from this moment on? Select all that apply.',
    opts: [
      'The student keeps seeing a banner showing which task you are on, with a "Return" button',
      'The student is removed from Follow Mode permanently and must rejoin the lesson',
      'If you switch tasks while they work alone, their banner updates without interrupting them',
      'You can still see, next to their name, that they are working independently',
      'The student\'s answers inside the task you have open are transmitted to you live',
      'The student\'s progress on the earlier task is not saved while they are unhooked'
    ],
    c: [0, 2, 3],
    fb: 'The mode never locks or ejects a student. They keep the banner, it updates quietly, and you see the marker next to their name. What is <strong>not</strong> shared is their answers and actions inside a task — those stay private — and unhooking never affects saving.' },

  { type: 'mcq',
    ctx: 'Your class went well. Every single one of your students finished the interactive activity — you watched them do it on screen. The next morning the report shows <strong>0% classwork completion</strong> for your whole group.',
    q: 'What is the most likely explanation, and what will you change?',
    opts: [
      'The activity was broken; report it to tech support and ask for the metric to be corrected manually',
      'Your students did not click <strong>Submit</strong>, so nothing was recorded — make the Submit reminder part of your closing routine',
      'Follow Mode was on, which blocks progress tracking while you lead the group',
      'Your students were not signed in to Kodland Sparks, so their work went to a guest account'
    ],
    c: 1,
    fb: 'Completing an activity on screen is not what gets recorded — the click on <strong>Submit</strong> is. This is the single most common cause of a "great class, zero metrics" report, and it is why the Submit reminder belongs in your closing routine, especially in your first classes.' },

  { type: 'mcq',
    ctx: 'Your students will publish their first project to Kodland Sparks this week, and you want to leave each of them feedback on it. Before the lesson you check three things: how your students get in, how <em>you</em> get in, and how feedback actually works there.',
    q: 'Which set of answers is correct?',
    opts: [
      'Your students register themselves on Sparks; you use your Back Office login; you leave feedback as likes and comments',
      'Your students enter with one button from the main platform (SSO); you get separate credentials after completing this training; you leave feedback as a three-field review, which appears highlighted as official',
      'Your students enter with SSO; you use your Back Office login; your reviews look exactly the same as a classmate\'s review',
      'You and your students all register separately on Sparks; feedback is generated only by the AI'
    ],
    c: 1,
    fb: 'Your students use SSO — one button, no separate registration. <strong>You get separate credentials</strong>, different from Back Office, handed over once this training is complete. And there are no classic likes or comments: reactions plus structured three-field reviews, and yours are visually highlighted so students recognise official feedback from the school.' }
]
},

/* ---------------------------------------------------------- G2 */
{
  id: 'g2', kind: 'general', num: 'Core module 2', emoji: '🧠', color: '#22C55E',
  title: 'Pedagogy and tutor mindset',
  desc: 'The four pillars of the model, how AI is used differently at each age, and how your role in the classroom changes.',
  meta: '5 mixed-format questions',
  chips: ['🔄 Learning Loop', '🤖 AI rules', '🎭 Storytelling'],
  objective: 'Change how you think a class — not which buttons you press. By the end you should be able to explain the four pillars and the rule "AI proposes, the author decides".',
  cards: [
    { type: 'hi', ic: '⭐', h: 'This is the most important module of the whole training', p: 'It is not about learning new buttons. It is about <strong>changing how you think a class</strong>.' },

    { type: 'h', ic: '🏛', t: 'The 4 pillars of the model' },

    { type: 'text', h: 'Pillar 1 — Deductive learning', ic: '1️⃣', p: 'The class no longer starts with theory. It starts with the <strong>finished result already working</strong>.' },
    { type: 'ba',
      beforeLbl: 'Before',
      before: 'The class started with theory, then the tool, then the student built from zero.',
      afterLbl: 'Now',
      after: 'The class starts by showing the <strong>finished result already working</strong> ("what game or mechanic must work by the end of today?"). The student first sees the complete project, takes it apart with you, and only then builds it piece by piece.'
    },
    { type: 'tip', t: 'This changes your first instinct as a tutor: instead of explaining before showing, <strong>show first and explain as an answer to what the student already observed</strong>.' },

    { type: 'text', h: 'Pillar 2 — Growth mindset', ic: '2️⃣', p: 'A bug, an error, a broken mechanic — these are a <strong>normal stage of development</strong>, not a failure. Students are taught to say "it does not work <em>yet</em>, let\'s find a strategy" instead of "I can\'t".' },
    { type: 'twocol',
      left:  { ic: '✅', h: 'Say this', items: ['"Perfect — we found a typical problem, let\'s solve it."', '"It does not work yet. What is our next strategy?"', '"Show me what you tried before this."'] },
      right: { ic: '🚫', h: 'Avoid this', items: ['"It didn\'t work out for you again."', '"That\'s wrong, let me fix it."', '"This is easy, you should know it."'] }
    },

    { type: 'text', h: 'Pillar 3 — The Kodland Learning Loop', ic: '3️⃣', p: 'This is the cycle that repeats inside every class and between classes. It replaces the old linear sequence of "I explain → they practise → I review".' },
    { type: 'flow', steps: [
      { ic: '🎯', t: 'Objective' }, { ic: '⚡', t: 'Fast prototype' }, { ic: '🐞', t: 'Difficulty / error' },
      { ic: '🧭', t: 'Strategy / hint' }, { ic: '📈', t: 'Improvement' }, { ic: '🎤', t: 'Demonstration' }, { ic: '💭', t: 'Reflection' }
    ]},
    { type: 'text', p: 'The class now moves in a <strong>spiral</strong>: each turn of the cycle goes a little deeper.' },

    { type: 'text', h: 'Pillar 4 — AI-assisted learning', ic: '4️⃣', p: 'This is where you need the most care, because <strong>the role of AI is not the same in the 4 courses</strong> — it depends on the age.' },
    { type: 'table', h: 'How AI is used per course', ic: '🤖',
      head: ['Course / age', 'AI use model', 'Test to validate the project'],
      rows: [
        ['<strong>Digital Creativity</strong> &amp; <strong>Creator Lab: Games, AI</strong> (8–9)',
         'Guided project-based learning, AI assisted. Tools close to today\'s, AI mediated by the tutor + AI Buddy. <strong>The feeling of "I made this" is the asset to protect.</strong> AI may appear late in the course, as a playful, bounded element.',
         '<strong>Inverse test:</strong> the project must still be 100% achievable and meaningful <em>without</em> AI. AI may only remove routine friction — never replace the creative act.'],
        ['<strong>GameDev Creator Lab</strong> (10–12)',
         'Directed project-based learning, AI as material. The student owns and executes the creative core; AI generates raw material (sprites, sounds, texts) that the student curates, edits and assembles. AI is a "sparring partner".',
         '<strong>Leverage test:</strong> without AI the project would still be possible, but visibly poorer or smaller within class time. AI raises the ceiling of the student\'s idea.'],
        ['<strong>Coding Lab</strong> (12–17)',
         'Project-based learning integrated with AI, the student as creative director. They orchestrate AI across the whole process (concept → assets → logic → build), including AI as a component inside their own program. Explicit literacy about synthetic media.',
         '<strong>Ambition test:</strong> the intended scope/quality is not achievable without AI in the given time. Remove AI and the planned shape of the project collapses.']
      ]},
    { type: 'quote', t: '"AI proposes, the author decides."', src: 'The rule to repeat in all 4 courses' },
    { type: 'iclist', h: 'Two different agents — do not mix them up', items: [
      { ic: '⚙️', t: '<strong>Conventional / generative AI</strong> — creates code, images, ideas.' },
      { ic: '🧭', t: '<strong>AI Mentor / AI Buddy</strong> — does not generate the solution. It asks guiding questions and explains.' }
    ], after: '<strong>Never let AI build the central logic of the project in place of the student.</strong>' },

    { type: 'divider' },
    { type: 'h', ic: '💬', t: 'Feedback is no longer only tutor → student' },
    { type: 'iclist', h: 'Four-way feedback', items: [
      { ic: '🧑‍🏫', t: 'The <strong>tutor</strong>.' },
      { ic: '👥', t: 'A <strong>classmate</strong> (peer feedback).' },
      { ic: '🪞', t: 'The <strong>student\'s own self-assessment</strong>.' },
      { ic: '🤖', t: 'The <strong>AI</strong>.' }
    ]},
    { type: 'text', p: 'Self-assessment is not "did you like it?". It is identifying: <strong>what problem did I have, what strategy did I use, what is my next step</strong>. Peer feedback during the showcase is simple and specific ("I liked that…") and <strong>never comparative between projects</strong>.' },

    { type: 'h', ic: '🎭', t: 'Storytelling as the motivational engine' },
    { type: 'text', p: 'Each of the 4 courses has a narrative that wraps the whole programme — it is not decoration. The student is not "a pupil doing an exercise", they are a <strong>junior creator/developer inside a fictional digital studio</strong>.' },
    { type: 'iclist', items: [
      { ic: '🎨', t: '<strong>Digital Creativity:</strong> "Creativia Studio", a digital creative agency.' },
      { ic: '🔬', t: '<strong>Creator Lab: Games, AI:</strong> "Creator Lab", a creation laboratory.' },
      { ic: '🎮', t: '<strong>GameDev Creator Lab:</strong> "Creator Lab" — each module is a "mission".' },
      { ic: '💻', t: '<strong>Coding Lab:</strong> "Coding Lab", a development studio; the student is a "Junior Developer".' }
    ], after: 'As a tutor, holding this narrative — even with a single sentence — helps the student feel they have a professional role, not that they are "in class".' },

    { type: 'h', ic: '🪜', t: 'Project ownership' },
    { type: 'text', p: 'At the start of the course the student works very guided — you demonstrate, they repeat. Towards the end, the student <strong>decides what to improve and why</strong>, without you telling them step by step. Your role shifts from directing the solution to <strong>accompanying decision-making</strong>.' },
    { type: 'steps', items: [
      { h: 'Connect', p: 'The blocks are already there — the student only has to join them.' },
      { h: 'Complete', p: 'A part is missing and the student adds it.' },
      { h: 'Build it yourself', p: 'Start from zero with what has been learned.' }
    ]},

    { type: 'divider' },
    { type: 'hi', ic: '🧭', h: 'In summary: your role changed', p: 'You are no longer the one who explains everything before starting. You are a <strong>navigator</strong>: you show the destination, accompany the journey with questions and timely hints, and let the student meet the difficulty before you solve it for them. Backup templates exist in every course precisely so you never have to "rescue" a project in a panic — there is always an alternative route with a guaranteed result.' }
  ],
  quiz: [
  { type: 'match',
    q: 'Match each course to the test that validates whether AI is being used at the right level for that age.',
    pairs: [
      { l: 'Creator Lab: Games, AI (8–9)', r: 'Inverse test — the project must stay 100% achievable without AI' },
      { l: 'GameDev Creator Lab (10–12)', r: 'Leverage test — without AI it would still be possible, but visibly poorer' },
      { l: 'Coding Lab (12–17)', r: 'Ambition test — the intended scope is not achievable without AI in the time given' },
      { l: 'Digital Creativity Level 2 (10–12)', r: 'Inverse test — AI may only remove routine friction, never the creative act' }
    ],
    fb: 'Digital Creativity and Creator Lab: Games, AI share the <strong>inverse test</strong> — at those ages the feeling of "I made this" is the asset to protect. GameDev uses the <strong>leverage test</strong> (AI raises the ceiling). Coding Lab uses the <strong>ambition test</strong> (remove AI and the planned shape collapses).' },

  { type: 'mcq',
    ctx: 'In your GameDev Creator Lab group, a student pastes their whole project into the AI and asks: <em>"Design a better game mechanic for me and write the code."</em> The AI returns a working mechanic. The student is delighted.',
    q: 'What is the correct read of this situation?',
    opts: [
      'This is fine — GameDev uses the leverage test, and the AI clearly raised the ceiling of the project',
      'This is fine as long as the student can explain what the code does afterwards',
      'This crosses the line: AI generates raw material, but the student owns and executes the creative core — the mechanic is the student\'s decision, not the AI\'s',
      'This is only a problem in Coding Lab, where prompt engineering is an explicit learning outcome'
    ],
    c: 2,
    fb: 'In GameDev, AI is a <strong>sparring partner</strong>: it generates raw material (sprites, sounds, texts) that the student curates and assembles. It never decides the mechanic. The rule holds in all four courses — <strong>"AI proposes, the author decides"</strong> — and being able to explain the code afterwards does not restore authorship.' },

  { type: 'multi',
    ctx: 'A student has been trying to get a collision working for ten minutes. It still does not work, and they say: <em>"I am just bad at this."</em>',
    q: 'Which responses are consistent with the model? Select all that apply.',
    opts: [
      '"Perfect — we found a typical problem. Let\'s solve it."',
      '"It doesn\'t work <em>yet</em>. What is our next strategy?"',
      '"Don\'t worry, let me fix it for you so we can move on."',
      '"Show me what you tried before this."',
      '"This one is easy, you should have it by now."',
      '"Let\'s go back to the last version that worked and find the first difference."'
    ],
    c: [0, 1, 3, 5],
    fb: 'Growth-mindset language names the error as normal and hands the next step back to the student. Fixing it for them removes the learning; "this is easy" adds shame to a stuck moment. Note that "let\'s find the first difference" is both supportive <em>and</em> a real debugging strategy.' },

  { type: 'open',
    ctx: 'You are 15 minutes into a Coding Lab lesson. A student\'s game has stopped running after their last change. They turn to you and say: <em>"It\'s broken. Can you look at it?"</em>',
    q: 'Write what you would actually say and do next — in the words you would use with the student. Your answer should show the shift from directing the solution to accompanying the decision.',
    min: 180,
    model: 'A strong answer does most of these: <ul><li>Names the error as normal: <em>"Good — something changed and now it doesn\'t run. That is exactly the situation we practise for."</em></li><li>Puts the student back in the driver\'s seat with a question, not an answer: <em>"What was the last thing you changed?"</em></li><li>Applies the cycle <strong>change → run → compare → diagnose → correct</strong>: go back to the last version that worked and find the <strong>first difference</strong>, rather than fixing everything at once.</li><li>Guides toward <strong>one testable hypothesis at a time</strong>.</li><li>Does not open the AI request and rewrite it for them — asks one pointed question about what is missing from it.</li><li>Keeps the backup template in reserve, used without drama, only after genuine attempts.</li></ul>',
    fb: 'Compare your answer with the model below.' },

  { type: 'mcq',
    ctx: 'You are planning the first 10 minutes of your lesson: introduce the concept of variables, show your students where the blocks live, then hand out the template so they can build the counter.',
    q: 'What is wrong with this plan under the new model?',
    opts: [
      'Nothing — variables must be explained before students can use them',
      'It is inductive. Open by showing the finished result already working, let your students take it apart with you, and let your explanation arrive as an answer to what they already observed',
      'You should let the AI Mentor explain the concept instead of explaining it yourself',
      'Variables should not be taught at all in these courses'
    ],
    c: 1,
    fb: 'That plan is the old inductive sequence: theory → tool → build. Deductive learning inverts it — <strong>show the finished result first</strong>, disassemble it together, and let your explanation land at the moment your student has already run into the need for it.' }
]
},

/* ---------------------------------------------------------- G3 */
{
  id: 'g3', kind: 'general', num: 'Core module 3', emoji: '⏱', color: '#F59E0B',
  title: 'Lesson structure',
  desc: 'The 9 blocks no longer exist as slides — here is what replaced them, and the metrics you still own.',
  meta: '5 mixed-format questions',
  chips: ['🧱 9 blocks', '📊 Metrics', '☑️ Pre-class checklist'],
  objective: 'Know how a lesson is now structured without block slides, manage the rhythm yourself, and keep attendance, homework and retention on track.',
  cards: [
    { type: 'h', ic: '🧱', t: 'No more 9 blocks with a slide announcing the change' },
    { type: 'text', p: 'Before, a class had big blocks and a slide telling us when to "summarise the lesson" or "now it is time to close":' },
    { type: 'list', ordered: true, items: [
      'Warm-Up', 'Review of the previous lesson', 'Homework review', 'Lesson objective',
      'Theory and practice', 'Lesson summary', 'Homework assignment', 'Preview of the next lesson', 'Closing'
    ]},
    { type: 'hi', ic: '⚠️', h: 'What changed', p: 'These no longer exist as separate blocks announced by a slide. The lesson is broken down into <strong>activities inside the platform</strong>, and each one brings its own information. <strong>You manage the rhythm — not a slide reminding you.</strong>' },

    { type: 'h', ic: '✅', t: 'The structure is not lost — it moved' },
    { type: 'acc', items: [
      { ic: '👋', h: 'Warm-Up — 2 to 4 minutes', body: '<p>Still exists, but short: greeting, camera/microphone, a reaction. It is no longer a long segment. In some lessons there is a mood check.</p><p><strong>What we must keep:</strong> use it to connect with our students — a short chat, or an activity about their interests and how they are feeling.</p>' },
      { ic: '🔧', h: 'Review of the previous class → a technical checkpoint', body: '<p>It becomes a <strong>checkpoint</strong>: does the previous project open and work? Concepts are <strong>not</strong> re-explained — you only verify that the starting point is ready.</p><p>In some lessons the previous-lesson review and the homework review are merged into a single platform task.</p>' },
      { ic: '🎬', h: 'Lesson objective — shown, not explained', body: '<p>The objective is no longer explained with words alone. It is <strong>shown</strong> with the final result (video, GIF, finished project) as the first trigger of the class.</p>' },
      { ic: '🔀', h: 'Theory and practice are fused', body: '<p>The explanation arrives exactly when the student has already run into the need for it: first they explore and face the challenge, then the explanation arrives <strong>as an answer</strong>.</p>' },
      { ic: '📋', h: 'Lesson summary — interactive and collective', body: '<p>More interactive and group-based, with small quizzes each student answers directly in the platform, plus a summary list of what was learned for the tutor to walk through.</p>' },
      { ic: '🏠', h: 'Homework — the next version, not a separate exercise', body: '<p>Homework is reframed as "the next version/iteration" of the <strong>same published project</strong>, not as a separate exercise. Depending on the course it may also be framed as a mission or challenge building on what was just learned.</p>' },
      { ic: '🔮', h: 'Preview of the next class — a sentence, not a segment', body: '<p>It is one sentence, not a segment. But do not reduce it to just reading the line — <strong>use it to motivate</strong>. It is strongly recommended that you read the next lesson before teaching, so you can build real anticipation.</p>' }
    ]},

    { type: 'divider' },
    { type: 'h', ic: '📊', t: 'What you still own: the metrics' },
    { type: 'hi', ic: '📈', h: 'The slides are gone — the structure is not', p: 'Remember that lesson structure is closely connected to important metrics like <strong>attendance</strong>, <strong>retention</strong> and <strong>homework submission</strong>. Reminding students about homework, explaining and reviewing it, doing a warm-up and a wrap-up, explaining the lesson objectives, and previewing the next lesson all contribute to student engagement, retention and attendance.' },
    { type: 'iclist', h: 'Three metrics, three concrete habits', items: [
      { ic: '🗓', t: '<strong>Attendance</strong> — mark it at the start, during the warm-up, while students are settling in. Do not leave it for the end of the class, when you are wrapping up and likely to forget.' },
      { ic: '📚', t: '<strong>Homework</strong> — since homework is now "the next iteration of the same project", check it inside the previous-lesson checkpoint. If a student has nothing, that is your signal to look at whether they got stuck technically, not just to record a zero.' },
      { ic: '💚', t: '<strong>Retention</strong> — a student who stops publishing to Sparks, or stops clicking Submit, is usually disengaging before they stop attending. Those two signals are your earliest warning.' }
    ]},
    { type: 'warn', t: 'Remember: <strong>if the student does not click Submit, their work is not recorded</strong>. A class that felt great can still show up as zero classwork completion. Make the Submit reminder part of your closing routine.' },

    { type: 'h', ic: '☑️', t: 'Before your lesson' },
    { type: 'check', h: 'Pre-class checklist', items: [
      'I read the teacher notes for this lesson in Back Office.',
      'I read <strong>the next</strong> lesson too, so I can build anticipation at the close.',
      'I opened the finished result I will show at the start (video, GIF or working project).',
      'I know which single AI step this lesson allows, and its scope limit.',
      'I know where the backup template is, in case a project breaks.',
      'I have a plan for marking attendance during the warm-up.',
      'I will remind students to click <strong>Submit</strong> before we close.'
    ]},
    { type: 'good', t: 'You do not need to memorise the lesson. You need to know where the finished result is, where the backup template is, and when to stop talking. The teacher notes carry the rest.' }
  ],
  quiz: [
  { type: 'match',
    q: 'The 9 lesson blocks no longer exist as slides, but each one has a successor. Match the old block to what it became.',
    pairs: [
      { l: 'Review of the previous lesson', r: 'A technical checkpoint: does the previous project open and work?' },
      { l: 'Lesson objective', r: 'The finished result shown as the first trigger — video, GIF or working project' },
      { l: 'Homework assignment', r: 'The next version/iteration of the same published project' },
      { l: 'Lesson summary', r: 'Small quizzes answered in the platform plus a shared list of what was learned' },
      { l: 'Preview of the next lesson', r: 'One motivating sentence — which means reading the next lesson beforehand' }
    ],
    fb: 'Nothing was deleted; everything moved into the activities. The checkpoint is the easiest one to get wrong — it verifies that the starting point works, it does not re-explain last week\'s concepts.' },

  { type: 'multi',
    ctx: 'It is your first month teaching one of these courses. You want to keep attendance, homework and retention healthy without a slide reminding you.',
    q: 'Which habits match what the model actually asks for? Select all that apply.',
    opts: [
      'Mark attendance at the start, during the warm-up, while students are settling in',
      'Mark attendance at the end, together with the homework record, so it is all done at once',
      'Check homework inside the previous-lesson checkpoint, since homework is now the next iteration of the same project',
      'If a student brings no homework, record a zero and move on so the class stays on time',
      'Treat "stopped publishing to Sparks" and "stopped clicking Submit" as early warnings of disengagement',
      'Wait for two missed classes before treating a student as at risk of dropping out'
    ],
    c: [0, 2, 4],
    fb: 'Attendance at the end competes with wrapping up and gets forgotten. A missing homework is a signal to check whether the student got stuck technically — not just a zero. And disengagement shows up in <strong>output</strong> (no publishing, no Submit) before it shows up in attendance, which is why waiting for missed classes is already late.' },

  { type: 'mcq',
    ctx: 'You open the lesson and the review activity for the previous class. Two students\' projects do not open at all. You have 90 minutes and today\'s lesson builds directly on that project.',
    q: 'What does the checkpoint ask you to do here?',
    opts: [
      'Re-explain last week\'s concepts to the whole group so nobody is left behind',
      'Verify and repair the starting point — get those two onto a working project (backup template if needed) without re-teaching concepts, then continue',
      'Have the two students watch a classmate for the rest of the lesson',
      'Skip today\'s planned lesson and rebuild last week\'s project as a group'
    ],
    c: 1,
    fb: 'The checkpoint is technical, not conceptual: <strong>does the previous project open and work?</strong> Concepts are not re-explained. Backup templates exist in every course precisely so nobody is stranded and you never have to "rescue" a project in a panic.' },

  { type: 'open',
    ctx: 'A student in your group has attended every single class for the last three weeks. But they have not published anything to Kodland Sparks since the first module, and their last four activities show no Submit.',
    q: 'What is your read of this situation, and what will you do in the next lesson? Be concrete about the actions you would take.',
    min: 180,
    model: 'A strong answer covers: <ul><li><strong>The read:</strong> attendance looks healthy, but the two earliest disengagement signals are both firing. Output stops before attendance does — this student is at risk right now, not later.</li><li>Distinguishing the two possible causes: <em>disengagement</em> versus a <em>technical block</em> (they may not know how to publish, or their project may be broken). Do not assume motivation before checking the mechanics.</li><li><strong>Next lesson, concretely:</strong> check their project opens during the previous-lesson checkpoint; walk them personally through the publish flow on Sparks; make sure they click Submit before the class closes.</li><li>Using the narrative and the peer showcase to reconnect them — a reaction or a specific review on their work from a classmate.</li><li>Making the Submit reminder part of the closing routine for the whole group, not just this student.</li></ul>',
    fb: 'Compare your answer with the model below.' },

  { type: 'mcq',
    ctx: 'You are closing your lesson and you are about to tell your students: <em>"For homework, do exercise 4 from the worksheet — it practises the same blocks we used today."</em>',
    q: 'Why does this not fit the new model?',
    opts: [
      'You should not assign homework at all in these courses',
      'Homework is reframed as the next version or iteration of the same project your student already published, not as a separate exercise',
      'The AI Mentor should choose the homework, not you',
      'Exercise 4 should be done in class instead, since theory and practice are fused'
    ],
    c: 1,
    fb: 'Homework continues the <strong>same project</strong> your student already published — the next iteration, or a mission built on what they just learned. A separate worksheet exercise breaks the through-line and the portfolio they are building.' }
]
},

/* ---------------------------------------------------------- G4 */
{
  id: 'g4', kind: 'general', num: 'Core module 4', emoji: '🤖', color: '#A855F7',
  title: 'Introduction to prompts for tutors',
  desc: 'The one genuinely new skill in these courses. Not the technical side of AI — how to write a prompt, and how to help a student write theirs.',
  meta: '5 mixed-format questions',
  chips: ['✍️ Writing prompts', '🐞 Debugging with AI', '🎨 Image and video'],
  objective: 'Know enough about prompts to guide your students while they write their own in class. This is about practical skill, not technical theory.',
  cards: [
    { type: 'hi', ic: '💡', h: 'Why this module exists', p: 'These new courses do not ask much of you in terms of new subject knowledge. The one genuinely new area is <strong>AI</strong> — and while some tutors are already comfortable with it, others use it very little, or use it in ways that will not help a student. This module is the shared baseline.' },

    { type: 'h', ic: '🧠', t: 'Learning about AI' },
    { type: 'text', p: 'The artificial intelligence we use in our classes — AI Buddy, and the tools inside Kodland Sparks — works from instructions written in ordinary language, called <strong>prompts</strong>. The better the prompt, the better the result the student gets.' },
    { type: 'text', p: 'As a tutor you do not need to be a technical AI expert. You do need to understand the basics, so you can guide your students while they write their own prompts during class.' },

    { type: 'h', ic: '❓', t: 'What is a prompt?' },
    { type: 'text', p: 'A prompt is the instruction we give an AI so that it generates a result — text, code, an image, a video. It is like giving instructions to someone who knows nothing about the context of your project: <strong>the clearer and more specific the instructions, the closer the result will be to what you actually wanted.</strong>' },
    { type: 'ba',
      beforeLbl: 'A bad prompt',
      before: 'Produces generic or incorrect results. The student ends up either accepting something they did not want, or starting over from scratch.',
      afterLbl: 'A good prompt',
      after: 'Produces useful, precise results that are <strong>easy to adjust</strong>. That last part matters most — a result you can nudge is worth more than one you have to replace.'
    },

    { type: 'h', ic: '🧩', t: 'What should a good prompt include?' },
    { type: 'iclist', p: 'A solid prompt generally answers these four questions:', items: [
      { ic: '🎬', t: '<strong>Context</strong> — what is this for? Who will use it?' },
      { ic: '🎯', t: '<strong>Goal</strong> — what exactly do you want to achieve?' },
      { ic: '📐', t: '<strong>Specific details</strong> — style, format, tone, constraints. For example: "in 3 sentences", "using Python", "cartoon style".' },
      { ic: '🖼', t: '<strong>Examples</strong>, where they apply — showing one example helps the AI understand what is expected.' }
    ]},
    { type: 'twocol',
      left:  { ic: '✅', h: 'Specific enough', items: ['"Create a simple Scratch game where a cat dodges falling obstacles, with a visible score and 3 lives."'] },
      right: { ic: '❌', h: 'Too vague', items: ['"Make me a game."'] }
    },

    { type: 'h', ic: '💻', t: 'Tips for prompts that generate code' },
    { type: 'iclist', items: [
      { ic: '🏷', t: '<strong>Name the language or platform</strong> — Python, HTML, Scratch, Roblox, and so on.' },
      { ic: '👣', t: '<strong>Describe the expected behaviour step by step</strong>, not just the final result.' },
      { ic: '💬', t: '<strong>Ask for the code to be commented</strong>, so it is easier to read and to explain in class.' },
      { ic: '🔧', t: 'If something does not work, <strong>do not rewrite the whole prompt</strong>. Ask the AI to fix the specific error, and say what happened.' },
      { ic: '🧪', t: '<strong>Encourage students to test and understand the code</strong>, not just copy it.' }
    ]},

    { type: 'h', ic: '🎨', t: 'Tips for prompts that generate images and video' },
    { type: 'iclist', items: [
      { ic: '🖌', t: '<strong>Describe the main subject, the visual style</strong> (realistic, cartoon, pixel art…) <strong>and the setting or background.</strong>' },
      { ic: '🌈', t: '<strong>Mention colours, lighting or mood</strong> when they matter for the project.' },
      { ic: '📏', t: '<strong>Be specific about the format</strong> — vertical, horizontal, square — if the project requires it.' },
      { ic: '🔁', t: 'If the first result is not what you expected, <strong>adjust one variable at a time</strong> (only the colour, or only the style) so you can see what actually changed the outcome.' }
    ]},

    { type: 'h', ic: '⚠️', t: 'Common mistakes' },
    { type: 'iclist', items: [
      { ic: '🌫', t: '<strong>Being too vague.</strong> "Make it prettier" gives the AI nothing to work with.' },
      { ic: '📚', t: '<strong>Asking for too much at once.</strong> Break a complex project into several smaller prompts.' },
      { ic: '🔍', t: '<strong>Not reviewing the result.</strong> AI makes mistakes and can generate incorrect content — always review before using it.' },
      { ic: '🔂', t: '<strong>Not iterating.</strong> The first result is almost never the final one. Adjusting and asking again is a normal part of the process.' },
      { ic: '🧭', t: '<strong>Forgetting the project context.</strong> A prompt without context produces generic results that do not fit what the student is building.' }
    ]},
    { type: 'good', t: 'Notice how much of this overlaps with what you already do as a tutor: one change at a time, describe the behaviour you expect, test before you trust it, and iterate rather than restart. Prompting is not a separate skill — it is the same debugging habit, pointed at a different tool.' }
  ],
  quiz: [
    { type: 'mcq',
      ctx: 'You are helping a student turn their Scratch game idea into a prompt.',
      q: 'Which prompt is most likely to produce a usable result on the first try?',
      opts: [
        '"Build a cat game with obstacles, similar to endless runner games, using good game design principles."',
        '"Create a Scratch game: a cat sprite moves left/right with arrow keys, obstacles fall from the top at increasing speed, score increases every second survived, game ends after 3 collisions."',
        '"Make a fun and engaging game for an 8-year-old that teaches them about obstacles and survival, similar to Flappy Bird but original."',
        '"Create a 2D game in Scratch with clear rules, a scoring system, and increasing difficulty over time."'
      ], c: 1,
      fb: 'Only that one has concrete, unambiguous mechanics: movement, spawn behaviour, scoring trigger, end condition. The others <em>sound</em> specific but lean on subjective terms — "good game design principles", "fun and engaging", "clear rules" — that the AI has to interpret on its own.' },

    { type: 'mcq',
      ctx: 'A student\'s first image prompt produced a character with the wrong colour palette. Everything else — pose, style, background — came out correct.',
      q: 'What is the best next step?',
      opts: [
        'Rewrite the entire prompt from scratch with more detail overall, to avoid making the same mistake twice',
        'Re-run the exact same prompt again, since AI output has randomness and a second try often fixes it',
        'Send a follow-up prompt that changes only the colour palette, keeping the rest of the description the same',
        'Add several extra adjectives describing the desired mood, so the AI has more context to work with'
      ], c: 2,
      fb: 'Isolating the one variable that was wrong is faster and more reliable than starting over, relying on randomness, or adding unrelated detail that does not address the actual problem.' },

    { type: 'mcq',
      ctx: 'You are helping a 13+ student debug a Python function using AI.',
      q: 'Which prompt reflects the most effective troubleshooting approach?',
      opts: [
        '"This code doesn\'t work, please fix it: [code]"',
        '"This function should return the average of a list but returns None when the list has one item. Here\'s the code: [code]. What\'s causing this specific case to fail?"',
        '"Rewrite this code using better practices and make sure it works: [code]"',
        '"Explain what\'s wrong with this code and give me a corrected version: [code]"'
      ], c: 1,
      fb: 'It names the exact expected behaviour, the exact observed failure, and the specific edge case — so the AI can target the real bug instead of guessing at scope or rewriting more than necessary.' },

    { type: 'mcq',
      ctx: 'Two tutors write prompts for the same video generation task. Tutor A writes one long, detailed prompt covering style, subject and background all at once. Tutor B writes a shorter prompt first, checks the result, then adjusts.',
      q: 'Which statement is most accurate?',
      opts: [
        'Tutor A\'s approach is always better, because more detail up front reduces the number of iterations needed',
        'Tutor B\'s approach is always better, because shorter prompts are inherently easier for AI to process',
        'Either can work, but Tutor B\'s iterative approach makes it easier to identify which specific detail caused an unwanted result',
        'Neither approach matters, since final output quality depends only on the AI model being used, not the prompt'
      ], c: 2,
      fb: 'The core principle of this module is iteration and isolating variables. Detail alone does not guarantee success, and iterating makes cause and effect much clearer than doing everything in one large prompt.' },

    { type: 'open',
      ctx: 'A student in your group wants to add a double jump to their platform game. They type into the AI: <em>"make the jump better"</em>.',
      q: 'Rewrite that into a prompt likely to work on the first try. Write the actual prompt text you would help them produce, then add one line saying why yours will work better.',
      min: 180,
      model: 'A strong prompt does most of these: <ul><li><strong>Names the platform</strong> — "In Scratch…" — so the AI does not guess the environment.</li><li><strong>States the exact behaviour and its trigger:</strong> "when the space key is pressed while the cat is already in the air, it jumps a second time".</li><li><strong>Sets a limit:</strong> "only once per fall", and "do not change the existing movement blocks".</li><li><strong>Asks for an explanation:</strong> "tell me which blocks you added and where".</li></ul><p style="margin-top:8px">And the reason: it isolates <strong>one</strong> mechanic, states the expected behaviour precisely, and constrains what may change — so there is nothing left for the AI to invent. "Make the jump better" leaves every one of those decisions to the AI.</p>',
      fb: 'Compare your answer with the model below.' }
  ]
}
],

/* ============================================================
   COURSE MODULES
   ============================================================ */
courses: [

/* ---------------------------------------------------------- 2058 */
{
  id: 'c2058', kind: 'course', bit: 1, num: 'Course · [2058]', emoji: '🎨', color: '#EC4899',
  title: 'Digital Creativity Level 2',
  desc: 'Creativia Studio — first 4 lessons: FlipAnim animation, Canva registration, AI-edited scenes and publishing to Sparks.',
  meta: 'Ends with the final DST',
  chips: ['👦 10–12', '⏱ 60 min', '📚 40 lessons'],
  objective: 'Be ready to teach the first 4 lessons of Digital Creativity Level 2, where students build a 3-scene video presentation and publish their first portfolio piece.',
  finalDst: { url: 'https://forms.gle/TgnXa4AQurpFAH838', desc: 'One last step: the final DST for Digital Creativity Level 2 checks that you are ready to run these lessons with a live group.' },
  cards: [
    { type: 'metabar', items: [
      { ic: '👦', k: 'Age', v: '10–12' }, { ic: '⏱', k: 'Lesson', v: '60 min' },
      { ic: '📚', k: 'Programme', v: '40 lessons' }, { ic: '🌎', k: 'Region', v: 'LatAm' }
    ]},
    { type: 'text', h: 'Storytelling', ic: '🎭', p: 'Students become young creators at <strong>"Creativia Studio"</strong>, a digital creative agency where each module is a new client brief: personal video, brand, comic, animation, 3D world, online shop. They finish the course with a professional portfolio on Kodland Sparks.' },
    { type: 'ba',
      beforeLbl: 'Previous version',
      before: 'Inductive: tool and theory first, then a project from zero. AI skills were not taught.',
      afterLbl: 'This version',
      after: 'Deductive: finished prototype/animation → exploration → building your own. <strong>AI Buddy and Canva AI are an integrated part of the experience.</strong>'
    },
    { type: 'divider' },
    { type: 'h', ic: '📖', t: 'The first 4 lessons' },
    { type: 'tabs', tabs: [
      { label: 'M1L1', cards: [
        { type: 'text', h: 'Lesson 1 — Animating your name in FlipAnim', ic: '✏️', p: 'First class of the course. Students meet the group and create their first digital project: a frame-by-frame GIF animation with their own name.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Knowledge you need', open: true, body: '<ul><li>The frame-by-frame animation principle (a new letter = a new frame).</li><li>Basic FlipAnim handling: pencil, fill, eraser, duplicate frame.</li><li><strong>BrushNinja</strong> as the alternative if FlipAnim fails.</li></ul>' },
          { ic: '🎯', h: 'Learning objectives', body: '<ul><li>The student understands that movement comes from a sequence of slightly different images.</li><li>They produce a working, legible GIF animation with their name.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Tutor role', body: '<ul><li>Show the final result and the main algorithm <strong>once</strong>.</li><li>Generate productive challenge <em>before</em> explaining — let them try first.</li><li>Give <strong>one hint at a time</strong>.</li><li>Prioritise that the animation <em>works</em> over the design looking pretty.</li></ul>' },
          { ic: '⚙️', h: 'Technical aspects', body: '<ul><li>If FlipAnim does not load, use BrushNinja.</li><li>The editor works without registration — no personal data is requested.</li><li><strong>Homework:</strong> prepare an own or an adult\'s e-mail for the next class (Canva registration), without sharing the password with the tutor.</li></ul>' }
        ]},
        { type: 'tip', t: 'Remind them about the e-mail homework <strong>a few days before</strong> the next class — it is the single most common blocker in Lesson 2.' }
      ]},
      { label: 'M1L2', cards: [
        { type: 'text', h: 'Lesson 2 — Canva registration. First scene "My name is…"', ic: '🖼', p: 'Students meet Canva, create their first video project and build the first scene of their future video-presentation using the GIF from Lesson 1.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Knowledge you need', open: true, body: '<ul><li>The Canva registration process (and backup accounts if there are technical problems).</li><li>Structure of a Canva video project: background, frames, uploads, animate, timeline.</li><li>How to import the GIF from the previous class.</li></ul>' },
          { ic: '📌', h: 'Important notes', body: '<ul><li>Registration can create technical difficulties — <strong>have backup e-mail accounts ready</strong>.</li><li>Do not overload students with complex Canva tools.</li><li>Verify that only free elements are used.</li><li>Remind them of personal-data safety rules during registration.</li></ul>' },
          { ic: '🎯', h: 'Learning objectives', body: '<ul><li>The student registers and signs in to Canva.</li><li>Creates a video project with a first scene.</li><li>Adds their name GIF and at least 2 additional animated elements.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Tutor role', body: '<ul><li>Show the registration and project-creation process <strong>once</strong>.</li><li>Give free exploration time before explaining the interface in detail.</li><li>Organise a final demonstration with positive, specific feedback.</li></ul>' },
          { ic: '⚙️', h: 'Technical aspects', body: '<ul><li>Video project in <strong>vertical</strong> format.</li><li>Share → Anyone with the link → View → Copy link.</li><li>Enable manual review with maximum score greater than zero before the submission activity.</li></ul>' }
        ]}
      ]},
      { label: 'M1L3', cards: [
        { type: 'text', h: 'Lesson 3 — Interests scene with avatar/photo and AI elements', ic: '🤖', p: 'Students create the second scene of the video using an authorised photo or an avatar, generate an AI-edited version (background removal), and animate a "head opening" effect with stickers of their interests.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Knowledge you need', open: true, body: '<ul><li>How to upload an image (Uploads).</li><li>How to use the AI apps built into Canva to remove a background.</li><li>Correct layer order (cloud behind the character but in front of the background).</li><li>Undo shortcuts (Ctrl/Cmd + Z).</li></ul>' },
          { ic: '📌', h: 'Important notes', body: '<ul><li>Have a <strong>neutral backup avatar</strong> if the student does not bring their own resource.</li><li>Do not start many AI generations in a row — free credits are limited.</li><li>Check the image contains no personal data and stays inside the frame.</li></ul>' },
          { ic: '🎯', h: 'Learning objectives', body: '<ul><li>The student integrates their AI-edited personal resource.</li><li>Keeps the visual style of scene 1.</li><li>Adds stickers related to their own interests, with an animated appearance.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Tutor role', body: '<ul><li>Show the technical flow <strong>once</strong> and let the student experiment.</li><li>Give feedback with the formula: <strong>specific strength → question to improve → support</strong>.</li><li><strong>Do not correct the project in place of the student.</strong></li></ul>' },
          { ic: '⚙️', h: 'Technical aspects', body: '<ul><li>Cropping tools to split the avatar into two parts (head opening).</li><li>Verify both parts keep the same size.</li><li>Reinforce the ban on sharing photos containing personal data.</li></ul>' }
        ]}
      ]},
      { label: 'M1L4', cards: [
        { type: 'text', h: 'Lesson 4 — Music, export and publishing on Kodland Sparks', ic: '🎵', p: 'Last lesson of the module. Music/sound effects are added to the full video, it is exported as MP4, and the final project is published as the first piece of the portfolio on Kodland Sparks.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Knowledge you need', open: true, body: '<ul><li>How to add and adjust an audio track on the Canva timeline.</li><li>The complete export process (File → Download → MP4).</li><li>The Kodland Sparks publishing flow ("Embed" type, visibility, copying the published card link).</li></ul>' },
          { ic: '📌', h: 'Important notes', body: '<ul><li>There is a <strong>simplified version</strong> (music only + 1 sound effect) if time runs short.</li><li>Do not close Canva before the export finishes processing.</li><li>Permission to use the work in Kodland advertising must always be <strong>voluntary, never forced</strong>.</li></ul>' },
          { ic: '🎯', h: 'Learning objectives', body: '<ul><li>The final video has the 3 scenes, music and a legible ending.</li><li>It downloads correctly and is published on Sparks with a working link submitted.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Tutor role', body: '<ul><li>Review the project as a group before publishing.</li><li>Guide the publishing process step by step.</li><li>Encourage <strong>specific</strong> peer feedback (about the music, the animation or the ending) — not generic ("how pretty").</li></ul>' },
          { ic: '⚙️', h: 'Technical aspects', body: '<ul><li>Verify every page downloaded and the video has audio.</li><li>On Sparks, check the student explored their profile and can mention at least 2 platform features before publishing.</li></ul>' }
        ]},
        { type: 'link', ic: '⚡', href: 'https://portfolio.kodland.org/feed', t: 'Kodland Sparks feed', d: 'Where this first portfolio piece will be published' }
      ]}
    ]},
    { type: 'divider' },
    { type: 'h', ic: '🔍', t: 'Review the lessons before the DST' },
    { type: 'text', p: 'Before you take the DST, open the course in Back Office and read through the four lessons at your own pace — the activity cards and the teacher notes are all there. Nothing here is timed, so take as long as you need.' },
    { type: 'link', ic: '📘', href: 'https://bo.kodland.org/courses/2058/?tab=2&lessonId=41764', t: 'Open the course in Back Office', d: '[2058] Digital Creativity. Level 2 — go straight to the lesson and its teacher notes — click here to review each lesson before taking the DST' }
  ]
},

/* ---------------------------------------------------------- 2063 */
{
  id: 'c2063', kind: 'course', bit: 8, num: 'Course · [2063]', emoji: '🧪', color: '#8B5CF6',
  title: 'Creator Lab: Games, AI',
  desc: 'The secret creative lab — first 4 lessons in Scratch: Dance Party, the Portal Guardian and the module launch festival.',
  meta: 'Ends with the final DST',
  chips: ['🧒 8–9', '⏱ 60 min', '📚 40 lessons'],
  objective: 'Be ready to teach the first 4 lessons of Creator Lab: Games, AI, where 8–9 year olds go from a working prototype to their own published game.',
  finalDst: { url: 'https://forms.gle/G4NfCZrJEHyFabSP8', desc: 'One last step: the final DST for Creator Lab: Games, AI checks that you are ready to run these lessons with a live group.' },
  cards: [
    { type: 'metabar', items: [
      { ic: '🧒', k: 'Age', v: '8–9' }, { ic: '⏱', k: 'Lesson', v: '60 min' },
      { ic: '📚', k: 'Programme', v: '40 lessons' }, { ic: '🌎', k: 'Region', v: 'LatAm' }
    ]},
    { type: 'text', h: 'Storytelling', ic: '🎭', p: 'Students enter the secret creative laboratory <strong>"Creator Lab"</strong>. Every project is a mission, and <strong>AI Buddy</strong> accompanies them with quick tips, creative ideas and self-assessment checklists.' },
    { type: 'ba',
      beforeLbl: 'Previous Scratch course',
      before: 'Inductive: tool and concepts first, then the project. AI skills were not taught.',
      afterLbl: 'This version',
      after: 'Deductive: a complete but imperfect prototype → exploration → improvement. <strong>AI Buddy is integrated, with an explicit Kodland Learning Loop.</strong>'
    },
    { type: 'warn', t: 'This is the <strong>youngest</strong> age group in the four courses. The inverse test applies: the project must stay 100% achievable and meaningful <em>without</em> AI. Protect the feeling of "I made this".' },
    { type: 'divider' },
    { type: 'h', ic: '📖', t: 'The first 4 lessons' },
    { type: 'tabs', tabs: [
      { label: 'M1L1', cards: [
        { type: 'text', h: 'Lesson 1 — Dance Party: bringing the stage to life', ic: '💃', p: 'First class of the programme. Students explore an already working Scratch prototype (a character dancing to music) and personalise it: they choose the character and the music, generate a background with AI, and program at least 2 reactions to different keys.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Knowledge you need', open: true, body: '<ul><li>Basic Scratch blocks: events, motion, looks and sound.</li><li>How to load an <code>.sb3</code> project in Creator Lab — <strong>via "Upload", never a double click</strong>.</li><li>Using the AI Sandbox to generate a background (prompt → download PNG → upload to Scratch).</li></ul>' },
          { ic: '📌', h: 'Important notes', body: '<ul><li><strong>Variables, loops and complex conditions are not taught yet</strong> — the lesson narrows the focus on purpose.</li><li>Errors (badly assembled blocks, not finding save) are normal learning material, not failures.</li><li>The template already brings the blocks needed — there is no hunting through categories.</li></ul>' },
          { ic: '🎯', h: 'Learning objectives', body: '<ul><li>The student understands the relation <strong>event → action → result</strong>.</li><li>Personalises the dance by modifying motion values.</li><li>Adds an AI-generated background.</li><li>Can explain in their own words at least one event–action–result relation.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Tutor role', body: '<ul><li>Show the <strong>final result first</strong> (the finished show) and guide exploration before explaining blocks.</li><li>Give only pointed hints — <strong>never solve the block in place of the student</strong>.</li><li>Close with a project parade and AI Buddy feedback (one strength + one improvement idea).</li></ul>' },
          { ic: '⚙️', h: 'Technical aspects', body: '<ul><li>The AI background must be free of characters and leave central space for the character.</li><li><strong>Publishing on Sparks and sending the link on the Kodland platform are two different steps.</strong></li><li>Reinforce personal-data safety rules.</li></ul>' }
        ]}
      ]},
      { label: 'M1L2', cards: [
        { type: 'text', h: 'Lesson 2 — The Portal Guardian: hero and crystals', ic: '💎', p: 'Students start a new project (a different template from Dance Party): a hero who collects 3 crystals with a visible score. The danger, the key and the portal are left for the next lesson.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Knowledge you need', open: true, body: '<ul><li>Variables (the crystal counter).</li><li>Contact condition (touch object → add → sound → disappear).</li><li><code>if</code> structure.</li><li>The <strong>only</strong> AI use in this lesson is generating the crystal image.</li></ul>' },
          { ic: '📌', h: 'Important notes', body: '<ul><li>It is a <strong>new project</strong>, not the Dance Party one — verify everyone loaded the correct file before moving on.</li><li>A new start (green flag) must return the hero to its position and the score to zero.</li><li>Do not touch danger, key or portal yet.</li></ul>' },
          { ic: '🎯', h: 'Learning objectives', body: '<ul><li>The student understands that every game has an objective, a rule and visible progress.</li><li>Builds the collection mechanic in <strong>3 increasing levels of autonomy</strong>: crystal 1 (connect ready blocks), crystal 2 (complete what is missing), crystal 3 (build the sequence alone).</li></ul>' },
          { ic: '🧑‍🏫', h: 'Tutor role', body: '<ul><li>Show <strong>once</strong> where to join the blocks for the first crystal, then progressively withdraw.</li><li>Let the student build the third crystal <strong>without help</strong> before intervening with guiding questions.</li><li>Test the complete system (0→1→2→3→restart→0) before publishing.</li></ul>' },
          { ic: '⚙️', h: 'Technical aspects', body: '<ul><li>The AI-generated crystal costume must have a <strong>transparent background</strong> and size set to <strong>25%</strong>.</li><li>Verify the start script includes both the hero position and the score reset to 0.</li></ul>' }
        ]}
      ]},
      { label: 'M1L3', cards: [
        { type: 'text', h: 'Lesson 3 — Portal challenge: danger, key and portal', ic: '🚪', p: 'Continues the same project from Lesson 2. A Danger with a contact reaction is added, a key that appears only after collecting the 3 crystals, and a portal that opens an empty WIN screen.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Knowledge you need', open: true, body: '<ul><li>Messages between sprites (broadcast/receive).</li><li>Compound conditions (e.g. <code>Crystals &gt; 2</code>).</li><li>Switch backdrop.</li><li>Again, a <strong>single</strong> AI step (the danger image).</li></ul>' },
          { ic: '📌', h: 'Important notes', body: '<ul><li>While the portal is hidden it must <strong>not</strong> react to being touched — the transition to WIN is configured in a separate step.</li><li>The WIN screen is left <strong>intentionally empty</strong> (it is decorated in Lesson 4).</li><li>A backup template is available if the project is lost.</li></ul>' },
          { ic: '🎯', h: 'Learning objectives', body: '<ul><li>The student completes the entire path unaided: start → 3 crystals → key → portal → WIN.</li><li>Learns to balance game difficulty by <strong>changing object positions, not the code</strong>.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Tutor role', body: '<ul><li>Guide a <strong>complete out-loud test</strong> of the system before closing the class.</li><li>Let the student decide where to relocate danger or key to tune difficulty (without adding new mechanics).</li><li>Collect peer feedback about the game\'s difficulty.</li></ul>' },
          { ic: '⚙️', h: 'Technical aspects', body: '<ul><li>The message the key sends and the one the portal receives must <strong>match exactly</strong>.</li><li>Do not design the WIN screen yet — only the empty backdrop.</li></ul>' }
        ]}
      ]},
      { label: 'M1L4', cards: [
        { type: 'text', h: 'Lesson 4 — Module close: final personalisation and publishing', ic: '🎉', p: 'Last lesson of the module. The WIN screen is personalised with an AI-generated background and a victory phrase (with a <code>say</code> block or text-to-speech), one unique detail is added, a final checklist is run, and the definitive version is published with a closing mini-festival.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Knowledge you need', open: true, body: '<ul><li>The difference between the <code>say</code> block and <strong>Text to Speech</strong> — use only one, never both.</li><li>AI-generated backdrops.</li><li>A verification checklist before publishing (no new code, only debugging).</li></ul>' },
          { ic: '📌', h: 'Important notes', body: '<ul><li><strong>Only one AI backdrop</strong> in this lesson (usage limit).</li><li>Do not modify Key or Portal logic — only add the final detail.</li><li>This is the close of the first complete project cycle: <strong>it is worth celebrating explicitly with the group</strong>.</li></ul>' },
          { ic: '🎯', h: 'Learning objectives', body: '<ul><li>The student can name their <strong>3 personal decisions</strong> across the whole module (background, victory phrase, unique detail).</li><li>They submit a final working link with the complete path through to WIN.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Tutor role', body: '<ul><li>Guide the checklist without adding new functionality.</li><li>Give an <strong>"Iteration Award"</strong> for style or a unique detail — <strong>without comparing projects</strong> to each other.</li><li>Close with a reflection on the whole module, not just today\'s class.</li></ul>' },
          { ic: '⚙️', h: 'Technical aspects', body: '<ul><li>The victory-phrase block goes on the <strong>Portal sprite</strong>, right after the backdrop switch to WIN — <strong>not on the Stage</strong>.</li><li>Confirm the final publication and the sending of the updated link.</li></ul>' }
        ]}
      ]}
    ]},
    { type: 'divider' },
    { type: 'h', ic: '🔍', t: 'Review the lessons before the DST' },
    { type: 'text', p: 'Before you take the DST, open the course in Back Office and read through the four lessons at your own pace — the activity cards and the teacher notes are all there. Nothing here is timed, so take as long as you need.' },
    { type: 'link', ic: '📘', href: 'https://bo.kodland.org/courses/2063?tab=2&lessonId=41776', t: 'Open the course in Back Office', d: '[2063] Creator Lab: Games, AI — go straight to the lesson and its teacher notes — click here to review each lesson before taking the DST' }
  ]
},

/* ---------------------------------------------------------- 2060 */
{
  id: 'c2060', kind: 'course', bit: 4, num: 'Course · [2060]', emoji: '🎮', color: '#F97316',
  title: 'GameDev Creator Lab',
  desc: 'Arcade Remix: Neon Impulse — first 4 lessons turning a grey runner template into the student\'s own published game.',
  meta: 'Ends with the final DST',
  chips: ['👦 10–12', '⏱ 90 min', '📚 40 lessons'],
  objective: 'Be ready to teach the first 4 lessons of GameDev Creator Lab, where students remix a runner template in MakeCode Arcade and publish a beta on Kodland Sparks.',
  finalDst: { url: 'https://forms.gle/grNFLALqXCDchNt39', desc: 'One last step: the final DST for GameDev Creator Lab checks that you are ready to run these lessons with a live group.' },
  cards: [
    { type: 'metabar', items: [
      { ic: '👦', k: 'Age', v: '10–12' }, { ic: '⏱', k: 'Lesson', v: '90 min' },
      { ic: '📚', k: 'Programme', v: '40 lessons' }, { ic: '🌎', k: 'Region', v: 'LatAm' }
    ]},
    { type: 'text', h: 'Storytelling', ic: '🎭', p: 'Students enter <strong>"Creator Lab"</strong>, a digital studio, and transform a grey "runner" game template into their own game across the 4 lessons of the module <strong>"Arcade Remix: Neon Impulse"</strong>.' },
    { type: 'ba',
      beforeLbl: 'Previous courses',
      before: 'Theory first, code from zero, AI mentioned only in passing.',
      afterLbl: 'This version',
      after: 'Deductive from the very first class (test the template before touching the code). <strong>AI is used in pointed doses — one per lesson — always with a clear scope limit. It never decides the game mechanic.</strong>'
    },
    { type: 'good', t: 'Leverage test for this age: without AI the project would still be possible, but visibly poorer or smaller within class time. AI raises the ceiling of the student\'s idea — it is a sparring partner, not the author.' },
    { type: 'divider' },
    { type: 'h', ic: '📖', t: 'The first 4 lessons' },
    { type: 'tabs', tabs: [
      { label: 'M1L1', cards: [
        { type: 'text', h: 'Lesson 1 — Arcade Remix: neon impulse (visual remix)', ic: '🌈', p: 'First class of the module. A grey runner template is transformed by personalising the character (AI generated), the background and the rhythm of the game.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Knowledge you need', open: true, body: '<ul><li>How to use the PNG-to-sprite converter (size <strong>24×24</strong>, name <code>hero</code>).</li><li>The <code>hero.setImage</code> block.</li><li>The <code>set background color</code> and <code>every</code> blocks (for the rhythm).</li><li>Access to the AI Helper via sign-in → <strong>Sign with Kodland</strong>.</li></ul>' },
          { ic: '📌', h: 'Important notes', body: '<ul><li><strong>Do not use "Sign in" in MakeCode during the initial test</strong> — account access is part of the homework.</li><li>Do not add score, Game Over, WIN or new enemies in this lesson.</li><li>AI is used <strong>only for the character image</strong>, with a strict scope limit: one single character, side view, transparent background.</li></ul>' },
          { ic: '🎯', h: 'Learning objectives', body: '<ul><li>The student\'s character appears in the simulator via <code>setImage</code>.</li><li>The background colour differs from the original.</li><li>The rhythm interval changes from 1200 to 900 or 1500.</li><li>The project runs and shares correctly.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Tutor role', body: '<ul><li>Show the minimum route <strong>once</strong>: Kodland Sparks → two kinds of AI → prompt → code → run.</li><li>Give <strong>4 minutes of free exploration</strong> before explaining the interface.</li><li>Close with a character parade.</li></ul>' },
          { ic: '⚙️', h: 'Technical aspects', body: '<ul><li>If the built-in converter does not load, there is an alternative via Railway.</li><li><strong>Homework:</strong> create a 16×16 obstacle called <code>block</code> and insert it with <code>block.setImage</code>.</li></ul>' }
        ]}
      ]},
      { label: 'M1L2', cards: [
        { type: 'text', h: 'Lesson 2 — The collectible and the score', ic: '🪙', p: 'Continues the same project from Lesson 1. A collectible object (coin) and a visible on-screen score are added.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Knowledge you need', open: true, body: '<ul><li>Variables (<code>score</code>), <code>overlap</code> and <code>destroy</code> blocks.</li><li>The difference between <strong>conventional AI</strong> (used here only to generate ideas, not images) and the <strong>AI Helper</strong> as a methodological guide.</li></ul>' },
          { ic: '📌', h: 'Important notes', body: '<ul><li>The most frequent error: placing <code>coin.setImage</code> in the wrong place, or the <code>set score</code> block inside <code>on game update</code> (which makes the score reset constantly).</li><li>Always compare the <code>kind</code> of the <code>create</code> and of the <code>overlaps</code> — <strong>they must match</strong>.</li><li>For the homework, the <strong>Sparks link after Publish</strong> is needed — not just MakeCode\'s technical Share.</li></ul>' },
          { ic: '🎯', h: 'Learning objectives', body: '<ul><li>The collectible appears with its own design.</li><li>Contact adds +1 stably.</li><li>The student publishes their <strong>first beta on Kodland Sparks</strong>.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Tutor role', body: '<ul><li>Keep the cycle <strong>change → run → observe</strong> after every block added — do not leave everything to test at the end.</li><li>Accept a stable +1 as minimum success; do not demand perfect balance.</li></ul>' },
          { ic: '⚙️', h: 'Technical aspects', body: '<ul><li>Score is set to zero with <strong>Advanced → Info → set score to 0</strong> at game start, <strong>not inside loops</strong>.</li><li>Do not add Game Over, WIN or lives today — that is the next lesson.</li></ul>' }
        ]}
      ]},
      { label: 'M1L3', cards: [
        { type: 'text', h: 'Lesson 3 — Victory and speed tuning with AI', ic: '🏁', p: 'A defeat condition (game over LOSE) is added and a victory condition chosen from 3 options (A, B or C), plus the game speed is tuned with help from an AI Helper tip.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Knowledge you need', open: true, body: '<ul><li>The concept of loop and condition in simple terms: <em>the loop repeats, the condition decides how it ends</em>.</li><li>The difference between game over LOSE and WIN.</li><li>How to formulate a tuning prompt by pasting the project\'s <strong>entire JavaScript</strong>.</li></ul>' },
          { ic: '📌', h: 'Important notes', body: '<ul><li><strong>Do not place the LOSE block inside the coin-collection <code>overlaps</code>.</strong></li><li>Give real independent practice time (about <strong>17 minutes</strong>) before intervening.</li><li>When tuning speed with AI, <strong>change only one number at a time</strong>.</li></ul>' },
          { ic: '🎯', h: 'Learning objectives', body: '<ul><li>The student achieves their own working victory condition.</li><li>Adjusts speed with a justification.</li><li>Saves the Share link before presenting.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Tutor role', body: '<ul><li>Let each student choose their own form of victory (A, B or C) <strong>without imposing one</strong>.</li><li>In the final parade, show the different victory forms <strong>without comparing which is "better"</strong>.</li></ul>' },
          { ic: '⚙️', h: 'Technical aspects', body: '<ul><li>Check the defeat block correctly replaces the original reset.</li><li>Remember to test in <strong>Play</strong> after every speed change.</li></ul>' }
        ]}
      ]},
      { label: 'M1L4', cards: [
        { type: 'text', h: 'Lesson 4 — Own mechanic with AI and relaunch', ic: '🚀', p: 'Module close. Each student designs a new mechanic of their own (lives, shield, speed change…) by writing a specific prompt to the AI Helper, updates the beta already published on Sparks (they do not create a new project), and takes part in a launch mini-festival.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Knowledge you need', open: true, body: '<ul><li>How to tell a vague prompt from a specific one: <strong>one single mechanic, game context, complete code pasted, clear restrictions</strong>.</li><li>The difference between updating an existing project (<strong>Edit</strong>) and publishing it again from scratch (<strong>Publish project</strong>, which creates an unwanted duplicate).</li></ul>' },
          { ic: '📌', h: 'Important notes', body: '<ul><li><strong>One mechanic at a time</strong> — never several simultaneously.</li><li>Always paste the <strong>complete</strong> JavaScript in the prompt, not fragments.</li><li>Test in Play after every change; avoid students accidentally creating duplicate projects on Sparks.</li></ul>' },
          { ic: '🎯', h: 'Learning objectives', body: '<ul><li>The student gets a working new mechanic they can explain in their own words (what they added, how it changes the game).</li><li>They correctly relaunch the same already-published card for the complete module.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Tutor role', body: '<ul><li>Help with <strong>guiding questions</strong>, never solving the mechanic in place of the student.</li><li>Close the whole module (prototype → mechanic → launch) with a group celebration, <strong>without previewing the next module\'s content</strong>.</li></ul>' },
          { ic: '⚙️', h: 'Technical aspects', body: '<ul><li>When republishing, use Share with the <strong>"Update existing share link"</strong> option ticked.</li><li>On Sparks go to <strong>My Projects → Edit → Project link</strong> — avoid the Publish project button except the very first time.</li></ul>' }
        ]}
      ]}
    ]},
    { type: 'divider' },
    { type: 'h', ic: '🔍', t: 'Review the lessons before the DST' },
    { type: 'text', p: 'Before you take the DST, open the course in Back Office and read through the four lessons at your own pace — the activity cards and the teacher notes are all there. Nothing here is timed, so take as long as you need.' },
    { type: 'link', ic: '📘', href: 'https://bo.kodland.org/courses/2060', t: 'Open the course in Back Office', d: '[2060] GameDev Creator Lab — go straight to the lesson and its teacher notes — click here to review each lesson before taking the DST' }
  ]
},

/* ---------------------------------------------------------- 2059 */
{
  id: 'c2059', kind: 'course', bit: 2, num: 'Course · [2059]', emoji: '💻', color: '#2563EB',
  title: 'Coding Lab',
  desc: 'The digital studio — first 4 lessons: AI-generated prototype, file structure, visual customisation and game logic.',
  meta: 'Ends with the final DST',
  chips: ['🧑 12–17', '⏱ 90 min', '📚 40 lessons'],
  objective: 'Be ready to teach the first 4 lessons of Coding Lab, where students act as creative directors orchestrating AI to build and refine a browser game.',
  finalDst: { url: 'https://forms.gle/BaouXh5GbfWj2j719', desc: 'One last step: the final DST for Coding Lab checks that you are ready to run these lessons with a live group.' },
  cards: [
    { type: 'metabar', items: [
      { ic: '🧑', k: 'Age', v: '12–17' }, { ic: '⏱', k: 'Lesson', v: '90 min' },
      { ic: '📚', k: 'Programme', v: '40 lessons' }, { ic: '🌎', k: 'Region', v: 'LatAm' }
    ]},
    { type: 'text', h: 'Storytelling', ic: '🎭', p: 'Students enter the digital studio <strong>"Coding Lab"</strong> in the role of <strong>junior developer</strong>. Each module is a new real brief: build a game, an interactive site, a digital service.' },
    { type: 'ba',
      beforeLbl: 'Previous Python course',
      before: 'Inductive: syntax and theory → project from zero. AI was mentioned only sporadically.',
      afterLbl: 'This version',
      after: 'Deductive: a working but non-ideal prototype → exploration → refinement. <strong>AI is a central learning tool and AI/prompt-engineering literacy is an explicit educational outcome.</strong>'
    },
    { type: 'hi', ic: '🎯', h: 'Ambition test', p: 'At this age the intended scope and quality is <strong>not achievable without AI</strong> in the given time. Remove AI and the planned shape of the project collapses. That is correct here — but the rule still holds: <strong>AI proposes, the author decides.</strong>' },
    { type: 'warn', t: '<strong>This is NOT an HTML/CSS/JS syntax class.</strong> Students do not write large amounts of code. Errors and failed generations are a normal part of development.' },
    { type: 'divider' },
    { type: 'h', ic: '📖', t: 'The first 4 lessons' },
    { type: 'tabs', tabs: [
      { label: 'M1L1', cards: [
        { type: 'text', h: 'Lesson 1 — First game prototype', ic: '⚡', p: 'First class of the programme. Students use a conventional AI to generate a working browser game from a prepared prompt, and run it inside Kodland Sparks.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Knowledge you need', open: true, body: '<ul><li>The difference between <strong>conventional AI</strong> (generates the initial code) and the <strong>AI Mentor</strong> (guides with questions, never writes the complete code).</li><li>The structure of a good prompt: objective, functions, limits, response format.</li><li>A backup template exists if generation fails.</li></ul>' },
          { ic: '📌', h: 'Important notes', body: '<ul><li>Errors and failed generations are <strong>normal</strong>.</li><li>Safe personalisation is limited to theme, title, character or visual context — <strong>not to technical requirements</strong>.</li></ul>' },
          { ic: '🎯', h: 'Learning objectives', body: '<ul><li>The game runs in the preview with no critical errors and the character responds to controls.</li><li>The student distinguishes the 2 types of AI and names at least one safety rule for using them.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Tutor role', body: '<ul><li>Guide the minimum route: Kodland Sparks → functions of the two AIs → good prompt → generation → copy code → run.</li><li>Use the backup template <strong>without dramatising</strong> if something fails.</li></ul>' },
          { ic: '⚙️', h: 'Technical aspects', body: '<ul><li>Never share personal data or credentials with the tutor.</li><li>Always review the AI-generated result before accepting it.</li><li><strong>Homework:</strong> change one simple value in the code and know how to revert it if the game stops working.</li></ul>' }
        ]},
        { type: 'link', ic: '⚡', href: 'https://portfolio.kodland.org/feed', t: 'Kodland Sparks', d: 'Where the prototype is run and later published' }
      ]},
      { label: 'M1L2', cards: [
        { type: 'text', h: 'Lesson 2 — How the game is put together', ic: '🗂', p: 'The single-file prototype is split into <code>index.html</code>, <code>style.css</code> and <code>script.js</code>; the character\'s speed parameter is located and tuned.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Knowledge you need', open: true, body: '<ul><li>What each file contains: structure, styles, logic.</li><li>The dual role of AI here: the <strong>standard AI restructures</strong> the project, the <strong>AI Mentor</strong> helps understand the code and locate the right block.</li><li>The cycle <strong>predict → modify → check → conclude</strong>.</li></ul>' },
          { ic: '📌', h: 'Important notes', body: '<ul><li>The standard AI must <strong>not</strong> change the appearance or logic of the game, nor add external dependencies.</li><li>Do not go deep into HTML/CSS/JS theory or complex event handlers.</li></ul>' },
          { ic: '🎯', h: 'Learning objectives', body: '<ul><li>The project ends up split into 3 files and still works.</li><li>The student locates the speed parameter in <code>script.js</code>, chooses its value by experimentation, and explains how it influences movement.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Tutor role', body: '<ul><li>Let the student choose the final speed value — <strong>do not impose a "correct" one</strong>.</li><li>Verify the game still works after each important change.</li><li>Faced with an error, <strong>compare the modified line with the original</strong> before giving the answer.</li></ul>' },
          { ic: '⚙️', h: 'Technical aspects', body: '<ul><li>Check CSS and JavaScript are correctly linked after the split.</li><li>Expected structure: <code>index.html</code> (structure/links), <code>style.css</code> (design), <code>script.js</code> (movement and logic).</li></ul>' }
        ]}
      ]},
      { label: 'M1L3', cards: [
        { type: 'text', h: 'Lesson 3 — Visual customisation of the game', ic: '🎨', p: 'The default graphics (character, background) are replaced by the student\'s own AI-generated resources, without rewriting the base code.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Knowledge you need', open: true, body: '<ul><li>How to structure a complete prompt: <strong>objective + enough context + permitted changes + restrictions + a request for explanation</strong>.</li><li>How to help locate where a visual resource connects in the code without analysing the whole file.</li></ul>' },
          { ic: '📌', h: 'Important notes', body: '<ul><li>Beware the AI performing an <strong>unwanted complete rewrite</strong> — always compare before/after versions.</li><li>Use the backup route <strong>only after 2 genuine attempts</strong> and one diagnostic hint.</li><li>Reinforce the ban on using personal photos or data as resources.</li></ul>' },
          { ic: '🎯', h: 'Learning objectives', body: '<ul><li>The new character and/or background is integrated and working, following the cycle <strong>one resource → one run → one observation</strong>.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Tutor role', body: '<ul><li><strong>Do not correct the full AI request in place of the student</strong> — ask one pointed question about what is missing.</li><li>Guide towards a <strong>single testable hypothesis at a time</strong>, never several simultaneous changes.</li></ul>' },
          { ic: '⚙️', h: 'Technical aspects', body: '<ul><li>Organise a functional review with a verification list before moving on.</li><li>On an error, return to the last working version and find the <strong>first difference</strong> — do not fix everything at once.</li></ul>' }
        ]}
      ]},
      { label: 'M1L4', cards: [
        { type: 'text', h: 'Lesson 4 — Game logic and peer feedback', ic: '🧠', p: 'Last lesson of the module. A logic mechanic of the student\'s own (event → condition → reaction) is added with the help of the <strong>AI Mentor exclusively</strong>, the project is published, and structured feedback is given to peers.' },
        { type: 'acc', items: [
          { ic: '📚', h: 'Knowledge you need', open: true, body: '<ul><li>The <strong>event → condition → reaction</strong> model.</li><li>How the student should formulate their query to the AI Mentor: <strong>objective + current behaviour + a request for a hint</strong> — the Mentor does not hand over the final code.</li><li>The 3-field feedback structure (overall impression, strong point, improvement) with a character limit.</li></ul>' },
          { ic: '📌', h: 'Important notes', body: '<ul><li><strong>One stable mechanic is preferable to two incomplete ones.</strong></li><li>If the project was already unstable at the start of the class, go straight to the backup template.</li><li>Reinforce the rules of respectful reactions and subscriptions between classmates.</li></ul>' },
          { ic: '🎯', h: 'Learning objectives', body: '<ul><li>The new mechanic works stably and is published.</li><li>The student gives and receives specific feedback on at least <strong>2 classmates\' projects</strong>.</li></ul>' },
          { ic: '🧑‍🏫', h: 'Tutor role', body: '<ul><li>Keep the cycle <strong>change → run → compare → diagnose → correct</strong> throughout the whole practice.</li><li>Close by recalling the complete module route (prototype → understanding how it works → visual customisation → game logic → launch) and briefly announce the next module <strong>without detail</strong>.</li></ul>' },
          { ic: '⚙️', h: 'Technical aspects', body: '<ul><li>This lesson uses the <strong>AI Mentor exclusively</strong>, not the conventional AI.</li><li>Feedback fields have a limit of <strong>180 characters each</strong>.</li></ul>' }
        ]}
      ]}
    ]},
    { type: 'divider' },
    { type: 'h', ic: '🔍', t: 'Review the lessons before the DST' },
    { type: 'text', p: 'Before you take the DST, open the course in Back Office and read through the four lessons at your own pace — the activity cards and the teacher notes are all there. Nothing here is timed, so take as long as you need.' },
    { type: 'link', ic: '📘', href: 'https://bo.kodland.org/courses/2059', t: 'Open the course in Back Office', d: '[2059] Coding Lab — go straight to the lesson and its teacher notes — click here to review each lesson before taking the DST' }
  ]
}
]
};
