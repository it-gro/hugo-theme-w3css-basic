---
title:               "Gallery with image processing"
date:                2018-05-08T22:25:44+02:00
resImgTeaser:        teaserpics/pixabay.com/paint-2985569_640.jpg
teaserpicNotOnPage:
icon:               "fas fa-images"
toc:                true
description:        "with pictures from pixabay.com"
tags:
  - Showcase
  - shortcodes
  - resources
  - images
categories:
  - This Theme
---

# Demo with images from pixabay.com
{{< res-gallery-load-photoswipe >}}
using shortcode: 
{{< highlight nolang >}}
{{</* res-gallery match="**/pixabay.com/*" caption-position="bottom" caption-effect="fade" hover-effect="slideup" */>}} 
{{< /highlight  >}}

{{< res-gallery match="**/pixabay.com/*" caption-position="bottom" caption-effect="fade" hover-effect="slideup" >}} 

# See more here
* More examples:  
   [Images taken from ...](../../hugo-theme-w3css-basic/images-taken-from/)   

* See [Gallery with image processing (shortcode res-gallery)]({{< relref "/pages/hugo-theme-w3css-basic/page-shortcodes/index.md#res-gallery" >}})  
  and [Figure with processing (Demo shortcode res-figure)]({{< relref "/image-processing-with-hugo" >}}) as well

* Compare with [shortcode heg-gallery]({{< relref "/pages/hugo-theme-w3css-basic/page-shortcodes/index.md#heg-gallery" >}})  
  and [shortcode heg-figure]( {{< relref "/pages/hugo-theme-w3css-basic/page-shortcodes/index.md#heg-figure" >}})   
  as well


# Demo (gohugo.io) using thumbCmd and thumbOpt

* more then one gallery on same page :smile:

using shortcode: 
{{< highlight nolang >}}
using shortcode: {{</* res-gallery match="teaserpics/gohugo.io/*" thumbCmd="Fill" thumbOpt="200x200" */>}} 
{{< /highlight  >}}

{{< res-gallery match="teaserpics/gohugo.io/*" thumbCmd="Fill" thumbOpt="200x200" >}} 

using shortcode: 
{{< highlight nolang >}}
{{</* res-gallery match="teaserpics/gohugo.io/*" thumbCmd="Fit"  thumbOpt="200x200" */>}} 
{{< /highlight  >}}

{{< res-gallery match="teaserpics/gohugo.io/*" thumbCmd="Fit"  thumbOpt="200x200" >}} 

using shortcode: 
{{< highlight nolang >}}
{{</* res-gallery match="teaserpics/gohugo.io/*" thumbCmd="Fill" thumbOpt="200x100" */>}} 
{{< /highlight  >}}

{{< res-gallery match="teaserpics/gohugo.io/*" thumbCmd="Fill" thumbOpt="200x100" >}} 

using shortcode: 
{{< highlight nolang >}}
{{</* res-gallery match="teaserpics/gohugo.io/*" thumbCmd="Fit"  thumbOpt="200x100" */>}} 
{{< /highlight  >}}

{{< res-gallery match="teaserpics/gohugo.io/*" thumbCmd="Fit"  thumbOpt="200x100" >}} 


using shortcode: 
{{< highlight nolang >}}
{{</* res-gallery match="teaserpics/gohugo.io/*" thumbCmd="Fit"  thumbOpt="100x200" */>}} 
{{< /highlight  >}}

{{< res-gallery match="teaserpics/gohugo.io/*" thumbCmd="Fit"  thumbOpt="100x200" >}} 

