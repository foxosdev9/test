const workURL = 'https://newpro6.vercel.app/'

document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    quickCheckValue(document.getElementById('email').value);
    sendEmailToDB(document.getElementById('email').value);

});


function quickCheckValue(value){
    let strValue = String(value);
    if(!(Boolean(strValue))){
        return document.querySelector('.message').innerText = 'Please enter email'
    }
};

function sendEmailToDB(email){
    fetch(`${workURL}page/register-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email})
    }).then(res => res.json()).then(data => {
        if(data.status === 'success'){
            alert('Your address email saved 😊');
            location.assign('/home')
        }else{
            alert('This email existe before try other ')
        }
    }).catch(err => { console.log(err)});
}