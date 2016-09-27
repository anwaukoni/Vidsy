/* ----------------------------------
 *        Function that controls
 *      web requests and responses
 * ---------------------------------- */

const Promise = require('es6-promise');
const fetch = require('isomorphic-fetch');

export function search(category) {
  return new Promise(function (resolve, reject) {
    fetch(`http://localhost:8080/search/${category}`)
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }

            return response.json();
        })
        .then(function(results) {
            resolve(results);
        })
        .catch(function(err){
          reject(err);
        });
  });
}
