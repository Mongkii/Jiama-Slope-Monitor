import { getPrediction } from './MLFunction.js';
import {refreshDatabase} from '../store/effect.js';

const defaultRange = [1.0e-4, 1.0e-3];

const generateDataItem = async (time, range, fs, model) => {
  let item = {};
  const range_arr = range ? range : defaultRange;
  const x_dis = [];
  for (let i = 0; i < 16; i++) {
    const displacement = range_arr[0] + (range_arr[1] - range_arr[0]) * Math.random();
    x_dis.push(-1 * displacement); // 计算时使用的位移为负值，即离开边坡方向
    item[`p${i + 1}`] = displacement.toExponential(5);//(2 * Math.random() - 0.8).toFixed(3);
  }
  item.time = time;
  const fos = await getPrediction(x_dis, model);
  item.fs = (fs / fos).toFixed(3);
  return item;
};

const getDataGenerator = (database, range, fs, model, commit) => async () => {
  const item = await generateDataItem(Date.now(), range, fs, model);
  database.data.push(item);
  commit(refreshDatabase);
};

const generateManyData = async (database, range, fs, model, commit) => {
  const time = (database.data[0] && database.data[0].time) || Date.now();
  let item_group = [];
  for (let i = 0; i < 100; i++) {
    const item = await generateDataItem(time - 24 * 60 * 60 * 1000 / 100 * (99 - i), range, fs, model);
    item_group.push(item);
  }
  database.data = item_group.concat(database.data);
  commit(refreshDatabase);
};

export { getDataGenerator, generateManyData };
