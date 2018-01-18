---
title:       "Shortcode lkti"
date:        2018-01-18T20:01:00+01:00
teaserpic:
icon:        "fas fa-search"
description: "Shortcode **lkti** *Lookup by Title*"
toc:         true
tags:
  - Showcase
categories:
  - This Theme
---


## lkti: Lookup by Title

`{{</* lkti "About Hugo" */>}}`

Here is the page with the title {{< lkti "About Hugo" >}}



`{{</* lkti "pixabay.com" "in" */>}}`
Pages with pixabay.com in it's title. 

Here they are: {{< lkti "pixabay.com" "in" >}}
 


### All pages with hugo in it's title

`{{</* lkti "hugo" "in" "i" "ul" */>}}`

Here they are: 

{{< lkti "hugo" "in" "i" "ul" >}}



### Really all pages with hugo in it's title

`{{</* lkti "hugo" "in" "i" "ul" "all" ".Kind .RelPermalink" */>}}`

Here they are: 

{{< lkti "hugo" "in" "i" "ul" "all" ".Kind .RelPermalink" >}}

