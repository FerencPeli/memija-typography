import React from 'react';
import { OutputStyle } from "../OutputStyle.less";
import { ViewOutputStyle } from "./ViewOutputStyle.less";

class ViewOutput extends React.Component {
    render() {
        let style = {
            color:          this.props.color,
            direction:      this.props.direction,
            fontSize:       this.props.fontSize,
            letterSpacing:  this.props.letterSpacing,
            lineHeight:     this.props.lineHeight,
            textAlign:      this.props.textAlign,
            textDecoration: this.props.textDecoration,
            textIndent:     this.props.textIndent,
            textOverflow:   this.props.textOverflow,
            textShadow:     this.props.textShadow,
            textTransform:  this.props.textTransform,
            whiteSpace:     this.props.whiteSpace,
            wordSpacing:    this.props.wordSpacing
        };
        return (
            <div className = "general-output view-output">
                <div style = { style } >{ this.props.value }</div>
            </div>
        );
    }
};

export default ViewOutput;
