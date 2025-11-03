# Remove all dist/ folders in apps/ and packages/
find apps packages -name "dist" -type d -exec rm -rf {} +
# Remove all tsbuildinfo files in apps/ and packages/
find apps packages -path "*/node_modules/.tmp/tsconfig.tsbuildinfo" -type f -delete
