import React from 'react';

class CascadingDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldArray: ["Country", "State", "City"],
            dataArray: [[["India", "USA"]],
                [["Bangalore", "Chennai"], ["Texas", "WDC"]],
                [["Bangalore Urban", "Mysore"], ["Chennai Central", "Coimbatore"]]]
        };
    }

    render() {
        this.items = [...this.state.fieldArray].map((item, e) =>

            <div>
                <label>Select {item}: </label>
                <select placeholder={item} value={this.state.e} onChange={(event) => {
                    this.setState({e: event.target.value})
                }
                }>
                    <option>--Choose {item}--</option>
                    {[...this.state.dataArray[e]].map((data, key) => {
                        return [...data].map((k, v) => {
                            return <option key={v}>{String(k)}</option>;
                        })
                    })}
                </select>
            </div>
        );

        return (
            <div>
                {this.items}
            </div>
        )
    }
}

export default CascadingDropdown;