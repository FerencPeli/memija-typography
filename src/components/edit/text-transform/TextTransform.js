import React from 'react';
import { EditStyle } from "../EditStyle.less";

class TextTransform extends React.Component {
    handleChange(e) {
        let textTransform = e.target.value;
        this.props.onChange(textTransform);
    }
    render() {
        return (
            <div className = "row edit">
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className = "btn btn-default"
                         data-placement = "top"
                         data-toggle = "tooltip"
                         disabled
                         title = "Set CSS text-transform property value.">
                        <i className = "fa fa-refresh fa-lg"></i>
                    </div>
                    &nbsp;
                    <label htmlFor = "text-transform">Text transform</label>
                </div>
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <select defaultValue = "none"
                            onChange = { this.handleChange.bind(this) }>
                        <option value = "none">None</option>
                        <option value = "capitalize">Capitalize</option>
                        <option value = "lowercase">Lowercase</option>
                        <option value = "uppercase">Uppercase</option>
                    </select>
                </div>
            </div>
        );
    }
};

export default TextTransform;
