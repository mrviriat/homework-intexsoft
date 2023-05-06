'use strict';

var age = 0;
var people = 0;

function loadJSON(callback) {
  var XMLObj = new XMLHttpRequest();
  XMLObj.open('GET', 'http://localhost:3000/people', true);
  XMLObj.onreadystatechange = function () {
    if (XMLObj.readyState === 4 && XMLObj.status === 200) {
     
      var myArr = JSON.parse(this.responseText);
      callback(myArr);
      console.log(age / people);
    }
  };
  XMLObj.send();
}

loadJSON(function checkAge (data) {
  data.forEach(element => {
    if (element.age) { age += element.age; people ++;}
    if (element.friends) {checkAge(element.friends)}
  });
});
