import { useState } from "react"
import styled from "styled-components"
import Cast from "./Cast"

const MovieItem= ({detail})=>{

    return (
        <Container>

            <div className="title">
                <p>{detail.title}</p>
            </div>

            <div className="info">
                <p>개봉 : {detail.year}년</p>
                <p>평점 : {detail.rating}점</p>
                <p>런닝타임 : {detail.runtime}분</p>
                <p>좋아요 : {detail.like_count}</p>
            </div>

            <div className="screenshotBorder">
            <div className="screenshot">
                <img src={detail.large_screenshot_image1} alt="screenshot"></img>
                <img src={detail.large_screenshot_image2} alt="screenshot"></img>
                <img src={detail.large_screenshot_image3} alt="screenshot"></img>
            </div>
            </div>

            <div className="content">
                <p>{detail.description_intro}</p>
            </div>

            <div className="cast">
                <Cast cast={detail.cast}/>
            </div>
        

         </Container>
    )
}

export default MovieItem

const Container= styled.div`


    .title{
        font-weight: bold;
        font-size: 22px;
        margin: 0 3rem 3rem 3rem ;
    }

    .info{
        display: flex;
        margin: .5rem 0;
        padding: .5rem;
        justify-content: space-between;

    }

    .screenshotBorder{

        border: 1px solid black;
        border-radius: 8px;
        padding: .5rem;

        .screenshot{
        border-radius: 8px;
        padding: 0.2rem;
        box-sizing: border-box;
        overflow-x:scroll;

        display: flex;
        flex-direction: row;

        img{
            width: 90%;
            margin: 0 .1rem;
            flex-grow: 1;
        }
    }
    }

    .content{
        word-wrap: break-word;
        text-align: left;
        padding: .5rem;
    }



`



