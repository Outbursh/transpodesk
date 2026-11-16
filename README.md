# TranspoDesk

Event transport dispatch: auto-assigns vehicles and drivers to trip requests, with a live board, driver app, and Google Calendar-style schedule. Built on Google Sheets + Apps Script.

This repository is the public short-link site (hosted on Vercel):

| Link | Opens |
|---|---|
| `/` | Home page with links for the current event |
| `/driver/` | Driver app: own trips, status buttons, tentative all-trips view |
| `/board/` | Live board for the committee desk |
| `/admin/` | Admin: calendar, trips editor, fleet editor, auto-assign |

Each page shows the Apps Script web app inside a `credentialless` iframe, so it opens even when several Google accounts are signed in to the browser (Apps Script web apps otherwise fail with "page not found" in that case).

## Reusing for another event
1. Copy the event's Google Sheet and Apps Script project, deploy the copy as a web app.
2. Replace the `/exec` URL in `admin/`, `driver/` and `board/index.html`, and the event name on `index.html`.
3. Push to `main`; Vercel publishes automatically.
