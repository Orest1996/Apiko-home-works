import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faSearch, faQuestion, faBullhorn, faCog } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
            <div className="header">
                <div className="header-left">
                    <FontAwesomeIcon  color="#ffffff" icon={faTh}/>
                    <span>To Do</span>
                </div>
                <div className="header-center">
                    <div className="header-search">
                        <FontAwesomeIcon size="xs" color="#0178d7" icon={faSearch}/>
                        <span style={{color: "#0178d7"}}>Search</span>
                    </div>
                </div>
                <div className="header-right">
                    <FontAwesomeIcon size="sm" color="#ffffff" icon={faCog}/>
                    <FontAwesomeIcon size="sm" color="#ffffff" icon={faQuestion}/>
                    <FontAwesomeIcon size="sm" color="#ffffff" icon={faBullhorn}/>
                    <span>O M</span>
                </div>
            </div>
        )
};

export default Header
