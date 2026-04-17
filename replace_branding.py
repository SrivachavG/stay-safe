import os
import re

for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()

        # Replace Nav Brand
        content = content.replace(
            '<a href="index.html" class="nav-brand">1268 Spaces</a>',
            '<a href="index.html" class="nav-brand"><span class="brand-name-sub">Srivachav</span><br/>STAY SAFE</a>'
        )
        content = content.replace(
            '<a href="index.html" class="nav-brand" style="color: white; -webkit-text-fill-color: initial;">1268 Spaces</a>',
            '<a href="index.html" class="nav-brand" style="color: white; -webkit-text-fill-color: initial;"><span class="brand-name-sub" style="color: rgba(255,255,255,0.7);">Srivachav</span><br/>STAY SAFE</a>'
        )

        # Replace standard text
        content = content.replace('1268 Spaces', 'STAY SAFE')
        content = content.replace('Srivachav Project 1268', 'Srivachav STAY SAFE')

        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)

print("Branding replaced")
