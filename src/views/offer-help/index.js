import { useState } from "react";
import { Form, Drawer, Button, Space, Table, Input } from "antd";
import {} from "@ant-design/icons";
const { Search } = Input;

export default function index() {
  const [visible, setVisible] = useState(false);

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
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onSearch = (value) => console.log(value);
  const onFinish = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Button onClick={showDrawer}>提供物资</Button>
      <Search
        placeholder="按物品名查找"
        onSearch={onSearch}
        enterButton
        style={{ width: 304, marginBottom: 20, float: "right" }}
      />
      <Table dataSource={dataSource} columns={columns} scroll={{ y: 450 }} />;
      <Drawer
        title="提供物资"
        placement="right"
        width={500}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>关闭</Button>
            <Button type="primary" onClick={onClose}>
              确认
            </Button>
          </Space>
        }
      >
        <Form
          name="offerHelpForm"
          onFinish={onFinish}
        >
          <Form.Item
            name="goodname"
            label="物资名"
            rules={[
              {
                required: true,
                message: "请输入请求物资!",
              },
            ]}
          >
            <Input type="text" placeholder="请输入物资名" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="联系电话"
            rules={[
              {
                required: true,
                message: "请输入联系电话!",
              },
            ]}
          >
            <Input type="text" placeholder="请输入联系电话" />
          </Form.Item>

          <Form.Item name="desc" label="描述">
            <Input type="text" placeholder="请填写说明" />
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
