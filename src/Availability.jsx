import React from "react";
import { Checkbox } from "antd";
import { LineOutlined } from "@ant-design/icons";
import {
  availabilityCardStyle,
  availabilityInnerDivStyle,
  availabilityHeaderText,
  timeZoneDivStyle,
  timeZoneCardStyle,
  selectYourTimeDiv,
  selectYourTimeCardStyle,
  greyLabelWideStyle,
  timeZoneInternalCityDivStyle,
  greyLabelCitiesStyle,
  daysCardStyle,
  timeCardStyle,
  weekDaysOuterDivStyle,
  timeOuterDivStyle,
  greyLabelDaysStyle,
  daysCardInternalDivStyle,
  startendTextDivStyle,
  timeCardInteralDivStyle,
  smallGreyDivStyle,
  fadedOutTextStyle,
  fadedOutDayStyle,
  startEndTextStyle,
} from "./AvailabilityStyles";
import { DownOutlined } from "@ant-design/icons";
const Availability = () => {
  return (
    <div style={availabilityCardStyle}>
      <div style={availabilityInnerDivStyle}>
        {/* Time Zone Div */}
        <div style={timeZoneDivStyle}>
          <span style={availabilityHeaderText}>Time Zone</span>

          <div style={timeZoneCardStyle}>
            <div style={greyLabelWideStyle}>
              Washington DC (GMT-4){" "}
              <DownOutlined style={{ marginLeft: "10px" }} />
            </div>
            <div style={timeZoneInternalCityDivStyle}>
              <div style={greyLabelCitiesStyle}>Chicago (GMT-5)</div>
              <div style={greyLabelCitiesStyle}>Denver (GMT-6)</div>
              <div style={greyLabelCitiesStyle}>Phoenix (GMT-7)</div>
              <div style={greyLabelCitiesStyle}>Los Angeles (GMT-7)</div>
              <div style={greyLabelCitiesStyle}>Anchorage (GMT-8)</div>
              <div style={greyLabelCitiesStyle}>Honolulu (GMT-10)</div>
              <div style={greyLabelCitiesStyle}>Honolulu (GMT-10)</div>
            </div>
          </div>
        </div>

        {/* Select your Time Div */}
        <div style={selectYourTimeDiv}>
          <span style={availabilityHeaderText}>Select Your Time</span>

          <div style={selectYourTimeCardStyle}>
            <div style={weekDaysOuterDivStyle}>
              <div style={availabilityHeaderText}>Week Days</div>

              <div style={daysCardStyle}>
                <div style={daysCardInternalDivStyle}>
                  <Checkbox style={{ marginLeft: "15px" }}></Checkbox>
                  <div style={greyLabelDaysStyle}>Monday</div>
                </div>

                <div style={daysCardInternalDivStyle}>
                  <Checkbox style={{ marginLeft: "15px" }}></Checkbox>
                  <div style={greyLabelDaysStyle}>Tuesday</div>
                </div>

                <div style={daysCardInternalDivStyle}>
                  <Checkbox style={{ marginLeft: "15px" }}></Checkbox>
                  <div style={greyLabelDaysStyle}>Wednesday</div>
                </div>

                <div style={daysCardInternalDivStyle}>
                  <Checkbox style={{ marginLeft: "15px" }}></Checkbox>
                  <div style={greyLabelDaysStyle}>Thursday</div>
                </div>

                <div style={daysCardInternalDivStyle}>
                  <Checkbox style={{ marginLeft: "15px" }}></Checkbox>
                  <div style={greyLabelDaysStyle}>Friday</div>
                </div>

                <div style={daysCardInternalDivStyle}>
                  <Checkbox style={{ marginLeft: "15px" }}></Checkbox>
                  <div style={fadedOutDayStyle}>Saturday</div>
                </div>

                <div style={daysCardInternalDivStyle}>
                  <Checkbox style={{ marginLeft: "15px" }}></Checkbox>
                  <div style={fadedOutDayStyle}>Sunday</div>
                </div>
              </div>
            </div>

            <div style={timeOuterDivStyle}>
              <span style={availabilityHeaderText}>Time</span>

              <div
                style={{
                  display: "flex",
                  width: "146px",
                  justifyContent: "space-between",
                }}
              >
                <span style={startEndTextStyle}>Start</span>
                <span style={startEndTextStyle}>End</span>
              </div>

              <div style={timeCardStyle}>
                <div style={{ width: "665", height: "15px" }}></div>

                <div style={timeCardInteralDivStyle}>
                  <div style={smallGreyDivStyle}>10AM</div>
                  <LineOutlined style={{ margin: "10px", color: "#707070" }} />
                  <div style={smallGreyDivStyle}>10AM</div>
                </div>

                <div style={timeCardInteralDivStyle}>
                  <div style={smallGreyDivStyle}>11AM</div>
                  <LineOutlined style={{ margin: "10px", color: "#707070" }} />
                  <div style={smallGreyDivStyle}>12AM</div>
                </div>

                <div style={timeCardInteralDivStyle}>
                  <div style={smallGreyDivStyle}>12AM</div>
                  <LineOutlined style={{ margin: "10px", color: "#707070" }} />
                  <div style={smallGreyDivStyle}>01AM</div>
                </div>

                <div style={timeCardInteralDivStyle}>
                  <div style={smallGreyDivStyle}>01AM</div>
                  <LineOutlined style={{ margin: "10px", color: "#707070" }} />
                  <div style={smallGreyDivStyle}>02AM</div>
                </div>

                <div style={timeCardInteralDivStyle}>
                  <div style={smallGreyDivStyle}>02AM</div>
                  <LineOutlined style={{ margin: "10px", color: "#707070" }} />
                  <div style={smallGreyDivStyle}>03AM</div>
                </div>

                <div style={timeCardInteralDivStyle}>
                  <div style={fadedOutTextStyle}>Time</div>
                  <LineOutlined style={{ margin: "10px", color: "#707070" }} />
                  <div style={fadedOutTextStyle}>Time</div>
                </div>

                <div style={timeCardInteralDivStyle}>
                  <div style={fadedOutTextStyle}>Time</div>
                  <LineOutlined style={{ margin: "10px", color: "#707070" }} />
                  <div style={fadedOutTextStyle}>Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availability;
