#!/bin/bash
# wire-real-images.sh
# Codex 下载的真图替换 SVG 占位
# 用法: bash scripts/wire-real-images.sh

set -e

SITE_DIR="/Users/linlin/sites/evautopro.com"
REAL_DIR="$SITE_DIR/public/images/真图"
SRC_DIR="$SITE_DIR/src"

if [ ! -d "$REAL_DIR" ]; then
  echo "❌ 真图目录不存在: $REAL_DIR"
  echo "等 Codex 完成下载后再跑此脚本"
  exit 1
fi

echo "==> 扫描真图目录"
REAL_COUNT=$(find "$REAL_DIR" -type f \( -name "*.jpg" -o -name "*.webp" -o -name "*.png" \) | wc -l | tr -d ' ')
echo "找到 $REAL_COUNT 张真图"

if [ "$REAL_COUNT" = "0" ]; then
  echo "❌ 没有真图,退出"
  exit 1
fi

REPLACED=0
for img in "$REAL_DIR"/*.{jpg,webp,png}; do
  [ -e "$img" ] || continue

  filename=$(basename "$img")
  base="${filename%.*}"
  ext="${filename##*.}"

  # 检查全站 .astro 里有没有引用对应 .svg
  REFS=$(grep -rl "images/${base}.svg" "$SRC_DIR" 2>/dev/null || true)

  if [ -n "$REFS" ]; then
    # 批量替换
    for f in $REFS; do
      sed -i '' "s|images/${base}.svg|images/真图/${base}.${ext}|g" "$f"
    done
    echo "✓ $base.svg → 真图/${base}.${ext}  ($(echo "$REFS" | wc -l | tr -d ' ') 处)"
    REPLACED=$((REPLACED + 1))
  fi
done

echo ""
echo "==> 替换完成: $REPLACED / $REAL_COUNT"
echo ""
echo "==> 跑 build 验证"
cd "$SITE_DIR" && /usr/local/bin/node node_modules/.bin/astro build 2>&1 | tail -5

echo ""
echo "==> git commit"
cd "$SITE_DIR"
git add . 2>&1 | tail -3
git commit -m "Wire $REPLACED real images from /真图/ — replacing SVG placeholders" 2>&1 | tail -2
git push 2>&1 | tail -3

echo ""
echo "✅ 真图上线 - 等 GitHub Actions 部署 3 分钟后 https://evautopro.com 自动更新"
