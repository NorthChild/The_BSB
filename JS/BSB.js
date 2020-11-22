                         /*/
                      // TO DO //

- create a color button, this button will be able to change
the layout of the page, colors etc

                      // TO DO //
                         /*/

// this function stars with the loadout, it unchecks every single
// checkbox, forcing the page to be empty

function uncheckBoxes() {
  document.getElementById('nasa').checked = false;
  document.getElementById('esa').checked = false;
  document.getElementById('nature').checked = false;
  document.getElementById('science_ill').checked = false;
  document.getElementById('Sci-hub').checked = false;
  document.getElementById('space-x').checked = false;
}

function checkVibe(id, secondId) {
  if (document.getElementById(id).checked === true) {
    var windowCheck = document.getElementById(secondId);
    windowCheck.className = 'websitesChosen';
  } else {
    if (document.getElementById(id).checked === false) {
      var windowCheck = document.getElementById(secondId);
      windowCheck.className = 'websites';
  }
  }
}
