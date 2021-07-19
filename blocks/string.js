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
 * @fileoverview Variable blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.string');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.string.HUE = 330;

Blockly.Blocks['string_declare'] = {
  // Variable setter.
  helpUrl: Blockly.LANG_VARIABLES_SET_HELPURL,
  init: function() {
    this.setColour(Blockly.Blocks.string.HUE);
    this.appendValueInput('VALUE', null)
        .appendField(Blockly.Msg.Var_Declare)
        .appendField(new Blockly.FieldString(
        Blockly.LANG_VARIABLES_SET_ITEM), 'VAR')
        .appendField(Blockly.Msg.String_As)
	.appendField(Blockly.Msg.INOUT_VALUE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getString: function() {
    return [this.getFieldValue('VAR')];
  },
  renameString: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }
};



Blockly.Blocks['string_get'] = {
  /**
   * Block for variable getter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(Blockly.Blocks.string.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldString(
        Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
  },
  /**
   * Return all string referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getString: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's string, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameString: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  contextMenuType_: 'string_set',
  /**
   * Add menu option to create getter/setter block for this setter/getter.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    var option = {enabled: true};
    var name = this.getFieldValue('VAR');
    option.text = this.contextMenuMsg_.replace('%1', name);
    var xmlField = goog.dom.createDom('field', null, name);
    xmlField.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlField);
    xmlBlock.setAttribute('type', this.contextMenuType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  }
};

Blockly.Blocks['string_set'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.STRING_SET,
      "args0": [
        {
          "type": "field_variable",
          "name": "VAR",
          "variable": Blockly.Msg.STRING_DEFAULT_NAME
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.string.HUE,
      "tooltip": Blockly.Msg.STRING_SET_TOOLTIP,
      "helpUrl": Blockly.Msg.STRING_SET_HELPURL
    });
    this.contextMenuMsg_ = Blockly.Msg.STRING_SET_CREATE_GET;
  },
  /**
   * Return all string referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getString: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's string, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameString: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  contextMenuType_: 'string_get',
  customContextMenu: Blockly.Blocks['string_get'].customContextMenu
};

Blockly.Blocks['string_charatnnn'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.STRING_charat,
      "args0": [
        {
          "type": "field_string",
          "name": "VAR",
          "variable": Blockly.Msg.STRING_DEFAULT_NAME
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "setOutput":null,
      "colour": Blockly.Blocks.string.HUE,
      "tooltip": Blockly.Msg.STRING_SET_TOOLTIP,
      "helpUrl": Blockly.Msg.STRING_SET_HELPURL
    });
    this.contextMenuMsg_ = Blockly.Msg.STRING_SET_CREATE_GET;
  },
  /**
   * Return all string referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getString: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's string, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameSting: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  contextMenuType_: 'string_get',
  customContextMenu: Blockly.Blocks['string_get'].customContextMenu
};


Blockly.Blocks['string_charat'] = {
  /**
   * Block for variable getter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(Blockly.Blocks.string.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldString(
        Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField(Blockly.Msg.STRING_charat2);
    this.setInputsInline(true);
    this.setOutput(true, "string");
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
  },
  /**
   * Return all string referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getString: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's string, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameString: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  contextMenuType_: 'string_set',
  /**
   * Add menu option to create getter/setter block for this setter/getter.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    var option = {enabled: true};
    var name = this.getFieldValue('VAR');
    option.text = this.contextMenuMsg_.replace('%1', name);
    var xmlField = goog.dom.createDom('field', null, name);
    xmlField.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlField);
    xmlBlock.setAttribute('type', this.contextMenuType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  }
};

Blockly.Blocks['string_compareto'] = {
  init: function() {
    this.setColour(Blockly.Blocks.string.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldString(
        Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.appendValueInput("input_to_compare")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.STRING_compareTo);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/StringCompareTo');
  }
};

Blockly.Blocks['string_concat'] = {
  init: function() {
    this.setColour(Blockly.Blocks.string.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldString(
        Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.appendValueInput("NAME")
        .appendField(Blockly.Msg.STRING_Contact);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setInputsInline(true);
    this.setHelpUrl('https://www.arduino.cc/en/Reference/StringConcat');
  }
};

Blockly.Blocks['string_lengthof'] = {
  init: function() {
    this.setColour(Blockly.Blocks.string.HUE);
   this.appendDummyInput()
        .appendField(Blockly.Msg.STRING_LengthOf);
    this.appendDummyInput()
        .appendField(new Blockly.FieldString(
        Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/StringLength');
  }
};

Blockly.Blocks['string_endswith'] = {
  init: function() {
    this.setColour(Blockly.Blocks.string.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldString(
        Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.appendValueInput("input_to_compare")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.STRING_Ends_With);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/StringEndsWith');
  }
};

Blockly.Blocks['string_equalto'] = {
  init: function() {
    this.setColour(Blockly.Blocks.string.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldString(
        Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.appendValueInput("input_to_compare")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.STRING_Equal);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/StringCompareTo');
  }
};
