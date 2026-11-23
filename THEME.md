# Mahaba

A black-canvas Salla React theme for an abaya-only storefront. It is built for
an **English-first** storefront with a complete Arabic counterpart: no mixed
copy, no shared fallback strings.

## Language

- **English** uses HenriDidot for every Latin headline and paragraph.
- **Arabic** uses Amiri for every Arabic heading and paragraph.
- All theme copy is duplicated in `locales/en.json` and `locales/ar.json`.
- The **store's primary language is a Salla setting**, not a theme setting.
  Set it in the Salla dashboard: **Settings → Languages → English (default)**.
  The theme follows whatever that setting serves at `/`.
- Product names, category names, menu labels and home-block copy come from the
  store; translate them in the dashboard so each language stays pure.

## Art direction

| Element | Choice |
| --- | --- |
| Canvas | `#070707` / `#0d0d0d` |
| Headings / titles | `#f5f5f5` |
| Body copy | `#c7c7c7` |
| Meta / captions | `#949494` |
| Accent | `#b9b9b9` (same grey family) |
| Sale | muted rose `#d4a0a0` (price state only) |
| English type | HenriDidot |
| Arabic type | Amiri |
| Logo | 4:1 transparent white lockup (`public/brand/mahaba-logo.png`) |
| Company | MAKcubes — [makcubes.com](https://makcubes.com) |

## What was built

- **Header** — dark announcement bar, 4:1 logo, quiet navigation, search field,
  wishlist with count, account and bag. Phones get menu · logo · search/bag.
- **Home** — full-bleed campaign hero, abaya category rail, banner mosaic,
  four-column product grids, product rail and testimonials.
- **New-arrivals fallback** — if the merchant's home blocks contain no product
  grid, a latest-products section is appended automatically. It disappears
  when another product grid is present, so it never duplicates the catalogue.
- **Product cards** — 3:4 crops, monochrome badges, hover zoom and quick-add.
- **Product page** — black gallery canvas, serif title, restrained options and
  square add-to-cart actions.
- **Listing** — dark toolbar, borderless filters and a four-column grid.
- **Cart** — centered empty state with a light action.
- **Footer** — service promises, a dedicated abaya shop column, important
  links, contact details, social links, trust marks and one centred legal line
  (`© year Mahaba — rights | Crafted by MAKcubes`). No app-download block.
- **No journal / blog** — the blog home block was removed from the manifest and
  registry; any lingering blog link in a store menu is hidden.
- **Abaya-only fallback navigation** — if the store has no header menu yet, the
  header shows All abayas · New in · Offers.

## Merchandising

- Use **portrait 3:4** product photography.
- Replace the test product with the real abaya catalogue before publishing.
- Add the hero campaign and category images in the Salla theme editor.
- Remove the blog item from the store's header/footer menu if it still exists.

## Key files

```text
app/styles/06-theme/abaya.scss      black art direction, bilingual faces
app/components/layout/Header.tsx    logo, search, wishlist, actions
app/components/layout/HeaderMainMenu.tsx  fallback abaya navigation
app/components/layout/Footer.tsx    service promises, shop column, MAKcubes credit
app/components/layout/HeaderTopnav.tsx   locale-only announcement
app/router.tsx                      no blog home registration
twilight.json                       theme name, support URL, settings
public/brand/mahaba-logo.png        4:1 logo lockup
public/fonts/HenriDidot.woff2       English face
public/fonts/HenriDidot.otf         English face fallback
locales/{ar,en}.json                theme copy
```

## Verify

```bash
pnpm build
pnpm typecheck
pnpm test
pnpm check:manifest
```

## Preview

- `docs/preview/github-cover.png`
- `docs/preview/header-en.png`
- `docs/preview/header-ar.png`
- `docs/preview/home-hero.png`
- `docs/preview/home-mobile.png`
