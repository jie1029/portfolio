import React, {useState} from 'react'; // 기본 리액트를 쓰려면 무조건 필요
import logo from './logo.svg'; 
import './App.css'; // 기본

//간단한 세부 컴포넌틀르  할경우에는. 
// 크면 따로 js 파일을 만들어서 임포트하기

function TestComponet(props){ //대문자로 시작
  const [num,setNum]=useState(1) // useState라는 것은 앞에 변수 뒤가 세터
  // useState 라는 것이 렌더링을 해준다,,,, 
  // 라이프 사이클 사용법
  // 배열같은 것은 setNum이 힘들다,,,
  // 그냥 name 을 넘겨주면 자식에서는 부모를 못바꿈
  function upNum(){
    setNum(num+1)
    props.setName() // 자식에서 부모를 바꾸는 방법은 이거밖에 없슴
  }

  return (// 템플ㄹ릿(뷰로 하자면)
    <div onClick={upNum}>
      {props.name} 안멍청이 {num}
    </div>
  )
}

function App() {
  const [name,setName] = useState("지규빈")
  function clickBtn(){
    // 
    // console.log();
    setName("김태성")
  }
  return (
    // class x className
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { /* <p onClick={clickBtn}> */ }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <TestComponet name={name} setName={clickBtn}></TestComponet>
      </header>

    </div>
  );
}

export default App; // 이 컴포넌트를 밖에서도 쓸 수 있도록 
