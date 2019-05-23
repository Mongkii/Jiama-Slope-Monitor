const converter = (...str) => {
  let result = [];
  str.forEach(s => {
    let arr = [s.slice(0, 2), s.slice(2, 4), s.slice(4)].map(x => Number(x));
    //let arr = str.split(' ').map(x=>Number(x));
    result.push((arr[0] + ((arr[1] + arr[2] / 100 / 60) / 60)).toFixed(6));
  });
  return result.join(', ');
};
