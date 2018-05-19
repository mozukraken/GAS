//#02
//function myFunction() {
//  ログに文字列を表示する.
//  Logger.log('Hello from Logger');
//}

//#03
//スプレッドシートの関数名は大文字にすることが多い。
//function GETRESULT(INPUT) {
//  if (INPUT >= 80) {
//    return 'PASS';
//  } else {
//    return 'FAIL';
//  }
//}

//#04
//function GETRESULT(input) {
//  if (input.map) {
//    return input.map(GETRESULT);
//  } else {
//    return input >= 80 ? 'PASS' : 'FAIL';
//  }
//}

//#05
//function initSheet() {
//  シートの取得
//  var sheet = SpreadsheetApp.getActiveSheet();
//  シートの値を初期化
//  sheet.clear();
//  シートの１行1列に値を入れる。
//  sheet.getRange(1, 1).setValue('hoge');
//  シートの１行2列に値を入れ、背景色も変更。
//  sheet.getRange(1, 2).setValue(90).setBackground('gold');
//}
