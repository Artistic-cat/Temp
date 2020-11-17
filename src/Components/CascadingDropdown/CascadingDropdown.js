import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import {Container} from "react-bootstrap";

import "./CascadingDropdown.css";

class CascadingDropdown extends React.Component {
    constructor(props, fieldArray, jsonData) {
        super(props);
        this.state = {
            countries: [],
            states: [],
            cities: [],
            selectedCountry: '--Choose Country--',
            selectedState: '--Choose State--',
            jsonData: jsonData,
            fieldArray: fieldArray
        };
        this.changeCountry = this.changeCountry.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    componentDidMount() {
        this.setState({
            countries: [
                {
                    name: 'Germany',
                    states: [{name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']}]
                },
                {
                    name: 'Spain',
                    states: [{name: 'B', cities: ['Barcelona']}, {
                        name: 'A',
                        cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']
                    }]
                },
                {name: 'USA', states: [{name: 'C', cities: ['Downers Grove']}]},
                {name: 'Mexico', states: [{name: 'D', cities: ['Puebla']}]},
                {name: 'India', states: [{name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']}]},
            ]
        });
    }

    changeCountry(event) {
        this.setState({selectedCountry: event.target.value});
        this.setState({states: this.state.countries.find(cntry => cntry.name === event.target.value).states});
    }

    changeState(event) {
        this.setState({selectedState: event.target.value});
        const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
        this.setState({cities: stats.find(stat => stat.name === event.target.value).cities});
    }

    render() {
        return (
            <>
                <Header/>
                <Sidebar/>
                <Container>
                    <div className="setupApi-rectangle">
                        <h4>Setup API Driven Product</h4>

                        <div>
                            <label>Country</label>
                            <select placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
                                <option>--Choose Country--</option>
                                {this.state.countries.map((e, key) => {
                                    return <option key={key}>{e.name}</option>;
                                })}
                            </select>
                        </div>

                        <div>
                            <label>State</label>
                            <select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
                                <option>--Choose State--</option>
                                {this.state.states.map((e, key) => {
                                    return <option key={key}>{e.name}</option>;
                                })}
                            </select>
                        </div>

                        <div>
                            <label>City</label>
                            <select placeholder="City">
                                <option>--Choose City--</option>
                                {this.state.cities.map((e, key) => {
                                    return <option key={key}>{e}</option>;
                                })}
                            </select>
                        </div>


                    </div>
                </Container>
                <Footer/>
            </>
        )
    }
}

export default CascadingDropdown;