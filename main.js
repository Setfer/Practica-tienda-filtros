const productos = [
  {
    nombre: 'adidas Originals Gazelle Indoor',
    marca: 'adidas',
    precio: '120',
    img: 'https://media.footdistrict.com/width/840/src/catalog/product/2/9/290_4066748954490/--/zapatillas-adidas-originals-womens-gazelle-indoor-hq8717-0.jpg'
  },
  {
    nombre: 'ASICS Skyhand OG',
    marca: 'asics',
    precio: '110',
    img: 'https://media.footdistrict.com/width/840/src/catalog/product/1/0/107_4550457735483/--/zapatillas-asics-skyhand-og-1203a452-500-4.jpg'
  },
  {
    nombre: 'Nike Womens Dunk Low Next Nature',
    marca: 'nike',
    precio: '120',
    img: 'https://media.footdistrict.com/width/840/src/catalog/product/2/_/2_197596863352/--/zapatillas-nike-womens-dunk-low-next-nature-fz6770-001-0.jpg'
  },
  {
    nombre: 'Puma Speedcat OG',
    marca: 'puma',
    precio: '110',
    img: 'https://media.footdistrict.com/width/840/src/catalog/product/2/0/20_4067979394024/--/zapatillas-puma-speedcat-og-398846-02-0.jpg'
  },
  {
    nombre: 'adidas Originals x DIME Stan Smith',
    marca: 'adidas',
    precio: '150',
    img: 'https://media.footdistrict.com/width/840/src/catalog/product/1/9/19_4067898758594/--/zapatillas-adidas-originals-x-dime-stan-smith-ig2044-0.jpg'
  },
  {
    nombre: 'Nike x HUF Air Max 1 Anthracite Pear',
    marca: 'nike',
    precio: '160',
    img: 'https://media.footdistrict.com/width/840/src/catalog/product/a/u/AURORA_HF3713-002_PHSRH000-3144/--/zapatillas-nike-x-huf-air-max-1-anthracite-pear-hf3713-002-0.jpg'
  },
  {
    nombre: 'ASICS x HAY Skyhand OG',
    marca: 'asics',
    precio: '100',
    img: 'https://media.footdistrict.com/width/840/src/catalog/product/7/8/78_4550457966542/--/zapatillas-asics-x-hay-skyhand-og-1203a563-700-0.jpg'
  },
  {
    nombre: 'Puma Palermo Vintage',
    marca: 'puma',
    precio: '110',
    img: 'https://media.footdistrict.com/width/840/src/catalog/product/1/0/109_4067981755806/--/zapatillas-puma-palermo-vintage-396841-09-0.jpg'
  },
  {
    nombre: 'Nike Cortez Textile',
    marca: 'nike',
    precio: '90',
    img: 'https://media.footdistrict.com/width/840/src/catalog/product/8/2/82_197599963189/--/zapatillas-nike-cortez-textile-hf0263-401-0.jpg'
  },
  {
    nombre: 'ASICS x Kengo Kuma ArchisiteLite ORU',
    marca: 'asics',
    precio: '200',
    img: 'https://media.footdistrict.com/width/840/src/catalog/product/6/0/60_4550457788472/--/zapatillas-asics-x-kengo-kuma-archisitelite-oru-1201a862-101-0.jpg'
  },
  {
    nombre: 'adidas Originals Gazelle Indoor',
    marca: 'adidas',
    precio: '120',
    img: 'https://media.footdistrict.com/width/840/src/catalog/product/j/i/JI2063_1_FOOTWEAR_Photography_Side-Lateral-Center-View_white/--/zapatillas-adidas-originals-gazelle-indoor-ji2063-0.jpg'
  },
  {
    nombre: 'adidas Originals Womens Japan VH',
    marca: 'adidas',
    precio: '140',
    img: 'https://media.footdistrict.com/width/840/src/catalog/product/i/e/IE3928_1_FOOTWEAR_Photography_Side-Lateral-Center-View_white/--/zapatillas-adidas-originals-womens-japan-vh-ie3928-0.jpg'
  },
  {
    nombre: 'Nike Womens Flyknit Haven',
    marca: 'nike',
    precio: '120',
    img: 'https://media.footdistrict.com/width/840/src/catalog/product/a/u/AURORA_FD2148-002_PHSRH000-3144/--/zapatillas-nike-womens-flyknit-haven-fd2148-002-0.jpg'
  },
  {
    nombre: 'Air Jordan 13 Retro Dune Red',
    marca: 'jordan',
    precio: '210',
    img: 'https://media.footdistrict.com/width/840/src/catalog/product/3/0/30_197593784810/--/zapatillas-air-jordan-13-retro-dune-red-dj5982-601-0.jpg'
  },
  {
    nombre: 'New Balance M1000 WA',
    marca: 'new balance',
    precio: '150',
    img: 'https://media.footdistrict.com/width/840/src/catalog/product/6/5/65_197375403045/--/zapatillas-new-balance-m1000-wa-m1000wa-0.jpg'
  }
]
//insertamos los productos en el HTML
function displayAllProducts() {
  let punteroProducto = document.querySelector('#productos')
  for (const clave in productos) {
    const producto = productos[clave]
    const productoDiv = document.createElement('div')
    productoDiv.classList.add('producto')

    productoDiv.innerHTML = `
  <img src="${producto.img}" alt="${producto.nombre}" />
            <h2>${producto.nombre}</h2>
            <p>${producto.precio} €</p>
            <p>${producto.marca}</p>
            `
    punteroProducto.appendChild(productoDiv)
  }
}
displayAllProducts()

//funcion insertar elmentos en el picker
const marcasEspeciales = new Set(['jordan', 'new balance'])

const addMarcaPicker = () => {
  const marcaPickerSelect = document.querySelector('#marca-picker')

  const marcas = new Set()
  let otrasMarcasAgregada = false

  productos.forEach((producto) => {
    if (marcasEspeciales.has(producto.marca)) {
      if (!otrasMarcasAgregada) {
        marcas.add('otras marcas')
        otrasMarcasAgregada = true
      }
    } else {
      marcas.add(producto.marca)
    }
  })

  marcas.forEach((marca) => {
    const option = document.createElement('option')
    option.value = marca
    option.innerText = marca
    marcaPickerSelect.append(option)
  })
}
addMarcaPicker()

// Función para filtrar los productos por marca
function buscarMarca(inputNombre, pickerInput) {
  return productos.filter((producto) => {
    const coincideNombre = producto.nombre.toLowerCase().includes(inputNombre);
    
    if (pickerInput === '@fff') {
      return coincideNombre;
    } else if (pickerInput === 'otras marcas') {
      return (
        marcasEspeciales.has(producto.marca.toLowerCase()) && coincideNombre
      );
    } else {
      return producto.marca.toLowerCase() === pickerInput && coincideNombre;
    }
  });
}
//Funcion para rango de precio



// Función principal para buscar productos
document
.getElementById('boton-buscar')
.addEventListener('click', buscarNombre)

function buscarNombre() {
  const inputNombre = document.getElementById('searchInput').value.toLowerCase();
  const pickerInput = document
    .getElementById('marca-picker')
    .value.toLowerCase();
  const resultadosFiltrados = buscarMarca(inputNombre, pickerInput);
  displayResults(resultadosFiltrados);
}

//funcion para mostrar los resultados
function displayResults(results) {
  const productsContainer = document.getElementById('productos')
  productsContainer.innerHTML = ''
  if (results.length === 0) {
    productsContainer.innerHTML = '<p>No se encontraron productos.</p>'
  }else {
  results.forEach((product) => {
    const productoDiv = document.createElement('div')
    productoDiv.classList.add('producto')
    productoDiv.innerHTML = `
  <img src="${product.img}" alt="${product.nombre}" />
            <h2>${product.nombre}</h2>
            <p>${product.precio} €</p>
            <p>${product.marca}</p>
            `
    productsContainer.appendChild(productoDiv)
  })
  }


}
