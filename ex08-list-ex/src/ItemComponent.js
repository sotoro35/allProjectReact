import {Component} from 'react'
import ItemStyle from './ItemComponent.module.css'

export default class ItemComponent extends Component{
    render(){
        return (
            <div key={this.props.key} className={ItemStyle.item}>
            
                <div className={ItemStyle.line}>
                <div className={ItemStyle.line1}>
                    <span>{this.props.item.no}</span>
                    <span>{this.props.item.name}</span>
                </div>
                <div className={ItemStyle.line2}>
                    <span>{this.props.item.message}</span>
                </div>
                </div>

                <img src={this.props.item.image} className={ItemStyle.img}></img>
               
            </div>
        )
    }

}