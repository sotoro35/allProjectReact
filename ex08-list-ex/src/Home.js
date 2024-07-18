import {Component, Fragment} from 'react'
import ItemComponent from './ItemComponent'

export default class Home extends Component{

    state= {
        items: [
            {no:1, name:'sam', message:'Hello react', image:"https://cdn.pixabay.com/photo/2020/03/16/02/30/mountain-4935486_1280.jpg"},
            {no:2, name:'robin', message:'Hello android', image:"https://cdn.pixabay.com/photo/2019/07/30/06/47/lotus-4372165_1280.jpg"},
            {no:3, name:'hong', message:'Hello web', image:"https://cdn.pixabay.com/photo/2019/02/16/11/56/flower-4000159_1280.jpg"},
            {no:4, name:'son', message:'Hello ios', image:"https://cdn.pixabay.com/photo/2019/01/23/09/52/bee-3949874_1280.jpg"},
        ] 
    }

    render(){
        return (
            <Fragment>
                <div style={{border:'1px solid red',padding:8,margin:8}}>
                    {
                        this.state.items.map((item,index)=>{
                            return <ItemComponent key={index} item={item}></ItemComponent>
                            
                        })
                    }

                </div>
            </Fragment>
        )
    }
}