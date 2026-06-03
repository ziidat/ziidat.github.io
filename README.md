# Portfolio Profesional

Template portfolio statis dengan **Astro 6** + **Tailwind CSS 4**, siap di-deploy ke **GitHub Pages**.

## Fitur

- Desain gelap modern dengan tipografi Syne & DM Sans
- Responsif (mobile-first) dengan menu navigasi mobile
- Section: Hero, Tentang, Keahlian, Proyek, Pengalaman, Kontak
- SEO dasar (meta, Open Graph, canonical)
- Aksesibilitas (skip link, focus states, reduced motion)
- CI/CD otomatis via GitHub Actions

## Mulai cepat

```bash
npm install
npm run dev
```

Buka [http://localhost:4321](http://localhost:4321).

## Kustomisasi konten

Edit satu file: **`src/data/site.ts`** — nama, bio, skills, proyek, pengalaman, link sosial, dan email.

## Konfigurasi GitHub Pages

### Repo proyek (`username.github.io/portfolio`)

Default sudah benar di `astro.config.mjs`:

- `base`: `/portfolio/`
- `site`: `https://ziidat.github.io` — ganti username Anda

Workflow CI mengatur `ASTRO_BASE` otomatis dari nama repo.

### User/org site (`username.github.io`)

Ubah `astro.config.mjs`:

```js
const base = process.env.ASTRO_BASE ?? '/';
```

Dan set `ASTRO_SITE` ke `https://username.github.io`.

## Deploy

1. Push ke GitHub
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**
3. Push ke branch `main` — workflow akan build & deploy

URL live: `https://<username>.github.io/<nama-repo>/`

## Perintah

| Perintah        | Aksi                          |
| --------------- | ----------------------------- |
| `npm run dev`   | Server pengembangan lokal     |
| `npm run build` | Build production ke `./dist/` |
| `npm run preview` | Preview build lokal       |

## Struktur

```text
src/
├── data/site.ts      # Semua konten portfolio
├── components/       # UI section & kartu
├── layouts/Layout.astro
├── pages/index.astro
└── styles/global.css
```

## Lisensi

Gunakan bebas untuk portfolio pribadi Anda.
