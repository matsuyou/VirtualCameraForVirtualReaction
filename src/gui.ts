var win: any = window;
var subwin: any = null;
/**
 * @description 仮想モデルページを新規ウィンドウで開く/閉じる(仮)
 */
function WindowOpen() {
    if(subwin == null){
        subwin = window.open('http://localhost:8000/', '', 'top=0,left=0,width=800,height=600');
    }
}
function WindowClose() {
    subwin.close();
    subwin = null;
}
/**
 * @description ReactionValueの値変化のたびに、サブウィンドウにpostする
 */
Object.defineProperty(win, "ReactionValue", {
    set(v){
        if(subwin != null){
            console.log("ReactionValue set!:"+v);
            subwin.postMessage(v,'*');
        }
    }
});
/**
 * @description ReactionValueの値を変更する
 */
function ValueInput(num: number): void {
    win.ReactionValue = num;
}
/**
 * @description ボタン押下時の処理設定
 */
const start_button = document.getElementById('ReactionStart');
if (start_button != null) start_button.onclick = WindowOpen;

const stop_button = document.getElementById('ReactionStop');
if (stop_button != null) stop_button.onclick = WindowClose;

const button1 = document.getElementById('Reaction1');
if (button1 != null) button1.onclick = function() {ValueInput(1)}; 

const button2 = document.getElementById('Reaction2');
if (button2 != null) button2.onclick = function() {ValueInput(2)}; 

const button3 = document.getElementById('Reaction3');
if (button3 != null) button3.onclick = function() {ValueInput(3)};

const button4 = document.getElementById('Reaction4');
if (button4 != null) button4.onclick= function() {ValueInput(4)};