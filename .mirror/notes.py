import json, os, re, sys

R = sys.argv[1]
ds = json.load(open(R + '/design-system.json'))
lc = ds.get('lastChange', {})

groups = {}
for c in sorted(os.listdir(R + '/components')):
    p = R + '/components/' + c + '/preview.html'
    if not os.path.exists(p):
        continue
    head = open(p, encoding='utf-8').read(400)
    m = re.search(r'group="([^"]+)"', head)
    s = re.search(r'subtitle="([^"]+)"', head)
    groups.setdefault(m.group(1) if m else 'Other', []).append((c, s.group(1) if s else ''))

order = ['Foundations', 'Core', 'Navigation', 'Forms', 'Disclosure', 'Feedback', 'Overlays', 'Commerce', 'Content', 'Chrome', 'Other']
lines = []
for g in order + [k for k in groups if k not in order]:
    if g not in groups:
        continue
    lines.append('\n### ' + g + '\n')
    for c, sub in groups[g]:
        lines.append('**[' + c + '](components/' + c + '/)**' + (' · ' + sub if sub else '') + '\n\n![' + c + '](previews/' + c + '.png)\n')
gallery = '\n'.join(lines)

meta = {
    'source': 'https://claude.ai/artifact/JyZjDAewAEusKwmN6LbvVH',
    'source_version': sys.argv[2],
    'last_change': lc,
    'mirrored_at': sys.argv[3],
    'files': int(sys.argv[4]),
    'assets': {g: len([f for f in os.listdir(R + '/assets/' + g) if f != 'README.md']) for g in ('Icons', 'Logos')},
}
json.dump(meta, open(R + '/.design-system-mirror.json', 'w'), indent=2, ensure_ascii=False)

mirror = """# About this repository

This repository is a read-only copy of the **uWeed Design System**, which lives in Claude Design:
{source}

The design system there is the master. This copy exists so that other tools and people can read it.
Never edit files here: a change made here is overwritten by the next copy. Change the design system,
and the copy follows.

Copied from version `{version}` on {date}. Last recorded change in the system: {at} ({by}). {note}

## What is where

Every file maps one to one to the design system, at the same path.

| Path | What it is |
| --- | --- |
| `README.md` | The design system's own guide: brand, colour, type, layout and component rules. Start here. |
| `tokens.css`, `tokens.json` | Every design token, as CSS custom properties and as data. |
| `components/bundle.css`, `components/bundle.js` | The built component library (React, global `UWeedDesignSystem_8df554`). `components/lib/` holds the React build it runs on. |
| `components/<Name>/` | Per component: `README.md` (when and how to use it), `<Name>.d.ts` (its props), `preview.html` (the live preview page). |
| `components/src/` | The component source (JSX). |
| `api/` | Generated reference: every token, every component's API, the asset lists. |
| `assets/Icons/`, `assets/Logos/` | The icon set (Tabler, MIT) and the approved logo kit, as files. |
| `ui_kits/uweed-shop/` | The shop prototype screens built from the components. |
| `design-system.json`, `manifest.json` | The design system's own index and build manifest. |
| `previews/` | A picture of every preview page, rendered for this copy so the components can be seen on GitHub. Not part of the design system. |
| `.mirror/` | The scripts the nightly copy runs (rebuild, render the pictures, write this file). Not part of the design system. |

The preview pages run inside Claude Design, which supplies the tokens, the bundle and React. Opened
straight from this repository they render blank; the pictures in `previews/` show what they look like.

## All components at a glance
{gallery}
""".format(source=meta['source'], version=meta['source_version'], date=meta['mirrored_at'],
           at=lc.get('at', ''), by=lc.get('by', ''), note=lc.get('note', ''), gallery=gallery)
open(R + '/MIRROR.md', 'w', encoding='utf-8').write(mirror)

open(R + '/CLAUDE.md', 'w', encoding='utf-8').write("""# uWeed Design System (read-only copy)

This repository is a copy of the uWeed Design System. The master lives in Claude Design; see `MIRROR.md`.

- Read `README.md` first: it holds the rules for colour, type, layout, icons and every component.
- Take every value from `tokens.css` / `tokens.json` and every component from `components/`. Do not invent values.
- Do not edit files in this repository. Changes belong in the design system and reach this copy from there.
""")
print(meta['assets'], len(groups))
