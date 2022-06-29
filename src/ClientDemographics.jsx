import React from "react";
import "../src/App.css";
import { Col, Row, Checkbox } from "antd";
import {
  clientDemographicsCardStyle,
  clientDemographicsCardInnerDivStyle,
  clientDemographicsCardHeaderStyle,
  clientDemographicsTextStyle,
  clientDemographicsDescriptionDivStyle,
  clientDemographicsHeadingDescriptionStyle,
  clientDemographicsParagraphDescriptionStyle,
  clientDemographicsInnerDivStyle,
  clientDemographicsColumnStyle,
  clientDemographicsCheckBoxTextStyle,
} from "./ClientDemographicsStyles";

const ClientDemographics = () => {
  return (
    <div style={clientDemographicsCardStyle}>
      <div style={clientDemographicsCardInnerDivStyle}>
        <div style={clientDemographicsCardHeaderStyle}>
          <span style={clientDemographicsTextStyle}>Client Demographics</span>
        </div>

        <div style={clientDemographicsDescriptionDivStyle}>
          <span style={clientDemographicsHeadingDescriptionStyle}>
            Choose with age brackets you prefer to work with.
          </span>
          <span style={clientDemographicsParagraphDescriptionStyle}>
            Choose upto two age brackets
          </span>
        </div>

        <div style={clientDemographicsInnerDivStyle}>
          <Row>
            <Col span={8} style={clientDemographicsColumnStyle}>
              <div>
                <Checkbox style={clientDemographicsCheckBoxTextStyle}>
                  18-33
                </Checkbox>
              </div>
            </Col>

            <Col span={8} style={clientDemographicsColumnStyle}>
              <Checkbox style={clientDemographicsCheckBoxTextStyle}>
                33-50
              </Checkbox>
            </Col>

            <Col span={8} style={clientDemographicsColumnStyle}>
              <Checkbox style={clientDemographicsCheckBoxTextStyle}>
                50>
              </Checkbox>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ClientDemographics;
