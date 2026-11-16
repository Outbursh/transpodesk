# TranspoDesk

Event transport dispatch: auto-assigns vehicles and drivers to trip requests, with a live board, driver app, and Google Calendar-style schedule. Built on Google Sheets + Apps Script.

This repository is the public short-link site (hosted on Vercel). Every page opens the same Apps Script web app:

| Link | Opens |
|---|---|
| `/` | The organisation's events |
| `/org/` | Organisation admin: create and edit events, set each event's PINs |
| `/driver/?event=<id>` | Driver app for one event |
| `/board/?event=<id>` | Live board for one event |
| `/admin/?event=<id>` | Admin for one event: calendar, trips, fleet, auto-assign |

Events are created on the Organisation page, so this site never needs editing for a new event.
Each page shows the app inside a `credentialless` iframe, so it opens even when several Google
accounts are signed in to the browser (Apps Script web apps otherwise fail in that case).
