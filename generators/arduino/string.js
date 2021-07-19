/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
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
 * @fileoverview Generating Arduino for text blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.string');

goog.require('Blockly.Arduino');

Blockly.Arduino.string_declare = function() {
  // Variable setter.
  //TODO: settype to variable
  var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
	
	Blockly.Arduino.setups_['setup_var'+varName] = varName + ' = ' + argument0 + ';\n';
	Blockly.Arduino.definitions_['variables'+varName] = 'String  ' + varName + ';' ;//TEST ADEL
  return '';
};



Blockly.Arduino.string_get = function() {
  // Variable getter.
  var code = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.string_set = function() {
  // Variable setter.
  var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
};

Blockly.Arduino.string_charat = function() {
  // Variable setter.
  var code;
  var argument0 = Blockly.Arduino.valueToCode(this, 'NAME',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  code =  varName + '.charAt(' + argument0 + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.string_compareto = function() {
  // Variable setter.
  var code;
  var argument0 = Blockly.Arduino.valueToCode(this, 'input_to_compare',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  code =  varName + '.compareTo(' + argument0 + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.string_concat = function() {
  // Variable setter.
  var code;
  var argument0 = Blockly.Arduino.valueToCode(this, 'NAME',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  code =  varName + '.concat(' + argument0 + ');\n';
  return code;
};

Blockly.Arduino.string_lengthof = function() {
  // Variable setter.
  var code;
  //var argument0 = Blockly.Arduino.valueToCode(this, 'input_to_compare',
  //    Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  code =  varName + '.length()';
  return [code, Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.string_endswith = function() {
  // Variable setter.
  var code;
  var argument0 = Blockly.Arduino.valueToCode(this, 'input_to_compare',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  code =  varName + '.endsWith(' + argument0 + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.string_equalto = function() {
  // Variable setter.
  var code;
  var argument0 = Blockly.Arduino.valueToCode(this, 'input_to_compare',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  code =  varName + '.equals(' + argument0 + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC]
};
