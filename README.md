# init
```cmd
git init
npm init
```
# Git add submodule 
```cmd
git submodule add {git_repo}
```

# Git update all module 
```cmd
git submodule foreach git pull origin master
```

# Npm workspace
add json to package.json
```json
  "workspaces": [
    "nodejs-project-1",
    "nodejs-project-2"
  ]
```
or npm cmd
```cmd
npm init -w .\nodejs-project-1\
```
# PM2
```cmd
npm i pm2 -g
```

# PM2 config

ecosystem.config.js
```js
module.exports = {
  apps: [{
    name: "project-1",
    script: './nodejs-project-1/server.js',
    error_file: "./nodejs-project-1/log/err.log",
    out_file: "./nodejs-project-1/log/out.log",
    env: {
        node_env: "prod",
        port: 1234
    }
  },
  {
    name: "project-2",
    script: './nodejs-project-2/server.js',
    error_file: "./nodejs-project-2/log/err.log",
    out_file: "./nodejs-project-2/log/out.log",
        env: {
        node_env: "prod",
        port: 1235
    }
  }]
};
```

# NPM install
```cmd
npm i
```
# Clone project
```cmd
git clone --recurse-submodules -j8 https://xxx.git
```
# How to use?
```cmd
pm2 start
pm2 start --update-env
pm2 stop all
pm2 start all
pm2 logs
pm2 monit
```
