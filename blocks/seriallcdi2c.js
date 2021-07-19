'use strict';

goog.provide('Blockly.Blocks.seriallcdi2c');

goog.require('Blockly.Blocks');


Blockly.Blocks['lcdi2c_setup'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_I2C_setup);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0x3F"), "NAME");
   this.appendValueInput("COLUMNS")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Column);
    this.appendValueInput("ROWS")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Row);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['lcdi2c_print'] = {
  init: function() {
    this.setColour(140);
    this.appendValueInput("texttoprint")
        .setCheck(null)
        .appendField(Blockly.Msg.LCDP_Print);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalPrint');
  }
};

Blockly.Blocks['lcdi2c_clear'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_Clear);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalClear');
  }
};

Blockly.Blocks['lcdi2c_home'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_Home);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalHome');
  }
};

Blockly.Blocks['lcdi2c_setcursor'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_SetCursor);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Column);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Row);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalSetCursor');
  }
};

Blockly.Blocks['lcdi2c_display'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_Display);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalDisplay');
  }
};

Blockly.Blocks['lcdi2c_nodisplay'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_noDiplay);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalNoDisplay');
  }
};

Blockly.Blocks['lcdi2c_scrollDisplayLeft'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_scrollDisplayLeft);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalClear');
  }
};

Blockly.Blocks['lcdi2c_scrollDisplayRight'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_scrollDisplayRight);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalClear');
  }
};

//OLED
Blockly.Blocks['oled_setup'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_I2C_setup);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0x3F"), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['oled_print'] = {
  init: function() {
    this.setColour(140);
    this.appendValueInput("texttoprint")
        .setCheck(null)
        .appendField(Blockly.Msg.LCDP_Print);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['oled_clear'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_Clear);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['oled_setcursor'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_SetCursor);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Column);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Row);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalSetCursor');
  }
};
