const select = document.querySelector('select');
const h1 = document.querySelector('h1');
const list = document.querySelector('ul');

select.addEventListener('change', setMonth);

function setMonth(){
    
    list.innerHTML = '';
    const choice = select.value;
    h1.textContent = choice;
    let days = 0;

    switch(choice){
        case 'January': days = 31; break;
        case 'February': days = 28; break;
        case 'March': days = 31; break;
        case 'April': days = 30; break;
        case 'May': days = 31; break;
        case 'June': days = 30; break;
        case 'July': days = 31; break;
        case 'August': days = 31; break;
        case 'September': days = 30; break;
        case 'October': days = 31; break;
        case 'November': days = 30; break;
        case 'December': days = 31 ; break;
    }

    for (let i = 1; i <= days; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem); 
      }
}
