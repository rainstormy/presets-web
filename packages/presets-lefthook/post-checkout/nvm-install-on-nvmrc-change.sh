FROM_SHA="$(git rev-parse HEAD@\{1\})"
TO_SHA="$(git rev-parse HEAD)"

echo "Evaluating changes between the old HEAD commit $FROM_SHA and the new HEAD commit $TO_SHA:"

if git diff --quiet "$FROM_SHA" "$TO_SHA" -- '.nvmrc'; then
	echo "- No changes detected in '.nvmrc'. Skipping 'nvm install' and 'corepack enable'."
else
	echo "- Changes detected in '.nvmrc'. Running 'nvm install' and 'corepack enable'."
	source ~/.nvm/nvm.sh
	nvm install
	nvm alias default "$(cat .nvmrc)"
	corepack enable
fi
