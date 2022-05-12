import { useState, useEffect } from "react";
import { Table, Space, Button, Modal, Input, Radio, message } from "antd";
const { Search } = Input;

import { getOrganApproveing, acceptOrgan, refuseOrgan } from "@/api/organ";
function index() {
  const [value, setValue] = useState("approveing");
  const [visibleApprove, setVisibleApprove] = useState(false);
  const [visibleReject, setVisibleReject] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [select, setSelect] = useState({});
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getOrganApproveing({
      organname: "",
    }).then((res) => {
      let organ = JSON.parse(res.data);
      for (let i = 0; i < organ.length; i++) {
        organ[i].key = String(i + 1);
      }
      setDataSource(organ);
      console.log(organ);
      refresh && setTimeout(() => setRefresh(false));
    });
  }, [refresh]);

  // getOrganApproveing({
  //   organname: ""
  // }).then((res) => {
  //   console.log(res);
  //   organ = JSON.parse(res.data)
  //   console.log(organ);
  // });

  // const dataSource = organ
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
      title: "组织名",
      dataIndex: "organname",
      key: "organname",
    },
    {
      title: "描述",
      dataIndex: "desc",
      key: "desc",
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
    setSelect(row)
    setVisibleApprove(true);
  };
  const handleOkApprove = () => {
    console.log(select)
    console.log(select.id)
    acceptOrgan({
      id: select.id,
      userid: select.userid,
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
    setSelect(row)
    setVisibleReject(true);
  };
  const handleOkReject = () => {
    console.log(select)
    console.log(select.id)
    refuseOrgan({
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
        placeholder="按组织名查找"
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
        <p>确认接收此组织吗？</p>
      </Modal>
      <Modal
        title="驳回申请"
        visible={visibleReject}
        onOk={handleOkReject}
        okText="确认"
        cancelText="取消"
        onCancel={handleCancelReject}
      >
        <p>确认拒绝此组织吗？</p>
      </Modal>
    </>
  );
}

export default index;
