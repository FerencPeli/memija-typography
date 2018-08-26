import React from 'react';
import { EditStyle } from "../EditStyle.less";

class FontSize extends React.Component {
    handleChange(e) {
        let fontSize = e.target.value;
        this.props.onChange(fontSize);
    }
    render() {
        return (
            <div className = "row edit">
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className = "btn btn-default"
                         data-placement = "top"
                         data-toggle = "tooltip"
                         disabled
                         title = "Set CSS font-size property value.">
                        <i className = "fa fa-text-height fa-lg"></i>
                    </div>
                    &nbsp;
                    <label htmlFor = "color">Font size</label>
                </div>
                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <select defaultValue = "12px"
                            onChange = { this.handleChange.bind(this) }>
                        <option value = "8px">8</option>
                        <option value = "9px">9</option>
                        <option value = "10px">10</option>
                        <option value = "11px">11</option>
                        <option value = "12px">12</option>
                        <option value = "14px">14</option>
                        <option value = "16px">16</option>
                        <option value = "18px">18</option>
                        <option value = "20px">20</option>
                        <option value = "22px">22</option>
                        <option value = "24px">24</option>
                        <option value = "26px">26</option>
                        <option value = "28px">28</option>
                        <option value = "36px">36</option>
                        <option value = "48px">48</option>
                        <option value = "72px">72</option>
                    </select>
                </div>
            </div>
        );
    }
};

export default FontSize;
