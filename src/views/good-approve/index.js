import { useState } from "react";
import { Table, Space, Button, Modal } from "antd";

function index() {
  const [visibleApprove, setVisibleApprove] = useState(false);
  const [visibleReject, setVisibleReject] = useState(false);
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
      key: "1",
      name: "胡彦斌",
      age: 32,
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
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "11",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "12",
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
      title: "申请理由",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "备注",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "操作",
      dataIndex: "options",
      key: "options",
      width: "12%",
      render: () => (
        <Space size="middle">
          <Button type="primary" onClick={showModalApprove}>
            通过
          </Button>
          <Button onClick={showModalReject}>驳回</Button>
        </Space>
      ),
    },
  ];
  const showModalApprove = () => {
    setVisibleApprove(true);
  };
  const handleOkApprove = () => {
    setTimeout(() => {
      setVisibleApprove(false);
    }, 2000);
  };

  const handleCancelApprove = () => {
    setVisibleApprove(false);
  };

  const showModalReject = () => {
    setVisibleReject(true);
  };
  const handleOkReject = () => {
    setVisibleReject(false);
  };

  const handleCancelReject = () => {
    setVisibleReject(false);
  };
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />;
      <Modal
        title="提醒"
        visible={visibleApprove}
        onOk={handleOkApprove}
        onCancel={handleCancelApprove}
        okText="确认"
        cancelText="取消"
      >
        <p>确认禁用此物资吗？</p>
      </Modal>
      <Modal
        title="物资详情"
        visible={visibleReject}
        onOk={handleOkReject}
        okText="确认"
        cancelText="取消"
        onCancel={handleCancelReject}
        footer={[
          <Button key="submit" type="primary" onClick={handleOkReject}>
            确认
          </Button>,
        ]}
      >
        <p>物资详情</p>
      </Modal>
    </>
  );
}

export default index;
