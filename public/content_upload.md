# Adding New Gallery Content

Step-by-step guide for adding a new project to the Creative Studio Kuki gallery.

---

## 1. Prepare and place images

Put the original photos (JPG, PNG or WebP, any size) in `public/assets/images/works/[ProjectName]/`, then run:

```bash
npm run images -- public/assets/images/works/[ProjectName]
```

This writes WebP copies to `.../[ProjectName]/webp/big/`, capped at 2560px on the long edge, with the pixel size in the name:

```
ProjectName-1-2016x1512.webp
ProjectName-2-1643x791.webp
```

The `WIDTHxHEIGHT` part is required. The lightbox and the image component read the size from it.
Originals are never changed. Name the originals `ProjectName-1.jpg`, `ProjectName-2.jpg` and so on before running the script; spaces become `_`.

You do not need thumbnails or `small/` copies. The site resizes every image to the slot it is shown in (next/image, Netlify Image CDN in production) and serves it as WebP.

**Letter case matters on the live server.** `Webp/big` and `webp/big` are the same folder on a Mac but not on Netlify. The build checks every image path in `siteContent.js` and fails if one does not match the file on disk exactly.

**Cover image** (the `src` field, used on cards, the project hero and share previews):
pick the best shot from `webp/big/`.

---

## 2. Add a galleryWork entry in siteContent.js

Open `src/data/siteContent.js` and add a new object to the `galleryWorks` array:

```js
{
  id: 7,                              // next available integer, never reuse
  category: "places",                 // slug from GALLERY_CATEGORIES (see section 3)
  slug: "my-project-name",            // URL-safe string, lowercase, hyphens only
  name: "My Project Name",            // page title, H1, card title and image alt text: say what it is
  src: "/assets/images/works/MyProject/webp/big/MyProject-1-2016x1512.webp",
  link: "/my-3d-page",                // route to the 3D interactive page — omit if no 3D scene
  description: "Full description...", // shown on the project detail page
  shortDescription: "...",            // meta description: unique, 120 to 160 characters
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

1. Create `src/pages/gallery/3d/[project-name].jsx` (copy `src/pages/gallery/3d/rastovac.jsx`).
2. It uses the `GalleryArt` wrapper and the `SEO` component; update the work id, title, description and path.
3. Set `link: "/gallery/3d/project-name"` on the galleryWork entry. The sitemap picks it up automatically.

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

All project detail pages are statically pre-rendered. Before building, `check-images` fails the build if any image path does not exist with exactly that spelling, and the sitemap is regenerated with the new project.
