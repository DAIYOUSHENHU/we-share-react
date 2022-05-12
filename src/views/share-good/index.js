import { useState, useEffect } from "react";
import { Table, Input, Space, Button, Modal, Form, message } from "antd";
const { Search } = Input;
import { getUserInfo } from "@/utils/auth";
import { getShareGood,addShareGood } from "@/api/good";

export default function index() {
  const [visibleApply, setVisibleApply] = useState(false);
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [select, setSelect] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    form.resetFields();
    getShareGood({}).then((res) => {
      let good = JSON.parse(res.data);
      for (let i = 0; i < good.length; i++) {
        good[i].key = String(i + 1);
      }
      setDataSource(good);
      console.log(good);
    });
    refresh && setTimeout(() => setRefresh(false));
  }, [refresh]);
  const [form] = Form.useForm();
  let userInfo = getUserInfo();
  // 转换成json对象
  userInfo = JSON.parse(userInfo);
  console.log(userInfo);
  // const dataSource = [
  //   {
  //     key: "1",
  //     name: "风扇",
  //     desc: "便携小风扇",
  //     organ_name: "四川师范大学成龙校区东苑1栋",
  //     organ_address: "四川师范大学成龙校区东苑1栋",
  //   },
  //   {
  //     key: "2",
  //     name: "饮用水",
  //     desc: "22年4月产的一箱农夫山泉矿泉水",
  //     organ_name: "四川师范大学成龙校区东苑1栋",
  //     organ_address: "四川师范大学成龙校区东苑1栋",
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
      render: (text, row) => (
        <Space size="middle">
          <Button type="primary" onClick={() => showModalApply(row)}>
            申请
          </Button>
          <Button onClick={() => showModalDetails(row)}>详情</Button>
        </Space>
      ),
    },
  ];
  const onSearch = (value) => console.log(value);

  const showModalApply = (row) => {
    setSelect(row);
    setVisibleApply(true);
  };
  const handleOkApply = () => {
    console.log(select);
    console.log(form.getFieldsValue());
    form
    .validateFields()
    .then((values) => {
      console.log("Success:", values);
      let shareInfo = form.getFieldsValue();
      console.log(shareInfo);
      addShareGood({
        userid: userInfo.id,
        username: userInfo.username,
        goodid: select.id,
        goodname: select.goodname,
        organid: select.organid,
        ...shareInfo
      }).then(() => {
        message.success("操作成功");
        setRefresh(true);
        setVisibleApply(false);
      })
      .catch(() => {
        message.error("操作失败");
        setVisibleApply(false);
      });
    })
    .catch((errorInfo) => {
      console.log("Failed:", errorInfo);
    });
  };

  const handleCancelApply = () => {
    setVisibleApply(false);
  };

  const showModalDetails = () => {
    setVisibleDetails(true);
  };
  const handleOkDetails = () => {
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
        onCancel={handleCancelApply}
        okText="确认"
        cancelText="取消"
        maskClosable={false}
      >
        <Form
          form={form}
          name="offerHelpForm"
          preserve={false}
        >
          <Form.Item
            name="userphone"
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
