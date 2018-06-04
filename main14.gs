function sendTask(e) {
  MailApp.sendEmail('********@gmail.com', 'タスクが追加されました', e.namedValues['Task']);
}
