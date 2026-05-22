# image_launder.py
# 图片防溯源处理 - 清掉来源指纹
# 用法: python3 image_launder.py <src_dir> <slug>
#       e.g. python3 image_launder.py ~/Downloads/changan-uni-t changan-uni-t
#
# 处理流程:
#   1) 裁边 5-8% 随机 (改尺寸指纹)
#   2) 30% 概率水平翻转 (改构图指纹)
#   3) 微调亮度/对比度/饱和度/锐度 (改像素哈希)
#   4) 重采样到 1280 宽统一 (清原尺寸指纹)
#   5) 输出 WebP 不带 EXIF, 质量 82
#   6) 文件名: evautopro-{slug}-{idx:02d}.webp

import os, sys, random
from pathlib import Path
from PIL import Image, ImageEnhance, ImageOps

def launder(src, dst_dir, slug, idx):
    img = Image.open(src).convert('RGB')

    # ③ 改构图: 5-8% 随机裁边 + 30% 概率水平翻转
    w, h = img.size
    cx = random.randint(int(w*0.05), int(w*0.08))
    cy = random.randint(int(h*0.05), int(h*0.08))
    img = img.crop((cx, cy, w-cx, h-cy))
    if random.random() < 0.3:
        img = ImageOps.mirror(img)

    # ③ 改色调/对比度/饱和度/锐度, 每张随机微调
    for enh, lo, hi in [(ImageEnhance.Brightness, 0.95, 1.05),
                        (ImageEnhance.Contrast,   0.95, 1.08),
                        (ImageEnhance.Color,      0.92, 1.08),
                        (ImageEnhance.Sharpness,  0.9,  1.1)]:
        img = enh(img).enhance(random.uniform(lo, hi))

    # 重采样到统一宽度 (让原尺寸指纹消失)
    target_w = 1280
    img = img.resize((target_w, int(img.height * target_w / img.width)), Image.LANCZOS)

    # ② 自己的文件名规则
    out = Path(dst_dir) / f"evautopro-{slug}-{idx:02d}.webp"

    # ① 直接转 WebP 不带 EXIF, 质量 82
    img.save(out, 'webp', quality=82, method=6)
    return out

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("用法: python3 image_launder.py <src_dir> <slug>")
        print("示例: python3 image_launder.py ~/Downloads/changan-uni-t changan-uni-t")
        sys.exit(1)

    src_dir, slug = sys.argv[1], sys.argv[2]
    dst = Path.home() / 'sites/evautopro.com/public/images/真图' / slug
    dst.mkdir(parents=True, exist_ok=True)

    count = 0
    for i, p in enumerate(sorted(Path(src_dir).expanduser().glob('*.[jpJP][pnPN]*')), 1):
        try:
            out = launder(p, dst, slug, i)
            print(f'✓ {p.name} → {out.name}')
            count += 1
        except Exception as e:
            print(f'✗ {p.name} FAILED: {e}')

    print(f'\n处理 {count} 张图 → {dst}/')
