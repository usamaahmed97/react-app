import React from "react";
import { Radio } from "antd";
import {
  revenuePotentialCardStyle,
  revenuePotentialCardInnerDivStyle,
  revenuePotentialTextStyle,
  revenuePotentialCardHeaderStyle,
  revenuePotentialCheckboxesDivStyle,
  revenuePotentialWhiteDivStyle,
  revenuePotentialWhiteDivTextStyle,
} from "./RevenuePotentialStyles";

const RevenuePotential = () => {
  return (
    <div style={revenuePotentialCardStyle}>
      <div style={revenuePotentialCardInnerDivStyle}>
        <div style={revenuePotentialCardHeaderStyle}>
          <span style={revenuePotentialTextStyle}>
            How many appointments can you take a week through IdentifyU?
          </span>
        </div>

        <div style={revenuePotentialCheckboxesDivStyle}>
          <Radio.Group>
            <div style={revenuePotentialWhiteDivStyle}>
              <span style={revenuePotentialWhiteDivTextStyle}>
                4-6 per week
              </span>
              <Radio style={{ marginRight: "40px" }} value={1}></Radio>
            </div>

            <div style={revenuePotentialWhiteDivStyle}>
              <span style={revenuePotentialWhiteDivTextStyle}>
                6-8 per week
              </span>
              <Radio style={{ marginRight: "40px" }} value={2}></Radio>
            </div>

            <div style={revenuePotentialWhiteDivStyle}>
              <span style={revenuePotentialWhiteDivTextStyle}>
                8-10 per week
              </span>
              <Radio style={{ marginRight: "40px" }} value={3}></Radio>
            </div>

            <div style={revenuePotentialWhiteDivStyle}>
              <span style={revenuePotentialWhiteDivTextStyle}>
                10+ per week
              </span>
              <Radio style={{ marginRight: "40px" }} value={4}></Radio>
            </div>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};

export default RevenuePotential;
