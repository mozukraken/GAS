function iniSheet() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var names = ['hoge1', 'hoge2', 'hoge3'];
 var i;

 sheet.clear();

 for (i = 1; i <= 100; i++) {
   sheet.getRange(i, 1).setValue(names[Math.floor(Math.random() * names.length)]);
   sheet.getRange(i, 2).setValue(Math.floor(Math.random() * 101));
 }
}
