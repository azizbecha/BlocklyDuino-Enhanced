goog.provide('Blockly.Blocks.seriallcd');

goog.require('Blockly.Blocks');


Blockly.Arduino['grove_serial_lcd_print'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
  
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var text2 = Blockly.Arduino.valueToCode(this, 'TEXT2',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  
  
  Blockly.Arduino.definitions_['define_seriallcd'] = '#include <SerialLCD.h>\n';
  Blockly.Arduino.definitions_['define_softwareserial'] = '#include <SoftwareSerial.h>\n';
  
  
  
  //generate PIN#+1 port
    
  var NextPIN = _get_next_pin(dropdown_pin);


  Blockly.Arduino.definitions_['var_lcd_'+dropdown_pin] = 'SerialLCD slcd_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';

  Blockly.Arduino.setups_['setup_lcd_'+dropdown_pin] = 'slcd_'+dropdown_pin+'.begin();\n';
  var code = 'slcd_'+dropdown_pin+'.backlight();\n';
  code    += 'slcd_'+dropdown_pin+'.setCursor(0,0);\n';
  code    += 'slcd_'+dropdown_pin+'.print('+text+');\n';//text.replace(new RegExp('\'',"gm"),'')
  code    += 'slcd_'+dropdown_pin+'.setCursor(0,1);\n';
  code    += 'slcd_'+dropdown_pin+'.print('+text2+');\n';
  code    += 'delay('+delay_time+');\n';
  return code;
};

Blockly.Arduino['grove_serial_lcd_power'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');

  Blockly.Arduino.definitions_['define_seriallcd'] = '#include <SerialLCD.h>\n';
  Blockly.Arduino.definitions_['define_softwareserial'] = '#include <SoftwareSerial.h>\n';
  //generate PIN#+1 port
  var NextPIN = _get_next_pin(dropdown_pin);

  Blockly.Arduino.definitions_['var_lcd'+dropdown_pin] = 'SerialLCD slcd_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';
  var code = 'slcd_'+dropdown_pin;
  if(dropdown_stat==="ON"){
    code += '.Power();\n';
  } else {
    code += '.noPower();\n';
  }
  return code;
};

Blockly.Arduino['grove_serial_lcd_effect'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');

  Blockly.Arduino.definitions_['define_seriallcd'] = '#include <SerialLCD.h>\n';
  Blockly.Arduino.definitions_['define_softwareserial'] = '#include <SoftwareSerial.h>\n';
  //generate PIN#+1 port
  var NextPIN = _get_next_pin(dropdown_pin);

  Blockly.Arduino.definitions_['var_lcd'+dropdown_pin] = 'SerialLCD slcd_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';
  var code = 'slcd_'+dropdown_pin;
  if(dropdown_stat==="LEFT"){
    code += '.scrollDisplayLeft();\n';
  } else if(dropdown_stat==="RIGHT"){
    code += '.scrollDisplayRight();\n';
  } else {
    code += '.autoscroll();\n';
  }
  return code;
};

var _get_next_pin = function(dropdown_pin) {
  var NextPIN = dropdown_pin;
  if(parseInt(NextPIN)){
    NextPIN = parseInt(dropdown_pin)+1;
  } else {
    NextPIN = 'A'+(parseInt(NextPIN.slice(1,NextPIN.length))+1);
  }
  //check if NextPIN in bound
  var pinlen = profile.default.digital.length;
  var notExist=true;
  for(var i=0;i<pinlen;i++){
    if(profile.default.digital[i][1] == NextPIN){
      notExist=false;
    }
  }
  if(notExist){
    alert("Grove Sensor needs PIN#+1 port, current setting is out of bound.");
    return null;
  } else {
    return NextPIN;
  }
};


Blockly.Arduino['lcd_setup'] = function(block) {
    var rs_pin = this.getFieldValue('RSPIN');
    var e_pin = this.getFieldValue('EPIN');
    var d4_pin = this.getFieldValue('D4PIN');
    var d5_pin = this.getFieldValue('D5PIN');
    var d6_pin = this.getFieldValue('D6PIN');
    var d7_pin = this.getFieldValue('D7PIN');
  // TODO: Assemble Arduino into code variable.
    Blockly.Arduino.definitions_['define_lcd'] = '#include <LiquidCrystal.h>\n';
    Blockly.Arduino.definitions_['define_lcdpins'] = 'LiquidCrystal lcd('+rs_pin+','+e_pin+','+d4_pin+','+d5_pin+','+d6_pin+','+d7_pin+');\n';
    //LiquidCrystal lcd(12, 11, 10, 5, 4, 3, 2);
  var value_columns = Blockly.Arduino.valueToCode(block, 'COLUMNS', Blockly.Arduino.ORDER_ATOMIC);
  var value_rows = Blockly.Arduino.valueToCode(block, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
   Blockly.Arduino.setups_['setup_lcd_normal']='lcd.begin('+value_columns+','+ value_rows+');\n'
  var code = '';
  return code;
};


Blockly.Arduino['lcd_print'] = function(block) {
  var value_texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = 'lcd.print('+value_texttoprint+');\n';
  return code;
};

Blockly.Arduino['lcd_clear'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.clear();\n';
  return code;
};

Blockly.Arduino['lcd_home'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.home();\n';
  return code;
};

Blockly.Arduino['lcd_setcursor'] = function(block) {
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.setCursor('+value_column+', '+value_row+ ');\n';
  return code;
};

Blockly.Arduino['lcd_display'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.display();\n';
  return code;
};

Blockly.Arduino['lcd_nodisplay'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.noDisplay();\n';
  return code;
};