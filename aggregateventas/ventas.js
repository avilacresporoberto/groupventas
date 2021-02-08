db.ventas.drop()
db.ventas.insertMany([

    { _id : 1,
    producto: "Lechuga",
    precio_de_coste: 0.20,
    precio_de_venta: 0.80,
    fecha_venta: ISODate("2020-04-01T08:00:00Z"),
    unidades: 1500,
    cliente: "Mercadona",
    empleado_vendedor: "Francisco Romero",
    gran_cliente: true
  },
  {
    _id : 2,
    producto: "Tomate",
    precio_de_coste: 0.25,
    precio_de_venta: 0.75,
    fecha_venta: ISODate("2020-05-11T08:00:00Z"),
    unidades: 2500,
    cliente: "Mercadona",
    empleado_vendedor: "Francisco Romero",
    gran_cliente: true
  },
  {
    _id : 3,
    producto: "Pepino",
    precio_de_coste: 0.75,
    precio_de_venta: 1.50,
    fecha_venta: ISODate("2020-03-12T08:00:00Z"),
    unidades: 500,
    cliente: "Mercadona",
    empleado_vendedor: "Francisco Romero",
    gran_cliente: true
  },

  {
    _id : 4,
    producto: "Cebolla",
    precio_de_coste: 0.50,
    precio_de_venta: 1.20,
    fecha_venta: ISODate("2020-08-10T08:00:00Z"),
    unidades: 150,
    cliente: "Fruteria Pepe",
    empleado_vendedor: "Francisco Romero",
    gran_cliente: false
  },
  {
    _id: 5,
    producto: "Tomate",
    precio_de_coste: 0.25,
    precio_de_venta: 0.75,
    fecha_venta: ISODate("2020-03-01T08:00:00Z"),
    unidades: 50,
    cliente: "Fruteria Pepe",
    empleado_vendedor: "Alvaro Negredo",
    gran_cliente: false
  },
  {
    id : 6,
    producto: "Lechuga",
    precio_de_coste: 0.20,
    precio_de_venta: 0.80,
    fecha_venta: ISODate("2020-04-11T08:00:00Z"),
    unidades: 50,
    cliente: "Fruteria Pepe",
    empleado_vendedor: "Alvaro Negredo",
    gran_cliente: false
  },
  {
    _id : 7,
    producto: "Pepino",
    precio_de_coste: 0.75,
    precio_de_venta: 1.50,
    fecha_venta: ISODate("2020-03-12T08:00:00Z"),
    unidades: 25,
    cliente: "Fruteria Pepe",
    empleado_vendedor: "Alvaro Negredo",
    gran_cliente: false
  },
  {
    _id : 8,
    producto: "Cebolla",
    precio_de_coste: 0.50,
    precio_de_venta: 1.20,
    fecha_venta: ISODate("2020-05-10T08:00:00Z"),
    unidades: 45,
    cliente: "Fruteria Pepe",
    empleado_vendedor: "Alvaro Negredo",
    gran_cliente: false
  }
])