#Note that to be on the safe side, you should run git submodule update with the --init flag in case the MainProject commits you just pulled added new submodules, and with the --recursive flag if any submodules have nested submodules.
git submodule update --init --recursive
# --remote fetch and merge the subdirectory
git submodule update --recursive --remote
jq -s '.[0] * .[1]' ./projects/admin-dashboard/package.json ./package.json > ./package2.json && cp -f ./package2.json ./package.json && rm ./package2.json