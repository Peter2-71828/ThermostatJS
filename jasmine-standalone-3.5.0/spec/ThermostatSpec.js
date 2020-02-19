describe("Thermostat", function() {

  beforeEach( function() {
    thermostat = new Thermostat()
  });

  it("Should have a base value of 20", function() {
    expect(thermostat.current_temp()).toEqual(20)
  });

  it("up should increase temp by 1", function() {
    thermostat.up();
    expect(thermostat.current_temp()).toEqual(21);
  })

  it("up should decrease temp by 1", function() {
    thermostat.down();
    expect(thermostat.current_temp()).toEqual(19);
  })

  it("should not decrease below a temperature of 10", function() {
    thermostat._temperature = 10;
    thermostat.down();
    expect(thermostat.current_temp()).toEqual(10);
  })

  it("should toggle powersaving mode", function() {
    thermostat.TogglePowerSave();
    expect(thermostat._powerSaver).toEqual(false);
  })

  it("by default max temp is 25", function() {
    thermostat._temperature = 25;
    thermostat.up();
    expect(thermostat.current_temp()).toEqual(25);
  })

  it("if not inn powerSaver max temp is 32", function() {
    thermostat._temperature = 32;
    thermostat.TogglePowerSave();
    thermostat.up()
    expect(thermostat.current_temp()).toEqual(32);
  })

});
