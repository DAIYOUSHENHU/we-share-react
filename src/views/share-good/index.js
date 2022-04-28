import { useState } from "react";
import { Table, Input, Space, Button, Modal } from "antd";
const { Search } = Input;

export default function index() {  
  const [visibleApply, setVisibleApply] = useState(false);
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("确认申请此共享物资吗？");

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
      width: "25%",
    },
    {
      title: "所属组织名",
      dataIndex: "organName",
      key: "organName",
    },

    {
      title: "所属组织地址",
      dataIndex: "organAddress",
      key: "organAddress",
      width: "25%",
    },
    {
      title: "操作",
      dataIndex: "options",
      key: "options",
      width: "12%",
      render: () => (
        <Space size="middle">
          <Button type="primary" onClick={showModalApply}>
            申请
          </Button>
          <Button onClick={showModalDetails}>详情</Button>
        </Space>
      ),
    },
  ];
  const onSearch = (value) => console.log(value);

  const showModalApply = () => {
    setVisibleApply(true);
  };
  const handleOkApply = () => {
    setModalText("正在提交...");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisibleApply(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancelApply = () => {
    setVisibleApply(false);
  };

  const showModalDetails = () => {
    setVisibleDetails(true);
  };
  const handleOkDetails = () => {
    setConfirmLoading(true);
      setVisibleDetails(false);
  };

  const handleCancelDetails = () => {
    setVisibleDetails(false);
  };
  return (
    <div>
      <Search
        placeholder="按物品名查找"
        onSearch={onSearch}
        enterButton
        style={{ width: 304, marginBottom: 20 }}
      />
      <Table dataSource={dataSource} columns={columns} />;
      <Modal
        title="提醒"
        visible={visibleApply}
        onOk={handleOkApply}
        confirmLoading={confirmLoading}
        onCancel={handleCancelApply}
        okText="确认"
        cancelText="取消"
      >
        <p>{modalText}</p>
      </Modal>

      <Modal
        title="物资详情"
        visible={visibleDetails}
        onOk={handleOkDetails}
        okText="确认"
        cancelText="取消"
        onCancel={handleCancelDetails}
      >
        <p>物资详情</p>
      </Modal>
    </div>
  );
}
