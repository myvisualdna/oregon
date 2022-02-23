import React from 'react';
import Head from 'next/head';
import Navigation from './navigation';

interface Props {
    children: JSX.Element | JSX.Element[]
}

//Creamos el container que vamos a usar en CADA PAGINA. Sera como un template
//Todas las pages son este container con un contenido personalizado
const Container = ({children}: Props) => {
    return (
        <div>
            {/*Head contiene el style, en este caso un theme de bootswatch */}
            <Head>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
            </Head>
            {/*Importamos el componente navigation que el header presente en todas las paginas */}
            <Navigation />

            {/*El contenido de la pagina sera lo que llegue como props. En cada pagina ese contenido debe estar dentro de <Contaniner> */}
            <div>
                {children}
            </div>
        </div>
    )
}

export default Container;
