function initSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var names = ['taguchi', 'fkoji', 'dotinstall'];
  var i;
  var startTime = new Date();
  var scores = [];

  sheet.clear();

//  2060ms
// for (i = 1; i <= 1000; i++) {
//   sheet.getRange(i, 1).setValue(names[Math.floor(Math.random() * names.length)]);
//   sheet.getRange(i, 2).setValue(Math.floor(Math.random() * 101));
// }

//  123ms
  for (i = 1; i <= 1000; i++) {
    scores.push([
      names[Math.floor(Math.random() * names.length)],
      Math.floor(Math.random() * 101)
    ]);
  }

  sheet.getRange(1, 1, 1000, 2).setValues(scores);

  Logger.log(new Date() - startTime);
}
