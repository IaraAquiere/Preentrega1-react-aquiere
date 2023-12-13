const productos = [
    {
      id: "axax1245", 
      nombre: "PANT SASTRERO SATEN GLITTER", 
      description: "Talle: S, M, L, consultar", 
      precio: 48.500, 
      stock: 5, 
      imagen:"https://acdn.mitiendanube.com/stores/173/130/products/img_9964-e0bf3d9d06935e153e17024829234896-480-0.webp"
    },
    {
      id: "axax1243", 
      nombre: "VESTIDO METAL CHAPA IMPORTADO (ELASTIZADO)", 
      description: "Talle unico", 
      precio: 56.500, 
      stock: 2, 
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_8598-5f65dfc1ef045afb4317000618703132-480-0.webp"
    },
  ];

  const condicion = true

  const AgarrarProductos = new Promise ((resolve, reject) =>{
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  } );

  export default AgarrarProductos