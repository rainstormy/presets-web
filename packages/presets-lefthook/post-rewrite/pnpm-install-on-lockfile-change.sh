while read -r OLD_SHA; do
	if [[ -z "$FROM_SHA" && "$OLD_SHA" =~ ^[0-9a-f]{40}$ ]]; then
		FROM_SHA="$(git rev-parse "$OLD_SHA~1")"
	fi
done

TO_SHA="$(git rev-parse HEAD)"

echo "Evaluating changes between the base commit $FROM_SHA and the rebased commit $TO_SHA:"

if git diff --quiet "$FROM_SHA" "$TO_SHA" -- 'pnpm-lock.yaml'; then
	echo "- No changes detected in 'pnpm-lock.yaml'. Skipping 'pnpm install'."
else
	echo "- Changes detected in 'pnpm-lock.yaml'. Running 'pnpm install'."
	# Skip confirmation prompts when Corepack is about to upgrade pnpm.
	CI=1 pnpm install
fi
