let currentObserver = null;

const observe = fn => {
  currentObserver = fn;
  fn();
  currentObserver = null;
}

const observable = obj => {
  Object.keys(obj).forEach(key => {
    let _value = obj[key];
    const observers = new Set();

    Object.defineProperty(obj, key, {
      get: () => {
        if (currentObserver) observers.add(currentObserver);
        return _value;
      },
      set: (value) => {
        if (_value === value) return; // primitive
        if (JSON.stringify(_value) === JSON.stringify(value)) return; // object, array
        if (_value instanceof Set && value instanceof Set) { // Set
          const sameLength = _value.size === valule.size;
          const sameValue = true;
          for (const v of _value) {
            if (!value.has(v)) {
              sameValue = false;
              break;
            }
          }
          if (sameLength && sameValue) return;
        }
        // Map, WeekSet, WeekMap
        _value = value;
        observers.forEach(fn => fn());
      },
    });
  });
  return obj;
}

export { observe, observable };
