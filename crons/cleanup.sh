#!/bin/bash

installDir=$1
echo "installDir: $installDir"

echo ""
echo "Clean files in web/public-out/ 7+ days old"
# print0 and -0 are for spaces in filenames, print0 apparently has to come after -type or it includes dirs
find $installDir/web/public-out -mtime +7 -type f -print0 | xargs -0 rm

echo ""
echo "Clean files in out/ 7+ days old"
find $installDir/out -mtime +7 -type f -print0 | xargs -0 rm
