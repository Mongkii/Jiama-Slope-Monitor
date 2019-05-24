import generateDemoData from './generateDemoData.js';

/// 以后不出错就没必要
const verifyData = (item) => {
  const keys = Object.keys(item);
  if (keys.length !== 17 || !keys.includes('fs') || !keys.includes('time')) {
    alert('录入数据有误');
    return false;
  }
  return true;
};

// 演示用，实际操作会与后端 SQL 对接
class database {
  constructor() {
    this.data = generateDemoData();
  }

  add(item) {
    if (verifyData(item)) {
      this.data.push(item);
    }
  }

  search(target, start_time, end_time) {
    let result = [];
    const raw_result = this.data.filter(item=>{
      const time = item.time;
      return (time>=start_time && time<=end_time);
    }).map(item=>({time: new Date(item.time).toLocaleString(), data: item[target]}));
      // }).map(item=>({time: item.time, data: item[target]}));

    // 限制获取的数据数量
    if (raw_result.length>100) {
      const cut_num = raw_result.length/100;
      raw_result.forEach((item,index)=>{
        result[Math.trunc(index/cut_num)-1] = item;
      });
    } else {
      result = raw_result;
    }

    return result;
  }

  getLatest() {
    return this.data[this.data.length - 1];
  }

  // 演示中无需改删功能
  delete(item) { }

  edit(item) { }
}

export default database;
