goog.provide('Blockly.Blocks.servo');

goog.require('Blockly.Blocks');
//servo block
//http://www.seeedstudio.com/depot/emax-9g-es08a-high-sensitive-mini-servo-p-760.html?cPath=170_171
Blockly.Blocks['servo_move'] = {
  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
  init: function() {
    this.setColour(80);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVO_Servo)
        .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/depot/images/product/a991.jpg", 64, 64))
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendValueInput("DEGREE", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Degree);
    this.appendValueInput("DELAY_TIME", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Delay);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Move between 0~180 degree');
  }
};

Blockly.Blocks['servo_read_degrees'] = {
  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
  init: function() {
	this.setColour(80);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVO_Servo)
        .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/depot/images/product/a991.jpg", 64, 64))
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVO_ReadDegree);
    this.setOutput(true, "Number");
    this.setTooltip('return that degree with the last servo move.');
  }
};


Blockly.Blocks['servo_attached'] = {
  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
  init: function() {
	this.setColour(80);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVO_Attached)
        .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/depot/images/product/a991.jpg", 64, 64))
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, 'Boolean');
    this.setTooltip('true if the servo is attached to pin; false otherwise. ');
  }
};

Blockly.Blocks['servo_detach'] = {
  helpUrl: '',
  init: function() {
    this.setColour(80);
	this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVO_Detach)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Release a pin from servo driving.');
  }
};