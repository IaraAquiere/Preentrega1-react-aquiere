const productos = [
    {
      id: "ajacs4926", 
      nombre: "cinto perlas ", 
      description: "Talle unico, detalle en hebilla de perlas y strass", 
      precio: 24500,  
      stock: 3, 
      categoria:"accesorios",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/dbde7e73-a9ca-4db0-8db2-b4d31adcf85d1-c79b6e837d22366ff316328333484094-480-0.webp"
    },
    {
      id: "ajacs4937", 
      nombre: "bag croc", 
      description: "mini bag plateada, importada, con correa corta", 
      precio: 24500,  
      stock: 2, 
      categoria:"accesorios",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_58511-4fe3231324d2d29eea16821089798202-480-0.webp"
    },
    {
      id: "ajacs4948", 
      nombre: "cinto diamond", 
      description: "detalle con strass, talle unico, importado", 
      precio: 22500,  
      stock: 5, 
      categoria:"accesorios",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/537c323b-7edd-4fbf-90d8-0367e3076dc51-01e55ee790ee1292d016631695178282-480-0.webp"
    },
    {
      id: "ajacs4950", 
      nombre: "cinto belt ", 
      description: "talle unico, con detalle en hevilla plateado", 
      precio: 24500,  
      stock: 3, 
      categoria:"accesorios",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_58951-efd153a5f9169e819816956685382711-480-0.webp"
    },
    {
      id: "axax1243", 
      nombre: "metal chapa (elastizado)", 
      description: "tipo metal, elastizado e importado. Color: tipo lila.", 
      precio: 56500,  
      stock: 2, 
      categoria:"vestidos",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_8598-5f65dfc1ef045afb4317000618703132-480-0.webp"
    },
    {
      id: "axax1254", 
      nombre: "cut strass manga larga", 
      description: "Talle unico, transparente, importado", 
      precio: 64500,  
      stock: 4, 
      categoria:"vestidos",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_90641-91c5f044efead944d116854047905435-480-0.webp"
    },
    {
      id: "axax1265", 
      nombre: "doll glitter aqua", 
      description: "vesido corto con bolados, importado", 
      precio: 74500,  
      stock: 3, 
      categoria:"vestidos",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/whatsapp-image-2023-07-14-at-15-04-371-1d038e36de63760d1d16893683462606-480-0.webp"
    },
    {
      id: "axax1276", 
      nombre: "cut strass xl", 
      description: "manga larga, transparente, talle unico, importado", 
      precio: 78500,  
      stock: 4, 
      categoria:"vestidos",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/bac28cb5-af7c-4278-a91b-6b473ba0084b1-0be8039c54ae9db52f16784704587860-480-0.webp"
    },
    {
      id: "gnrl7390", 
      nombre: "corset ariana (push up)", 
      description: "Talle unico, push up, importado. Color: negro", 
      precio: 28500,  
      stock: 4, 
      categoria:"tops",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_12061-77d95629f427eee66f16886030225205-480-0.webp"
    },
    {
      id: "gnrl7302", 
      nombre: "crop cebra", 
      description: "Talle unico, mangas largas. Color: negro, con lineas en blanco", 
      precio: 26500,  
      stock: 4, 
      categoria:"tops",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/tezza-80431-96a2d6f886b7d52dbd16866024441812-480-0.webp"
    },
    {
      id: "gnrl7359", 
      nombre: "croptop Mery", 
      description: "con cordon a los lados, push up, tale unico. Color: blanco", 
      precio: 32500,  
      stock: 4, 
      categoria:"tops",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/1f8f3a66-ea95-49d1-9f53-dad8228c35d01-0acdd95b50590e75a816723375123832-640-0.webp"
    },
    {
      id: "gnrl7342", 
      nombre: "corset barbie ", 
      description: "Talle unico, de saten importado", 
      precio: 8500,  
      stock: 2, 
      categoria:"tops",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/saveiro40321-9e5a8b2fc98073243016924957711287-480-0.webp"
    },
    {
      id: "gmrp9467", 
      nombre: "short Rachel", 
      description: "con cinturon tiro alto.Color: negro", 
      precio: 18500,  
      stock: 3, 
      categoria:"shorts",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/8c58a024-d28f-4ae6-9c5a-d9d36c261a991-479c0a942a9770292f16631693579317-640-0.webp"
    },
    {
        id: "gmrp1378", 
        nombre: "short rachel", 
        description: "con cinturon tiro alto. Color: blanco", 
        precio: 24500,  
        stock: 1, 
        categoria:"shorts",
        imagen: "https://acdn.mitiendanube.com/stores/173/130/products/1b9a202b-8bf3-49d1-bbe1-bd0ad25aae311-211a1989804efa554616633566392553-640-0.webp"
    },
    {
        id: "gmrp4679", 
        nombre: "short fiji", 
        description: "Talle unico, tiro alto. Color: negro", 
        precio: 16500,  
        stock: 4, 
        categoria:"shorts",
        imagen: "https://acdn.mitiendanube.com/stores/173/130/products/a8c63f9f-ea87-4b62-b8e6-5532370681e91-699950803c91b35f4d16638749693912-640-0.webp"
    },
    {
      id: "gmrp2459", 
      nombre: "short Rachel sastrero", 
      description: "Tunico talle, importado, tiro alto. Color: rojo", 
      precio: 24500,  
      stock: 5, 
      categoria:"shorts",
      imagen: "https://acdn.mitiendanube.com/stores/173/130/products/img_58191-7199accc264ec4105316956514780276-640-0.webp"
  },
  ];

  const condicion = true

  const AgarrarProductos = new Promise ((resolve, reject) =>{
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  } );

  export default AgarrarProductos