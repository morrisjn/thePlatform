var relatedItemsXML = [];

(function () {

    $(document).ready(function () {
	
		initialize();	
    });

	function initialize() {
		setInterval(function(){
			// $(".liveFeedItem").find("img").each(function() {
			// 	$(this).attr("src", "http://lorempixel.com/114/64?cache=" + new Date().getTime() + getRandomInt(1,10));
			// });

			$(".tpRelease").find("img").each(function() {
				//TODO: grab actual image based on an ID for each Release item
				$(this).attr("src", "http://lorempixel.com/114/64?cache=" + new Date().getTime() + getRandomInt(1,10));
			});			
		},2000);	
	
		// var relatedItemsUrl = $("#player").attr("tp:relatedItemsUrl");
		// parseRelatedItemsRSS(relatedItemsUrl);

		// $("#liveFeedList").on( "click", ".liveFeedItem", function() {
		// 	$pdk.controller.setReleaseURL($(this).attr("releaseURL"));
		// });
	};
	
	function parseRelatedItemsRSS(url) {
		$.get(url, function(data) {
			$(data).find("item").each(function() {
				var item = {				 
					guid:			$(this).find("guid").text(),
					title:			$(this).find("title").text(),
					releaseURL: 	$(this).find("content").attr("url"),
					thumbnailURL: 	$(this).find("thumbnail").attr("url")
				}
				
				//TODO: Create a proper object for all of this
				window.relatedItemsXML.push(item);

				var $li 	= $('<li>', {class:'liveFeedItem', releaseURL: item.releaseURL});
				var $p 		= $('<p>', { class: 'title', text: item.title });
				var $img 	= $('<img>', {id: item.guid, src: 'http://lorempixel.com/114/64/'}); 

				$li.append($p, $img).appendTo($("#liveFeedList"));				
			 });
		});
	};	
	
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	};	

})();