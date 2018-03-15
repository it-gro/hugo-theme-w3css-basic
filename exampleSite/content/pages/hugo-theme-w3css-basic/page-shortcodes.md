---
weight:      20
title:       "This Theme Shortcodes"
date:        "2017-11-22T07:41:52+01:00"
toc:         true
teaserpic:   images/teaserpics/gohugo.io/hugo-lorem.png
tags:
  - hugo
  - shortcodes
categories:
  - This Theme
---


{{% w3-quote source="https://gohugo.io/templates/shortcode-templates" layout="icon-br" %}}
You can extend Hugo’s built-in shortcodes by creating your own using
the same templating syntax as that for single and list pages.

Shortcodes are a means to consolidate templating into small, reusable
snippets that you can embed directly inside of your content. In this
sense, you can think of shortcodes as the intermediary between page
and list templates and basic content files.
{{% /w3-quote %}}



# Shortcodes in this Theme for W3.CSS classes



## alert

* Inspired by http://getbootstrap.com/docs/4.0/components/alerts/ and https://www.w3schools.com/w3css/w3css_panels.asp

Configuration is in `config.toml`:

```toml
[params]
  colorAlertPrimary                     = "w3-purple"
  colorAlertSecondary                   = "w3-aqua"
  colorAlertSuccess                     = "w3-light-green"
  colorAlertInfo                        = "w3-light-blue"
  colorAlertWarning                     = "w3-yellow"
  colorAlertDanger                      = "w3-red"
  colorAlertDark                        = "w3-dark-grey"
  colorAlertLight                       = "w3-grey"
```

{{< highlight nolang >}}
{{</* alert type="primary"   intro="Primary Alert"   >}}This is a primary alert—check it out!   {{< /alert >}}
{{< alert type="secondary" intro="Secondary Alert" >}}This is a secondary alert—check it out! {{< /alert >}}
{{< alert type="success"   intro="Success Alert"   >}}This is a info success—check it out!    {{< /alert >}}
{{< alert type="info"      intro="Info Alert"      >}}This is a info alert—check it out!      {{< /alert >}}
{{< alert type="warning"   intro="Warning Alert"   >}}This is a warning alert—check it out!   {{< /alert >}}
{{< alert type="danger"    intro="Danger Alert"    >}}This is a danger alert—check it out!    {{< /alert >}}
{{< alert type="dark"      intro="Dark Alert"      >}}This is a dark alert—check it out!      {{< /alert >}}
{{< alert type="light"     intro="Light Alert"     >}}This is a light alert—check it out!     {{< /alert */>}}
{{< /highlight  >}}

{{< alert type="primary"   intro="Primary Alert"   >}}This is a primary alert—check it out!   {{< /alert >}}

{{< alert type="secondary" intro="Secondary Alert" >}}This is a secondary alert—check it out! {{< /alert >}}

{{< alert type="success"   intro="Success Alert"   >}}This is a info success—check it out!    {{< /alert >}}

{{< alert type="info"      intro="Info Alert"      >}}This is a info alert—check it out!      {{< /alert >}}

{{< alert type="warning"   intro="Warning Alert"   >}}This is a warning alert—check it out!   {{< /alert >}}

{{< alert type="danger"    intro="Danger Alert"    >}}This is a danger alert—check it out!    {{< /alert >}}

{{< alert type="dark"      intro="Dark Alert"      >}}This is a dark alert—check it out!      {{< /alert >}}

{{< alert type="light"     intro="Light Alert"     >}}This is a light alert—check it out!     {{< /alert >}}



## w3-notice-icon

* Inspired by [W3.CSS Notes](https://www.w3schools.com/w3css/w3css_notes.asp)

### Style

* these colors are separate from the ones in w3cssColorTheme

Defined in:

    static/css/w3css-basic.css

{{< highlight css >}}
/* for shortcodes w3-notice-icon and w3-alert-icon */
.shortcode-danger {
  border-color:#f44336!important
}
.shortcode-warning {
  border-color:#ffeb3b!important
}
.shortcode-info  {
  border-color:#2196F3!important
}
.shortcode-success{
  border-color:#4CAF50!important
}

/* for shortcode w3-quote */
.shortcode-quote {
  border-color:#4CAF50!important
}

pre.w3-code, span.w3-codespan{
  font-family:monospace,monospace; !important;
  font-size:1em
}

pre.w3-code, pre.chroma {
    border-radius:4px;  
    padding: 0 3px 0 3px;
    border: 1px solid;
    overflow: auto;
}

{{< /highlight >}}


### Success

{{< highlight nolang >}}
{{%/* w3-notice-icon type="success" %}}
Well done
{{% /w3-notice-icon */%}}
{{< /highlight >}}

renders as

{{% w3-notice-icon type="success" %}}Well done                      {{% /w3-notice-icon %}}

{{< highlight nolang >}}
{{%/* w3-notice-icon type="success"  heading="Well done" %}}
Well done
{{% /w3-notice-icon */%}}
{{< /highlight >}}

renders as

{{% w3-notice-icon type="success" heading="Well done"            %}}A message with header           {{% /w3-notice-icon %}}

### Info

{{< highlight nolan >}}
{{%/* w3-notice-icon %}}
A default disclaimer (=> info)
{{% /w3-notice-icon */%}}
{{< /highlight >}}

renders as

{{% w3-notice-icon %}}A default disclaimer (=> info)  {{% /w3-notice-icon %}}


{{< highlight nolang >}}
{{%/* w3-notice-icon heading="I'm a heading" %}}
A default disclaimer with header
{{% /w3-notice-icon */%}}
{{< /highlight >}}

renders as

{{% w3-notice-icon heading="I'm a heading"  %}}A default disclaimer with header {{% /w3-notice-icon %}}


{{< highlight nolang >}}
{{%/* w3-notice-icon type="info" heading="Show Info" %}}
No need for type="info", since this is the default
{{% /w3-notice-icon */%}}
{{< /highlight >}}

renders as

{{% w3-notice-icon type="info" heading="Show Info" %}}
No need for type="info", since this is the default   
{{% /w3-notice-icon %}}


### Warning

{{< highlight nolang >}}
{{%/* w3-notice-icon type="warning" heading="Keep in mind" %}}
A warning disclaimer
{{% /w3-notice-icon */%}}
{{< /highlight >}}

renders as

{{% w3-notice-icon type="warning"  heading="Keep in mind"          %}}A warning disclaimer             {{% /w3-notice-icon %}}



### Danger

{{< highlight nolang >}}
{{%/* w3-notice-icon type="danger" %}}
A check disclaimer
{{% /w3-notice-icon */%}}
{{< /highlight >}}

renders as

{{% w3-notice-icon type="danger"                                 %}}Watch out               {{% /w3-notice-icon %}}

{{< highlight nolang >}}
{{%/* w3-notice-icon type="danger" heading="Careful" %}}
Watch out 
{{% /w3-notice-icon */%}}
{{< /highlight >}}

renders as

{{% w3-notice-icon type="danger"  heading="Careful" %}}Watch out   {{% /w3-notice-icon %}}



## w3-alert-icon
* I ignored [W3.CSS Alerts](https://www.w3schools.com/w3css/w3css_alerts.asp)
* used borders instead


Some examples:

{{< highlight nolang "linenos=table,hl_lines=5 9-11,linenostart=11" >}}
{{%/* w3-alert-icon type="success" %}}
Hi, I'm a success
{{% /w3-alert-icon */%}}

{{%/* w3-alert-icon type="info" heading="I'm info" %}}
An info with title
{{% /w3-alert-icon */%}}

{{%/* w3-alert-icon type="warning" %}}
A warning
{{% /w3-alert-icon */%}}

{{%/* w3-alert-icon type="danger" %}}
Danger: A stronger warning
{{% /w3-alert-icon */%}}

{{%/* w3-alert-icon type="warning" heading="You have been warned"  %}}
A warning with heading
{{% /w3-alert-icon */%}}
{{< /highlight >}}

{{% w3-alert-icon type="success"                                   %}}Hi, I'm a success          {{% /w3-alert-icon %}}

{{% w3-alert-icon type="info"     heading="I'm info"               %}}An info with title         {{% /w3-alert-icon %}}

{{% w3-alert-icon type="warning"                                   %}}A warning                  {{% /w3-alert-icon %}}

{{% w3-alert-icon type="danger"                                    %}}Danger: A stronger warning {{% /w3-alert-icon %}}

{{% w3-alert-icon type="warning"  heading="You have been warned"   %}}A warning with heading     {{% /w3-alert-icon %}}

## w3-button-icon

{{< highlight nolang >}}
{{%/* w3-button-icon                                                %}}Hello world{{% /w3-button-icon %}}
{{% w3-button-icon icon="fab fa-google" href="https://google.com" %}}take me to Google{{% /w3-button-icon %}}
{{% w3-button-icon "/blog"                                        %}}take me to Blog{{% /w3-button-icon %}}
{{% w3-button-icon "/faq" "far fa-question-circle"                %}}take me to FAQ{{% /w3-button-icon %}}
{{% w3-button-icon icon="fas fa-exclamation-triangle" classes="w3-button w3-circle w3-theme-d3" %}}Purge{{% /w3-button-icon */%}}
{{< /highlight >}}

renders to:

{{% w3-button-icon                                     %}}Hello world{{% /w3-button-icon %}}

{{% w3-button-icon icon="fab fa-google" href="https://google.com"           %}}take me to Google{{% /w3-button-icon %}}

{{% w3-button-icon "/blog"      %}}take me to Blog{{% /w3-button-icon %}}

{{% w3-button-icon "/faq" "far fa-question-circle"     %}}take me to FAQ{{% /w3-button-icon %}}

{{% w3-button-icon icon="fas fa-exclamation-triangle" classes="w3-button w3-circle w3-theme-d3" %}}Purge{{% /w3-button-icon %}}


## w3-badge
* Inspired by [W3.CSS Badges](https://www.w3schools.com/w3css/w3css_badges.asp)
* {{% w3-badge            %}}42{{% /w3-badge %}}
* {{% w3-badge "w3-green" %}}42{{% /w3-badge %}}

{{< highlight nolang >}}
{{%/* w3-badge            %}}42{{% /w3-badge */%}}
{{%/* w3-badge "w3-green" %}}42{{% /w3-badge */%}}
{{< /highlight >}}


## w3-tag
* Inspired by [W3.CSS Tags](https://www.w3schools.com/w3css/w3css_tags.asp)
* {{% w3-tag                    %}}42{{% /w3-tag %}}

I'm a big one: {{% w3-tag "w3-blue w3-jumbo" %}}42{{% /w3-tag %}}

created with:

{{< highlight nolang >}}
{{%/* w3-tag                    */%}}42{{%/* /w3-tag */%}}
{{%/* w3-tag "w3-blue w3-jumbo" */%}}42{{%/* /w3-tag */%}}
{{< /highlight >}}



## w3-quote
* Inspired by [W3.CSS Quotes](https://www.w3schools.com/w3css/w3css_quotes.asp)

Some examples:

{{< highlight nolang >}}
{{%/* w3-quote }}
*a fool with a tool is still a fool*
{{% /w3-quote */%}}

{{%/* w3-quote source="Igor Stravinsky" layout="icon" %}}
**A good composer does not imitate; he steals.**
{{% /w3-quote */%}}

{{%/* w3-quote source="Albert Einstein" layout="icon-br" %}}
*Life is like riding a bicycle. To keep your balance, you must keep moving*
{{% /w3-quote */%}}
{{< /highlight >}}

{{% w3-quote                                                      %}}*a fool with a tool is still a fool*                                        {{% /w3-quote %}}

{{% w3-quote source="Igor Stravinsky" layout="icon"               %}}**A good composer does not imitate; he steals.**                            {{% /w3-quote %}}

{{% w3-quote source="Albert Einstein" layout="icon-br"            %}}*Life is like riding a bicycle. To keep your balance, you must keep moving* {{% /w3-quote %}}


using blockquote:

{{< highlight nolang >}}
{{%/* w3-quote source="Albert Einstein" layout="blockquote" %}}
*The true sign of intelligence is not knowledge but imagination*
{{% /w3-quote */%}}

{{%/* w3-quote source="Albert Einstein" layout="icon-br-blockquote" %}}
*The only source of knowledge is experience*
{{% /w3-quote */%}}

{{%/* w3-quote source="Albert Einstein" layout="icon-blockquote" %}}
*Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.*
{{% /w3-quote */%}}
{{< /highlight >}}

{{% w3-quote source="Albert Einstein" layout="blockquote"         %}}*The true sign of intelligence is not knowledge but imagination*            {{% /w3-quote %}}

{{% w3-quote source="Albert Einstein" layout="icon-br-blockquote" %}}*The only source of knowledge is experience*                                {{% /w3-quote %}}

{{% w3-quote source="Albert Einstein" layout="icon-blockquote"    %}}*Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.*{{% /w3-quote %}}


## w3-codespan

* Inspired by [W3.CSS Code](https://www.w3schools.com/w3css/w3css_code.asp)
* Highlight Inline Code
* all on one line

{{< highlight nolan >}}
... command: {{%/* w3-codespan %}}startup *all*{{% /w3-codespan */%}} just try it...
... command: {{</* w3-codespan >}}startup *all*{{< /w3-codespan */>}} just try it...
{{< /highlight >}}

This is a cool command: {{% w3-codespan %}}startup *all*{{% /w3-codespan %}} just try it...
This is a cool command: {{< w3-codespan >}}startup *all*{{< /w3-codespan >}} just try it...


## w3-code

* Inspired by [W3.CSS Code](https://www.w3schools.com/w3css/w3css_code.asp)
* show code block - but no highlighting


{{< highlight text >}}
{{</* w3-code >}}
genpasswd() {
    local l=$1
    [ "$l" == "" ] && l=16
    tr -dc A-Za-z0-9 < /dev/urandom | head -c ${l} | xargs
}

genpasswd $1
{{< /w3-code */>}}
{{< /highlight >}}

renders as

{{< w3-code >}}
genpasswd() {
    local l=$1
    [ "$l" == "" ] && l=16
    tr -dc A-Za-z0-9 < /dev/urandom | head -c ${l} | xargs
}

genpasswd $1
{{< /w3-code >}}


### Style

    static/css/w3css-basic.css

{{< highlight css >}}
pre.w3-code, span.w3-codespan{
  font-family:monospace,monospace; !important;
  font-size:1em
}

pre.w3-code, pre.chroma {
    border-radius:4px;  
    padding: 0 3px 0 3px;
    border: 1px solid;
    overflow: auto;
}

{{< /highlight >}}


# Other Shortcodes in this Theme

## icon

{{< highlight nolan >}}
{{</* icon "fas fa-home">}}
{{< icon "fas fa-home fa-2x" */>}}
{{< /highlight >}}

renders as
{{< icon "fas fa-home">}}
{{< icon "fas fa-home fa-2x">}}

{{< highlight nolan >}}
{{</* icon name="fas fa-home" >}}
{{< icon name="fas fa-home" size="fa-2x" */>}}
{{< /highlight >}}

renders as
{{< icon name="fas fa-home" >}}
{{< icon name="fas fa-home" size="fa-2x">}}

## csc

* use a **c**hroma**s**tyle **c**olor within text (span)

{{< highlight nolan >}}
{{</* csc >}}hugo -w -v server --themesDir ../../ --port 1414 --disableFastRender{{< /csc */>}}
{{< /highlight >}}

renders as


Here' a cool command:  {{< csc >}}hugo -w -v server --themesDir ../../ --port 1414 --disableFastRender{{< /csc >}}. But you may use this:
`hugo -w server`. Have fun.


{{< highlight nolan >}}
You may give a class name {{</* csc k >}}cool code{{< /csc */>}}.
{{< /highlight >}}

renders as

You may give a class name {{< csc k >}}cool code{{< /csc >}}. 


Background style for csc is in `static/css/w3css-basic.css`:

{{< highlight css >}}
code.chroma {
  background-color: rgba(255, 255, 255, .4) ; /* used e.g. for csc* shortcodes */
}
{{< /highlight >}}


{{< highlight text >}}
   Class | Type
---------|------
err      | Error
lntd     | LineTableTD
lntable  | LineTable
hl       | LineHighlight
lnt      | LineNumbersTable
ln       | LineNumbers
k        | Keyword
kc       | KeywordConstant
kd       | KeywordDeclaration
kn       | KeywordNamespace
kp       | KeywordPseudo
kr       | KeywordReserved
kt       | KeywordType
na       | NameAttribute
nb       | NameBuiltin
nc       | NameClass
no       | NameConstant
nd       | NameDecorator
ni       | NameEntity
ne       | NameException
nf       | NameFunction
nl       | NameLabel
nn       | NameNamespace
nt       | NameTag
nv       | NameVariable
s        | LiteralString
sa       | LiteralStringAffix
sb       | LiteralStringBacktick
sc       | LiteralStringChar
dl       | LiteralStringDelimiter
sd       | LiteralStringDoc
s2       | LiteralStringDouble
se       | LiteralStringEscape
sh       | LiteralStringHeredoc
si       | LiteralStringInterpol
sx       | LiteralStringOther
sr       | LiteralStringRegex
s1       | LiteralStringSingle
ss       | LiteralStringSymbol
m        | LiteralNumber
mb       | LiteralNumberBin
mf       | LiteralNumberFloat
mh       | LiteralNumberHex
mi       | LiteralNumberInteger
il       | LiteralNumberIntegerLong
mo       | LiteralNumberOct
o        | Operator
ow       | OperatorWord
c        | Comment
ch       | CommentHashbang
cm       | CommentMultiline
c1       | CommentSingle
cs       | CommentSpecial
cp       | CommentPreproc
cpf      | CommentPreprocFile
gd       | GenericDeleted
ge       | GenericEmph
gr       | GenericError
gh       | GenericHeading
gi       | GenericInserted
go       | GenericOutput
gp       | GenericPrompt
gs       | GenericStrong
gu       | GenericSubheading
gt       | GenericTraceback
w        | TextWhitespace
{{< /highlight >}}


## cscb

* use a **c**hroma**s**tyle **c**olor for a **b**lock

{{< highlight nolan >}}
{{</* cscb s >}}
static/css/syntax/syntax.autumn.css
static/css/syntax/syntax.borland.css
static/css/syntax/syntax.bw.css
{{< cscb */>}}
{{< /highlight >}}

renders as

{{< cscb s >}}
static/css/syntax/syntax.autumn.css
static/css/syntax/syntax.borland.css
static/css/syntax/syntax.bw.css
{{</ cscb >}}



## heg-gallery

* taken from  
  https://github.com/liwenyip/hugo-easy-gallery/  
  https://www.liwen.id.au/heg/  

{{< highlight nolan >}}
{{</* heg-load-photoswipe */>}}
{{</* heg-gallery dir="/images/teaserpics/gohugo.io"   caption-effect="none" hover-effect="grow" / */>}} 
{{< /highlight >}}

renders as

{{< heg-load-photoswipe >}}

{{< heg-gallery dir="/images/teaserpics/gohugo.io"   caption-effect="none" hover-effect="grow" />}} 


### Style
Defined in:

    static/css/w3css-basic.css

{{< highlight css >}}
/* -------------------------------------------------- */
/* hugo-easy-gallery */
.gallery figcaption, 
.fancy-figure figcaption {
  background: #000;
  color: #FFF;
  font-size: 85%; 
  background: rgba(0, 0, 0, 0.5);
  opacity: 0.9;
}

.gallery .box figure {
  float: left;
  margin: 1em 4px;
}

.gallery {
  margin: 10px;
  max-width: none;
}

.gallery .box {
  float: left;
  position: relative;
  width: 100%;
  padding-bottom: 100%; 
}

@media only screen and (min-width : 365px) {
  .gallery .box {
    width: 50%;
    padding-bottom: 50%;
  }
}

@media only screen and (min-width : 480px) {
  .gallery .box {
    width: 33.3%;
    padding-bottom: 33.3%; 
  }
}

@media only screen and (min-width : 760px) {
  .gallery .box {
    width: 25%;
    padding-bottom: 25%;
  }
}

@media only screen and (min-width : 1024px) {
  .gallery .box {
    width: 20%;
    padding-bottom: 20%;
  }
}

@media only screen and (min-width : 1280px) {
  .gallery .box {
    width: 16%;
    padding-bottom: 16%;
  }
}
{{< /highlight >}}


## heg-figure

* See for original doc: https://www.liwen.id.au/heg/
* heg-figure improves the usage of `caption="" title="" attr="" attrlink=""`
* for demo I set here caption-effect=**"none"** 
* Inspired by https://stackoverflow.com/questions/21483356/how-to-mark-the-copyright-of-an-image-in-html

### with Thumbs

* here the thumbs as just too small...

{{< highlight nolan >}}
{{</* heg-load-photoswipe >}}
{{< heg-figure link="/images/photocards/pixabay.com/01-photocard.jpg" thumb="-thumb" caption-position="bottom" caption-effect="none" width="126px" caption="figure caption 1" title="bar 1" >}}
{{< heg-figure link="/images/photocards/pixabay.com/02-photocard.jpg" thumb="-thumb" caption-position="bottom" caption-effect="none" width="160px" caption="figure caption 2" >}}
{{< heg-figure link="/images/photocards/pixabay.com/03-photocard.jpg" thumb="-thumb" caption-position="bottom" caption-effect="none" width="171px" caption="figure caption 3" attr="(c) by bar 3" >}}
{{< heg-figure link="/images/photocards/pixabay.com/04-photocard.jpg" thumb="-thumb" caption-position="bottom" caption-effect="none" width="135px" caption="figure caption 4" attr="(c) by bar 4" attrlink="https://www.example.com" >}}
{{< heg-figure link="/images/photocards/pixabay.com/05-photocard.png" thumb="-thumb" caption-position="bottom" caption-effect="none" width="145px"                    attr="(c) by bar 5" >}}
{{< heg-figure link="/images/photocards/pixabay.com/06-photocard.jpg" thumb="-thumb" caption-position="bottom" caption-effect="none" width="135px"                    attr="(c) by bar 6" attrlink="https://www.example.com" >}}
{{< heg-figure link="/images/photocards/pixabay.com/07-photocard.jpg" thumb="-thumb" caption-position="bottom" caption-effect="none" width="160px"                                        attrlink="https://www.example.com" >}}
{{< heg-figure link="/images/photocards/pixabay.com/08-photocard.jpg" thumb="-thumb" caption-position="bottom" caption-effect="none" width="135px" caption="figure caption 8"             attrlink="https://www.example.com" */>}}
{{< /highlight >}}

renders as

{{< heg-figure link="/images/photocards/pixabay.com/01-photocard.jpg" thumb="-thumb" caption-position="bottom" caption-effect="none" width="126px" caption="figure caption 1" title="bar 1" >}}

{{< heg-figure link="/images/photocards/pixabay.com/02-photocard.jpg" thumb="-thumb" caption-position="bottom" caption-effect="none" width="160px" caption="figure caption 2" >}}

{{< heg-figure link="/images/photocards/pixabay.com/03-photocard.jpg" thumb="-thumb" caption-position="bottom" caption-effect="none" width="171px" caption="figure caption 3" attr="(c) by bar 3" >}}

{{< heg-figure link="/images/photocards/pixabay.com/04-photocard.jpg" thumb="-thumb" caption-position="bottom" caption-effect="none" width="135px" caption="figure caption 4" attr="(c) by bar 4" attrlink="https://www.example.com" >}}

{{< heg-figure link="/images/photocards/pixabay.com/05-photocard.png" thumb="-thumb" caption-position="bottom" caption-effect="none" width="145px"                    attr="(c) by bar 5" >}}

{{< heg-figure link="/images/photocards/pixabay.com/06-photocard.jpg" thumb="-thumb" caption-position="bottom" caption-effect="none" width="135px"                    attr="(c) by bar 6" attrlink="https://www.example.com" >}}

{{< heg-figure link="/images/photocards/pixabay.com/07-photocard.jpg" thumb="-thumb" caption-position="bottom" caption-effect="none" width="160px"                                        attrlink="https://www.example.com" >}}

{{< heg-figure link="/images/photocards/pixabay.com/08-photocard.jpg" thumb="-thumb" caption-position="bottom" caption-effect="none" width="135px" caption="figure caption 8"             attrlink="https://www.example.com" >}}


### without Thumbs

{{< highlight nolan >}}
{{</* heg-load-photoswipe >}}
{{< heg-figure link="/images/photocards/pixabay.com/01-photocard.jpg" caption-position="bottom" caption-effect="none" width="640px" caption="figure caption 1" title="bar 1" >}}
{{< heg-figure link="/images/photocards/pixabay.com/02-photocard.jpg" caption-position="bottom" caption-effect="none" width="640px" caption="figure caption 2" >}}
{{< heg-figure link="/images/photocards/pixabay.com/03-photocard.jpg" caption-position="bottom" caption-effect="none" width="640px" caption="figure caption 3" attr="(c) by bar 3" >}}
{{< heg-figure link="/images/photocards/pixabay.com/04-photocard.jpg" caption-position="bottom" caption-effect="none" width="640px" caption="figure caption 4" attr="(c) by bar 4" attrlink="https://www.example.com" >}}
{{< heg-figure link="/images/photocards/pixabay.com/05-photocard.png" caption-position="bottom" caption-effect="none" width="640px"                    attr="(c) by bar 5" >}}
{{< heg-figure link="/images/photocards/pixabay.com/06-photocard.jpg" caption-position="bottom" caption-effect="none" width="640px"                    attr="(c) by bar 6" attrlink="https://www.example.com" >}}
{{< heg-figure link="/images/photocards/pixabay.com/07-photocard.jpg" caption-position="bottom" caption-effect="none" width="640px"                                        attrlink="https://www.example.com" >}}
{{< heg-figure link="/images/photocards/pixabay.com/08-photocard.jpg" caption-position="bottom" caption-effect="none" width="640px" caption="figure caption 8"             attrlink="https://www.example.com" >}}
{{< heg-figure link="/images/photocards/pixabay.com/09-photocard.jpg" caption-position="bottom" caption-effect="none" width="640px" caption="figure caption 9" title="bar 9" attr="(c) by bar 9" attrlink="https://www.example.com" */>}}
{{< /highlight >}}

renders as

{{< heg-figure link="/images/photocards/pixabay.com/01-photocard.jpg" caption-position="bottom" caption-effect="none" width="640px" caption="figure caption 1" title="bar 1" >}}

{{< heg-figure link="/images/photocards/pixabay.com/02-photocard.jpg" caption-position="bottom" caption-effect="none" width="640px" caption="figure caption 2" >}}

{{< heg-figure link="/images/photocards/pixabay.com/03-photocard.jpg" caption-position="bottom" caption-effect="none" width="640px" caption="figure caption 3" attr="(c) by bar 3" >}}

{{< heg-figure link="/images/photocards/pixabay.com/04-photocard.jpg" caption-position="bottom" caption-effect="none" width="640px" caption="figure caption 4" attr="(c) by bar 4" attrlink="https://www.example.com" >}}

{{< heg-figure link="/images/photocards/pixabay.com/05-photocard.png" caption-position="bottom" caption-effect="none" width="640px"                    attr="(c) by bar 5" >}}

{{< heg-figure link="/images/photocards/pixabay.com/06-photocard.jpg" caption-position="bottom" caption-effect="none" width="640px"                    attr="(c) by bar 6" attrlink="https://www.example.com" >}}

{{< heg-figure link="/images/photocards/pixabay.com/07-photocard.jpg" caption-position="bottom" caption-effect="none" width="640px"                                        attrlink="https://www.example.com" >}}

{{< heg-figure link="/images/photocards/pixabay.com/08-photocard.jpg" caption-position="bottom" caption-effect="none" width="640px" caption="figure caption 8"             attrlink="https://www.example.com" >}}

{{< heg-figure link="/images/photocards/pixabay.com/09-photocard.jpg" caption-position="bottom" caption-effect="none" width="640px" caption="figure caption 9" title="bar 9" attr="(c) by bar 9" attrlink="https://www.example.com" >}}



## i18n

* i18n lookup - if no translation found get argument back (default)

{{< highlight nolang >}}
{{</* i18n "termNotAvailable" >}}
{{< i18n "foobar" */>}}
{{< /highlight >}}

renders as

{{< i18n "termNotAvailable" >}}
{{< i18n "foobar" >}}


given:
{{< w3-code >}}
- id: termNotAvailable
  translation: "empty"
{{< /w3-code >}}

in {{< w3-codespan >}}i18n/en.yaml{{< /w3-codespan >}}


## asciicast

* taken from https://github.com/gohugoio/hugo/tree/master/docs/layouts/shortcodes
* added no javascript fallback

{{< asciicast WJM2LEZQs8VRhNeuZ5NiGPp9I >}}


## html-tag

* surround text with a html tag

{{< highlight nolang >}}
We meet at {{</* html-tag time >}}23:59{{< /html-tag */>}}. Don't be late.
{{< /highlight >}}

We meet at {{< html-tag time >}}23:59{{< /html-tag >}}. Don't be late.

## html-tags

* surround text with nested html tags

{{< highlight nolang >}}
We meet at {{</* html-tags sup time >}}23:59{{< /html-tags */>}}. Don't be late.
{{< /highlight >}}

We meet at {{< html-tags sup time >}}23:59{{< /html-tags >}}. Don't be late.


## html-tag-classes

* surround text with a html tag including some classes

{{< highlight nolang >}}
We meet at {{</* html-tag-classes time w3-xxxlarge w3-text-red >}}23:59{{< /html-tag-classes */>}}. Don't be late.
{{< /highlight >}}

We meet at {{< html-tag-classes time w3-xxxlarge w3-text-red >}}23:59{{< /html-tag-classes >}}. Don't be late.

You can use the `colorAlert*` values (see [alter](#alert) ) using:

{{< highlight nolang >}}
We meet at {{</* html-tag-classes time w3-xxxlarge colDanger >}}23:59{{< /html-tag-classes */>}}. Don't be late.
{{< /highlight >}}

We meet at {{< html-tag-classes time w3-xxxlarge colDanger >}}23:59{{< /html-tag-classes >}}. Don't be late.

This works as well

{{< highlight nolang >}}
{{%/* html-tag-classes div w3-container w3-card-4 w3-theme-d3 %}}
## Hello
World
{{% /html-tag-classes */%}}
{{< /highlight >}}

{{% html-tag-classes div w3-container w3-card-4 w3-theme-d3 %}}
## Hello
World
{{% /html-tag-classes %}}


## kbd
* show keyboard sequences

{{< highlight nolang >}}
Press {{</* kbd "Ctrl+Shift+A" "5" >}} or {{< kbd "CTRL" "ALT" "DEL" */>}}
{{< /highlight >}}

Press {{< kbd "Ctrl+Shift+A" "5" >}} or {{< kbd "CTRL" "ALT" "DEL" >}}

### style
    static/css/w3css-basic.css

{{< highlight css >}}

kbd {
  font-size: 0.8em;
  background-color: #fff;
  padding: 0px 1px 0px 1px;;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-radius: 4px;
}

{{< /highlight >}}





# Experimental

## liti: List by Title
<a id="liti"></a>

* **li**st by **Ti**tle
* hugo has build in shortcodes [ref](https://gohugo.io/functions/ref) and [relref](https://gohugo.io/functions/relref): https://gohugo.io/content-management/shortcodes/
* These shortcodes will look up the pages by their relative path
  (e.g., blog/post.md) or their logical name (post.md)
* I created a shortcode to get a list of pages by their **Title**
* by default this list is not given as a `<ul>` list - just one or more links without newlines
* search can be done with [eq](https://gohugo.io/functions/eq) (which
  is default) or [in](https://gohugo.io/functions/in) (substring)
* the case is relevant by default. Use the modifier to ignore (mod="i")


{{< highlight text >}}
Argument | Position -1 | Default | What             | Remark
---------|-------------|---------|------------------|-------
search   | 0           |         | string to search |
op       | 1           | eq      | eq|in            |
mod      | 2           |         | i                | (Modifier) i:ignore case
ul       | 3           |         |                  | if not empty: create unordered list
type     | 4           | regular | regular|all      | regular:$.Site.RegularPages  all:$.Site.Pages)
ofm      | 5           | .Title  |                  | (OutputFormat) .Kind .RelPermalink .Title
{{< /highlight >}}


An easy and short usage would be:

{{< cscb c >}}
See more here: {{</* liti "Vestibulum" */>}}
{{< /cscb >}}

See more here: {{< liti "Vestibulum" >}}

{{< cscb c >}}
See more here: {{</* liti "highlight" "in" */>}}
{{< /cscb >}}

See more here: {{< liti "highlight" "in" >}}




Here are more examples using **eq** operator

Shortcode                                                                  | Result
---------------------------------------------------------------------------|--------------------------------
{{</* liti search="Vestibulum"                                       */>}} | {{< liti search="Vestibulum"                                       >}}
{{</* liti search="Vestibulum" type="regular" op="eq"                */>}} | {{< liti search="Vestibulum" type="regular" op="eq"                >}}
{{</* liti search="VeSTIBULUM" type="regular" op="eq" mod="i" ul="1" */>}} | {{< liti search="VeSTIBULUM" type="regular" op="eq" mod="i" ul="1" >}}
{{</* liti search="VeSTIBULUM"                        mod="i" ul="1" */>}} | {{< liti search="VeSTIBULUM"                        mod="i" ul="1" >}}
{{</* liti search="Phasellus"  type="all"                     ul="1" */>}} | {{< liti search="Phasellus"  type="all"                     ul="1" >}}
{{</* liti search="Phasellus"  type="all" ofm=".Title"        ul="1" */>}} | {{< liti search="Phasellus"  type="all" ofm=".Title"        ul="1" >}}
{{</* liti search="Phasellus"  type="all" ofm=".Kind .Title"  ul="1" */>}} | {{< liti search="Phasellus"  type="all" ofm=".Kind .Title"  ul="1" >}}
{{</* liti search="Phasellus"  type="all" ofm=".RelPermalink"        */>}} | {{< liti search="Phasellus"  type="all" ofm=".RelPermalink"        >}}


Here are some examples using **in** operator

Shortcode                                                                               | Result
----------------------------------------------------------------------------------------|--------------------------------
{{</* liti op="in" search="theme"                                                 */>}} | {{< liti op="in" search="theme"                                                         >}}
{{</* liti op="in" search="theme"                                  mod="i" ul="1" */>}} | {{< liti op="in" search="theme"                                  mod="i" ul="1"         >}}
{{</* liti op="in" search="theme"  type="all"                      mod="i" ul="1" */>}} | {{< liti op="in" search="theme"  type="all"                      mod="i" ul="1"         >}}
{{</* liti op="in" search="theme"  type="all" ofm=".Kind .Title"   mod="i" ul="1" */>}} | {{< liti op="in" search="theme"  type="all" ofm=".Kind .Title"   mod="i" ul="1"         >}}
{{</* liti op="in" search="theme"  type="all" ofm=".RelPermalink"  mod="i" ul="1" */>}} | {{< liti op="in" search="theme"  type="all" ofm=".RelPermalink"  mod="i" ul="1"         >}}


With positional parameters:

{{< cscb c >}}
See more here: {{</* liti "Vestibulum" "in" */>}}
{{< /cscb >}}

See more here: {{< liti "Vestibulum" "in" >}}

{{< cscb c >}}
See more here: {{</* liti "Vestibulum" "in" "i" "ul" */>}}
{{< /cscb >}}

See more here: {{< liti "Vestibulum" "in" "i" "ul" >}}


{{< cscb c >}}
See more here: {{</* liti "Vestibulum" "in" "" "ul" */>}}
{{< /cscb >}}


See more here: {{< liti "Vestibulum" "in" "" "ul" >}}


## litt: List by Taxonomy/Term (just one result)
<a id="litt"></a>

* this will return just one link, the taxonomy/taxonomyterm link with a configurable text

Argument | Position -1 | Default | What             | Remark
---------|-------------|---------|------------------|-------
tax      | 0           | tags    | taxonomy         | 
term     | 1           | *       | taxonomyterm     | 
ofm      | 2           | .Title  |                  | (OutputFormat) .Kind .RelPermalink .Title


{{< cscb c >}}
See more here: {{</* litt term="Go" */>}}
{{< /cscb >}}

See more here: {{< litt term="Go" >}}


{{< cscb c >}}
See more here: {{</* litt "tags" "Go" */>}}
{{< /cscb >}}

See more here: {{< litt "tags" "Go" >}}

{{< cscb c >}}
See more here: {{</* litt "categories" "Golang" ".RelPermalink" */>}}
{{< /cscb >}}

See more here: {{< litt "categories" "Golang" ".RelPermalink" >}}



## litx: List by Taxonomy (full search)
<a id="litx"></a>

* this may be slow for bigger sites
* case is ignored (no mod switch as [liti](#liti) has)


Argument | Position -1 | Default | What             | Remark
---------|-------------|---------|------------------|-------
tax      | 0           | tags    | string to search | in the taxonomy
term     | 1           | *       | string to search | in the taxonomy term 
title    | 2           | *       | string to search | in the title
op       | 3           | eq      | en|in            | eq or in search
om       | 4           | t       | t,p              | output *t*axonomyterm *p*age
ofm      | 5           | .Title  |                  | (OutputFormat) .Kind .RelPermalink .Title


Using positional parameters:

Shortcode                                 | Result
------------------------------------------|-----------------------------
{{</* litx "*" "Nullam"             */>}} | {{< litx "*" "Nullam"             >}}
{{</* litx "*" "*" "Null" "in" "p"  */>}} | {{< litx "*" "*" "Null" "in" "p"  >}}


Using named parameters:

Shortcode                                                                 | Result
--------------------------------------------------------------------------|---------------------------
{{</* litx tax="tags"        term="go" op="in"                      */>}} | {{< litx tax="tags"        term="go" op="in"                     >}}
{{</* litx                   term="Nullam"                          */>}} | {{< litx                   term="Nullam"                         >}}
{{</* litx                   term="Nullam" om="p"                   */>}} | {{< litx                   term="Nullam" om="p"                  >}}
{{</* litx                   term="Nullam" om="tp"                  */>}} | {{< litx                   term="Nullam" om="tp"                 >}}
{{</* litx                   term="web"                             */>}} | {{< litx                   term="web"                            >}}
{{</* litx tax="categories"  term="web"                             */>}} | {{< litx tax="categories"  term="web"                            >}}
{{</* litx tax="*"           term="web" om="p"                      */>}} | {{< litx tax="*"           term="web" om="p"                     >}}
{{</* litx tax="*"           term="web" om="pt" ofm=".RelPermalink" */>}} | {{< litx tax="*"           term="web" om="pt" ofm=".RelPermalink" >}}


## hc

HTML comment may be included in markdown via:

{{< highlight html >}}
<!--
foo
bar
-->
{{< /highlight >}}


Via the `hc` (**H**tml **C**omment) shortcode HTML comments may be enabled or disabled in the output:

`config.toml`
{{< highlight toml >}}
[params]
  enableHC = true
{{< /highlight >}}

Here's how to use it:


{{< cscb c >}}
{{</* hc "foo" */>}}
{{< /cscb >}}

Look in the html source. Here's a comment:
{{< hc "foo" />}}
seen?

{{< cscb c >}}
{{</* hc >}}
this works
as well
{{< /hc */>}}
{{< /cscb >}}

{{< hc >}}
this is 
a comment
{{< /hc >}}


{{< cscb c >}}
{{</* hc "some test">}}
more 1
more 2
{{< /hc */>}}
{{< /cscb >}}

{{< hc "text 1">}}
line 1
line 2
{{< /hc >}}

