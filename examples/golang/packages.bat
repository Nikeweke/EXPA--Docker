@ECHO OFF
SETLOCAL
chcp 866>nul

SET GOPATH=%CD%
SET PATH=%PATH%;%GOPATH%\BIN;

ECHO Loading packages...

go get github.com/labstack/echo
go get github.com/dgrijalva/jwt-go
REM FOR linux build
go get golang.org/x/sys/unix

ECHO Packages loaded successfuly!