document.addEventListener('DOMContentLoaded', function(){
    const inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
    document.getElementById('sisaKarakter').innerText = inputMaxLengthOnLoad;

    //onInput event
    document.getElementById('inputNama').addEventListener('input', function(){
        const jumlahKarakterDiketik = document.getElementById('inputNama').value.length;
        const jumlahKarakterMaksimal = document.getElementById('inputNama').maxLength;

        console.log('jumlahKarakterDiketik : ', jumlahKarakterDiketik);
        console.log('jumlahKarakterMaksimal: ', jumlahKarakterMaksimal);

        const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
        document.getElementById('sisaKarakter').innerText = sisaKarakterUpdate.toString();

        if(sisaKarakterUpdate === 0){
            document.getElementById('sisaKarakter').innerText = 'Batas maksimal tercapai!';
        } else if (sisaKarakterUpdate <= 5){
            document.getElementById('notifikasiSisaKarakter').style.color = 'red';
        } else {
            document.getElementById('notifikasiSisaKarakter').style.color = 'black';
        }
    });

    //onFocus event
    document.getElementById('inputNama').addEventListener('focus', function(){
        console.log('input Nama : focus');
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'visible';
    });

    //onBlur event
    document.getElementById('inputNama').addEventListener('blur', function(){
        console.log('input Nama : blur');
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'hidden';
    });

    //onchange
    document.getElementById('inputCaptcha').addEventListener('change', function(){
        console.log('inputCaptcha: change');

        const inputCaptcha = document.getElementById('inputCaptcha').value;
        const submitButtonStatus = document.getElementById('submitButton');

        if(inputCaptcha === 'PRNU'){
            submitButtonStatus.removeAttribute('disabled');
        } else {
            submitButtonStatus.setAttribute('disabled', '');
        }
    });

    //Validasi formulir
    document.getElementById('formDataDiri').addEventListener('submit', function(event){
        const inputCaptcha = document.getElementById('inputCaptcha').value;

        if(inputCaptcha === 'PRNU'){
            alert('Selamat! Capcha Anda lolos :D');
        } else {
            alert('Capcha anda belum tepat :(');
            document.getElementById('submitButton').setAttribute('disabled', '');
        }
        event.preventDefault();
    });

    //oncopy
    document.getElementById('inputCopy').addEventListener('copy', function(){
        alert('Anda telah men-copy sesuatu ...');
    });

    //onpaste
    document.getElementById('inputPaste').addEventListener('paste', function(){
        alert('Anda telah men-Paste sebuah text ...');
    });
});

