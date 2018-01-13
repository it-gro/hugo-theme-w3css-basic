# W3.CSS Basic Theme for Hugo

W3.CSS Basic is a website template built with W3.CSS.  Inspiration was
taken from
[Universal](https://themes.gohugo.io/hugo-universal-theme/).  It is
quite [configurable](//github.com/it-gro/hugo-theme-w3css-basic/tree/master/exampleSite/config.toml). Change all colors in the blink of an eye...

See the [exampleSite](https://it-gro.github.io/hugo-theme-w3css-basic.github.io/) for a demo.

This theme is for:
* Landing pages 
* Blogs
* Pages (not blog) in a directory structure with simple navigation (Top/Up/Down & pages on this level)
* People who like monochromatic colors


It includes resources from:
* https://www.w3schools.com/w3css/
* https://fontawesome.com/icons/
* https://owlcarousel2.github.io/OwlCarousel2/
* https://daneden.me/animate
* https://github.com/liwenyip/hugo-easy-gallery/
* http://photoswipe.com
* https://fonts.google.com/
* https://translate.google.com
* https://cse.google.com


## Table of Contents

* [Goals](#goals)
* [Features](#features)
* [Installation](#installation)
* [Configuration](#configuration)
  * [Language](#language)
  * [Frontpage](#frontpage)
    * [Marquee](#marquee)
    * [Jumbotron](#jumbotron)
    * [Photocards](#photocards)
    * [Features](#features)
    * [Recent Posts](#recent-posts)
    * [See More](#see-more)
    * [Testimonials](#testimonials)
    * [Clients](#clients)
  * [Blog](#blog)
    * [Blog List](#blog-list)
    * [Date format](#date-format)
  * [Pages](#pages)
    * [Pages Navigation](#pages-navigation)
  * [Color Theme](#color-theme)
  * [Emoji](#emoji)
  * [Summary](#summary)
  * [Pagination](#pagination)
  * [Syntax Highlighting](#syntax-highlighting)
  * [Menu](#menu)
  * [Fonts](#fonts)
  * [Contact Map](#contact-map)
  * [Google Custom Search API](#google-custom-search-api)
  * [Footer](#footer)
* [Front Matter](#front-matter)
* [Favicons](#favicons)
* [Shortcodes](#shortcodes)
* [Showcase](#showcase)
* [Gallery](#gallery)
* [Usage](#usage)
  * [Minifier](#minifier)
* [Workarounds](#workarounds)
   * [summaryLength](#summaryLength)
   * [Shortcode output wrapped in <p>](#shortcode-output-wrapped-in-p)
* [Contributing](#contributing)
* [License](#license)
* [Thanks](#thanks)
* [More Screenshots](#more-screenshots)


## Goals

My goals for this theme are:

* be as universal as the [Universal](https://themes.gohugo.io/hugo-universal-theme/) theme
* create a w3css theme (there are many Bootstrap themes)
* mobile first, responsive
* basic usage without javascript has to be possible 
* usage with full local delivery (no CDNs) has to be possible (security & privacy concerns)
* try to be [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* support experimenting with monochromatic colors
* use teaser pictures and icons as eye-catcher


## Features

* Monochromatic Color Schemes
* Works with disabled javascript (using fallbacks)
* Responsive design
  * 3 (medium, lage) or 1 (small) column layout
  * small menu (truncated) on small screen (no collapse)
* Customizable landing page
  * optional marquee (using css)
  * optional data/jumbotron    (carousel (if js is enabled) )
  * optional data/photocards   (optional css animation)
  * optional data/features     (optional css animation)
  * optional data/testimonials (carousel (if js is enabled) )
  * optional data/clients      (carousel (if js is enabled) )
* Fontawesome version 5 (local)
* Google fonts - either via api or via local files (avoid tracking)
* Optional google translate widget (if js is enabled)
* Contact page
  * optional formspree.io 
  * mailto: without formspree.io (avoid leaking)
  * google map (if js is enabled)
* Search page
  * google customizable search api (if js is enabled)
* Alternative navigation instead of breadcrumbs (Top/Up/Down & pages on this level)
* hugo-easy-gallery (including PhotoSwipe which needs js)
  


## Installation

Go to the directory where you have your Hugo site and run:

```
$ mkdir themes
$ cd themes
$ git clone https://github.com/it-gro/hugo-theme-w3css-basic
```

For more information read the official [setup guide](https://gohugo.io/overview/installing/) of Hugo.


## Configuration

After installing the theme we recommend you to take a look at the
[exampleSite](//github.com/it-gro/hugo-theme-w3css-basic/tree/master/exampleSite)
directory. You will find a working Hugo site configured with this
theme that you can use as a starting point for your site.

First, let's take a look at the
[config.toml](//github.com/it-gro/hugo-theme-w3css-basic/tree/master/exampleSite/config.toml). It
will be useful to learn how to customize your site. 


### Language

Available translations are in the `/i18n` directory. You can configure
the language modifying the following key.


```toml
defaultContentLanguage = "en"
```


### Frontpage

#### Marquee

```yaml
[params.marquee]
  # enable or disable marquee
  enable   = true
  marquee  = '''
At [info@example.com](mailto:info@example.com) vero eos et **accusam**
et justo duo dolores et ea rebum. Stet clita *kasd gubergren*, no sea
             '''
```
* Marquee text from right to left

![screenshot Marquee & Navbar long](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_100.jpg)

#### Jumbotron

```yaml
[params.jumbotrons]
  # used in layouts/partials/front.jumbotrons.carousel.html
  # enable or disable jumbotrons on frontpage
  # see some examples in 'exampleSite/data/jumbotron'
  enable   = true
```

* Front jumbotron text only

![screenshot Jumbotron Text](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_130.jpg)

* Front jumbotron text & picture

![screenshot Jumbotron Text & Pic](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_140.jpg)

* Front jumbotron text & icon

![screenshot Jumbotron Text & Icon](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_150.jpg)


```
data/jumbotron/
├── 01-jumbotron.yaml
├── 02-jumbotron.yaml
├── 03-jumbotron.yaml
├── 04-jumbotron.yaml
└── 05-jumbotron.yaml
```

`01-jumbotron.yaml`
```
weight:      1
title:       "Welcome to hugo-theme-w3css-basic exampleSite"
icon:        
image:       
description: |
  * Lorem ipsum dolor sit amet
  * Excepteur sint occaecat cupidatat non proident
```


#### Photocards
```yaml
[params.photocards]
  # used in layouts/partials/front.photocards.html
  # enable or disable photocards on frontpage
  # see some examples in 'exampleSite/data/photocards'
  enable   = true
  animate  = true
```

* Front photocards

![screenshot Photocards (9)](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_160.jpg)

```
data/photocards/
├── 01-photocard.yaml
├── 02-photocard.yaml
├── 03-photocard.yaml
├── 04-photocard.yaml
├── 05-photocard.yaml
├── 06-photocard.yaml
├── 07-photocard.yaml
├── 08-photocard.yaml
└── 09-photocard.yaml
```

`01-photocard.yaml`
```
weight:      1
title:       "Lorem ipsum"
animated:    "rollIn"
image:       "images/photocards/pixabay.com/01-photocard.jpg"
url:         pages/front/photocards/01
description: |
   sed diam nonumy 
```


#### Features
```yaml
[params.features]
  # used in layouts/partials/front.features.html
  # enable or disable features on frontpage
  # see some examples in 'exampleSite/data/features'
  enable   = true
  animate  = false
```
* Front features

![screenshot Feature (6)](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_170.jpg)

```
data/features/
├── 01-feature.yaml
├── 02-feature.yaml
├── 03-feature.yaml
├── 04-feature.yaml
├── 05-feature.yaml
└── 06-feature.yaml
```

`01-feature.yaml`
```
weight:      1
name:        "Eleifend"
icon:        "fas fa-desktop"
animated:    "slideInLeft"
url:         pages/front/features/01
description: |
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
  nonumy eirmod tempor invidunt ut labore
```


#### Recent Posts
```yaml
[params.recentPosts]
  # used in layouts/partials/footer.html
  footerNumOfPosts = 5
  enableFooter   = true
  # used in layouts/partials/front.recent_posts.html
  enableFront    = true
  title    = "From our Blog"
  subtitle = '''
Pellentesque habitant morbi tristique senectus et netus et malesuada
fames ac.
             '''
```
* Front recent posts

![screenshot Recent Posts](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_180.jpg)


#### See More
```yaml
[params.seeMore]
  # used in layouts/partials/front.see_more.html
  # enable or disable see_more on frontpage
  enable    = true
  icon      = "far fa-file-code"
  title     = "Do You want to see More?"
  linkUrl   = "/pages"
  linkText  = "consectetuer adipiscing"
  subtitle  = '''
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              '''
```
* Front see more

![screenshot See More](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_190.jpg)


* The background image is defined in `/static/css/w3css-basic.css`:
```css
/* -------------------------------------------------- */
/* front.see_more */

#see_more_background {
  background: url('../images/backgrounds/see_more_background.jpg') center top no-repeat;
}
```

#### Testimonials
```yaml
[params.testimonials]
  # used in layouts/partials/front.testimonials.carousel.html
  # enable or disable testimonials on frontpage
  # see some examples in 'exampleSite/data/testimonials'
  enable   = true
  title    = "Testimonials"
  subtitle = '''
Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
labore et dolore magna aliquyam erat, sed diam voluptua. 
             '''
```
* Front testimonials

![screenshot Testimonials](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_210.jpg)

```
data/testimonials/
├── 01-testimonial.yaml
├── 02-testimonial.yaml
├── 03-testimonial.yaml
├── 04-testimonial.yaml
└── 05-testimonial.yaml
```

`01-testimonial.yaml`
```
weight:      1
name: 	     "John Doe"
position:    "CEO, Takimata"
avatar:      "images/testimonials/pixabay.com/person-1.jpg"
text: 	     | 
  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
  suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
  vel eum iriure dolor in hendrerit in vulputate velit esse molestie
  consequat, vel illum dolore eu feugiat
```

#### Clients
```yaml
[params.clients]
  # used in layouts/partials/front.clients.carousel.html
  # enable or disable clients on frontpage
  # see some examples in 'exampleSite/data/clients'
  enable = true
  title = "Our Clients"
  subtitle = '''
Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
**molestie consequat**, vel illum dolore.
             '''
```
* Front clients

![screenshot Clients](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_200.jpg)


```
data/clients/
├── 01-client.yaml
├── 02-client.yaml
├── 03-client.yaml
├── 04-client.yaml
├── 05-client.yaml
└── 06-client.yaml
```

`01-client.yaml`
```
weight: 1
name:   "customer-1"
image:  "images/clients/pixabay.com/company-logo-1.png"
url:    "http://www.customer1.com"
```



### Blog

#### Blog List
```yaml
[params.blog]
  # used in layouts/blog/list.html
  title    = "Blog"
  icon     = "fas fa-rss"
  subtitle = '''
ultricies eget, tempor sit amet, ante
             '''
```
* Blog with `paginate =  6` (short date)

![screenshot Blog Paginator (6)](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_230.jpg)


```
content/blog/
└── 2017
    ├── 09
    │   ├── emacs-it-all-starts-here.md
    │   └── emacs-jokes.md
    ├── 10
    │   └── golang-a-closer-look.md
    └── 11
        ├── hugo-dolor.md
        ├── hugo-highlight-chromastyles.md
        ├── hugo-ipsum.md
        └── hugo-lorem.md
```

`hugo-highlight-chromastyles.md`
```
---
title:       "Hugo - **highlight** :art:"
date:        2017-11-24T08:44:12+01:00
tags:
  - Hugo
categories:
  - Web
teaserpic:   images/teaserpics/bitbucket.org/pygments-main-logo.png
---

Hugo comes with reallly fast syntax highlighting from Chroma.
...

<!--more-->

In this theme we set
...
```


#### Date format

* Dates are shown for blog articles (not other pages)
* Short version in teaser
`{{- .Date.Day}}. {{substr (default .Date.Month (i18n .Date.Month)) 0 3}} {{.Date.Year -}}`
* Long version in article
`{{- .Date.Day}}. {{default .Date.Month (i18n .Date.Month)}} {{.Date.Year -}}`
* provide the translation in i18n/*.yaml
```yaml
- id: January
  translation: "Januar"
  ...

```
* Blog article (long date)

![screenshot Blog Entry](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_240.jpg)

### Pages

#### Pages Navigation

* Page navigation top level

![screenshot Page Navigation (root)](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_320.jpg)

* Page navigation with Top/Up/Down and pages on this level

![screenshot Page Navigation (up & down)](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_330.jpg)

* Check out https://it-gro.github.io/hugo-theme-w3css-basic.github.io/pages/folder20/folder21/   

```
content/pages/
├── folder10
│   ├── _index.md
│   ├── malesuada-massa.md
│   └── neque-nec.md
├── folder20
│   ├── estdui-fermentum.md
│   ├── felis-vel-velit.md
│   ├── folder21
│   │   ├── folder211
│   │   │   ├── _index.md
│   │   │   ├── phasellus.md
│   │   │   └── rutrum.md
│   │   ├── _index.md
│   │   ├── nullam.md
│   │   └── vestibulum.md
│   ├── _index.md
│   ├── magna-orci-ultrices.md
│   ├── nam-asapien.md
│   ├── neque-orci.md
│   └── vestibulum-convallis.md
├── folder30
│   ├── donec-pretium-posuere.md
│   ├── _index.md
│   └── pellentesque-dapibus-suscipit.md
├── front
...
```

`content/pages/folder20/folder21/_index.md`
```
---
weight:         21
title:          "Cum sociis natoque (this is level /folder20/folder21)"
date:           "2017-06-08T01:06:13+02:00"
teaserpic:      images/teaserpics/gohugo.io/hugo-dolor.png
---
```

`content/pages/front/_index.md`
```
---
weight:      18
title:       "Frontpage Eye-Catcher (this is level /front)"
date:        2017-11-13T15:37:04+01:00
teaserpic:
icon:        "fas fa-globe"
---
```


#### Taxonomy
* Taxonomy bar (shown if page has a taxonomy)

![screenshot Taxonomy Bar](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_250.jpg)

* Terms lists

![screenshot Categories](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_260.jpg)

![screenshot Tags](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_270.jpg)


### Color Theme

All W3.CSS predefined monochromatic color themes
(https://www.w3schools.com/w3css/w3css_color_themes.asp) are placed in
the `/static/vendor/w3css/4/` directory.

You may create your own monochromatic color theme using
https://www.w3schools.com/w3css/w3css_color_generator.asp and then put the css file under `/static/css/w3-theme-custom.css`.


Select the actual color theme:

```toml
[params]
 #w3cssColorTheme = "/css/w3-theme-custom.css"
 w3cssColorTheme = "/vendor/w3css/4/w3-theme-orange.css"
```

Available options (theme files) are:
```toml
w3cssColorTheme = "/vendor/w3css/4/w3-theme-amber.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-black.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-blue-grey.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-blue.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-brown.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-cyan.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-dark-grey.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-deep-orange.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-deep-purple.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-green.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-grey.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-indigo.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-khaki.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-light-blue.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-light-green.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-lime.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-orange.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-pink.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-purple.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-red.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-teal.css"
w3cssColorTheme = "/vendor/w3css/4/w3-theme-yellow.css"
```


You can configure all colors within the selected monochromatic color theme:

```toml
  # used in layouts/partials/*.html
  # used in layouts/blog/*.html
  # used in layouts/default/*.html
  # used in layouts/pages/*.html
  # e.g. {{ default `w3-theme-l3` ($.Site.Param `color404Container`)}} 

  color404Container                     = "w3-theme-l3"
  colorPagesListCell                    = "w3-theme-l4"
  colorPagesListCard                    = "w3-theme-l2"
  colorPagesListContainer               = "w3-theme-l2"
  colorBlogListCard                     = "w3-theme-d1"
  colorBlogListCell                     = "w3-theme-l3"
  colorBaseofCanvas                     = "w3-theme-l4"
  colorBaseofPanel                      = "w3-theme-l2"
  colorTaxonomyPanel                    = "w3-theme-l2"
  colorTaxonomyCell                     = "w3-theme-l4"
  colorTaxonomyCard                     = "w3-theme-l3"
  colorTermsPanel                       = "w3-theme-l2"
  colorContactFormPanel                 = "w3-theme-d3"
  colorContactMapPanel                  = "w3-theme-l2"
  colorContactMapCard                   = "w3-theme-l2"
  colorFooterBottomCell                 = "w3-theme-l3"
  colorFooterContainer                  = "w3-theme-d5"
  colorFooterButton                     = "w3-theme-l4"
  colorFrontClientsContainer            = "w3-theme-l3"
  colorFrontClientsCard                 = "w3-theme-l2"
  colorFrontFeaturesContainer           = "w3-theme-l4"
  colorFrontFeaturesCard                = "w3-theme-l3"
  colorFrontJumbotronsSection           = "w3-theme-l4"
  colorFrontJumbotronsContainer         = "w3-theme-l2"
  colorFrontPhotocardsContainer         = "w3-theme-l3"
  colorFrontPhotocardsCard              = "w3-theme-l1"
  colorFrontPhotocardsCardContainer     = "w3-theme-l1"
  colorFrontRecentPostsContainer        = "w3-theme-l3"
  colorFrontRecentPostsTitleCard        = "w3-theme-l2"
  colorFrontRecentPostsCard             = "w3-theme-l4"
  colorFrontRecentPostsCardButton       = "w3-theme-l4"
  colorFrontSeeMoreContainer            = "w3-theme-l4"
  colorFrontSeeMoreButton               = "w3-theme-l4"
  colorFrontSeeMoreText                 = "w3-text-white"
  colorFrontTestimonialsContainer       = "w3-theme-l4"
  colorFrontTestimonialsTitleCard       = "w3-theme-l2"
  colorFrontTestimonialsCarouselCard    = "w3-theme-l5"
  colorHeaderMarquee                    = "w3-theme-l1"
  colorHeaderNav                        = "w3-theme-dark"
  colorPaginatorBar                     = "w3-theme-l1"
  colorTaxonomyBar                      = "w3-theme-l1"
  colorPageNavCardsContainer            = "w3-theme-l3"
  colorPageNavCardsCard                 = "w3-theme-l1"
  colorPageNavCardsLink                 = "w3-theme-l3"
  colorSearchGoogleGcseContainer        = "w3-theme-l3"
```


### Emoji

```toml
enableEmoji   = true
```


You may use emoji in titles as well:
```yaml
title:       "Hugo - **highlight** :art:"
```

e.g. in `main.teaser_in_card.html`
```
  <h3>
  {{- if .Params.icon }}
    <i class="{{ .Params.icon }}"></i>
  {{- end }}
  {{ .Title  | markdownify | emojify }}
  </h3>
```

See https://gohugo.io/functions/emojify/

![screenshot Emoji](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_242.jpg)

Emoji are good for mobile devices. On desktops support is kind of "poor".
Firefox users may have a look at https://github.com/eosrei/twemoji-color-font.


### Summary

```toml
summaryLength = 70

[params]
  teaserTruncateSummary  = 200
```

`summaryLength` was introduced in hugo 0.30
(https://gohugo.io/news/0.30-relnotes/). It's measure is "words".
`teaserTruncateSummary` is in "characters". The Description (first
priority) or the Summary (second priority) is truncated (without
cutting words):

    {{- or .Description .Summary | markdownify | truncate ( or .Site.Params.teaserTruncateSummary 160)  | replaceRE "<.?p>" "" | safeHTML }}

`<!--more-->` is still an option to override the summaryLength (https://gohugo.io/content-management/summaries/)


### Pagination

```toml
paginate =  6
```

Since we have a 3 column layout (1 column on small displays) it works
best with any of 3, 6, 9, 12.


### Syntax Highlighting

```toml
# https://gohugo.io/content-management/syntax-highlighting/
pygmentsUseClassic            = false
pygmentsCodeFences            = true
pygmentsCodeFencesGuessSyntax = true
# https://help.farbox.com/pygments.html
# https://github.com/alecthomas/chroma
# hugo gen chromastyles --style=autumn        >  syntax.autumn.css          
# ...
pygmentsUseClasses            = true
# => static/css/syntax/syntax/syntax.*.css
# copy one of them to
# static/css/syntax/syntax.css
# alternative (if shortcodes/csc*.html are not used):
# set pygmentsUseClassic to false on choose one of the following:
#pygmentsStyle = "autumn"
#pygmentsStyle = "borland"
#pygmentsStyle = "bw"
#pygmentsStyle = "colorful"
#pygmentsStyle = "default"
#pygmentsStyle = "emacs"
#pygmentsStyle = "friendly"
#pygmentsStyle = "fruity"
#pygmentsStyle = "manni"
#pygmentsStyle = "monokai"
#pygmentsStyle = "murphy"
#pygmentsStyle = "native"
#pygmentsStyle = "pastie"
#pygmentsStyle = "perldoc"
#pygmentsStyle = "rrt"
#pygmentsStyle = "tango"
#pygmentsStyle = "trac"
#pygmentsStyle = "vim"
#pygmentsStyle = "vs"
```


### Menu

* Navbar "Long" (for medium or large displays)

![screenshot Marquee & Navbar long](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_100.jpg)


```toml
# provide translations in i18n/*.yaml
[[menu.main]]
  weight = 1
  name   = "Home"
  url    = "/index.html"
  pre    = "fas fa-home"

[[menu.main]]
  weight = 2
  name   = "Contact"
  url    = "/contact"
  pre    = "far fa-address-card"
```

* `pre` is for fontawesome version 5 icons
* name is used for lookup in i18n/*.yaml (=> translation)
* if no translation is given, the name itself is shown
`page.nav.html`   
`<button class="w3-button w3-hide-small"><i class="{{ .Pre }}"></i>&nbsp;{{default .Name (i18n .Name)}}</button>`


* Submenu (one level)

![screenshot Marquee & Navbar small](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_110.jpg)


```toml
# demo submenu
[[menu.main]]
  weight = 4
  name   = "Theme"
  pre    = "fas fa-info-circle"
  identifier = "theme"
 
[[menu.main]]
  weight = 1
  name   = "About"
  url    = "/pages/hugo-theme-w3css-basic/"
  pre    = "fas fa-info fa-fw"
  parent = "theme"
```


* Topbar: right aligned top menu (github, facebook, twitter, ...)

* Navbar "Small" with numOfItemsIfSmallDisplay = 2

![screenshot numOfItemsIfSmallDisplay 2](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_120.jpg)


```toml
# right aligned
[[menu.topbar]]
  weight   = 1
  name     = "GitHub"
  url      = "https://github.com/it-gro/hugo-theme-w3css-basic"
  pre      = "fab fa-github"
```


* on small displays the root menu entries are truncated
  `{{- substr (default .Name (i18n .Name)) 0 ($.Scratch.Get "smallDispMenuMaxChars") | lower}}`


![screenshot Marquee & Navbar small](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_110.jpg)


```toml
[params.menuConfig]
  # used in layouts/partials/header.nav.html
  # if set => change menu entry on small displays to lowercase maxChars 
  smallDispMenuMaxChars = 2

[params.menuTopBar]
  # used in layouts/partials/header.nav.html
  # enable or disable menu.topbar with social icons (right aligned)
  socialEnable             = true
  numOfItemsIfSmallDisplay = 0
  googleTranslateEnable    = true
```





### Fonts

```toml
  # used in layouts/partials/head.html
  fontsUseGoogleApis=false
```

* true: load fonts via Google Font API
* false load fonts from local. Use e.g. https://google-webfonts-helper.herokuapp.com/fonts to download google fonts.

```
{{ partial "head.stylesheets.html"      . -}}
  {{- if .Site.Params.fontsUseGoogleApis }}
    {{ partial "head.fonts.googleapis.html" . -}}
  {{- else }}
    {{ partial "head.fonts.local.html"      . -}}
  {{- end }}
```

### Contact Map

```toml
  # Google Maps API key
  # get our own: https://developers.google.com/maps/documentation/javascript/adding-a-google-map#key
  # used in layouts/partials/contact.map.html
  # if empty => fallback to URL (instead of map)
  # define environment variable (=> key is not stored in github)
  envGoogleMapsApiKey = "GoogleMapsApiKey"
  # if environment is not an option => define key here:
  #googleMapsApiKey = ""

  #googleMapsZoom   = 14
  googleMapsZoom   = 3
  latitude         = 46.946692
  longitude        =  7.444186

```
* Contact form with map

![screenshot Contact](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_290.jpg)

* Contact form with disabled Javascript

![screenshot Contact no JavaScript](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_300.jpg)


### Google Custom Search API

```toml
  # https://cse.google.com/cse/
  # used in layouts/partials/search.google.gcse.html
  googleCustomSearchCX = '002931815551392744433:tnypjyusk2e'
```

* Used in search page:

```toml
[[menu.topbar]]
  weight   = 5
  name     = "Search"
  url      = "/search"
  pre      = "fas fa-search"
```


* Google does not index github pages (?).   
  Search on exampleSite: https://it-gro.github.io/hugo-theme-w3css-basic.github.io/search/  
  is "empty" :-(


* Search form 
 
![screenshot Search](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_280.jpg)


* Search form with disabled Javascript

![screenshot Search no JavaScript](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_310.jpg)


### Footer

```toml
  # used in layouts/partials/footer.html
  # uses markdownify
  aboutUs   = '''
  ....
              '''

  address   = '''
  ....
              '''

  # used in layouts/partials/footer.bottom.html
  bottomLeft  = "Copyright (c) 2018, *lobortis nisl* ut aliquip ex ea commodo consequat"
  bottomRight = 'created with [Hugo](https://gohugo.io) '

```

![screenshot Footer](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_220.jpg)


## Front Matter

archetypes:
```
blog.md
pages.md
```

### Pages, Blogs

```
---
title:       "{{ replace .TranslationBaseName "-" " " | title }}"
date:        {{ .Date }}
toc:         false
icon:        "fab fa-font-awesome"
teaserpic:   "images/foo/bar/fa.png"
description: >
  I'm an **example** description.
  I'll show in teaser instead of (calculated) summary.
tags:
             - "example tag 1"
             - "example tag 2"
categories:
             - "example cat 1"
             - "example cat 2"
---
```

* for pages add:
```
weight:      42
```


### content/pages/*/_index.md


```
---
weight:      24
title:       "My **Stuff** :house:"
date:        2017-11-13T15:37:04+01:00
teaserpic:   "images/foo/bar/fa.png"
icon:        "fas fa-list"
---
```

* this defines how the page navigation entries look like. See [Pages Navigation](#pages-navigation) for more.



## Favicons

* You may want to use https://realfavicongenerator.net to create **all** files.

`layouts/partials/head.favicon.html`
```
{{ `<!-- partials/head.favicon.html -->` | safeHTML }}
{{- /*  <!-- Favicon and apple touch icons-->         */}} 
{{- /*  <!-- use https://realfavicongenerator.net --> */}} 
  <link rel="apple-touch-icon"      sizes="180x180" href="{{ relURL "/images/favicons/apple-touch-icon.png"       }}" />
  <link rel="icon" type="image/png" sizes="32x32"   href="{{ relURL "/images/favicons/favicon-32x32.png"          }}" />
  <link rel="icon" type="image/png" sizes="192x192" href="{{ relURL "/images/favicons/android-chrome-192x192.png" }}" />
  <link rel="icon" type="image/png" sizes="16x16"   href="{{ relURL "/images/favicons/favicon-16x16.png"          }}" />
  <link rel="manifest"                              href="{{ relURL "/images/favicons/manifest.json"              }}" />
  <link rel="mask-icon"  color="#5bbad5"            href="{{ relURL "/images/favicons/safari-pinned-tab.svg"      }}" />
  <link rel="shortcut icon"                         href="{{ relURL "/images/favicons/favicon.ico"                }}" />
  <meta name="msapplication-TileImage"           content="{{ relURL "/images/favicons/mstile-144x144.png"         }}" />
  <meta name="msapplication-config"              content="{{ relURL "/images/favicons/browserconfig.xml"          }}" />
  <meta name="msapplication-TileColor" content="#da532c" />
  <meta name="theme-color"             content="#ffffff" />
```

```
static/images/favicons/
├── android-chrome-144x144.png
├── android-chrome-192x192.png
├── android-chrome-256x256.png
├── android-chrome-36x36.png
├── android-chrome-48x48.png
├── android-chrome-72x72.png
├── android-chrome-96x96.png
├── apple-touch-icon-114x114.png
├── apple-touch-icon-114x114-precomposed.png
├── apple-touch-icon-120x120.png
├── apple-touch-icon-120x120-precomposed.png
├── apple-touch-icon-144x144.png
├── apple-touch-icon-144x144-precomposed.png
├── apple-touch-icon-152x152.png
├── apple-touch-icon-152x152-precomposed.png
├── apple-touch-icon-180x180.png
├── apple-touch-icon-180x180-precomposed.png
├── apple-touch-icon-57x57.png
├── apple-touch-icon-57x57-precomposed.png
├── apple-touch-icon-60x60.png
├── apple-touch-icon-60x60-precomposed.png
├── apple-touch-icon-72x72.png
├── apple-touch-icon-72x72-precomposed.png
├── apple-touch-icon-76x76.png
├── apple-touch-icon-76x76-precomposed.png
├── apple-touch-icon.png
├── apple-touch-icon-precomposed.png
├── browserconfig.xml
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── manifest.json
├── mstile-144x144.png
├── mstile-150x150.png
├── mstile-310x150.png
├── mstile-310x310.png
├── mstile-70x70.png
└── safari-pinned-tab.svg
```


## Shortcodes

* See https://it-gro.github.io/hugo-theme-w3css-basic.github.io/pages/hugo-theme-w3css-basic/page-shortcodes/

```
layouts/shortcodes/
├── asciicast.html
├── cscb.html
├── csc.html
├── heg-figure.html
├── heg-gallery.html
├── heg-load-photoswipe.html
├── heg-load-photoswipe-theme.html
├── i18n.html
├── icon.html
├── w3-alert-icon.html
├── w3-badge.html
├── w3-button-icon.html
├── w3-code.html
├── w3-codespan.html
├── w3-notice-icon.html
├── w3-quote.html
└── w3-tag.html
```

## Showcase

* See https://it-gro.github.io/hugo-theme-w3css-basic.github.io/pages/showcase/

`content/pages/showcase/video-01.md`
```
---
title:       "Hugo - Static Site Generator"
date:        2017-12-16T21:46:06+01:00
teaserpic:   
icon:        "fab fa-youtube"
description: "Giraffe Academy, Tutorial 1"
tags:
  - Showcase
categories:
  - This Theme
---

{{< youtube qtIqKaDlqXo >}}
```

## Gallery
* https://github.com/liwenyip/hugo-easy-gallery/

![screenshot Gallery](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_340.jpg)


`content/pages/showcase/gallery-01.md`
```
---
title:       "Gallery pixabay.com"
date:        2018-01-05T20:30:54+01:00
teaserpic:   
icon:        "fas fa-images"
description: "Pictures from pixabay.com"
tags:
  - Showcase
categories:
  - This Theme
---

{{< heg-load-photoswipe >}}
{{< heg-gallery dir="/images/photocards/pixabay.com" caption-effect="none" hover-effect="grow" />}} 
```

## Usage

In order to see your site in action, run Hugo's built-in local server.

```
$ export GoogleMapsApiKey=GEeawyBOuzOPzbFGizHKGReghibngUZTGjlioZM
$ hugo server -w --disableFastRender
```


Now enter [`localhost:1313`](http://localhost:1313) in the address bar of your browser.

For more information check out the official [Hugo documentation](http://gohugo.io/overview/usage/).


### Minifier

If you change the theme `w3css-basic.min.css`, `syntax.min.css` or
`front.js`, you have to apply a minifier. E.g.:

````bash
cd themes/hugo-theme-w3css-basic/static/css
yui-compressor --verbose --type css --line-break 1023 w3css-basic.css -o w3css-basic.min.css
yui-compressor --verbose --type css --line-break 1023 syntax.css      -o syntax.min.css
cd -

cd themes/hugo-theme-w3css-basic/static/js
yui-compressor --verbose --type js --line-break 1023 --nomunge --preserve-semi front.js -o front.min.js
cd -
````

or change the file names in 
`layouts/partials/head.stylesheets.html` and `layouts/partials/scripts.html`

## Workarounds

### summaryLength

* summaryLength was not configurable until hugo version 0.30
* teaserTruncateSummary was my workaround
* see [Summary](#summary)

### Shortcode output wrapped in <p>

[Shortcode output wrapped in <p> tags](https://github.com/gohugoio/hugo/issues/1642)

`layouts/_default/baseof.html`
````
{{- .Content | replaceRE "(?s:</div>\n?</p>)" "</div>" | replaceRE "(?s:</pre>\n?</p>)" "</pre>" | safeHTML }}
````

See https://discourse.gohugo.io/t/shortcodes-and-p-tags-2/9987




## Contributing

Did you found a bug or got an idea for a new feature? Feel free to use
the [issue
tracker](https://github.com/it-gro/hugo-theme-w3css-basic/issues) to
let us know. Or make directly a [pull
request](https://github.com/it-gro/hugo-theme-w3css-basic/pulls).


## License

This theme is released under the [MIT License](LICENSE.md).


## Thanks

Thanks to:

* [Steve Francia](https://discourse.gohugo.io/u/spf13)   
  [Bjørn Erik Pedersen](https://discourse.gohugo.io/u/bep)   
  you are amazing!

* [devcows](https://github.com/devcows/hugo-universal-theme) for
creating my starting point: the awesome [Universal](https://themes.gohugo.io/hugo-universal-theme/) theme.     
They ported from [Bootstrapious](https://bootstrapious.com/p/universal-business-e-commerce-template).

* www.w3schools.com for creating the free to use W3.CSS CSS framework.

* the contributors to any of                            
  https://fontawesome.com/icons/					    
  https://owlcarousel2.github.io/OwlCarousel2/		    
  https://daneden.me/animate						    
  https://github.com/liwenyip/hugo-easy-gallery/	    
  http://photoswipe.com								    
  https://pixabay.com                                   
  for all their work
  
## More Screenshots

* 1500x1000

![screenshot 1500x1000](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/screenshot.png)


* 900x600

![screenshot thumbnail 900x600](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/tn.png)

* Complete
![screenshot complete](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/complete.png)
