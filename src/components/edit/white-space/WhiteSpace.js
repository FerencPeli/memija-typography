import React from 'react';
import { EditStyle } from "../EditStyle.less";

class WhiteSpace extends React.Component {
    handleChange(e) {
        let whiteSpace = e.target.value;
        this.props.onChange(whiteSpace);
    }
    render() {
        return (
            <div className = "row edit">
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className = "btn btn-default"
                         data-placement = "top"
                         data-toggle = "tooltip"
                         disabled
                         title = "Set CSS white-space property value.">
                        <i className = "fa fa-square-o fa-lg"></i>
                    </div>
                    &nbsp;
                    <label htmlFor = "white-space">White Space</label>
                </div>
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <select defaultValue = "normal"
                            onChange = { this.handleChange.bind(this) }>
                        <option value = "normal">Normal</option>
                        <option value = "nowrap">No wrap</option>
                        <option value = "pre">Pre</option>
                        <option value = "pre-line">Pre line</option>
                        <option value = "pre-wrap">Pre wrap</option>
                    </select>
                </div>
            </div>
        );
    }
};

export default WhiteSpace;
