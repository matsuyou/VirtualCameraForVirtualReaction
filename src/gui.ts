var win: any = window;
var subWin: any = null;

/**
 * @description 仮想モデルページを新規ウィンドウで開く/閉じる(仮)
 */
function WindowOpen() {
    subWin = window.open('https://glacial-meadow-27403.herokuapp.com/gui/', 'sample', 'top=50,left=50,width=1100,height=180');
}
/**
 * @description ボタン押下時の処理設定
 */
const start_button = document.getElementById('ReactionStart');
if (start_button != null) start_button.onclick = WindowOpen;