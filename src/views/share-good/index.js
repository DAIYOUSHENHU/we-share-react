import { Table, Input, Space, Button } from "antd";
const { Search } = Input;

export default function index() {
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
      width: '25%',
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
      width: '25%',
    },
    {
      title: "操作",
      dataIndex: "options",
      key: "options",
      width: '12%',
      render: () => (
        <Space size="middle">
          <Button>申请</Button>
          <Button>详情</Button>
        </Space>
      ),
    },
  ];
  const onSearch = (value) => console.log(value);
  return (
    <div>
      <Search
        placeholder="按物品名查找"
        onSearch={onSearch}
        enterButton
        style={{ width: 304, marginBottom: 20 }}
      />
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}
