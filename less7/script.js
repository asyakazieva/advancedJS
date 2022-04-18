// const moment = require('moment'); //подключение встроенных модулей

// console.log(moment());

// const a = require('./func');
// console.log(a(10));

const fs = require('fs');
const { fstat } = require('fs');
const http = require('http')

//const users=[{"name":'Ann', "age":23}];

// fs.writeFile('db.json', JSON.stringify(users), (err)=>{
//     if (err) console.log(err);
// });

// fs.readFile('db.json', 'utf-8', (err, data)=>{
//     if (err) console.log(err);
//     else{
//         const usersList = JSON.parse(data);
//         console.log(usersList);
//         usersList.push({name: 'Vasya', age: 23});
//         console.log(usersList)

//         fs.writeFile('db.json', JSON.stringify(usersList), (err)=>{
//             if (err) console.log(err);
//         });
//     }
// })

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
       // res.write('Hello wooooooorld');
        return res.end('Hello from Node.js');
    }

    if (req.url === '/api/users') { //сами запросы мы определям по урлам но что с ними делать это исходя из того какому методу будет соответствовать запрос
        if (req.method === 'GET'){
            fs.readFile('db.json', 'utf-8', (err, data)=>{
                if (err) res.end(err);
                else {
                    res.end(data);
                }
            });    
        }

        // if (req.method === 'POST'){

        // }
        // if (req.method === 'DELETE'){

        // }
        // if (req.method === 'PATCH'){
            
        // }
    }
});

server.listen(5555);