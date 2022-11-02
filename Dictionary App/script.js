const resultDiv = document.querySelector('.result');
const wordEle = document.querySelector('#word');
const phonetics = document.querySelector('.phonetics');
const audio = document.querySelector('audio');
const wordMeaning = document.querySelector('.word-definition');
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'; 


const handle = async (e) =>{
    if(e.keyCode == 13){
        const word = e.target.value;
        // make a request to api
        const result = await fetch(url + word);
        const data = await result.json();
        resultDiv.style.display = 'block';

        wordEle.innerText = data[0].word;
        phonetics.innerText = data[0].phonetics[0].text;
        audio.src = data[0].phonetics[0].audio;
        wordMeaning.innerText = data[0].meanings[0].definitions[0].definition;
        const synonyms = data[0].meanings[0].definitions[0].synonyms;
        let synonymsData = '';
        for(let i=0; i < synonyms.length; i++){
            synonymsData += `<p class= 'pills'>${synonyms[i]}</p>`;
        }
        document.querySelector('.synonyms').innerHTML = synonymsData;

        }
}


