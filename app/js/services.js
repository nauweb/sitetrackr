 'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('siteTrackr.services', []).
  value('version', '0.1');



// This is a module for cloud persistance in mongolab - https://mongolab.com
 angular.module('mongolab', ['ngResource']).
    factory('Site', function($resource) {
      var Site = $resource('https://api.mongolab.com/api/1/databases' +
          '/sitetracker-dev/collections//sites/:id',
          { apiKey: '506b4b73e4b0b2e2195065e4' }, {
            update: { method: 'PUT' }
          }
      );
 
      Site.prototype.update = function(cb) {
        return Site.update({id: this._id.$oid},
            angular.extend({}, this, {_id:undefined}), cb);
      };
 
      Site.prototype.destroy = function(cb) {
        return Site.remove({id: this._id.$oid}, cb);
      };
 
      return Site;
    });
