import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import servicesDataInfo from '../components/servicesTabs/servicesDataInfo.js';


i18next.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "es",
    resources: {
        es:{
            translation: {
                headersColors:{
                    colorBlack : "negro",
                    colorPink: "rosado",
                    colorPurple: "morado",
                    colorLigth: "claro",
                    colorDark: "obscuro"
                },
                headersMenu: {
                    home: "casa",
                    menuServices: "servicios",
                    menuAbout: "conoceme",
                    menuSkills: "habilidades",
                    menuProyects: "proyectos",
                    menuBlog: "tutoriales",
                    menuContact: "contacto"
            
                },
                mainOne: {
                    mainOneWelcome: "Bienvenid@: ",
                    mainOneName: "Hola, soy ",
                    mainOneDescription: `mi nombre es ${servicesDataInfo.first_name} ${servicesDataInfo.last_name}, desarrollador web full stack, con muchas ganas de aprender y con diferentes proyectos sobre la mesa`,
                    mainOneButtonMyPortafolio: "Portfolio",
                    mainOneButtonMyVideos: "videos"
                  },
                  mainServices: {
                    mainService: "servicios",
                    mainServiceTitle: "mis servicios",
                    mainServiceDescription: "Actualmente ofrezco mis servicios en las diferentes áreas de desarrollo, dando como certificado y respaldo los proyectos colocados en mi portafolio",
                  },
                  mainAboutMe: {
                    aboutMeTitle: "Sobre mi",
                    aboutMePhrase: "Desarrollador apasionado por la tecnología, con Emprendimiento y Marca Personal. Me encanta aprovechar las posibilidades que ofrecen los diferentes lenguajes y tecnologías para lograr objetivos bien definidos. con una frase inspiradora. Si imaginas algo, hazlo",
                    aboutMeDescriptionTitle: "Hola",
                    aboutMeDescriptionDescription: "Soy colombiano. Actualmente soy estudiante de desarrollo web full stack en academnlo, me gusta todo lo que tiene que ver con el desarrollo, ya que me apasiona, me gusta estar en constante aprendizaje, aprender de los demás, trabajar en equipo. Me considero capaz de asumir cualquier reto y llevarlo a cabo.",
                    Name: "Nombre",
                    Email: "Correo",
                    Phone: "Telefono",
                    Linkendln: "linkendln"
                  },
                  mainProyects: {
                    proyectsTitle: "Portfolio de Proyectos",
                    proyectsDescription: "A continuación veremos un poco de mis proyectos, grupales e individuales. con las respectivas tecnologías utilizadas"
                  },
                  contactMe:{
                    contactTitle: "¿Deseas contactarme?",
                    contactTitle2: "contactame",
                    contactDescription: "Los siguientes datos son exclusivos, para empresas, u personas que quieran contactasen para algun tipo de trabajo.",
                    contactMenuLocate: "Localizacion",
                    contactMenuNumber: "Llamame",
                    contactMenuEmail: "Escribeme a travez de mi correo",
                    contactInputNameHover: "Escribe tu nombre",
                    contactInputEmailHover: "tucorreo@ejemplo.com",
                    contactInputNumberHover: "+57 3130000000",
                    contactInputMessageHover: "Escribenos tu mensaje",
                    contactButton:"ENVIAR",
                    contactQr: "Escanea y envia un mensaje directo" 
                  }
            }
        },
        en:{
            translation: {
                headersColors:{
                    colorBlack : "Black",
                    colorPink: "Pink",
                    colorPurple: "Purple",
                    colorLigth: "Ligth",
                    colorDark: "Dark"
                },
                headersMenu: {
                    home: "Home",
                    menuServices: "Services",
                    menuAbout: "About Me",
                    menuSkills: "Skills",
                    menuProyects: "Proyects",
                    menuBlog: "Blog",
                    menuContact: "Contact"
            
                },
                mainOne: {
                    mainOneWelcome: "Welcome: ",
                    mainOneName: "i am",
                    mainOneDescription: `I'm ${servicesDataInfo.first_name} ${servicesDataInfo.last_name}, full stack web developer, eager to learn and with different projects on the table`,
                    mainOneButtonMyPortafolio: "my briefcase",
                    mainOneButtonMyVideos: "videos"
                  },
                  mainServices: {
                    mainService: "services",
                    mainServiceTitle: "My Services",
                    mainServiceDescription: "I currently offer my services in the different areas of development, giving as certificate and support the projects placed in the portfolio:"
                  },
                  mainAboutMe: {
                    aboutMeTitle: "About Me",
                    aboutMePhrase: "Developer passionate about technology, with Entrepreneurship and Personal Brand. I love taking advantage of the possibilities offered by different languages ​​and technologies to achieve well-defined goals. with an inspiring phrase. If you imagine something, do it",
                    aboutMeDescriptionTitle: "Hi There",
                    aboutMeDescriptionDescription: "I am Colombian. I am currently a student of full stack web development in academia, I like everything that has to do with development, since I am passionate about it, I like to be in constant learning, learn from others, work as a team. I consider myself capable of taking any challenge and carrying it out.",
                    Name: "Name: ",
                    Email: "Email: ",
                    Phone: "Phone: ",
                    Linkendln: "linkendln: ",
                  },
                  mainProyects: {
                    proyectsTitle: "Project Portfolio",
                    proyectsDescription: "Below we will see a little of my projects, group and individual. with the respective technologies used"
                  },
                  contactMe:{
                    contactTitle: "Do you want to contact me?",
                    contactTitle2: "Contact Me",
                    contactDescription: "The following information is exclusive, for companies, or people who want to contact for some type of work.",
                    contactMenuLocate: "Locate Us",
                    contactMenuNumber: "Give us a call",
                    contactMenuEmail: "Get in onnline",
                    contactInputNameHover: "You Name",
                    contactInputEmailHover: "example@exapmle.com",
                    contactInputNumberHover: "+57 3130000000",
                    contactInputMessageHover: "write us your message",
                    contactButton:"SEND",
                    contactQr: "scan to send message"
                  }
            }
        }
    }
})