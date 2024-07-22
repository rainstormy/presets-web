FROM_SHA="$(git rev-parse HEAD@\{1\})"
TO_SHA="$(git rev-parse HEAD)"

echo "Evaluating changes between the old HEAD commit $FROM_SHA and the new HEAD commit $TO_SHA:"

if git diff --quiet "$FROM_SHA" "$TO_SHA" -- 'pnpm-lock.yaml'; then
	echo "- No changes detected in 'pnpm-lock.yaml'. Skipping 'pnpm install'."
else
	echo "- Changes detected in 'pnpm-lock.yaml'. Running 'pnpm install'."
	# Skip confirmation prompts when Corepack is about to upgrade pnpm.
	CI=1 pnpm install
fi
