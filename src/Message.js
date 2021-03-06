import React from 'react';
import ReactDOM from 'react-dom';
import img from './maxresdefault.jpg'
import './Message.css';


class Message extends React.Component {
    render() {
        return (
            <div>
                <div class="flex-container3">
                    <div class="message-text" >
                        <h1 class="h">Message from the Director</h1>
                        <p >Indian Institute of Technology(Indian School Of Mines) Dhanbad is one of the most reputed universities for technological education and research in India. From its inception in 1926 the school had a national outlook. What started as an institution to impart mining education has graduated into a full fledged technical institution of international acclaim offering programs like B.Tech, Dual Degree, Integrated M.Sc, Integrated M.Sc.Tech, M.tech, M.Phil and MBA. The school has relations with reputed universities worldwide and is foraying into newer areas of academic endeavours. The Career Development Cell is the nodal point of contact for comapnies seeking to establish a constructive relationship with IIT(ISM). </p>
                    </div>
                    <div class="img2"><img src={img} class="image2" /></div>
                </div>
            </div>

        )
    }
}
export default Message;