var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');


function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText="It was hot outside, so :insertx: went for icecream in :country:. When he got to :inserty:, he stared in horror for a few moments, then :insertz: came. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX=["Willy the Goblin", "Big Daddy", "Father Christmas"];
var insertY=["the Geez parlor","Disneyland parlor","the White House parlor"];
var insertZ=["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
var country = document.getElementById("country").value;
  
	newStory=storyText;

	if(customName.value != '') {
    	var name = customName.value;
    	newStory=newStory.replace('Bob',name);
    }


 	if(document.getElementById("winter").checked) {
    	
    	newStory = newStory.replace('hot','cold');
    	newStory = newStory.replace('icecream','hot chocolate');
  	}

  var xItem= randomValueFromArray(insertX);
  var yItem=randomValueFromArray(insertY);
  var zItem=randomValueFromArray(insertZ);

	newStory = newStory.replace(':insertx:',xItem);
	newStory = newStory.replace(':insertx:',xItem);
 	newStory = newStory.replace(':inserty:',yItem);
 	newStory = newStory.replace(':insertz:',zItem);

  newStory = newStory.replace(':country:',country);



  story.textContent = newStory ;
  story.style.visibility = 'visible';

  console.log(newStory);
}

