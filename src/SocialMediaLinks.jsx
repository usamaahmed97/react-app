import React from "react";
import { Button, Checkbox } from "antd";
import {
  GlobalOutlined,
  InstagramOutlined,
  LinkedinFilled,
  FacebookFilled,
 
} from "@ant-design/icons";
import {
  socialMediaLinksCardStyle,
  socialMediaLinksCardInnerDivStyle,
  socialMediaLinksCardHeaderStyle,
  socialMediaLinksTextStyle,
  socialMediaLinksEditButtonStyle,
  socialMediaLinksAddSocialDivStyle,
  socialMediaLinksAddWebsiteDivStyle,
  socialMediaLinksAddWebsiteWhiteDivStyle,
  socialMediaLinksAddWebsiteTextStyle,
  socialMediaLinksIconStyle,
  socialMediaLinksCheckboxStyle
} from "./SocialMediaLinksStyles";

const SocialMediaLinks = () => {
  return (
    <div style={socialMediaLinksCardStyle}>
      <div style={socialMediaLinksCardInnerDivStyle}>
        <div style={socialMediaLinksCardHeaderStyle}>
          <span style={socialMediaLinksTextStyle}>
            Add Your Social Media Links Here
          </span>
          <Button danger style={socialMediaLinksEditButtonStyle}>
            Add More
          </Button>
        </div>

        <div style={socialMediaLinksAddSocialDivStyle} id="social-media">
            
          {/* Row 1 */}
          <div style={socialMediaLinksAddWebsiteDivStyle}>
            <GlobalOutlined style={socialMediaLinksIconStyle}/>
            <div style={socialMediaLinksAddWebsiteWhiteDivStyle}>
              <span style={socialMediaLinksAddWebsiteTextStyle}>
                Add Website
              </span>
            </div>
            <Checkbox style={socialMediaLinksCheckboxStyle}>Don't have one </Checkbox>
          </div>

          {/* Row 2 */}
          <div style={socialMediaLinksAddWebsiteDivStyle}>
            <InstagramOutlined style={socialMediaLinksIconStyle}/>
            <div style={socialMediaLinksAddWebsiteWhiteDivStyle}>
              <span style={socialMediaLinksAddWebsiteTextStyle}>
                Add Instagram
              </span>
            </div>
            <Checkbox style={socialMediaLinksCheckboxStyle}>Don't have one </Checkbox>
          </div>

          {/* Row 3 */}
          <div style={socialMediaLinksAddWebsiteDivStyle}>
            <LinkedinFilled style={socialMediaLinksIconStyle}/>
            <div style={socialMediaLinksAddWebsiteWhiteDivStyle}>
              <span style={socialMediaLinksAddWebsiteTextStyle}>
                Add Linkedin
              </span>
            </div>
            <Checkbox style={socialMediaLinksCheckboxStyle}>Don't have one </Checkbox>
          </div>

          {/* Row 4 */}
          <div style={socialMediaLinksAddWebsiteDivStyle}>
            <FacebookFilled style={socialMediaLinksIconStyle}/>
            <div style={socialMediaLinksAddWebsiteWhiteDivStyle}>
              <span style={socialMediaLinksAddWebsiteTextStyle}>
                Add Facebook
              </span>
            </div>
            <Checkbox style={socialMediaLinksCheckboxStyle}>Don't have one </Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
