// function from https://github.com/bradtraversy/javascript_cardio/blob/master/session2/index_finished.js

const chunkArray = (arr, len) => {
  const chunkedArr = [];

  arr.forEach((val) => {
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
};

module.exports = chunkArray;
