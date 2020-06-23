async function getData(url) {
    const response = await fetch(url, { 
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
    }); 
   return response.json();
   }
   
   getData('/routeboards') .then(data => { console.log(data);
   
   let datas = Object.keys(data)
   console.log(data[0].name);
   document.getElementsByClassName('name')[0].innerHTML = data[0].name
   document.getElementsByClassName('points')[0].innerHTML = data[0].points
   for(let i=1; i<data.length; i++){
        let x = document.getElementById('card')
        let clone = x.cloneNode(true)
               document.getElementById('leaderboard').appendChild(clone)
   
    let a = document.getElementsByClassName('name')[i]
    a.innerHTML = data[i].name
    let b = document.getElementsByClassName('points')[i]
    b.innerHTML = data[i].points
    console.log(a);
   }
    });