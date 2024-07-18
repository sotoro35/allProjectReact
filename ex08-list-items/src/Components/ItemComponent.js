import {Component} from 'react'
import styles from './itemComponent.module.css'

export default class ItemComponent extends Component{
    render(){
        return(
            <div key={this.props.key} className={styles.item} onClick={this.props.onClick}>
                <div className={styles.line1}>
                    <span>{this.props.item.no}</span>
                    <span>{this.props.item.name}</span>
                </div>
                <div className={styles.line2}>
                    {this.props.item.message}
                </div>
            </div>
        )
    }
}