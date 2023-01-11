let jQ1 = $('#jQtest');
let heading3 = $('<h3>');
heading3.text('hi');
heading3.attr('class','item5');
jQ1.append(heading3);

//In jQuery, we don't have to select and creat element separately if there is no element that we want to make.
//if there is no element that we want to make, just declare with $ will create the element and select it.
// attr means give to 'class' attribute item5 into it

refreshButtonEl.on('click', function () {
    location.reload();
  });

//on() is as same as addEventlister().
//reload(); is the API to reset to first condition.
