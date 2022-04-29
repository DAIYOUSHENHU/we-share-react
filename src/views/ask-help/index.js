import { useState } from "react";
import { Form, Drawer, Button, Space, Table, Input } from "antd";
import {} from "@ant-design/icons";
import "./index.less";
const { Search } = Input;

export default function index() {
  const [visible, setVisible] = useState(false);

  const dataSource = [
    {
      key: "1",
      name: "风扇",
      desc: "便携小风扇",
      organ_name: "四川师范大学成龙校区东苑1栋",
      organ_address: "四川师范大学成龙校区东苑1栋",
    },
    {
      key: "2",
      name: "饮用水",
      desc: "22年4月产的一箱农夫山泉矿泉水",
      organ_name: "四川师范大学成龙校区东苑1栋",
      organ_address: "四川师范大学成龙校区东苑1栋",
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
      title: "所属组织地址",
      dataIndex: "organ_address",
      key: "organ_address",
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
      <Button onClick={showDrawer}>请求物资</Button>
      <Search
        placeholder="按物品名查找"
        onSearch={onSearch}
        enterButton
        style={{ width: 304, marginBottom: 20, float: "right" }}
      />
      <Table dataSource={dataSource} columns={columns} scroll={{ y: 450 }} />;
      <Drawer
        title="请求物资"
        placement="right"
        width={500}
        onClose={onClose}
        visible={visible}
        maskClosable={false}
        extra={
          <Space>
            <Button onClick={onClose}>关闭</Button>
            <Button type="primary" onClick={onClose}>
              确认
            </Button>
          </Space>
        }
      >
        <Form name="askHelpForm" onFinish={onFinish}>
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
          <Form.Item name="desc" label="描述">
            <Input type="text" placeholder="请填写说明" />
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
          <Form.Item
            name="address"
            label="地址"
            rules={[
              {
                required: true,
                message: "请输入地址!",
              },
            ]}
          >
            <Input type="text" placeholder="请输入地址" />
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
