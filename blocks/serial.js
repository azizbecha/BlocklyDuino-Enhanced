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

goog.provide('Blockly.Blocks.serial');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */

Blockly.Blocks['serial_printfor'] = {
  helpUrl: 'http://arduino.cc/en/Serial/Println',
  init: function() {
    this.setColour(20);
	this.setInputsInline(true);
    this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
        .appendTitle(Blockly.Msg.Serial_Print_Format)
     	.appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.Serial_Print_ForDecimal, "DEC"],[Blockly.Msg.Serial_Print_ForHexa, "HEX"],[Blockly.Msg.Serial_Print_ForBin, "BIN"],[Blockly.Msg.Serial_Print_ForOct, "OCT"]]), "TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Prints data to the console/serial port with a specific format.');
  }
};

Blockly.Blocks['serial_read'] = {
	helpUrl: 'http://arduino.cc/en/Serial/read',
  init: function() {
    this.setColour(20);
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.Serial_read);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Reads incoming serial data. ');
  }
};

Blockly.Blocks['serial_available'] = {
	helpUrl: 'http://arduino.cc/en/Serial/available',
  init: function() {
    this.setColour(20);
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.Serial_avai);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Get the number of bytes (characters) available for reading from the serial port. This is data that s already arrived and stored in the serial receive buffer (which holds 64 bytes). ');
  }
};

Blockly.Blocks['serial_print'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(20);
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.Serial_Print);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Prints data to the console/serial port as human-readable ASCII text.');
  }
};

Blockly.Blocks['serial_write'] = {
  helpUrl: '',
  init: function() {
    this.setColour(20);
    this.appendValueInput("CONTENT", String)
        .appendTitle(Blockly.Msg.Serial_Write);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Writes binary data to the serial port. This data is sent as a byte or series of bytes to send the characters representing the digits of a number use the print() function instead. ');
  }
};


Blockly.Blocks['serial_write_out'] = {
  helpUrl: '',
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Serial/write');
    this.setColour(20);
    this.appendValueInput("valeur")
        .appendField(Blockly.Msg.Serial_write_out);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Writes binary data to the serial port. This data is sent as a byte or series of bytes; to send the characters representing the digits of a number use the print() function instead.');
  }
};

Blockly.Blocks['serial_flush'] = {
	helpUrl: 'http://arduino.cc/en/Serial/Flush',
  init: function() {
    this.setColour(20);
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.Serial_flush);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Waits for the transmission of outgoing serial data to complete.');
  }
};

Blockly.Blocks['serial_printL'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(20);
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.Serial_PrintL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Prints data to the console/serial port as human-readable ASCII text.');
  }
};
