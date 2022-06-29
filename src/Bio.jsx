import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import {
  bioCardStyle,
  bioInnerDivStyle,
  bioHeaderStyle,
  bioTextStyle,
  bioTextWhiteBoxStyle,
  genderCardStyle,
  completeBioCardStyle,
  bioDobDivStyle,
  BioWhiteLabelDiv,
  dobTextStyle,
  genderDivStyle,
  selectGenderStyle,
  BioMyProfileDiv,
  BioUploadPhotoTextStyle,
  BioIconandUploadPhotoDiv,
  BioYoutubeGrayLabelStyle,
  bioYoutubeProfileandLinkDiv,
  youtubeTextStyle,
} from "./BioStyles";

import { Select } from "antd";
const { Option } = Select;

const Bio = () => {
  return (
    <div style={completeBioCardStyle}>
      <div style={BioMyProfileDiv}>
        <div style={BioIconandUploadPhotoDiv}>
          <div>
            <Avatar
              size={94}
              icon={<UploadOutlined style={{ color: "#707070" }} />}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #707070",
              }}
            />
          </div>
          <span style={BioUploadPhotoTextStyle}>Upload Photo</span>
        </div>

        <div style={bioYoutubeProfileandLinkDiv}>
          <span style={youtubeTextStyle}>Youtube Profile Link:</span>
          <div style={BioYoutubeGrayLabelStyle}>
            <span style={dobTextStyle}>www.youtube.com</span>
          </div>
        </div>
      </div>

      {/* Gender Card Style */}
      <div style={genderCardStyle}>
        <div style={genderDivStyle}>
          <span style={bioTextStyle}>Gender:</span>

          <Select defaultValue="Select" style={selectGenderStyle}>
            <Option value="jack">Male</Option>
            <Option value="lucy">Female</Option>
            <Option value="disabled">Prefer not to say</Option>
          </Select>
        </div>

        <div style={bioDobDivStyle}>
          {" "}
          <span style={bioTextStyle}>Date of Birth:</span>{" "}
          <div style={BioWhiteLabelDiv}>
            <span style={dobTextStyle}>mm-dd-yyyy</span>
          </div>
        </div>
      </div>

      {/* Bio Card Style */}
      <div style={bioCardStyle}>
        <div style={bioInnerDivStyle}>
          <div style={bioHeaderStyle}>
            <span style={bioTextStyle}>Bio</span>
          </div>
          <div style={bioTextWhiteBoxStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
