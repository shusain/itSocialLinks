!function(){"use strict";angular.module("component-templates",[]),angular.module("socialMedia",["component-templates"]).directive("socialMediaLinks",[function(){var a=["stumbleupon","digg","facebook","twitter","delicious","flickr","youtube","skype","linkedin","vimeo","blogger","tumblr","picasa","wordpress","rss","mobileme","apple","gpluslight","gplusdark","twitterb","instagram","myspace","dribble","blip","spotify","grooveshark","ichat","github","soundcloud","pinterest","smugmug","virb","technorait","slashdot","sharethis","posterous","googleb","reddit","friendfollow","designfloat","amazon","netvibes","bing","yahoo","aim","email","ebay","paypal","feedburner","podcast","appstoreios","itunes","appstoremac","yelp","wthree","etsy","stackoverflow","foursquare","quora","photobucket"];return{restrict:"E",templateUrl:"component/templates/socialMedia.tpl.html",link:function(b,c,d){b.attrs=[],Object.getOwnPropertyNames(d).sort().forEach(function(c,e,f){-1!=a.indexOf(c)&&b.attrs.push({popularSite:c,link:d[c]})})}}}]).controller("socMedController",["$scope",function(a){a.hoverText="",a.updateHoverText=function(b){a.hoverText=b.popularSite}}]),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null===this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>1&&(d=Number(arguments[1]),d!=d?d=0:0!==d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1})}(),angular.module("component-templates",["component/templates/socialMedia.tpl.html","component/templates/testTemplate.tpl.html"]),angular.module("component/templates/socialMedia.tpl.html",[]).run(["$templateCache",function(a){a.put("component/templates/socialMedia.tpl.html",'<ul class="socialicons color">\n  <li ng-repeat="attr in attrs">\n    <a href="{{attr.link}}" class="{{attr.popularSite}}" alt="{{attr.popularSite}}" target="_blank" ng-mouseover="updateHoverText(attr)">{{attr.popularSite}}</a>\n  </li>\n</ul>')}]),angular.module("component/templates/testTemplate.tpl.html",[]).run(["$templateCache",function(a){a.put("component/templates/testTemplate.tpl.html","<div>testing</div>")}]);