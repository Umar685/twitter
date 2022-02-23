import React from 'react';
import {withRouter} from "react-router-dom";
import UrlArgsBundle from "./core/url_args_bundle";
import {ACTIVITY_TAG} from "./utils/Constants";
import LoginActivity from "./ui/activities/LoginActivity/LoginiActivity"

class Twitter extends React.Component {

    render() {
        const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);

        if (urlArgsBundle.hasActivityTag()) {
            let activityTag = urlArgsBundle.getActivityTag();

            if (activityTag === ACTIVITY_TAG.LOGIN_ACTIVITY) {
                return <LoginActivity/>
            }
        } else {
            urlArgsBundle.setActivityTag(ACTIVITY_TAG.LOGIN_ACTIVITY)
            this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
        }


        return <></>
    }
}

export default withRouter(Twitter);