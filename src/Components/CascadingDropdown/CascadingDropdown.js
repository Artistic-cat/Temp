import React from 'react';

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
            <div id="container">
                <h2>Cascading or Dependent Dropdown using React</h2>

                {/*this.state.fieldArray.forEach((item, i) =>
                    (
                    <div>
                        <label>{item}</label>
                        <select placeholder={item} value={'this.state.selected'+item}>
                            <option>Select an Option</option>
                        </select>
                    </div>
                    )
                )
                */}

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
        )
    }
}

export default CascadingDropdown;