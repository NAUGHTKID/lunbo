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