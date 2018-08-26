import React from 'react';
import { EditStyle } from "../EditStyle.less";

class Direction extends React.Component {
    handleChange(e) {
        let direction = e.target.value;
        this.props.onChange(direction);
    }
    render() {
        return (
            <div className = "row edit">
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className = "btn btn-default"
                         data-placement = "top"
                         data-toggle = "tooltip"
                         disabled
                         title = "Set CSS text direction property value.">
                        <i className = "fa fa-map-signs fa-lg"></i>
                    </div>
                    &nbsp;
                    <label htmlFor = "direction">Direction</label>
                </div>
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <select defaultValue = "ltr"
                            onChange = { this.handleChange.bind(this) }>
                        <option value = "ltr">Left to right</option>
                        <option value = "rtl">Right to left</option>
                    </select>
                </div>
            </div>
        );
    }
};

export default Direction;
