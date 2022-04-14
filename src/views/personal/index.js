import { useState } from "react";
import { Button, Card, Tooltip, Divider, Modal } from "antd";
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
    <Card title="个人信息" className="login-form">
      <p>用户名：{userinfo.name}</p>
      <p>角色：{userinfo.role}</p>
      <p>加入时间：{userinfo.create_time}</p>

      <Divider />
      <Button type="primary" onClick={showModal}>
        成为组织
      </Button>
      <Tooltip title="成为组织后能够管理本组织的物资">
        <HolderOutlined style={{ marginLeft: 5 }} />
      </Tooltip>
      <Modal
        title="提醒"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>您确认要成为组织吗？</p>
      </Modal>
    </Card>
  );
}

export default index;
