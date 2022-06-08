import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {createTask} from "../../http/CatalogApi";
import {observer} from "mobx-react-lite";

const CreateTask = observer(({show, onHide}) => {
    const {tasks} = useContext(Context)
    const [name, setName] = useState('')
    const [quality, setQuality] = useState(0)
    // const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])
    const [type, setType] = useState('')
    const [taskings, setTaskings] = useState([])
    let massive = [1,2,3,4]
    let tasking = []
    let types = [1,2]
    const [resultin, setRes] = useState('not')
    let result
    const setTasking = (id, task) =>{
        tasking[id] = task
        let copy = Object.assign([], taskings);
        copy[id] = task
        setTaskings(copy)
    }

    const setResult = (id) =>{

        result = id
        setRes(result)
        console.log(result)
    }

    const GetQuestions = quest => {
        let content = [];
        for (let i = 0; i < quest; i++) {
            content.push(<Form.Control
                key={`${i}_form`}
                value={tasking[i]}
                onChange={e => setTasking(i, e.target.value + ';')}
                className="mt-3"
                placeholder={`Вопрос ${i + 1}`}
            />);
        }
        return content;
        };

    const GetResults = data => {
        let resulting = [];
        for (let i = 0; i < data; i++) {
            resulting.push(<Dropdown.Item
                onClick={() => setResult(i)}
                key={i}
            >
                {i+1}
            </Dropdown.Item>);
        }
        return resulting;
        };
    
    const addTask = () => {
        const formData = new FormData()
        formData.append('info', name)
        formData.append('question', taskings.join(''))
        formData.append('type', type)
        formData.append('result', resultin)
        formData.append('href', file)
        createTask(formData).then(data => onHide())
        console.log('Завершилось')
    }
        


    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить задание
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="mt-3"
                            placeholder="Введите формулировку задания"
                        />

                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{quality || 'Выберите количество вопросов'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {massive.map(data =>
                                <Dropdown.Item
                                    onClick={() => setQuality(data)}
                                    key={data}
                                >
                                    {data}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>    
                    </Dropdown>
                    {quality ? <div>{GetQuestions(quality)}</div> : <div></div>}
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{type || 'Выберите тип'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {types.map(data =>
                                <Dropdown.Item
                                    onClick={() => setType(data)}
                                    key={data}
                                >
                                    {data}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <div>Выберите правильный ответ</div>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{resultin != 'not' ? resultin + 1 : 'Значение'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                        {quality ? <div>{GetResults(quality)}</div> : <div></div>}
                        </Dropdown.Menu>
                    </Dropdown>
                    <hr/>
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={setFile}
                    />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addTask}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateTask;
