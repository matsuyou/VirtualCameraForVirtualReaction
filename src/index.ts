
window.open('http://werid-air.main.jp/work/', '', 'top=0,left=0,width=800,height=600');
//jsファイルを指定したscriptタグを追加
const script = document.createElement("script");
script.setAttribute("type", "module");
script.setAttribute("src", chrome.runtime.getURL("main.js"));

// サイトの `<head />` を取得する
const head =
  document.head ||
  document.getElementsByTagName("head")[0] ||
  document.documentElement;

// `<script />` を挿入する
head.insertBefore(script, head.lastChild);


