//需要插入的容器
let ul = document.getElementById('container');
// 插入十万条数据
let total = 100000;
// 一次插入 20 条
let once = 20;
//总页数
let page = total / once;
//每条记录的索引
let index = 0;
//循环加载数据
function loop(curTotal,curIndex){
  if(curTotal <= 0){
    return false;
  }
  //每页多少条
  let pageCount = Math.min(curTotal , once);
  // requestAnimationFrame能保证回调函数在屏幕每一次的刷新间隔中只被执行一次
  window.requestAnimationFrame(function(){
    let fragment = document.createDocumentFragment();
    for(let i = 0; i < pageCount; i++){
      let li = document.createElement('li');
      li.innerText = curIndex + i + ' : ' + ~~(Math.random() * total);
      fragment.appendChild(li);
    }
    ul.appendChild(fragment);
    loop(curTotal - pageCount,curIndex + pageCount)
  });
}
loop(total,index);
