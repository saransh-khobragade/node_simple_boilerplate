const index = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Server! api_testing", () => {
  
  it("best_route positive api", done => {
    chai
      .request(index)
      .get("/best_route?WEATHER=RAINY&ORBIT_1_TRAFFIC_SPEED=8&ORBIT_2_TRAFFIC_SPEED=15")
      .end((err, res) => {

        expect(res).to.have.status(200);
        expect(res.body).to.have.property('result')
        expect(res.body.result).to.equal("TUKTUK ORBIT2");

        done();
      });
  });

  it("best_route negative api", done => {
    chai
      .request(index)
      .get("/best_route?WEATHER=RAINY&ORBIT_1_TRAFFIC_SPEED=8")
      .end((err, res) => {

        expect(res).to.have.status(400);
    
        done();
      });
  });

});