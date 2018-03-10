import React, {Component} from "react";
import classNames from "classnames";
import Link from "pawjs/src/components/link";
import {renderSubRoutes} from "pawjs/src/utils/renderer";
import * as styles from "./portfolio.scss";






//BODY CONTENT
export default class Title extends Component {
  render() {
		return (
		  <div className="mt-5">
		    <h3>Portfolio</h3>
		    <CardContainer numCards={2} />
		  </div>
		);
	}
};


//Card
class CardContainer extends Component {
  constructor(props){
        super(props);
    }
    
	render(){
		var cards = [];
		for(var i = 1; i <= this.props.numCards; i += 1){
			cards.push(<CardItem idNum={i}  />);
		}
		return (
			<div className="card-flex">{cards}</div>
		);
	}
};

class CardItem extends Component {
  constructor(props){
        super(props);
  }
    render() {
		return(
			<div id={"card-" + this.props.idNum} className="card-flex-item">
			  <CardContent/>
			</div>
		);
	}
};

class CardContent extends Component {
  constructor(props){
        super(props);
    this.state = {
      imgSrc: [
        "https://dummyimage.com/400x200/000000/fff.png",
        "https://dummyimage.com/400x200/41578a/fff.png",
        "https://dummyimage.com/100x100/8a4242/fff.png",
        "https://dummyimage.com/100x100/428a49/fff.png"
      ]
  }  
  }
	render(){
		return(
			<div className="card-flex-wrapper">
				<div className="card-flex-image">
					<img src={this.props.imgSrc} alt="img placeholder" />
				</div>
				<div className="card-flex-content">
					<h5>{this.props.headerText}</h5>
					<p>{this.props.description}</p>
					<a href={this.props.url} className="card-flex-button btn-block">More details</a>
				</div>
			</div>
		);
	}
};

//Change number of cards 1-10
//ReactDOM.render(<CardContainer numCards={2} />, document.getElementById('card'));

//Card content here
	/* CardContent.propTypes = {
imgSrc: PropTypes.string,
headerText: PropTypes.string,
description: PropTypes.string,
url: PropTypes.string
}



ReactDOM.render(<CardContent 
	imgSrc="https://picsum.photos/300/200?image=1075"
	headerText="Xlsx to Icalendar"
	description="Creates standard Icalendar events from xlsx file with events."
	url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-2'));

ReactDOM.render(<CardContent 
	imgSrc="https://placeimg.com/640/480/tech"
	headerText="Three"
	description="I'm a card and I'm Third"
	url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-3'));
*/

