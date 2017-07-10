if "%1" == "app" (

	cmd /k "mongod" -new_console:t:mongod
	timeout 5
	cmd /k "nodemon ./js/server/server.js --watch ./js/server" -new_console:t:nodemon
	cmd /k "gulp browserSync" -new_console:t:browserSync
	cmd /k "gulp compile" -new_console:t:compile
)

if "%1" == "test" (

	if "%2" == "-unit" (
		cmd /k "karma start karma.conf.js" -new_console:t:unit
	)

	if "%2" == "-e2e" (
		cmd /k "mongod" -new_console:t:mongod
		cmd /k "ls" -new_console:d:"%cd%\tests\end-to-end"
	)
)

cmd /k "cls"