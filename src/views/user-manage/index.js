import { useState, useEffect } from "react";
import { Table, Space, Button, Modal, Input, message } from "antd";
const { Search } = Input;
import dateFormat from "@/utils/format";
import { getUser, banUser } from "@/api/login";
function index() {
  const [visible, setVisible] = useState(false);
  // const [visibleDetails, setVisibleDetails] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [select, setSelect] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    let roleType = {
      0: "普通用户（非组织）",
      1: "组织",
      2: "管理员",
    };
    getUser().then((res) => {
      let user = JSON.parse(res.data);
      for (let i = 0; i < user.length; i++) {
        if(user[i].role == 2) {
          user.splice(i, 1);
        }
        user[i].key = String(i + 1);
        user[i].state = user[i].state == 0 ? "正常" : "禁用";
        user[i].role = roleType[user[i].role];
        user[i].CreateTime = dateFormat(user[i].CreateTime);
      }
      setDataSource(user);
      console.log(user);
    });
    refresh && setTimeout(() => setRefresh(false));
  }, [refresh]);
  // const dataSource = [
  //   {
  //     key: "1",
  //     name: "test",
  //     role: "普通用户",
  //     state: "正常",
  //     is_organ: "否",
  //     organ_name: "",
  //     create_time: "2022-04-14 21:11:10",
  //   },
  //   {
  //     key: "2",
  //     name: "user1",
  //     role: "普通用户",
  //     state: "正常",
  //     is_organ: "否",
  //     organ_name: "",
  //     create_time: "2022-04-14 21:30:12",
  //   },
  //   {
  //     key: "3",
  //     name: "test1",
  //     role: "普通用户;组织",
  //     state: "正常",
  //     is_organ: "是",
  //     organ_name: "	四川师范大学成龙校区东苑1栋",
  //     create_time: "2022-04-15 14:26:58",
  //   },

  // ];

  const columns = [
    {
      title: "用户名",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "状态",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "角色",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "加入时间",
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
          {/* <Button type="primary" onClick={showModalDetails}>
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
    banUser({
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
        <p>确认禁用此用户吗？</p>
        <p>禁用后，此用户将不能登录系统</p>
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
