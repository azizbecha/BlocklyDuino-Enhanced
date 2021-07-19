goog.provide('Blockly.Blocks.loops');

goog.require('Blockly.Blocks');



Blockly.Arduino.controls_for = function() {
  // For loop.
  var variable0 = Blockly.Arduino.variableDB_.getName(
      this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.Arduino.valueToCode(this, 'FROM',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var argument1 = Blockly.Arduino.valueToCode(this, 'TO',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var argument2 = Blockly.Arduino.valueToCode(this, 'BY',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  var code;
  if (argument0.match(/^-?\d+(\.\d+)?$/) &&
      argument1.match(/^-?\d+(\.\d+)?$/)) {
    // Both arguments are simple numbers.
    var up = parseFloat(argument0) <= parseFloat(argument1);
    code = 'for (int ' + variable0 + ' = ' + argument0 + '; ' +
        variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
        variable0 + (up ? '='+ variable0+'+'+argument2 : '='+variable0+'-'+argument2) + ') {\n' +
        branch + '}\n';
  } else {
    code = '';
    // Cache non-trivial values to variables to prevent repeated look-ups.
    var startVar = argument0;
    if (!argument0.match(/^\w+$/) && !argument0.match(/^-?\d+(\.\d+)?$/)) {
      var startVar = Blockly.Arduino.variableDB_.getDistinctName(
          variable0 + '_start', Blockly.Variables.NAME_TYPE);
      code += 'int ' + startVar + ' = ' + argument0 + ';\n';
    }
    var endVar = argument1;
    if (!argument1.match(/^\w+$/) && !argument1.match(/^-?\d+(\.\d+)?$/)) {
      var endVar = Blockly.Arduino.variableDB_.getDistinctName(
          variable0 + '_end', Blockly.Variables.NAME_TYPE);
      code += 'int ' + endVar + ' = ' + argument1 + ';\n';
    }
    code += 'for (' + variable0 + ' = ' + startVar + ';\n' +
        '    (' + startVar + ' <= ' + endVar + ') ? ' +
        variable0 + ' <= ' + endVar + ' : ' +
        variable0 + ' >= ' + endVar + ';\n' +
        '    ' + variable0 + ' += (' + startVar + ' <= ' + endVar +
            ') ? 1 : -1) {\n' +
        branch0 + '}\n';
  }
  return code;
};

Blockly.Arduino.controls_repeat_x = function() {
  // Repeat n times.
  var repeats = Blockly.Arduino.valueToCode(this, 'TIMES',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  var loopVar = Blockly.Arduino.variableDB_.getName(
      'count', Blockly.Variables.NAME_TYPE);
  var code = 'for (int ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + repeats + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};

Blockly.Arduino.while_do = function() {
  var statements_name = Blockly.Arduino.statementToCode(this, 'STATNAME');
  var value_name = Blockly.Arduino.valueToCode(this, 'CONDI', Blockly.Arduino.ORDER_ATOMIC)|| 'false';
  // TODO: Assemble JavaScript into code variable.
  var code = 'do {\n'+statements_name+'} while ('+value_name+');';
  return code;
};

Blockly.Arduino.do_while = function() {
  var statements_name = Blockly.Arduino.statementToCode(this, 'STATNAME');
  var value_name = Blockly.Arduino.valueToCode(this, 'CONDI', Blockly.Arduino.ORDER_ATOMIC)|| 'false';
  // TODO: Assemble JavaScript into code variable.
  var code = 'while ('+value_name+'){\n'+statements_name+'\n}';
  return code;
};

Blockly.Arduino.cont_break = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = 'break;\n';
  return code;
};

Blockly.Arduino.cont_continue = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = 'continue;\n';
  return code;
};

Blockly.Arduino.cont_returnnull = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = 'return;\n';
  return code;
};