---
title:              headless-images
headless:           true
resources:

               # teaserpics/wikipedia.org
               # ##################################################
  - src:           teaserpics/wikipedia.org/emacs.png
    title:         Emacs Logo
    params:
      license:     GNU General Public License version 3 or later
      licenseAbrv: GPL3
      licenselink: https://www.gnu.org/licenses/gpl-3.0.html
      caption:     "%%T%%n%%A, %%L%%n%%O"
      originlink:  https://commons.wikimedia.org/wiki/File:EmacsIcon.svg
      attrby:      Nicolas Petton
      attrlink:

  - src:           teaserpics/wikipedia.org/emacs.svg
    title:         Emacs Logo
    params:
      license:     GNU General Public License version 3 or later
      licenseAbrv: GPL3
      licenselink: https://www.gnu.org/licenses/gpl-3.0.html
      caption:     "%%T%%n%%A, %%L%%n%%O"
      originlink:  https://commons.wikimedia.org/wiki/File:Emacs-logo.svg
      attrby:      Luis Fernandes, Dmitry Dzhus
      attrlink:

  - src:            teaserpics/wikipedia.org/*
    params:
      origin:       wikipedia.org
      license:      CC Attribution-ShareAlike 3.0 Unported
      licenseAbrv:  CC BY-SA 3.0
      licenselink:  https://creativecommons.org/licenses/by-sa/3.0/
      caption:      "%%N%%n%%A%%n%%L%%n%%O"
      captionShort: "%%A%%n%%l"

               # teaserpics/bitbucket.org
               # ##################################################
  - src:            teaserpics/bitbucket.org/*
    title:          pygments Logo
    params:          
      originlink:   https://bitbucket.org/birkenfeld/pygments-main/src/7941677dc77d4f2bf0bbd6140ade85a9454b8b80/doc/_static/logo_only.png
      license:      Simplified BSD License
      licenseAbrv:  BSD-2-Clause
      licenseLink:  https://bitbucket.org/birkenfeld/pygments-main/src/7941677dc77d4f2bf0bbd6140ade85a9454b8b80/LICENSE
      attrby:       Joel Unger
      attrlink:     https://dribbble.com/joelunger
      #caption:      "%%T%%n%%A, %%L%%n%%O"
      caption:      "%%N%%n%%A%%n%%L%%n%%O"
      captionShort: "%%A%%n%%l"

               # teaserpics/gohugo.io/*
               # ##################################################
  - src:           "teaserpics/gohugo.io/*"
    params:          
      origin:       github.com/gohugoio
      license:      Apache License 2.0
      licenseAbrv:  Apache-2.0
      licenseLink:  https://github.com/gohugoio/hugo/blob/master/LICENSE
      #caption:      "%%T%%n%%A, %%L%%n%%O"
      caption:      "%%N%%n%%A%%n%%L%%n%%O"
      #captionShort: "%%A%%n%%l"
      captionShort: "%%O%%n%%l"

               # **/pixabay.com
               # ##################################################
  - src:           "**/pixabay.com/*"
    params:          
      origin:       pixabay.com
      license:      Creative Commons CC0
      licenseAbrv:  CC0 1.0
      licenseLink:  https://pixabay.com/en/service/terms/
      #caption:      "%%T%%n%%A, %%L%%n%%O"
      caption:      "%%N%%n%%A%%n%%L%%n%%O"
      #captionShort: "%%A%%n%%l"
      captionShort: "%%O%%n%%l"

---

