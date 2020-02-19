function Thermostat() {
  this._temperature = 20;
  this._powerSaver = true;
  max = 25
}

Thermostat.prototype.current_temp =  function(){
  return this._temperature;
}

Thermostat.prototype.up = function() {
  if (this._temperature < max){
    this._temperature ++;
  }
}

Thermostat.prototype.down = function() {
  if (this._temperature > 10) {
    this._temperature --;
  }
}

Thermostat.prototype.TogglePowerSave = function() {
  this._powerSaver = !this._powerSaver;
  if (this._powerSaver) {max = 25}
  else {max = 32}
}
