// 首先可以将整体封装成一个匿名自运行函数
(function(){
    // 规定好每张图片出于位置的状态
var states = [{
    zindex: 1,
    width: 120,
    height: 150,
    top: 69,
    left: 134,
    opacity: 0.2
}, {
    zindex: 2,
    width: 130,
    height: 170,
    top: 59,
    left: 0,
    opacity: 0.5
}, {
    zindex: 3,
    width: 170,
    height: 218,
    top: 24,
    left: 110,
    opacity: 0.7
}, {
    zindex: 4,
    width: 224,
    height: 288,
    top: 0,
    left: 263,
    opacity: 1
}, {
    zindex: 3,
    width: 170,
    height: 218,
    top: 24,
    left: 470,
    opacity: 0.7
}, {
    zindex: 2,
    width: 130,
    height: 170,
    top: 59,
    left: 620,
    opacity: 0.5
}, {
    zindex: 1,
    width: 120,
    height: 150,
    top: 69,
    left: 500,
    opacity: 0.2
}];
// console.log(states[1])
// 将状态和位置赋给li标签
var lis=$('#box li');
function liss(){
    lis.each(function(index,item){
    
        var state=states[index];
      
        // $(item).css({
        //     'z-index':state.zindex,
        //     'width':state.width,
        //     'height':state.height,
        //     'top':state.top,
        //     'left':state.left
        // })
        $(item).css('z-index',state.zindex).finish().animate(state,1000).find('img').css('opacity',state.opacity);
    
    
    })
} 
liss();
function prevs(){        
    // var str1=states.splice(0,1)
    // var str=states.splice(0)
    // states=[];
    // for(var i=0;i<6;i++){
    //     states.push(str[i]) 
    // }
    // states.push(str1[0])
    states.push(states.shift())
    liss();
}
$('.prev').click(function(){
    prevs();    
})
function next(){
      // var str1=states.splice(6)
    // var str=states.splice(0,6)
    // states=[];
    // states.push(str1[0])
    // for(var i=0;i<6;i++){
    //     states.push(str[i]) 
    // }
    // console.log(str)
    states.unshift(states.pop())
    liss()
}

$('.next').click(function(){
    next();
})

var time=null;
function autoplay(){
    time=setInterval(function(){
        next()
    },2000)
}
autoplay();
// 停止轮播
$('#box section').add('#box li').hover(function(){
    clearInterval(time)
},function(){
    autoplay()
})

// 封装为插件，能够使得只要使用这个插件就能被重复使用的效果，会产生什么样的问题
// 1.插件中最好不要使用id，原因：插件是为了能够被重复使用，也就是说在同一个页面可能会重复调用，会造成页面冲突，并且id具有唯一性的特性
// 2.变量命名和方法的命名：states，time，move（），用户在使用这个页面的时候，可能还会引入自己创建的文件中也有这样的命名，那么就会产生冲突
// 3.便签class的值得问题：prev，next，这些class命名台大众化，大多数编写者都会使用这样的命名，势必会造成冲突
// 4.插件的文件命名index.js，index.css，命名太大众化，比如jQuery.slide.js
})()


// 变量的作用域问题：
// 1.全局域（window） 2.函数域（function）
// 1.全局域：从页面打开之后到页面关闭之间始终存在
// 2.函数域：存在函数被调用的一瞬间（也不一定考虑到闭包）
// 闭包作用：可以保留函数的作用域（所以move可以使用自运行函数states）
// 闭包产生的必要条件：函数里面套函数（内层的函数要使用外层函数的变量）
// 全局变量不会产生闭包：因为全局变量存在全局域中



