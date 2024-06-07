// POINT 非同期処理（Promise）
let a = 0;

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(100);
    reject(200);
  }, 2000);
})
  .then((bbb) => {
    console.log("🚀 ~ resolve ~ a:", bbb);
  })
  .catch((ccc) => {
    console.log("🚀 ~ reject ~ ccc:", ccc);
    return {};
  });

console.log("🚀 ~ setTimeout ~ a!!:", a);
