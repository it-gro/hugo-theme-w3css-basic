---
title:          Attachments
date:           2018-04-09T13:38:46+02:00
icon:           fas fa-paperclip
resImgTeaser:   teaserpics/pixabay.com/paperclip-178126_640.jpg
toc:            true
tags:
  - Showcase
  - shortcodes
  - resources
categories:
  - This Theme
resources:
  - src: "**.pdf"
    title: pdf-file-:counter
    params:
      icon: "far fa-file-pdf"
---


Add page resources of type *application* as attachments to a page via the
`res-attach` shortcode.
<!--more-->

# Demo 1 

Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci
commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget,
lacus. Sed diam.

{{< res-attach >}}

*shortcode above*
{{< w3-code >}}
{{</* res-attach */>}}
{{< /w3-code >}}


# res-attach Parameters


Argument | Position -1 | Default           | What           | Remark
---------|-------------|-------------------|----------------|-------
match    | 0           | **                | glob           | only resources of type application
label    | 1           | Attachments       | label          | piped into i18n
icon     | 2           | fas fa-paperclip  | label icon     | 


# Demo 2
Praesent fermentum tempor tellus. Nullam tempus. Mauris ac felis vel velit
tristique imperdiet. Donec at pede. Etiam vel neque nec dui dignissim
bibendum. Vivamus id enim. 

## Attachments
{{< res-attach "**/*.pdf" "" "" >}}

*shortcode above*
{{< w3-code >}}
{{</* res-attach "** /*.pdf" "" "" */>}}
{{< /w3-code >}}

# Demo 3

Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci
commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget,
lacus. Sed diam. Praesent fermentum tempor tellus.

{{< res-attach "**/*.{doc,xls}*" "See more here" "fas fa-eye" >}}

*shortcode above*
{{< w3-code >}}
{{</* res-attach "** /*.{doc,xls}*" "See more here" "fas fa-eye" */>}}
{{< /w3-code >}}
