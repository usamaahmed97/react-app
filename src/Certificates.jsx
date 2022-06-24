import React from "react";
import "./App.css";
import EditIcon from "./components/EditIcon";
import AttachmentIcon from "./components/AttachmentIcon";
import DeleteIcon from "./components/DeleteIcon";
import { Button } from "antd";
import { Table } from "antd";
import { CheckSquareOutlined } from "@ant-design/icons";

import {
  certificatesCardStyle,
  certificatesCardInnerDivStyle,
  certificatesCardHeaderStyle,
  certificatesTextStyle,
  certificatesEditButtonStyle,
  certificatesTableStyle,
  certificatesTableFieldStyle,
  certificatesTableWhiteTagStyle,
  certificatesTableAttachmentIconStyle,
  certificatesTableCheckboxLabelStyle,
} from "./CertificatesStyles";

const Certificates = () => {
  // Table Columns
  const columns = [
    {
      title: "Certificate Title",
      dataIndex: "certificateTitle",
      key: "certificateTitle",
      align: "center",
      render: (certificateTitle) => {
        return (
          <span style={certificatesTableFieldStyle}>{certificateTitle}</span>
        );
      },
    },
    {
      title: "Awarding Institution",
      dataIndex: "awardingInstitution",
      key: "awardingInstitution",
      align: "center",
      render: (awardingInstitution) => {
        return (
          <span style={certificatesTableFieldStyle}>{awardingInstitution}</span>
        );
      },
    },
    {
      title: "Attachment",
      dataIndex: "attachment",
      key: "attachment",
      align: "center",
      render: (attachment) => {
        return (
          <span style={certificatesTableAttachmentIconStyle}>{attachment}</span>
        );
      },
    },
    {
      title: "Start Year",
      dataIndex: "startYear",
      key: "startYear",
      align: "center",
      render: (startYear) => {
        return <span style={certificatesTableFieldStyle}>{startYear}</span>;
      },
    },
    {
      title: "End Year",
      dataIndex: "endYear",
      key: "endYear",
      align: "center",
      render: (endYear) => {
        return <span style={certificatesTableFieldStyle}>{endYear}</span>;
      },
    },
    {
      title: "",
      dataIndex: "edit",
      key: "edit",
      render: (edit) => {
        return <span style={certificatesTableFieldStyle}>{edit}</span>;
      },
    },
  ];

  //Table Data
  const dataSource = [
    //Row 1
    {
      key: "1",
      certificateTitle: (
        <div style={certificatesTableWhiteTagStyle}>
          <span>MS(Psychology)</span>
        </div>
      ),
      awardingInstitution: (
        <div style={certificatesTableWhiteTagStyle}>
          <span>Harvard</span>
        </div>
      ),
      attachment: (
        <div style={certificatesTableAttachmentIconStyle}>
          <AttachmentIcon />
        </div>
      ),

      startYear: (
        <div style={certificatesTableWhiteTagStyle}>
          <span>2010</span>
        </div>
      ),
      endYear: (
        <div style={certificatesTableWhiteTagStyle}>
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

    //Row 2
    {
      key: "1",
      certificateTitle: (
        <div style={certificatesTableWhiteTagStyle}>
          <span>MS(Psychology)</span>
        </div>
      ),
      awardingInstitution: (
        <div style={certificatesTableWhiteTagStyle}>
          <span>Harvard</span>
        </div>
      ),
      attachment: (
        <div style={certificatesTableAttachmentIconStyle}>
          <AttachmentIcon />
        </div>
      ),

      startYear: (
        <div style={certificatesTableWhiteTagStyle}>
          <span>2010</span>
        </div>
      ),
      endYear: (
        <div>
          <div style={certificatesTableWhiteTagStyle}>
            <span style={{ color: "grey" }}>--</span>
          </div>

          <div style={certificatesTableCheckboxLabelStyle}>
            <CheckSquareOutlined />
            <span style={{ color: "grey", marginLeft: "5px" }}>
              Doesn't Expire
            </span>
          </div>
        </div>
      ),
      edit: (
        <div style={{ width: "65px" }}>
          <EditIcon />
          <DeleteIcon />
        </div>
      ),
    },

    //Row 3
    {
      key: "1",
      certificateTitle: (
        <div style={certificatesTableWhiteTagStyle}>
          <span style={{ color: "grey" }}>Add Title</span>
        </div>
      ),
      awardingInstitution: (
        <div style={certificatesTableWhiteTagStyle}>
          <span style={{ color: "grey" }}>Add Institute</span>
        </div>
      ),
      attachment: (
        <div style={certificatesTableAttachmentIconStyle}>
          <AttachmentIcon />
        </div>
      ),

      startYear: (
        <div style={certificatesTableWhiteTagStyle}>
          <span style={{ color: "grey" }}>Start Date</span>
        </div>
      ),
      endYear: (
        <div>
          <div style={certificatesTableWhiteTagStyle}>
            <span style={{ color: "grey" }}>End Date</span>
          </div>

          <div style={certificatesTableCheckboxLabelStyle}>
            <CheckSquareOutlined />
            <span style={{ color: "grey", marginLeft: "5px" }}>
              Doesn't Expire
            </span>
          </div>
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
    <div style={certificatesCardStyle}>
      <div style={certificatesCardInnerDivStyle}>
        {/* Certificates Name and Add More Button DIV */}
        <div style={certificatesCardHeaderStyle}>
          <span style={certificatesTextStyle}>Certificates</span>
          <Button danger style={certificatesEditButtonStyle}>
            Add More
          </Button>
        </div>

        {/* Certificates Table Div */}
        <div style={certificatesTableStyle} id="certificates-table">
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

export default Certificates;
