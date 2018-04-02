---
title:       "Hugo image processing"
date:        2018-04-02T13:58:21+02:00
icon:        "far fa-images"
resources :
  - src   :      "img/pixabay/*.jpg"
    params:
      origin:    "pixabay.com"
      license:   "Creative Commons" 
  - src   :      "img/pixabay/penguin-1196947*.jpg"
    title :      "penguin"
    params:
      imgfct:    "Resize"
      imgopt:    "300x"
      attrby:    "Michael Frankenstein"
      attrhref:  "https://pixabay.com/en/users/frankenstein-2135887/"
---

{{< res-img "img/pixabay/penguin-1196947" />}}

{{< res-img "img/pixabay/penguin-2104173" "Fit" />}}

res-img "img/pixabay/penguin-1196947_1920.jpg" Resize  "300x" 
res-img "img/pixabay/penguin-1196947_1920.jpg" Fit     "300x400"
res-img "img/pixabay/penguin-1196947_1920.jpg" Fill    "300x400"

res-img "img/pixabay/penguin-2104173_1920.jpg" Resize  "300x" 
res-img "img/pixabay/penguin-2104173_1920.jpg" Fit     "300x400"
res-img "img/pixabay/penguin-2104173_1920.jpg" Fill    "100x100"

res-img "img/pixabay/penguin-2528615_1920.jpg" Resize  "300x"         
res-img "img/pixabay/penguin-2528615_1920.jpg" Fit     "300x400"      
res-img "img/pixabay/penguin-2528615_1920.jpg" Fill    "400x400 left" 
