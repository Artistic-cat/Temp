import React, {Component} from "react";
import localstorage from "local-storage";

import "./RecentlyUsed.css";

class RecentlyUsed extends Component {
    constructor(props) {
        super(props);
        let pages = new Map(JSON.parse(localStorage.getItem("pages")));
        this.state = {
            pages: pages
        };
    }

    setPath(title, path) {
        this.state.pages.set(title, path);
        localstorage("pages", Array.from(this.state.pages.entries()));
    }


    render() {
        return (
            <div className="recentlyUsed-container">
                {
                    [...this.state.pages].map((entry) => {
                        let title = entry[0]
                        let path = entry[1]
                        return <p><a href={path}>{title}</a></p>
                    })
                }
            </div>
        )
    }
}

export default RecentlyUsed;
