const container = document.querySelector('.rating')
const items = container.querySelectorAll('span')

window.addEventListener("click", function(e) {
    var elementChecked = false

    for(i = 0; i < items.length; i++) {
        
        if(e.target.id === items[i].id ) {
 
            elementChecked = true   
            
            const elementClass = e.target.classList
            
                if(!elementClass.contains('active')) {
                items.forEach( item => item.classList.remove('active'))   
                elementClass.toggle('active');
            }
        }   
    }
    if (!elementChecked) {
        items.forEach( item => item.classList.remove('active'))
    }

})