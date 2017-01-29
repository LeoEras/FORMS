function download() {
	var filename, check1, check2, check3, text1, text2, text3, text4;
	filename = document.getElementById("filename").value;
	check1 = document.getElementById("element_6_1").checked;
	check2 = document.getElementById("element_6_2").checked;
	check3 = document.getElementById("element_6_3").checked;
	check4 = document.getElementById("element_6_4").checked;
	text1 = document.getElementById("element_2").value;
	text2 = document.getElementById("element_3").value;
	text3 = document.getElementById("element_1").value;
	text4 = document.getElementById("element_5").value;
 	var element = document.createElement('a');
 	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(check1) + "," + encodeURIComponent(check2) + ","
	+ encodeURIComponent(check3) + "," + encodeURIComponent(check4) + "," + encodeURIComponent(text1) + "," + encodeURIComponent(text2) + ","
	+ encodeURIComponent(text3) + "," + encodeURIComponent(text4));
 	element.setAttribute('download', filename);
 
 	element.style.display = 'none';
 	document.body.appendChild(element);
 
 	element.click();
 
 	document.body.removeChild(element);
 }
 
 $(document).ready(function() {
 	$("#saveForm").click(function(){
 		$("#form").hide();
 		$("#thanks").css('visibility', 'visible');
 	}); 
 });
