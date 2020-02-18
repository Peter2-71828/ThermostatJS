describe("Thermostat", function() {

  it("Should have a base value of 20", function() {
    thermostat = new Thermostat();
    expect(thermostat.current_temp()).toEqual(20)
  });
});