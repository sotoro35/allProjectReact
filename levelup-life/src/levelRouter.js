import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main'

const LevelRouter= ()=>{
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>}></Route>

        </Routes>
    </BrowserRouter>
 

}

export default LevelRouter