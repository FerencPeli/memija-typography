import React from 'react';
import { EditStyle } from "../EditStyle.less";
import { TextShadowStyle } from "./TextShadowStyle.less";

class TextShadow extends React.Component {
    handleChange(e) {
        // Compose text-shadow property value.
        let textShadow =
            document.getElementById('text-shadow-horizontal').value +
            'px ' +
            document.getElementById('text-shadow-vertical').value  +
            'px ' +
            document.getElementById('text-shadow-blur').value  +
            'px ' +
            document.getElementById('text-shadow-color').value ;
        this.props.onChange(textShadow);
    }
    render() {
        return (
            <div className = "row edit">
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className = "btn btn-default"
                         data-placement = "top"
                         data-toggle = "tooltip"
                         disabled
                         title = "Set CSS text-shadow property value.">
                        <i className = "fa fa-flash fa-lg"></i>
                    </div>
                    &nbsp;
                    <label htmlFor = "text-shadow">Text shadow</label>
                </div>
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6 text-shadow-input">
                    <input data-toggle = "tooltip"
                           defaultValue = "0"
                           id = "text-shadow-horizontal"
                           max = "100"
                           min = "-25"
                           onChange = { this.handleChange.bind(this) }
                           title = "Set horizontal value for text-shadow property."
                           type = "number" />
                    &nbsp;
                    <input data-toggle = "tooltip"
                           defaultValue = "0"
                           id = "text-shadow-vertical"
                           max = "50"
                           min = "-25"
                           onChange = { this.handleChange.bind(this) }
                           title = "Set vertical value for text-shadow property."
                           type = "number" />
                    &nbsp;
                    <input data-toggle = "tooltip"
                           defaultValue = "0" 
                           id = "text-shadow-blur"
                           max = "100"
                           min = "0"
                           onChange = { this.handleChange.bind(this) }
                           title = "Set blur value for text-shadow property."
                           type = "number" />
                    &nbsp;
                    <input data-toggle = "tooltip"
                           defaultValue = "#ffffff"
                           id = "text-shadow-color"
                           onChange = { this.handleChange.bind(this) }
                           title = "Set color value for text-shadow property."
                           type = "color" />
                </div>
            </div>
        );
    }
};

export default TextShadow;
