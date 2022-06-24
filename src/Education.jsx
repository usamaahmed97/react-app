import React from "react";
import "./App.css";
import EditIcon from "./components/EditIcon";
import AttachmentIcon from "./components/AttachmentIcon";
import DeleteIcon from "./components/DeleteIcon";
import { Button } from "antd";
import { Table } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {
  educationCardStyle,
  educationCardInnerDivStyle,
  educationCardHeaderStyle,
  educationTextStyle,
  educationEditButtonStyle,
  educationTableStyle,
  educationTableFieldStyle,
  educationTableWhiteTagStyle,
  educationTableAttachmentIconStyle,
} from "./EducationStyles";

const Education = () => {
  const columns = [
    {
      title: "Degree Title",
      dataIndex: "degreeTitle",
      key: "degreeTitle",
      align: "center",
      render: (degreeTitle) => {
        return <span style={educationTableFieldStyle}>{degreeTitle}</span>;
      },
    },
    {
      title: "Awarding Institution",
      dataIndex: "awardingInstitution",
      key: "awardingInstitution",
      align: "center",
      render: (awardingInstitution) => {
        return (
          <span style={educationTableFieldStyle}>{awardingInstitution}</span>
        );
      },
    },
    {
      title: "Degree Type",
      dataIndex: "degreeType",
      key: "degreeType",
      align: "center",
      render: (degreeType) => {
        return <span style={educationTableFieldStyle}>{degreeType}</span>;
      },
    },
    {
      title: "Attachment",
      dataIndex: "attachment",
      key: "attachment",
      align: "center",
      render: (attachment) => {
        return <span style={educationTableFieldStyle}>{attachment}</span>;
      },
    },
    {
      title: "Start Year",
      dataIndex: "startYear",
      key: "startYear",
      align: "center",
      render: (startYear) => {
        return <span style={educationTableFieldStyle}>{startYear}</span>;
      },
    },
    {
      title: "End Year",
      dataIndex: "endYear",
      key: "endYear",
      align: "center",
      render: (endYear) => {
        return <span style={educationTableFieldStyle}>{endYear}</span>;
      },
    },
    {
      title: "",
      dataIndex: "edit",
      key: "edit",
      render: (edit) => {
        return <span style={educationTableFieldStyle}>{edit}</span>;
      },
    },
  ];

  const dataSource = [
    {
      key: "1",
      degreeTitle: (
        <div style={educationTableWhiteTagStyle}>
          <span>MS(Psychology)</span>
        </div>
      ),
      awardingInstitution: (
        <div style={educationTableWhiteTagStyle}>
          <span>Harvard</span>
        </div>
      ),
      degreeType: (
        <div style={educationTableWhiteTagStyle}>
          <span>Master</span>
        </div>
      ),
      attachment: (
        <div style={educationTableAttachmentIconStyle}>
          <AttachmentIcon />
        </div>
      ),

      startYear: (
        <div style={educationTableWhiteTagStyle}>
          <span>2010</span>
        </div>
      ),
      endYear: (
        <div style={educationTableWhiteTagStyle}>
          <span>2012</span>
        </div>
      ),
      edit: (
        <div style={{ width: "65px" }}>
          <EditIcon />
          <DeleteIcon />
        </div>
      ),
    },

    {
      key: "2",
      degreeTitle: (
        <div style={educationTableWhiteTagStyle}>
          <span>MS(Psychology)</span>
        </div>
      ),
      awardingInstitution: (
        <div style={educationTableWhiteTagStyle}>
          <span>Harvard</span>
        </div>
      ),
      degreeType: (
        <div style={educationTableWhiteTagStyle}>
          <span style={{ color: "grey", marginRight: "25px", width: "50px" }}>
            Select
          </span>
          <div>
            <DownOutlined style={{ width: "20px" }} />
          </div>
        </div>
      ),
      attachment: (
        <div style={educationTableAttachmentIconStyle}>
          <AttachmentIcon />
        </div>
      ),

      startYear: (
        <div style={educationTableWhiteTagStyle}>
          <span>2010</span>
        </div>
      ),
      endYear: (
        <div style={educationTableWhiteTagStyle}>
          <span>2012</span>
        </div>
      ),
      edit: (
        <div style={{ width: "65px" }}>
          <EditIcon />
          <DeleteIcon />
        </div>
      ),
    },
    {
      key: "3",
      degreeTitle: (
        <div style={educationTableWhiteTagStyle}>
          <span>MS(Psychology)</span>
        </div>
      ),
      awardingInstitution: (
        <div style={educationTableWhiteTagStyle}>
          <span>Institute</span>
        </div>
      ),
      degreeType: (
        <div style={educationTableWhiteTagStyle}>
          <span style={{ color: "grey", marginRight: "25px", width: "50px" }}>
            Select
          </span>
          <div>
            <DownOutlined style={{ width: "20px" }} />
          </div>
        </div>
      ),
      attachment: (
        <div style={educationTableAttachmentIconStyle}>
          <AttachmentIcon />
        </div>
      ),

      startYear: (
        <div style={educationTableWhiteTagStyle}>
          <span style={{ color: "grey" }}>2010</span>
        </div>
      ),
      endYear: (
        <div style={educationTableWhiteTagStyle}>
          <span style={{ color: "grey" }}>2012</span>
        </div>
      ),
      edit: (
        <div style={{ width: "65px" }}>
          <EditIcon />
          <DeleteIcon />
        </div>
      ),
    },
  ];

  return (
    <div style={educationCardStyle}>
      <div style={educationCardInnerDivStyle}>
        {/* Work Experience Name and Add More Button DIV */}
        <div style={educationCardHeaderStyle}>
          <span style={educationTextStyle}>Education</span>
          <Button danger style={educationEditButtonStyle}>
            Add More
          </Button>
        </div>

        {/* Work Experience Table Div */}
        <div style={educationTableStyle} id="work-experience-table">
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            bordered={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
