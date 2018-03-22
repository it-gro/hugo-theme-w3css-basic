# W3.CSS Basic Theme for Hugo

W3.CSS Basic is a website template built with [W3.CSS](https://www.w3schools.com/w3css/).  
Inspiration was taken from [Universal](https://themes.gohugo.io/hugo-universal-theme/).
It is quite [configurable](//github.com/it-gro/hugo-theme-w3css-basic/tree/master/exampleSite/config.toml)
Change all colors in the blink of an eye,  choose Google fonts or use the new Global Site Tags.

See the [exampleSite](https://it-gro.github.io/hugo-theme-w3css-basic.github.io/) for a demo.

This theme is for:

* Landing pages 
* Blogs
* Pages (not blog) in a directory structure with simple navigation (Top/Up/Down & pages on this level)
* People who like [monochromatic colors](https://www.w3schools.com/colors/colors_monochromatic.asp)


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
* https://developers.google.com/gtagjs/devguide/snippet


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
    * [Disqus](#disqus)
  * [Pages](#pages)
    * [Pages Navigation](#pages-navigation)
  * [Color Theme](#color-theme)
  * [Favicons](#favicons)
  * [Emoji](#emoji)
  * [Summary](#summary)
  * [Pagination](#pagination)
  * [Syntax Highlighting](#syntax-highlighting)
  * [Menu](#menu)
  * [Fonts](#fonts)
    * [Choose any Font via googleapis](#choose-any-font-via-googleapis)
  * [Contact Map](#contact-map)
  * [Google Translation](#google-translation)
  * [Google Custom Search API](#google-custom-search-api)
  * [Google Analytics-Tracking using gtag](#google-analytics-tracking-using-gtag)
  * [Footer](#footer)
  * [RSS](#rss)
  * [Tracing](#tracing)
* [Custom CSS and JS](#custom-css-and-js)
* [Front Matter](#front-matter)
* [Shortcodes](#shortcodes)
* [Gallery](#gallery)
* [Figure](#figure)
* [Showcase](#showcase)
* [Usage](#usage)
  * [Minifier](#minifier)
* [Workarounds](#workarounds)
   * [summaryLength](#summarylength)
   * [Shortcode output wrapped in &lt;p&gt;](#shortcode-output-wrapped-in-p)
* [Tracking](#tracking)
* [ToDo's](#todos)
* [Contributing](#contributing)
* [License](#license)
* [Thanks](#thanks)
* [More Screenshots](#more-screenshots)


## Goals

My goals for this theme are:

* be as universal as the [Universal](https://themes.gohugo.io/hugo-universal-theme/) theme
* create a [W3.CSS](https://www.w3schools.com/w3css/) theme (there are many [Bootstrap](https://getbootstrap.com/) themes)
* mobile first, responsive
* basic usage without javascript has to be possible 
* do as much as possible not to expose visitors to tracking by third-party against their will
* try to be [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* support experimenting with [monochromatic colors](https://www.w3schools.com/colors/colors_monochromatic.asp)
* use teaser pictures and icons as eye-catcher


## Features

* [Monochromatic Color](https://www.w3schools.com/colors/colors_monochromatic.asp) Schemes
* Works with disabled javascript (using fallbacks)
* [Responsive design](https://search.google.com/test/mobile-friendly?url=https://it-gro.github.io/hugo-theme-w3css-basic.github.io)
  * 3 (medium, lage) or 1 (small) column layout
  * small menu (truncated) on small screen (no collapse)
* Customizable landing page
  * optional marquee (using css)
  * optional data/jumbotron    (carousel (if js is enabled) )
  * optional data/photocards   (optional css animation)
  * optional data/features     (optional css animation)
  * optional data/testimonials (carousel (if js is enabled) )
  * optional data/clients      (carousel (if js is enabled) )
* [Fontawesome](https://fontawesome.com/icons?d=gallery) version 5 (local)
* [Google fonts](https://fonts.google.com/) - either via api (any font) or via local files (choose local to reduce tracking)
* Optional [google translate](https://translate.google.com/manager/website) widget (if js is enabled - disable it to reduce tracking)
* Optional  [Google Global Site Tags](https://developers.google.com/gtagjs/) with your [GA_TRACKING_ID](https://support.google.com/analytics/answer/1008080) (do not activate to reduce tracking))
* Contact page
  * optional [formspree.io ](https://formspree.io)
  * mailto: without [formspree.io ](https://formspree.io) (avoid tracking & leaking)
  * [google map](https://developers.google.com/maps/documentation/javascript/) (if js is enabled - do not provide coordinates to reduce tracking)
* Search page
  * [google customizable search](https://cse.google.ch/cse) api (if js is enabled - just do not include search in menu to reduce tracking)
* [Alternative navigation](#pages-navigation) instead of breadcrumbs (Top/Up/Down & pages on this level)
* [hugo-easy-gallery](https://www.liwen.id.au/heg/) (including [PhotoSwipe](http://photoswipe.com/) which needs js)
  



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
directory. You will find a working [Hugo
site](https://it-gro.github.io/hugo-theme-w3css-basic.github.io/)
configured with this theme that you can use as a starting point for
your site.

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

```toml
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

```toml
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
```toml
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
```toml
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
```toml
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
```toml
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
```toml
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
name:        "John Doe"
position:    "CEO, Takimata"
avatar:      "images/testimonials/pixabay.com/person-1.jpg"
text:        | 
  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
  suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
  vel eum iriure dolor in hendrerit in vulputate velit esse molestie
  consequat, vel illum dolore eu feugiat
```

#### Clients

```toml
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
url:    "http://www.example.com"
```



### Blog

#### Blog List
```toml
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
├── 1985
│   └── 03
│       └── emacs-jokes.md
└── 2017
    ├── 09
    │   └── emacs-it-all-starts-here.md
    ├── 10
    │   └── golang-a-closer-look.md
    └── 11
        ├── hugo-dolor.md
        ├── hugo-highlight-chromastyles.md
        ├── hugo-ipsum.md
        └── hugo-lorem.md
```

`hugo-highlight-chromastyles.md`:

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


#### Disqus

* Hugo ships with an internal Disqus template: https://gohugo.io/content-management/comments/
* I wanted:
  * a button the user has to click to show the comments
  * configure whether the comment count is shown on the button or not (disqus.com/count.js)
* I took some ideas from  https://discourse.gohugo.io/t/delaying-disqus-comments-to-save-a-ton-of-requests/6847

![screenshot Blog Disqus Open](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_380.jpg)


```toml
# Enable comments by entering your Disqus shortname
disqusShortname = "it-gro-github-io-hugo-theme-w3css-basic-github-io"

[params]
  # disqus (theme)
  # ##############################

  # used in partials/blog.disqus-button.html 
  # set to true, if you want to show the count of comments
  # fires an async request to disqus.com/count.js
  disqusButtonShowCount = false
```


* No JavaScript fallback

![screenshot Blog Disqus NoJs](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_350.jpg)


* disqusButtonShowCount = false

![screenshot Blog Disqus NoCount](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_360.jpg)


* disqusButtonShowCount = true

![screenshot Blog Disqus Count](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_370.jpg)



Hook:

`layouts/blog/single.html`
```
{{ define "blog-disqus" }}
  {{ partial "blog.disqus-button.html" . }}
{{ end }}
```

=> review `layouts/partials/blog.disqus-button.html`


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
  colorDisqusButton                     = "w3-theme-l3"
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


## Favicons

```toml
[params.favicon]
  # you may want to use https://realfavicongenerator.net to generate your files
  # used in layouts/partials/head.favicon.html
  # relURL is applied to path 
  enable                 = false
  path                   = "/images/favicons"
  version                = "a_random_value"
  maskIcon               = "#5bbad5"
  msapplicationTileColor = "#da532c"
  themeColor             = "#ffffff"
```


`layouts/partials/head.favicon.html`
```
{{- $myFaviconVersion := default "a_random_value"   $.Site.Params.favicon.version }}
{{- $myFaviconPath    := default "/images/favicons" $.Site.Params.favicon.path    }}
  <link rel="apple-touch-icon"      sizes="180x180" href="{{(printf `%s/%s?v=%s` $myFaviconPath `apple-touch-icon.png`       $myFaviconVersion ) | relURL }}" />
  <link rel="icon" type="image/png" sizes="16x16"   href="{{(printf `%s/%s?v=%s` $myFaviconPath `favicon-16x16.png`          $myFaviconVersion ) | relURL }}" />
  <link rel="icon" type="image/png" sizes="192x192" href="{{(printf `%s/%s?v=%s` $myFaviconPath `android-chrome-192x192.png` $myFaviconVersion ) | relURL }}" />
  <link rel="icon" type="image/png" sizes="32x32"   href="{{(printf `%s/%s?v=%s` $myFaviconPath `favicon-32x32.png`          $myFaviconVersion ) | relURL }}" />
  <link rel="manifest"                              href="{{(printf `%s/%s?v=%s` $myFaviconPath `manifest.json`              $myFaviconVersion ) | relURL }}" />
  <link rel="shortcut icon"                         href="{{(printf `%s/%s?v=%s` $myFaviconPath `favicon.ico`                $myFaviconVersion ) | relURL }}" />
  <meta name="msapplication-TileImage"           content="{{(printf `%s/%s?v=%s` $myFaviconPath `mstile-144x144.png`         $myFaviconVersion ) | relURL }}" />
  <meta name="msapplication-config"              content="{{(printf `%s/%s?v=%s` $myFaviconPath `browserconfig.xml`          $myFaviconVersion ) | relURL }}" />
  <link rel="mask-icon"                             href="{{(printf `%s/%s?v=%s` $myFaviconPath `safari-pinned-tab.svg`      $myFaviconVersion ) | relURL }}"
                                                   color="{{default `#5bbad5` $.Site.Params.favicon.maskIcon }}"   />
  <meta name="msapplication-TileColor"           content="{{default `#da532c` $.Site.Params.favicon.msapplicationTileColor }}"  />
  <meta name="theme-color"                       content="{{default `#ffffff` $.Site.Params.favicon.themeColor }}" />
```


So you need at least these files in your project:

```
static/images/favicons/
├── android-chrome-192x192.png
├── apple-touch-icon.png
├── browserconfig.xml
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── manifest.json
├── mstile-144x144.png
└── safari-pinned-tab.svg
```


* if `baseURL` containts paths (like `example.com/foo/bar`) you
  need to make sure this path (`/foo/bar/`) is also given in browserconfig.xml and
  manifest.json



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


```
{{< highlight perl "linenos=table,hl_lines=5 7-8 21,linenostart=1" >}}
#!/usr/bin/perl
...
{{< /highlight >}}
```


=> https://it-gro.github.io/hugo-theme-w3css-basic.github.io/pages/showcase/code-01/ 




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

  # used in layouts/partials/header.nav.html
  #         layouts/partials/header.nav.google.translate.html
  googleTranslateEnable    = true
  googleTranslateShowOnHome= false
```





### Fonts

```toml
[params]
  # used in layouts/partials/head.html
  # if fontsUseGoogleApis=true then choose your fonts in [params.googleApiFonts.family.*]  (see below)
  fontsUseGoogleApis=false
```

* false: load fonts from `/static/vendor/google/fonts`. Use e.g. https://google-webfonts-helper.herokuapp.com/fonts to download google fonts.
* true: load fonts via Google font API 


```
{{ partial "head.stylesheets.html"      . -}}
  {{- if .Site.Params.fontsUseGoogleApis }}
    {{ partial "head.fonts.googleapis.html" . -}}
  {{- else }}
    {{ partial "head.fonts.local.html"      . -}}
  {{- end }}
```

#### Choose any Font via googleapis

If you set `fontsUseGoogleApis=true` you can choose any font from
https://fonts.google.com

Hash Borgir had a cool idea: [How To Dynamically Use Google Fonts In A Hugo
Website](https://stoned.io/web-development/hugo/How-To-Dynamically-Use-Google-Fonts-In-A-Hugo-Website/).
I had the same goal. It's all configured in the
[config.toml](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/exampleSite/config.toml)
file.


Here's the relevant part:


```toml
[params.googleApiFonts.family]
  # https://www.w3.org/Style/Examples/007/fonts.en.html
  # the predefined generic font names are:
  # sans-serif = ""
  # serif      = ""
  # monospace  = ""
  # cursive    = ""
  # fantasy    = ""

  # used in static/vendor/w3css/4/w3.css
  #   code,kbd,pre,samp     : monospace
  #   html,body             : sans-serif
  #   h1                    : serif
  #   h1,h2,h3,h4,h5,h6     : sans-serif
  #   .w3-code,.w3-codespan : Consolas,"courier new"

  # https://www.w3schools.com/tags/ref_byfunc.asp
  # tagsText        = [ "html", "body" ]
  tagsText        = [ "html", "body", "abbr", "address", "blockquote", "cite", "dfn", "em", "ins", "mark", "s", "time" ]
  tagsHeading     = [ "h1", "h2", "h3", "h4", "h5", "h6" ]
  tagsMono        = [ "pre", "code", "kbd", "samp" ]

  # these parameter sections must exist, the others are optional
  fallbackText    = "html"
  fallbackHeading = "h1"
  fallbackMono    = "pre"

[params.googleApiFonts.family.html]
  # serif, sans-serif or even cursive
  sans-serif      = "Oswald"

[params.googleApiFonts.family.h1]
  # serif, sans-serif or even cursive
  sans-serif = "Creepster"

[params.googleApiFonts.family.pre]
  # monospace or sans-serif
  monospace  = "Space Mono"
[params.googleApiFonts.family.kbd]
  monospace  = ""
[params.googleApiFonts.family.samp]
  sans-serif = "Roboto"

```

This would lead to:

```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald|Creepster|Space+Mono|Roboto" />
  <style> html {font-family: 'Oswald', sans-serif; } </style>
  <style> body {font-family: 'Oswald', sans-serif; } </style>
  <style> abbr {font-family: 'Oswald', sans-serif; } </style>
  <style> address {font-family: 'Oswald', sans-serif; } </style>
  <style> blockquote {font-family: 'Oswald', sans-serif; } </style>
  <style> cite {font-family: 'Oswald', sans-serif; } </style>
  <style> dfn {font-family: 'Oswald', sans-serif; } </style>
  <style> em {font-family: 'Oswald', sans-serif; } </style>
  <style> ins {font-family: 'Oswald', sans-serif; } </style>
  <style> mark {font-family: 'Oswald', sans-serif; } </style>
  <style> s {font-family: 'Oswald', sans-serif; } </style>
  <style> time {font-family: 'Oswald', sans-serif; } </style>
  <style> h1 {font-family: 'Creepster', sans-serif; } </style>
  <style> h2 {font-family: 'Creepster', sans-serif; } </style>
  <style> h3 {font-family: 'Creepster', sans-serif; } </style>
  <style> h4 {font-family: 'Creepster', sans-serif; } </style>
  <style> h5 {font-family: 'Creepster', sans-serif; } </style>
  <style> h6 {font-family: 'Creepster', sans-serif; } </style>
  <style> pre {font-family: 'Space Mono', monospace; } </style>
  <style> code {font-family: 'Space Mono', monospace; } </style>
  <style> kbd {} </style>
  <style> samp {font-family: 'Roboto', sans-serif; } </style>
```

* Note how `kbd` is "blanked" and `samp` has it's own style (just to give you the
  idea).


An other example would be:

```toml
[params.googleApiFonts.family]
  tagsText        = [ "html", "body", "time" ]
  tagsHeading     = [ "h1", "h2", "h3", "h4", "h5", "h6" ]
  tagsMono        = [ "pre", "code" ]
  fallbackText    = "html"
  fallbackHeading = "h1"
  fallbackMono    = "pre"

[params.googleApiFonts.family.html]
  sans-serif = "Poppins"
[params.googleApiFonts.family.time]
  cursive    = "Creepster"
[params.googleApiFonts.family.h1]
  sans-serif = "Days One"
[params.googleApiFonts.family.pre]
  monospace  = "Cousine"
```


gives:

```html
 <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins|Days+One|Cousine" />
  <style> html {font-family: 'Poppins', sans-serif; } </style>
  <style> body {font-family: 'Poppins', sans-serif; } </style>
  <style> time {font-family: 'Creepster', cursive; } </style>
  <style> h1 {font-family: 'Days One', sans-serif; } </style>
  <style> h2 {font-family: 'Days One', sans-serif; } </style>
  <style> h3 {font-family: 'Days One', sans-serif; } </style>
  <style> h4 {font-family: 'Days One', sans-serif; } </style>
  <style> h5 {font-family: 'Days One', sans-serif; } </style>
  <style> h6 {font-family: 'Days One', sans-serif; } </style>
  <style> pre {font-family: 'Cousine', monospace; } </style>
  <style> code {font-family: 'Cousine', monospace; } </style>
```

* So for the HTML tag `<time>` we use a different font-family. See
https://it-gro.github.io/hugo-theme-w3css-basic.github.io/pages/hugo-theme-w3css-basic/page-shortcodes/#html-tag
how this look's like (the actual fonts may vary since I change them just for fun ...).

* Of course this can be done via custom css as well, but here we have all in one
  place. Setting the fonts we need from fonts.googleapis.com and applying it to
  a bunch of tags. No pre or post processing needed.



A short version (just 2 fonts) looks like this:

```toml
  tagsText        = [ "html", "body" ]
  tagsHeading     = [ "h1", "h2", "h3", "h4", "h5", "h6" ]
  tagsMono        = [ "pre", "code" ]
  fallbackText    = "html"
  fallbackHeading = "html"
  fallbackMono    = "pre"

[params.googleApiFonts.family.html]
  cursive    = "Nova Slim"
[params.googleApiFonts.family.pre]
  monospace  = "Nova Mono"
```

gives:

```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nova+Slim|Nova+Mono" />
  <style> html {font-family: 'Nova Slim', cursive; } </style>
  <style> body {font-family: 'Nova Slim', cursive; } </style>
  <style> h1 {font-family: 'Nova Slim', cursive; } </style>
  <style> h2 {font-family: 'Nova Slim', cursive; } </style>
  <style> h3 {font-family: 'Nova Slim', cursive; } </style>
  <style> h4 {font-family: 'Nova Slim', cursive; } </style>
  <style> h5 {font-family: 'Nova Slim', cursive; } </style>
  <style> h6 {font-family: 'Nova Slim', cursive; } </style>
  <style> pre {font-family: 'Nova Mono', monospace; } </style>
  <style> code {font-family: 'Nova Mono', monospace; } </style>
```


* You need to go to https://fonts.google.com/  (preview the fonts).
* There is a usefull list: **Popular Pairings with ...** under *See Specimen*
* After selecting a Font click *Family Selected*. You see e.g.:

> Use the following CSS rules to specify these families:    
> font-family: 'Roboto', sans-serif;

(Do not add the "+" or "|" signs in the api url - this is done in the partial)

* You may want to check Hash Borgir
[article](https://stoned.io/web-development/hugo/How-To-Dynamically-Use-Google-Fonts-In-A-Hugo-Website/)
since he describes the https://fonts.google.com/ part with some screenshots.
  

Here is a random list of some fonts you may want to try to get the
impression. Copy them to the `[params.googleApiFonts.family.*]` sections.


```toml
sans-serif = "Capriola"
sans-serif = "Days One"
sans-serif = "Open Sans"
sans-serif = "Oswald"
sans-serif = "Oxygen"
sans-serif = "Paytone One"
sans-serif = "Poppins"
sans-serif = "Quantico"
sans-serif = "Raleway"
sans-serif = "Roboto"
sans-serif = "Ubuntu"

serif      = "Gabriela"
serif      = "Glegoo"
serif      = "Noticia Text"
serif      = "Roboto Slab"

monospace  = "Cousine"
monospace  = "Oxygen Mono"
monospace  = "Roboto Mono"
monospace  = "Space Mono"
monospace  = "Ubuntu Mono"

cursive    = "Caesar Dressing"
cursive    = "Carter One"
cursive    = "Courgette"
cursive    = "Creepster"
cursive    = "Parisienne"
cursive    = "Patrick Hand"
cursive    = "Rammetto One"
cursive    = "Rochester"
cursive    = "Romanesco"
```




### Contact Map


```toml 
[params] 
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

Here's how to use the environment variable:

```bash
$ export GoogleMapsApiKey=GEeawyBOuzOPzbFGizHKGReghibngUZTGjlioZM
$ hugo
```


* Contact form with map

![screenshot Contact](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_290.jpg)

* Contact form with disabled Javascript

![screenshot Contact no JavaScript](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_300.jpg)

* if no latitude or longitude is given, no map is shown


### Google Translation

![screenshot Google Translate](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_305.jpg)

```toml
[params.menuTopBar]
  googleTranslateEnable    = true
  googleTranslateShowOnHome= false
```

* the google translate widget is not shown:
  * on small displays
  * on the home page - if googleTranslateShowOnHome is set to false   
    (Google PageSpeed complains, Google bot gets confused)
* set googleTranslateEnable to false in order to disable google translate globaly


`layouts/partials/header.nav.html`
```
<div class="w3-bar w3-hide-small ... ">
  {{- if .Site.Params.menutopbar.googleTranslateEnable }}
    {{- if or (not .IsHome) .Site.Params.menutopbar.googleTranslateShowOnHome }}
  <span class="w3-bar-item w3-button w3-right">
    {{ partial "header.nav.google.translate.html" . -}}
  </span>
    {{- end }}
  {{- end }}
```

![screenshot Google Translate](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_306.jpg)


####  No translation is done for

* About and Adress in footer (class="notranslate")

`layouts/partials/footer.html`
```
    <div class="w3-col w3-third">
      <h4>{{ default "About" (i18n "aboutUs") }}</h4>
      <div class="notranslate">{{- .Site.Params.aboutUs | markdownify }}</div>
    </div> <!-- w3-col -->
```

* results of shortcode highlight (internal), w3-code, w3-codespan, cscb and csc
* currently results of markdown backticks get translated, which is odd

![screenshot Google Translate](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_307.jpg)



### Google Custom Search API

```toml
  # https://cse.google.com/cse/
  # used in layouts/partials/search.google.gcse.html
  googleCustomSearchCX = '002931815551392744433:tnypjyusk2e'
```

* Used for search page /search which is linked into the toolbar menu here:

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


### Google Analytics-Tracking using gtag

* The Global Site Tag (gtag.js) is the new version of Google Analytics JavaScript capture API.
* This theme uses the new gtags.js (not the old google analytics.js)
* [Analytics-Tracking using gtag.js](https://support.google.com/analytics/answer/1008080)
* [gtag.js Developer Guide](https://developers.google.com/gtagjs/)


```toml
# Enable Google Analytics by entering your tracking code
googleAnalytics = ""

[params]
  # https://developers.google.com/gtagjs/
  # used in layouts/partials/head.google.gtags.html
  # you need to enter the Tracking-ID above
  enableGoogleGtag=true
```

* Firefox has a [Tracking  Protection](https://support.mozilla.org/en-US/kb/tracking-protection) which
  prevents `gtag.js` tracking by default.
* `gtag.js` is not used if `enableGoogleGtag` is not set to `true` or the tracking code is not given (`googleAnalytics`)

```
{{- if and $.Site.Params.enableGooglesGtag $.Site.GoogleAnalytics }}
  {{- /* <!-- Global site tag (gtag.js) - Google Analytics --> */}}
  <script async src="https://www.googletagmanager.com/gtag/js?id={{$.Site.GoogleAnalytics}}"></script>
```



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


### RSS

* This theme uses the Hugo's embedded rss.xml https://gohugo.io/templates/rss/#the-embedded-rss-xml
* Default configuration is explained here:
  * https://gohugo.io/templates/rss/#configure-rss
  * https://gohugo.io/getting-started/configuration/#toml-configuration


```toml
# RSS Feed
# Do not build RSS files
disableRSS = false
# maximum number of items in the RSS feed
rssLimit   = 10
```


### Tracing

* If you like comments in the html source, this one is for you


```toml
# flags used for tracing and html comment output
  # currently used:
  #   html-comment          enable partials html comment output 
  #   debug-shortcodes      enable all shortcodes debugging output
  #   debug-shortcode-liti  enable all shortcode liti debugging output
  # traceFlags       = "html-comment:debug-shortcode-liti"
  traceFlags         = "html-comment"
```

If `traceFlags` includes the word `html-comment` some HTML comments will
be included in the html source code.


## Custom CSS and JS


* This theme comes with the following "empty" files

```
static/
├── css
│   ├── custom.css
├── js
│   ├── custom.bottom.js
│   ├── custom.top.js
```

* A project can create these in the project dir in order to overwrite them. See
  https://gohugo.io/themes/customizing/#override-static-files from more
  information.

* In addition the following arrays may be files with paths or URLS

```
  custom_css        = [ "css/custom_foo.css", "https://cdnjs.cloudflare.com/ajax/libs/minireset.css/0.0.2/minireset.min.css" ]
  custom_js_top     = [ "js/custom_top_bar.js" ]
  custom_js_bottom  = [ "js/custom_bottom_foo.js", "https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js" ]
```


```toml
[params]
  # used in layouts/partials/head.stylesheets.html
  # used in layouts/partials/scripts.bottom.html
  # used in layouts/partials/scripts.top.html
  custom_css        = [ ]
  custom_js_top     = [ ]
  custom_js_bottom  = [ ]
```



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



## Shortcodes

* See https://it-gro.github.io/hugo-theme-w3css-basic.github.io/pages/hugo-theme-w3css-basic/page-shortcodes/

```
layouts/shortcodes/
├── alert.html
├── asciicast.html
├── csc.html
├── cscb.html
├── hc.html
├── heg-figure.html
├── heg-gallery.html
├── heg-load-photoswipe.html
├── html-tag-classes.html
├── html-tag.html
├── html-tags.html
├── i18n.html
├── icon.html
├── kbd.html
├── liti.html
├── litt.html
├── litx.html
├── w3-alert-icon.html
├── w3-badge.html
├── w3-button-icon.html
├── w3-code.html
├── w3-codespan.html
├── w3-notice-icon.html
├── w3-quote.html
└── w3-tag.html
```

* currently experimental are:
  * [List by Title](https://it-gro.github.io/hugo-theme-w3css-basic.github.io/pages/hugo-theme-w3css-basic/page-shortcodes/#liti-list-by-title)
  * [List by Taxonomy / Term](https://it-gro.github.io/hugo-theme-w3css-basic.github.io/pages/hugo-theme-w3css-basic/page-shortcodes/#litt-list-by-taxonomy-term-just-one-result)
  * [List by Taxonomy with search](https://it-gro.github.io/hugo-theme-w3css-basic.github.io/pages/hugo-theme-w3css-basic/page-shortcodes/#litx-list-by-taxonomy-full-search)


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


* This themes version of `{{</* heg-gallery .. */>}}` improves the caption's configuration (filename):
  * show file extensions - or not
  * do humanize - or not
  * the values below are the defaults:

```toml
[params.gallery]
  # used in layouts/shortcodes/heg-gallery.html
  # showFileExtension = true
  # humanizeCaption   = false
```



## Figure

```
{{< heg-load-photoswipe >}}
{{< heg-figure link="/images/photocards/pixabay.com/04-photocard.jpg" caption-position="bottom" caption-effect="none" width="640px" caption="figure caption 4" attr="(c) by bar 4" attrlink="https://www.example.com" >}}
```

* This themes version of `{{</* heg-figure .. */>}}` improves the
  usage of `title caption attr attrlink` which are all optional

```
caption="figure caption 4" attr="(c) by bar 4" attrlink="https://www.example.com"
```

* Shown on page

![screenshot Figure](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_342.jpg)


* Shown with PhotoSwipe

![screenshot Figure](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/snap_344.jpg)


* See  https://it-gro.github.io/hugo-theme-w3css-basic.github.io/pages/hugo-theme-w3css-basic/page-shortcodes/#heg-figure for more examples


## Showcase

* See https://it-gro.github.io/hugo-theme-w3css-basic.github.io/pages/showcase/ for more quick examples


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

```bash
cd themes/hugo-theme-w3css-basic/static/css
yui-compressor --verbose --type css --line-break 1023 w3css-basic.css -o w3css-basic.min.css
yui-compressor --verbose --type css --line-break 1023 syntax.css      -o syntax.min.css
cd -

cd themes/hugo-theme-w3css-basic/static/js
yui-compressor --verbose --type js --line-break 1023 --nomunge --preserve-semi front.js -o front.min.js
cd -
```

or change the file names in 
`layouts/partials/head.stylesheets.html` and `layouts/partials/scripts.html`


## Workarounds

### summaryLength

* `summaryLength` was not configurable until hugo version 0.30
* `teaserTruncateSummary` was my workaround. But I think it still make
  sense since summaryLength is in words and teaserTruncateSummary is in
  characters.
* see [Summary](#summary)

### Shortcode output wrapped in &lt;p&gt;

[hugo/issues/1642: Shortcode output wrapped in &lt;p&gt; tags](https://github.com/gohugoio/hugo/issues/1642)

`layouts/_default/baseof.html`
```
{{- .Content | replaceRE "(?s:</div>\n?</p>)" "</div>" | replaceRE "(?s:</pre>\n?</p>)" "</pre>" | safeHTML }}
```

See https://discourse.gohugo.io/t/shortcodes-and-p-tags-2/9987

## Tracking

Beeing able to analyse the visitors behavior via the log files on the visited site is one thing.
But giving those informations to any third-party is not what the visitors expect by default.

* Why should a third-party (disqus.com) know which blog articles I'v read (even without commenting) ?
* Why should a third-party (formspree.io) beeing able to read the visitors messages (contact form) ?

If the visitors implicitly agree by clicking on a button ("see
comments on disqus.com" or "send message via formspree.io") then this
is perfecly fine (for me).

This is also why I tried to minimize the external url's and copied all
into the theme (`static/vendor/`*).


### How to minimize visitors exposure to tracking

* disable google gtags (analytics)
* disable google translate
* disable google fonts apis
* disable google maps
* disable menu.topbar search (google custom search)
* disable formspree (but keep your email)
* do not show a comment counter on the Disqus Button
* review result e.g. with [Firefox Lightbeam by Mozilla](https://addons.mozilla.org/en-GB/firefox/addon/lightbeam/)


```toml
#[[menu.topbar]]
#  weight   = 5
#  name     = "Search"
#  url      = "/search"
#  pre      = "fas fa-search"

[params]
  fontsUseGoogleApis = false
  # latitude  = 
  # longitude = 
  formspree = ""
  email     = "info@example.com"
  disqusButtonShowCount = false

[params.menuTopBar]
  googleTranslateEnable = false

```


## ToDo's

* more testing for the lit* shortcodes
* finish uglyURLs (e.g. submenu) + doc (how to deploy to filesystem)


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

* [www.w3schools.com](https://www.w3schools.com) for creating the free to use [W3.CSS](https://www.w3schools.com/w3css/) CSS framework.

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

![screenshot thumbnail 900x600](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/tn.1.png)

![screenshot thumbnail 900x600](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/tn.2.png)

![screenshot thumbnail 900x600](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/tn.3.png)


* Complete

![screenshot complete](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/complete.png)

---

