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

goog.provide('Blockly.Blocks.divers');

goog.require('Blockly.Blocks');

Blockly.Blocks['grove_temporature_sensor'] = {
  helpUrl: 'http://www.seeedstudio.com/wiki/Project_Seven_-_Temperature',
  init: function() {
    this.setColour(150);
    this.appendDummyInput()
        .appendField(Blockly.Msg.VAR_TemSens)
        .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/b/b0/Temperature1.jpg/400px-Temperature1.jpg", 64, 64))
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip('return number of ambient temperature in ℃');
  }
};

Blockly.Blocks['grove_ultrasonic_ranger'] = {
  helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_Ultrasonic_Ranger',
  init: function() {
    this.setColour(150);
    this.appendDummyInput()
	      .appendField(Blockly.Msg.ultrasonic_ranger)
        .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/b/b0/Twig_-_Ultrasonic_Ranger2.jpg/200px-Twig_-_Ultrasonic_Ranger2.jpg", 64, 64))
	      .appendField(Blockly.Msg.TRIG)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "PIN_TRIG")
        .appendField(Blockly.Msg.Echo)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "PIN_ECHO");
//        .appendField(new Blockly.FieldDropdown([["cm", "cm"],  ["inch", "inch"]]), "UNIT");
    this.setOutput(true, 'Number');
    this.setTooltip('Non-contact distance measurement module');
  }
};

Blockly.Blocks['grove_motor_shield'] = {
  helpUrl: 'http://www.seeedstudio.com/wiki/Motor_Shield',
  init: function() {
    this.setColour(150);
    this.appendDummyInput()
        .appendField(Blockly.Msg.VAR_Motor)
        .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/4/4d/Smotoshield2.jpg/400px-Smotoshield2.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.Stop, "stop"], [Blockly.Msg.Forward, "forward"], [Blockly.Msg.Right, "right"], [Blockly.Msg.Left, "left"], [Blockly.Msg.Backward, "backward"]]), "DIRECTION");
    /*this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed");*/
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Drive two brushed DC motors');
  }
};

Blockly.Blocks['base_delayms'] = {
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
     this.setColour(150);
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField(Blockly.Msg.DelayMs)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Delay specific time in Ms');
  }
};

Blockly.Blocks['millis'] = {
  helpUrl: 'http://arduino.cc/en/Reference/Millis',
  init: function() {
     this.setColour(150);
      this.appendDummyInput()
          .appendField(Blockly.Msg.SinceProgramStarted);
    this.setOutput(true, 'Number');
    this.setTooltip('Number of milliseconds since the program started (unsigned long)');
  }
};

Blockly.Blocks['var_random'] = {
  init: function() {
    this.setColour(150);
    this.setHelpUrl('');
    this.appendValueInput("rand_min")
        .setCheck("Number")
        .appendField(Blockly.Msg.RandomBetween);
    this.appendValueInput("rand_max")
        .setCheck("Number")
        .appendField(Blockly.Msg.And);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['various_constrain'] = {
  init: function() {
      this.setColour(150);
    this.setHelpUrl('http://arduino.cc/en/Reference/Constrain');
    this.appendDummyInput()
        .appendField(Blockly.Msg.Constrain);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(Blockly.Msg.Number);
    this.appendValueInput("a")
        .setCheck("Number")
        .appendField(Blockly.Msg.NumberA);
    this.appendValueInput("b")
        .setCheck("Number")
        .appendField(Blockly.Msg.NumberB);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Constrains a number to be within a range. ');
  }
};