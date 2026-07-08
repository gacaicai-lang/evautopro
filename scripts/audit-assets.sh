#!/bin/bash
# Rebuild the site and audit dist/ for missing assets and broken internal links.
# Usage: bash scripts/audit-assets.sh [--no-build]
set -e
cd "$(dirname "$0")/.."

if [ "$1" != "--no-build" ]; then
  echo "==> Building..."
  npx astro build 2>&1 | tail -1
fi

echo "==> Auditing image/asset references in dist/"
missing_assets=0
while read -r p; do
  if [ ! -f "dist$p" ]; then
    echo "MISSING ASSET: $p"
    missing_assets=$((missing_assets + 1))
  fi
done < <(grep -rhoE '(src|href)="/images/[^"]*"' dist --include="*.html" | grep -oE '/images/[^"]*' | sort -u)

echo "==> Auditing internal links in dist/"
broken_links=0
while read -r p; do
  case "$p" in
    *.css|*.js|*.svg|*.webp|*.jpg|*.png|*.xml|*.ico|*.txt)
      [ -f "dist$p" ] || { echo "MISSING FILE: $p"; broken_links=$((broken_links + 1)); } ;;
    */)
      [ -f "dist${p}index.html" ] || { echo "404 PAGE: $p"; broken_links=$((broken_links + 1)); } ;;
    *)
      [ -f "dist$p" ] || [ -f "dist$p/index.html" ] || { echo "404: $p"; broken_links=$((broken_links + 1)); } ;;
  esac
done < <(grep -rhoE 'href="/[^"#?]*' dist --include="*.html" | sed 's/href="//' | sort -u)

echo "==> Result: $missing_assets missing assets, $broken_links broken links"
[ "$missing_assets" -eq 0 ] && [ "$broken_links" -eq 0 ] && echo "✓ CLEAN" || exit 1
