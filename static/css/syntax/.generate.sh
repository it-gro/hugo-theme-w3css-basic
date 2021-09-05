#!/usr/bin/env bash

# hugo gen chromastyles -h 

styles=$(cat <<'EOV'
abap
algol
algol_nu
api
arduino
autumn
borland
bw
colorful
dracula
emacs
friendly
fruity
github
igor
lovelace
manni
monokai
monokailight
murphy
native
paraiso-dark
paraiso-light
pastie
perldoc
pygments
rainbow_dash
rrt
solarized-dark
solarized-dark256
solarized-light
swapoff
tango
trac
vim
vs
xcode
EOV
)

for s in $styles; do
  hugo gen chromastyles --style=$s > syntax.$s.css
done
