@echo off
title Servidor Dulce Lui
color 02
cd /d C:\dulce-lui
echo ========================================
echo   Iniciando servidor de Dulce Lui...
echo ========================================
echo.
npm run preview -- --port 4173 --host
echo.
echo El servidor se ha detenido.
pause