#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates the DST deliverables from tools/dst_data.py.

    python3 tools/build_dst.py

Writes:
    dst/DST-<code>-<lang>.md      one per course per language (8 files)
    tools/create-dst-forms.gs     Apps Script that builds all 8 forms in one run

Everything downstream comes from dst_data.py, so the documents and the script
can never drift apart.
"""
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)

import dst_data as D  # noqa: E402

LANGS = ['en', 'es']
ORDER = ['2058', '2063', '2060', '2059']
LETTERS = 'ABCD'


def name_of(code, lang):
    return D.META[code]['name_%s' % lang]


def title_of(code, lang):
    return D.TITLE[lang].format(code=code, name=name_of(code, lang))


# ---------------------------------------------------------------- markdown
MD_LABELS = {
    'en': dict(settings='Suggested settings', ident='Section 1 — Identification',
               quiz='Section 2 — Knowledge check (12 questions, 1 point each)',
               fb='Section 3 — Feedback on this module (not scored)',
               fbnote='*Feedback:*', required='required', short='short answer',
               para='paragraph', scale='linear scale 1–5',
               settings_body=[
                   'Collect e-mail addresses: **on**',
                   'Make it a quiz: **on**, 1 point per scored question (12 points total)',
                   'Release grade: **immediately after each submission**',
                   'Show missed questions and correct answers: **on** (this is training, not an exam)',
                   'Pass mark: **10 / 12 (83%)** — Forms does not enforce this, so filter in the responses sheet',
                   'Feedback questions: **0 points**, and marked required',
               ]),
    'es': dict(settings='Configuración sugerida', ident='Sección 1 — Identificación',
               quiz='Sección 2 — Evaluación de conocimiento (12 preguntas, 1 punto cada una)',
               fb='Sección 3 — Feedback sobre este módulo (no se puntúa)',
               fbnote='*Feedback:*', required='obligatoria', short='respuesta corta',
               para='párrafo', scale='escala lineal 1–5',
               settings_body=[
                   'Recopilar direcciones de correo: **activado**',
                   'Convertir en cuestionario: **activado**, 1 punto por pregunta puntuada (12 puntos en total)',
                   'Publicar calificación: **inmediatamente después de cada envío**',
                   'Mostrar preguntas falladas y respuestas correctas: **activado** (esto es entrenamiento, no un examen)',
                   'Puntaje para aprobar: **10 / 12 (83%)** — Forms no lo aplica solo, así que filtra en la hoja de respuestas',
                   'Preguntas de feedback: **0 puntos**, y marcadas como obligatorias',
               ]),
}


def build_md(code, lang):
    L = MD_LABELS[lang]
    name = name_of(code, lang)
    meta = D.META[code]
    out = []
    out.append('# %s\n' % title_of(code, lang))
    out.append('%s · %s · %s\n' % (meta['age'], meta['len'],
                                   'English' if lang == 'en' else 'Español'))
    out.append('---\n')
    out.append('## %s\n' % ('Description shown to the tutor' if lang == 'en'
                            else 'Descripción que ve el tutor'))
    out.append('> %s\n' % D.DESC[lang].format(name=name).replace('\n\n', '\n>\n> '))
    out.append('---\n')
    out.append('## %s\n' % L['settings'])
    for b in L['settings_body']:
        out.append('- %s' % b)
    out.append('')
    out.append('---\n')

    ident = D.IDENT[lang]
    out.append('## %s\n' % L['ident'])
    out.append('**Q1 — %s** *(%s, %s)*\n' % (ident['name'], L['short'], L['required']))
    out.append('**Q2 — %s** *(%s, %s)*\n' % (ident['email'], L['short'], L['required']))
    out.append('> %s\n' % ident['email_help'])
    out.append('---\n')

    out.append('## %s\n' % L['quiz'])
    for i, (q, opts, c, fb) in enumerate(D.QUESTIONS[code][lang], start=1):
        out.append('### Q%d. %s\n' % (i, q))
        for j, o in enumerate(opts):
            mark = '**%s** ✅' % o if j == c else o
            out.append('- %s. %s' % (LETTERS[j], mark))
        out.append('')
        out.append('> %s %s\n' % (L['fbnote'], fb))
    out.append('---\n')

    out.append('## %s\n' % L['fb'])
    for k, (t, lo, hi) in enumerate(D.RATINGS[lang], start=13):
        out.append('**Q%d — %s** *(%s, %s)*' % (k, t.format(name=name), L['scale'], L['required']))
        out.append('`1 = %s` … `5 = %s`\n' % (lo, hi))
    ot, oh = D.OPEN[lang]
    out.append('**Q16 — %s** *(%s, %s)*\n' % (ot.format(name=name), L['para'], L['required']))
    out.append('> %s\n' % oh)
    return '\n'.join(out)


# ---------------------------------------------------------------- apps script
def js(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n') + "'"


def build_gs():
    L = []
    L.append('/**')
    L.append(' * Creates every final DST Google Form for the New Educational Model')
    L.append(' * tutor training: 4 courses x 2 languages = 8 forms.')
    L.append(' *')
    L.append(' * How to use')
    L.append(' *   1. Open https://script.google.com and create a new project.')
    L.append(' *   2. Replace the placeholder code with this file.')
    L.append(' *   3. Select createAllDstForms and press Run, then authorise.')
    L.append(' *      (It only creates Forms in your own Drive.)')
    L.append(' *   4. The execution log prints an edit URL and a live URL for each form.')
    L.append(' *   5. Paste each live URL into the matching course in')
    L.append(' *      assets/content-en.js / content-es.js -> finalDst.url')
    L.append(' *')
    L.append(' * To build only one form, run createOneDstForm() after setting')
    L.append(' * ONLY_CODE and ONLY_LANG below.')
    L.append(' *')
    L.append(' * AUTO-GENERATED by tools/build_dst.py from tools/dst_data.py.')
    L.append(' * Edit the data file and re-run the generator rather than editing this.')
    L.append(' */')
    L.append('')
    L.append("var ONLY_CODE = '2058';   // used by createOneDstForm()")
    L.append("var ONLY_LANG = 'en';     // 'en' or 'es'")
    L.append('')
    L.append('var LABELS = {')
    for lang in LANGS:
        s = D.SECTIONS[lang]
        i = D.IDENT[lang]
        L.append("  %s: {" % lang)
        L.append("    identSection: %s," % js(i['section']))
        L.append("    identHelp: %s," % js(i['help']))
        L.append("    name: %s," % js(i['name']))
        L.append("    email: %s," % js(i['email']))
        L.append("    emailHelp: %s," % js(i['email_help']))
        L.append("    quizSection: %s," % js(s['quiz']))
        L.append("    quizHelp: %s," % js(s['quiz_help']))
        L.append("    fbSection: %s," % js(s['fb']))
        L.append("    fbHelp: %s," % js(s['fb_help']))
        L.append("    confirm: %s," % js(s['confirm']))
        L.append("    correctPrefix: %s" % js('Correct. ' if lang == 'en' else 'Correcto. '))
        L.append("  }%s" % ('' if lang == LANGS[-1] else ','))
    L.append('};')
    L.append('')
    L.append('var FORMS = [')
    entries = []
    for code in ORDER:
        for lang in LANGS:
            name = name_of(code, lang)
            e = []
            e.append('  {')
            e.append("    code: '%s'," % code)
            e.append("    lang: '%s'," % lang)
            e.append('    title: %s,' % js(title_of(code, lang)))
            e.append('    description: %s,' % js(D.DESC[lang].format(name=name)))
            e.append('    questions: [')
            qs = []
            for (q, opts, c, fb) in D.QUESTIONS[code][lang]:
                qs.append('      [%s,\n       [%s], %d,\n       %s]' % (
                    js(q), ', '.join(js(o) for o in opts), c, js(fb)))
            e.append(',\n'.join(qs))
            e.append('    ],')
            e.append('    ratings: [')
            rs = ['      [%s, %s, %s]' % (js(t.format(name=name)), js(lo), js(hi))
                  for (t, lo, hi) in D.RATINGS[lang]]
            e.append(',\n'.join(rs))
            e.append('    ],')
            ot, oh = D.OPEN[lang]
            e.append('    open: [%s, %s]' % (js(ot.format(name=name)), js(oh)))
            e.append('  }')
            entries.append('\n'.join(e))
    L.append(',\n'.join(entries))
    L.append('];')
    L.append('')
    L.append(BODY)
    return '\n'.join(L)


BODY = r'''
/** Build every form. */
function createAllDstForms() {
  for (var i = 0; i < FORMS.length; i++) {
    buildForm(FORMS[i]);
  }
  Logger.log('Done — %s forms created.', FORMS.length);
}

/** Build just the one selected by ONLY_CODE / ONLY_LANG. */
function createOneDstForm() {
  for (var i = 0; i < FORMS.length; i++) {
    if (FORMS[i].code === ONLY_CODE && FORMS[i].lang === ONLY_LANG) {
      buildForm(FORMS[i]);
      return;
    }
  }
  Logger.log('No form matches code %s and language %s.', ONLY_CODE, ONLY_LANG);
}

function buildForm(spec) {
  var L = LABELS[spec.lang];
  var form = FormApp.create(spec.title);

  form.setTitle(spec.title)
      .setDescription(spec.description)
      .setIsQuiz(true)
      .setCollectEmail(true)
      .setProgressBar(true)
      .setShowLinkToRespondAgain(false)
      .setConfirmationMessage(L.confirm);

  /* --- identification --- */
  form.addSectionHeaderItem().setTitle(L.identSection).setHelpText(L.identHelp);
  form.addTextItem().setTitle(L.name).setRequired(true);

  var email = form.addTextItem().setTitle(L.email).setHelpText(L.emailHelp).setRequired(true);
  email.setValidation(
    FormApp.createTextValidation()
      .requireTextIsEmail()
      .setHelpText(L.emailHelp)
      .build());

  /* --- knowledge check --- */
  form.addPageBreakItem().setTitle(L.quizSection).setHelpText(L.quizHelp);

  for (var i = 0; i < spec.questions.length; i++) {
    var q = spec.questions[i];
    var item = form.addMultipleChoiceItem();
    var choices = [];
    for (var j = 0; j < q[1].length; j++) {
      choices.push(item.createChoice(q[1][j], j === q[2]));
    }
    item.setTitle((i + 1) + '. ' + q[0])
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true)
        .setFeedbackForCorrect(FormApp.createFeedback().setText(L.correctPrefix + q[3]).build())
        .setFeedbackForIncorrect(FormApp.createFeedback().setText(q[3]).build());
  }

  /* --- feedback --- */
  form.addPageBreakItem().setTitle(L.fbSection).setHelpText(L.fbHelp);

  for (var k = 0; k < spec.ratings.length; k++) {
    form.addScaleItem()
        .setTitle(spec.ratings[k][0])
        .setBounds(1, 5)
        .setLabels(spec.ratings[k][1], spec.ratings[k][2])
        .setRequired(true);
  }

  form.addParagraphTextItem()
      .setTitle(spec.open[0])
      .setHelpText(spec.open[1])
      .setRequired(true);

  Logger.log('[%s %s] edit: %s', spec.code, spec.lang, form.getEditUrl());
  Logger.log('[%s %s] live: %s', spec.code, spec.lang, form.getPublishedUrl());
  return form;
}
'''


def main():
    dst_dir = os.path.join(ROOT, 'dst')
    if not os.path.isdir(dst_dir):
        os.makedirs(dst_dir)

    written = []
    for code in ORDER:
        for lang in LANGS:
            path = os.path.join(dst_dir, 'DST-%s-%s.md' % (code, lang))
            with open(path, 'w', encoding='utf-8') as f:
                f.write(build_md(code, lang))
            written.append(os.path.relpath(path, ROOT))

    gs_path = os.path.join(HERE, 'create-dst-forms.gs')
    with open(gs_path, 'w', encoding='utf-8') as f:
        f.write(build_gs())
    written.append(os.path.relpath(gs_path, ROOT))

    total = sum(len(D.QUESTIONS[c][l]) for c in ORDER for l in LANGS)
    for w in written:
        print('wrote', w)
    print('%d forms, %d scored questions in total' % (len(ORDER) * len(LANGS), total))


if __name__ == '__main__':
    main()
