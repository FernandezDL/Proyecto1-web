import React from "react"

import arabia from "/Imagenes/arabia.png";
import brasil from "/Imagenes/brasil.png";
import catalan from "/Imagenes/catalan.png";
import checo from "/Imagenes/checo.png";
import china from "/Imagenes/china.png";
import filipinas from "/Imagenes/filipinas.png";
import french from "/Imagenes/french.png";
import germany from "/Imagenes/germany.png";
import grecia from "/Imagenes/grecia.png";
import hungria from "/Imagenes/Hungria.png";
import india from "/Imagenes/india.png";
import indonesia from "/Imagenes/indonesia.png";
import italy from "/Imagenes/italy.png";
import japan from "/Imagenes/japan.png";
import korea from "/Imagenes/korea.png";
import netherlands from "/Imagenes/netherlands.png";
import polonia from "/Imagenes/polonia.png";
import rumania from "/Imagenes/rumania.png";
import russia from "/Imagenes/russia.png";
import spain from "/Imagenes/spain.png";
import sueco from "/Imagenes/sueco.png";
import tailandia from "/Imagenes/tailandia.png";
import turquia from "/Imagenes/turquia.png";
import ucrania from "/Imagenes/ucrania.png";
import usa from "/Imagenes/USA.png";
import vietnam from "/Imagenes/vietnam.png";

const banderas=[
    {"src": arabia}, {"src": brasil}, {"src": catalan}, {"src": checo}, {"src": china}, {"src": filipinas}, {"src": french}, {"src": germany},
    {"src": grecia}, {"src": hungria}, {"src": india}, {"src": indonesia}, {"src": italy}, {"src": korea}, {"src": netherlands}, {"src": polonia},
    {"src": rumania}, {"src": russia}, {"src": spain}, {"src": sueco}, {"src": tailandia}, {"src": turquia}, {"src": ucrania}, {"src": usa}, 
    {"src": vietnam}, {"src": japan}
]

const uno= banderas[0];
const dos= banderas[1];
const tres= banderas[2];
const cuatro= banderas[3];
const cinco= banderas[4];
const seis= banderas[5];
const siete= banderas[6];
const ocho= banderas[7];
const nueve= banderas[8];
const diez= banderas[9];
const once= banderas[10];
const doce= banderas[11];
const uno1= banderas[12];
const dos1= banderas[13];
const tres1= banderas[14];
const cuatro1= banderas[15];
const cinco1= banderas[16];
const seis1= banderas[17];
const siete1= banderas[18];
const ocho1= banderas[19];
const nueve1= banderas[20];
const diez1= banderas[21];
const once1= banderas[22];
const doce1= banderas[23];
const trece= banderas[24];
const trece1= banderas[25];

const DropDownMenu =() =>{    
    return(
        <div className='flex flex-col dropDownMenu'>
            <div className="columna1">
                <ul className='flex flex-col gap-4'>
                    <li className="li-hover">
                        <img src={uno.src}/>
                        العربية
                    </li>
                    <li className="li-hover">
                        <img src={cuatro.src}/>
                        Čeština
                    </li>
                    <li className="li-hover">
                        <img src={nueve.src}/>
                        Ελληνικά
                    </li>
                    <li className="li-hover">
                        <img src={siete1.src}/>
                        Español
                    </li>
                    <li className="li-hover">
                        <img src={once.src}/>
                        हिंदी
                    </li>
                    <li className="li-hover">
                        <img src={doce.src}/>
                        Bahasa Indonesia
                    </li>
                    <li className="li-hover">
                        <img src={trece1.src}/>
                        日本語
                    </li>
                    <li className="li-hover">
                        <img src={tres1.src}/>
                        Netherlands
                    </li>
                    <li className="li-hover">
                        <img src={dos.src}/>
                        Português
                    </li>
                    <li className="li-hover">
                        <img src={seis1.src}/>
                        Русский
                    </li>
                    <li className="li-hover">
                        <img src={seis.src}/>
                        Tagalog
                    </li>
                    <li className="li-hover">
                        <img src={once1.src}/>
                        Українською
                    </li>
                    <li className="li-hover">
                        <img src={cinco.src}/>
                        中文
                    </li>
                </ul>
            </div>
            <div className="columna2">
                <ul className='flex flex-col gap-4'>
                    <li className="li-hover">
                        <img src={once.src}/>
                        বাংলা
                    </li>
                    <li className="li-hover">
                        <img src={ocho.src}/>
                        Deutsch
                    </li>
                    <li className="li-hover">
                        <img src={doce1.src}/>
                        English
                    </li>
                    <li className="li-hover">
                        <img src={siete.src}/>
                        Français
                    </li>
                    <li className="li-hover">
                        <img src={diez.src}/>
                        Magyar
                    </li>
                    <li className="li-hover">
                        <img src={uno1.src}/>
                        Italiano
                    </li>
                    <li className="li-hover">
                        <img src={dos1.src}/>
                        한국어
                    </li>
                    <li className="li-hover">
                        <img src={cuatro1.src}/>
                        Polski
                    </li>
                    <li className="li-hover">
                        <img src={cinco1.src}/>
                        Română
                    </li>
                    <li className="li-hover">
                        <img src={nueve1.src}/>
                        ภาษาไทย
                    </li>
                    <li className="li-hover">
                        <img src={diez1.src}/>
                        Türkçe
                    </li>
                    <li className="li-hover">
                        <img src={trece.src}/>
                        Tiếng Việt
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DropDownMenu