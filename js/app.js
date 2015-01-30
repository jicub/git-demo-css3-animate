//Module Pattern
var animateItems = (function(){
	var UL = document.querySelector('.items');
	var KIDS = document.querySelectorAll('.items');

	var _buildSnippet = function (counter){

		//Cache vars
		var LI = document.createElement("li"),
			H2 = document.createElement("h2");
		//console.log(newCounter);
		//Set text
		H2.textContent = counter+1;

		//Append elems
		LI.appendChild(H2);
		UL.appendChild(LI);
	};

	var getChildren = function(counter){
		return KIDS[0].children[counter];
	}

	var _fadeInLI = function(item, counter) {
		//Cache vars
		var el = item,
		timer = 65 * counter;

		//Animate event
		setTimeout(function(){
			//Show element
			el.className = 'fade-in';
		}, timer);
	};

	var _makeItems = function(num){
		//Cache vars
		var itemNum = num;

		//Build elements
		for (var i = 0; i < itemNum; i++) {
			_buildSnippet(i);
		}

		//Animate items
		for(var x = 0; x < itemNum; x++) {
			_fadeInLI(getChildren(x), x);
		}
	};

	function init(num){
		_makeItems(num);
	}

	//Public API
	return {
		init: function(num){
			init(num);
		}
	}
})();

animateItems.init(10);