@echo off
set /p projectName="Enter your Next.js project name: "
npx create-next-app@latest %projectName% --typescript --eslint --tailwind --app --turbopack --src-dir=false --import-alias=false
pause
