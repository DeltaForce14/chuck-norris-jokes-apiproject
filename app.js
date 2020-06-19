// UI Button Event Listener

const getJokesBtnUI = document.querySelector('.get-jokes');
getJokesBtnUI.addEventListener('click', getJokes);

function getJokes(event){
    //grabbing input field
    const jokesInputNrUI = document.getElementById('number').value;
    
    //xhr 
    const xhr = new XMLHttpRequest();

    //open, fetch random jokes API, adding number of jokes to the end viz documentation http://www.icndb.com/api/
    xhr.open('GET', `http://api.icndb.com/jokes/random/${jokesInputNrUI}`, true);

    //onload
    xhr.onload = function(){
        if(this.status === 200){
            //getting input from API
            const jokes = JSON.parse(this.responseText);

            let output = '';

            // we are using jokes.value as that is an array. jokes is an object. 
            if(jokes.type === 'success'){
                jokes.value.forEach(function(joke){
                    output += `
                    <li>${joke.joke}</li>
                    `;
                })
            } else {
                output += `<li>Something went wrong... ;(</li>`
            }
            
            //output field
            const outputField = document.querySelector('.jokes');
            outputField.innerHTML = output;
        }
    }

    // send
    xhr.send();

    event.preventDefault();
};