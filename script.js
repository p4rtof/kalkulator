const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn'); 
buttons.forEach(tombol => {
    tombol.addEventListener('click', function() {
        
        const isiTombol = tombol.innerText; 

        if (isiTombol === 'C') {
            display.value = ''; 
        } 
        else if (isiTombol === '=') {
            try {
                display.value = eval(display.value); 
            } catch {
                display.value = 'Error'; 
            }
        } 
        else {
            display.value += isiTombol;
        }
    });
});