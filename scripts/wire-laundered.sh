#!/bin/bash
# Replace SVG placeholders with laundered WebP real images
# Source: public/images/真图/laundered/evautopro-{slug}-01.webp

set -e
SITE_DIR="/Users/linlin/sites/evautopro.com"
LAUNDERED="$SITE_DIR/public/images/真图/laundered"

if [ ! -d "$LAUNDERED" ]; then
  echo "❌ Laundered dir not found"
  exit 1
fi

REPLACED=0
for img in "$LAUNDERED"/evautopro-*-01.webp; do
  [ -e "$img" ] || continue
  filename=$(basename "$img")
  # extract slug: evautopro-{slug}-01.webp -> {slug}
  slug="${filename#evautopro-}"
  slug="${slug%-01.webp}"

  # 找全站 .astro 里 car-{slug}.svg 引用
  refs=$(grep -rl "car-${slug}.svg" "$SITE_DIR/src" 2>/dev/null || true)
  if [ -n "$refs" ]; then
    new_path="/images/真图/laundered/evautopro-${slug}-01.webp"
    old_path="/images/car-${slug}.svg"
    for f in $refs; do
      sed -i '' "s|${old_path}|${new_path}|g" "$f"
    done
    count=$(echo "$refs" | wc -l | tr -d ' ')
    echo "✓ ${slug}: ${count} 处替换"
    REPLACED=$((REPLACED + 1))
  fi
done

echo ""
echo "==> 共替换 $REPLACED 个车型的图片引用"
echo ""
echo "==> Build 验证"
cd "$SITE_DIR" && /usr/local/bin/node node_modules/.bin/astro build 2>&1 | /usr/bin/tail -5
