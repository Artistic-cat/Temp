import React from 'react';

class CascadingDropdown extends React.Component {
    keys_data = []
    constructor(props, fieldArray, jsonData) {
        super(props);
        this.state = {
            countries: [],
            states: [],
            cities: [],
            selectedCountry: '--Choose Country--',
            selectedState: '--Choose State--',
            jsonData: [
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
            ],
            fieldArray: ["Country", "State", "City"]
        };
        this.changeCountry = this.changeCountry.bind(this);
        this.changeState = this.changeState.bind(this);
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
        this.items = this.state.fieldArray.map((item) =>

            <div>
                <label>Select {item}: </label>
                <select placeholder={item} value={this.state.e} onChange={(event) => {
                    this.setState({e: event.target.value})
                    this.setState({states: this.state.jsonData.find(cntry => cntry.name === event.target.value).states});
                }
                }>
                    <option>--Choose {item}--</option>
                    {this.state.jsonData.find(i => i.e).map((e, key) => {
                        return <option key={key}>{e.name}</option>;
                    })}
                </select>
            </div>
        );
        return (
            <div>
                <h4>Setup API Driven Product</h4>
                {this.items}

                <div>
                    <label>State</label>
                    <select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
                        <option>--Choose State--</option>
                        {this.state.states.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                            </select>
                        </div>

                {/*-<div>
                            <label>City</label>
                            <select placeholder="City">
                                <option>--Choose City--</option>
                                {this.state.cities.map((e, key) => {
                                    return <option key={key}>{e}</option>;
                                })}
                            </select>
                        </div>*/}


                    </div>
        )
    }
}

export default CascadingDropdown;