import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Movie= ({movie})=>{

    // 페이지 전환을 해주는 기능함수 제공하는 HOOK
    const navigate= useNavigate()
    const goMovieDetail= ()=>{
        navigate('/movie/' +movie.id)
    }

    return (
        <Card onClick={goMovieDetail}>
            <div className="title">{movie.title}</div>
            <div className="poster"><img src={movie.large_cover_image} alt="poster"></img></div>
            <div className="year">{movie.year}년도 개봉작</div>
            <div className="rating">평점: <span>{movie.rating}</span> 점</div>
            <div className="genres">{movie.genres.join(', ')}</div>
        </Card>
    )
}

export default Movie

const Card= styled.div`
    // 카드모양 스타일
    width: 300px;
    box-sizing: border-box;
    background-color: white;
    border: 1px solid black;
    margin: 1rem .5rem;
    color: gray;
    font-size: 12px;
    padding: 1rem;
    border-radius: 8px;

    .title{
        font-weight: bold;
        font-size: 16px;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .poster img{
        width: 70%;
        border-radius: 8px;
        margin-bottom: 1rem;
    }
    
    .year{
        padding: .5rem;
    }

    .rating{
        padding: .5rem;

        span{
            font-weight: bold;
            color:coral;
        }
    }

    .genres{
        padding: .5rem;
    }

    &:hover{
        cursor: pointer;
        transform: scale(1.05, 1.05); //변환효과
        background-color: lightyellow;
    }

    transition: transform .5s, background-color .5s; //전환효과
    
`