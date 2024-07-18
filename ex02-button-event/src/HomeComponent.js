// Component클래스를 'react' 라이브러리에서 가져오기
import React, { Component } from "react";

// 리액트는 Component라는 클래스를 상속한 녀석이 화면에 보여짐
class HomeComponent extends Component{

    // 값이 변경되는 화면이 자동 갱신되는 아주아주 특별한 Component 클래스의 멤버변수 - state[객체로 저장]
    state= {
        msg:"Hello React",
        age:20,

        fruits:['apple','banana','orange'],

        address: {
            nation: 'korea',
            city: 'seoul',
        }
    }


    // p요소가 보여줄 데이터값을 가진 멤버변수 - 프로퍼티 property
    message= "Hello world"

    // 컴포넌트가 보여줄 화면 요소들을 만들어서 리턴해주는 콜백메소드
    render(){
        return (
            <div>
                <h2>React Button click event</h2>
                {/* onClick속성에 함수호출문을 쓰는것이 아니라 콜백함수를 지정해주는 것임. 즉 ()호출이 있으면 안됨 */}
                <button onClick={ aaa }>눌러주세요</button>
                <button onClick={ bbb }>눌러주세요(익명함수)</button>
                <button onClick={ ccc }>눌러주세요(화살표함수)</button>
                <button onClick={ ()=> alert() }>눌러주세요</button>
                <hr/>

                {/* 컴포넌트의 이벤트처리 콜백메소드는 보통 그 컴포넌트의 값들을 변경하기에 클래스의 멤버메소드로 만드는것을 권장 */}
                {/* JS클래스의 멤버접근은 반드시 this 키워드와 함께 해야함 */}
                <button onClick={this.clicktBtn}>click me</button>

                <hr></hr>

                {/* 버튼클릭하여 글씨 변경해보기 */}
                {/* 리액트의 데이터변경 매카니즘 */}
                {/* 리액트는 요소를 참조하는 기능이 없음. 요소가 보여줄 데이터를 변수에 넣고  */}
                {/* 버튼이 클릭되었을때 요소를 제어하지 않고 요소가 보여주는 변수값을 변경하는 기법 -- 데이터 바인딩*/}
                {/* p요소가 보여줄 값을 직접 쓰지 않고 변수에 넣고 변수명을 기입 [변수는 가급적 멤버변수로 ] */}

                <p> {this.message} </p>
                <button onClick={ this.changText }>change message</button>
                <button onClick={ this.changText.bind(this) }>change message[bind()]</button>

                <hr></hr>
                
                {/* state라는 아주 특별한 멤버변수를 이용하여 자동화면갱신 구현해보기 */}
                <p> { this.state.msg } </p>
                <button onClick={ this.changMsg.bind(this) }>change msg</button>
                {/* bind() 대신 화살표함수를 이용하여 this 키워드 문제를 해결 */}
                <button onClick={ this.changMsg2 }>change msg</button>
                
                <p>나이 : {this.state.age}</p>
                <button onClick={ this.changAge }>change age</button>
                <button onClick={ this.increaseAge }> + </button>

                {/* state에 저장할 값이 배열일때.. */}
                <p> { this.state.fruits } </p> {/* 배열을 그냥  출력하면? 배열 요소들이 나열됨 */}
                <p> { this.state.fruits[0] } </p>
                <p> { this.state.fruits[1] } </p>
                <p> { this.state.fruits[2] } </p>
                
                <button onClick={ this.changeFruits }> 1번방 요소의 값 변경 </button>
                <button onClick={ this.addFruits }>배열 요소 추가</button>
                <button onClick={ ()=>this.removeFruits(0) }> 0번 방의 번호 배열 요소 삭제</button>
                <button onClick={ ()=>this.removeFruits(1) }> 1번 방의 번호 배열 요소 삭제</button>

                {/* state에 저장할 값이 객체일 때.. */}
                {/* ERROR - JSX는 객체를 곧바로 출력할 수 없음 */}
                {/* <p> 주소:{this.state.address} </p>  */}

                <p> 주소: { this.state.address.nation } - { this.state.address.city } </p>

                <button onClick={ this.changeAddress }>주소 객체를 통으로 교체</button>
                <button onClick={ this.changeAddresscity}>도시 주소 변경</button>

                {/* 정리 */}
                {/* state의 프로퍼티 자료형이 number, string, boolean 일때는 그냥 setState()만 하면됨 */}
                {/* state의 프로퍼티 자료형이 object, array 일때는 가급적 ...스프레드 연산자로 새로운 객체 or 배열 생성하여 값을 변경하고 대입 권장 */}
                

            </div>
        )
    }

    changeAddresscity= ()=>{
        //this.state.address.city= "busan"
        //this.setState({address.city})

        //const nation = this.state.address.nation
        const {nation, city}= this.state.address // 구조분해할당

        // ...스프레드 연산자로 새로운 객체를 간편하게 만들고 원하는 멤버만 변경하면 됨.
        const aa= { 
            //nation:nation, 객체의 멤버변수명과 값을 가진 변수명이 같으면.. 변수이름만 쓰면 됨
            nation,
            city,
            ...this.state.address,
            city:"busan"

            // 같은 멤버변수명이면 덮어쓰기가 된다.
        }
        this.setState({address: aa}) // 새로운 객체로 address값 변경
    }

    changeAddress= ()=>{
        this.setState({address : {nation:'Japan',city:'tokyo'} })//새로운 객체로..
    }

    // 전달받은 방번호의 fruits배열의 요소 하나를 삭제하는 작업 메소드
    removeFruits= (index)=>{
        // index방번호 요소를 제거 원하는 index번호의 요소를 삭제하는 기능없음. 그리고 원본변경은 의미없음
        // 새로운배열을 만들어야 하는데 index번호에 해당하는 요소만 빼고 만들어야함 
        
        const aaa= this.state.fruits.filter(function(v,i){
            // 조건 :파라미터 index와 현재배열요소 번호인 i를 비교하여 같지 않은 요소만 새로운 배열에 합류
            return index != i
        })

        this.setState({fruits:aaa})

    }

    // fruits배열의 요소를 추가하는 작업 메소드
    addFruits= ()=>{
        // 배열에 요소추가하기
        // this.state.fruits[this.state.fruits.length]= "peach"
        // this.state.fruits.push('peach')
        // this.setState({fruits:this.setState.fruits})

        // const aa= [ ...this.state.fruits ] // 새 배열
        // aa.push('peach')
        // this.setState({fruits:aa})

        // [권장]
        // const bb= this.state.fruits.concat("peach") // 기존배열에 fruits 요소를 추가한 새로운 배열을 리턴해줌
        // this.setState({ fruits: bb })

        const cc= [ ...this.state.fruits, "peach" ]
        this.setState({fruits:cc})
    }

    // fruits배열의 1번방 요소를 변경하는 작업 메소드
    changeFruits= ()=>{
        // const aa= this.state.fruits
        // aa[1]="peach"
        // this.setState({ fruits:aa }) //이렇게 하면.. 배열객체는 변경된것이 아님.. 

        // const bb= [] //빈 배열
        // bb[0] = this.state.fruits[0]
        // bb[1] = this.state.fruits[1]
        // bb[2] = this.state.fruits[2]

        // bb[1] = "peach"
        // this.setState({ fruits:bb })

        // const cc= [this.state.fruits[0],this.state.fruits[1],this.state.fruits[2]]
        // cc[1] = "peach"
        // this.setState({fruits:cc})

        // ... spread 연산자
        const dd= [ ...this.state.fruits ]
        dd[1]= "peach"
        this.setState({fruits:dd})

    }
    
    // 나이를 1 증가시키는 작업 콜백 지정 함수
    increaseAge= ()=>{
        //this.state.age++
        this.setState({ age: this.state.age+1 })
    }

    // 나이를 변경하는 콜백 지정 함수
    changAge= ()=>{
        // state 변수는 불변성의 특징이 있음. 즉, 멤버값을 변경하는 것은 변경으로 인식하지 않음.
        this.setState({ age:25 }) // {}를 통해 새로운 객체로 변경하여 설정 [필요한 멤버만 변경하면 나머지 멤버는 그대로 유지됨]
        //this.state = { ...this.state, age:25}

    }

    // 화살표함수로 만드는 콜백지정 함수
    changMsg2= ()=>{
        this.setState({msg:"good afternoon"})
    }

    changMsg(){
        // 아주 특별한 멤버변수의 값을 변경하기
        // this.state.msg= "Have a good day"

        // state변수는 특별한 만큼 직접 대입연산자로 값변경하면 화면을 자동갱신하지 않음
        // state값을 변경해주는 특별한 메소드를 이용해야만 자동화면갱신됨
        this.setState({msg:"Have a good day"})
    }

    // change message button을 클릭하였을때 발동하는 콜백메소드 정의
    changText(){
        this.message = "Nice to meet you" // ERROR - this 키워드를 함수객체로 인식함. 즉, HomeComponent클래스로 인식하지 못함
        // 해결방법 2가지 [ 2번째가 중요(권장) ]
        // 방법1. .bind()메소드를 체결 하면 this 키워드를 HomeComponent 클래스로 인식
        // 방법2. 화살표 함수를 이용하는 방법


        //alert(this.message)
        // 변수값이 바뀌었다고 화면이 자동갱신되지는 않음
        // 화면을 다시 그리도록 다시 요청해야함 [render() 재호출]
        this.forceUpdate()

        // 방법2. 값이 변경되면 자동으로 화면이 갱신되는 Component 클래스의 아주 특별한 멤버변수 state를 이용
    }


    // 멤버함수 - 메소드 
    clicktBtn(){ // 선언적 함수
        alert('clicked button')
    }

} // homecomponent class

function aaa(){ // 선언적 함수
    alert('버튼이 클릭되었습니다.')
}

// 익명함수
const bbb= function(){
    alert('버튼 클릭 - 익명함수')
}

// 화살표함수
const ccc= ()=> alert('버튼 클릭 - 화살표함수')


export default HomeComponent