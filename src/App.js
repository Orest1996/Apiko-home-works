import React, {useState} from "react";
import Reviews from "./Reviews";
import Shop from "./Shop";

import {
    Switch,
    Route,
} from "react-router-dom";
import NoMatch from "./NoMatch";
import Navigation from "./Navigation";
import {routes} from "./routes";
import Home from "./Home";
import ReviewPage from "./ReviewPage";

export default function App(props) {
    const [isNav, setIsNav] = useState(true);

    return (
        <div>
            {
                isNav
                    ? <Navigation/>
                    : null
            }

            <Switch>
                <Route exact path={routes.HOME} component={Home}/>
                <Route path={routes.SHOP} component={Shop}/>
                <Route path={routes.REVIEWS} render={() => <Reviews setIsNav={setIsNav}/>}/>
                <Route exact path={routes.REVIEWS + ':id'} render={() => <ReviewPage setIsNav={setIsNav}/>}/>
                <Route path={routes.NO_MATCH} component={NoMatch}/>
            </Switch>
        </div>
    )
}
