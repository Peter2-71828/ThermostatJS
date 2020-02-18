function Thermostat () {
  this._temperature = 20;
  this._powerSaver = true;
};

Thermostat.prototype.current_temp =  function(){
  return this._temperature;
};

Thermostat.prototype.up = function() {
  this._temperature ++;
}

Thermostat.prototype.down = function() {
  if (this._temperature > 10) {
    this._temperature --;
  };
};

Thermostat.prototype.TogglePowerSave = function() {
  this._powerSaver = !this._powerSaver;
}