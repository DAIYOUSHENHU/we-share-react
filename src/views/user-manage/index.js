import { useState } from "react";
import { Table, Space, Button, Modal, Input } from "antd";
const { Search } = Input;

function index() {
  const [visible, setVisible] = useState(false);
  const [visibleDetails, setVisibleDetails] = useState(false);
  const dataSource = [
    {
      key: "1",
      name: "test",
      role: "普通用户",
      state: "正常",
      is_organ: "否",
      organ_name: "",
      create_time: "2022-04-14 21:11:10",
    },
    {
      key: "2",
      name: "user1",
      role: "普通用户",
      state: "正常",
      is_organ: "否",
      organ_name: "",
      create_time: "2022-04-14 21:30:12",
    },
    {
      key: "3",
      name: "test1",
      role: "普通用户;组织",
      state: "正常",
      is_organ: "是",
      organ_name: "	四川师范大学成龙校区东苑1栋",
      create_time: "2022-04-15 14:26:58",
    },

  ];

  const columns = [
    {
      title: "用户名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "角色",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "状态",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "是否组织",
      dataIndex: "is_organ",
      key: "is_organ",
    },
    {
      title: "组织名",
      dataIndex: "organ_name",
      key: "organ_name",
    },
    {
      title: "加入时间",
      dataIndex: "create_time",
      key: "create_time",
    },
    {
      title: "操作",
      dataIndex: "options",
      key: "options",
      width: "12%",
      render: () => (
        <Space size="middle">
          <Button type="danger" onClick={showModal}>
            禁用
          </Button>
          <Button type="primary" onClick={showModalDetails}>
            详情
          </Button>
        </Space>
      ),
    },
  ];
  const onSearch = (value) => console.log(value);
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const showModalDetails = () => {
    setVisibleDetails(true);
  };
  const handleOkDetails = () => {
    setVisibleDetails(false);
  };

  const handleCancelDetails = () => {
    setVisibleDetails(false);
  };
  return (
    <>
      <Search
        placeholder="按用户名查找"
        onSearch={onSearch}
        enterButton
        style={{ width: 304, marginBottom: 20 }}
      />
      <Table dataSource={dataSource} columns={columns} />;
      <Modal
        title="提醒"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <p>确认禁用此物资吗？</p>
        <p>禁用后，其他用户将不能查看到此物资信息</p>
      </Modal>
      <Modal
        title="物资详情"
        visible={visibleDetails}
        onOk={handleOkDetails}
        okText="确认"
        cancelText="取消"
        onCancel={handleCancelDetails}
        footer={[
          <Button key="submit" type="primary" onClick={handleOkDetails}>
            确认
          </Button>,
        ]}
      >
        <p>
          物资名：<span>充电宝</span>
        </p>
        <p>
          描述：<span>一个充电宝</span>
        </p>
        <p>
          状态：<span>使用中</span>
        </p>
        <p>
          提供者姓名：<span>user1</span>
        </p>
        <p>
          提供者联系电话：<span>18018018010</span>
        </p>
        <p>
          物资加入组织时间：<span>2022-04-15 21:04:01</span>
        </p>
        <p>
          使用者姓名：<span>test1</span>
        </p>
        <p>
          使用者联系电话：<span>18180186069</span>
        </p>
        <p>
          开始使用时间：<span>2022-04-16 10:35:31</span>
        </p>
      </Modal>
    </>
  );
}

export default index;
