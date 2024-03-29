"use strict"
// 全体で使用する変数を定義
var canvas, ctx;
// プレイヤーの画像を保持する変数を定義
var img_player;
// 敵の画像を保持する変数を定義
var img_enemy;
// プレイヤーの現在位置を保持する変数を定義
// player_x -- プレイヤーのx座標
// player_y -- プレイヤーのy座標
var player_x, player_y;

// キーが押された時に呼び出される処理を指定
window.onkeydown = function(e) {
  // 実際に押したキーを取得する
  if(e.keyCode == 32){
    console.log("スペースキーが押されました。");
  } else {
    console.log(e.keyCode + "のキーが押されました。");
  }
}
// ページロード時に呼び出される処理を指定
window.onload = function() {
    // コンテキストを取得（おまじない）
    // getElementByIdとは、HTMLの要素を取得する
    canvas = document.getElementById('screen')
    // コンテキストオブジェクトの種類を決める
    ctx = canvas.getContext('2d');

    // Playerの画像（id='player'で指定された<img>）を取得
    img_player = document.getElementById('player');
    // 敵キャラの画像（id='enemy'で指定された<img>）を取得
    img_enemy = document.getElementById('enemy');

    // Playerの初期位置を指定
    // player_x = キャンバスの左右中央
    // player_y = キャンバスの下から20px上
    player_x = (canvas.width - player.width) / 2;
    player_y = (canvas.height - player.height) - 20;
    ctx.drawImage(img_player, player_x, player_y);

    // 敵キャラの画像をランダムな位置に表示
    for(var i = 0; i < 10; i++){
      ctx.drawImage(img_enemy,
        Math.random() * (canvas.width - img_enemy.width),
        Math.random() * (canvas.height - img_enemy.height));
    }

};
