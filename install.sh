#!/usr/bin/env bash

set -e;
cd "$HOME"
mkdir -p "$HOME/.quicklock/locks"
curl -o- https://rawgit.com/oresoftware/quicklock/master/install.sh > "$HOME/.quicklock/ql.sh"

echo "To complete installation of 'quicklock' add the following line to your .bash_profile file:";
echo ". \"$HOME/.quicklock/ql.sh\"";
