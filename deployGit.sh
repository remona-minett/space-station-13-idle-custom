#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run buildgit

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/remona-minett/space-station-13-idle-custom.git master:gh-pages

cd -