#!/bin/bash

# Define source and destination
SOURCE_DIR="$HOME/.gemini/antigravity/scratch/tivi-landing-page/public"
DEST_DIR="$HOME/tivi-landing-page-src/public"

echo "Setup Assets: Copying images from scratch folder..."

# Create destination if it doesn't exist
mkdir -p "$DEST_DIR"

# Copy Logo
if [ -f "$SOURCE_DIR/tivi-logo.png" ]; then
    cp "$SOURCE_DIR/tivi-logo.png" "$DEST_DIR/"
    echo "✅ Copied tivi-logo.png"
else
    echo "❌ Missing tivi-logo.png in scratch folder"
fi

# Copy Score UI
# Attempting to find best match for score UI if exact name differs
if [ -f "$SOURCE_DIR/tivi-score-ui.png" ]; then
    cp "$SOURCE_DIR/tivi-score-ui.png" "$DEST_DIR/"
    echo "✅ Copied tivi-score-ui.png"
elif [ -f "$SOURCE_DIR/tivi-score.png" ]; then
    cp "$SOURCE_DIR/tivi-score.png" "$DEST_DIR/tivi-score-ui.png"
    echo "✅ Copied tivi-score.png as tivi-score-ui.png"
else
    echo "⚠️  Could not find 'tivi-score-ui.png' or similar. Please verify the filename in $SOURCE_DIR"
fi

echo "Done! restart server if needed."
