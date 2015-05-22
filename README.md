# Install the scripts with bower

`
bower install --save 
`

Add dependencies to index.html

```
<link rel="stylesheet" type="text/css" href="bower_components/it-social-links/dist/styles/optimized.css"/>
<script type="text/javascript" src="bower_components/it-social-links/dist/component-min.js"></script>
```

Add social media dependency to your angular module

```
angular.module('yourMainModule', ['socialMedia'])
```


Add this to your HTML where you want the links to show up

```
<social-media-links
	facebook="http://www.facebook.com/IntellectualTech"
	instagram="http://instagram.com/intellectualtech"
	gpluslight="https://plus.google.com/u/0/112973627906185189483/posts"
	twitter="https://twitter.com/Intellectual_IT"
	youtube="https://www.youtube.com/user/IntellectualTech">
</social-media-links>
```

Possible options are
```
stumbleupon
digg
facebook
twitter
delicious
flickr
youtube
skype
linkedin
vimeo
blogger
tumblr
picasa
wordpress
rss
mobileme
apple
gpluslight
gplusdark
twitterb
instagram
myspace
dribble
blip
spotify
grooveshark
ichat
github
soundcloud
pinterest
smugmug
virb
technorait
slashdot
sharethis
posterous
googleb
reddit
friendfollow
designfloat
amazon
netvibes
bing
yahoo
aim
email
ebay
paypal
feedburner
podcast
appstoreios
itunes
appstoremac
yelp
wthree
etsy
stackoverflow
foursquare
quora
photobucket
```