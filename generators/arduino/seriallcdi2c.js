goog.provide('Blockly.Blocks.seriallcdi2c');

goog.require('Blockly.Blocks');

Blockly.Arduino['lcdi2c_setup'] = function(block) {
var text_name = block.getFieldValue('NAME');  // TODO: Assemble Arduino into code variable.
    Blockly.Arduino.definitions_['define_lcd'] = '#include <Wire.h>\n#include <LiquidCrystal_I2C.h>\n';
    
    var value_columns = Blockly.Arduino.valueToCode(block, 'COLUMNS', Blockly.Arduino.ORDER_ATOMIC);
    var value_rows = Blockly.Arduino.valueToCode(block, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);
   
   Blockly.Arduino.definitions_['define_lcdpins'] = 'LiquidCrystal_I2C lcd('+text_name+','+value_columns+','+value_rows+');\n';
    //
 //LiquidCrystal lcd(12, 11, 10, 5, 4, 3, 2);
  //var value_columns = Blockly.Arduino.valueToCode(block, 'COLUMNS', Blockly.Arduino.ORDER_ATOMIC);
  //var value_rows = Blockly.Arduino.valueToCode(block, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
   //Blockly.Arduino.setups_['setup_lcd_normal']='lcd.begin('+value_columns+','+ value_rows+');\n'
   Blockly.Arduino.setups_['setup_lcdi2c']='lcd.begin();\n'

  var code = '';
  return code;
};


Blockly.Arduino['lcdi2c_print'] = function(block) {
  var value_texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = 'lcd.print('+value_texttoprint+');\n';
  return code;
};

Blockly.Arduino['lcdi2c_clear'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.clear();\n';
  return code;
};

Blockly.Arduino['lcdi2c_home'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.home();\n';
  return code;
};

Blockly.Arduino['lcdi2c_setcursor'] = function(block) {
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.setCursor('+value_column+', '+value_row+ ');\n';
  return code;
};

Blockly.Arduino['lcdi2c_display'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.display();\n';
  return code;
};

Blockly.Arduino['lcdi2c_nodisplay'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.noDisplay();\n';
  return code;
};

Blockly.Arduino['lcdi2c_scrollDisplayLeft'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.scrollDisplayLeft();\n';
  return code;
};

Blockly.Arduino['lcdi2c_scrollDisplayRight'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.scrollDisplayRight();\n';
  return code;
};

//OLED
Blockly.Arduino['oled_setup'] = function(block) {
var adr = block.getFieldValue('NAME');  // TODO: Assemble Arduino into code variable.
    Blockly.Arduino.definitions_['define_oled'] = '#include <SPI.h>\n#include <Wire.h>\n#include <Adafruit_GFX.h>\n#include <Adafruit_SSD1306.h>\n\n#define OLED_RESET 4\n  Adafruit_SSD1306 display(OLED_RESET);';
    
    
   //Blockly.Arduino.definitions_['define_lcdpins'] = 'LiquidCrystal_I2C lcd('+text_name+','+value_columns+','+value_rows+');\n';
    //
 //LiquidCrystal lcd(12, 11, 10, 5, 4, 3, 2);
  //var value_columns = Blockly.Arduino.valueToCode(block, 'COLUMNS', Blockly.Arduino.ORDER_ATOMIC);
  //var value_rows = Blockly.Arduino.valueToCode(block, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
   //Blockly.Arduino.setups_['setup_lcd_normal']='lcd.begin('+value_columns+','+ value_rows+');\n'
   Blockly.Arduino.setups_['setup_Oled']='Serial.begin(9600);\ndisplay.begin(SSD1306_SWITCHCAPVCC, '+adr+');\ndisplay.display();\ndelay(2000);\ndisplay.clearDisplay();\n'

  var code = '';
  return code;
};

Blockly.Arduino['oled_print'] = function(block) {
  var value_texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
    var code='display.setTextColor(WHITE);\n';
    code += 'display.println('+value_texttoprint+');\n';
    code += 'display.display();\n'
    
  
  return code;
};

Blockly.Arduino['oled_clear'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'display.clearDisplay();\n';
  return code;
};

Blockly.Arduino['oled_setcursor'] = function(block) {
  var value_column = Blockly.Arduino.valueToCode(block, 'column', Blockly.Arduino.ORDER_ATOMIC);
  var value_row = Blockly.Arduino.valueToCode(block, 'row', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'display.setCursor('+value_column+', '+value_row+ ');\n';
  return code;
};
