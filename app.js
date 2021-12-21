const express = require('express');
const path = require('path');
const app = express();


app.get('/Mercado-Liebre', (req,res) =>{  //get solicita datos
    res.send("Hello consumers");  // Permite enviar texto o codigo HTML
});

app.get('/', (req,res) =>{        
    res.sendFile((__dirname + '/views/home.html')); // Permite enviar un archivo HTML
        
    
});  
app.get('/login.html', (req,res) =>{        
    res.sendFile((__dirname + '/views/login.html')); // Permite enviar un archivo HTML
});                                   

app.get('/register.html', (req,res) =>{        
    res.sendFile((__dirname + '/views/register.html')); // Permite enviar un archivo HTML
});

app.use(express.static(path.join(__dirname,'./public'))); //__dirname ruta donde estoy parado


app.listen(3002, () => {
    console.log("Servidor corriendo");
});



