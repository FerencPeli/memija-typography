import React from 'react';
import { EditStyle } from "../EditStyle.less";

class TextOverflow extends React.Component {
    handleChange(e) {
        let textOverflow = e.target.value;
        this.props.onChange(textOverflow);
    }
    render() {
        return (
            <div className = "row edit">
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className = "btn btn-default"
                         data-placement = "top"
                         data-toggle = "tooltip"
                         disabled
                         title = "Set CSS text text-overflow property value.">
                        <i className = "fa fa-scissors fa-lg"></i>
                    </div>
                    &nbsp;
                    <label htmlFor = "text-overflow">Text overflow</label>
                </div>
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <select defaultValue = "initial"
                            onChange = { this.handleChange.bind(this) }>
                        <option value = "initial">Initial</option>
                        <option value = "clip">Clip</option>
                        <option value = "ellipsis">Ellipsis</option>
                    </select>
                </div>
            </div>
        );
    }
};

export default TextOverflow;
