import React from 'react'
import {NavLink, useLocation, useHistory} from "react-router-dom";
import { MATERIAL_ROUTE } from '../utils/consts';
export default function ItemsSection({themes}) {
  const history = useHistory()
  const eventlist = (id1) =>{
    let enable = 0
    window.setTimeout(function() {
    let el2 = document.getElementById(`themes_${id1}`)
    if(el2){
      el2.addEventListener('click', () =>{
          history.push(MATERIAL_ROUTE + `/${id1}`)
      });
    }
  }, 500);}

  return (
    <div id={`themes_${themes.id}`} className={`programms block_${themes.id % 4}`}>
      <div className='theme_text1'>Учебный материал</div>
      <div className='theme_text2'>«{themes.name}»</div>
      <div className={`theme_image${themes.id % 3 + 1}`}></div>
      {/* {themes.name} */}
      {eventlist(themes.id)}
    </div>
  )
}
