import { useState } from "react";
import { Form, Drawer, Button, Space, Table, Input, Select } from "antd";
const { Option } = Select;
import {} from "@ant-design/icons";
const { Search } = Input;

export default function index() {
  const [visible, setVisible] = useState(false);

  const dataSource = [
    {
      key: "1",
      name: "书",
      desc: "科幻书籍",
      phone: "18018018010",
      address: "川师成龙校区",
    },
    {
      key: "2",
      name: "伞",
      desc: "一把伞",
      phone: "18018018010",
      address: "川师成龙",
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
      title: "联系电话",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address",
    },
  ];
  const onSearch = (value) => console.log(value);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onFinish = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onSearchOrgan(val) {
    console.log('search:', val);
  }

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
        <Form name="offerHelpForm" onFinish={onFinish}>
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
            name="choose_organ"
            label="托管组织"
            rules={[
              {
                required: true,
                message: "请选择托管组织",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="请选择物资托管组织"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearchOrgan}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="四川师范大学成龙校区东苑1栋">四川师范大学成龙校区东苑1栋</Option>
            </Select>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
