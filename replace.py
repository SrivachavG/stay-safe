import os
import re

replacements = {
    "🍔": "MENU",
    "🏠": "ESTATE",
    "👨": "MEN",
    "👩": "WOMEN",
    "⭐": "RATING ",
    "📍": "",
    "🛡️": "VERIFIED",
    "✅": "SUCCESS",
    "❌": "REMOVE",
    "👁️": "VIEW",
    "⏳": "URGENT",
    "❤️": "SAVE",
    "📄": "NO RECORDS",
    "📸": "UPLOAD",
    "⏱️": ""
}

for filename in os.listdir('.'):
    if filename.endswith('.html') or filename.endswith('.js'):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()

        for k, v in replacements.items():
            content = content.replace(k, v)

        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)

print("Done")
