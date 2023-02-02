import React from "react";
import "./Quiz.css";

const Quiz = () => {
    return(
        <div>
            <div className="borderP">
                <div className="quiz">
                    <p>Q1.  What is react?</p>
                    <input type="radio" value="" name="gender" /> React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. <br></br>
                    <input type="radio" value="" name="gender" /> React is a free and open-source back-end Java library for building backend API. <br></br>
                    <input type="radio" value="" name="gender" /> React is a high level language <br></br>
                    <input type="radio" value="" name="gender" /> None of the above <br></br>
                    <p className="count">1 of 10</p>
                </div>
            </div>
            <div className="borderP">    
                <div className="quiz">
                    <p>Q2.  Which ReactJS function renders HTML to the web page?</p>
                    <input type="radio" value="" name="optn" /> render() <br></br>
                    <input type="radio" value="" name="optn" /> ReactDOM.render() <br></br>
                    <input type="radio" value="" name="optn" /> renders() <br></br>
                    <input type="radio" value="" name="optn" /> ReactDOM.renders() <br></br>
                    <p className="count">2 of 10</p>
                </div>
            </div>
            <div className="borderP">    
                <div className="quiz">
                    <p>Q3.  JSX stands for _____.</p>
                    <input type="radio" value="" name="optn" /> JSON <br></br>
                    <input type="radio" value="" name="optn" /> JSON XML <br></br>
                    <input type="radio" value="" name="optn" /> JavaScript XML <br></br>
                    <input type="radio" value="" name="optn" /> JavaScript and AngularJS <br></br>
                    <p className="count">3 of 10</p>
                </div>
            </div>    
            <div className="borderP">    
                <div className="quiz">
                    <p>Q4.  A class component must include the _______ statement.</p>
                    <input type="radio" value="" name="optn" /> extends React.Component <br></br>
                    <input type="radio" value="" name="optn" /> extends React <br></br>
                    <input type="radio" value="" name="optn" /> extends Component <br></br>
                    <input type="radio" value="" name="optn" /> extends React.Component.All <br></br>
                    <p className="count">4 of 10</p>
                </div>
            </div>
        </div>
    );
};

export default Quiz;