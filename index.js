const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  function prueba(){
    request({
        uri: "https://www.amazon.es/dp/B08H93ZRLL/ref=twister_B08NQWFZ7L?_encoding=UTF8&th=1",
      }, function(error, response, body) {
        //console.log(body);
        if(body.includes("No disponible.")){
          
          console.log('no disponible');
          email.enviarEmail();
        }else if (body.includes("Vendido y enviado por Amazon")){
            console.log('disponible');
            email.enviarEmail();
            clearInterval(setIntervalId);
            
        }
      });
}


function intervalFunc() {
    console.log('Cant stop me now!');
  }
  
  var setIntervalId = setInterval(prueba, 120000);
