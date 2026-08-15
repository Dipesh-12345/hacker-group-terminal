

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://127.0.0.1:3000`.

## Pages

- `/` terminal index
- `/about`
- `/members`
- `/textfiles`
- `/apps`
- `/hacktivism`
- `/source`
- `/manifesto`
- `/outreach`
- `/movies`
- `/tunes`
- `/contact`

## Backend

The member registry uses:

- `GET /api/members`
- `POST /api/members`

Local member data is stored in `data/members.json`.

For production hosting where the filesystem is read-only, replace `lib/members.ts` with a database adapter.
