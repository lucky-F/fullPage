$(function() {
	$("#fullPage").fullpage({
		verticalCentered: false,
		anchors: ['page1', 'page2', 'page3', 'page4'],
		navigation: true,
		navigationTooltips: ['它，终于来了', '开创手机美颜自拍时代', '创新的设计，浑然一体', '在三个特点鲜明的系列中找到你的风格'],
		afterLoad: function(link, index) {
			switch(index) {
				case 1:
					move(".h1").scale(1.9).end();
					move(".p1").set("margin-top", "5%").end();
					break;
				case 2:
					move(".h2").scale(0.7).end();

					break;
				case 3:
					move(".h3").set("margin-left", "20%").end();
					move(".p3").set("margin-left", "20%").end();
					move(".section3").set("background-color", "#f0f0f0").duration(1000).end();
					break;
				case 4:
					move("#first").rotate(360).end(function() {
						move("#second").rotate(360).end(function() {
							move("#third").rotate(360).end(function() {
							})
						})
					})
					break;
				default:
					break;
			}
		},
		onLeave: function(link, index) {
			switch(index) {
				case 1:
					move(".h1").scale(1).end();
					move(".p1").set("margin-top", "800px").end();
					break;
				case 2:
					move(".h2").scale(1).end();

					break;
				case 3:
					move(".h3").set("margin-left", "-1500px").end();
					move(".p3").set("margin-left", "1500px").end();
					move(".section3").set("background-color", "#E6E6FA").duration(1000).end();
					break;
				case 4:
					move("#first").rotate(-360).end();
					move("#second").rotate(-360).end();
					move("#third").rotate(-360).end();
					break;
				default:
					break;
			}
		},
		afterRender: function() {

		}

	})
})