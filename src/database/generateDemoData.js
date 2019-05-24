const generateDataItem = (time) => {
  let item = {};
  for (let i = 0; i < 15; i++) {
    item[`p${i}`] = (2 * Math.random() - 0.8).toFixed(3);
  }
  item.time = time;
  item.fs = (1.2 + 0.25 * Math.random()).toFixed(3);
  return item;
};

export { generateDataItem };

export default () => {
  let result = [];
  let time = Date.now();
  for (let i = 0; i < 100; i++) {
    result.push(generateDataItem(time - 24 * 60 * 60 * 1000 / 100 * (99 - i)));
  }
  return result;
}
