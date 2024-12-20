const button = document.getElementById("changeTextButton");
button.addEventListener('click', function () {
    const headElement = document.querySelector("#header");
    headElement.textContent = "Text Changed!";

    //console.log(headElement.textContent); 
    const paragraphAll = document.getElementsByClassName("text");
    for (let i = 0; i < paragraphAll.length; i++) {
        //console.log(paragraphAll[i].textContent);
        paragraphAll[i].style.color = 'blue';
    }
    
    const listItems = document.getElementsByTagName("li");
    listItems[0].style.backgroundColor = 'yellow';
        for (let i = 0; i < listItems.length; i++) {
        console.log(listItems[i].textContent);
        listItems[i].style.color = 'green';
    }
   

})


