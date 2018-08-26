import React from 'react';
import { Brand, Configuration } from "../../index";
import { CommonStyle } from "../CommonStyle.less";
import { HeaderStyle } from "./HeaderStyle.less";

class Header extends React.Component {
    render() {
        return (
            <div className = "row common header">
                <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <img alt = "Brand logo"
                         src = { Configuration.Logo } >
                    </img>
                </div>
                <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-8 name">
                    { Brand.BrandName + " " + Brand.ApplicationName }
                </div>
            </div>
        );
    }
};

export default Header;
