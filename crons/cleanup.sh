#!/bin/bash

installDir=$1
echo "installDir: $installDir"

echo ""
echo "Clean files in web/public-out/ 7+ days old"
# print0 and -0 are for spaces in filenames
find $installDir/web/public-out -mtime +7 -type f -print0 | xargs -0 rm -v

echo ""
echo "Clean files in out/ 1+ days old"
find $installDir/out -mtime +1 -type f -print0 | xargs -0 rm -v

# show count + remove...
# remove: find ./out  -type f -print0 | tee >(xargs -0 echo | wc -w) | xargs -0 rm
# issue: the count is appended and piped to rm
