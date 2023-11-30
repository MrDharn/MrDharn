function app(){


    //Toggle menubar

    const toggleBtn = document.querySelector('.menu-toggle');

    // select the menu item container to be displayed

    const menuListCont = document.querySelector('.dropdown-menu');


    // Select all the menu items and add focus on the first element when toggled

    const menulist = menuListCont.querySelectorAll('li a.dropdown-item')

    console.log(menulist)
// function to insert the focus on the fist list item
function addFocusOnListItem1(){
    if(menuListCont.classList.contains('visible')){
       
        console.log( menulist[0])
    } else{
        console.log('yo , not there again')
    }
}
// function to display the menu bar

    function displayNav(){
        menuListCont.classList.toggle('visible');
        addFocusOnListItem1()
    }


    toggleBtn.addEventListener('click', displayNav)

}
app()
