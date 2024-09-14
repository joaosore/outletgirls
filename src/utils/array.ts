const compareArrays = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

const convertArrayInUnique = async (arr, index) => {
  const arr_new: any[] = [];
  await Promise.all(
    arr.map((item) => {
      arr_new.push(item[index]);
    })
  );
  return arr_new;
};

export { compareArrays, convertArrayInUnique };
