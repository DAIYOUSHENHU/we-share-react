import { useState, useEffect } from "react";
import { Table, Space, Button, Modal, Input, message } from "antd";
const { Search } = Input;
import { getUserInfo } from "@/utils/auth";
import { getGood, banGood } from "@/api/good";
import { addLog } from "@/api/login";
function index() {
  const [visible, setVisible] = useState(false);
  // const [visibleDetails, setVisibleDetails] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [select, setSelect] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    let userInfo = getUserInfo();
    // 转换成json对象
    userInfo = JSON.parse(userInfo);
    addLog({
      userid: userInfo.id,
      username: userInfo.username,
      role: userInfo.role,
      desc: "跳转到物资状态管理页面",
    }).then((res) => {
      console.log(res);
    });
    getGood({
      id: userInfo.id,
    }).then((res) => {
      let good = JSON.parse(res.data);
      for (let i = 0; i < good.length; i++) {
        good[i].key = String(i + 1);
      }
      setDataSource(good);
      console.log(good);
    });
    refresh && setTimeout(() => setRefresh(false));
  }, [refresh]);
  // const dataSource = [
  //   {
  //     key: "1",
  //     good_name: "风扇",
  //     desc: "便携小风扇",
  //     use_state: "未使用",
  //     owner_name: "user1",
  //     owner_phone: "18018018010",
  //     user_name: "",
  //     user_phone: "",
  //   },
  //   {
  //     key: "2",
  //     good_name: "饮用水",
  //     desc: "	22年4月产的一箱农夫山泉矿泉水",
  //     use_state: "未使用",
  //     owner_name: "user1",
  //     owner_phone: "18018018010",
  //     user_name: "",
  //     user_phone: "",
  //   },
  //   {
  //     key: "3",
  //     good_name: "充电宝",
  //     desc: "一个充电宝",
  //     use_state: "使用中",
  //     owner_name: "user1",
  //     owner_phone: "18018018010",
  //     user_name: "test1",
  //     user_phone: "18180186069",
  //   },
  // ];

  const columns = [
    {
      title: "物资名",
      dataIndex: "goodname",
      key: "goodname",
    },
    {
      title: "描述",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "使用状态",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "提供者联系电话",
      dataIndex: "userphone",
      key: "userphone",
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
          {/* <Button type="primary" onClick={() => showModalDetails(row)}>
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
    banGood({
      id: select.id,
    })
      .then(() => {
        let userInfo = getUserInfo();
        // 转换成json对象
        userInfo = JSON.parse(userInfo);
        addLog({
          userid: userInfo.id,
          username: userInfo.username,
          role: userInfo.role,
          desc: "禁用物资",
          reqtype: "POST",
        }).then((res) => {
          console.log(res);
        });
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
        placeholder="按物品名查找"
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
