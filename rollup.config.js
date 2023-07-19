const commonjs = require("@rollup/plugin-commonjs");
const resolve = require("@rollup/plugin-node-resolve");

module.exports = {
    input: "index.js",
    output: {
        file: "index.cjs",
        format: "cjs"
    },
    plugins: [commonjs(), resolve()]
};
