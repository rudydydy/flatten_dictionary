const nestedDictionary = {
  "key": 3,
  "foo": {
    "a": 5,
    "bar": {
      "baz": 8
    }
  }
};

const concatPrefixKey = (prefix, key) => {
  return prefix === '' ? key : `${prefix}.${key}`;
}

const flattenDictionary = (dict, prefix = '', flattenObject = {}) => {
  return Object.keys(dict).reduce((obj, key) => {
    const value = dict[key];
    const prefixKey = concatPrefixKey(prefix, key);

    if (typeof value === 'object') {
      return flattenDictionary(dict[key], prefixKey, obj);
    } else {
      const tempObj = {};
      tempObj[prefixKey] = value;
      return { ...obj, ...tempObj };
    }
  }, flattenObject);
};

const result = flattenDictionary(nestedDictionary);
console.log(result);
