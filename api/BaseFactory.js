class BaseFactory {
    static getInteractor() {
        return new Promise((resolve, reject) => {
        reject(new Error());
        });
    }
}
  
module.exports = BaseFactory;