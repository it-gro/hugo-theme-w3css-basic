#!/bin/bash

cd $(dirname $0)/..
# hugo server -w --themesDir ../../ --disableFastRender --navigateToChanged
hugo server -e example -w --themesDir ../../ --disableFastRender --navigateToChanged
