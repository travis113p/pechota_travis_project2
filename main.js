window.addEventListener("DOMContentLoaded", function(){ //attached to window object (browser window) and when page is loaded, DOm runs

	//getElementById Function
	function $(x){
		var getElement = document.getElementById(x);
		return getElement;
	}

	//create size selector
	function pizzaSize(){
		var form = document.getElementsByTagName("form"), //formTag is array of all the form tags
			sizeLi = $("size"),
			sizeSelect = document.createElement("select");
			sizeSelect.setAttribute("id", "sizes");
		for(var i=0, j=pizzaSizes.length; i<j; i++){
			var makeOption = document.createElement("option");
				optText = pizzaSizes[i];
				makeOption.setAttribute("value", optText);
				makeOption.innerHTML = optText;
				sizeSelect.appendChild(makeOption);
		}
		sizeLi.appendChild(sizeSelect);
	}

	//create style selector
	function pizzaStyle(){
		var formStyle = document.getElementsByTagName("form"), //formTag is array of all the form tags
			styleLi = $("style"),
			styleSelect = document.createElement("select");
			styleSelect.setAttribute("id", "styles");
		for(var i=0, j=pizzaStyles.length; i<j; i++){
			var styleOption = document.createElement("option");
				styleText = pizzaStyles[i];
				styleOption.setAttribute("value", styleText);
				styleOption.innerHTML = styleText;
				styleSelect.appendChild(styleOption);
		}
		styleLi.appendChild(styleSelect);
	}

	function getPepperoniValue(){
		if($("pepperoni").checked){
			pepperoniValue = ("pepperoni").value;
		}else{
			pepperoniValue = "No";
		}
	}

	function getSausageValue(){
		if($("sausage").checked){
			sausageValue = ("sausage").value;
		}else{
			sausageValue = "No";
		}
	}

	function getHamValue(){
		if($("ham").checked){
			hamValue = ("ham").value;
		}else{
			hamValue = "No";
		}
	}

	function getGPValue(){
		if($("green peppers").checked){
			gpValue = ("green peppers").value;
		}else{
			gpValue = "No";
		}
	}

	function getBPValue(){
		if($("banana peppers").checked){
			bpValue = ("banana peppers").value;
		}else{
			bpValue = "No";
		}
	}

	function getBaconValue(){
		if($("bacon").checked){
			baconValue = ("bacon").value;
		}else{
			baconValue = "No";
		}
	}

	function getFCValue(){
		if($("feta cheese").checked){
			fcValue = ("feta cheese").value;
		}else{
			fcValue = "No";
		}
	}

	function toggleControls(n){
		switch(n){
			case "on":
				$("contactForm").style.display = "none";
				$("clear").style.display = "inline";
				$("displayLink").style.display = "none";
				$("addNew").style.display = "inline";
				break;
			case "off":
				$("contactForm").style.display = "block";
				$("clear").style.display = "inline";
				$("displayLink").style.display = "inline";
				$("addNew").style.display = "none";
				$("items").style.display = "none";
				break;
			default:
				return false;
		}
	}


//var defaults
var pizzaSizes = ["--Choose A Size--", "Small ($5.00)", "Medium ($7.50)", "Large ($10.00"],
	pizzaStyles = ["--Choose A Style--", "Deep Dish", "Classic", "Thin Crust"],
	pepperoniValue = "No",
	sausageValue = "No",
	hamValue = "No",
	gpValue = "No",
	bpValue = "No",
	baconValue = "No",
	fcValue = "No"
;
pizzaSize();
pizzaStyle();


});