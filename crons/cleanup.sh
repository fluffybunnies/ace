#!/bin/bash

installDir=$1
echo "installDir: $installDir"

echo ""
echo "Clean files in web/public-out/ 1+ days old"
# print0 and -0 are for spaces in filenames
find $installDir/web/public-out -mtime +1 -type f -print0 | xargs -0 rm

echo ""
echo "Clean files in out/ 1+ days old"
find $installDir/out -mtime +1 -type f -print0 | xargs -0 rm
