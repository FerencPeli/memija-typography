import React from 'react';
import { EditStyle } from "../EditStyle.less";

class LetterSpacing extends React.Component {
    handleChange(e) {
        let letterSpacing = e.target.value;
        this.props.onChange(letterSpacing);
    }
    render() {
        return (
            <div className = "row edit">
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className = "btn btn-default"
                         data-placement = "top"
                         data-toggle = "tooltip"
                         disabled
                         title = "Set CSS letter-spacing property value.">
                        <i className = "fa fa-window-minimize fa-lg"></i>
                    </div>
                    &nbsp;
                    <label htmlFor = "letter-spacing">Letter spacing</label>
                </div>
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <input defaultValue = "0"
                           max = "100"
                           min = "-100"
                           type = "number"
                           onChange = { this.handleChange.bind(this) } />
                </div>
            </div>
        );
    }
};

export default LetterSpacing;
