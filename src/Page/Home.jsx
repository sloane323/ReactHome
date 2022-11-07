import { Link } from "react-router-dom";

const Home = () => {
    return ( <div>
         <div className="App">
     <h1> 홈화면에 오신것을 환영하빈다. </h1>
    <p> 아래를 통해 방명록을 작성 하실수 있습니다. </p>
    <button> <Link to="note" >방명록 작성하기</Link></button>

    </div>
    </div> );
}
 
export default Home;