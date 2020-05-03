import React, {Component} from "react";
import styles from './howItWorks.module.sass'
import Header from "../../components/Header/Header";
import Video from "./Video/Video";
import FiveSteps from "./FiveSteps";

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
            </div>

        )
    }
}

export default HowWorks;