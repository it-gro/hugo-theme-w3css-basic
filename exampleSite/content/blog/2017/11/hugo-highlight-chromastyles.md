---
title:         "Hugo - **highlight** :art:"
date:          2017-11-24T08:44:12+01:00
resImgTeaser:  teaserpics/bitbucket.org/pygments-main-logo.png
icon:        
tags:
  - Hugo
categories:
  - Web
draft:       false
---

Hugo comes with reallly **fast syntax highlighting** from Chroma.
From Hugo 0.28, the default syntax hightlighter in Hugo is Chroma; it
is built in Go and is really, really fast – and for the most important
parts compatible with Pygments.
See https://gohugo.io/content-management/syntax-highlighting for more.


In this theme we set

`config.toml`
{{< highlight toml >}}
pygmentsUseClasses = true
demo
{{< /highlight >}}

and provide `static/css/syntax.css` which is a copy of: `static/css/syntax/syntax.<STYLE>.css`   

The styles are:
`autumn borland bw colorful default emacs friendly fruity manni monokai murphy native pastie perldoc rrt tango trac vim vs`

These files were created with: `hugo gen chromastyles --style=vs > syntax.vs.css`
Available styles are listed here: https://help.farbox.com/pygments.html


An alternative would be:

`config.toml`
{{< highlight toml >}}
pygmentsUseClasses = false
# choose one:
#pygmentsStyle = "autumn"
#pygmentsStyle = "borland"
#pygmentsStyle = "bw"
#pygmentsStyle = "colorful"
#pygmentsStyle = "default"
pygmentsStyle = "emacs"
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
{{< /highlight >}}




These are the supported languages:

{{< chroma-lexers >}}


Check https://github.com/alecthomas/chroma for more information.

