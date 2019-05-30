// 演示用，实际操作会与后端 SQL 对接
class Database {
  constructor() {
    this.data = [];
  }

  add(item) {
    this.data.push(item);
  }

  search(target, start_time, end_time) {
    let result = [];
    const raw_result = this.data.filter(item => {
      const time = item.time;
      return (time >= start_time && time <= end_time);
    })
      .map(item => ({
        time: new Date(item.time).toLocaleString(),
        data: item[target]
      }));
    // }).map(item=>({time: item.time, data: item[target]}));

    // 限制获取的数据数量
    const data_limit = 500;
    if (raw_result.length > data_limit) {
      const cut_num = raw_result.length / data_limit;
      raw_result.forEach((item, index) => {
        result[Math.trunc(index / cut_num) - 1] = item;
      });
    } else {
      result = raw_result;
    }

    return result;
  }

  getLatest() {
    return this.data[this.data.length - 1];
  }

  export(start_time, end_time) {
    return this.data.filter(item => {
      const time = item.time;
      return (time >= start_time && time <= end_time);
    });
  }

  // 演示中无需改删功能
  delete(item) { }

  edit(item) { }
}

export default Database;
