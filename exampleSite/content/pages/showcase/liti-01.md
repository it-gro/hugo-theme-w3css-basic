---
title:              "Shortcode liti"
date:               2018-01-18T20:01:00+01:00
resImgTeaser:  teaserpics/gohugo.io/hugo-dolor.png
icon:               "fas fa-search"
description:        "Shortcode **liti** *List by Title*"
toc:                true
tags:
  - Showcase
  - shortcodes
categories:
  - This Theme
---


## liti: List by Title

{{< cscb c >}}
{{</* liti "About Hugo" */>}}
{{< /cscb >}}

Here is the page with the title {{< liti "About Hugo" >}}



{{< cscb c >}}
{{</* liti "pixabay.com" "in" */>}}
{{< /cscb >}}
Pages with pixabay.com in it's title. 

Here they are: {{< liti "pixabay.com" "in" >}}
 


### All pages with hugo in it's title

{{< cscb c >}}
{{</* liti "hugo" "in" "i" "ul" */>}}
{{< /cscb >}}

Here they are: 

{{< liti "hugo" "in" "i" "ul" >}}



### Really all pages with hugo in it's title

{{< cscb c >}}
{{</* liti "hugo" "in" "i" "ul" "all" ".Kind .RelPermalink" */>}}
{{< /cscb >}}

Here they are: 

{{< liti "hugo" "in" "i" "ul" "all" ".Kind .RelPermalink" >}}

