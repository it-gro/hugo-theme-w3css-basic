---
title:       "Hugo - Content Organization"
date:        2017-11-09T19:48:09+01:00
tags:        ['hugo', 'theme']
categories:  ['web', '']
banner:      'images/banners/hugo-3.jpg'
summary:     'Hugo assumes that the same structure that works to organize your source content is used to organize the rendered site.'
---

## Organization of Content Source

In Hugo, your content should be organized in a manner that reflects the rendered website.

While Hugo supports content nested at any level, the top levels (i.e. `content/<DIRECTORIES>`) are special in Hugo and are considered the content [sections][]. Without any additional configuration, the following will just work:

```
.
└── content
    └── about
    |   └── _index.md  // <- https://example.com/about/
    ├── post
    |   ├── firstpost.md   // <- https://example.com/post/firstpost/
    |   ├── happy
    |   |   └── ness.md  // <- https://example.com/post/happy/ness/
    |   └── secondpost.md  // <- https://example.com/post/secondpost/
    └── quote
        ├── first.md       // <- https://example.com/quote/first/
        └── second.md      // <- https://example.com/quote/second/
```

## Path Breakdown in Hugo

The following demonstrates the relationships between your content organization and the output URL structure for your Hugo website when it renders. These examples assume you are [using pretty URLs][pretty], which is the default behavior for Hugo. The examples also assume a key-value of `baseurl = "https://example.com"` in your [site's configuration file][config].

### Index Pages: `_index.md`

`_index.md` has a special role in Hugo. It allows you to add front matter and content to your [list templates][lists] as of v0.18. These templates include those for [section templates][], [taxonomy templates][], [taxonomy terms templates][], and your [homepage template][]. In your templates, you can grab information from `_index.md` using the [`.Site.GetPage` function][getpage].

You can keep one `_index.md` for your homepage and one in each of your content sections, taxonomies, and taxonomy terms. The following shows typical placement of an `_index.md` that would contain content and front matter for a `posts` section list page on a Hugo website:


```
.         url
.       ⊢--^-⊣
.        path    slug
.       ⊢--^-⊣⊢---^---⊣
.           filepath
.       ⊢------^------⊣
content/posts/_index.md
```

At build, this will output to the following destination with the associated values:

```

                     url ("/posts/")
                    ⊢-^-⊣
       baseurl      section ("posts")
⊢--------^---------⊣⊢-^-⊣
        permalink
⊢----------^-------------⊣
https://example.com/posts/index.html
```

### Single Pages in Sections

Single content files in each of your sections are going to be rendered as [single page templates][singles]. Here is an example of a single `post` within `posts`:


```
                   path ("posts/my-first-hugo-post.md")
.       ⊢-----------^------------⊣
.      section        slug
.       ⊢-^-⊣⊢--------^----------⊣
content/posts/my-first-hugo-post.md
```

At the time Hugo builds your site, the content will be output to the following destination:

```

                               url ("/posts/my-first-hugo-post/")
                   ⊢------------^----------⊣
       baseurl     section     slug
⊢--------^--------⊣⊢-^--⊣⊢-------^---------⊣
                 permalink
⊢--------------------^---------------------⊣
https://example.com/posts/my-first-hugo-post/index.html
```

### Section with Nested Directories

To continue the example, the following demonstrates destination paths for a file located at `content/events/chicago/lollapalooza.md` in the same site:


```
                    section
                    ⊢--^--⊣
                               url
                    ⊢-------------^------------⊣

      baseURL             path        slug
⊢--------^--------⊣ ⊢------^-----⊣⊢----^------⊣
                  permalink
⊢----------------------^-----------------------⊣
https://example.com/events/chicago/lollapalooza/
```

As of v0.20, Hugo does not recognize nested sections. While you can nest as many content *directories* as you'd like, any child directory of a section will still be considered the same section as that of its parents. Therefore, in the above example, `{{.Section}}` for `lollapalooza.md` is `events` and *not* `chicago`. See the [related issue on GitHub](https://github.com/gohugoio/hugo/issues/465).

## Paths Explained

The following concepts will provide more insight into the relationship between your project's organization and the default behaviors of Hugo when building the output website.

### `section`

A default content type is determined by a piece of content's section. `section` is determined by the location within the project's `content` directory. `section` *cannot* be specified or overridden in front matter.

### `slug`

A content's `slug` is either `name.extension` or `name/`. The value for `slug` is determined by

* the name of the content file (e.g., `lollapalooza.md`) OR
* front matter overrides

### `path`

A content's `path` is determined by the section's path to the file. The file `path`

* is based on the path to the content's location AND
* does not include the slug

### `url`

The `url` is the relative URL for the piece of content. The `url`

* is based on the content's location within the directory structure OR
* is defined in front matter and *overrides all the above*

## Override Destination Paths via Front Matter

Hugo believes that you organize your content with a purpose. The same structure that works to organize your source content is used to organize the rendered site. As displayed above, the organization of the source content will be mirrored in the destination.

There are times where you may need more control over your content. In these cases, there are fields that can be specified in the front matter to determine the destination of a specific piece of content.

The following items are defined in this order for a specific reason: items explained further down in the list will override earlier items, and not all of these items can be defined in front matter:

### `filename`

This isn't in the front matter, but is the actual name of the file minus the extension. This will be the name of the file in the destination (e.g., `content/posts/my-post.md` becomes `example.com/posts/my-post/`).

### `slug`

When defined in the front matter, the `slug` can take the place of the filename for the destination.

...

This will render to the following destination according to Hugo's default behavior:

```
example.com/posts/new-post/
```

### `section`

`section` is determined by a content's location on disk and *cannot* be specified in the front matter. See [sections][] for more information.

