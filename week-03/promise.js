// Promise version
const doJobPromise = (job, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const now = new Date();
      if (Math.random() < 0.1) {  // 10% 的機率發生錯誤
        reject(new Error(`${job} 失敗了！`));
      } else {
        resolve(`完成工作 ${job} at ${now.toISOString()}`);
      }
    }, time);
  });
};

// 使用 .then() method chaining
const runJobsWithThen = () => {
  const now = new Date();
  console.log(`開始工作 at ${now.toISOString()}`);

  doJobPromise('刷牙', 1000)
    .then(result => {
      console.log(result);
      return doJobPromise('吃早餐', 3000);
    })
    .then(result => {
      console.log(result);
      return doJobPromise('寫功課', 1000);
    })
    .then(result => {
      console.log(result);
      return doJobPromise('吃午餐', 2000);
    })
    .then(result => {
      console.log(result);
      console.log('所有工作完成！');
    })
    .catch(error => {
      console.error('執行工作時出錯:', error.message);
    });
};

// 使用 async/await
const runJobsWithAsync = async () => {
  const now = new Date();
  console.log(`開始工作 at ${now.toISOString()}`);

  try {
    console.log(await doJobPromise('刷牙', 1000));
    console.log(await doJobPromise('吃早餐', 3000));
    console.log(await doJobPromise('寫功課', 1000));
    console.log(await doJobPromise('吃午餐', 2000));
    console.log('所有工作完成！');
  } catch (error) {
    console.error('執行工作時出錯:', error.message);
  }
};

// 執行兩種版本
console.log('使用 .then():');
runJobsWithThen();

setTimeout(() => {
  console.log('\n使用 async/await:');
  runJobsWithAsync();
}, 10000);  // 等待 10 秒後執行 async/await 版本
