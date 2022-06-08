import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateTask from "../components/modals/CreateTask";
import CreateThemes from "../components/modals/CreateTheme";
import CreateComp from '../components/modals/CreateCompilation';

const Admin = () => {
    const [taskVisible, setTaskVisible] = useState(false)
    const [themeVisible, setThemeVisible] = useState(false)
    const [compilationVisible, setCompilationVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTaskVisible(true)}
            >
                Добавить задание
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setThemeVisible(true)}
            >
                Добавить тему
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCompilationVisible(true)}
            >
                Добавить подборку
            </Button>
            <CreateTask show={taskVisible} onHide={() => setTaskVisible(false)}/>
            <CreateThemes show={themeVisible} onHide={() => setThemeVisible(false)}/>
            <CreateComp show={compilationVisible} onHide={() => setCompilationVisible(false)}/>
        </Container>
    );
};

export default Admin;
