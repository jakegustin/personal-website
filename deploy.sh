#!/usr/bin/env sh

### Script provided by Vue CLI docs ###

# abort on errors
set -e

# build
npm run build

# copying README.md
cp ./README.md ./dist/

# navigate into the build output directory
cd dist

# Working around github 404 issue with vue router
cp ./index.html ./404.html

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:jakegustin/jakegustin.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -