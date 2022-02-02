git submodule update --init --recursive
git submodule update --recursive --remote
jq -s '.[0] * .[1]' ./projects/admin-dashboard/package.json ./package.json > ./package2.json && cp -f ./package2.json ./package.json && rm ./package2.json