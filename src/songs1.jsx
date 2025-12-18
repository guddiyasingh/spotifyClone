console.log('Lets write javascript');

async function getSongs() {

    let a = await fetch('https://www.theaudiodb.com/api/v1/json/123/search.php?s=coldplay');
    let response = await a.json();
    console.log(response);
    let div = document.createElement('div')
    div.innerHTML =response;
   let tds = div.getElementsByTagName('td')
    console.log(tds);
    }
 
getSongs()