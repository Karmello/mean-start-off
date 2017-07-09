if "%1" == "app" (

	ConEmu64 /cmd -new_console:t:mongod "mongod"
	ConEmu64 /cmd -new_console:t:nodemon "nodemon ./js/server/server.js --watch ./js/server"
	ConEmu64 /cmd -new_console:t:app "gulp fireup"
)

if "%1" == "test" (

	if "%2" == "-unit" (
		ConEmu64 /cmd -new_console:t:unit "karma start karma.conf.js"
	)

	if "%2" == "-e2e" (
		ConEmu64 /cmd -new_console:t:mongod "mongod"
		cmd /k "%ConEmuBaseDir%\CmdInit.cmd" -new_console:d:"%cd%\tests\end-to-end"
	)
)

cmd /k "cls"