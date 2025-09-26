/*jQueryの発動*/
$(document).ready(function(){
    /*ボタンの定義*/
    /*pagetop_btn とは.gotopのことである*/
    const pagetop_btn = document.querySelector('.gotop');
    
    /*ボタンをクリックしたら、トップに移動するという関数を発動させる*/
    pagetop_btn.addEventListener("click", scroll_top);

    /*関数scroll_topを定義する*/
    /*ページの上部へなめらかに移動する*/
    function scroll_top() {
        window.scroll({ top:0, behavior:"smooth"});
    };

    /*ボタンの表示設定*/
    /*ウィンドウがスクロールされたら、scroll_eventを発動させる*/
    window.addEventListener("scroll", scroll_event);
    /*scroll_eventという関数を定義する*/
    function scroll_event() {
        /*開いているページのオフセットが100px下にスクロールされたとき*/
        if (window.pageYOffset > 100) {
            /*ボタンの位置を固定して表示する*/
            pagetop_btn.style.display = "block";
        }
        /*100pxよりもスクロールされていない場合は*/
        else if (window.pageYOffset < 100) {
        /*ボタンを表示しない*/
        pagetop_btn.style.display = "none";
         }
    }

})


