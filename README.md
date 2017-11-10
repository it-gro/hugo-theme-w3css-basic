# W3.CSS Basic Theme for Hugo

[![Build Status](https://travis-ci.org/devcows/hugo-universal-theme.svg?branch=master)](https://travis-ci.org/devcows/hugo-universal-theme)
[![Code Climate](https://codeclimate.com/github/devcows/hugo-universal-theme/badges/gpa.svg)](https://codeclimate.com/github/devcows/hugo-universal-theme)

W3.CSS Basic is a website template built with W3.CSS.

This Hugo theme was inspired by [Universal](https://themes.gohugo.io/hugo-universal-theme/).

![screenshot complete](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/complete.png)
![screenshot theme orange](https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/images/screenshot.png)

## Table of Contents

* [ToDo](#todo)
* [Features](#features)
* [Installation](#installation)
* [Configuration](#configuration)
  * [Color Theme](#color-theme)
  * [Style](#style)
  * [Comments](#comments)
  * [Google Analytics](#google-analytics)
  * [Contact form](#contact-form)
  * [Menu](#menu)
  * [Sidebar widgets](#sidebar-widgets)
  * [Blog post thumbnails](#blog-post-thumbnails)
  * [Top bar](#top-bar)
  * [Landing page](#landing-page)
    * [Jumbotrons](#jumbotrons)
    * [Animations](#animations)
    * [Features](#features)
    * [Testimonials](#testimonials)
    * [See more](#see-more)
    * [Clients](#clients)
    * [Recent posts](#recent-posts)
    * [Carousel](#carousel)
    * [Meta tags](#meta-tags)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Thanks](#thanks)


## ToDo
* blog
* Recent posts
* Contact form by Formspree
* Google search
* Disqus comments
* Google Analytics
* Google translate


## Features

* Works with disabled javascript (using fallbacks)
* Responsive design
  * 3 or 1 column layout
  * small menu on small screen (no collapse)
* Customizable landing page
  * optional marquee (using css)
  * optional google translate  (if js is enabled)
  * optional data/jumbotron    (carousel(if js is enabled), optional css animation)
  * optional data/photocards   (optional css animation)
  * optional data/features     (optional css animation)
  * optional data/testimonials (carousel (if js is enabled) )
  * optional data/clients      (carousel (if js is enabled) )
* contact page
  * formspree.io contact form
  * google map (if js is enabled)
  

## Installation

Go to the directory where you have your Hugo site and run:

```
$ mkdir themes
$ cd themes
$ git clone https://github.com/it-gro/hugo-theme-w3css-basic
```

For more information read the official [setup guide](https://gohugo.io/overview/installing/) of Hugo.


## Configuration

After installing the Universal theme successfully, we recommend you to
take a look at the
[exampleSite](//github.com/it-gro/hugo-theme-w3css-basic/tree/master/exampleSite)
directory. You will find a working Hugo site configured with the
Universal theme that you can use as a starting point for your site.

First, let's take a look at the
[config.toml](//github.com/it-gro/hugo-theme-w3css-basic/tree/master/exampleSite/config.toml). It
will be useful to learn how to customize your site. Feel free to play
around with the settings.


### Language

Available translations are in the `/i18n` directory. You can configure
the language modifying the following key.


```toml
defaultContentLanguage = "en"
```

### Color Theme

All W3.CSS predefined color themes
(https://www.w3schools.com/w3css/w3css_color_themes.asp) are placed in
the `/static/vendor/w3css/4/` directory.


You may create your own color style using
https://www.w3schools.com/w3css/w3css_color_generator.asp and put the css file under `/static/css/w3-theme-custom.css`.


You then pick up the actual color style:

```toml
 w3cssColorTheme = "/css/w3-theme-custom.css"
#w3cssColorTheme = "/vendor/w3css/4/w3-theme-orange.css"
```

Available options (available theme files) are:
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



### Style

ToDo
* animation
* disabled javascript

### Comments
ToDo

### Google Analytics
ToDo

### Contact form
ToDo

### Menu
ToDo

### Sidebar widgets
ToDo

### Top bar
ToDo

### Blog post thumbnails
ToDo

### Landing page
ToDo

#### Jumbotrons
ToDo

#### Animations
ToDo

#### Features
ToDo

#### Testimonials
ToDo

#### See more
ToDo

#### Clients
ToDo

#### Recent posts
ToDo

#### Carousel
ToDo

#### Meta tags
ToDo



## Usage

In order to see your site in action, run Hugo's built-in local server.

```
$ hugo server -w --disableFastRender
```


Now enter [`localhost:1313`](http://localhost:1313) in the address bar of your browser.

For more information check out the official [Hugo documentation](http://gohugo.io/overview/usage/).


## Contributing

Did you found a bug or got an idea for a new feature? Feel free to use
the [issue
tracker](https://github.com/it-gro/hugo-theme-w3css-basic/issues) to
let us know. Or make directly a [pull
request](https://github.com/it-gro/hugo-theme-w3css-basic/pulls).


## License

This theme is released under the MIT License.

## Thanks

Thanks to:

* [Steve Francia](https://discourse.gohugo.io/u/spf13) for
creating Hugo and the awesome community around the project.

* I'v read a lot of helping posts from
[Bjørn Erik Pedersen](https://discourse.gohugo.io/u/bep) and [Rdwatters](https://discourse.gohugo.io/u/rdwatters)

* [devcows](https://github.com/devcows/hugo-universal-theme) for
creating this awesome theme. They ported
[Bootstrapious](https://bootstrapious.com/p/universal-business-e-commerce-template).

* www.w3schools.com for creating W3.CSS

