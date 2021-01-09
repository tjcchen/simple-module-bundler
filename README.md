## Simple Module Bundler
A simple module bundler implemented with javascript and babel.

## Mechanism Explained
In this repo, we implement a very simple module bundler, whose functionality is similar to [webpack](https://github.com/webpack/webpack). Several NPM modules are very important in the whole building process.
1. [babylon](https://github.com/babel/babylon) module, currently known as [@babel/parser](https://github.com/babel/babel/tree/master/packages/babel-parser), is used to convert es6 new syntax to AST(Abstract Syntax Tree) tree structure.
2. [babel-traverse](https://github.com/babel/babel/tree/master/packages/babel-traverse) module, currently known as [@babel/traverse](https://github.com/babel/babel/tree/master/packages/babel-traverse), is used to analyze the module dependencies( namely import module ) in es6 code.
3. `transformFromAst` method coming from [babel-core](https://github.com/babel/babel/tree/master/packages/babel-core), currently known as [@babel/core](https://github.com/babel/babel/tree/master/packages/babel-core), is used to transforms AST tree structure to es5 code.

Finally, we need to put the generated code into a module wrapper. A simple wrapper looks like the code [here](https://github.com/tjcchen/simple-module-bundler/blob/main/module.wrapper.js).

## License
[MIT](https://github.com/tjcchen/simple-module-bundler/blob/main/LICENSE)