$(function () {
    $("#accordion").accordion({
        collapsible: true,
        active: false
    });
});
$(function () {
    $("#accordion2").accordion({
        collapsible: true,
        active: false
    });
});
//click on likes edit button, changes out images and adds text box outline
$("#likesEB").click(function () {

    //   turns edit button off
    $('#likesEB').toggleClass('likesTransform');

    //   turns save button on 
    $('#likesSB').toggleClass('likesEditTransform');
    //   adds textbox outline 
    $('#likesEdit').toggleClass('textBoxOutline');
    console.log("click");
});

//click on dislikes edit button, changes out images and adds textbox outline

$("#dislikesEB").click(function () {
    //   turns edit button off
    $('#dislikesEB').toggleClass('dislikesToggleTransform');

    //turns save button on 
    $('#dislikesSB').toggleClass('dislikesEditTransform');
    //turns textoutline on 
    $('#dislikesEdit').toggleClass('textBoxOutline');
    console.log("hey");
});

//when they click on the text box first, swaps out images and adds textboxoutline
$("#likesEdit").click(function () {
    //adds textbox outline when you click on textbox
    $("#likesEdit").addClass('textBoxOutline');
    //turns off edit button 
    $('.transform').addClass('likesTransform');
    //turns save button on 
    $('#likesSB').removeClass('likesEditTransform');
});

$("#dislikesEdit").click(function () {

    //adds textbox outline 
    $("#dislikesEdit").addClass('textBoxOutline');

    //turns edit button off
    $('.dislikesTransform').addClass('dislikesToggleTransform');

    //turns save button on
    $('#dislikesSB').removeClass('dislikesEditTransform');
});


function saveLikesEdit() {
    var likesText = document.getElementById("likesEdit");
    //gets the content that the user edited
    var userLikesEdit = likesText.innerHTML;
    localStorage.likesNewVersion = userLikesEdit;
}

function saveDislikesEdit() {
    var dislikesText = document.getElementById("dislikesEdit");
    //gets the content that the user edited
    var userDislikesEdit = dislikesText.innerHTML;
    localStorage.dislikesNewVersion = userDislikesEdit;

}

function checkEdits() {
    console.log("onload echkedits");
    if (localStorage.likesNewVersion != null) {
        document.getElementById("likesEdit").innerHTML = localStorage.likesNewVersion;
        if (localStorage.dislikesNewVersion != null) {
            document.getElementById("dislikesEdit").innerHTML = localStorage.dislikesNewVersion;
        }
    } else if (localStorage.dislikesNewVersion != null) {
        document.getElementById("dislikesEdit").innerHTML = localStorage.dislikesNewVersion;

    }
}