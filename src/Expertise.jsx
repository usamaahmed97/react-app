import React from "react";
import "./App.css";
import { Button } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import {
  expertiseCardStyle,
  expertiseCardInnerDivStyle,
  expertiseCardHeaderStyle,
  expertiseInnerContentStyle,
  expertiseSectionStyle,
  expertiseTextStyle,
  expertiseInnerDivsParentStyle,
  expertiseInnerDivsTextStyle,
  expertiseContentInnerDivStyle,
  expertiseLabelWithButtonDivStyle,
  internalCardLabelStyle,
  internalCardButtonStyle,
  internalCardGreyLabelStyle,
  internalSecondCardButtonStyle,
} from "./ExpertiseStyles";

const Expertise = () => {
  return (
    <div style={expertiseCardStyle}>
      <div style={expertiseCardInnerDivStyle}>
        {/* Expertise Card Title Text */}
        <div style={expertiseCardHeaderStyle}>
          <span style={expertiseTextStyle}>
            Pick Upto Five Areas of Expertise.
          </span>
        </div>

        {/* Expertise Inner Div for Two Card Header Text */}
        <div style={expertiseInnerDivsParentStyle}>
          <span style={expertiseInnerDivsTextStyle}>Areas of Expertise</span>
          <span style={expertiseInnerDivsTextStyle}>My Expertise</span>
        </div>

        {/* Expertise Inner Div for Two Internal Cards */}
        <div style={expertiseInnerContentStyle}>
          {/* Areas of Expertise Section */}
          <div style={expertiseSectionStyle}>
            <div style={expertiseContentInnerDivStyle}>
              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Depression</span>
                <Button style={internalCardButtonStyle}>
                  <div>
                    <span> Add</span> <RightOutlined />
                  </div>
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Dating / Sex</span>
                <Button style={internalCardButtonStyle}>
                  <div>
                    <span> Add</span> <RightOutlined />
                  </div>
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Divorce</span>
                <Button style={internalCardButtonStyle}>
                  <div>
                    <span> Add</span> <RightOutlined />
                  </div>
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <div style={internalCardGreyLabelStyle}>
                  <span style={{ marginLeft: "1px" }}>Finding purpose</span>
                </div>
                <Button style={internalCardButtonStyle}>
                  <div>
                    <span> Add</span> <RightOutlined />
                  </div>
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Career goals</span>
                <Button style={internalCardButtonStyle}>
                  <div>
                    <span> Add</span> <RightOutlined />
                  </div>
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Work life balance</span>
                <Button style={internalCardButtonStyle}>
                  <div>
                    <span> Add</span> <RightOutlined />
                  </div>
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Work life balance</span>
                <Button style={internalCardButtonStyle}>
                  <div>
                    <span> Add</span> <RightOutlined />
                  </div>
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Work life balance</span>
                <Button style={internalCardButtonStyle}>
                  <div>
                    <span> Add</span> <RightOutlined />
                  </div>
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Work life balance</span>
                <Button style={internalCardButtonStyle}>
                  <div>
                    <span> Add</span> <RightOutlined />
                  </div>
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Work life balance</span>
                <Button style={internalCardButtonStyle}>
                  <div>
                    <span> Add</span> <RightOutlined />
                  </div>
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Work life balance</span>
                <Button style={internalCardButtonStyle}>
                  <div>
                    <span> Add</span> <RightOutlined />
                  </div>
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Work life balance</span>
                <Button style={internalCardButtonStyle}>
                  <div>
                    <span> Add</span> <RightOutlined />
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* My Expertise Section */}
          <div style={expertiseSectionStyle}>
            <div style={expertiseContentInnerDivStyle}>
              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Divorce</span>
                <Button
                  type="primary"
                  style={internalSecondCardButtonStyle}
                  icon={<LeftOutlined />}
                >
                  Remove
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Dating / Sex</span>
                <Button
                  type="primary"
                  style={internalSecondCardButtonStyle}
                  icon={<LeftOutlined />}
                >
                  Remove
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Divorce</span>
                <Button
                  type="primary"
                  style={internalSecondCardButtonStyle}
                  icon={<LeftOutlined />}
                >
                  Remove
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <div style={internalCardGreyLabelStyle}>
                  <span style={{ marginLeft: "1px" }}>Finding purpose</span>
                </div>
                <Button
                  type="primary"
                  style={internalSecondCardButtonStyle}
                  icon={<LeftOutlined />}
                >
                  Remove
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Career goals</span>
                <Button
                  type="primary"
                  style={internalSecondCardButtonStyle}
                  icon={<LeftOutlined />}
                >
                  Remove
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Work life balance</span>
                <Button
                  type="primary"
                  style={internalSecondCardButtonStyle}
                  icon={<LeftOutlined />}
                >
                  Remove
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Work life balance</span>
                <Button
                  type="primary"
                  style={internalSecondCardButtonStyle}
                  icon={<LeftOutlined />}
                >
                  Remove
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Work life balance</span>
                <Button
                  type="primary"
                  style={internalSecondCardButtonStyle}
                  icon={<LeftOutlined />}
                >
                  Remove
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Work life balance</span>
                <Button
                  type="primary"
                  style={internalSecondCardButtonStyle}
                  icon={<LeftOutlined />}
                >
                  Remove
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Work life balance</span>
                <Button
                  type="primary"
                  style={internalSecondCardButtonStyle}
                  icon={<LeftOutlined />}
                >
                  Remove
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Work life balance</span>
                <Button
                  type="primary"
                  style={internalSecondCardButtonStyle}
                  icon={<LeftOutlined />}
                >
                  Remove
                </Button>
              </div>

              {/* Label with Button */}
              <div style={expertiseLabelWithButtonDivStyle}>
                <span style={internalCardLabelStyle}>Work life balance</span>
                <Button
                  type="primary"
                  style={internalSecondCardButtonStyle}
                  icon={<LeftOutlined />}
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
