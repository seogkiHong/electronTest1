#! /bin/bash
GH_TOKEN = "175dfc8f29221cddae6a22f17a1af097e0e8d585";
if [ "$TRAVIS_OS_NAME" == osx ]; then
    # deploy on mac
    yarn release
else
    # deploy on windows and linux
    docker run --rm -e $GH_TOKEN -v "${PWD}":/project -v ~/.cache/electron:/root/.cache/electron -v ~/.cache/electron-builder:/root/.cache/electron-builder electronuserland/builder:wine /bin/bash -c "yarn --link-duplicates --pure-lockfile && yarn release --linux AppImage --win"
fi