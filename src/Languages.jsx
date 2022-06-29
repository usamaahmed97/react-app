import React from "react";
import "../src/App.css";
import { Col, Row, Checkbox } from "antd";
import {
  languagesCardStyle,
  languagesCardInnerDivStyle,
  languagesCardHeaderStyle,
  languagesTextStyle,
  languagesDescriptionDivStyle,
  languagesParagraphDescriptionStyle,
  languagesInnerDivStyle,
  languagesColumnStyle,
  languagesCheckBoxTextStyle,
} from "./LanguagesStyles";

const Languages = () => {
  return (
    <div style={languagesCardStyle}>
      <div style={languagesCardInnerDivStyle}>
        <div style={languagesCardHeaderStyle}>
          <span style={languagesTextStyle}>Languages</span>
        </div>

        <div style={languagesDescriptionDivStyle}>
          \
          <span style={languagesParagraphDescriptionStyle}>
            Choose upto two languages
          </span>
        </div>

        <div style={languagesInnerDivStyle}>
          <Row>
            <Col span={6} style={languagesColumnStyle}>
              <div>
                <Checkbox style={languagesCheckBoxTextStyle}>English</Checkbox>
              </div>
            </Col>

            <Col span={6} style={languagesColumnStyle}>
              <Checkbox style={languagesCheckBoxTextStyle}>Spanish</Checkbox>
            </Col>

            <Col span={6} style={languagesColumnStyle}>
              <Checkbox style={languagesCheckBoxTextStyle}>Chinese</Checkbox>
            </Col>

            <Col span={6} style={languagesColumnStyle}>
              <Checkbox style={languagesCheckBoxTextStyle}>Tagalog</Checkbox>
            </Col>
          </Row>

          <Row>
            <Col span={6} style={languagesColumnStyle}>
              <div>
                <Checkbox style={languagesCheckBoxTextStyle}>
                  Vietnamese
                </Checkbox>
              </div>
            </Col>

            <Col span={6} style={languagesColumnStyle}>
              <Checkbox style={languagesCheckBoxTextStyle}>French</Checkbox>
            </Col>

            <Col span={6} style={languagesColumnStyle}>
              <Checkbox style={languagesCheckBoxTextStyle}>Russian</Checkbox>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Languages;
