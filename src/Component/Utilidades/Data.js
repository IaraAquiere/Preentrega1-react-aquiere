const productos = [
    {
      id: "ajacs4926", 
      nombre: "CINTO PERLAS STRASS IMPORTADO", 
      description: "Talle unico", 
      precio: 24500,  
      stock: 3, 
      categoria:"accesorios",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/dbde7e73-a9ca-4db0-8db2-b4d31adcf85d1-c79b6e837d22366ff316328333484094-480-0.webp"
    },
    {
      id: "ajacs4937", 
      nombre: "CARTERA BAG SILVER CROC IMPORTADA", 
      description: "", 
      precio: 24500,  
      stock: 2, 
      categoria:"accesorios",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_58511-4fe3231324d2d29eea16821089798202-480-0.webp"
    },
    {
      id: "ajacs4948", 
      nombre: "CINTO DIAMOND STRASS IMPORTADO", 
      description: "", 
      precio: 22500,  
      stock: 5, 
      categoria:"accesorios",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/537c323b-7edd-4fbf-90d8-0367e3076dc51-01e55ee790ee1292d016631695178282-480-0.webp"
    },
    {
      id: "ajacs4950", 
      nombre: "CINTO BELT A METAL IMPORTADO", 
      description: "", 
      precio: 24500,  
      stock: 3, 
      categoria:"accesorios",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_58951-efd153a5f9169e819816956685382711-480-0.webp"
    },
    {
      id: "axax1243", 
      nombre: "VESTIDO METAL CHAPA IMPORTADO (ELASTIZADO)", 
      description: "Talle unico", 
      precio: 56500,  
      stock: 2, 
      categoria:"vestidos",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_8598-5f65dfc1ef045afb4317000618703132-480-0.webp"
    },
    {
      id: "axax1254", 
      nombre: "VESTIDO CUT STRASS MANGA LARGA IMPORTADO", 
      description: "Talle unico", 
      precio: 64500,  
      stock: 4, 
      categoria:"vestidos",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_90641-91c5f044efead944d116854047905435-480-0.webp"
    },
    {
      id: "axax1265", 
      nombre: "VESTIDO DOLL GLITTER AQUA IMPORTADO", 
      description: "Talle unico", 
      precio: 74500,  
      stock: 3, 
      categoria:"vestidos",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/whatsapp-image-2023-07-14-at-15-04-371-1d038e36de63760d1d16893683462606-480-0.webp"
    },
    {
      id: "axax1276", 
      nombre: "VESTIDO CUT STRASS XL IMPORTADO", 
      description: "Talle unico", 
      precio: 78500,  
      stock: 4, 
      categoria:"vestidos",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/bac28cb5-af7c-4278-a91b-6b473ba0084b1-0be8039c54ae9db52f16784704587860-480-0.webp"
    },
    {
      id: "gnrl7390", 
      nombre: "CORSET ARIANA IMPORTADO (PUSH UP)", 
      description: "Talle unico", 
      precio: 28500,  
      stock: 4, 
      categoria:"tops",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_12061-77d95629f427eee66f16886030225205-480-0.webp"
    },
    {
      id: "gnrl7302", 
      nombre: "REMERA CROP CEBRA CUELLO BOTE IMPORTADA", 
      description: "Talle unico", 
      precio: 26500,  
      stock: 4, 
      categoria:"tops",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/tezza-80431-96a2d6f886b7d52dbd16866024441812-480-0.webp"
    },
    {
      id: "gnrl7359", 
      nombre: "BRALETTE SATEN PUSH UP IMPORTADO", 
      description: "Talle unico", 
      precio: 18500,  
      stock: 2, 
      categoria:"tops",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_7110-fb3e77a273effacbb316978974243904-480-0.webp"
    },
    {
      id: "gnrl7342", 
      nombre: "CORSET BARBIE SATEN IMPORTADO", 
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