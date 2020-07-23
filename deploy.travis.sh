#! /bin/bash

if [ "$TRAVIS_OS_NAME" == osx ]; then
    # deploy on mac
    yarn release
else
    # deploy on windows and linux
    docker run --rm -e GH_TOKEN -v "${PWD}":/project -v ~/.cache/electron:/root/.cache/electron -v ~/.cache/electron-builder:/root/.cache/electron-builder electronuserland/builder:wine /bin/bash -c "sudo apt-get update && sudo apt-get install snapd && sudo snap install snapcraft --classic && yarn --link-duplicates --pure-lockfile && yarn release --linux AppImage snap --win"
fi 