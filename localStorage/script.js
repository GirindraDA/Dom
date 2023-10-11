const localStorageKey = 'PRESS_FREQUENCY';

// Pengecekan: apakah data localStorage dengan key count tersedia atau belum
if(typeof Storage !== 'undefined'){
    if(localStorage.getItem(localStorageKey) === null){
        //jika item pada local  storage belim ada, data
        localStorage.setItem(localStorageKey, 0);
    }
    const incrementButton = document.querySelector('#incrementButton');
    const clearButton = document.querySelector('#clear');
    const countDisplay = document.querySelector('#count');

    countDisplay.innerText = localStorage.getItem(localStorageKey);
    //Memberikan nilai item dari local storage
    incrementButton.addEventListener('click', function(){
        let count = localStorage.getItem(localStorageKey);
        count++;
        localStorage.setItem(localStorageKey, count);
        countDisplay.innerText = localStorage.getItem(localStorageKey);
    });

    //Memberikan nilai o ke tampilankarena di-reset
    clearButton.addEventListener('click', function(){
        localStorage.removeItem(localStorageKey);
        countDisplay.innerText = 0;
    });
} else {
    alert('Browser yang Anda gunakan tidak mendukung Web Storage');
}