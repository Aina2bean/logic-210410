// consoleに好きな文字を表示する
console.log('JavaScript勉強してます！');

// HTML上に好きな文字を表示する
let showArea = document.getElementById('likeWord'); // 表示する場所のIDを取得する
let showText = '好きなラーメンは醤油味です'; // 表示したい文字をshowTextに格納
showArea.innerHTML = showText;
