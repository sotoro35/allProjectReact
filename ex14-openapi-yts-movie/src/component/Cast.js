import { useState } from "react"
import styled from "styled-components"

const Cast= ({cast})=>{

    return (
        <Container>
            {
                cast.map((value,index)=>{
                    return (
                        <div key={index} className="cast">
                        <img src={value.url_small_image} alt="cast"></img>
                        <p className="name">{value.name}</p>
                        <p className="character">{value.character_name}</p>
                        </div>
                 )
             })
            }
        </Container>
    )
}

export default Cast

const Container= styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .cast{
        width: 20%;
        padding: 2rem;
        margin: 0 .5rem;
        border: 1px solid gray;
        border-radius: 8px;

        img{
        border: 1px solid black;
        border-radius: 50%;
        box-sizing: border-box;
        }

        .name{
            font-size: 12px;
            font-weight: 500;
            margin-top: .5rem;
        }

        .character{
            font-size: 10px;
            margin-top: .5rem;
        }
    }

    

`