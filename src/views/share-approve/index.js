import { useState, useEffect } from "react";
import { Table, Space, Button, Modal, Input, Radio, message } from "antd";
const { Search } = Input;
import { getUserInfo } from "@/utils/auth";
import { getShareApproveing, acceptShare, refuseShare } from "@/api/good";
function index() {
  const [value, setValue] = useState("approveing");
  const [visibleApprove, setVisibleApprove] = useState(false);
  const [visibleReject, setVisibleReject] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [select, setSelect] = useState({});
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    let userInfo = getUserInfo();
    // 转换成json对象
    userInfo = JSON.parse(userInfo);
    getShareApproveing({
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
  //     good_name: "健胃消食片",
  //     desc: "一盒健胃消食片",
  //     user_name: "user1",
  //     user_phone: "18018018010",
  //   },
  //   {
  //     key: "2",
  //     good_name: "滴眼液",
  //     desc: "一盒滴眼液",
  //     user_name: "user1",
  //     user_phone: "18018018010",
  //   },
  // ];

  const columns = [
    {
      title: "物资名",
      dataIndex: "goodname",
      key: "goodname",
    },
    {
      title: "申请人",
      dataIndex: "username",
      key: "username",
    },

    {
      title: "联系电话",
      dataIndex: "userphone",
      key: "userphone",
    },
    {
      title: "备注",
      dataIndex: "note",
      key: "note",
    },
    {
      title: "操作",
      dataIndex: "options",
      key: "options",
      width: "12%",
      render: (text, row) => (
        <Space size="middle">
          <Button type="primary" onClick={() => showModalApprove(row)}>
            通过
          </Button>
          <Button type="danger" onClick={() => showModalReject(row)}>
            驳回
          </Button>
        </Space>
      ),
    },
  ];

  const onSearch = (value) => console.log(value);
  function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
    setValue(e.target.value);
  }

  const showModalApprove = (row) => {
    setSelect(row);
    setVisibleApprove(true);
  };
  const handleOkApprove = () => {
    console.log(select);
    acceptShare({
      id: select.id,
    })
      .then(() => {
        message.success("操作成功");
        setRefresh(true);
        setVisibleApprove(false);
      })
      .catch(() => {
        message.error("操作失败");
        setVisibleApprove(false);
      });
  };

  const handleCancelApprove = () => {
    setVisibleApprove(false);
  };

  const showModalReject = (row) => {
    setSelect(row);
    setVisibleReject(true);
  };
  const handleOkReject = () => {
    console.log(select);
    refuseShare({
      id: select.id,
    })
      .then(() => {
        message.success("操作成功");
        setRefresh(true);
        setVisibleReject(false);
      })
      .catch(() => {
        message.error("操作失败");
        setVisibleReject(false);
      });
  };

  const handleCancelReject = () => {
    setVisibleReject(false);
  };
  return (
    <>
      <Search
        placeholder="按物品名查找"
        onSearch={onSearch}
        enterButton
        style={{ width: 304, marginBottom: 20 }}
      />
      <div style={{ marginBottom: 10 }}>
        <Radio.Group
          onChange={onChange}
          value={value}
          defaultValue="approveing"
          buttonStyle="solid"
        >
          <Radio.Button value="approveing">审核中</Radio.Button>
          <Radio.Button value="successed">已通过</Radio.Button>
          <Radio.Button value="failed">已拒绝</Radio.Button>
        </Radio.Group>
      </div>
      <Table dataSource={dataSource} columns={columns} />;
      <Modal
        title="提醒"
        visible={visibleApprove}
        onOk={handleOkApprove}
        onCancel={handleCancelApprove}
        okText="确认"
        cancelText="取消"
      >
        <p>确认共享此物资吗？</p>
      </Modal>
      <Modal
        title="驳回申请"
        visible={visibleReject}
        onOk={handleOkReject}
        okText="确认"
        cancelText="取消"
        onCancel={handleCancelReject}
      >
        <p>确认拒绝此申请吗？</p>
      </Modal>
    </>
  );
}

export default index;
