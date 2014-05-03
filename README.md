#Readme  
##Lessons  
This project is for  
[Warmup 1 - Create An NPM Package](http://d.fork2.com/t/warmup-1-create-an-npm-package/141)  
[Warmup 2 - Setting Up Mocha For Testing](http://d.fork2.com/t/warmup-2-setting-up-mocha-for-testing/156)  
[Warmup 3 - Using CoffeeScript](http://d.fork2.com/t/warmup-3-using-coffeescript/167)

##Notes  
###Warmup 1
1. nvm is for controling multiple version of node. If one don't need to, check note 2 while no find path "~/.nvm/"  

2. Default path on OS X is /usr... if install by binary. So
write  
`export NODE_PATH=/usr/local/lib/node_modules`  
into ~/.bashrc  

3. The [process object](http://nodejs.org/api/process.html#process_process) is ... Could be very useful.  

4. Node command line runtime may need to quit to refresh modules?  

5. require is to get an entrance function of a package. A package is a module that has single objection. An executable in ./bin is separate from the module it self. But usually they have same purpose.  

###Warmup 2  
