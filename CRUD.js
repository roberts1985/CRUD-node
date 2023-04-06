const fs = require('fs')

// Ejercicio 1
const readFile = (fileName) => {
    fs.readFile(fileName,'utf-8',(err,contenido)=>{
        if(err){
            throw err
        }
        let obj = JSON.parse(contenido)
        obj["koders"].forEach(element => {
            arrayKoders.push(element)
        });
        //console.log(arrayKoders)
    })
}

//Ejercio 2
const addKoder = (fileName,koder) => {
    fs.readFile(fileName,'utf-8',(err,contenido)=>{
        if(err){
            throw err
        }
        let obj = JSON.parse(contenido)
        obj.koders.push(koder)
        fs.writeFile(fileName,JSON.stringify(obj,null,"  "),(err)=>{
            if(err){
                throw err
            }
            console.log('El archivo ha sido actualizado')
        })
    })
}

/**
 * 3. Crear una funcion que permita eliminar a un koder por su id y 
 * guardar el archivo con el cambio realizado
 */

const deleteKoder = (fileName,idKoder) => {
    fs.readFile(fileName,'utf-8',(err, contenido) => {
        if(err){
            throw err
        }
        let obj = JSON.parse(contenido)
        //console.log(obj)
        let filterObj = obj.koders.filter((item)=>item.id !== idKoder)
        //let obje = {koders:filterObj}
        fs.writeFile(fileName,JSON.stringify({koders:filterObj},null,"  "),(err)=>{
            if(err){
                throw err
            }
            console.log('El archivo ha sido actualizado')
        })     
    })
}

//Crear una función que permita obtener a los koders que sean mayores de 25 años
const getKoders = (filename,edad) => {
    fs.readFile(filename,'utf-8',(err, contenido)=>{
        if(err) throw err

        let obj = JSON.parse(contenido)
        let filterObj = obj.koders.filter((item)=>parseInt(item.Age)>edad)
        console.log(filterObj)
    })
}

//Crear una función que permita editar un koder por su id y guarde el archivo con el cambio realizado
const editKoder = (fileName,idKoder, nameKoder, lastNameKoder, ageKoder, favoriteFoodKoder) => {
    fs.readFile(fileName,'utf-8',(err,contenido)=>{
        if(err) throw err

        let obj = JSON.parse(contenido)

        for(let i = 0; i < obj.koders.length; i++){
            if(obj.koders[i].id === idKoder) {
                obj.koders[i].name = nameKoder
                obj.koders[i].lastName = lastNameKoder
                obj.koders[i].Age = ageKoder
                obj.koders[i].favoriteFood = favoriteFoodKoder
                break
            }
        }
        //console.log(obj)
        fs.writeFile(fileName,JSON.stringify(obj,null,"  "),(err)=>{
            if(err){
                throw err
            }
            console.log('El archivo se ha actualizado correctamente...')
        })
    })
}

//6. Crear una función que permita recibir un id utilizando process.argv y ...
const getKoderById = (fileName) => {
    let idKoder = process.argv[2]

    fs.readFile(fileName,'utf-8',(err,contenido)=>{
        if(err) throw err
        let obj = JSON.parse(contenido)
        let koder = obj.koders.filter(item => item.id === parseInt(idKoder))
        console.log(koder)
    })
} 

getKoderById('koder.json')