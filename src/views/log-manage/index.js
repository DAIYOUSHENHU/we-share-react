import { useState } from "react";
import { DatePicker, Table, Space, Button, Modal, Input } from "antd";
const { Search } = Input;
const { RangePicker } = DatePicker;

import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";

function index() {
  const [visibleDetails, setVisibleDetails] = useState(false);
  const dataSource = [
    {
      key: "1",
      name: "admin",
      role: "管理员",
      desc: "跳转到日志管理页面",
      create_time: "2022-04-16 20:24:21",
      url: "/layout/managesys/logmanage",
      req_type: "POST",
      req_data: '{"token": "login","role": "2"}',
    },
    {
      key: "2",
      name: "admin",
      role: "管理员",
      desc: "跳转到首页",
      create_time: "2022-04-16 20:24:12",
      url: "/layout/dashboard",
      req_type: "POST",
      req_data: '{"token": "login","role": "2"}',
    },
    {
      key: "3",
      name: "admin",
      role: "管理员",
      desc: "登录系统",
      create_time: "2022-04-16 20:24:12",
      url: "/login",
      req_type: "POST",
      req_data: '{"user_name": "admin","pwd": "******"}',
    },
    {
      key: "4",
      name: "admin",
      role: "管理员",
      desc: "管理员下线",
      create_time: "2022-04-16 20:24:21",
      url: "/logout",
      req_type: "POST",
      req_data: '{"token": "login","role": "2"}',
    },
    {
      key: "5",
      name: "admin",
      role: "管理员",
      desc: "跳转到组织管理页面",
      create_time: "2022-04-16 20:24:21",
      url: "/layout/managesys/organmanage",
      req_type: "POST",
      req_data: '{"token": "login","role": "2"}',
    },
    {
      key: "6",
      name: "admin",
      role: "管理员",
      desc: "跳转到用户管理页面",
      create_time: "2022-04-16 20:24:21",
      url: "/layout/managesys/usermanage",
      req_type: "POST",
      req_data: '{"token": "login","role": "2"}',
    },
    {
      key: "7",
      name: "admin",
      role: "管理员",
      desc: "跳转到用户管理页面",
      create_time: "2022-04-16 20:24:21",
      url: "/layout/managesys/usermanage",
      req_type: "POST",
      req_data: '{"token": "login","role": "2"}',
    },
    {
      key: "8",
      name: "admin",
      role: "管理员",
      desc: "跳转到用户管理页面",
      create_time: "2022-04-16 20:24:21",
      url: "/layout/managesys/usermanage",
      req_type: "POST",
      req_data: '{"token": "login","role": "2"}',
    },
    {
      key: "9",
      name: "admin",
      role: "管理员",
      desc: "跳转到用户管理页面",
      create_time: "2022-04-16 20:24:21",
      url: "/layout/managesys/usermanage",
      req_type: "POST",
      req_data: '{"token": "login","role": "2"}',
    },
    {
      key: "10",
      name: "admin",
      role: "管理员",
      desc: "跳转到用户管理页面",
      create_time: "2022-04-16 20:24:21",
      url: "/layout/managesys/usermanage",
      req_type: "POST",
      req_data: '{"token": "login","role": "2"}',
    },
    {
      key: "11",
      name: "admin",
      role: "管理员",
      desc: "跳转到用户管理页面",
      create_time: "2022-04-16 20:24:21",
      url: "/layout/managesys/usermanage",
      req_type: "POST",
      req_data: '{"token": "login","role": "2"}',
    },
    
  ];

  const columns = [
    {
      title: "操作用户名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "操作用户角色",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "操作描述",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "操作时间",
      dataIndex: "create_time",
      key: "create_time",
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "请求类型",
      dataIndex: "req_type",
      key: "req_type",
    },
    {
      title: "请求参数",
      dataIndex: "req_data",
      key: "req_data",
    },

    {
      title: "操作结果",
      dataIndex: "options",
      key: "options",
      render: () => (
        <Space size="middle">
          <Button type="primary">成功</Button>
          <Button type="link" onClick={showModalDetails}>
            详情
          </Button>
        </Space>
      ),
    },
  ];
  const onSearch = (value) => console.log(value);

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
      <RangePicker showTime locale={locale} style={{ marginLeft: 20 }} />
      <Table dataSource={dataSource} columns={columns} />;
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
