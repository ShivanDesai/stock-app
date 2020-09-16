import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render(){
        if(this.props.data == null)
            return (<h1></h1>);
        if(Object.keys(this.props.data['Global Quote']).length === 0 && this.props.data['Global Quote'].constructor === Object)
            return (<h4 style={{color:'white'}}>Please enter a valid company code...</h4>);
        return (
            <div className="card">
                <h2>{this.props.data['Global Quote']['01. symbol']}</h2>
                <h3>Current price: {this.props.data['Global Quote']['05. price']}</h3>
                <p>Open: {this.props.data['Global Quote']['02. open']}</p>
                <p>High: {this.props.data['Global Quote']['03. high']}</p>
                <p>Low: {this.props.data['Global Quote']['04. low']}</p>
                <p>Volume: {this.props.data['Global Quote']['06. volume']}</p>
            </div>
        );
    }
}
    
export default Card;
    