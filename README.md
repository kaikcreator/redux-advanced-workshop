# Redux Advanced Workshop


Project base to learn ReactJS/Redux good practices like HOC and middleware

###Getting Started###

There are two methods for getting started:

####With Git!#####

Follow these simple instructions:

```
	> git clone https://github.com/kaikcreator/redux-advanced-workshop.git
	> cd redux-advanced-workshop
	> npm install
	> npm start
```

Finally, go to http://localhost:8081/

####No Git? No problem!#####

[Download](https://github.com/kaikcreator/redux-advanced-workshop/archive/master.zip) the .zip file, then open your terminal, change to the project directory, and: follow these simple instructions:

```
	> npm install
	> npm start
```

Finally, go to http://localhost:8081/


####Using SaSS

The app comes with css styles included, but you can change styles using sass (on scss folder) and compile them to css using gulp.


#####Installing gulp
Gulp has been installed locally in your repo through npm install, but it is probably that you need to install it at a global level:

```
	> npm install -g gulp
```

#####Compiling SaSS
You can compile it once by running in terminal:

```
	> gulp sass
```

Or you can run it as a process watching for your changes with:

```
	> gulp sass-watch
```

>NOTE: If you are using the server at the same time, just refresh the page and the changes with update automatically.