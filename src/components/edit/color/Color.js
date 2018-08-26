import React from 'react';
import { EditStyle } from "../EditStyle.less";

class Color extends React.Component {
    handleChange(e) {
        let color = e.target.value;
        this.props.onChange(color);
    }
    render() {
        return (
            <div className = "row edit">
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className = "btn btn-default"
                         data-placement = "top"
                         data-toggle = "tooltip"
                         disabled
                         title = "Set CSS color property value.">
                        <i className = "fa fa-paint-brush fa-lg"></i>
                    </div>
                    &nbsp;
                    <label htmlFor = "color">Color</label>
                </div>
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <input onChange = { this.handleChange.bind(this) }
                           type = "color" />
                </div>
            </div>
        );
    }
};

export default Color;
