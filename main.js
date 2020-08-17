var searchBox = document.querySelector("#searchBox").Value;
var searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener('click', function(){
    fetch(`https://api.lyrics.ovh/suggest/${searchBox}`)
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
        for (let i = 0; i <=5; i++) {
            document.querySelector("#PurpleName"+i).innerText=data.data[i].title
            document.getElementById("artist"+i).innerText=data.data[i].title
        }

    })
    .catch(err => alert('Wrong song name!'));
})

// =====================================================

searchBtn.addEventListener('click', function(){
    fetch(`https://api.lyrics.ovh/suggest/${searchBox}`)
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
        for (let i = 0; i <=4; i++) {
            document.getElementById("lyrics-name"+i).innerHTML=data.data[i].title
            document.getElementById("author lead"+i).innerText=data.data[i].artist.name
        }
         
    })
    
})