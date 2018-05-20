function initSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var names = ['taguchi', 'fkoji', 'dotinstall'];
  var i;
  var startTime = new Date();

  sheet.clear();

//  2060ms
for (i = 1; i <= 1000; i++) {
  sheet.getRange(i, 1).setValue(names[Math.floor(Math.random() * names.length)]);
  sheet.getRange(i, 2).setValue(Math.floor(Math.random() * 101));
}

  Logger.log(new Date() - startTime);
}
