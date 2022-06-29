import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  providerTypeCardStyle,
  providerTypeCardInnerDivStyle,
  providerTypeCardHeaderStyle,
  providerTypeTextStyle,
  providerTypeDescriptionTextStyle,
  providerTypeSelectDivStyle,
  selectProviderTypeStyle
} from "./ProviderTypeStyles.js";

import { Select } from "antd";
const { Option } = Select;

const ProviderType = () => {
  return (
    <div style={providerTypeCardStyle}>
      <div style={providerTypeCardInnerDivStyle}>


        <div style={providerTypeCardHeaderStyle}>
          <span style={providerTypeTextStyle}>Provider Type and License</span>
        </div>

        <span style={providerTypeDescriptionTextStyle}>lorem ipsum is a dummy text lorem ipsum is a dummy text lorem ipsum is a dummy text</span>

        {/* Selector Div */}
        <div style={providerTypeSelectDivStyle}>

            <span style={providerTypeDescriptionTextStyle}>Type of Provider</span>

            <Select defaultValue="Provider" style={selectProviderTypeStyle}>
            <Option value="advisor">Advisor</Option>
            <Option value="consulour">Consulour</Option>
            <Option value="therapist">Therapist</Option>
            <Option value="psychologist">Psychologist</Option>
            <Option value="psychiatrist">Psychiatrist</Option>
            <Option value="psychiatrist">Psychiatrist</Option>
            
          </Select>

        </div>


      </div>
    </div>
  );
};

export default ProviderType;
