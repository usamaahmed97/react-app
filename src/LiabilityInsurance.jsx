import React from "react";
import { Button } from "antd";
import {
  liabilityInsuranceCardStyle,
  liabilityInsuranceCardInnerDivStyle,
  liabilityInsuranceCardHeaderStyle,
  liabilityInsuranceTextStyle,
  liabilityInsuranceAddPaymentButtonDivStyle,
  liabilityInsuranceYesInformationButtonStyle,
  liabilityInsuranceNoInformationButtonStyle 
} from "./LiabilityInsuranceStyles";

const LiabilityInsurance = () => {
 return( <div style={liabilityInsuranceCardStyle}>
    <div style={liabilityInsuranceCardInnerDivStyle}>
      <div style={liabilityInsuranceCardHeaderStyle}>
        <span style={liabilityInsuranceTextStyle}>Do you have Liability Insurance?</span>
      </div>

      <div style={liabilityInsuranceAddPaymentButtonDivStyle}>
        <Button  style={liabilityInsuranceYesInformationButtonStyle}><span style={{height:"33px", width:"42px", marginTop:"10px"}}>Yes</span></Button>
        <Button   style={liabilityInsuranceNoInformationButtonStyle }> <span style={{color:"#FFFFFF", height:"33px", width:"42px", marginTop:"10px"}}>No</span></Button>
      </div>
    </div>
  </div>)
};

export default LiabilityInsurance;
