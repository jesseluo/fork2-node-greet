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

3. There are two paths for npm. Gernal package install to $NODE_PATH may be better. Check [npm 1.0: Global vs Local installation](http://blog.nodejs.org/2011/03/23/npm-1-0-global-vs-local-installation)

4. The [process object](http://nodejs.org/api/process.html#process_process) has lot of infomation. Could be very useful.  

5. Node command line runtime may need to quit to refresh modules?  

6. require is to get an entrance function of a package. A package is a module that has single objection. An executable in ./bin is separate from the module it self. But usually they have same purpose.  

7. `npm install XXX --save-dev` is for dev using packages, like test.   
   `npm install XXX --save` is for both dev and release.   
   Also `npm link` can make local package global.   
     
###Warmup 2  
1. BDD：Behavior Driven Development. Using nature language to describe test case, and push development.  

2. In browsers using `var something` will define a global variable. In Node using `global.XXX` to define a true top-level & cross-module global variable. `var something` inside a Node module will be local to that module.  

3. ```js    
describe('case/module name', function(){  
  it("case 1 content", function(){  
    expect(do sth).xx.xxx(output);
  });
  it("case 2 content", function(){  
    expect(do sth).xx.xxx(output);
  });
  ....
});
```