module.exports = {
  apps: [{
    name: "project-1",
    script: './nodejs-project-1/server.js',
    error_file: "./nodejs-project-1/log/err.log",
    out_file: "./nodejs-project-1/log/out.log",
    env: {
      NODE_ENV: "prod1",
      PORT: 1234
    }
  },
  {
    name: "project-2",
    script: './nodejs-project-2/server.js',
    error_file: "./nodejs-project-2/log/err.log",
    out_file: "./nodejs-project-2/log/out.log",
    env: {
      NODE_ENV: "prod",
      PORT: 1235
    }
  }]
};