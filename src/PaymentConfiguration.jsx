import React from "react";
import { Button } from "antd";
import {
  paymentConfigurationCardStyle,
  paymentConfigurationCardInnerDivStyle,
  paymentConfigurationCardHeaderStyle,
  paymentConfigurationTextStyle,
  paymentConfigurationAddPaymentButtonDivStyle,
  paymentConfigurationAddPaymentInformationButtonStyle
} from "./PaymentConfugurationStyles";

const PaymentConfiguration = () => {
  return (
    <div style={paymentConfigurationCardStyle}>
      <div style={paymentConfigurationCardInnerDivStyle}>
        <div style={paymentConfigurationCardHeaderStyle}>
          <span style={paymentConfigurationTextStyle}>Payment Configuration</span>
        </div>


        <div style={paymentConfigurationAddPaymentButtonDivStyle}>

        <Button danger style={  paymentConfigurationAddPaymentInformationButtonStyle}>
           Add Payment Information
          </Button>

        </div>
      </div>
    </div>
  );
};

export default PaymentConfiguration;
