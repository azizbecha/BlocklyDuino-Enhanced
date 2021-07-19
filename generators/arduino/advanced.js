goog.provide('Blockly.Blocks.divers');

goog.require('Blockly.Blocks');


Blockly.Arduino['advanced_tone'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  var value = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  // TODO: Assemble JavaScript into code variable.
  var code = 'tone('+dropdown_pin+','+value+');\n';
  return code;
};

Blockly.Arduino['advanced_tonedure'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  var value = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var duration = Blockly.Arduino.valueToCode(this, 'DUR', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  // TODO: Assemble JavaScript into code variable.
  var code = 'tone('+dropdown_pin+','+value+','+duration+');\n';
  return code;
};

Blockly.Arduino['advanced_notone'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  // TODO: Assemble JavaScript into code variable.
  var code = 'noTone('+dropdown_pin+');\n';
  return code;
};

Blockly.Arduino['advanced_pulsein'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');
  
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'pulseIn('+dropdown_pin+','+dropdown_stat+ ');';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_setup'] = function(block) {
  var statements_setup = Blockly.Arduino.statementToCode(block, 'MySetup');
  var statements_loop = Blockly.Arduino.statementToCode(block, 'MyLoop');
 
  Blockly.Arduino.setups_['setup'] = statements_setup;
 
  var code = statements_loop;
  return code;
};