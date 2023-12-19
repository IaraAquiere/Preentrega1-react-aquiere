const productos = [
    {
      id: "ajacs4926", 
      nombre: "cinto perlas strass", 
      description: "Talle unico", 
      precio: 24500,  
      stock: 3, 
      categoria:"accesorios",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/dbde7e73-a9ca-4db0-8db2-b4d31adcf85d1-c79b6e837d22366ff316328333484094-480-0.webp"
    },
    {
      id: "ajacs4937", 
      nombre: "bag silver croc", 
      description: "", 
      precio: 24500,  
      stock: 2, 
      categoria:"accesorios",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_58511-4fe3231324d2d29eea16821089798202-480-0.webp"
    },
    {
      id: "ajacs4948", 
      nombre: "cinto diamond strass", 
      description: "", 
      precio: 22500,  
      stock: 5, 
      categoria:"accesorios",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/537c323b-7edd-4fbf-90d8-0367e3076dc51-01e55ee790ee1292d016631695178282-480-0.webp"
    },
    {
      id: "ajacs4950", 
      nombre: "cinto belt a metal", 
      description: "", 
      precio: 24500,  
      stock: 3, 
      categoria:"accesorios",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_58951-efd153a5f9169e819816956685382711-480-0.webp"
    },
    {
      id: "axax1243", 
      nombre: "metal chapa (elastizado)", 
      description: "Talle unico", 
      precio: 56500,  
      stock: 2, 
      categoria:"vestidos",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_8598-5f65dfc1ef045afb4317000618703132-480-0.webp"
    },
    {
      id: "axax1254", 
      nombre: "cut strass manga larga", 
      description: "Talle unico", 
      precio: 64500,  
      stock: 4, 
      categoria:"vestidos",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_90641-91c5f044efead944d116854047905435-480-0.webp"
    },
    {
      id: "axax1265", 
      nombre: "doll glitter aqua", 
      description: "Talle unico", 
      precio: 74500,  
      stock: 3, 
      categoria:"vestidos",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/whatsapp-image-2023-07-14-at-15-04-371-1d038e36de63760d1d16893683462606-480-0.webp"
    },
    {
      id: "axax1276", 
      nombre: "cut strass xl", 
      description: "Talle unico", 
      precio: 78500,  
      stock: 4, 
      categoria:"vestidos",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/bac28cb5-af7c-4278-a91b-6b473ba0084b1-0be8039c54ae9db52f16784704587860-480-0.webp"
    },
    {
      id: "gnrl7390", 
      nombre: "corset ariana (push up)", 
      description: "Talle unico", 
      precio: 28500,  
      stock: 4, 
      categoria:"tops",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_12061-77d95629f427eee66f16886030225205-480-0.webp"
    },
    {
      id: "gnrl7302", 
      nombre: "crop cebra cuello ", 
      description: "Talle unico", 
      precio: 26500,  
      stock: 4, 
      categoria:"tops",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/tezza-80431-96a2d6f886b7d52dbd16866024441812-480-0.webp"
    },
    {
      id: "gnrl7359", 
      nombre: "brallette saten push up", 
      description: "Talle unico", 
      precio: 18500,  
      stock: 2, 
      categoria:"tops",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_7110-fb3e77a273effacbb316978974243904-480-0.webp"
    },
    {
      id: "gnrl7342", 
      nombre: "corset barbie saten", 
      description: "Talle unico", 
      precio: 8500,  
      stock: 2, 
      categoria:"tops",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/saveiro40321-9e5a8b2fc98073243016924957711287-480-0.webp"
    },
  ];

  const condicion = true

  const AgarrarProductos = new Promise ((resolve, reject) =>{
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  } );

  export default AgarrarProductos