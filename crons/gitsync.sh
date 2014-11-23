#!/bin/bash

REPO_DIR=$1
GIT_BRANCH=$2

cd "$REPO_DIR"
git fetch
git reset --hard HEAD
git checkout -f $GIT_BRANCH
git pull origin $GIT_BRANCH

