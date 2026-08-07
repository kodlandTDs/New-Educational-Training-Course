#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates copy-paste sheets for building the DST Google Forms **by hand**.

    python3 tools/build_dst_manual.py

Writes dst/manual/DST-<code>-<lang>.txt — plain text, no markdown, laid out so
each block can be selected and pasted straight into Google Forms. The four
option lines sit together with nothing around them, because pasting a
multi-line block into the first option box makes Forms split it into separate
options automatically.

Content comes from tools/dst_data.py, same as everything else.
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
RULE = '=' * 74
THIN = '-' * 74

STEPS = {
    'en': [
        'Go to forms.google.com and start a Blank form.',
        'Paste the TITLE below into the form title, and the DESCRIPTION under it.',
        'Open Settings (gear icon):',
        '   - turn ON "Make this a quiz"',
        '   - Release grade: "Immediately after each submission"',
        '   - Respondent can see: tick "Missed questions", "Correct answers", "Point values"',
        '   - under Responses, turn ON "Collect email addresses"',
        '   - turn OFF "Allow response editing" and the link to submit another response',
        'Add the 2 identification questions from SECTION 1 (both Short answer, Required).',
        '   On the e-mail question use the three-dot menu > Response validation > Text > Email.',
        'Add a section break, title it with the SECTION 2 heading.',
        'For each of the 12 questions:',
        '   - add a Multiple choice question, Required',
        '   - paste the QUESTION line into the question title',
        '   - click Option 1, then paste all four OPTION lines at once — Forms splits them',
        '   - click "Answer key", select the correct option, set 1 point',
        '   - click "Add answer feedback" and paste FEEDBACK into both boxes, correct and incorrect',
        'Add a section break, title it with the SECTION 3 heading.',
        'Add the 3 rating questions as "Linear scale", 1 to 5, with the labels given, Required.',
        'Add the last question as "Paragraph", Required, with the help text given.',
        'Send > copy the link, and paste it into finalDst.url for this course.',
    ],
    'es': [
        'Entra a forms.google.com y crea un formulario en blanco.',
        'Pega el TITULO de abajo en el titulo del formulario, y la DESCRIPCION debajo.',
        'Abre Configuracion (icono de engranaje):',
        '   - activa "Convertir en cuestionario"',
        '   - Publicar calificacion: "Inmediatamente despues de cada envio"',
        '   - El encuestado puede ver: marca "Preguntas incorrectas", "Respuestas correctas", "Puntuacion"',
        '   - en Respuestas, activa "Recopilar direcciones de correo electronico"',
        '   - desactiva "Permitir editar la respuesta" y el enlace para enviar otra respuesta',
        'Agrega las 2 preguntas de identificacion de la SECCION 1 (ambas Respuesta corta, Obligatoria).',
        '   En la del correo usa el menu de tres puntos > Validacion de respuestas > Texto > Direccion de correo.',
        'Agrega un salto de seccion y ponle el titulo de la SECCION 2.',
        'Para cada una de las 12 preguntas:',
        '   - agrega una pregunta de Opcion multiple, Obligatoria',
        '   - pega la linea PREGUNTA en el titulo de la pregunta',
        '   - haz clic en Opcion 1 y pega las cuatro lineas de OPCIONES de una vez — Forms las separa',
        '   - haz clic en "Clave de respuestas", marca la correcta y pon 1 punto',
        '   - haz clic en "Agregar comentarios" y pega RETROALIMENTACION en ambas cajas, correcta e incorrecta',
        'Agrega un salto de seccion y ponle el titulo de la SECCION 3.',
        'Agrega las 3 preguntas de valoracion como "Escala lineal", de 1 a 5, con las etiquetas dadas, Obligatorias.',
        'Agrega la ultima pregunta como "Parrafo", Obligatoria, con el texto de ayuda indicado.',
        'Enviar > copia el enlace y pegalo en finalDst.url de este curso.',
    ],
}

LBL = {
    'en': dict(howto='HOW TO BUILD THIS FORM BY HAND', title='TITLE  (copy this line)',
               desc='DESCRIPTION  (copy this block)', s1='SECTION 1 — IDENTIFICATION',
               s2='SECTION 2 — KNOWLEDGE CHECK', s3='SECTION 3 — FEEDBACK ON THIS MODULE',
               s2help='Section description', q='QUESTION  (copy this line)',
               opts='OPTIONS  (select all 4 lines and paste into the first option box)',
               fb='FEEDBACK  (paste into both the correct and incorrect boxes)',
               correct='correct answer', key='ANSWER KEY — quick reference',
               shortq='Short answer, Required', paraq='Paragraph, Required',
               scaleq='Linear scale 1-5, Required', helptext='Help text',
               validation='Response validation: Text > Email',
               settings='Quiz settings: 1 point per question, 12 points total, pass mark 9/12',
               nothing='Nothing else on this page is typed into the form — it is guidance for you.'),
    'es': dict(howto='COMO CONSTRUIR ESTE FORMULARIO A MANO', title='TITULO  (copia esta linea)',
               desc='DESCRIPCION  (copia este bloque)', s1='SECCION 1 — IDENTIFICACION',
               s2='SECCION 2 — EVALUACION DE CONOCIMIENTO', s3='SECCION 3 — FEEDBACK SOBRE ESTE MODULO',
               s2help='Descripcion de la seccion', q='PREGUNTA  (copia esta linea)',
               opts='OPCIONES  (selecciona las 4 lineas y pegalas en la primera caja de opcion)',
               fb='RETROALIMENTACION  (pegala en la caja de correcta y en la de incorrecta)',
               correct='respuesta correcta', key='CLAVE DE RESPUESTAS — referencia rapida',
               shortq='Respuesta corta, Obligatoria', paraq='Parrafo, Obligatoria',
               scaleq='Escala lineal 1-5, Obligatoria', helptext='Texto de ayuda',
               validation='Validacion de respuestas: Texto > Direccion de correo',
               settings='Cuestionario: 1 punto por pregunta, 12 puntos en total, aprueba con 9/12',
               nothing='Nada mas de esta pagina se escribe en el formulario — es guia para ti.'),
}


def build(code, lang):
    L = LBL[lang]
    name = D.META[code]['name_%s' % lang]
    meta = D.META[code]
    qs = D.QUESTIONS[code][lang]
    ident = D.IDENT[lang]
    sec = D.SECTIONS[lang]
    o = []

    o.append(RULE)
    o.append('  %s' % D.TITLE[lang].format(code=code, name=name).upper())
    o.append('  %s · %s · %s' % (meta['age'], meta['len'],
                                 'English' if lang == 'en' else 'Espanol'))
    o.append(RULE)
    o.append('')
    o.append(L['nothing'])
    o.append('')
    o.append(THIN)
    o.append(L['howto'])
    o.append(THIN)
    step = 0
    for s in STEPS[lang]:
        if s.startswith('   '):
            o.append('    %s' % s.strip())
        else:
            step += 1
            o.append('%2d. %s' % (step, s))
    o.append('')
    o.append('    %s' % L['settings'])
    o.append('')
    o.append('')

    o.append(RULE)
    o.append(L['title'])
    o.append(RULE)
    o.append(D.TITLE[lang].format(code=code, name=name))
    o.append('')
    o.append(RULE)
    o.append(L['desc'])
    o.append(RULE)
    o.append(D.DESC[lang].format(name=name))
    o.append('')
    o.append('')

    o.append(RULE)
    o.append(L['s1'])
    o.append(RULE)
    o.append('')
    o.append('Q1  ·  %s' % L['shortq'])
    o.append(ident['name'])
    o.append('')
    o.append('Q2  ·  %s  ·  %s' % (L['shortq'], L['validation']))
    o.append(ident['email'])
    o.append('')
    o.append('%s:' % L['helptext'])
    o.append(ident['email_help'])
    o.append('')
    o.append('')

    o.append(RULE)
    o.append(L['s2'])
    o.append(RULE)
    o.append('%s:' % ('Section title' if lang=='en' else 'Titulo de la seccion'))
    o.append(sec['quiz'])
    o.append('')
    o.append('%s:' % L['s2help'])
    o.append(sec['quiz_help'])
    o.append('')

    for i, (q, opts, c, fb) in enumerate(qs, start=1):
        o.append('')
        o.append(THIN)
        o.append('Q%-2d  ·  %s: %s' % (i, L['correct'], LETTERS[c]))
        o.append(THIN)
        o.append('')
        o.append('%s' % L['q'])
        o.append('%d. %s' % (i, q))
        o.append('')
        o.append('%s' % L['opts'])
        for op in opts:
            o.append(op)
        o.append('')
        o.append('%s' % L['fb'])
        o.append(fb)
        o.append('')

    o.append('')
    o.append(RULE)
    o.append(L['s3'])
    o.append(RULE)
    o.append('%s:' % ('Section title' if lang=='en' else 'Titulo de la seccion'))
    o.append(sec['fb'])
    o.append('')
    o.append('%s:' % L['s2help'])
    o.append(sec['fb_help'])
    o.append('')

    for k, (t, lo, hi) in enumerate(D.RATINGS[lang], start=13):
        o.append('')
        o.append('Q%-2d  ·  %s' % (k, L['scaleq']))
        o.append(t.format(name=name))
        o.append('    1 = %s' % lo)
        o.append('    5 = %s' % hi)

    ot, oh = D.OPEN[lang]
    o.append('')
    o.append('Q16  ·  %s' % L['paraq'])
    o.append(ot.format(name=name))
    o.append('')
    o.append('%s:' % L['helptext'])
    o.append(oh)
    o.append('')
    o.append('')

    o.append(RULE)
    o.append(L['key'])
    o.append(RULE)
    row = []
    for i, (q, opts, c, fb) in enumerate(qs, start=1):
        row.append('Q%-2d %s' % (i, LETTERS[c]))
    for i in range(0, len(row), 6):
        o.append('   ' + '    '.join(row[i:i + 6]))
    o.append('')
    return '\n'.join(o) + '\n'


def main():
    out_dir = os.path.join(ROOT, 'dst', 'manual')
    if not os.path.isdir(out_dir):
        os.makedirs(out_dir)
    n = 0
    for code in ORDER:
        for lang in LANGS:
            path = os.path.join(out_dir, 'DST-%s-%s.txt' % (code, lang))
            with open(path, 'w', encoding='utf-8') as f:
                f.write(build(code, lang))
            print('wrote', os.path.relpath(path, ROOT))
            n += 1
    print('%d copy-paste sheets' % n)


if __name__ == '__main__':
    main()
