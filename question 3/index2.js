var countBox =1;
var boxName = 0;
function anotherInput() {
  var boxName = "textBox" + countBox;
  document.getElementById('add').innerHTML += '<br/>Enter your phone number:<input type="tel" id="' + boxName + '" value="" "  /><br/>';
  countBox += 1;
}
var array=[];
function copy(){
  for(var i=0;i<countBox; i++){
    array[i]=document.getElementById('phone').value;
  }

}
function console() {
  for(var i=0;i<countBox; i++){
      alert("phone number" + (i+1) + ":" + array[i])
  }

}
