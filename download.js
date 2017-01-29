function download(filename, check1, check2, check3, text1, text2, text3) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,'
	+ check1.value()
	+ encodeURIComponent(text1) +
	"," + encodeURIComponent(text2) +
	"," + encodeURIComponent(text3));
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
function myFunction() {
    alert("The form was submitted");
}
