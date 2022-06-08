import React from 'react'
import { useState } from 'react'

export default function Tasks({task, temp_count}) {
  const [reactive, setReactive] = useState('btn-light')
  let state = 0
  const doActive = async() =>{
    //console.log(reactive)
    setReactive('btn-primary')
   // console.log(reactive)
}
const notActive = async() =>{ 
    //console.log('')
    setReactive('btn-light')
}
const privet = async() =>{
  return Promise.resolve(1);
}
const eventlist = (id1) =>{
  let enable = 0
  window.setTimeout(function() {
  let el2 = document.getElementById(id1)
  if(el2){
    el2.addEventListener('mouseout', () =>{
      el2.classList.add("btn-light")
      el2.classList.remove("btn-primary")
   //   el2.classList.remove("btn-primary")
      // setReactive('btn-primary')
      // console.log('привет')
    });
    el2.addEventListener('mouseover', () =>{
      el2.classList.add("btn-primary")
      el2.classList.remove("btn-light")
     // el2.classList.add("btn-primary")
    });
    el2.addEventListener('click', () =>{
      var obj = {};
      var cookies = document.cookie.split(/;/);
      for (var i = 0, len = cookies.length; i < len; i++) {
        var cookie = cookies[i].split(/=/);
        obj[cookie[0]] = cookie[1];
      }
      let el_temp
        if (!id1[3]){
          el_temp = document.getElementsByClassName(`${id1[2]}id`)}
        else{
          console.log('тут работаем')
          el_temp = document.getElementsByClassName(`${id1[2]}${id1[3]}id`)
        }
        for (var i =0; i<el_temp.length; i++) {console.log(el_temp[i].style.backgroundColor = "")}
      el2.style.backgroundColor = "#28a745"
      console.log(id1)
      if (!id1[3]){document.cookie = `${id1[2]}=${id1[0]};`}
      else{
        console.log('тут работаем')
        document.cookie = `${id1[2]}${id1[3]}=${id1[0]};`
      }

    });
  }
}, 500);}
  
  // console.log('привет')

  let tasking = task.question.split(';')
  if (tasking[tasking.length - 1] == ''){
    tasking.pop()
  }
  let count = 0

  //document.getElementsByClassName(button')
  // if (task.type == 1 || task.type == 2){
  // return (
  //   <div>
  //     <div className='question_text'>
  //       ТИП 1
  //       Задание, {task.id} 
  //     </div>
  //     <div className='text_task'>
  //       {task.info}
  //     </div>
  //     <div>
  //       {tasking.map(data =>
  //       <div className={`text_tasks ${count = count + 1} ${task.TaskId}id`}>
            
  //           {data}
  //           {/* {document.getElementsByClassName('text_task')} */}
  //       </div>
  //       )}
  //     </div>
      
  //   </div>
  //   // <div className="programms" style={{background: '#C7EEFF'}}>
  //   //   {themes.name}
  //   //   {themes.id}
  //   // </div>
  // )}
  if (task.type == 1 || task.type == 2){
    return (
      <div>
      <div className='question_text'>
        Задание, {temp_count} 
      </div>
      <div className='text_task'>
        {task.info}
      </div>
      <div>
      {tasking.map(data =>
        <div id={`${count}_${task.TaskId}`} className={`text_tasks ${count = count + 1} ${task.TaskId}id ${reactive}`}>
            {data}
            {console.log(task.TaskId)}
            {eventlist(`${count - 1}_${task.TaskId}`)}
            
        </div>
        )}
      </div>
      </div>
    )
  }
}
