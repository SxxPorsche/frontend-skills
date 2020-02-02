const currying1 = fn => {
  const judge = (...args) =>
    args.length >= fn.length ? fn(...args) : (...arg) => judge(...args, ...arg);
  return judge;
};

function currying2(fn, length) {
  length = length || fn.length; 	// 注释 1
  return function (...args) {			// 注释 2
    return args.length >= length	// 注释 3
      ? fn.apply(this, args)			// 注释 4
      : currying2(fn.bind(this, ...args), length - args.length) // 注释 5
  }
}

// 注释 1：第一次调用获取函数 fn 参数的长度，后续调用获取 fn 剩余参数的长度
//
// 注释 2：currying 包裹之后返回一个新函数，接收参数为 ...args
//
// 注释 3：新函数接收的参数长度是否大于等于 fn 剩余参数需要接收的长度
//
// 注释 4：满足要求，执行 fn 函数，传入新函数的参数
//
// 注释 5：不满足要求，递归 currying 函数，新的 fn 为 bind 返回的新函数（bind 绑定了 ...args 参数，未执行），新的 length 为 fn 剩余参数的长度
