function edit(element) {
  var parent = $(element).parent().parent();
  var placeholder = $(parent).find('.text-info').text();
  //hide label
  $(parent).find('label').hide();
  //show input, set placeholder
  var input = $(parent).find('input[type="text"]');
  var edit = $(parent).find('.controls-edit');
  // var update = $(parent).find('.controls-update');
  $(input).show();
  // $(edit).hide();
  // $(update).show();
  //$(input).attr('placeholder', placeholder);
}

function update(element) {
  var parent = $(element).parent().parent();
  var placeholder = $(parent).find('.text-info').text();

  //hide label
  $(parent).find('label').show();
  //show input, set placeholder
  var input = $(parent).find('input[type="text"]');


  var map = [],
    i = 0,
    j = 0;

  // Fetch content from all input types and store values in an normal array
  $(parent).find('input[type="text"]').each(function() {
    map[i] = $(this).val();
    i++;
  });

  var edit = $(parent).find('.controls-edit');
  // var update = $(parent).find('.controls-update');
  $(input).hide();
  // $(edit).show();
  // $(update).hide();

  //$(input).attr('placeholder', placeholder);

  // Update the content of labels with the content from map
  $(parent).find('label').each(function() {
    $(this).text(map[j]);
    j++;
  });
}

// Function directly calling both the edit and update functions
function toggle(element) {
  if ($(element).text() == "Edit") {
    $(element).text("Update");
    edit(element);
  } else if ($(element).text() == "Update") {
    $(element).text("Edit");
    update(element);
  }
}


// Functions for editing Profile information

function toggleProfile(button) {
  if ($(button).val() == "Edit Profile") {
    $(button).val("Update Profile");
    editProfile(button);
  } else if ($(button).val() == "Update Profile") {
    $(button).val("Edit Profile");
    updateProfile(button);
  }
}

// function for editing profile properties
function editProfile(button) {

  var parent = $(button).parent().parent();
  var placeholder = $(parent).find('.bg-info').text();

  //hide label
  $(parent).find('label').hide();
  //show input, set placeholder
  var input = $(parent).find('input[type="text"]');
  $(input).show();
}

function updateProfile(element) {

  var parent = $(element).parent().parent();
  var placeholder = $(parent).find('.text-info').text();

  //hide label
  $(parent).find('label').show();
  //show input, set placeholder
  var input = $(parent).find('input[type="text"]');


  var map = [],
    i = 0,
    j = 0;

  // Fetch content from all input types and store values in an normal array
  $(parent).find('input[type="text"]').each(function() {
    map[i] = $(this).val();
    i++;
  });

  var edit = $(parent).find('.controls-edit');
  $(input).hide();

  // Update the content of labels with the content from map
  $(parent).find('label').each(function() {
    $(this).text(map[j]);
    j++;
  });

}

// Global variable for setting
var tagVisible = false;

$(document).ready(function() {

  // Array of element Ids
  var divIds = ['div_edit_update_1', 'div_edit_update_2'];

  // Array of element Classes
  var elementClass = ['boldheading', 'lineview'];

  for (var i = 0; i < divIds.length; i++) {
    toggleTagVisibility(tagVisible, '#' + divIds[i]);
  }

  for (var i = 0; i < elementClass.length; i++) {
    toggleTagVisibility(tagVisible, '.' + elementClass[i]);
  }

  // Enable popover on document load
  $("#addNoteBtn").popover();
});

/*
function to toggle visibility
*/
function toggleTagVisibility(visible, idClass) {
  if (visible) {
    $(idClass).show();
  } else {
    $(idClass).hide();
  }
}


// This method will save the details and append a note
function addNote(element) {
  var parent = $(element).parent();
  var commentText = $(parent).find('#commentBox').val();

  // FIXME Following date will be come as a parameter
  var timeAgo = timeSince(new Date());

  // <strong class="pull-left primary-font">James</strong>

  // Added Check for empty string
  if(commentText.trim()){
    $("#ul_comment_list").append("</br> <small class='pull-right text-muted'> <span class='glyphicon glyphicon-time time-text-style'>" + timeAgo + "</span></small></br> <li class='ui-state-default commentTextStyle'>" + commentText + "</li>");

    // Need to clear the textArea too
    $(parent).find('#commentBox').val("");

    // Manually hide this popover
    $("#addNoteBtn").popover('hide');
  }else{
    // Manually show this popover
    $("#addNoteBtn").popover('show');
  }
}

// Method calculates time since last update
function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);

    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);

    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);

    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);

    if (interval > 1) {
        return interval + " minutes";
    }

    return Math.floor(seconds) + " seconds";
}
