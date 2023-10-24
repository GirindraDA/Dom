const sessionKey = 'ITEM_CHANGE';

if(typeof Storage !== 'undefined'){
    if(sessionStorage.getItem(sessionKey) === null){
        //jikas item pada session belum ada, datanya akan diatur dengan nilai awal 0
        sessionStorage.setItem(sessionKey, 0);
    }

    const incrementButton = document.querySelector('#incrementButton');
    const clearButton = document.querySelector('#clear');
    const countDisplay = document.querySelector('#count');

    //Memberikan nilai item dari session storage
    countDisplay.innerText = sessionStorage.getItem(sessionKey);

    //update nilai item session
    incrementButton.addEventListener('click', function(){
        let count = sessionStorage.getItem(sessionKey);
        count++;
        sessionStorage.setItem(sessionKey, count);
        countDisplay.innerText = sessionStorage.getItem(sessionKey);
    });

    //reset ke -0
    clearButton.addEventListener('click', function(){
        sessionStorage.removeItem(sessionKey);
        countDisplay.innerText = 0;
    });
} else {
    alert('Browsermu nggak mendukung session storage');
}