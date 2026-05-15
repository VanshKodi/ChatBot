@echo off
echo Starting the build process...

:: Run the build command
call npm run build

:: Check if the build was successful before continuing
if %errorlevel% neq 0 (
    echo.
    echo The build process failed. Stopping script.
    pause
    exit /b %errorlevel%
)

echo.
echo Build successful! Copying widget.js to the portfolio-astra project...

:: Run the copy command which automatically replaces existing files due to the /Y flag
copy /Y ".\dist\widget.js" "..\portfolio-astra\public\widget.js"

if %errorlevel% equ 0 (
    echo File copied and replaced successfully!
) else (
    echo There was an error copying the file. Please make sure the dist folder and widget.js file exist.
)
pause