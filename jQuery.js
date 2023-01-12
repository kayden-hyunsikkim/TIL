let jQ1 = $('#jQtest');
let heading3 = $('<h3>');
heading3.text('hi');
heading3.attr('class', 'item5');
jQ1.append(heading3);

//In jQuery, we don't have to select and creat element separately if there is no element that we want to make.
//if there is no element that we want to make, just declare with $ will create the element and select it.
// attr means give to 'class' attribute item5 into it

letterBtn.attr('data-letter', letters[i]);
//like this, we can put new attribute 

refreshButtonEl.on('click', function () {
  location.reload();
});

//on() is as same as addEventlister().
//reload(); is the API to reset to first condition.


function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

//string.fromCharCode() is a function which find the number in UTF and change to string type.

function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

//if we want to add character one each for like password generator, declare  '' empty string and
//use += to add

var checkedEl = $('input:checked');
var selected = [];

$.each(checkedEl, function () {
  selected.push($(this).val());
});
console.log('Toppings: ', selected.join(', '));

// .each() is used for repeating function even if the selected element is more than one. 
// In above, put all the checked checkbox into selected array / Push() is as same as concat() in javaScript.
// push() add at the end of array, unshift() add at the first of array.
// join() change the array to srting type and separate each elements with ',' which is in ()
// push for array, join change the array to string type and separate with the thing in ().


$('#top').children().css('color', 'yellow');
$('#top').children().eq(0).addClass('boxy');
$('#top').children().eq(4).append($('<li>Classmates</li>'));
$('#top').children('ul').children().addClass('bg-primary text-dark mb-3 p-3').css('border-radius', '.4rem');

// In id=top, children elements, index of the children element

rootEl.children('ul').children('.item-a3').text("O");
// we can call with the element that we want with Id or class instead of eq()

clearEl.hide();
// Immediately hide the clear button


clearEl.show();
// display clear button


buttonListEl.on('click', '.letter-button', function (event) {
// when class = .letter-button clicked
  var displayLetterEl = $('<div>');

  displayLetterEl.addClass('letter');

  // get letter from clicked letter button's `data-letter` attribute and use it for display
  displayLetterEl.text($(event.target).attr('data-letter'));
  displayEl.append(displayLetterEl);
});

clearEl.on('click', function () {
  displayEl.empty();
});
// Clears the message board of letters on click
// we can't use empty() for input element so we need to use ' ' as a value to make it looks empty.
// remove() removes whole element but empty() removes only detail in the element

function removeItem(event) {
  var Remove = $(event.target);
  Remove.parent('li').remove();
}


shoppingFormEl.on('submit', handleFormSubmit);
shoppingListEl.on('click','.delete-item-btn',removeItem);
// the event.target is related to line 97. when class named delete-item-btn button clicked / => this is the target