import React, {useContext, useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {createCompilation} from "../../http/CatalogApi";
import {Context} from "../../index";
import { fetchThemes } from "../../http/CatalogApi";
import { fetchTasks } from "../../http/CatalogApi";
import { fetchOneDevice } from "../../http/CatalogApi";

const CreateComp = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const [currentTheme, setCurrentTheme] = useState(0)
    const [currentTask, setCurrentTask] = useState('')
    const [choseTask, setChoseTask] = useState('')
    const {tasks} = useContext(Context)
    let themeid = 0
    useEffect(() => {
        fetchThemes().then(data => {
            tasks.setThemes(data.rows)
            
        })
        fetchTasks().then(data => {
            tasks.SetTasks(data.rows)
            // console.log(tasks.tasks[1].TaskId)
        })
    }, [])
    useEffect(() => {
        fetchOneDevice(themeid).then(data => {
            setCurrentTask(data)
        })
    }, [currentTheme.id])

    const GetCurrentTasks = id => {
        themeid = currentTheme.id
        let resulting = [];
        for (let i = 0; i < currentTask.length; i++) {
            resulting.push(
                <Dropdown.Item
                    onClick={() => console.log(i)}
                    key={i}
                >
                    {currentTask[i].info}
                </Dropdown.Item>);
        }
        return resulting;
        };

    const addComp = () => {
        console.log(choseTask.id)
        console.log(currentTheme.id)
        createCompilation({TaskId:choseTask.id, ThemeId:currentTheme.id}).then(data => {
            setValue('')
            onHide()
        })
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить подборку
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{currentTheme.name || 'Выберите тему'}</Dropdown.Toggle>
            <Dropdown.Menu>
                {tasks.Themes.map(data =>
                    <Dropdown.Item
                        onClick={() => setCurrentTheme(data)}
                        key={data.id}
                    >
                        {data.name}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>    
            </Dropdown>
            <div>Текущие задания</div>
            <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{'Список заданий'}</Dropdown.Toggle>
            <Dropdown.Menu>
                {currentTheme.name ? GetCurrentTasks(currentTheme.id) : 'нет'}
            </Dropdown.Menu>    
            </Dropdown>
            <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{choseTask.info|| 'Добавить задание'}</Dropdown.Toggle>
            <Dropdown.Menu>
                {tasks.tasks.map(data =>
                    <Dropdown.Item
                        onClick={() => setChoseTask(data)}
                        key={data.id}
                    >
                        {data.info}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>    
            </Dropdown>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addComp}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateComp;
