import React, {Component} from "react";
import localstorage from "local-storage";

import Row from "react-bootstrap/Row";

class RecentlyUsed extends Component {
    constructor(props) {
        super(props);
        let pages = JSON.parse(localStorage.getItem("page"));
        this.state = {
            pages: pages
        };
    }

    setPath(title, path) {
        let current = localStorage.getItem(title);
        const pages = localStorage.getItem("page")
        if (!current) {
            localstorage(title, path);
            const page = JSON.parse(pages);
            //localstorage("page", "("+title+","+JSON.parse(current)+")");
            const a = "<Col><button className=\"btn\" onClick=\"/" + title + "\"> <MdPhonelinkSetup style=\"fontSize: '8vh' className=\"home-circle-inner-text mb-2\"/> <p>+title+</p><button></Col>"
            if (!pages)
                localstorage("page", a)
            else
                localstorage("page", a + page);

            //localstorage.removeItem(title);
        }
    }


    render() {
        return (
            <Row className="home-nav-buttons"
                 dangerouslySetInnerHTML={{
                     __html: this.state.pages
                 }}/>
        )
    }
}

export default RecentlyUsed;
