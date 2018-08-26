import React from 'react';
import { Footer, Header,
         Color, Direction, FontSize, LetterSpacing, LineHeight, TextAlign, TextDecoration, TextIndent, TextOverflow, TextShadow, TextTransform, WhiteSpace, WordSpacing,
         Input,
         CSSOutput, ViewOutput } from './index';
import { AppStyle } from './AppStyle.less';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#000000",
            direction: "ltr",
            fontSize: "12px",
            letterSpacing: "0",
            lineHeight: "normal",
            textAlign: "left",
            textDecoration: "none",
            textIndent: "0",
            textOverflow: "initial",
            textShadow: "0px 0px 0px #ffffff",
            textTransform: "none",
            value: "Start typing ...",
            whiteSpace: "normal",
            wordSpacing: "0"
        }
    }
    /**
     * Set input value.
     * @param {string} newValue - New input property value.
     */
    changeValue(newValue) {
        this.setState({
            value: newValue
        });
    }
    /**
     * Set CSS (Cascading Style Sheets) color property value.
     * @param {string} newColor - New CSS (Cascading Style Sheets) Color property value.
     */
    changeColor(newColor) {
        this.setState({
            color: newColor
        });
    }
    /**
     * Set CSS (Cascading Style Sheets) direction property value.
     * @param {string} newDirection - New CSS (Cascading Style Sheets) Direction property value.
     */
    changeDirection(newDirection) {
        this.setState({
            direction: newDirection
        });
    }
    /**
     * Set CSS (Cascading Style Sheets) font-size property value.
     * @param {string} newFontSize - New CSS (Cascading Style Sheets) Font Size property value.
     */
    changeFontSize(newFontSize) {
        this.setState({
            fontSize: newFontSize
        });
    }
    /**
     * Set CSS (Cascading Style Sheets) letter-spacing property value.
     * @param {number} newLetterSpacing - New CSS (Cascading Style Sheets) Letter Spacing property value.
     */
    changeLetterSpacing(newLetterSpacing) {
        this.setState({
            letterSpacing: newLetterSpacing
        });
    }
    /**
     * Set CSS (Cascading Style Sheets) line-height property value.
     * @param {number} newLineHeight - New CSS (Cascading Style Sheets) Line Height property value.
     */
    changeLineHeight(newLineHeight) {
        this.setState({
            lineHeight: newLineHeight
        });
    }
    /**
     * Set CSS (Cascading Style Sheets) text-align property value.
     * @param {string} newTextAlign - New CSS (Cascading Style Sheets) Text Align property value.
     */
    changeTextAlign(newTextAlign) {
        this.setState({
            textAlign: newTextAlign
        });
    }
    /**
     * Set CSS (Cascading Style Sheets) text-decoration property value.
     * @param {string} newTextDecoration - New CSS (Cascading Style Sheets) Text Decoration property value.
     */
    changeTextDecoration(newTextDecoration) {
        this.setState({
            textDecoration: newTextDecoration
        });
    }
    /**
     * Set CSS (Cascading Style Sheets) text-indent property value.
     * @param {number} newTextIndent - New CSS (Cascading Style Sheets) Text Indent property value.
     */
    changeTextIndent(newTextIndent) {
        this.setState({
            textIndent: newTextIndent
        });
    }
    /**
     * Set CSS (Cascading Style Sheets) text-overflow property value.
     * @param {string} newTextOverflow - New CSS (Cascading Style Sheets) Text Overflow property value.
     */
    changeTextOverflow(newTextOverflow) {
        this.setState({
            textOverflow: newTextOverflow
        });
    }
    /**
     * Set CSS (Cascading Style Sheets) text-shadow property value.
     * @param {string} newTextShadow - New CSS (Cascading Style Sheets) Text Shadow property value.
     */
    changeTextShadow(newTextShadow) {
        this.setState({
            textShadow: newTextShadow
        });
    }
    /**
     * Set CSS (Cascading Style Sheets) text-transform property value.
     * @param {string} newTextTransform - New CSS (Cascading Style Sheets) Text Transform property value.
     */
    changeTextTransform(newTextTransform) {
        this.setState({
            textTransform: newTextTransform
        });
    }
    /**
     * Set CSS (Cascading Style Sheets) white-space property value.
     * @param {string} newWordSpacing - New CSS (Cascading Style Sheets) White Space property value.
     */
    changeWhiteSpace(newWhiteSpace) {
        this.setState({
            whiteSpace: newWhiteSpace
        });
    }
    /**
     * Set CSS (Cascading Style Sheets) word-spacing property value.
     * @param {number} newWordSpacing - New CSS (Cascading Style Sheets) Word Spacing property value.
     */
    changeWordSpacing(newWordSpacing) {
        this.setState({
            wordSpacing: newWordSpacing
        });
    }
    render() {
        let letterSpacingWithSizeUnit = this.state.letterSpacing + "px";
        let textIndentWithSizeUnit = this.state.textIndent + "px";
        let wordSpacingWithSizeUnit = this.state.wordSpacing + 'px';
        return (
            <div>
                <Header />
                <div className = "row app">
                    <div className = "col-xs-12 col-sm-12 col-md-6 col-lg-5">
                        <Input onChange = { this.changeValue.bind(this) } />
                        <br />
                        <Color onChange={this.changeColor.bind(this)}/>
                        <hr />
                        <Direction onChange = { this.changeDirection.bind(this) } />
                        <hr />
                        <FontSize onChange = { this.changeFontSize.bind(this) } />
                        <hr />
                        <LetterSpacing onChange = { this.changeLetterSpacing.bind(this) } />
                        <hr />
                        <LineHeight onChange = { this.changeLineHeight.bind(this) } />
                        <hr />
                        <TextAlign onChange = { this.changeTextAlign.bind(this) } />
                        <hr />
                        <TextDecoration onChange = { this.changeTextDecoration.bind(this) } />
                        <hr />
                        <TextIndent onChange = { this.changeTextIndent.bind(this) } />
                        <hr />
                        <TextOverflow onChange = { this.changeTextOverflow.bind(this)} />
                        <hr />
                        <TextShadow onChange = { this.changeTextShadow.bind(this) } />
                        <hr />
                        <TextTransform onChange = { this.changeTextTransform.bind(this) } />
                        <hr />
                        <WhiteSpace onChange = { this.changeWhiteSpace.bind(this) } />
                        <hr />
                        <WordSpacing onChange = { this.changeWordSpacing.bind(this) } />
                    </div>
                    <div className = "col-xs-12 col-sm-12 col-md-6 col-lg-7">
                        <ViewOutput color = { this.state.color }
                                    direction = { this.state.direction }
                                    fontSize = { this.state.fontSize }
                                    letterSpacing = { letterSpacingWithSizeUnit }
                                    lineHeight = { this.state.lineHeight }
                                    textAlign = { this.state.textAlign }
                                    textDecoration = { this.state.textDecoration }
                                    textIndent = { textIndentWithSizeUnit }
                                    textOverflow = { this.state.textOverflow }
                                    textShadow = { this.state.textShadow }
                                    textTransform = { this.state.textTransform }
                                    whiteSpace = { this.state.whiteSpace }
                                    wordSpacing = { wordSpacingWithSizeUnit }
                                    value = { this.state.value } />
                        <br />
                        <br />
                        <CSSOutput color = { this.state.color }
                                   direction = { this.state.direction }
                                   fontSize = { this.state.fontSize }
                                   letterSpacing = { letterSpacingWithSizeUnit }
                                   lineHeight = { this.state.lineHeight }
                                   textAlign = { this.state.textAlign }
                                   textDecoration = { this.state.textDecoration }
                                   textIndent = { textIndentWithSizeUnit }
                                   textOverflow = { this.state.textOverflow }
                                   textShadow = { this.state.textShadow }
                                   textTransform = { this.state.textTransform }
                                   whiteSpace = { this.state.whiteSpace }
                                   wordSpacing = { wordSpacingWithSizeUnit } />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default App;
