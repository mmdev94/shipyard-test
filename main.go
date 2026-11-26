package main

import (
	"os"
	"fmt"
	"net/http"
	"runtime"
	"time"
)

const page = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Go on ms.computer</title>
<style>body{font:16px/1.6 system-ui,sans-serif;max-width:640px;margin:12vh auto;padding:0 20px;color:#14101e}h1{font-size:2.2rem;line-height:1.1;margin:0 0 .4em}code{background:#f4f1fb;padding:.1em .35em;border-radius:4px}.tag{display:inline-block;background:#8f63ff;color:#fff;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:2px 8px;border-radius:4px}a{color:#7d4ff0}</style></head>
<body><span class="tag">Shipyard demo</span><h1>A Go server, live on ms.computer.</h1>
<p>This page is rendered by the server on every request — the server time is <strong>%s</strong> (UTC), from %s.</p>
<p>Deployed by a GitHub Action that <a href="https://shipyard-h0413.ms.computer">Shipyard</a> wrote: every push to the <code>go</code> branch of <a href="https://github.com/mmdev94/shipyard-test">mmdev94/shipyard-test</a> goes live by itself.</p></body></html>`

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" {
			http.NotFound(w, r)
			return
		}
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		fmt.Fprintf(w, page, time.Now().UTC().Format("2006-01-02 15:04:05"), runtime.Version())
	})
	http.ListenAndServe(":"+envPort(), nil)
}

// envPort is the port ms.computer gives the app in $PORT (8080 when run locally).
func envPort() string {
	if p := os.Getenv("PORT"); p != "" {
		return p
	}
	return "8080"
}
