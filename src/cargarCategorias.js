/*** importando categorias para pantalla de inicio */
import dataCategorias from './datos/categorias';
const {categorias} = dataCategorias;

/**Dom categorias */
const contenedorCategorias = document.getElementById('categorias');


/**crear categorias */


/***iterando sobre el objeto importado categorias */
categorias.forEach((categoria)=>{

    /***creando elemento  */
    const nuevaCategoria= document.createElement('a');
    const plantilla = `<img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
						<div class="categoria__datos">
							<p class="categoria__nombre">${categoria.nombre}</p>
							<p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
						</div>`;

     /***agregando al nuevo elemento */                   
    nuevaCategoria.innerHTML= plantilla;


    /***agregando atributos extras al elemento  */
    nuevaCategoria.classList.add('categoria');
    nuevaCategoria.href='#';
    nuevaCategoria.dataset.categoria = categoria.id;
    
    /***agregando la nueva categoria al DOM */
    contenedorCategorias.append(nuevaCategoria);
})

