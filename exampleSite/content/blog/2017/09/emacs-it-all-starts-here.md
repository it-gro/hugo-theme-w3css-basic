---
title:       "Emacs - it all starts here"
date:        2017-09-10T19:00:00+01:00
tags:
 - editor
 - emacs
categories:
  - tools
resImgTeaser: teaserpics/wikipedia.org/emacs-it-all-starts-here.png
---


Emacs originally was an acronym for Editor MACroS. RMS says he
“picked the name Emacs because <E> was not in use as an abbreviation
on ITS at the time.” 

The first Emacs was a set of macros written in 1976 at MIT by RMS for
the editor TECO (Text Editor and COrrector, originally Tape Editor and
COrrector) under ITS (the Incompatible Timesharing System) on a
PDP-10. 

<!--more-->

RMS had already extended TECO with a “real-time” full-screen mode with
reprogrammable keys. Emacs was started by Guy Steele as a project to
unify the many divergent TECO command sets and key bindings at MIT,
and completed by RMS.


## Where does the name “Emacs” come from?
Many people have said that TECO code looks a lot like line noise; you
can read more at <news:alt.lang.teco>. Someone has written a TECO
implementation in Emacs Lisp (to find it, see *note Packages that do
not come with Emacs::); it would be an interesting project to run the
original TECO Emacs inside of Emacs.

For some not-so-serious alternative reasons for Emacs to have that
name, check out the file [etc/JOKES]({{< relref "emacs-jokes.md" >}})
(*note File-name conventions::).



## What is different about Emacs 25?

* Emacs can now embed native widgets inside Emacs buffers, if you
  have gtk3 and webkitgtk3 installed.  E.g., to access the embedded
  webkit browser widget, type ‘M-x xwidget-webkit-browse-url’.

* Emacs can now dynamically load external modules compiled as shared
  libraries.
 
* {{< kbd "C-x" "8" >}} has new shorthands for several popular characters, type
  {{< kbd "C-x" "8" "C-h">}} to list shorthands.

* A new minor mode ‘global-eldoc-mode’ is enabled by default, and
  shows in the echo area or in the mode line the argument list of the
  Emacs Lisp form at point.

* On text terminals that support the “bracketed paste mode” EMacs now
  uses that mode by default.  This mode allows Emacs to distinguish
  between pasted text and text typed by the user.

* Emacs 25 comes with data files imported from the latest Unicode
  Standard version 9.0.0.

* The support for bidirectional editing was updated to include all
  the features mandated by the latest Unicode Standard version 9.0.0.

* Search command can now perform character folding in matches.  This
  is analogous to case folding, but instead of disregarding case
  variants, it disregards wider classes of distinctions between
  similar characters, such as matching different variants of double
  quote characters, ignoring diacritics, etc.

* The Emacs Web Browser EWW was extended to render text using
  variable-pitch fonts, and got other new features.

* Rmail can now render HTML mail messages, if Emacs is built with
  libxml2 or if you have the Lynx browser installed.

* VC now has basic support for ‘push’ commands, implemented for Bzr,
  Git, and Hg.

* Hide-IfDef mode now support full C/C++ expressions in macros, macro
  argument expansion, interactive macro evaluation and automatic
  scanning of ‘#define’d symbols.

* New package Xref replaces Etags’s front-end and UI. Xref provides a
  generic framework and new commands to find and move to definitions
  of functions, macros, data structures etc., as well as go back to
  the location where you were before moving to a definition.  It
  supersedes and obsoletes many Etags commands, while still using the
  etags.el code that reads the TAGS tables as one of its back-ends.
  As result, the popular key bindings ‘M-.’ and ‘M-,’ have been
  changed to invoke Xref commands.

* The new package Project provides generic infrastructure for dealing
  with projects.

* Emacs can now draw horizontal scroll bars on some platforms that
  provide toolkit scroll bars, namely Gtk+, Lucid, Motif and Windows.

Consult the Emacs ‘NEWS’ file (‘C-h n’) for the full list of changes in Emacs 25.

