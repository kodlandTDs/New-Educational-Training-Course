# PB Courses — Tutor Training (New Educational Model)

Static training site for the four Kodland courses that follow the new educational
model. Built to match the look and behaviour of the Graphic Design tutor training,
with one addition: **tutors sign in with their e-mail**, and the course modules
they see are decided by that e-mail.

Live structure:

```
index.html            language picker (English / Español)
en.html               English training
es.html               Spanish training
training.tpl.html     template both language files are generated from
assets/
  styles.css          design system (Kodland lime/pink) + components
  app.js              engine: login, dashboard, gating, quizzes, certificate
  tutors.js           AUTO-GENERATED e-mail → course map (hashed)
  content-en.js       all English copy, modules, lessons and quiz questions
  content-es.js       all Spanish copy, modules, lessons and quiz questions
images/               teacher-notes and Submit-button screenshots
video/                Follow Mode walkthrough (see video/README.md)
dst/
  manual/*.txt          copy-paste sheets for building each Form by hand
  DST-<code>-<lang>.md  the same DSTs as readable documents, for review
tools/
  generate_tutors.py    regenerate tutors.js from the assignment spreadsheet
  dst_data.py           the DST questions — the single source of truth
  build_dst_manual.py   regenerates dst/manual/*.txt
  build_dst.py          regenerates dst/*.md and create-dst-forms.gs
  create-dst-forms.gs   optional Apps Script that builds all 8 Forms in one run
```

No build step, no framework, no backend. Drop the folder on GitHub Pages,
Netlify, or any static host — or just open `index.html` from disk.

## Publishing to GitHub Pages

Push this folder to a repository, then Settings → Pages → Source: *Deploy from a
branch*, branch `main`, folder `/ (root)`. The site appears at
`https://<user>.github.io/<repo>/` within a minute or two.

`.nojekyll` is already here — it stops GitHub running the files through Jekyll,
which is what usually breaks a plain static site on first deploy. Everything
uses relative paths, so the site works from any sub-path without changes.

**Dev mode:** press `Shift+D` three times quickly on any training page. It signs
you in with all four courses and marks every module passed, so you can inspect
any screen without working through the checks. Three more presses switches it
off and clears the progress it created. A pink badge in the corner shows when it
is on.

---

## How the training is organised

**Core training** — everyone completes these four, in order:

| # | Module | Check |
|---|--------|-------|
| 1 | All about the new model | 5 questions |
| 2 | Pedagogy and tutor mindset | 5 questions |
| 3 | Lesson structure | 5 questions |
| 4 | Introduction to prompts for tutors | 5 questions |

Each check mixes four question formats — multiple choice, select-all, matching
and a written answer — and the questions are case-based: a real classroom
situation, then a decision to make.

Module 4 is the AI module. These courses ask little of a tutor in terms of new
subject knowledge; prompting is the one genuinely new skill, so it gets its own
module — practical only, no technical theory.

**Course training** — only the courses linked to the tutor's e-mail appear, and
only after all four core modules are passed:

| Code | Course | Age | Lesson | Back Office |
|------|--------|-----|--------|-------------|
| 2058 | Digital Creativity Level 2 | 10–12 | 60 min | [link](https://bo.kodland.org/courses/2058/?tab=2&lessonId=41764) |
| 2059 | Coding Lab | 12–17 | 90 min | [link](https://bo.kodland.org/courses/2059) |
| 2060 | GameDev Creator Lab | 10–12 | 90 min | [link](https://bo.kodland.org/courses/2060) |
| 2063 | Creator Lab: Games, AI | 8–9 | 60 min | [link](https://bo.kodland.org/courses/2063?tab=2&lessonId=41776) |

Course modules have **no in-app quiz** — they end with a **Final DST** card, so
there is only one assessment per course rather than two. A "I have finished
reading this module" link marks the module complete while the DST link is still
pending, and those modules show `✓ Reviewed` on the dashboard instead of a score.

Each course module ends with a link into Back Office, placed deliberately at the
bottom so a tutor can re-read the four lessons at their own pace right before
taking the DST. Lesson tabs are labelled `M1L1`–`M1L4` so the numbering matches
the platform.

Each course has its **own** DST — there is no general one, because the whole
point is the first 4 lessons of that specific course. See `dst/`.

Pass mark for the core-module checks is **70%**.

## How progress is stored

In `localStorage`, in the tutor's own browser, under
`kl-pb-<lang>-p-<hash-of-email>`. Three consequences worth knowing:

- **There is no server record.** Nothing about a tutor's progress exists anywhere
  except the browser they used. You cannot reset someone's progress for them, and
  they cannot pick up where they left off on a different computer.
- **Progress is per e-mail and per language.** Signing in as a different tutor in
  the same browser gives a clean slate; switching language starts that language
  fresh.
- **Scores are sticky** — a retake can raise a score but never lower it.

Anyone with progress sees a **"Reset my progress and start again"** link under the
module grid, which clears their own record for that language after a confirm.
Dev mode keeps its progress under its own key, so turning it on never touches a
real account.

---

## Things you will want to change

### 1. Add the DST links

There are two kinds, both empty by default:

**The overall Final DST** — content is written and ready in `dst/DST-final.md`
(12 scored questions + 3 ratings + 1 open feedback). Run
`tools/create-dst-form.gs` in Google Apps Script to build the Form in one click,
then paste the live URL into the top-level `finalDst.url` of both content files.

**The four course DSTs** — each course module has its own empty `finalDst.url`,
for the per-course DSTs. Fill them in the same way.

```js
// assets/content-en.js  (and content-es.js)
finalDst: { url: 'https://docs.google.com/forms/d/e/XXXX/viewform', desc: '…' },
```

### 2. The Follow Mode video

Already wired up — it plays from YouTube (`HDWga8ZROik`) as a lightweight
thumbnail card in core module 1. To swap it for a different video, or to
self-host an MP4 instead, see `video/README.md`.

### 3. Update the tutor list

`assets/tutors.js` is generated, not hand-written. Export the assignment sheet
as CSV (it needs the `e-mail` and `New Courses` columns) and run:

```bash
python3 tools/generate_tutors.py tutors.csv > assets/tutors.js
```

E-mails are stored as hashes, not plain text, so the address list cannot be
scraped from the published page. Course assignments are stored as a bitmask:

| Bit | Course |
|-----|--------|
| 1 | [2058] Digital Creativity Level 2 |
| 2 | [2059] Coding Lab |
| 4 | [2060] GameDev Creator Lab |
| 8 | [2063] Creator Lab: Games, AI |

So `6` = Coding Lab + GameDev, `15` = all four.

The generated file also carries a few admin accounts with all four courses
unlocked, for testing. Keep or remove them as you prefer.

### 4. Edit the copy

Everything a tutor reads lives in `assets/content-en.js` / `content-es.js`.
`app.js` never contains copy. Cards are plain objects:

```js
{ type: 'tip',  t: 'Some advice.' }
{ type: 'warn', t: 'Something to be careful about.' }
{ type: 'good', t: 'Something reassuring.' }
{ type: 'text', h: 'Heading', ic: '🎯', p: 'A paragraph.' }
{ type: 'list', h: 'Heading', items: ['one', 'two'], ordered: true }
{ type: 'iclist', h: 'Heading', items: [{ ic: '⏱', t: 'With an icon.' }] }
{ type: 'acc',  items: [{ ic: '📚', h: 'Section', body: '<p>HTML</p>', open: true }] }
{ type: 'tabs', tabs: [{ label: '1 · Name', cards: [ /* nested cards */ ] }] }
{ type: 'ba',   beforeLbl: 'Before', before: '…', afterLbl: 'Now', after: '…' }
{ type: 'flow', steps: [{ ic: '🎯', t: 'Objective' }] }
{ type: 'steps', items: [{ h: 'Step', p: 'What to do.' }] }
{ type: 'table', head: [...], rows: [[...]] }
{ type: 'check', h: 'Checklist', items: ['…'] }
{ type: 'link', ic: '📘', href: '…', t: 'Title', d: 'Description' }
{ type: 'img',  src: 'images/x.png', alt: '…', cap: 'Caption' }
{ type: 'video', h: '…', src: 'video/x.mp4' }   // or { yt: 'VIDEO_ID' }
{ type: 'quote', t: '"…"', src: 'Attribution' }
{ type: 'h', ic: '🔍', t: 'Section heading' }
{ type: 'divider' }
```

### Question formats

Every question can carry an optional `ctx` — the scenario shown in a bordered box
above the question — and a `fb` explanation shown after answering.

```js
// single correct option; c is the index of the right answer
{ type: 'mcq', ctx: 'A tutor tells you…', q: 'What do you reply?',
  opts: ['A', 'B', 'C', 'D'], c: 1, fb: 'Why B is right.' }

// several correct options; c is an array of indexes, exact match required
{ type: 'multi', q: 'Select all that apply.',
  opts: ['A', 'B', 'C', 'D'], c: [0, 2], fb: 'Why A and C.' }

// matching; each row gets a dropdown of every r value, shuffled
{ type: 'match', q: 'Match each course to its test.',
  pairs: [{ l: 'Coding Lab', r: 'Ambition test' }], fb: 'Explanation.' }

// written answer; min characters, then a model answer is revealed
{ type: 'open', q: 'Write what you would say.', min: 180,
  model: '<ul><li>A good answer covers…</li></ul>', fb: 'Compare with the model.' }
```

Question order, option order and matching rows are shuffled on every attempt, so
nothing is predictable across retakes. Written answers always score a point —
they exist for reflection, not for grading, and the model answer is the feedback.

### 5. Regenerate the language files after editing the template

`en.html` and `es.html` are generated from `training.tpl.html`. If you edit the
template, regenerate them — or just edit the two HTML files directly, they are
small.

---

## Adding another language

1. Copy `assets/content-en.js` to `assets/content-<lang>.js` and translate it.
   Keep every `id`, `bit` and `type` exactly the same.
2. Copy `en.html` to `<lang>.html` and change `content-en.js` to your new file,
   plus the `<html lang>` attribute and the `<title>`.
3. Add a card to `index.html` and a chip to the login screen of each language.

Progress is namespaced per language (`kl-pb-en-progress`, `kl-pb-es-progress`),
so a tutor who switches language starts that language fresh. Tell them to pick
one and stay with it.

---

## Notes and limits

- **Progress is per browser.** There is no backend, so a tutor who changes
  computer or clears site data starts over. The login is a gate for showing the
  right modules — it is not authentication and does not protect anything.
- **The e-mail hash is obfuscation, not security.** It stops casual scraping of
  the address list; it is not encryption.
- The site works offline except for Google Fonts, which fall back to system
  fonts cleanly.
- Tested in Chromium at 1280px and 390px, light and dark.
