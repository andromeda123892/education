import React, {useContext, useEffect, useState} from "react";
import { catalog } from "../http/CatalogApi";
import { Button, Form, Carousel } from "react-bootstrap";
import {observer} from "mobx-react-lite";
import '../styles/App.css'
import { Context } from "../index";
import ItemSection from "../components/ItemsSection"
import { fetchThemes } from "../http/CatalogApi";
import Head from "../components/Head";
import Foot from "../components/Foot";
const Catalog =observer(() => {
    const [reactive, setReactive] = useState('btn-light')
    const [jest,setJest] = useState(false)
    const {tasks} = useContext(Context)
    useEffect(() => {
        console.log('123')
        fetchThemes().then(data => {
            console.log(data.rows)
            tasks.setThemes(data.rows)
            console.log(data.count)
            tasks.setTotalCount(data.count)
        })
    }, [])
    var jest1 = useEffect(()=>{
        console.log('сработало')
    }, [reactive])
    const doActive = async() =>{
        console.log(reactive)
        setReactive('btn-primary')
        console.log(reactive)
    }
    const notActive = async() =>{ 
        console.log('')
        setReactive('btn-light')
    }
    const signIn = async () =>{
            const response1234 = await catalog()
            setJest(!jest)
            console.log(jest)
    }
    const [count, setCount] = useState(0);
    // const catalogItems = await
    return(
        <div className="container">
            <Head></Head>
            <div className="text_start">Все программы обучения</div>
            <div className="border"></div>
            <div className="container_prog">
                {tasks.Themes.map(data =>
                    <ItemSection key={data.id} themes={data}></ItemSection>
                )}
            </div>
                <div className="windowss" style={{top: `${-1180+(Math.ceil(tasks.totalCount/2)*270)}px`}}>
                <div class="photo6">
                    <div className="photo6_1"></div>
                </div>
                <div class="photo7">
                    <div className="photo7_1"></div>
                </div>
                <div class="sova">
                    <div className="sova_1"></div>
                </div>
                <div class="vopros">
                            <div className="vopros_1"></div>
                </div>
                <div class="name"> </div>
                <div class="number"></div>
                <div class="mail"> </div>
                <div class="vopros1">Всем привет?</div>
            </div>
            <Foot style={{zIndex: 0}}></Foot>
        </div>
    );
})

export default Catalog;