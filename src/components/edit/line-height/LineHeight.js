import React from 'react';
import { EditStyle } from "../EditStyle.less";

class LineHeight extends React.Component {
    handleChange(e) {
        let lineHeight = e.target.value;
        this.props.onChange(lineHeight);
    }
    render() {
        return (
            <div className = "row edit">
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className = "btn btn-default"
                         data-placement = "top"
                         data-toggle = "tooltip"
                         disabled
                         title = "Set CSS line-height property value.">
                        <i className = "fa fa-arrows-v fa-lg"></i>
                    </div>
                    &nbsp;
                    <label htmlFor = "line-height">Line height</label>
                </div>
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <input defaultValue = "1"
                           max = "25"
                           min = "-25"
                           type = "number"
                           onChange = { this.handleChange.bind(this) } />
                </div>
            </div>
        );
    }
};

export default LineHeight;
