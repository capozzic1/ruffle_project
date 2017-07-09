$(document).ready(function(){


$("#dropdownMenuButton").click(function(){
    var displayProp = $(".dropdown-menu-categories").css('display');
    var dropDownMenu = $(".dropdown-menu-categories");

    slide(displayProp, dropDownMenu);
});



function slide(property, menu){

  if (property == "none"){
    menu.slideDown(300);
  } else {
    menu.slideUp(300);
  }
}
});
