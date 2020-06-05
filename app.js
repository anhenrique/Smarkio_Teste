const mysql = require('mysql2/promise');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const {get} = require("axios")

async function main(){
    const con = await mysql.createConnection({
        host: 'localhost',
        user: 'andreguedes',
        password: 'Gu3d3s123@',
        database: 'smarkiotest'
    }).then(()=>{console.log('conectado')})
    
    rl.question('Qual seu Ceps?'), (answer) => {
        get('http://cep.bldstools.com/')
        
    }
    
}

main()

//
