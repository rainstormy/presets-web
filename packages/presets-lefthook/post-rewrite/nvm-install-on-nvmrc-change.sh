while read -r OLD_SHA; do
	if [[ -z "$FROM_SHA" && "$OLD_SHA" =~ ^[0-9a-f]{40}$ ]]; then
		FROM_SHA="$(git rev-parse "$OLD_SHA~1")"
	fi
done

TO_SHA="$(git rev-parse HEAD)"

echo "Evaluating changes between the base commit $FROM_SHA and the rebased commit $TO_SHA:"

if git diff --quiet "$FROM_SHA" "$TO_SHA" -- '.nvmrc'; then
	echo "- No changes detected in '.nvmrc'. Skipping 'nvm install' and 'corepack enable'."
else
	echo "- Changes detected in '.nvmrc'. Running 'nvm install' and 'corepack enable'."
	source ~/.nvm/nvm.sh
	nvm install
	nvm alias default "$(cat .nvmrc)"
	corepack enable
fi
