---
title:       "Hugo - **highlight** :art:"
date:        2017-11-24T08:44:12+01:00
tags:
  - Hugo
categories:
  - Web
draft:       false
icon:        
teaserpic:   images/teaserpics/bitbucket.org/pygments-main-logo.png
---

Hugo comes with reallly fast syntax highlighting from Chroma.
From Hugo 0.28, the default syntax hightlighter in Hugo is Chroma; it
is built in Go and is really, really fast – and for the most important
parts compatible with Pygments.
See https://gohugo.io/content-management/syntax-highlighting for more.

<!--more-->

In this theme we set

`config.toml`
{{< highlight toml >}}
pygmentsUseClasses = true
demo
{{< /highlight >}}

and provide `static/css/syntax.css` which is a copy of: `static/css/syntax/syntax.<STYLE>.css`   

The styles are:
`autumn borland bw colorful default emacs friendly fruity manni monokai murphy native pastie perldoc rrt tango trac vim vs`

These files were created with: `hugo gen chromastyles --style=vs > syntax.vs.css`
Available styles are listed here: https://help.farbox.com/pygments.html


An alternative would be:

`config.toml`
{{< highlight toml >}}
pygmentsUseClasses = false
# choose one:
#pygmentsStyle = "autumn"
#pygmentsStyle = "borland"
#pygmentsStyle = "bw"
#pygmentsStyle = "colorful"
#pygmentsStyle = "default"
pygmentsStyle = "emacs"
#pygmentsStyle = "friendly"
#pygmentsStyle = "fruity"
#pygmentsStyle = "manni"
#pygmentsStyle = "monokai"
#pygmentsStyle = "murphy"
#pygmentsStyle = "native"
#pygmentsStyle = "pastie"
#pygmentsStyle = "perldoc"
#pygmentsStyle = "rrt"
#pygmentsStyle = "tango"
#pygmentsStyle = "trac"
#pygmentsStyle = "vim"
#pygmentsStyle = "vs"
{{< /highlight >}}




These are the supported languages:

ABNF, ANTLR, APL, ActionScript, ActionScript 3, Ada, Angular2,
ApacheConf, AppleScript, Awk, BNF, Base Makefile, Bash, Batchfile,
BlitzBasic, Brainfuck, C, C#, C++, CFEngine3, CMake, COBOL, CSS, Cap'n
Proto, Ceylon, ChaiScript, Cheetah, Clojure, CoffeeScript, Common
Lisp, Coq, Crystal, Cython, DTD, Dart, Diff, Django/Jinja, Docker,
EBNF, Elixir, Elm, EmacsLisp, Erlang, FSharp, Factor, Fish, Forth,
Fortran, GAS, GDScript, GLSL, Genshi, Genshi HTML, Genshi Text,
Gnuplot, Go, Groovy, HTML, Handlebars, Haskell, Haxe, Hexdump, Hy,
INI, Idris, Io, JSON, Java, JavaScript, Julia, Kotlin, LLVM, Lighttpd
configuration file, Lua, Mako, Mason, Mathematica, MiniZinc, Modula-2,
MySQL, Myghty, NASM, Newspeak, Nginx configuration file, Nim, OCaml,
Octave, PHP, PL/pgSQL, POVRay, PacmanConf, Perl, Pig, PkgConfig,
PostScript, PostgreSQL SQL dialect, PowerShell, Prolog, Protocol
Buffer, Puppet, Python, Python 3, QBasic, R, Racket, Ragel, Rexx,
Ruby, Rust, SPARQL, SQL, Sass, Scala, Scheme, Scilab, Smalltalk,
Smarty, Snobol, SquidConf, SVG, Swift, TASM, Tcl, Tcsh, Termcap,
Terminfo, Terraform, Thrift, Transact-SQL, Turtle, Twig, TypeScript,
TypoScript, TypoScriptCssData, TypoScriptHtmlData, VHDL, VimL, XML,
Xorg, YAML, cfstatement, markdown, reStructuredText, reg,
systemverilog, verilog

Check https://github.com/alecthomas/chroma for more information.

