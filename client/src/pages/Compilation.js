import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {observer} from "mobx-react-lite";
import '../styles/App.css'
import { Context } from "../index";
import { fetchOneDevice } from "../http/CatalogApi";
import Tasks from "../components/Tasks";
import Head from "../components/Head";
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
const Compilation = observer (() => {
    const {id} = useParams()
    const [resultVisible, setResultVisible] = useState(false)
    const [check, setCheck] = useState(false)
    const {tasks} = useContext(Context)
    var temp_count = 0
    let results = {}
    let temp


    function isEmpty(obj) {
        for (let key in obj) {
          // если тело цикла начнет выполняться - значит в объекте есть свойства
          return false;
        }
        return true;
      }
    function output(obj) {
        var list = []
    for (let key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        list.push(<div>{key} - {check[key]}</div>)
    }
    return list;
    }

const exit = () =>{
    var obj = {};
    var cookies = document.cookie.split(/; /);
    for (var i = 0, len = cookies.length; i < len; i++) {
        var cookie = cookies[i].split(/=/);
        obj[cookie[0]] = cookie[1];
}
let count = 0
results = {}
tasks.tasks.map(data => {
    count = count + 1
    results[count] = 0
    if (obj[data.TaskId] == data.result){
        results[count] = 1}
})
setCheck(results)
console.log(results)
setResultVisible(true)
}

function CookiesDelete() {
	var cookies = document.cookie.split(";");
    console.log('Кукисы удалились')
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
		document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}
}

    useEffect(() => {
        fetchOneDevice(id).then(data => {
            tasks.SetTasks(data)
            CookiesDelete()
            tasks.tasks.map(data =>
                console.log(data.id)
            )
        })
    }, [])
    return(
        <div className="container">
            <Head></Head>
            <div className="text_start">Учебный материал</div>
            <div className="border"></div>
            {tasks.tasks.map(data =>
                <Tasks key={data.id} task={data} temp_count={temp_count = temp_count + 1}></Tasks>
            )}
            <Button style={{marginLeft:'47%'}} onClick={exit}>завершить</Button>
            <Modal
                show={resultVisible}
                onHide={() => setResultVisible(false)}
                centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Результат
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {/* output(check).map(key => (check[key])) */}
                {console.log(check)}
                <div> {!isEmpty(check) ?  output(check): 'none'}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={()=>{setResultVisible(false)}}>Закрыть</Button>
                {/* <Button variant="outline-success" onClick={addBrand}>Добавить</Button> */}
            </Modal.Footer>
            </Modal>
        </div>
    );
})

export default Compilation;