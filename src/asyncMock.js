const productos = [
    {
        id: "1",
        nombre: "Conjunto Venus",
        precio: 5000,
        categoria: "conjuntos",
        img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/268/357/products/img_2358-21-d41f5e9af5a801cf3116744769131966-1024-1024.webp",
        stock: 30,
        descripcion: "Conjunto armado",
        idCat: "1"
    },
   {
    id: "2",
        nombre: "Conjunto Isabel ",
        precio: 4500,
        categoria: "conjuntos",
        img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/268/357/products/dsc_1526-21-c88a2c2aa56aa51ee516744798834347-1024-1024.webp",
        stock: 20,
        descripcion: "Conjunto sin relleno",
        idCat: "1"
   },
   {
    id: "3",
        nombre: "Conjunto Deluxe",
        precio: 6000,
        categoria: "conjuntos",
        img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/268/357/products/img_2421-21-643c19e7635c139bd116744796930827-1024-1024.webp",
        stock: 25,
        descripcion: "Conjunto top entero",
        idCat: "1"
   },
   {
    id: "4",
        nombre: "Bodie Jazmin blanco",
        precio: 5000,
        categoria: "bodies",
        img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/268/357/products/dsc_16491-22e3479e8f6a5ade9f16741357171913-1024-1024.webp",
        stock: 15,
        descripcion: "Bodies",
        idCat: "2"
   },
   {
    id: "5",
        nombre: "Bodie Anastasia negro",
        precio: 5500,
        categoria: "bodies",
        img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/268/357/products/dsc_1409-21-810095842d820351f216741356343321-1024-1024.webp",
        stock: 20,
        descripcion: "Bodies",
        idCat: "2"
   },
   {
    id: "6",
        nombre: "Bodie Encaje rojo",
        precio: 5500,
        categoria: "bodies",
        img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/268/357/products/dsc_1079-21-68113d456438c0788616741359597302-1024-1024.webp",
        stock: 12,
        descripcion: "Bodies",
        idCat: "2"
   },
   {
    id: "7",
        nombre: "Less Camila",
        precio: 1500,
        categoria: "bombacha",
        img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/268/357/products/cola-less-2-tiras-microfibra-print1-cbb98b54c5ad2ab28c16452164832943-1024-1024.webp",
        stock: 5,
        descripcion: "Bombacha",
        idCat: "3"
   },
   {
    id: "8",
        nombre: "Less Lina",
        precio: 1200,
        categoria: "bombacha",
        img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/268/357/products/img_4693-21-2b261bd27c3df0f13416735367241335-1024-1024.webp",
        stock: 10,
        descripcion: "Bombacha",
        idCat:"3"
   },
   {
    id: "9",
        nombre: "Less Agatha",
        precio: 1350,
        categoria: "bombacha",
        img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/268/357/products/img_63161-23521f140f1d37aa0916746583597280-1024-1024.webp",
        stock: 12,
        descripcion: "Bombacha",
        idCat:"3"
   },
   
]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos)
        },700)
    })
}

export const getProductoById = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 700);
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
         setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
         }, 100);
        
    })
}
