function show(){
    //document.write('show') // 외부 문서에서는 document로 직접 접근할수 없어서...안됨
    const div = document.createElement('div')
    div.textContent= "show!!"
    document.body.appendChild(div)
}

// 하나의 .js에서 적어도 1개는 default로 된 export로 추출
export default show //다른 문서에서 import로 사용하려면 허용을 해줘야함

// 또 다른 함수
export function output(msg){
    const div = document.createElement('div')
    div.textContent= msg
    document.body.appendChild(div)
}

//변수나 상수도 export 가능
export const num= 100
export let age= "변수입니다."
