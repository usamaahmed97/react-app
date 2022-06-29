import React from "react";
import { Col, Row, Checkbox } from "antd";
import {
  proficenciesCardStyle,
  ProficenciesCardInnerDivStyle,
  proficenciesCardHeaderStyle,
  proficenciesTextStyle,
  proficenciesDescriptionStyle,
  proficenciesCheckboxDivStyle,
  proficenciesColumnStyle,
} from "./ProficenciesStyles";

const Proficencies = () => {
  return (
    <div style={proficenciesCardStyle}>
      <div style={ProficenciesCardInnerDivStyle}>
        <div style={proficenciesCardHeaderStyle}>
          <span style={proficenciesTextStyle}>Proficencies</span>
        </div>
        <div style={proficenciesDescriptionStyle}>
          <span>Choose upto 3 areas of focus.</span>
        </div>

        <div style={proficenciesCheckboxDivStyle}>
          <Row>
            <Col span={6} style={proficenciesColumnStyle}>
              <div>
                <Checkbox>Accountability</Checkbox>
              </div>
            </Col>

            <Col span={6} style={proficenciesColumnStyle}>
              <Checkbox>Business</Checkbox>
            </Col>

            <Col span={6} style={proficenciesColumnStyle}>
              <Checkbox>Cancer</Checkbox>
            </Col>

            <Col span={6} style={proficenciesColumnStyle}>
              <Checkbox>Career</Checkbox>
            </Col>
          </Row>

          <Row>
            <Col span={6} style={proficenciesColumnStyle}>
              <Checkbox>Conflict</Checkbox>
            </Col>

            <Col span={6} style={proficenciesColumnStyle}>
              <Checkbox>Creativity</Checkbox>
            </Col>

            <Col span={6} style={proficenciesColumnStyle}>
              <Checkbox>Dating</Checkbox>
            </Col>

            <Col span={6} style={proficenciesColumnStyle}>
              <Checkbox>Divorce</Checkbox>
            </Col>
          </Row>

          <Row>
            <Col span={6} style={proficenciesColumnStyle}>
              <Checkbox>Empowerment</Checkbox>
            </Col>

            <Col span={6} style={proficenciesColumnStyle}>
              <Checkbox>Executive</Checkbox>
            </Col>

            <Col span={6} style={proficenciesColumnStyle}>
              <Checkbox>Health</Checkbox>
            </Col>

            <Col span={6} style={proficenciesColumnStyle}>
              <Checkbox>Innovation</Checkbox>
            </Col>
          </Row>

          <Row>
            <Col span={6} style={proficenciesColumnStyle}>
              <Checkbox>Purpose</Checkbox>
            </Col>

            <Col span={6} style={proficenciesColumnStyle}>
              <Checkbox>Relationship</Checkbox>
            </Col>

            <Col span={6} style={proficenciesColumnStyle}>
              <Checkbox>Sex</Checkbox>
            </Col>

            <Col span={6} style={proficenciesColumnStyle}>
              <Checkbox>Stress</Checkbox>
            </Col>
          </Row>

          <Row>
            <Col span={6} style={proficenciesColumnStyle}>
              <Checkbox>Transformation</Checkbox>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Proficencies;
