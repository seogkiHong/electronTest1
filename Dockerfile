#USAGE: Build the docker image with "docker build -t name_you_want ." and run it as follows "docker run -it -w /work/ -v PATH/TO/REPO:/work name_you_want".
FROM debian:stretch

# This is the same as pulling buildpack-deps:stretch-curl
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    netbase \
    wget \
    sudo \
    && rm -rf /var/lib/apt/lists/*

RUN set -ex; \
    if ! command -v gpg > /dev/null; then \
    apt-get update; \
    apt-get install -y --no-install-recommends \
    gnupg \
    dirmngr \
    gcc-multilib g++-multilib \
    ; \
    rm -rf /var/lib/apt/lists/*; \
    fi

# install yarn
RUN curl -L https://yarnpkg.com/latest.tar.gz | tar xvz && mv yarn-* /yarn && ln -s /yarn/bin/yarn /usr/bin/yarn
RUN apt-get -qq update && apt-get -qq dist-upgrade

# Install WineHQ Package for Debian Stretch
RUN dpkg --add-architecture i386  && \
    apt install -y apt-transport-https gnupg2 software-properties-common && \
    wget -qO - https://dl.winehq.org/wine-builds/winehq.key | apt-key add - && \
    apt-add-repository https://dl.winehq.org/wine-builds/debian/ && \
    export PATH=$PATH:/opt/wine-stable/bin && \
    apt update && \
    apt install -y winehq-stable && \
    wine --version 

# Install RPM and AR for building .rpm and .deb
RUN apt-get update && apt-get install -y --no-install-recommends rpm &&\
    apt-get install -y --no-install-recommends binutils && apt-get install -y --no-install-recommends sudo

# Install nodejs. If you require nodejs 10 just use .../setip_10.x
RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
RUN apt-get install -y nodejs