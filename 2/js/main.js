const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max < min || (max < 0 && min < 0)) {
    return null; // возвращаем null, если переданный диапазон некорректен
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomInt();
