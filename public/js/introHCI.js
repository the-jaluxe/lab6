'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
  initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $('.project a').click(addProjectDetails);

  // $('#colorBtn').click(randomizeColors);
}

function callBackFn() {}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
  // Prevent following the link
  e.preventDefault();

  // Get the div ID, e.g., "project3"
  var projectID = $(this).closest('.project').attr('id');
  // get rid of 'project' from the front of the id 'project3'
  var idNumber = projectID.substr('project'.length);

  console.log('User clicked on project ' + idNumber);
  let urlString = 'http://localhost:3000/project/' + String(idNumber);
  console.log(urlString);
  $.get(urlString, function (response) {
    console.log(response);
    let insertion = '#project' + idNumber + ' .details';
    console.log(insertion);
    let insertionText =
      '<p>' +
      response['title'] +
      '</p>' +
      '<p>' +
      response['date'] +
      '</p>' +
      '<img src="' +
      response['image'] +
      '" class="detailsImage">' +
      response['summary'];
    $(insertion).html(insertionText);
  });
}
