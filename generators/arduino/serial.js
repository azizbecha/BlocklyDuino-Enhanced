goog.provide('Blockly.Blocks.serial');

goog.require('Blockly.Blocks');


Blockly.Arduino['inout_highlow'] = function(block) {
  // Boolean values HIGH and LOW.
  var code = (this.getFieldValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial_printfor'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_NONE);
  //content = content.replace('(','').replace(')','');
  var type = this.getTitleValue('TYPE');
   Blockly.Arduino.setups_['setup_serial'] = 'Serial.begin(9600);';
  //Blockly.Arduino.setups_['setup_serial_'+profile.default.serial] = 'Serial.begin('+profile.default.serial+');\n';
  
  var code = 'Serial.println('+content+ ','+type+');\n';//ORGINAL \nSerial.print(\'\\t\');
  return code;
};

Blockly.Arduino['serial_read'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'Serial.read()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial_available'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'Serial.available()';
   Blockly.Arduino.setups_['setup_serial'] = 'Serial.begin(9600);';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial_print'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');

  Blockly.Arduino.setups_['setup_serial_'+profile.default.serial] = 'Serial.begin('+profile.default.serial+');\n';

  var code = 'Serial.println('+content+');\n';
  return code;
};

Blockly.Arduino['serial_write'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');
  
  Blockly.Arduino.setups_['setup_serial'] = 'Serial.begin(9600);';
  
  var code = 'Serial.write('+content+');\n';  //ORGINAL \nSerial.print(\'\\t\');
  return code;
};

Blockly.Arduino['serial_write_out'] = function(block) {
  var value_num = Blockly.Arduino.valueToCode(this, 'valeur', Blockly.Arduino.ORDER_NONE);
  
    Blockly.Arduino.setups_['setup_serial'] = 'Serial.begin(9600);';
	
  //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'Serial.write('+value_num+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial_flush'] = function(block) {
    Blockly.Arduino.setups_['setup_serial'] = 'Serial.begin(9600);';
  var code = 'Serial.flush();\n';
  return code;
};

Blockly.Arduino['serial_printL'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');

  Blockly.Arduino.setups_['setup_serial_'+profile.default.serial] = 'Serial.begin('+profile.default.serial+');\n';

  var code = 'Serial.print('+content+');\n';
  return code;
};