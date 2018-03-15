/**
 * Created by some on 2017/6/14.
 */
function Jm(){
    this.rem = function(){
        var html = document.documentElement;
        var x = html.clientWidth;
        html.style.fontSize = x * 0.1 + 'px';
    };
    this.rem();
    window.addEventListener('resize',this.rem,false);
}
Jm();