import React from "react";
import { Button } from "react-bootstrap";
import "../utils/consts";
import { BASKET_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from "../utils/consts";
import {useHistory} from "react-router-dom";

const Header =() => {
    const historylast = useHistory()
    const auth = () =>{
        historylast.push(LOGIN_ROUTE)
        console.log('сраотало')
    }
    const profile = () =>{
        historylast.push(PROFILE_ROUTE)
        console.log('сраотало')
    }
    const basket = () =>{
        historylast.push(BASKET_ROUTE)
        console.log('сраотало')
    }

    return(
        <div style={{background: '#424242', height: '40px', fontSize: '12px'}}>
            <div style={{display:'flex', paddingLeft: '20%', paddingRight: '20%', justifyContent:'right'}}>            
                <button   style={{paddingRight: '5%', color: "white",border: 0, background: 'transparent', outline:'none', fontSize: 20}} onClick={auth}>Войти</button>
                <button   style={{paddingRight: '5%', color: "white",border: 0, background: 'transparent', outline:'none', fontSize: 20}} onClick={profile}>Кабинет</button>
                <button   style={{paddingRight: '5%', color: "white",border: 0, background: 'transparent', outline:'none', fontSize: 20}} onClick={basket}>Корзина</button>
                <button   style={{paddingRight: '5%', color: "white",border: 0, background: 'transparent', outline:'none', fontSize: 20}} onClick={profile}>Помощь</button>
            </div>
        </div>
    );
};

export default Header;