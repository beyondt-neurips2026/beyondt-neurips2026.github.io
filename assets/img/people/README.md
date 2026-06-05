# People photos

Drop headshots here to make them appear on the **Invited Talks**, **Panel**, and
**Organizers** cards. Until a photo exists, each card shows its gradient monogram
automatically — the layout never looks broken.

## Naming rule

Files are matched by a slug of the person's name:

- lowercase
- spaces and punctuation → single hyphens
- accents simplified (ü→u, é→e, ã→a, ö→o)
- extension: **`.jpg`**

| Person                 | File name                       |
|------------------------|---------------------------------|
| Albert Gu              | `albert-gu.jpg`                 |
| Daniel Y. Fu           | `daniel-y-fu.jpg`               |
| Yu Cheng               | `yu-cheng.jpg`                  |
| Edoardo Ponti          | `edoardo-ponti.jpg`             |
| Jürgen Schmidhuber     | `jurgen-schmidhuber.jpg`        |
| Aditi Raghunathan      | `aditi-raghunathan.jpg`         |
| Ramin Hasani           | `ramin-hasani.jpg`              |
| Mehdi Rezagholizadeh   | `mehdi-rezagholizadeh.jpg`      |
| Beidi Chen             | `beidi-chen.jpg`                |
| Pavlo Molchanov        | `pavlo-molchanov.jpg`           |
| Ali Ghodsi             | `ali-ghodsi.jpg`                |

## Image guidance

- **Square** images look best (the avatar uses a 1:1 crop). ~400×400 px is plenty.
- JPG, optimized (< ~120 KB each) for fast loading.

> The slug is generated in `assets/js/main.js` (`slug()` / `photoFor()`).
> If you rename a person there, rename the matching file too.
