import React from 'react';
import { EditStyle } from "../EditStyle.less";

class TextAlign extends React.Component {
    handleChangeLeft(e) {
        // Set text-align property value to left.
        let textAlign = 'left';
        this.props.onChange(textAlign);
    }
    handleChangeRight(e) {
        // Set text-align property value to right.
        let textAlign = 'right';
        this.props.onChange(textAlign);
    }
    handleChangeCenter(e) {
        // Set text-align property value to center.
        let textAlign = 'center';
        this.props.onChange(textAlign);
    }
    handleChangeJustify(e) {
        // Set text-align property value to justify.
        let textAlign = 'justify';
        this.handleChange(textAlign);
    }
    /**
     * Set text-align property value.
     * @param {String} textAlign text-align property value.
     */
    handleChange(textAlign) {
        this.props.onChange(textAlign);
    }
    render() {
        return (
            <div className = "row edit">
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className = "btn btn-default"
                         data-placement = "top"
                         data-toggle = "tooltip"
                         disabled
                         title = "Set CSS text-align property value.">
                        <i className = "fa fa-file-text-o fa-lg"></i>
                    </div>
                    &nbsp;
                    <label htmlFor = "text-align">Text align</label>
                </div>
                <div className = "btn-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className = "btn btn-default"
                         data-placement = "top"
                         data-toggle = "tooltip"
                         onClick = { this.handleChangeLeft.bind(this) }
                         title = "Set CSS text-align property value to left.">
                            <i className = "fa fa-align-left fa-lg"></i>
                    </div>
                    <div className = "btn btn-default"
                         data-placement = "top"
                         data-toggle = "tooltip"
                         onClick = { this.handleChangeRight.bind(this) }
                         title = "Set CSS text-align property value to right.">
                        <i className = "fa fa-align-right fa-lg"></i>
                    </div>
                    <div className = "btn btn-default"
                         data-placement = "top"
                         data-toggle = "tooltip"
                         onClick = { this.handleChangeCenter.bind(this) }
                         title = "Set CSS text-align property value to center.">
                        <i className = "fa fa-align-center fa-lg"></i>
                    </div>
                    <div className = "btn btn-default"
                         data-placement = "top"
                         data-toggle = "tooltip"
                         onClick = { this.handleChangeJustify.bind(this) }
                         title = "Set CSS text-align property value to justify.">
                        <i className = "fa fa-align-justify fa-lg"></i>
                    </div>
                </div>
            </div>
        );
    }
};

export default TextAlign;
