import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import Page from "./Page";
import "../css/Note.css";


const Note = () => {
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const today = new Date();
    today.setDate(today.getDate() );
    const time = {
      year: today.getFullYear(), //현재 년도
      month: today.getMonth() + 1, // 현재 월
      date: today.getDate(), // 현제 날짜
    };
    const dayOfWeek = week[today.getDay()];
    const clickdate = `${time.year} / ${time.month} / ${time.date} / ${dayOfWeek} `;


    const [note, setNote] = useState('');
    const [username, setusername] = useState('');
    const [lists, setLists] = useState([]);
    const [nextId, setNextId] = useState(0);

    const inputusername = useRef(null);
    const inputnote = useRef(null);
  

  /* input값에 문자 입력할 때 마다 실행 되는 이벤트 함수*/
  const onChange = (e) => {
    setNote(e.target.value);
  };
  const onChange2 = (e) => {
    setusername(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();  //새로고침 방지
    const about_lists = lists.concat({ //원래 있는 리스트에 붙여주기
      id: nextId,
      name: username,
      text: note,
      date : today
    });
    setNextId(nextId + 1); //id값 +1

    /*방금 붙여준 리스트까지 포함 된 리스트로 세팅하기*/
    setLists(about_lists); 
    setNote('');
    setusername(''); //input 태그안에 있는 문자 지워주기
  };

  /* 리스트들 화면에 띄우기 위해 map으로 반복 요소 불러오기 */

      
  console.log(note);
  console.log(username);


  const input_list = lists.map((list) => (
    <li
      /*고유 key값 주기*/
      key={list.id} 
      onDoubleClick={() => removeList(list.id)} 
    > <div  id="wrtinb">{list.name} :  {list.text} </div>  <div id="wrtin"> 작성일: {clickdate} </div>
    </li>
  ));
  
  //삭제 이벤트 함수
  const removeList = (id) => {
    const about_lists = lists.filter((list) => list.id !== id);
    setLists(about_lists);
  };



    return ( <div className='headers'>

<Link to="/" > <button className='btn1'> Home </button> </Link>
<h1>방명록을 작성해주세요 </h1>


<form onSubmit={submit}>
    <label>이름</label>
    <input name = "username"  type="text"  placeholder="이름을 입력해주세요"           value={username}
          onChange={onChange2} ref={inputusername} id="namebox" required />
<br></br>
<label>방명록내용</label>
        <input
          name="list"   type="text"  placeholder="내용을 작성해주세요."
          value={note}  onChange={onChange}  ref={inputnote} id="textbox"   required />
        <button type="submit">확인</button>
      </form>

      <hr></hr>
      <Page />
      <ul>{input_list}</ul>

            







</div> );
}
 
export default Note;