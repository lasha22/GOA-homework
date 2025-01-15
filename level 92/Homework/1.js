function union(sets) {
    return sets.reduce((acc, curr) => new Set([...acc, ...curr]), new Set());
  }
  

  function symmetricDifference(set1, set2) {
    const difference1 = [...set1].filter(x => !set2.has(x));
    const difference2 = [...set2].filter(x => !set1.has(x));
    return new Set([...difference1, ...difference2]);
  }
  

  function isSubset(set1, set2) {
    return [...set1].every(x => set2.has(x));
  }
  

  function characterFrequency(str) {
    const map = new Map();
    for (let char of str) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
  }

  function invertMap(map) {
    const invertedMap = new Map();
    for (let [key, value] of map) {
      invertedMap.set(value, key);
    }
    return invertedMap;
  }
  

  function maxValueKeys(map) {
    const maxVal = Math.max(...[...map.values()]);
    const maxKeys = [];
    for (let [key, value] of map) {
      if (value === maxVal) {
        maxKeys.push(key);
      }
    }
    return maxKeys;
  }
  


  console.log(union([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]));

  

  console.log(symmetricDifference(new Set([1, 2, 3]), new Set([3, 4, 5])));

  

  console.log(isSubset(new Set([1, 2]), new Set([1, 2, 3])));

  
  console.log(characterFrequency("hello"));

  
  
  console.log(invertMap(new Map([['a', 1], ['b', 2], ['c', 1]])));
 
  
 
  console.log(maxValueKeys(new Map([['a', 5], ['b', 3], ['c', 5]])));

  