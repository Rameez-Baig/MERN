// const name = 'rameez';
// console.log(name);



// const greet = (name) =>{
//     console.log(`hello, ${name}`);
// }
// greet('rameez');
// greet('pranika');




// Window object - It is a global object -----> Till Line 26 

//console.log(global);
// setTimeout(() => {                // global is not necessarily should be written
//     console.log('in the time out');
//     clearInterval(int);
// }, 3000);

// const int = setInterval(() =>{    // Runs the function for every 1 sec  
//     console.log('in the ');
// },1000);

//console.log(__dirname);  // to get current dir name




// Modules and Requre -----> TIll Line 
// User require('./your another file name'); for importing another file js code into this




// File system ----> TIll Line 80 

//const fs = require('fs');
// // reading files 
// fs.readFile('',(err,data) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// // writing files
// fs.writeFile('','Hello world', () =>{    // replaces everything with hello world in the txt file of the directory
//     console.log('file was written');
// });

// //directories
// if(!fs.existsSync('')){  //give folder name '' inside this
//     fs.mkdir('',(err) =>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// }
// else{
//     fs.rmdir('', (err) =>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     });
// }

// // deleting files 
// if(fs.existsSync('')){
//     fs.unlink('', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('file deleted');
//     });
// }




// Streams - we can use the data befire it has finished loading  ----> TIll Line 101

// // read,write streams 
// const fs = require('fs');

// const readStream = fs.createReadStream('');
// const writeStream = fs.createWriteStream('');

// readStream.on('data', (chunk) =>{
//     console.log('-------New Chunk------');
//     console.log(chunk);
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write(chunk);
// });

// piping
//readStream.pipe(writeStream); // instead of above one u can do it it does the same thing it writes into the file which it reads first




                    // -----------Net Ninja Video 2 -------------