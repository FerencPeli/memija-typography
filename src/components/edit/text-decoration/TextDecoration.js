import React from 'react';
import { EditStyle } from "../EditStyle.less";

class TextDecoration extends React.Component {
    handleChange(e) {
        let textDecoration = e.target.value;
        this.props.onChange(textDecoration);
    }
    render() {
        return (
            <div className = "row edit">
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className = "btn btn-default"
                         data-placement = "top"
                         data-toggle = "tooltip"
                         disabled
                         title = "Set CSS text-decoration property value.">
                        <i className = "fa fa-strikethrough fa-lg"></i>
                    </div>
                    &nbsp;
                    <label htmlFor = "text-decoration">Text decoration</label>
                </div>
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <select defaultValue = "none"
                            onChange = { this.handleChange.bind(this) }>
                        <option value = "none">None</option>
                        <option value = "underline">Underline</option>
                        <option value = "overline">Overline</option>
                        <option value = "line-through">Line through</option>
                    </select>
                </div>
            </div>
        );
    }
};

export default TextDecoration;
