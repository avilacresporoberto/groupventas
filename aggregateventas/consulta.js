
  db.ventas.aggregate([
    /*En este $match selecciono los clientes que NO sean grandes clientes*/ 
    { $match: { "gran_cliente": false} },
    /* Con el $group agrupo por producto, fecha y creo IVA y PVP */
    {$group: {

        _id:{
            producto: "$producto",
            fecha: "$fecha_venta"
        },

        IVA:{ $multiply: ["$precio_de_venta",0.21]},
        PVP:{ $sum: ["$precio_de_venta","$IVA"]},
        
      
      }},
/*Creo un $project para tomar los datos que queremos y creo nuevos campos con operaciones*/
         {$project:{
      Producto: "$producto",
      PrecioSinIva: "$precio_de_venta",
      PVP: "$PVP",
      UnidadesVendidas: "$unidades",
      Total: {$multiply: ["$PVP","$unidades"]}
         }},
  
/* Con el $match vemos los productos en los que el total es menor que 50, el total es lo que pagará el cliente por cada producto
es decir si compra 50 lechugas el total será:50x(precio de cada lechuga)*/

         { $match: { $expr: { $lt: [ "$Total" , 50 ] } }},
         { $sort: { Total: -1 } }
 ])

 