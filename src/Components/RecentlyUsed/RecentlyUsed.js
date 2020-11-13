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
}

export default RecentlyUsed;
