import { useState, useEffect } from "react";
import {
  Button,
  Tooltip,
  Divider,
  Modal,
  Col,
  Row,
  Table,
  Form,
  Input,
  message,
} from "antd";
import { HolderOutlined } from "@ant-design/icons";
import "./index.css";
import { getUserInfo } from "@/utils/auth";
import dateFormat from "@/utils/format";
import { toOrgan } from "@/api/organ";
import { getLend, getBorrow } from "@/api/good";

function index() {
  const [visible, setVisible] = useState(false);
  const [dataSourceLend, setDataSourceLend] = useState([]);
  const [dataSourceBorrow, setDataSourceBorrow] = useState([]);
  useEffect(() => {
    form.resetFields();
    let userInfo = getUserInfo();
    // 转换成json对象
    userInfo = JSON.parse(userInfo);
    getLend({
      id: userInfo.id,
    }).then((res) => {
      let goods = JSON.parse(res.data);
      for (let i = 0; i < goods.length; i++) {
        goods[i].key = String(i + 1);
        goods[i].CreateTime = dateFormat(goods[i].CreateTime);
      }
      console.log(goods);
      setDataSourceLend(goods);
    });
    getBorrow({
      id: userInfo.id,
    }).then((res) => {
      let goods = JSON.parse(res.data);
      for (let i = 0; i < goods.length; i++) {
        goods[i].key = String(i + 1);
        goods[i].CreateTime = dateFormat(goods[i].CreateTime);
      }
      console.log(goods);
      setDataSourceBorrow(goods);
    });
  }, []);
  const [form] = Form.useForm();
  let roleType = {
    0: "普通用户（非组织）",
    1: "组织",
    2: "管理员",
  };
  let userInfo = getUserInfo();
  // 转换成json对象
  userInfo = JSON.parse(userInfo);
  const role = userInfo.role;
  const userinfo = {
    name: userInfo.username,
    role: roleType[userInfo.role],
    create_time: dateFormat(userInfo.CreateTime),
  };
  // const dataSource = [
  //   {
  //     key: "1",
  //     name: "充电宝",
  //     desc: "一个充电宝",
  //     organ_name: "四川师范大学成龙校区东苑1栋",
  //     organ_address: "四川师范大学成龙校区东苑1栋",
  //     organ_phone: "18018018010",
  //     create_time: "2022-04-15 21:04:01",
  //   },
  // ];
  const columnslend = [
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
      title: "借出时间",
      dataIndex: "CreateTime",
      key: "CreateTime",
    },
  ];
  const columnsborrow = [
    {
      title: "物资名",
      dataIndex: "goodname",
      key: "goodname",
    },
    {
      title: "备注",
      dataIndex: "note",
      key: "note",
    },
    {
      title: "借用时间",
      dataIndex: "CreateTime",
      key: "CreateTime",
    },
  ];

  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handleOk = () => {
    console.log(form.getFieldsValue());
    form
      .validateFields()
      .then((values) => {
        console.log("Success:", values);
        let organInfo = form.getFieldsValue();
        console.log(organInfo);
        toOrgan({
          userid: userInfo.id,
          ...organInfo,
        })
          .then((res) => {
            if (res.msg === "ok") {
              message.success("申请成功,待管理员审核");
            } else {
              message.info(res.message);
            }
          })
          .catch(() => {
            message.error("申请失败");
          });
        setVisible(false);
      })
      .catch((errorInfo) => {
        console.log("Failed:", errorInfo);
      });
  };
  return (
    <div className="person">
      <Row gutter={16}>
        <Col span={12}>
          <h2>个人信息</h2>
        </Col>
        {!role && (
          <Col span={12}>
            <div style={{ float: "right" }}>
              <Button type="primary" onClick={showModal}>
                成为组织
              </Button>
              <Tooltip title="成为组织后能够管理本组织的物资">
                <HolderOutlined style={{ marginLeft: 5 }} />
              </Tooltip>
            </div>
          </Col>
        )}
      </Row>
      <p>用户名：{userinfo.name}</p>
      <p>角色：{userinfo.role}</p>
      <p>加入系统时间：{userinfo.create_time}</p>
      <Modal
        title="成为组织"
        visible={visible}
        onOk={handleOk}
        okText="确认"
        onCancel={handleCancel}
        cancelText="取消"
        maskClosable={false}
      >
        <Form
          form={form}
          name="offerHelpForm"
          autoComplete="off"
          preserve={false}
        >
          <Form.Item
            name="organname"
            label="组织名"
            rules={[
              {
                required: true,
                message: "请输入组织名!",
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            name="organaddress"
            label="组织地址"
            rules={[
              {
                required: true,
                message: "请输入组织地址!",
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            name="organphone"
            label="联系电话"
            rules={[
              {
                required: true,
                message: "请输入组织联系电话!",
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>

          <Form.Item name="desc" label="备注">
            <Input type="text" placeholder="组织说明" />
          </Form.Item>
        </Form>
      </Modal>
      <Divider />
      <h2>我借出的共享物资</h2>
      <Table
        dataSource={dataSourceLend}
        columns={columnslend}
        scroll={{ y: 350 }}
        style={{ marginTop: "10px" }}
      />

      <Divider />
      <h2>我借用的共享物资</h2>
      <Table
        dataSource={dataSourceBorrow}
        columns={columnsborrow}
        scroll={{ y: 350 }}
        style={{ marginTop: "10px" }}
      />
    </div>
  );
}

export default index;
