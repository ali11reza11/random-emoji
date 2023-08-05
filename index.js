const btnel = document.querySelector(".btn");

const emojiname = document.querySelector(".emoji-name");

let emojis = [];

console.log(emojis);

async function getemoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=806f118515063c0e7a6c505ce860f0908524fd76");

    data = await response.json();

    for( let i = 0; i < 1001; i++){
        emojis.push({
            emojicode: data[i].character,
            emojiname: data[i].unicodeName,
        })
    }
}
getemoji()

btnel.addEventListener("click" , ()=>{
    let randomnum = Math.floor(Math.random() * emojis.length);
    btnel.innerText = emojis[randomnum].emojicode;
    emojiname.innerText = emojis[randomnum].emojiname;
})