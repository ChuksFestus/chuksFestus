#!/usr/bin/env bash
set -euo pipefail

SRC_DIR="assets/fonts-source"
OUT_DIR="public/fonts"
FONTTOOLS_BIN="${FONTTOOLS_BIN:-fonttools}"

if ! command -v "$FONTTOOLS_BIN" >/dev/null 2>&1; then
	echo "fonttools not found. Install it with: pip install fonttools brotli" >&2
	exit 1
fi

mkdir -p "$OUT_DIR"

for src in "$SRC_DIR"/*.otf; do
	name="$(basename "${src%.otf}")"
	out="$OUT_DIR/$name.woff2"
	echo "$src -> $out"
	"$FONTTOOLS_BIN" ttLib.woff2 compress -o "$out" "$src"
done
