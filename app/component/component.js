/**
* componentModule Module
*
* Description
*/
/**
 * socialMedia Module
 *
 * A module that conditionally shows different social media network links.
 */

(function(){
  'use strict';

  angular.module('component-templates', []);

  angular.module('socialMedia', ['component-templates']).directive('socialMediaLinks', [function(){
    var validIcons =   [
      'stumbleupon',
      'digg',
      'facebook',
      'twitter',
      'delicious',
      'flickr',
      'youtube',
      'skype',
      'linkedin',
      'vimeo',
      'blogger',
      'tumblr',
      'picasa',
      'wordpress',
      'rss',
      'mobileme',
      'apple',
      'gpluslight',
      'gplusdark',
      'twitterb',
      'instagram',
      'myspace',
      'dribble',
      'blip',
      'spotify',
      'grooveshark',
      'ichat',
      'github',
      'soundcloud',
      'pinterest',
      'smugmug',
      'virb',
      'technorait',
      'slashdot',
      'sharethis',
      'posterous',
      'googleb',
      'reddit',
      'friendfollow',
      'designfloat',
      'amazon',
      'netvibes',
      'bing',
      'yahoo',
      'aim',
      'email',
      'ebay',
      'paypal',
      'feedburner',
      'podcast',
      'appstoreios',
      'itunes',
      'appstoremac',
      'yelp',
      'wthree',
      'etsy',
      'stackoverflow',
      'foursquare',
      'quora',
      'photobucket'
      ];
    return {
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      templateUrl: 'component/templates/socialMedia.tpl.html',
      link: function($scope, iElm, iAttrs) {
        $scope.attrs=[];
              
        Object.getOwnPropertyNames(iAttrs).sort().forEach(function(val, idx, array) {
          if(validIcons.indexOf(val)!=-1)
            $scope.attrs.push({popularSite:val, link:iAttrs[val]});
        });
      }
    };
  }]).controller('socMedController', function($scope)
  {
    $scope.hoverText='';
    $scope.updateHoverText = function(item)
    {
      //console.log(item.popularSite);
      $scope.hoverText = item.popularSite;
    };
  });

  //PolyFill for indexOf
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
      if (this === null) {
        throw new TypeError();
      }
      var t = Object(this);
      var len = t.length >>> 0;
      if (len === 0) {
        return -1;
      }
      var n = 0;
      if (arguments.length > 1) {
        n = Number(arguments[1]);
        if (n != n) { // shortcut for verifying if it's NaN
          n = 0;
        } else if (n !== 0 && n != Infinity && n != -Infinity) {
          n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
      }
      if (n >= len) {
        return -1;
      }
      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
      for (; k < len; k++) {
        if (k in t && t[k] === searchElement) {
          return k;
        }
      }
      return -1;
    };
  }
})();
