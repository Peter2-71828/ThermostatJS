describe("Thermostat", function() {

  it("Should have a base value of 20", function() {
    thermostat = new Thermostat();
    expect(thermostat.current_temp()).toEqual(20)
  });

  it("up should increase temp by 1", function() {
    thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.current_temp()).toEqual(21);
  })

  it("up should decrease temp by 1", function() {
    thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.current_temp()).toEqual(19);
  })

});