import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {PropagateLoader} from 'react-spinners'
import MovieItem from "../component/MovieItem"
import styled from "styled-components"

const MovieDetail= ()=>{

    // url parameter 받기 -- 서브경로 [ /movie/:id ] 이때... :id가 변수명
    const params= useParams()

    const [detail,setDetail]= useState()

    useEffect(()=>{
        const url=` https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}&with_images=true&with_cast=true`
        fetch(url).then(res=>res.json()).then(json=>setDetail(json.data.movie)).catch(e=>alert(e.messge))
    },[])

    return (
        <Container>
            <div className="header">
            <h1>MOVIE DETAIL</h1>
            <p>영화 고유 식별자 id : {params.id}</p>
            </div>
            <main>
                {
                 detail ? <MovieItem detail={detail}/> : <p><PropagateLoader/></p>
                }
            </main>
            
        </Container>
    )
}

export default MovieDetail

const Container= styled.div`

    width: 70%;
    text-align: center;

    margin: 0 auto;

    .header{
        padding: 3rem;     

        p{
            margin-top: 1rem;
            font-size: 12px;
        }
    }

  


`

