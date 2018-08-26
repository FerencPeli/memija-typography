import React from 'react';
import { Brand, Configuration, Contact, DateUtility } from "../../index";
import { CommonStyle } from "../CommonStyle.less";
import { FooterStyle } from "./FooterStyle.less";

class Footer extends React.Component {
    render() {
        return (
            <div className = "common footer">
                <div className = "row">
                    <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <i className = "fa fa-home fa-lg"></i>
                        &nbsp;
                        <a href = { Contact.Home }
                           target="_blank">
                            { Brand.BrandName }
                        </a>
                    </div>
                    <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <i className = "fa fa-inbox fa-lg"></i>
                        &nbsp;
                        <a href = { "mailto:" + Contact.Email + "?Subject=" + Brand.BrandName + "%20" + Brand.ApplicationName}>
                            Email
                        </a>
                    </div>
                </div>
                <div className = "row information">
                    <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        Version { Configuration.Version }
                    </div>
                    <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        &copy; { Brand.BrandName } { DateUtility.GetFullYear() }
                    </div>
                </div>
            </div>
        );
    }
};

export default Footer;
