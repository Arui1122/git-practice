// Promise version
function doJobPromise(job, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let now = new Date();
      resolve(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
  });
}

async function runJobs() {
  let now = new Date();
  console.log(`開始工作 at ${now.toISOString()}`);

  console.log(await doJobPromise('刷牙', 1000));
  console.log(await doJobPromise('吃早餐', 3000));
  console.log(await doJobPromise('寫功課', 1000));
  console.log(await doJobPromise('吃午餐', 2000));
}

runJobs();
