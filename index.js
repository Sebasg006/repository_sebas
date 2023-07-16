const apiKey = '6vCVZIJJGHYuILi2nqDNLgTx4uw0IkOS';

const botonBuscar = document.getElementById("btn-buscar");
  botonBuscar.addEventListener("click", function() {
  const buscar = document.getElementById("buscar").value;
  const url = `https://api.giphy.com/v1/gifs/search?q=${buscar}&api_key=${apiKey}&limit=40`;


fetch(url)
    .then(response => response.json())
    .then(data => {
        const gifs = data.data;
        const gisftsHTML = gifs.map(gif =>{
            return `
            <div class="gif">
                <img src="${gif.images.fixed_height.url}">
                
            </div>
            `;
         }).join("");
         document.getElementById("gifs").innerHTML=gisftsHTML;
         })
          .catch(error=> console.error(error));
        });