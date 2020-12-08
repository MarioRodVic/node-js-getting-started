var request = require("request");
const email = require("./enviarEmail.js");

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
  
  var setIntervalId = setInterval(prueba, 10000);