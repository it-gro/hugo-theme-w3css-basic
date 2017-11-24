---
weight:      1
title:       "This Theme Shortcodes"
date:        "2017-11-22T07:41:52+01:00"
toc:         true
description: >
tags:
  - hugo
  - shortcodes
categories:
  - This Theme
teaserpic:      images/teaserpics/hugo-lorem.png
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

## Style

* these colors are separate from the ones in w3cssColorTheme

Defined in:

    static/css/custom.css

{{< highlight css >}}
/* for shortcodes w3-notice-icon and w3-alert-icon */
.shortcode-info {
  border-color:#4CAF50!important
}
.shortcode-check {
  border-color:#ffeb3b!important
}
.shortcode-question {
  border-color:#2196F3!important
}
.shortcode-warning {
  border-color:#f44336!important
}

/* for shortcode w3-quote */
.shortcode-quote {
  border-color:#4CAF50!important
}
{{< /highlight >}}


## w3-notice-icon

* Inspired by [W3.CSS Notes](https://www.w3schools.com/w3css/w3css_notes.asp)
* Added fa-icons
  - fa-info
  - fa-warning
  - fa-question
  - fa-check (I miss "ok" or "success" icon ...)
* Use custom css for border-colors
  - -shortcode-info
  - -shortcode-warning
  - -shortcode-question
  - -shortcode-check

### Info

{{< highlight nolan >}}
{{%/* w3-notice-icon %}}
A default disclaimer (=> info)
{{% /w3-notice-icon */%}}
{{< /highlight >}}

renders as

{{% w3-notice-icon                                                 %}}A default disclaimer (=> info)  {{% /w3-notice-icon %}}


{{< highlight nolang >}}
{{%/* w3-notice-icon head="I'm a heading" %}}
A default disclaimer with header
{{% /w3-notice-icon */%}}
{{< /highlight >}}
renders as

{{% w3-notice-icon                    head="I'm a heading"       %}}A default disclaimer with header {{% /w3-notice-icon %}}


{{< highlight nolang >}}
{{%/* w3-notice-icon icon="fa-info" head="Show Info" %}}
No need for icon="fa-info", since this is the default
{{% /w3-notice-icon */%}}
{{< /highlight >}}
renders as

{{% w3-notice-icon icon="fa-info"     head="Show Info"             %}}No need for icon="fa-info", since this is the default   {{% /w3-notice-icon %}}



### Warning
* select the type of notice by providing the icon-parameter

{{< highlight nolang >}}
{{%/* w3-notice-icon icon="fa-warning" head="Keep in mind" %}}
A warning disclaimer
{{% /w3-notice-icon */%}}
{{< /highlight >}}
renders as

{{% w3-notice-icon icon="fa-warning"  head="Keep in mind"          %}}A warning disclaimer             {{% /w3-notice-icon %}}



### Question
{{< highlight nolang >}}
{{%/* w3-notice-icon icon="fa-question" %}}
A question
{{% /w3-notice-icon */%}}
{{< /highlight >}}
renders as

{{% w3-notice-icon icon="fa-question"                              %}}A question                       {{% /w3-notice-icon %}}

{{< highlight nolang >}}
{{%/* w3-notice-icon icon="fa-question" head="A Question" %}}
A question with header
{{% /w3-notice-icon */%}}
{{< /highlight >}}
renders as

{{% w3-notice-icon icon="fa-question" head="A Question"            %}}A question with header           {{% /w3-notice-icon %}}



### Check
{{< highlight nolang >}}
{{%/* w3-notice-icon icon="fa-check" %}}
A check disclaimer
{{% /w3-notice-icon */%}}
{{< /highlight >}}
renders as

{{% w3-notice-icon icon="fa-check"                                 %}}A check disclaimer               {{% /w3-notice-icon %}}

{{< highlight nolang >}}
{{%/* w3-notice-icon icon="fa-check" head="Check this" %}}
A check disclaimer with header
{{% /w3-notice-icon */%}}
{{< /highlight >}}
renders as

{{% w3-notice-icon icon="fa-check"    head="Check this"            %}}A check disclaimer with header   {{% /w3-notice-icon %}}



## w3-alert-icon
* I ignored [W3.CSS Alerts](https://www.w3schools.com/w3css/w3css_alerts.asp)
* used borders instead


Some examples:

{{< highlight nolang >}}
{{%/* w3-alert-icon icon="fa-info" %}}
Hi, I'm info
{{% /w3-alert-icon */%}}

{{%/* w3-alert-icon icon="fa-check" head="I'm check" %}}
A check with title
{{% /w3-alert-icon */%}}

{{%/* w3-alert-icon icon="fa-warning" %}}
A warning
{{% /w3-alert-icon */%}}

{{%/* w3-alert-icon icon="fa-warning" head="You have been warned"  %}}
A warning
{{% /w3-alert-icon */%}}
{{< /highlight >}}

{{% w3-alert-icon icon="fa-info"                                  %}}Hi, I'm info       {{% /w3-alert-icon %}}
{{% w3-alert-icon icon="fa-check"   head="I'm check"              %}}A check with title {{% /w3-alert-icon %}}
{{% w3-alert-icon icon="fa-warning"                               %}}A warning          {{% /w3-alert-icon %}}
{{% w3-alert-icon icon="fa-warning" head="You have been warned"   %}}A warning          {{% /w3-alert-icon %}}

## w3-button-icon

{{< highlight nolang >}}
{{%/* w3-button-icon                           %}}Hi, i'm a button{{% /w3-alert-icon */%}}
{{%/* w3-button-icon icon="fa-warning"         %}}Purge{{% /w3-alert-icon */%}}
{{%/* w3-button-icon href="https://google.com" %}}take me to Google{{% /w3-alert-icon */%}}
{{< /highlight >}}

renders to:
{{% w3-button-icon                           %}}Hi, i'm a button{{% /w3-alert-icon %}}
{{% w3-button-icon icon="fa-warning"         %}}Purge{{% /w3-alert-icon %}}
{{% w3-button-icon href="https://google.com" %}}take me to Google{{% /w3-alert-icon %}}


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
* {{% w3-tag                    %}}42{{% /w3-badge %}}

I'm a big one: {{% w3-tag "w3-blue w3-jumbo" %}}42{{% /w3-badge %}}

created with:
{{< highlight nolang >}}
{{%/* w3-tag                    */%}}42{{%/* /w3-badge */%}}
{{%/* w3-tag "w3-blue w3-jumbo" */%}}42{{%/* /w3-badge */%}}
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


# Other Shortcodes in this Theme

## icon

{{< highlight nolan >}}
{{</* icon fa-home>}}
{{< icon "fa-home fa-2x" */>}}
{{< /highlight >}}
renders as
{{< icon fa-home>}}
{{< icon "fa-home fa-2x">}}

{{< highlight nolan >}}
{{</* icon name="fa-home" >}}
{{< icon name="fa-home" size="fa-2x" */>}}
{{< /highlight >}}
renders as
{{< icon name="fa-home" >}}
{{< icon name="fa-home" size="fa-2x">}}

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

You may give a class name {{< csc k >}}cool code{{< /csc >}}. Here are the chromastyles classes:


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


### Style

    static/css/style.css

{{< highlight css >}}
code {
  background-color: rgba(255,255,255, 0.4) ; /* adjust to syntax.css Background */
}
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

