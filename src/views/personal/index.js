import { useState } from "react";
import { Button, Tooltip, Divider, Modal, Col, Row, Table } from "antd";
import { HolderOutlined } from "@ant-design/icons";
// import { getToken, setToken, setRole } from "@/utils/auth";
// import { login } from "@/api/login";
import "./index.css";

function index() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const userinfo = {
    name: "dysh",
    role: "普通用户（非组织）",
    create_time: "2022-04-14 20:52:15",
  };
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "3",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "4",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "5",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "6",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "7",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "8",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "9",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "10",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "11",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];
  const columns = [
    {
      title: "物资名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "描述",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "所属组织地址",
      dataIndex: "address",
      key: "address",
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="person">
      <Row gutter={16}>
        <Col span={12}>
          <h2>个人信息</h2>
        </Col>
        <Col span={12}>
          <div style={{ float: "right" }}>
            <Button type="primary" onClick={showModal}>
              成为组织
            </Button>
            <Tooltip title="成为组织后能够管理本组织的物资">
              <HolderOutlined style={{ marginLeft: 5 }} />
            </Tooltip>
          </div>
        </Col>
      </Row>
      <p>用户名：{userinfo.name}</p>
      <p>角色：{userinfo.role}</p>
      <p>加入时间：{userinfo.create_time}</p>
      <Modal
        title="提醒"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>您确认要成为组织吗？</p>
      </Modal>
      <Divider />
      <h2>我借出的共享物资</h2>
      <Table
        dataSource={dataSource}
        columns={columns}
        scroll={{ y: 350 }}
        style={{ marginTop: "10px" }}
      />

      <Divider />
      <h2>我借用的共享物资</h2>
      <Table
        dataSource={dataSource}
        columns={columns}
        scroll={{ y: 350 }}
        style={{ marginTop: "10px" }}
      />
    </div>
  );
}

export default index;
