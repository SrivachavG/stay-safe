import os
import re

for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()

        # Remove "Srivachav" and the <br/>
        content = content.replace('<span class="brand-name-sub">Srivachav</span><br/>STAY SAFE', 'STAY SAFE')
        content = content.replace('<span class="brand-name-sub" style="color: rgba(255,255,255,0.7);">Srivachav</span><br/>STAY SAFE', 'STAY SAFE')
        
        # Remove voice mic from index.html (and any others)
        content = re.sub(r'<button class="voice-search".*?</button>', '', content, flags=re.DOTALL)

        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)

print('Cleanup done')
