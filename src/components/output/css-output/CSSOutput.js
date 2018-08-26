import React from 'react';
import ReactDOM from 'react-dom';
import fileDownload from 'js-file-download';
import { Configuration } from "../../index";
import { OutputStyle } from "../OutputStyle.less";
import { CSSOutputStyle } from "./CSSOutputStyle.less";

class CSSOutput extends React.Component {
    /**
     * Save formated CSS (Cascading Style Sheets) data to the file.
     */
    saveToFile() {
        let fileNameAndType = Configuration.File.FileName + Configuration.File.FileType;
        let input = ReactDOM.findDOMNode(this.refs.data).textContent;
        let formatedData = input.replace(/;/g, ";\r\n").replace("{", "{\r\n").replace("}", "}\r\n");
        fileDownload(formatedData, fileNameAndType);
    }
    render() {
        return (
            <div className = "css-output">
                <div className = "general-output css-output-display"
                     ref = "data">
                    div &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;color: { this.props.color };
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;direction: { this.props.direction };
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: { this.props.fontSize };
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;letter-spacing: { this.props.letterSpacing };
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;line-height: { this.props.lineHeight };
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;text-align: { this.props.textAlign };
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: { this.props.textDecoration };
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;text-indent: { this.props.textIndent };
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;text-overflow: { this.props.textOverflow };
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: { this.props.textShadow };
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;text-transform: { this.props.textTransform };
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;white-space: { this.props.whiteSpace };
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;word-spacing: { this.props.wordSpacing };
                    <br />
                    &#125;
                </div>
                <br />
                <button className = "btn btn-default"
                        onClick = { this.saveToFile.bind(this) } >
                    Save CSS data
                </button>
            </div>
        );
    }
};

export default CSSOutput;
