import { useState } from "react";
import { Table, Input, Space, Button, Modal, Form, Radio } from "antd";
const { Search } = Input;

export default function index() {
  const [visibleApply, setVisibleApply] = useState(false);
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [value, setValue] = useState(0);

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
      width: "25%",
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

  const onFinish = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const showModalApply = () => {
    setVisibleApply(true);
  };
  const handleOkApply = () => {
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
        title="共享申请"
        visible={visibleApply}
        onOk={handleOkApply}
        confirmLoading={confirmLoading}
        onCancel={handleCancelApply}
        okText="确认"
        cancelText="取消"
      >
        <Form name="offerHelpForm" onFinish={onFinish}>
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
            name="desc"
            label="借用类型"
            rules={[
              {
                required: true,
                message: "请选择借用类型!",
              },
            ]}
          >
            <Radio.Group onChange={onChange} value={value} defaultValue={value}>
              <Radio value={0}>暂时借用（七天内归还）</Radio>
              <Radio value={1}>永久使用</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="note" label="备注">
            <Input type="text" placeholder="请输入备注" />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="物资详情"
        visible={visibleDetails}
        onOk={handleOkDetails}
        okText="确认"
        cancelText="取消"
        onCancel={handleCancelDetails}
        footer={
          <Button key="submit" type="primary" onClick={handleOkDetails}>
            确认
          </Button>
        }
      >
        <p>
          物资名：<span>风扇</span>
        </p>
        <p>
          描述：<span>便携小风扇</span>
        </p>
        <p>
          所属组织名：<span>四川师范大学成龙校区东苑1栋</span>
        </p>
        <p>
          所属组织地址：<span>四川师范大学成龙校区东苑1栋</span>
        </p>
        <p>
          所属组织联系电话：<span>18018018010</span>
        </p>
        <p>
          物资加入系统时间：<span>2022-04-15 21:07:22</span>
        </p>
      </Modal>
    </div>
  );
}
