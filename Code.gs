function doGet() {
  var t = HtmlService.createTemplateFromFile('index');
  t.data = SpreadsheetApp.openById('1m9EvdIuYhvPRBPaODt6mcjYfid8h4SoNJzmamHq2hks')
  .getActiveSheet()
  .getDataRange()
  .getValues();

  return t.evaluate();

}
