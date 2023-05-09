import './index.css'
import React from 'react';
import Navbar from './components/Navbar';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ingles from "/Imagenes/USA.png";
import frances from "/Imagenes/french.png";
import aleman from "/Imagenes/germany.png";
import italiano from "/Imagenes/italy.png";
import portugues from "/Imagenes/brasil.png";
import catalan from "/Imagenes/catalan.png";
import ruso from "/Imagenes/russia.png";
import sueco from "/Imagenes/sueco.png";

const banderas=[
    {"src": ingles}, {"src": frances}, {"src": aleman}, {"src": italiano}, {"src": portugues}, {"src": catalan}, {"src": ruso}, {"src": sueco}
]

const uno= banderas[0];
const dos= banderas[1];
const tres= banderas[2];
const cuatro= banderas[3];
const cinco= banderas[4];
const seis= banderas[5];
const siete= banderas[6];
const ocho= banderas[7];

function App(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return(
        <div>
            <Navbar/>

            <div className='prmContainer'>
                <div className='generalContainer'>
                    <div id="mundo"></div>

                    <div className='bttnContainer'>
                        <h3>¡La forma divertida, efectiva y gratis de aprender un idioma!</h3>
                        <button className='empezarBttn'>EMPIEZA AHORA</button>
                        <button className='cuentaBttn'>YA TENGO CUENTA</button>
                    </div>
                </div>
                
                <div id="estrella"></div>
                <div id='estrella2'></div>

            </div>

            <div className='languagesBar'>
                <Carousel responsive={responsive}>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                </Carousel>
            </div>

            <div className='downContainer'>
                <div className='duo'></div>
                
                <div className='letterContainer'>
                    <div className='h4'>La forma #1 del mundo para aprender un idioma</div>
                    <p>¡Aprender con Duolingo es divertido y <u>los estudios demuestran que funciona!</u> Con nuestras lecciones cortas ganarás puntos y 
                        accederás a nuevos niveles, todo mientras desarrollas tus capacidades comunicativas en la vida real.</p>
                </div>
            </div>

            <div className='linea'></div>

            <div className='anotherDownContainer'>
                <div className='h41'>
                    Por qué te encantará aprender con Duolingo
                </div>

                <div className='columnas'>
                    <div className='colInternas'>
                        <div className='interno2'>
                            <div className='racha masCaracteristicas'></div>

                            <div className='interno'>
                                <div className='h5'>Efectivo y eficiente</div>

                                <div className='h6'>Nuestros recursos enseñan a leer, escuchar y hablar en otro idioma de forma efectiva y eficiente. ¿Ya
                                    viste nuestros <a className='hipervinculo'>estudios más recientes</a></div>
                            </div>
                        </div>

                        <div className='interno2'>
                            <div className='cheque masCaracteristicas'></div>

                            <div className='interno'>
                                <div className='h5'>Aprendizaje personalizado</div>

                                <div className='h6'>Al combinar lo mejor de la inteligencia artificial y las ciencias de idiomas, las lecciones se adaptan 
                                    a tu desempeño para ayudarte a aprender al nivel adecuado y a tu propio ritmo.</div>
                            </div>
                        </div>
                    </div>

                    <div className='compu'></div>

                    <div className='colInternas'>
                        <div className='interno2'>
                            <div className='corona masCaracteristicas'></div>

                            <div className='interno'>
                                <div className='h5'>Mantente motivado</div>

                                <div className='h6'>Al sentirse como un juego y ofrecerte desafíos divertidos, hacemos que sea fácil formar un hábito de 
                                    aprendizaje de idiomas. Además, siempre contarás con el apoyo y los recordatorios de nuestra amistosa mascota, Duo, el 
                                    búho.</div>
                            </div>
                        </div>

                        <div className='interno2'>
                            <div className='lili masCaracteristicas'></div>

                            <div className='interno'>
                                <div className='h5'>¡Diviértete!</div>

                                <div className='h6'>¡El aprendizaje puede ser efectivo y divertido a la vez! Desarrolla tus habilidades cada día con 
                                    ejercicios entretenidos y personajes entrañables.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='linea'></div>

            <div className='downContainer'>
                <div className='duoPro'></div>
                
                <div className='letterContainer'>
                    <div className='h4'>Impulsa tu aprendizaje con Súper Duolingo</div>
                    <div className='hastaAbajo'>
                    <p>En Duolingo, puedes aprender idiomas totalmente gratis, pero puedes eliminar los anuncios y apoyar la educación gratuita con Súper. 
                        ¡Te regalamos 2 semanas gratis!</p>

                    <p><a className='hipervinculo2'>MÁS SOBRE SÚPER DUOLINGO</a></p></div>
                </div>
            </div>

            <div className='prmContainer2'>
                <div id="estrella3"></div>
                <div id='estrella4'></div>

                <div className='envolvente'>
                    <div className='bttnContainerLow'>
                        <div className="h33">Aprende un idioma con Duolingo</div>
                        <button className='empezarBttn2'>EMPIEZA AHORA</button>
                    </div>

                    <div className='downInformation'>
                        <div className='columnas2'>
                            <h7>Sobre nosotros</h7>

                            <ul className='flex flex-col gap-4'>
                                <li className='sndMenu'>Cursos</li>
                                <li className='sndMenu'>Misión</li>
                                <li className='sndMenu'>Metodo de enseñanza</li>
                                <li className='sndMenu'>Equipo</li>
                                <li className='sndMenu'>Investigación</li>
                                <li className='sndMenu'>Empleo</li>
                                <li className='sndMenu2'>Guía para uso de marca</li>
                                <li className='sndMenu'>Tienda</li>
                                <li className='sndMenu'>Prensa</li>
                                <li className='sndMenu'>Inversionistas</li>
                                <li className='sndMenu'>Contáctanos</li> 
                            </ul>
                        </div>

                        <div className='columnas2'>
                            <h7>Productos</h7>

                            <ul className='flex flex-col gap-4'>
                                <li className='sndMenu'>Duolingo</li>
                                <li className='sndMenu'>Duolingo for Schools</li>
                                <li className='sndMenu'>Duolingo English Test</li>
                                <li className='sndMenu'>Podcast</li>
                                <li className='sndMenu'>Cuentos</li>
                                <li className='sndMenu'>Duolingo for Business</li>
                                <li className='sndMenu'>Súper Duolingo</li>
                                <li className='sndMenu'>Regala Súper Duolingo</li>
                            </ul>
                        </div>

                        <div className='columnas2'>
                            <h7>Aplicaciones</h7>

                            <ul className='flex flex-col gap-4'>
                                <li className='sndMenu2'>Duolingo para Android</li>
                                <li className='sndMenu'>Duolingo para IOS</li>
                            </ul>
                        </div>

                        <div className='columnas2'>
                            <h7>Ayuda y soporte</h7>

                            <ul className='flex flex-col gap-4'>
                                <li className='sndMenu'>App de Duolingo</li>
                                <li className='sndMenu'>Schools</li>
                                <li className='sndMenu'>Duolingo English Test</li>
                                <li className='sndMenu'>Estado</li>
                            </ul>
                        </div>

                        <div className='columnas2'>
                            <div className='columnas2'>
                                <h7>Términos y privacidad</h7>

                                <ul className='flex flex-col gap-4'>
                                    <li className='sndMenu2'>Normas de la comunidad</li>
                                    <li className='sndMenu'>Términos</li>
                                    <li className='sndMenu'>Privacidad</li>
                                </ul>
                            </div>
                        
                            <div className='columnas2'>
                                <h7>Social</h7>

                                <ul className='flex flex-col gap-4'>
                                    <li className='sndMenu'>Blog</li>
                                    <li className='sndMenu'>Instagram</li>
                                    <li className='sndMenu'>Twitter</li>
                                    <li className='sndMenu'>YouTube</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                
                    <div className='linea2'></div>

                    <div className='lastletterContainer'>
                        <h8>Idioma de la página:</h8>

                        <div className='liContainer'>
                            <p className="sndMenu3">العربية</p>
                            <p className="sndMenu3">বাংলা</p>
                            <p className="sndMenu3">Čeština</p>
                            <p className="sndMenu3">Deutsch</p>
                            <p className="sndMenu3">Ελληνικά</p>
                            <p className="sndMenu3">English</p>
                            <p className="sndMenu3">Español</p>
                            <p className="sndMenu3">Français</p>
                            <p className="sndMenu3">हिंदी</p>
                            <p className="sndMenu3">Magyar</p>
                            <p className="sndMenu3">Bahasa Indonesia</p>
                            <p className="sndMenu3">Italiano</p>
                            <p className="sndMenu3">日本語</p>
                            <p className="sndMenu3">한국어</p>
                        </div>

                        <div className='liContainer'>
                            <p className="sndMenu3">Netherlands</p>
                            <p className="sndMenu3">Polski</p>
                            <p className="sndMenu3">Português</p>
                            <p className="sndMenu3">Română</p>
                            <p className="sndMenu3">Русский</p>
                            <p className="sndMenu3">ภาษาไทย</p>
                            <p className="sndMenu3">Tagalog</p>
                            <p className="sndMenu3">Türkçe</p>
                            <p className="sndMenu3">Українською</p>
                            <p className="sndMenu3">Tiếng Việt</p>
                            <p className="sndMenu3">中文</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;