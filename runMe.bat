cd Enable Viacam
cd bin
start "" "eviacam.exe"
cd ..
cd ..
ping 127.0.0.1 -n 6 > nul
call startServer.bat
pause