function sendTask(e) {
  MailApp.sendEmail('********@gmail.com', 'タスクが追加されました', e.namedValues['Task']);
}

function doGet() {
  var template = HtmlService.createTemplateFromFile('index');

  template.title = 'MyTaskApp';
  template.tasks = getTasks();
  return template.evaluate();
}


function getTasks() {
  var sheet = SpreadsheetApp.getActiveSheet();
  return sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).getValues();
}

function sendReport() {
  var to = '********@gmail.com';
  var subject = 'タスク一覧';
  var url = 'https://script.google.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  var body = getTasks().join('\n') + '\n\n' + url;

  MailApp.sendEmail(to, subject, body);
}
