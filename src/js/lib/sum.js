const sum = (type, data) => {
  let sum = 0;

  if (type === 'object') {
    const keys = Object.keys(data);
    const arrayFromObject = [];

    keys.forEach(key => arrayFromObject.push(data[key]));

    sum = arrayFromObject.reduce((acc, cur) => acc + cur, 0);
  }

  return sum;
}

export default sum;
