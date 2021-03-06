## 1. 相同点
* 使用 Virtual DOM，有自己的diff渲染算法
* 提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件。
* 将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库。


## 2. 不同点
### 核心思想
* vue的整体思想仍然是拥抱经典的html(结构)+css(表现)+js(行为)的形式
* 在组件数据上，vue通过Object.defineProperty对数据做到了更细致的监听，精准实现组件级别的更新

* react整体上是函数式的思想，组件使用jsx语法，all in js，相对来说更加灵活
* 需要通过shouldComponentUpdate或者PureComponent手动避免一些不必要的重新渲染


### 监听数据变化的实现原理不同
* Vue 通过 getter/setter 以及一些函数的劫持，能精确知道数据变化，不需要特别的优化就能达到很好的性能
* React 默认是通过比较引用的方式进行的，如果不优化（PureComponent/shouldComponentUpdate）可能导致大量不必要的VDOM的重新渲染

 Vue 和 React 设计理念上的区别，Vue 使用的是可变数据，而React更强调数据的不可变。
 Vue更加简单，而React构建大型应用的时候更加鲁棒。
 
 
### 模板渲染语法方式的不同
 * React 是通过JSX渲染模板
 * Vue是通过一种拓展的HTML语法进行渲染
 
模板的原理不同，这才是他们的本质区别：
 * React是在组件JS代码中，通过原生JS实现模板中的常见语法，比如插值，条件，循环等，都是通过JS语法实现
 * Vue是在和组件JS代码分离的单独的模板中，通过指令来实现的，比如条件语句就需要 v-if 来实现
 
 React中render函数是支持闭包特性的，所以我们import的组件在render中可以直接调用。
 Vue中由于模板中使用的数据都必须挂在 this 上进行一次中转，
 所以我们import 一个组件完了之后，还需要在 components 中再声明下
  
 
 ### 组件通信的区别
 1. 在Vue 中有三种方式可以实现组件通信：
 * 父组件通过 props 向子组件传递数据, 而通过事件的机制来处理子组件向父组件的通信
 * 子组件通过 事件 向父组件发送消息
 * 通过 provide/inject 来实现父组件向子组件注入数据，可以跨越多个层级。


### Vuex 和 Redux 的区别
* Redux 使用的是不可变数据，而Vuex的数据是可变的。
* Redux每次都是用新的state替换旧的state，而Vuex是直接修改
* Redux 在检测数据变化的时候，是通过 diff 的方式比较差异的，
  而Vuex其实和Vue的原理一样，是通过 getter/setter来比较的
 （如果看Vuex源码会知道，其实他内部直接创建一个Vue实例用来跟踪数据变化）
