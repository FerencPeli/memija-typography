import React from 'react';
import { InputStyle } from "./InputStyle.less";

class Input extends React.Component {
    handleChange(e) {
        let value = e.target.value;
        this.props.onChange(value);
    }
    render() {
        return (
            <div className = "input">
                <textarea placeholder = "Start typing ..."
                          onChange = { this.handleChange.bind(this) }>
                </textarea>
            </div>
        );
    }
};

export default Input;
