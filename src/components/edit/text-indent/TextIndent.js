import React from 'react';
import { EditStyle } from "../EditStyle.less";

class TextIndent extends React.Component {
    handleChange(e) {
        let textIndent = e.target.value;
        this.props.onChange(textIndent);
    }
    render() {
        return (
            <div className = "row edit">
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className = "btn btn-default"
                         data-placement = "top"
                         data-toggle = "tooltip"
                         disabled
                         title = "Set CSS text-indent property value.">
                        <i className = "fa fa-indent fa-lg"></i>
                    </div>
                    &nbsp;
                    <label htmlFor = "text-indent">Text indent</label>
                </div>
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <input defaultValue = "0"
                            max = "1000"
                            min = "-25"
                            onChange = { this.handleChange.bind(this) }
                            type = "number" />
                </div>
            </div>
        );
    }
};

export default TextIndent;
