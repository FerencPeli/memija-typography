import React from 'react';
import { EditStyle } from "../EditStyle.less";

class WordSpacing extends React.Component {
    handleChange(e) {
        let wordSpacing = e.target.value;
        this.props.onChange(wordSpacing);
    }
    render() {
        return (
            <div className = "row edit">
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className = "btn btn-default"
                         data-placement = "top"
                         data-toggle = "tooltip"
                         disabled
                         title = "Set CSS word-spacing property value.">
                        <i className = "fa fa-arrows-h fa-lg"></i>
                    </div>
                    &nbsp;
                    <label htmlFor = "word-spacing">Word spacing</label>
                </div>
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <input defaultValue = "0"
                           max = "100"
                           min = "-25"
                           onChange = { this.handleChange.bind(this) }
                           type = "number" />
                </div>
            </div>
        );
    }
};

export default WordSpacing;
