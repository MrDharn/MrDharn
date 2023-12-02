function app(){


    //Toggle menubar

    const toggleBtn = document.querySelector('.menu-toggle');

    // select the menu item container to be displayed

    const menuListCont = document.querySelector('.dropdown-menu');


    // Select all the menu items and add focus on the first element when toggled

    const menulist = menuListCont.querySelectorAll('li a.dropdown-item')

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


    //getting the dropdown elements button

    const dropDownBtn = document.querySelector('.svg-btn');


    //dropDownBtn invoked function

    let hidden = 'not-visible'
    let loading = "btn-marked"
    
    // 
    
    dropDownBtn.addEventListener("click", function(){
        
        const brokenLineIcon = dropDownBtn.querySelector(".not-completed");

        const loadingIcon = dropDownBtn.querySelector('.loading');

        const completedIcon = dropDownBtn.querySelector('.completed');

        dropDownBtn.classList.toggle(loading)
        if(dropDownBtn.classList.contains(loading)){

            loadMarkedButton()
          
        } else{
           unloadMArkedButton()
        }

// To load that button is being marked

        function loadMarkedButton(){

            brokenLineIcon.classList.add(hidden)

            loadingIcon.classList.remove(hidden);

            setTimeout(

             function(){
    
                completedIcon.classList.remove(hidden)

                loadingIcon.classList.add(hidden)

             }, 3000)
        }

//function to unload the already marked button

        function unloadMArkedButton(){

            loadingIcon.classList.remove(hidden)

            completedIcon.classList.add(hidden)

            setTimeout(
                function(){

                    brokenLineIcon.classList.remove(hidden);

                    loadingIcon.classList.add(hidden)

                }, 3000)
        }


    })
    

}
app()
