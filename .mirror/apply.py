"""Rebuild this repository from a fresh download of the uWeed Design System.

Usage: python3 -I .mirror/apply.py <repo> <downloaded project dir> <assets dir>

<downloaded project dir> holds the design system's published files with the
"project/" prefix removed (README.md, tokens.css, components/...).
<assets dir> holds the asset-store files, each named <asset id>.<ext>.

Everything in the repository is replaced except .git, .mirror and the notes
files, which notes.py regenerates. Previews are re-rendered by render.js.
"""
import json
import os
import shutil
import sys

repo, src, assets = sys.argv[1], sys.argv[2], sys.argv[3]
KEEP = {'.git', '.mirror'}

if not os.path.exists(os.path.join(src, 'design-system.json')):
    sys.exit('design-system.json missing from the download; nothing changed')

for name in os.listdir(repo):
    if name in KEEP:
        continue
    path = os.path.join(repo, name)
    shutil.rmtree(path) if os.path.isdir(path) and not os.path.islink(path) else os.remove(path)

count = 0
for root, _, files in os.walk(src):
    for f in files:
        rel = os.path.relpath(os.path.join(root, f), src)
        dest = os.path.join(repo, rel)
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        shutil.copyfile(os.path.join(root, f), dest)
        count += 1

ds = json.load(open(os.path.join(src, 'design-system.json'), encoding='utf-8'))
have = {f.split('.')[0]: f for f in os.listdir(assets)}
missing = []
for group, spec in ds.get('assetGroups', {}).items():
    for name, rec in spec.get('files', {}).items():
        blob = rec.get('blob')
        if blob not in have:
            missing.append(group + '/' + name)
            continue
        os.makedirs(os.path.join(repo, 'assets', group), exist_ok=True)
        shutil.copyfile(os.path.join(assets, have[blob]), os.path.join(repo, 'assets', group, name))

print(json.dumps({'files': count, 'missing_assets': missing}))
if missing:
    sys.exit(2)
