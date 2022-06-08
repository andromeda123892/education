import React, {useContext, useEffect, useState} from "react";
import { catalog } from "../http/CatalogApi";
import { useParams } from "react-router-dom";
import {observer} from "mobx-react-lite";
import '../styles/App.css'
import { Context } from "../index";
import { fetchOneTheme } from "../http/CatalogApi";
import Head from "../components/Head";
import Foot from "../components/Foot";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { THEME_ROUTE } from "../utils/consts";
const Material = observer (() => {
    const {id} = useParams()
    const history = useHistory()
    const {tasks} = useContext(Context)
    const [material, setMaterial] = useState('загрузка...')
    useEffect(() => {
        fetchOneTheme(id).then(data => {
            setMaterial(data[0][0])
        })
    }, [])
    const TextShow = (text,type) => {
        console.log('сработало')
        var text1 = ''
        var text2 = ''
        if (type == 1 || text.length < 373){
            if (type == 1 && text.length < 373){
            for (let i = 0; i < text.length; i++) {
                text1 += text[i]
                console.log('тут')
            }
            return (<div className="text_material">{text1}</div>)}
            if (type == 1 && text.length > 373){
                for (let i = 0; i < 373; i++) {
                    text1 += `${text[i]}`
                    console.log('тут сработало')
                }
                return (<div className="text_material">{text1}</div>)
            }
        }
        if (type == 2  && text.length > 373){
            text2 = ''
            for (var i = 373; i < text.length; i++) {
                text2 += text[i]
                console.log('тут работаем')
            }
            return (<div className="text_material2">{text2}</div>)
        }
        return(' ')
        };
    return(
        <div>
        <div className="container">
            <Head></Head>
            <div className="text_start">{material.name}</div>
            <Button
                        variant={"outline-dark"}
                        className="button_text"
                        onClick={() => history.push(THEME_ROUTE + `/${id}`)}>Начать тест</Button>
            {material.material ? TextShow(material.material, 1) : 'none'}
            {material.material ? TextShow(material.material, 2) : 'none'}

                    <div className="material_photo">
                    <div class="photo1">
                        </div>
                        <div class="photo2">
                            <div class="photo2_1"/>
                        </div>
                        <div class="photo3">
                            <div class="photo3_1"/>
                        </div>
                        <div class="photo4">
                            <div class="photo4_1"/>
                        </div>
                        <div class="photo5">
                            <div class="photo5_1"/>
                        </div>
                    </div>
                    
                </div>
                <div style={{minHeight: '450px', minWidth:'50px'}}>

                </div>
                <Foot></Foot>
                </div>
    );
})

export default Material;