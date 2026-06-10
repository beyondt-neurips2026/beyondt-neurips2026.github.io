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

**Speakers**

| Person                 | File name                        |
|------------------------|----------------------------------|
| Albert Gu              | `albert-gu.jpg`                  |
| Daniel Y. Fu           | `daniel-y-fu.jpg`                |
| Krzysztof Choromanski  | `krzysztof-choromanski.jpg`      |
| Anima Anandkumar       | `anima-anandkumar.jpg`           |
| Yu Cheng               | `yu-cheng.jpg`                   |
| Jürgen Schmidhuber     | `jurgen-schmidhuber.jpg`         |
| Danqi Chen             | `danqi-chen.jpg`                 |
| Edoardo Ponti          | `edoardo-ponti.jpg`              |
| Vahab Mirrokni         | `vahab-mirrokni.jpg`             |

**Panelists**

| Person                 | File name                        |
|------------------------|----------------------------------|
| Ramin Hasani           | `ramin-hasani.jpg`               |
| Aditi Raghunathan      | `aditi-raghunathan.jpg`          |
| Vikram Appia           | `vikram-appia.jpg`               |
| Maximilian Beck        | `maximilian-beck.jpg`            |

**Organizers**

| Person                 | File name                        |
|------------------------|----------------------------------|
| Mehdi Rezagholizadeh   | `mehdi-rezagholizadeh.jpg`       |
| Beidi Chen             | `beidi-chen.jpg`                 |
| Pavlo Molchanov        | `pavlo-molchanov.jpg`            |
| Ali Ghodsi             | `ali-ghodsi.jpg`                 |

## Image guidance

- **Square** images look best (the avatar uses a 1:1 crop). ~400×400 px is plenty.
- JPG, optimized (< ~120 KB each) for fast loading.

> The slug is generated in `assets/js/main.js` (`slug()` / `photoFor()`).
> If you rename a person there, rename the matching file too.
