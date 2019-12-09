@ECHO OFF
SETLOCAL
chcp 866>nul

SET GOPATH=%CD%
SET PATH=%PATH%;%GOPATH%\BIN;

REM Linux Build settings
SET GOOS=linux
SET GOARCH=amd64
SET CGO_ENABLED=0


REM go run main.go 

REM compiled app will have name "app"
go build -o app main.go 
REM pause