// 書き込み
// __dirname
// __filename

const fs = require("fs");

__dirname;
console.log("🚀 ~ __dirname:", __filename);

fs.writeFileSync(__dirname + "/test.txt", "hello nodejs!!");
// ↑ nodeコマンドを実行したときのカレントディレクトリからの相対パス
// このファイルからの相対パスではない
console.log("hello, node.js");
