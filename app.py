import datetime
import platform

from flask import Flask

app = Flask(__name__)

PAGE = """<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Flask on ms.computer</title>
<style>body{{font:16px/1.6 system-ui,sans-serif;max-width:640px;margin:12vh auto;padding:0 20px;color:#14101e}}h1{{font-size:2.2rem;line-height:1.1;margin:0 0 .4em}}code{{background:#f4f1fb;padding:.1em .35em;border-radius:4px}}.tag{{display:inline-block;background:#8f63ff;color:#fff;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:2px 8px;border-radius:4px}}a{{color:#7d4ff0}}</style></head>
<body><span class="tag">Shipyard demo</span><h1>A Flask server, live on ms.computer.</h1>
<p>This page is rendered by the server on every request — the server time is <strong>{now}</strong> (UTC), from Python {python}.</p>
<p>Deployed by a GitHub Action that <a href="https://shipyard-h0413.ms.computer">Shipyard</a> wrote: every push to the <code>flask</code> branch of <a href="https://github.com/mmdev94/shipyard-test">mmdev94/shipyard-test</a> goes live by itself.</p><p><small>Version 2 — this line arrived with a second push, at the same address.</small></p></body></html>"""


@app.get("/")
def home():
    now = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d %H:%M:%S")
    return PAGE.format(now=now, python=platform.python_version())


if __name__ == "__main__":
    app.run(port=5000)
