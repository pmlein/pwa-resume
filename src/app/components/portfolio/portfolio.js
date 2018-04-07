import React, {Component} from "react";
import ProjectImg from "src/resources/images/Projects.jpg";
import ConvertImg from "src/resources/images/convert.jpg";

//BODY CONTENT
export default class Portfolio extends Component {
  render() {
		return (
		  <div className="mt-5">
		    <h3>Projects</h3>
		    <CardContainer numCards={3} />
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
			<div key={i} className="card-flex">{cards}</div>
		);
	}
}

class CardItem extends Component {
  constructor(props){
        super(props);
  }
    render() {
		return(
			<div id={"card-" + this.props.idNum} className="card-flex-item">
			  <CardContent idx={this.props.idNum - 1} />
			</div>
		);
	}
}

class CardContent extends Component {
  constructor(props){
        super(props);
    this.state = {
      imgSrc: [
				ProjectImg,
				ConvertImg,
        "https://placeimg.com/640/480/tech",
        "https://dummyimage.com/100x100/8a4242/fff.png",
        "https://dummyimage.com/100x100/428a49/fff.png"
      ],
       headerText:[
       	"Software Developer Portfolio",
       	"Xlsx to Icalendar",
       	"Ical events to Google Calendar"
      ],
       description: [
       	"This is a personal portfolio page project with the goal to learn Reactjs and progressive web applications and create an online experience to showcase my projects.",
       	"Creates standard Icalendar events from xlsx file with events.",
       	"Application automatically sends events of standard Icalendar file to Google calendar."
      ],
			 url: ["https://github.com/pmlein/pwa-resume", 
			 "https://github.com/pmlein/js-xlsx2ics",
			 "https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout"],
			 btnText: [
				"View on Github",
				"View on Github",
				"Coming soon"
		 ],
      	
      	
    };
  }
	render(){
		return(
			<div className="card-flex-wrapper">
				<div className="card-flex-image">
					<img className="img-thumbnail" src={this.state.imgSrc[this.props.idx]} alt="img placeholder" />
				</div>
				<div className="card-flex-content">
					<h5>{this.state.headerText[this.props.idx]}</h5>
					<p>{this.state.description[this.props.idx]}</p>
					<a href={this.state.url[this.props.idx]} className="card-flex-button btn-block">{this.state.btnText[this.props.idx]}</a>
				</div>
			</div>
		);
	}
}


