const promiseAll = (promisesArray) => {
  let resultArr = [];
  let promisesCompleted = 0;
  const promise = new Promise((resolve, reject) => {
    promisesArray.forEach((eachPromise, index) => {
      eachPromise
        .then((response) => {
          resultArr[index] = response;
          promisesCompleted++;
          if (promisesCompleted === promisesArray.length) {
            resolve(resultArr);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });

  return promise;
};
