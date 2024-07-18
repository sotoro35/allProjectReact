import { AnimatePresence, animate, motion, useAnimation, useAnimationControls } from 'framer-motion'
import image from './image/hellokitty01.png'
import React, { useState } from 'react'

const Home= ()=>{

    // (실습2)
    const [imgAni, setImgAni] = useState('first')

    // (실습3) 애니메이션 동적제어 컨트롤러를 얻어오는 HOOK
    const controls= useAnimationControls()

    // (실습6)
    const [visible, setVisible]= useState(false)


    return (
        <>
            {/* (실습1) 기본 애니메이션 적용이 되는 요소 만들기 - div 요소를 기반으로 제작 */}
            <motion.div
                initial={{x:10, opacity:0}} // 애니메이션의 시작
                animate={{x:100,y:50, opacity:1}} // 애니메이션의 끝
                transition={{duration:3, repeat:Infinity}}
            >
                나는 애니메이션이 가능한 div 입니다.
            </motion.div>

            <hr></hr>

            {/* (실습2) 각 애니메이션 속성을 지정하는 객체를 변수명으로 지정하여 원할때 변경하면서 애니메이션 가능함 */}
            <motion.img
                src={image}
                style={{height:100, border:'solid',marginLeft:30, marginTop:30}}
                variants={{
                    first: {x:0, y:0},
                    second:{x:300, y:400, scale:4}
                }}
                animate={imgAni}
                //transition={{type:'tween'}}
                onClick={()=>alert()}
            ></motion.img>

            <button onClick={()=>setImgAni('second')}>애니메이션 변경</button>


            <hr></hr>
            {/* (실습3) 애니메이션의 동적제어를 위한 controller 이용하기 */}
            <button onClick={()=>controls.start('right')}>right</button>
            <button onClick={()=>controls.start('down')}>down</button>
            <button onClick={()=>controls.start('up')}>up</button>
            <motion.div
                style={{backgroundColor:'aqua', width:150, padding:8, margin:10, textAlign:'center', boxShadow:'3px 3px 10px gray'}}
                variants={{
                    right:{x:100},
                    down:{y:50},
                    up:{y:-200},
                }}
                animate={controls}

            > 애니메이션 제어 </motion.div>

            <hr></hr>

            {/* (실습4) : 의사 선택자의 처리를 할 수 있는 속성도 있음 */}
            <motion.h4
                style={{margin:16, padding:'8px 16px', border:'1px solid black', display:'inline-block', borderRadius:6, boxShadow:'0 0 10px gray', userSelect:'none'}}
                variants={{
                    hover:{scale:1.05},
                    press:{scale:0.95, backgroundColor:'black', color:'white'},
                    nomal:{scale:1.0},
                }}
                whileHover={'hover'}
                whileTap={'press'}
            > 의사 선택자 같은 효과를 줄수도 있음
            </motion.h4>

            
            <hr></hr>
            {/* (실습5) 드래그 할 수도 있음 */}
            <motion.div
                style={{width:100, height:100, backgroundColor:'lightgreen',boxShadow:'0 0 10px black', padding:16, borderRadius:8, margin:'0 auto'}}

                // drag={true}
                drag='x'
                dragConstraints={{left:-100, right:100}}
                dragElastic={0.3}

                onDragStart={(event, info)=>console.log('drage start : ' + info.point.x, info.point.y)}
                onDrag={(event, info)=>console.log('drage : ' + info.point.x, info.point.y)}
                onDragEnd={(event, info)=>console.log('drage end : ' + info.point.x, info.point.y + "변화량 : " + info.offset.x + ", 순간변화량 delta: " + info.delta.x)}
            >
                CONTENT
            </motion.div>
            
            {/* (실습6) state 변수를 통한 motion 요소의 등장/소멸 제어 [다이얼로그 / Modal 이라고 부름] */}
            <button onClick={()=>setVisible(true)}>모달 다이얼로그 보이기</button>

            {/* exit 속성이 반영되려면.. 요소가 dom에서 제거될때 애니메이션 적용까지 요소를 유지해주는 컴포넌트로 감싸야 함 */}
            <AnimatePresence>
            {
                visible && (
                <div style={modalStyle}>
                    
                    {/* 어두운 배경 */}
                    <motion.div 
                        style={modalBackStyle}
                        initial={{opacity:0}}
                        animate={{opacity:0.6}}
                        onClick={()=>setVisible(false)}
                        exit={{scale:0, y:'100vh'}}
                    >

                    </motion.div>

                    {/* 다이얼로그 박스 */}
                    <motion.div 
                    style={boxStyle}
                    initial={{scale:0, y:'-100vh'}}
                    animate={{scale:1, y:0}}
                    exit={{scale:0, y:'100vh'}}
                    >
                        <h4>MODAL</h4>
                        <hr></hr>
                        <div>
                            COTENTS
                        </div>
                    </motion.div>

                </div>
                )
            }
            </AnimatePresence>
        </>
    )
}

export default Home

const modalBackStyle= {backgroundColor:'black', opacity:'0.6', width:'100%',height:'100%', position:'absolute'}
const modalStyle= {position:'fixed', top:0, left:0, right:0, bottom:0, display:'flex', justifyContent:'center', alignItems:'center'}
const boxStyle= {width:300, height:500, backgroundColor:'white', borderRadius:8, padding:8, boxSizing:'border-box', boxShadow:'0 0 10px white'}