import {Component} from "react";
import localstorage from "local-storage";

/**
 * @Author: Rifas
 *
 * Component to add the page and its corresponding url to the recently used localstorage
 * Call this on the required pages as
 * new RecentlyUsed().setPath("<Display_Name_Here>", window.location.href)
 *
 */
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
