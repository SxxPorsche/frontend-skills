/*
引用类型赋值：
引用类型复制的时候，两个变量作为指针指向同一个对象
变量赋值的时候是将该变量指向另一个对象
通过点表示法，访问修改属性的时候，所指向的对象地址不变


操作符
点操作符号的优先级很高，仅次于(),方向是从左到右
赋值操作符的方向是从右到左。
 */

var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };
// 等价于
// a.x = { n: 2 }
// a = { n: 2 }
//1、优先级
// .的优先级高于=，所以先执行a.x，堆内存中的{ n: 1 }就会变成{ n: 1, x: undefined }
// 2、赋值操作是从右到左，所以先执行a = { n: 2 }，a的引用就被改变了，然后这个返回值又赋值给了a.x
// 需要注意的是这时候a.x是第一步中的{ n: 1, x: undefined }那个对象


console.log(a, a.x); 	//  undefined
console.log(b, b.x);	// { n: 2 }
