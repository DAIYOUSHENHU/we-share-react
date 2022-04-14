import { Row, Col, Divider, Table, Input } from "antd";

const { Search } = Input;

function index() {
  const sysinfo = {
    userNum: 12345,
    goodNum: 321654,
  };
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
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];
  const onSearch = (value) => console.log(value);
  return (
    <>
      <Row>
        <Col span={24}>系统信息</Col>
      </Row>
      <Row>
        <Col span={12}>
          <p>已有用户：{sysinfo.userNum}人</p>
        </Col>
        <Col span={12}>
          <p>已有物资：{sysinfo.goodNum}件</p>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>用户管理</Col>
      </Row>
      <Search
        placeholder="按用户名查找"
        onSearch={onSearch}
        enterButton
        style={{ width: 304, marginTop: 10 }}
      />
      <Table
        dataSource={dataSource}
        columns={columns}
        scroll={{ y: 300 }}
        style={{ marginTop: 10 }}
      />
      ;
    </>
  );
}

export default index;
