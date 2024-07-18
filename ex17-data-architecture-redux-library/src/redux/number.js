// Ducks 패턴 [교재 436p] - number값에 관련된 리덕스 코드들을 하나의 .js파일 안에 모두 작성
// [ state , action, reduser ] - 이를 모아서 'module'이라고 부름

// (1) state : 전역저장소 store에 저장할 number의 초기값
const initState= {
    number: 0,
}

// (2) action : 어떻게 변경하고 싶은지 .. 동작명 (액션 타입)을 지정
export const increaseAction= {type:'increase'}
export const decreaseAction= {type:'decrease'}

// (3) reducer : 기존 state값과 action객체를 파라미터로 전달받아 
// action의 type에 따라 state값을 변경하여 새로운 state 객체를 리턴해주는 함수
export default function numberReducer(state= initState, action){
    switch(action.type){
        case 'increase' :
            return { ...state, number:state.number+1}

        case 'decrease' :
            return { ...state, number:state.number-1}

        default:
            return state
    }
    
}
