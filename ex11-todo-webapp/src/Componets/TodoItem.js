import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import './TodoItem.scss'

// 항목 1개의 정보를 받아와야 함
const TodoItem= (props)=>{

    const todoItemStyleClassName= props.todo.isDone ? 'todoItem isDone' : 'todoItem'

    return (
        <div className={todoItemStyleClassName}>
            {/* 1) 체크박스 */}
            <div className="checkbox" onClick={ ()=>props.toggleDone(props.index) }>
                {/* <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank> */}

                { props.todo.isDone ? <IoMdCheckboxOutline/> : <MdCheckBoxOutlineBlank/> }
            </div>

            {/* 2) 할일글씨 */}
            <div className="content">
                { props.todo.content }
            </div>
            
            {/* 3) 삭제버튼 */}
            <div className="delete" onClick={()=>{ props.deleteTodo(props.todo.no) }}>
                <MdDeleteForever></MdDeleteForever>
            </div>
        </div>
    )
}

export default TodoItem