//Module Pattern
var animateItems = (function(){
	var UL = document.querySelector('.items');

	var _buildSnippet = function (counter){
		//Cache vars
		var LI = document.createElement("li"),
			H2 = document.createElement("h2");
		//Set text
		H2.textContent = counter+1;

		//Append elems
		LI.appendChild(H2);
		UL.appendChild(LI);
	};

	var _clear = function(){
		UL.innerHTML = '';
	};

	var _getChildren = function(counter){
		return UL.children[counter];
	};

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
			_fadeInLI(_getChildren(x), x);
		}
	};

	function init(num){
		_clear();
		_makeItems(num);
	}

	//Public API
	return {
		init: function(num){
			init(num);
		},
		clear: function(){
			_clear();
		}
	}
})();

var triggerAnimation = (function(){

	var init = function(){
		var el = document.querySelector('.controller input'),
			val = el.value;

		animateItems.init(val);
	};

	return {
		init : function(){
			init();
		},
		clear : function(){
			animateItems.clear();
		}
	}

})();
