// Callback version
const doJob = (job, time, cb) => {
  setTimeout(() => {
    const now = new Date();
    cb(`完成工作 ${job} at ${now.toISOString()}`);
  }, time);
};

const now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);

doJob('刷牙', 1000, (data) => {
  console.log(data);
  doJob('吃早餐', 3000, (data) => {
    console.log(data);
    doJob('寫功課', 1000, (data) => {
      console.log(data);
      doJob('吃午餐', 2000, (data) => {
        console.log(data);
      });
    });
  });
});
