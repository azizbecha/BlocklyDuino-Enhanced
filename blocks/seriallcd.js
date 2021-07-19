/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.seriallcd');

goog.require('Blockly.Blocks');


Blockly.Blocks['grove_serial_lcd_print'] = {
  helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Serial_LCD',
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_Serial)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendValueInput("TEXT", 'String')
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LCD_Print_Line1);
    this.appendValueInput("TEXT2", 'String')
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LCD_Print_Line2);
    this.appendValueInput("DELAY_TIME", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Delay);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('print text on an 16 character by 2 line LCD.');
  }
};

//grove lcd power on/off
Blockly.Blocks['grove_serial_lcd_power'] = {
  helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED',
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_Serial)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Power)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ONN, "ON"], [Blockly.Msg.OFFF, "OFF"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Turn LCD power on/off');
  }
};

//scroll left/right/no scroll/blink/noblink
Blockly.Blocks['grove_serial_lcd_effect'] = {
  helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED',
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_Serial)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LCD_Effect)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LCD_Scroll_Left, "LEFT"], [Blockly.Msg.LCD_Scroll_Right, "RIGHT"], [Blockly.Msg.LCD_Scroll_Auto, "AUTO"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Turn LCD power on/off');
  }
};

Blockly.Blocks['lcd_setup'] = {
  init: function() {
    this.setColour(125);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_Setup)
        .appendField(Blockly.Msg.LCDP_RS)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "RSPIN")
        .appendField(Blockly.Msg.LCDP_Enabled)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "EPIN")
        .appendField(Blockly.Msg.LCDP_D4)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "D4PIN")
        .appendField(Blockly.Msg.LCDP_D5)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "D5PIN")
        .appendField(Blockly.Msg.LCDP_D6)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "D6PIN")
        .appendField(Blockly.Msg.LCDP_D7)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "D7PIN");
    this.appendValueInput("COLUMNS")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Column);
    this.appendValueInput("ROWS")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Row);
    
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalConstructor');
  }
};

Blockly.Blocks['lcd_print'] = {
  init: function() {
    this.setColour(125);
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

Blockly.Blocks['lcd_clear'] = {
  init: function() {
    this.setColour(125);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_Clear);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalClear');
  }
};

Blockly.Blocks['lcd_home'] = {
  init: function() {
    this.setColour(125);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_Home);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalHome');
  }
};

Blockly.Blocks['lcd_setcursor'] = {
  init: function() {
    this.setColour(125);
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

Blockly.Blocks['lcd_display'] = {
  init: function() {
    this.setColour(125);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_Display);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalDisplay');
  }
};

Blockly.Blocks['lcd_nodisplay'] = {
  init: function() {
    this.setColour(125);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_noDiplay);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/LiquidCrystalNoDisplay');
  }
};