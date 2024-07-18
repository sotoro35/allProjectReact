import React,{Component} from "react";
import './ex.css'

//-- 과제 ------------- [화면에 학생의 정보를 보여주는 UI 제작 / 버튼 클릭으로 정보값 변경 ]
// 버튼1 : 이름(name) 변경
// 버튼2 : 나이(age) 변경
// 버튼3 : 대학(collage) 정보 중 이름(name) 변경
// 버튼4 : 대학(collage) 정보 중 복수전공(majors) 변경
// 버튼5 : 대학(collage) 정보 중 학년(grade) 1 증가
// 버튼6 : 졸업여부(graduation) 변경 [토글/체크박스 UI는 아직 배우지 않았기에 버튼으로 true/false 변경]



class EX02BtnEvent extends Component{
    state= {
        name:"sam",
        age:20,
        collage:{
            name:"미래대학교",
            majors:["앱개발자","웹개발자"],
            grade:1,
        },

        graduation: false
    }

    // majorName= "major"
    // major


    render(){
        return (
            <div className="root">
                <div className="input">
                    {/* <input type="text" placeholder="이름을 입력하세요" value={this.state.name}></input>
                    <input type="number" placeholder="나이를 입력하세요" value={this.state.age}></input>
                    <input type="text" placeholder="학교를 입력하세요"value={this.state.collage.name}></input> */}
                    {/* <div>
                        <label><input type="radio" name={this.major} value={this.state.collage.majors[0]}></input>"앱개발자"</label>
                        <label><input type="radio" name={this.major} value={this.state.collage.majors[1]}></input>"웹개발자"</label>
                        
                    </div> */}
                    {/* <select>
                        <option>1학년</option>
                        <option>2학년</option>
                        <option>3학년</option>
                        <option>4학년</option>
                    </select> */}

                    {/* <button onClick={this.save}>등록하기</button> */}

                    <div>
                    <h2>이름: {this.state.name} , 나이: {this.state.age} </h2>
                    <h3>대학교: {this.state.collage.name}</h3>
                    <h3>전공: {this.state.collage.majors[1]} </h3>
                    <h3>학년: {this.state.collage.grade}학년</h3>
                    <h3>졸업여부 {this.state.graduation.toString()}</h3>
                </div>
                    
                    <button onClick={this.changeName}>이름 변경</button>
                    <button onClick={this.changeAge}>나이 변경</button>
                    <button onClick={this.changeCollageName}>대학교 변경</button>
                    <button onClick={this.changeMajor}>전공 변경</button>
                    <button onClick={this.changeGrade}>학년 변경</button>
                    <button onClick={this.changeGraduation}>졸업여부 변경</button>
                    
                </div>
            </div>
        )
    }
    
    changeGraduation= ()=>{
        if(this.state.graduation){
            const aa= {
                ...this.state,
                graduation:false
            }
            this.setState(aa)
            this.state.graduation = true
        }else{
            const aa= {
                ...this.state,
                graduation:true
            }
            this.setState(aa)
            this.state.graduation = false

        }
        
    }

    changeGrade= ()=>{
        const aa= {
            ...this.state.collage,
            grade: this.state.collage.grade+1
        }

        this.setState({collage:aa})
        
    }

    changeMajor= ()=>{
        const bb= [...this.state.collage.majors]
        bb[1] = "안드로이드개발"
        const cc= {
            ...this.state.collage,
            majors:bb
        }
        this.setState({collage:cc})
    }


    changeCollageName= ()=>{
        const aa= { 
            ... this.state.collage, 
            name:"IT대학교"
        }
        this.setState({collage:aa})
    }

    changeAge= ()=>{
        this.setState({age:25})
    }

    changeName= ()=>{
        this.setState({name:"robin"})

    }
}

export default EX02BtnEvent
