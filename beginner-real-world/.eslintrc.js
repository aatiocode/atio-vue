module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential", 
    "eslint:recommended", 
    "plugin:prettier/recommended", //add prettier recommended 
    "@vue/prettier"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
