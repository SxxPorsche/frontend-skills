// 防抖
// 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
function debounce(fn) {
  let timeout = null; // 创建一个标记用来存放定时器的返回值
  return function () {
    clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
    timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
      fn.apply(this, arguments);
    }, 500);
  };
}

// 节流
// 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
function throttle(fn) {
  let canRun = true; // 通过闭包保存一个标记
  return function () {
    if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
    canRun = false; // 立即设置为false
    fn.apply(this, arguments);
    setTimeout(() => {
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
      canRun = true;
    }, 500);
  };
}

function throttle2(fn, threshold) {
  let timer = null;
  return function (props) {
   if (!timer) {
     let res = fn.apply(this, props);
     timer = setTimeout(() => {
       // clearTimeout(timer);
       timer = null;
     }, threshold);
     if (res !== undefined) {
       return res;
     }
   }
  }
}
