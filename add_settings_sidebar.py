import re

SIDEBAR_OLD = '</a>\n                <a href="support.html">Support Chat</a>\n            </aside>'
SIDEBAR_NEW = '''</a>
                <a href="support.html">Support Chat</a>
                <a href="settings.html">Settings</a>
                <div style="height:1px;background:rgba(0,0,0,0.08);margin:8px 0;"></div>
                <div style="color:#e53e3e;cursor:pointer;padding:12px 16px;border-radius:4px;font-size:0.92rem;font-weight:500;" onclick="logoutUser()" onmouseover="this.style.background=\'rgba(229,62,62,0.08)\'" onmouseout="this.style.background=\'\'">Logout</div>
            </aside>'''

LOGOUT_FN = '''
        function logoutUser() {
            if (!confirm("Are you sure you want to logout?")) return;
            const usersData = JSON.parse(localStorage.getItem("1268_users")) || {};
            delete usersData.current;
            localStorage.setItem("1268_users", JSON.stringify(usersData));
            localStorage.removeItem("1268_remember");
            if (typeof showToast === "function") showToast("Logged out successfully!");
            setTimeout(() => { window.location.href = "login.html"; }, 1200);
        }
'''

files = [
    "s:/STAY SAFE/dashboard.html",
    "s:/STAY SAFE/transactions.html",
    "s:/STAY SAFE/matches.html",
    "s:/STAY SAFE/support.html",
]

for fpath in files:
    try:
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        # Fix sidebar - handle both \r\n and \n line endings
        normalized = content.replace("\r\n", "\n")
        
        old_sidebar_pattern = r'(<a href="support\.html"[^>]*>Support Chat</a>\s*)\n(\s*</aside>)'
        new_sidebar_replace = r'<a href="support.html">Support Chat</a>\n                <a href="settings.html">Settings</a>\n                <div style="height:1px;background:rgba(0,0,0,0.08);margin:8px 0;"></div>\n                <div style="color:#e53e3e;cursor:pointer;padding:12px 16px;border-radius:4px;font-size:0.92rem;font-weight:500;" onclick="logoutUser()">Logout</div>\n            </aside>'
        
        normalized = re.sub(old_sidebar_pattern, new_sidebar_replace, normalized)
        
        # Add logoutUser function before </script> if not present
        if "logoutUser" not in normalized:
            normalized = normalized.replace("</script>", LOGOUT_FN + "    </script>", 1)

        with open(fpath, "w", encoding="utf-8") as f:
            f.write(normalized)
        print(f"Updated: {fpath}")
    except Exception as ex:
        print(f"Error on {fpath}: {ex}")

print("All done!")
