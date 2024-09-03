import data from './fotos';
/**importando base de datos fotos */


/**  descomponiendo arreglo en variable */
const { fotos } = data;
/***exportando categorias */
export default {
	categorias: [                       /*** se importa la base de datos para contar la length de las imagenes */
		{ id: 'america', nombre: 'America', numeroFotos: fotos['america'].length, imagenPortada: './img/america.jpg' },
		{ id: 'europa', nombre: 'Europa', numeroFotos: fotos['europa'].length, imagenPortada: './img/europa.jpg' },
		{ id: 'africa', nombre: 'África', numeroFotos: fotos['africa'].length, imagenPortada: './img/africa.jpg' },
		{ id: 'asia', nombre: 'Asia', numeroFotos: fotos['asia'].length, imagenPortada: './img/asia.jpg' },
		{ id: 'oceania', nombre: 'Oceania', numeroFotos: fotos['oceania'].length, imagenPortada: './img/oceania.jpg' },
		{
			id: 'antartida',
			nombre: 'Antártida',
			numeroFotos: fotos['antartida'].length,
			imagenPortada: './img/antartida.jpg',
		},
	],
};