#!/usr/bin/env bash
# 把 raw 下的 official-XXX.{jpg,png} 按顺序重命名为 hero-01..02 / appearance-01..05 / console-01..03 / space-01..03 / other-01..03
# 然后跑 image_launder.py 输出到 laundered/
# 用法: ./scripts/categorize-and-launder.sh <slug>
set -euo pipefail
SLUG="${1:?usage: $0 <slug>}"
PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_ROOT"

RAW_DIR="public/images/真图/$SLUG/raw"
PREPPED_DIR="public/images/真图/$SLUG/prepped"

if [ ! -d "$RAW_DIR" ]; then echo "missing $RAW_DIR"; exit 1; fi
rm -rf "$PREPPED_DIR"; mkdir -p "$PREPPED_DIR"

# Categories in order, with target counts
declare -a CATS=(hero appearance console space other)
declare -a COUNTS=(2 5 3 3 3)

# Collect all raw image files sorted, prefer larger sizes first
FILES=()
while IFS= read -r f; do FILES+=("$f"); done < <(find "$RAW_DIR" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.webp' \) -exec stat -f '%z %N' {} \; | sort -rn | awk '{print substr($0, index($0,$2))}')

if [ "${#FILES[@]}" -lt 16 ]; then
  echo "WARN: only ${#FILES[@]} raw files, need 16; will reuse last image to pad"
fi

idx=0
for i in "${!CATS[@]}"; do
  cat="${CATS[$i]}"
  n="${COUNTS[$i]}"
  for ((j=1; j<=n; j++)); do
    if [ "$idx" -ge "${#FILES[@]}" ]; then
      src="${FILES[${#FILES[@]}-1]}"   # pad with last file
    else
      src="${FILES[$idx]}"
    fi
    ext=$(echo "${src##*.}" | tr 'A-Z' 'a-z')
    cp "$src" "$PREPPED_DIR/${cat}-$(printf '%02d' $j).${ext}"
    idx=$((idx+1))
  done
done

echo "prepped $idx files for $SLUG -> $PREPPED_DIR"
echo ""
echo "=== running 3-pass launder ==="
python3 scripts/image_launder.py "$PREPPED_DIR" "$SLUG"
