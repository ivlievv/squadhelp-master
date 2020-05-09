import React, {Component} from "react";
import styles from './howItWorks.module.sass'
import Header from "../../components/Header/Header";
import Video from "./Video/Video";
import FiveSteps from "./FiveSteps";
import StartContest from "./StartContest";
import QuestionsText from "./QuestionText";
import Question from "./Questions";
import Footer from "../../components/Footer/Footer";

class HowWorks extends Component{

    render() {
        return (
            <div>
                <Header/>
                <Video/>
                <FiveSteps/>
                <StartContest/>
                <QuestionsText/>
                <Question/>
                <Footer/>
            </div>

        )
    }
}

export default HowWorks;