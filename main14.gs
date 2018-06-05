function sendTask(e) {
  MailApp.sendEmail('********@gmail.com', 'タスクが追加されました', e.namedValues['Task']);
}

function doGet() {
  return HtmlService.createHtmlOutput('<h1>My Task</h1>');
}
