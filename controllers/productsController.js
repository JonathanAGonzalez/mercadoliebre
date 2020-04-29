const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname,'../data/productsDataBase.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n =>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

let controller = {
    index: function(req,res){
        let producto = products.find(function(element){
            return element.id == req.params.id
        });
        res.render('detail',{
        title: 'Mercado Liebre /'+ producto.name,
        productos: producto,
        aMiles: toThousand
}
        )
    }
}

module.exports =controller;