import { useState } from "react";
import {
  Button,
  Tooltip,
  Divider,
  Modal,
  Col,
  Row,
  Table,
  Form,
  Input,
} from "antd";
import { HolderOutlined } from "@ant-design/icons";
// import { getToken, setToken, setRole } from "@/utils/auth";
// import { login } from "@/api/login";
import "./index.css";

function index() {
  const [visible, setVisible] = useState(false);
  const userinfo = {
    name: "dysh",
    role: "普通用户（非组织）",
    create_time: "2022-04-14 20:52:15",
  };
  const dataSource = [
    {
      key: "1",
      name: "充电宝",
      desc: "一个充电宝",
      organ_name: "四川师范大学成龙校区东苑1栋",
      organ_address: "四川师范大学成龙校区东苑1栋",
      organ_phone: "18018018010",
      create_time: "2022-04-15 21:04:01",
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
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "所属组织名",
      dataIndex: "organ_name",
      key: "organ_name",
    },
    {
      title: "所属组织地址",
      dataIndex: "organ_address",
      key: "organ_address",
    },
    {
      title: "所属组织联系电话",
      dataIndex: "organ_phone",
      key: "organ_phone",
    },
    {
      title: "借出时间",
      dataIndex: "create_time",
      key: "create_time",
    },
  ];

  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handleOk = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
      <p>加入系统时间：{userinfo.create_time}</p>
      <Modal
        title="成为组织"
        visible={visible}
        onOk={handleOk}
        okText="确认"
        onCancel={handleCancel}
        cancelText="取消"
      >
        <Form name="offerHelpForm" onFinish={handleOk}>
          <Form.Item
            name="organ_name"
            label="组织名"
            rules={[
              {
                required: true,
                message: "请输入组织名!",
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            name="organ_address"
            label="组织地址"
            rules={[
              {
                required: true,
                message: "请输入组织地址!",
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            name="organ_phone"
            label="联系电话"
            rules={[
              {
                required: true,
                message: "请输入组织联系电话!",
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>

          <Form.Item name="desc" label="备注">
            <Input type="text" placeholder="组织说明" />
          </Form.Item>
        </Form>
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
        columns={columns}
        scroll={{ y: 350 }}
        style={{ marginTop: "10px" }}
      />
    </div>
  );
}

export default index;
