function initSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var names = ['hoge1', 'hoge2', 'hoge3'];
  var i;
  var startTime = new Date();
  var scores = [];
  
  if (Browser.msgBox('シートの初期化', '実行していいですか', Browser.Buttons.OK_CANCEL) === 'cancel') {
    return
  }
  sheet.clear();

  for (i = 1; i <= 10; i++) {
    scores.push([names[Math.floor(Math.random() * names.length)],
                 Math.floor(Math.random() * 101)
    ]);
  }
  
  sheet.getRange(1, 1, 10, 2).setValues(scores);
  
  Logger.log(new Date() - startTime);
}

function showResults() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var scores = [];
  var i;
  var results = [];
  
  scores = sheet.getRange(1, 2, 10, 1).getValues();
  
  for (i = 0; i < scores.length; i++) {
    results.push([scores[i] >= 80 ? 'Pass' : 'Fail']);
  }
  sheet.getRange(1, 3, results.length, 1).setValues(results);
}
