import styled from "styled-components"

const Pagination= ({total,number,page,setPage})=>{

    const button_count= Math.ceil(total/number)
    // 개수만큼의 배열 요소가 필요. 요소값을 1부터.. 
    const numbers= new Array(button_count).fill().map((v,index)=>index+1)

    return (
        <PageButtonContainer>
            {/* [1] 이전 버튼 disabled 클릭되지않게 하는 속성 */} 
            <PageButton disabled={page==1?'disabled':null} onClick={()=>setPage(page-1)}>&lt;</PageButton> 
            
            {/* [2] 페이지 숫자 버튼들 */}
            {
                numbers.map((num,index)=><PageButton key={index} current={page==num?'page':null} onClick={()=>setPage(num)}>{num}</PageButton>)
            }
            {/* [다음 버튼] */}
            <PageButton disabled={page==button_count?'disabled':null} onClick={()=>setPage(page+1)}>&gt;</PageButton>
        </PageButtonContainer>
    )
}

export default Pagination

const PageButton= styled.button`
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: white;
    margin: 0.3rem;
    color: black;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    &:hover{
        background-color: orange;
        cursor: pointer;
        transform: translateY(-2px);
    }

    &[current]{
        background-color: orange;
        cursor: revert;
        transform: revert;
    }

    &[disabled]{
        background-color: white;
        cursor: no-drop;
        transform: revert;  
    }

`

const PageButtonContainer= styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`