const expect = require("chai").expect;

const GetCommandeByUserFactory = require("../../../../../api/commande/factories/GetCommandeByUserFactory");

module.exports = () => {
    describe("GetCommandeByUserFactory", () => {
  
      it("should return GetCommandeByUser interactor with ANONYMOUS Permission", async () => {
        const interactor = await GetCommandeByUserFactory.getInteractor(Permission.ANONYMOUS);
  
        expect(interactor.constructor.name).to.equal("GetList");
      });
  
      it("should return GetCommandeByUser with other Permission", (done) => {
        GetCommandeByUserFactory.getInteractor("").then(() => {
          done(new Error("Interactor should not be returned"))
        }).catch(() => {
          done();
        });
      });
    });
  };