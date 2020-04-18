set "VS150COMNTOOLS=%PROGRAMFILES(X86)%\Microsoft Visual Studio\2017\Enterprise\VC\Auxiliary\Build"
call "%VS150COMNTOOLS%\vcvarsall.bat" x64 -vcvars_ver=14.13

SET NODE_GYP_FORCE_PYTHON=C:\Python27\python.exe

npm i node-sass --save-dev