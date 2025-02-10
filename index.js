const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result=document.getElementById("result");
const sound=document.getElementById("sound");
const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    let word = document.getElementById("word").value;
    // console.log(word);
    fetch(`${url}${word}`)
    .then((response)=>response.json())
    .then((data)=> {
        console.log(data);
        result.innerHTML = `
        <div class="def">
            <h3>${word}</h3>
            <button onclick="playSound()">
                <i class="fa-solid fa-volume-high fa-2x"></i>
            </button>
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetic}</p>
        </div>
        <p class="meaning">${data[0].meanings[0].definitions[0].definition}</p>
        <p class="example">${data[0].meanings[0].definitions[0].example}</p>`;
        sound.setAttribute("src",`${data[0].phonetics[0].audio}`);
        // console.log(sound);
    });
});

function playSound(){
    sound.play();
}
