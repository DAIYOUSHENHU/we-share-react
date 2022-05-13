import { useState, useEffect } from "react";
import { Table, Space, Button, Modal, Input, message } from "antd";
const { Search } = Input;
import dateFormat from "@/utils/format";
import { getOrgan,banOrgan } from "@/api/organ";

function index() {
  const [visible, setVisible] = useState(false);
  // const [visibleDetails, setVisibleDetails] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [select, setSelect] = useState({});
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getOrgan().then((res) => {
      let organ = JSON.parse(res.data);
      for (let i = 0; i < organ.length; i++) {
        organ[i].key = String(i + 1);
        organ[i].CreateTime = dateFormat(organ[i].CreateTime);
        organ[i].state = organ[i].state == 0 ? '正常' : '禁用'
      }
      setDataSource(organ);
      console.log(organ);
    });
    refresh && setTimeout(() => setRefresh(false));
  }, [refresh]);


  // const dataSource = [
  //   {
  //     key: "1",
  //     name: "test1",
  //     state: "正常",
  //     organ_name: "	四川师范大学成龙校区东苑1栋",
  //     organ_address: "四川师范大学成龙校区东苑1栋",
  //     create_time: "2022-04-15 14:26:58",
  //   },
  // ];

  const columns = [
    {
      title: "组织名",
      dataIndex: "organname",
      key: "organname",
    },
    {
      title: "状态",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "组织地址",
      dataIndex: "organaddress",
      key: "organaddress",
    },
    {
      title: "联系电话",
      dataIndex: "organphone",
      key: "organphone",
    },
    {
      title: "成为组织时间",
      dataIndex: "CreateTime",
      key: "CreateTime",
    },
    {
      title: "操作",
      dataIndex: "options",
      key: "options",
      width: "12%",
      render: (text, row) => (
        <Space size="middle">
          <Button type="danger" onClick={() => showModal(row)}>
            禁用
          </Button>
          {/* <Button type="primary" onClick={() => showModalDetails}>
            详情
          </Button> */}
        </Space>
      ),
    },
  ];
  const onSearch = (value) => console.log(value);
  const showModal = (row) => {
    setSelect(row);
    setVisible(true);
  };
  const handleOk = () => {
    console.log(select);
    banOrgan({
      id: select.id,
    })
      .then(() => {
        message.success("操作成功");
        setRefresh(true);
        setVisible(false);
      })
      .catch(() => {
        message.error("操作失败");
        setVisible(false);
      });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  // const showModalDetails = () => {
  //   setVisibleDetails(true);
  // };
  // const handleOkDetails = () => {
  //   setVisibleDetails(false);
  // };

  // const handleCancelDetails = () => {
  //   setVisibleDetails(false);
  // };
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
        <p>确认禁用此组织吗？</p>
        <p>禁用后，其他用户将不能查看到此组织信息</p>
      </Modal>
      {/* <Modal
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
      </Modal> */}
    </>
  );
}

export default index;
