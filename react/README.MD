# eslint config for two types of react project functional and class based.
inside each you will find base react example directory and eslint/prettier rules in according 
files.

#pre-commit hooks [husky](https://github.com/typicode/husky#readme) + [lint-staged](https://github.com/okonet/lint-staged#readme)
1. ```yarn add husky lint-staged --dev```
2. inside package.json add 
```
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*": "prettier --write"
},
```
#IDE
##intellij idea
1.(prettier) Cmd + , on macOS or Ctrl + , on Windows
    1. type `prettier` in search bar: 
    2. put checkmarks against 
        1. On code reformat `option + cmd + l`
        2. On save `cmd + s`
    3. correct path to prettier package in node_modules if needed and choose you node 
      interpretter commonly it is shown in you nvmrc file
2. (eslint): Cmd + , on macOS or Ctrl + , on Windows
    1. type `eslint` in search bar:(its route is under: Language & 
       Frameworks>Javascript>CodeQualityTools>Eslint)
   2. choose Automatic eslint configuration: 
    3. put checkbox against run eslint --fix on save
    
##VS Code:
1. Cmd + , on macOS or Ctrl + , on Windows
2. type `format` in search bar
3. put checkbox against `Editor: Format On Save`
