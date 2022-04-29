import { useState } from "react";
import { Table, Space, Button, Modal, Input, Radio } from "antd";
const { Search } = Input;

function index() {
  const [value, setValue] = useState("approveing");
  const [visibleApprove, setVisibleApprove] = useState(false);
  const [visibleReject, setVisibleReject] = useState(false);
  const dataSource = [
    {
      key: "1",
      good_name: "健胃消食片",
      desc: "一盒健胃消食片",
      user_name: "user1",
      user_phone: "18018018010",
    },
    {
      key: "2",
      good_name: "滴眼液",
      desc: "一盒滴眼液",
      user_name: "user1",
      user_phone: "18018018010",
    },
  ];

  const columns = [
    {
      title: "物资名",
      dataIndex: "good_name",
      key: "good_name",
    },
    {
      title: "描述",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "提供人",
      dataIndex: "user_name",
      key: "user_name",
    },
    {
      title: "联系电话",
      dataIndex: "user_phone",
      key: "user_phone",
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
          <Button type="danger" onClick={showModalReject}>
            驳回
          </Button>
        </Space>
      ),
    },
  ];

  const onSearch = (value) => console.log(value);
  function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
    setValue(e.target.value);
  }

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
      <Search
        placeholder="按物品名查找"
        onSearch={onSearch}
        enterButton
        style={{ width: 304, marginBottom: 20 }}
      />
      <div style={{ marginBottom: 10 }}>
        <Radio.Group
          onChange={onChange}
          value={value}
          defaultValue="approveing"
          buttonStyle="solid"
        >
          <Radio.Button value="approveing">审核中</Radio.Button>
          <Radio.Button value="successed">已通过</Radio.Button>
          <Radio.Button value="failed">已拒绝</Radio.Button>
        </Radio.Group>
      </div>
      <Table dataSource={dataSource} columns={columns} />;
      <Modal
        title="提醒"
        visible={visibleApprove}
        onOk={handleOkApprove}
        onCancel={handleCancelApprove}
        okText="确认"
        cancelText="取消"
      >
        <p>确认接收此物资吗？</p>
      </Modal>
      <Modal
        title="驳回申请"
        visible={visibleReject}
        onOk={handleOkReject}
        okText="确认"
        cancelText="取消"
        onCancel={handleCancelReject}
      >
        <p>确认拒绝此物资吗？</p>
      </Modal>
    </>
  );
}

export default index;
