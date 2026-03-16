# Adding New Gallery Content

Step-by-step guide for adding a new project to the Creative Studio Kuki gallery.

---

## 1. Prepare and place images

All images go inside `public/assets/images/works/[ProjectName]/webp/big/`.

**Naming convention — include pixel dimensions in the filename:**

```
ProjectName-1-2016x1512.webp
ProjectName-2-1643x791.webp
ProjectName-3-3026x2812.webp
```

The number after the last hyphen and before the extension encodes `WIDTHxHEIGHT` in pixels.
This is read automatically by `useImageDimensions` to size the PhotoSwipe lightbox correctly.

**Small thumbnails** (used by ProgressiveImg for blur-up loading) follow the same name but go in `.../webp/small/` with dimensions halved:

```
ProjectName-1-1008x756.webp   ← half of 2016x1512
```

The helper `getSmallImagePath` in `src/components/shared/hooks/useImageDimensions.js` derives small paths automatically from big paths.

**Thumbnail / cover image** (used as the card preview, `src` field):
Pick the best shot. Can be a big path or a separate image.

---

## 2. Add a galleryWork entry in siteContent.js

Open `src/data/siteContent.js` and add a new object to the `galleryWorks` array:

```js
{
  id: 7,                              // next available integer, never reuse
  category: "places",                 // slug from GALLERY_CATEGORIES (see section 3)
  slug: "my-project-name",            // URL-safe string, lowercase, hyphens only
  name: "My Project Name",            // display title shown on cards and detail page
  src: "/assets/images/works/MyProject/webp/big/MyProject-1-2016x1512.webp",
  link: "/my-3d-page",                // route to the 3D interactive page — omit if no 3D scene
  description: "Full description...", // shown on the project detail page
  shortDescription: "One sentence.",  // used for SEO meta description
  making: "How it was made...",       // process/materials, shown on detail page
  artistName: "Client / IP name",     // e.g. "Personal project" or "Baldur's Gate 3"
  artistRealName: "Year or author",   // e.g. "2024" or "Larian Studios"
  artistsImage: "/assets/images/avatarImage.webp",
  galleryImages: [
    "/assets/images/works/MyProject/webp/big/MyProject-1-2016x1512.webp",
    "/assets/images/works/MyProject/webp/big/MyProject-2-1643x791.webp",
    // add all shots here
  ],
},
```

**Rules:**

- `id` must be unique. Check existing IDs before choosing.
- `slug` must be unique and URL-safe (lowercase letters, digits, hyphens only).
- `category` must exactly match a slug from `GALLERY_CATEGORIES`.
- `link` is optional. Only add it if a 3D scene page exists for this project (see section 5).

---

## 3. Category slugs

Available categories from `GALLERY_CATEGORIES` in `siteContent.js`:

| Slug                   | Label                 | Audience   |
| ---------------------- | --------------------- | ---------- |
| `love-stories`         | Love Stories          | Individual |
| `life-moments`         | Life Moments          | Individual |
| `places`               | Places                | Individual |
| `achievements`         | Achievements          | Individual |
| `employee-gifts`       | Employee & Team Gifts | Business   |
| `anniversary-projects` | Anniversary Projects  | Business   |
| `gaming-art`           | Gaming Art            | Fan        |
| `movie-art`            | Movie & TV Art        | Fan        |

---

---

## 5. Adding a 3D scene page (optional)

If the project has a 3D interactive representation:

1. Create `src/pages/[project-name].jsx` (e.g. `waterfallfamily.jsx`).
2. Use the `GalleryArt` wrapper component (see `/lidar.jsx`, `/bg3crash.jsx` for reference).
3. Set `link: "/project-name"` on the galleryWork entry.

The "View in 3D ✦" CTA button will then appear automatically on:

- Project cards on `/gallery` and `/gallery/[category]`
- The project detail page at `/gallery/[category]/[slug]`

---

## 6. Verify

```bash
npm run dev
```

1. Visit `/gallery` — new project card should appear in its category section.
2. Click the card → `/gallery/[category]/[slug]` — hero image, description, and gallery should load.
3. If 3D: click "View in 3D ✦" → 3D scene page should open.
4. Click through the PhotoSwipe lightbox on the detail page — all images should open correctly.
5. Check that no images return 404 (browser Network tab).

```bash
npm run build
```

All project detail pages are statically pre-rendered. Build will fail if `galleryImages` paths or `slug`/`category` values are malformed, which is a useful safety check.
