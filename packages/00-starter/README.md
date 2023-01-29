# ts-node直接运行typescript文件- 简书

正常ts文件都要编译成JS文件才能运行，但是在开发时有时需要运行ts文件，但是每次都要配置package.json，还要安装，后来看到ts-node可以在vscode上运行ts文件。

### 安装环境



```cpp
//全局安装typescript和ts-node
npm install -g typescript
//npm install -g typescript-node 由于typescript-node不支持更高版本的ts
npm install -g ts-node //typescript@>=2.7
```

安装完成后就可以不用手动去编译成js文件，可以直接运行ts文件



```jsx
//foo.ts
let foo = {
  baz: {
    a: 1
  }
}
console.log(foo);
```

### 执行命令***ts-node \**\**.ts\***



```ruby
$ ts-node foo.ts
{ baz: { a: 1 } }
```




