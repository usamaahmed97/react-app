import React from "react";
import "./App.css";
import EditIcon from "./components/EditIcon";
import AttachmentIcon from "./components/AttachmentIcon";
import DeleteIcon from "./components/DeleteIcon";
import { Button } from "antd";
import { Table } from "antd";
import {
  workExperienceCardStyles,
  workExperienceCardInnerDivStyles,
  workExperienceCardHeaderStyle,
  workExperienceTextStyle,
  workExperienceEditButtonStyle,
  workExperienceTableStyle,
  workExperienceTableFieldStyle,
  workExperienceTableWhiteTagStyle,
  workExperienceTableAttachmentIconStyle,
} from "./WorkexperienceStyles";

const WorkExperience = () => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      align: "center",
      render: (title) => {
        return <span style={workExperienceTableFieldStyle}>{title}</span>;
      },
    },
    {
      title: "Employer Name",
      dataIndex: "employeeName",
      key: "employeeName",
      align: "center",
      render: (employeeName) => {
        return (
          <span style={workExperienceTableFieldStyle}>{employeeName}</span>
        );
      },
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      align: "center",
      render: (department) => {
        return <span style={workExperienceTableFieldStyle}>{department}</span>;
      },
    },
    {
      title: "Attachment",
      dataIndex: "attachment",
      key: "attachment",
      align: "center",
      render: (attachment) => {
        return <span style={workExperienceTableFieldStyle}>{attachment}</span>;
      },
    },
    {
      title: "Start Year",
      dataIndex: "startYear",
      key: "startYear",
      align: "center",
      render: (startYear) => {
        return <span style={workExperienceTableFieldStyle}>{startYear}</span>;
      },
    },
    {
      title: "End Year",
      dataIndex: "endYear",
      key: "endYear",
      align: "center",
      render: (endYear) => {
        return <span style={workExperienceTableFieldStyle}>{endYear}</span>;
      },
    },
    {
      title: "",
      dataIndex: "edit",
      key: "edit",
      render: (edit) => {
        return <span style={workExperienceTableFieldStyle}>{edit}</span>;
      },
    },
  ];

  const dataSource = [
    {
      key: "1",
      title: (
        <div style={workExperienceTableWhiteTagStyle}>
          <span>Title</span>
        </div>
      ),
      employeeName: (
        <div style={workExperienceTableWhiteTagStyle}>
          <span>Company</span>
        </div>
      ),
      department: (
        <div style={workExperienceTableWhiteTagStyle}>
          <span>Dept1</span>
        </div>
      ),
      attachment: (
        <div style={workExperienceTableAttachmentIconStyle}>
          <AttachmentIcon />
        </div>
      ),

      startYear: (
        <div style={workExperienceTableWhiteTagStyle}>
          <span>2010</span>
        </div>
      ),
      endYear: (
        <div style={workExperienceTableWhiteTagStyle}>
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
      title: (
        <div style={workExperienceTableWhiteTagStyle}>
          <span>Title</span>
        </div>
      ),
      employeeName: (
        <div style={workExperienceTableWhiteTagStyle}>
          <span>Company</span>
        </div>
      ),
      department: (
        <div style={workExperienceTableWhiteTagStyle}>
          <span>Dept1</span>
        </div>
      ),
      attachment: (
        <div style={workExperienceTableAttachmentIconStyle}>
          <AttachmentIcon />
        </div>
      ),
      startYear: (
        <div style={workExperienceTableWhiteTagStyle}>
          <span>2010</span>
        </div>
      ),
      endYear: (
        <div style={workExperienceTableWhiteTagStyle}>
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
      title: (
        <div style={workExperienceTableWhiteTagStyle}>
          <span>Title</span>
        </div>
      ),
      employeeName: (
        <div style={workExperienceTableWhiteTagStyle}>
          <span>Company</span>
        </div>
      ),
      department: (
        <div style={workExperienceTableWhiteTagStyle}>
          <span>Dept1</span>
        </div>
      ),
      attachment: (
        <div style={workExperienceTableAttachmentIconStyle}>
          <AttachmentIcon />
        </div>
      ),
      startYear: (
        <div style={workExperienceTableWhiteTagStyle}>
          <span>2010</span>
        </div>
      ),
      endYear: (
        <div style={workExperienceTableWhiteTagStyle}>
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
  ];

  return (
    <div style={workExperienceCardStyles}>
      <div style={workExperienceCardInnerDivStyles}>
        {/* Work Experience Name and Add More Button DIV */}
        <div style={workExperienceCardHeaderStyle}>
          <span style={workExperienceTextStyle}>Work Experience</span>
          <Button danger style={workExperienceEditButtonStyle}>
            Add More
          </Button>
        </div>

        {/* Work Experience Table Div */}
        <div style={workExperienceTableStyle} id="work-experience-table">
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

export default WorkExperience;
