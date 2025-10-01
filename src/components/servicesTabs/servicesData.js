import Css from '../images/css.png'
import Html from '../images/html.png'
import Js from '../images/js.png'

import React from '../images/react.png'
import GoogleScript from '../images/googleScript.png'
import Appsheet from '../images/appsheet.webp'
import Wordpress from '../images/Wordpress.png'
import Wocomerce from '../images/wocomerce.png'
import MongoDb from "../images/mongodb.png"
import Nodejs from "../images/nodejs.png"
import Mysql from '../images/mysql.png';
import Grapqhl from '../images/graphql-logo.png'
import Seq from '../images/se.png';
import Tailwandcss from '../images/tailwandcss.png'
import Boostrap from '../images/boostrap.png';

/**images of the proyects */
        //! front
import pokeApi from '../images/1.png'
import ecomerceJoyas from '../images/2.png'
import phrases from '../images/3.png'
import findFoodFront from '../images/4.png'
import fondFoodBackend from '../images/6.png'

import HotelFront from '../images/9.png'
import HotelBackend from '../images/10.png'

import parking from '../images/parking.png'
import aval from '../images/aval.png'
import Electromusical from '../images/electromusical.png'

const data = [
    {
        "id": 1,
        "name":"FRONTEND",
        "description":"translate the design to code in html and css, layout static sites, improve the user experience with the website, consumption of API's, responsive layout...",
        "icon": <i className="fi fi-br-layout-fluid"></i>,
        "proyects":[
            {
                "id": 1,
                "name": "Red Pokemon",
                "images":[Css, Html, Js, React],
                "description": "consumo de api pokemon, con rutas. siguiendo y optimizando el codigo para mejorar la interactividad del usuario",
                "fondo": pokeApi,
                "link":"https://lively-florentine-5fed2c.netlify.app/"

            },
            {
                "id":2,
                "name": "Ecomerce of joyas",
                "images":[Css, Html, Js, React],
                "description": "consumo de api Rest de heroku, creacion de usuarios, compra de cualquier joya, filtro egun categoria.. utilizando axios",
                "fondo": ecomerceJoyas,
                "link": "https://ecommercejoyas.netlify.app/"
            },
            {
                "id":3,
                "name": "Generateor of phrases",
                "images":[Css, Html, Js, React],
                "description": "consumo de api para generar frases en forma aleatoria con su repectivo Author",
                "fondo": phrases,
                "link": "https://quotesmachineduvan.netlify.app/"
            },
            {
                "id":4,
                "name": "Delivery Ecommerce",
                "images":[Tailwandcss, Html, Js, React],
                "description": "plataforma de administracion de restaurantes para ventas onnline",
                "fondo": findFoodFront,
                "link": "https://food-delivery-front-c9owktknb-duvan51s-projects.vercel.app/"
            },
            {
                "id":5,
                "name": "Gestion de hoteles",
                "images":[Boostrap, Html, Js, React],
                "description": "plataforma de administracion de restaurantes para ventas onnline",
                "fondo": HotelFront,
                "link": "https://gestion-hoteles-front.vercel.app/"
            }
        ]
    },
    {   
        "id": 2,
        "name":"BACKEND",
        "description":"I create routes and logics that allow the front developer to access information, I create and design databases for scalable applications... among others",
        "icon": <i className="fi fi-br-database"></i>,
        "proyects":[
            {
                "id": 1,
                "name": "Api Delivery Ecommerce",
                "images":[MongoDb, Nodejs],
                "description": "",
                "fondo": fondFoodBackend,
                "link":"https://food-delivery-f7ffb6f04076.herokuapp.com/api-docs/"
            },
            {
                "id": 2,
                "name": "Api Gestion de Hoteles",
                "images":[Mysql, Grapqhl, Nodejs, Seq],
                "description": "",
                "fondo": HotelBackend,
                "link":"https://gestion-hoteles-backend-e4dcc6aac05c.herokuapp.com/graphql"
                
            }
        ]
    },
    {   
        "id": 3,
        "name":"MOBILE DEVELOPMENT",
        "description":"I develop simple apps that can be deployed on Android or iOS systems.",
        "icon": <i className="fi fi-br-smartphone"></i>,
        "proyects":[
            {
                "id": 1,
                "name": "mobile FUNDACION ACUERDATE DE MI",
                "images":[Css, Html, Js, React],
                "description": "",
                "fondo": pokeApi
            },
            {
                "id": 2,
                "name": "mobile CONSUMO POKE API",
                "images":[Css, Html, Js, React],
                "description": "",
                "fondo": pokeApi
            },
            {
                "id":3,
                "name": "mobiel ECOMMERCE JOYAS",
                "images":[Css, Html, Js, React],
                "description": "",
                "fondo": pokeApi
            },
            {
                "id":4,
                "name": "mobiel WATHER API",
                "images":[Css, Html, Js, React],
                "description": "",
                "fondo": pokeApi
            }
        ]
    },
    {   
        "id": 4,
        "name":"Full STACK",
        "description":"created proyects of zero, implement un backend server ",
        "icon": <i className="fi fi-br-smartphone"></i>,
        "proyects":[
            {
                "id": 1,
                "name": "full stack FUNDACION ACUERDATE DE MI",
                "images":[Css, Html, Js, React],
                "description": "",
                "fondo": pokeApi
            },
            {
                "id": 2,
                "name": "PARKING APPSHEET",
                "images":[Appsheet, GoogleScript],
                "description": "",
                "fondo": parking,
                "link": "https://www.youtube.com/watch?v=2s5ge7NTWi0"
            },
            {
                "id": 3,
                "name": "ELECTRICOS AVAL",
                "images":[Wordpress, Wocomerce],
                "description": "",
                "fondo": aval,
                "link": "https://electricosaval.com/"
            },
            {
                "id": 4,
                "name": "ELECTROMUSICAL",
                "images":[Wordpress, Wocomerce],
                "description": "",
                "fondo": Electromusical,
                "link": "https://electromusicaldelllano.com/"
            }
        ]
    }

]
export default data