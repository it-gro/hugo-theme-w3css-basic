---
title:              Image Processing (`res-figure`)
date:               2018-04-06T20:18:31+02:00
icon:               far fa-images
resImgTeaser:  teaserpics/pixabay.com/particles-1373684_640.jpg
toc:                true
tags:
  - Showcase
  - shortcodes
  - resources
  - images
categories:
  - This Theme
resources:
  - src:           img/pixabay/*.jpg
    params:
      origin:      pixabay.com
      license:     Creative Commons CC0 
      licenselink: "https://pixabay.com/en/service/terms/#usage"
      caption:     "%%I%%n%%B%%n%%O"
      #caption:    "%%I%%n%%O%%n%%A%%n%%L%%n"
      
  - src:           img/pixabay/humboldt-penguin-3064468_1920.jpg
    title:         penguin-bird-water-animal
    params:
      originlink:  https://pixabay.com/en/humboldt-penguin-bird-water-animal-3064468/
      attrby:      minka2507
      attrlink:    https://pixabay.com/en/users/minka2507-3728206/
      
  - src:           img/pixabay/penguin-1196947_1920.jpg
    title:         penguin-1196947
    params:
      originlink:  https://pixabay.com/en/penguin-water-bird-swim-animal-1196947/
      attrby:      Andreas Lischka
      attrlink:    https://pixabay.com/en/users/webandi-1460261/
      
  - src:           img/pixabay/penguin-2104173_1920.jpg
    title:         ""   # clear title
    params:
      originlink:  https://pixabay.com/en/penguin-rockhopper-penguin-zoo-2104173/
      attrby:      Michael Frankenstein
      attrlink:    https://pixabay.com/en/users/frankenstein-2135887/
      imgopt:      400x
      
  - src:           img/pixabay/penguin-2528615_1920.jpg
    params:
      originlink:  https://pixabay.com/en/penguin-bird-water-bird-animal-2528615/
      attrby:      Ralph
      attrlink:    https://pixabay.com/en/users/Capri23auto-1767157/
      
  - src:           img/pixabay/penguin-2753282_1920.jpg
    params:
      originlink:  https://pixabay.com/en/penguin-animal-animal-world-2753282/
      attrby:      Alexandra
      attrlink:    https://pixabay.com/en/users/Alexas_Fotos-686414/
      
  - src:           img/pixabay/penguin-935982_1920.jpg
    params:
      originlink:  https://pixabay.com/en/penguin-humboldt-penguin-water-swim-935982/
      attrlink:    https://pixabay.com/en/users/Gassflor-1356588/
      attrby:      Flo G
      
  - src:           img/pixabay/penguin-963703_1920.jpg
    params:
      originlink:  https://pixabay.com/en/penguin-animal-animals-antarctica-963703/
      attrby:      boudewijns8880
      attrlink:    https://pixabay.com/en/users/boudewijns8880-1460019/
---

Image page resources can be resized and cropped. 
This only works for
[images](https://gohugo.io/content-management/image-processing/#the-image-page-resource)
which are [page
resources](https://gohugo.io/content-management/page-resources/), not for images
in the /static folder.
This theme provides a shortcode `res-figure`  for page resource image processing.
<!--more-->


# Demo /* Resize 150x 
{{< w3-code >}}
{{</* res-figure "." "img/pixabay/pixabay/*" "Resize" "150x" "%%I%%n%%F" >}}{{< /res-figure /*/>}}
{{< /w3-code >}}

{{< res-figure "."  "**/pixabay/*" "Resize" "150x" "%%I%%n%%F" />}} 

# Configuration
## Front Matter Resources

```yaml
resources:
  - src:           img/pixabay/*.jpg
    params:
      origin:      pixabay.com
      license:     Creative Commons CC0 
      licenselink: https://pixabay.com/en/service/terms/#usage
      caption:     "%%I%%n%%B%%n%%O"
  - src:           img/pixabay/penguin-2104173_1920.jpg
    params:
      originlink:  https://pixabay.com/en/penguin-rockhopper-penguin-zoo-2104173/
      attrby:      Michael Frankenstein
      attrlink:    https://pixabay.com/en/users/frankenstein-2135887/
      imgcmd:      Resize
      imgopt:      400x
      
```

## res-figure Parameters

Argument | Position -1 | Default | What                  | Remark
---------|-------------|---------|-----------------------|-------
path     | 0           | "."     | path to resource page | 
match    | 1           | *       | images                | in page resource
cmd      | 2           | Resize  | command               | Fill, Fit or Resize
opt      | 3           | 300x    | options               | command options
cap      | 4           | %%N     | caption format        | see below



### Caption format
Code | What
-----|-------------
%%n  | newline
%%f  | .Name
%%F  | Filename
%%B  | Basename
%%T  | .Title
%%N  | .Title or Basename
%%L  | license
%%O  | origin
%%A  | attr
%%I  | image info

`res-figure.html`
{{< highlight go-html-template >}}
      {{- $myCapFileName     := replaceRE `.*/`      (``) ($myResource.Name) }}
      {{- $myCapFileBase     := replaceRE `\.[^.]+$` (``) ($myCapFileName)   }}
      {{- $myCapFileHumanize := humanize $myCapFileBase }}
       
      {{- $myCaption := replaceRE `%%n` (`<br>`)             $myCaption }}
      {{- $myCaption := replaceRE `%%f`  ($myResource.Name)  $myCaption }}
      {{- $myCaption := replaceRE `%%F`  ($myCapFileName)    $myCaption }}
      {{- $myCaption := replaceRE `%%B`  ($myCapFileBase)    $myCaption }}
      {{- $myCaption := replaceRE `%%T`  ($myResource.Title) $myCaption }}
      {{- $myCaption := replaceRE `%%N`  (cond (eq $myResource.Name $myResource.Title) (humanize $myCapFileBase) (humanize $myResource.Title) ) $myCaption }}
      {{- $myCaption := replaceRE `%%L`  (cond (not (isset $myResource.Params "licenselink") ) ($myResource.Params.license) (printf "<a href='%s'>%s</a>" $myResource.Params.licenselink $myResource.Params.license) ) $myCaption }}
      {{- $myCaption := replaceRE `%%O`  (cond (not (isset $myResource.Params "originlink" ) ) ($myResource.Params.origin)  (printf "<a href='%s'>%s</a>" $myResource.Params.originlink  $myResource.Params.origin)  ) $myCaption }}
      {{- $myCaption := replaceRE `%%A`  (cond (not (isset $myResource.Params "attrlink"   ) ) ($myResource.Params.attrby)  (printf "<a href='%s'>%s</a>" $myResource.Params.attrlink    $myResource.Params.attrby)  ) $myCaption }}
      {{- $myCaption := replaceRE `%%I`  (printf "%s '%s'" $myCommand $myOptions) $myCaption }}
{{< /highlight >}}

## Image processing commands

See https://gohugo.io/content-management/image-processing/


# Showcase
## Demo /penguin-21*
{{< w3-code >}}
{{</* res-figure "." "img/pixabay/penguin-21*" />}} 
{{< res-figure "." "img/pixabay/penguin-21*" "Fit"  "200x200" />}} 
{{< res-figure "." "img/pixabay/penguin-21*" "Fill" "200x200" "%%I%%n%%O%%n%%A" />}} 
{{< res-figure path="." match="img/pixabay/penguin-21*" opt="100x" cap="%%I%%n%%F" />}} 
{{< res-figure path="." match="**_/penguin-21" cmd="Fill" opt="150x200" /*/>}} 
{{< /w3-code >}}

{{< res-figure "." "img/pixabay/penguin-21*" />}} 
{{< res-figure "." "img/pixabay/penguin-21*" "Fit"  "200x200" />}} 
{{< res-figure "." "img/pixabay/penguin-21*" "Fill" "200x200" "%%I%%n%%O%%n%%A" />}} 
{{< res-figure path="." match="img/pixabay/penguin-21*" opt="100x" cap="%%I%%n%%F" />}} 
{{< res-figure path="." match="**/penguin-21" cmd="Fill" opt="150x200" />}} 

## Demo /penguin-11*
{{< w3-code >}}
{{</* res-figure "." "img/pixabay/penguin-11*" />}} 
{{< res-figure "." "img/pixabay/penguin-11*" "Fit"  "200x200" />}} 
{{< res-figure "." "img/pixabay/penguin-11*" "Fill" "200x200" /*/>}} 
{{< /w3-code >}}

{{< res-figure "." "img/pixabay/penguin-11*" />}} 
{{< res-figure "." "img/pixabay/penguin-11*" "Fit"  "200x200" />}} 
{{< res-figure "." "img/pixabay/penguin-11*" "Fill" "200x200" />}} 

## Demo /penguin-27*
{{< w3-code >}}
{{</* res-figure "." "img/pixabay/penguin-27*" />}} 
{{< res-figure "." "img/pixabay/penguin-27*" "Fit"  "200x200" />}} 
{{< res-figure "." "img/pixabay/penguin-27*" "Fill" "200x200" /*/>}} 
{{< /w3-code >}}

{{< res-figure "." "img/pixabay/penguin-27*" />}} 
{{< res-figure "." "img/pixabay/penguin-27*" "Fit"  "200x200" />}} 
{{< res-figure "." "img/pixabay/penguin-27*" "Fill" "200x200" />}} 

## Demo /penguin-96*
{{< w3-code >}}
{{</* res-figure "." "img/pixabay/penguin-96*" />}} 
{{< res-figure "." "img/pixabay/penguin-96*" "Fit"  "200x200" />}} 
{{< res-figure "." "img/pixabay/penguin-96*" "Fill" "200x200" /*/>}} 
{{< /w3-code >}}

{{< res-figure "." "img/pixabay/penguin-96*" />}} 
{{< res-figure "." "img/pixabay/penguin-96*" "Fit"  "200x200" />}} 
{{< res-figure "." "img/pixabay/penguin-96*" "Fill" "200x200" />}} 

## Demo /penguin-25*
{{< w3-code >}}
{{</* res-figure "." "img/pixabay/penguin-25*" />}} 
{{< res-figure "." "img/pixabay/penguin-25*" "Fit"  "200x200" />}} 
{{< res-figure "." "img/pixabay/penguin-25*" "Fill" "200x200" "%%I%%n(smartcrop fails)" />}} 
{{< res-figure "." "img/pixabay/penguin-25*" "Fill" "200x200 left" /*/>}} 
{{< /w3-code >}}

{{< res-figure "." "img/pixabay/penguin-25*" />}} 
{{< res-figure "." "img/pixabay/penguin-25*" "Fit"  "200x200" />}} 
{{< res-figure "." "img/pixabay/penguin-25*" "Fill" "200x200" "%%I%%n(smartcrop fails)" />}} 
{{< res-figure "." "img/pixabay/penguin-25*" "Fill" "200x200 left" />}} 

## Demo /penguin-93*
{{< w3-code >}}
{{</* res-figure "." "img/pixabay/penguin-93*" />}} 
{{< res-figure "." "img/pixabay/penguin-93*" "Fit"  "200x200" />}} 
{{< res-figure "." "img/pixabay/penguin-93*" "Fill" "200x200" "%%I%%n(smartcrop fails)" />}} 
{{< res-figure "." "img/pixabay/penguin-93*" "Fill" "200x200 right" /*/>}} 
{{< /w3-code >}}

{{< res-figure "." "img/pixabay/penguin-93*" />}} 
{{< res-figure "." "img/pixabay/penguin-93*" "Fit"  "200x200" />}} 
{{< res-figure "." "img/pixabay/penguin-93*" "Fill" "200x200" "%%I%%n(smartcrop fails)" />}} 
{{< res-figure "." "img/pixabay/penguin-93*" "Fill" "200x200 right" />}} 

## Demo with Text

Nullam eu ante vel est convallis dignissim. {{< res-figure "."
"img/pixabay/penguin-1196947" />}} Fusce suscipit, wisi nec facilisis facilisis,
est dui fermentum leo, quis tempor ligula erat quis odio. Nunc porta vulputate
tellus. Nunc rutrum turpis sed pede. Sed bibendum. Aliquam posuere. Nunc
aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis
varius mi purus non odio. Nullam eu ante vel est convallis dignissim. Fusce
suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor
ligula erat quis odio. Nunc porta vulputate tellus. Nunc rutrum turpis sed
pede. Sed bibendum. Aliquam posuere. Nunc aliquet, augue nec adipiscing
interdum, lacus tellus malesuada massa, quis varius mi purus non odio.
Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla,
non luctus diam neque sit amet urna. 

Curabitur vulputate vestibulum lorem. Fusce sagittis, libero non molestie
mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros. Sed
id ligula quis est convallis tempor. Curabitur lacinia pulvinar nibh. Nam a
sapien. {{< res-figure "." "img/pixabay/penguin-2528615" />}} Pellentesque
condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus
diam neque sit amet urna. Curabitur vulputate vestibulum lorem. Fusce
sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate
neque nulla lacinia eros.


Pellentesque dapibus suscipit ligula. Donec posuere augue in quam. Etiam vel
tortor sodales tellus ultricies commodo.
{{< res-figure "." "img/pixabay/penguin-2104173" />}} 

Suspendisse potenti. Aenean in sem ac leo mollis blandit. Donec neque quam,
dignissim in, mollis nec, sagittis eu, wisi. Phasellus lacus. Etiam laoreet
quam sed arcu. Phasellus at dui in ligula mollis ultricies. Integer placerat
tristique nisl.

* Nunc porta vulputate tellus {{< res-figure "." "img/pixabay/penguin-2104173" />}} 
* Magna orci ultrices dolor {{< res-figure "." "img/pixabay/penguin-1196947" />}} 

Curabitur vulputate vestibulum lorem. Fusce sagittis, libero non molestie
mollis.

* Ibero non molestie mollis    
{{< res-figure "." "img/pixabay/penguin-2528615" />}} 
* Vulputate vestibulum lorem    
{{< res-figure "." "img/pixabay/humboldt-penguin-3064468" />}} 


## Demo with inner

Pellentesque dapibus suscipit ligula. Donec posuere augue in quam. Etiam vel
tortor sodales tellus ultricies commodo. Suspendisse potenti. Aenean in sem ac
leo mollis blandit.

{{< res-figure "." "img/pixabay/penguin-1196947" >}} Aenean in sem ac leo mollis
blandit. Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi {{<
/res-figure >}}

Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi. Phasellus lacus.
Etiam laoreet quam sed arcu. Phasellus at dui in ligula mollis ultricies.


# More on Configuration

## Defaults

### Image processing config
`config.toml`
```toml
[imaging]
# https://gohugo.io/content-management/image-processing/
# Default resample filter used for resizing. Default is Box,
# a simple and fast averaging filter appropriate for downscaling.
# See https://github.com/disintegration/imaging
resampleFilter = "box"

# Defatult JPEG quality setting. Default is 75.
quality = 75

# Anchor used when cropping pictures.
# Default is "smart" which does Smart Cropping, using https://github.com/muesli/smartcrop
# Smart Cropping is content aware and tries to find the best crop for each image.
# Valid values are Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
anchor = "smart"
```

### res-figure
`config.toml`

```toml
[params.resources]
  # used in layouts/shortcodes/res-figure.html
  defaultCommand  = "Resize"
  defaultOptions  = "300x"
  defaultCaption  = "%%N"
```

`res-figure.html`
{{< highlight go-html-template >}}
{{- $myDefaultCommand := $.Site.Params.resources.defaultImageCommand | default `Resize` }}
{{- $myDefaultOptions := $.Site.Params.resources.defaultImageOptions | default `300x`   }}
{{- $myDefaultCaption := $.Site.Params.resources.defaultImageCaption | default `%%N`   }}

{{- if .IsNamedParams }}
  {{- $.Scratch.Set `theMatch`       (.Get `match`)  }}
  {{- $.Scratch.Set `theCommand`     (.Get `cmd`  )  }}
  {{- $.Scratch.Set `theOptions`     (.Get `opt`  )  }}
  {{- $.Scratch.Set `theCaption`     (.Get `cap`  )  }}
{{- else }}
  {{- $myPos := 0}} {{ if gt (len .Params) $myPos }} {{$.Scratch.Set `theMatch`    (.Get $myPos) }} {{end}}
  {{- $myPos := 1}} {{ if gt (len .Params) $myPos }} {{$.Scratch.Set `theCommand`  (.Get $myPos) }} {{end}}
  {{- $myPos := 2}} {{ if gt (len .Params) $myPos }} {{$.Scratch.Set `theOptions`  (.Get $myPos) }} {{end}}
  {{- $myPos := 3}} {{ if gt (len .Params) $myPos }} {{$.Scratch.Set `theCaption`  (.Get $myPos) }} {{end}}
{{- end }}

{{- $myCommand  := ( ($.Scratch.Get `theCommand` ) | default $myResource.Params.imgcmd  | default $myDefaultCommand ) }}
{{- $myOptions  := ( ($.Scratch.Get `theOptions` ) | default $myResource.Params.imgopt  | default $myDefaultOptions ) }}
{{- $myCaption  := ( ($.Scratch.Get `theCaption` ) | default $myResource.Params.caption | default $myDefaultCaption ) }}

{{< /highlight >}}

So the order is:

1. shortcode parameter
1. front matter resource params
1. site params
1. given defaults in shortcode


## Styles
`static/css/w3css-basic.css`
{{< highlight css >}}
/* -------------------------------------------------- */
/* shortcut res-figure */

.res-figure {
  display: inline-block;
  background: rgba(0, 0, 0, 0.1);
  padding: 5px;
}

.res-figcaption {
    text-align: center;
    font-size: 75%;
    padding: 0px;
    line-height: 1;
}

.res-figcaption a {
  position: relative;
}
{{< /highlight >}}

