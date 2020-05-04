import React, {Component} from "react";
import styles from './howItWorks.module.sass'
import Header from "../../components/Header/Header";
import Video from "./Video/Video";
import FiveSteps from "./FiveSteps";
import StartContest from "./StartContest";
import Questions from "./Question";

class HowWorks extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Video/>
                <FiveSteps/>
                <StartContest/>
                <Questions/>
            </div>

        )
    }
}

export default HowWorks;