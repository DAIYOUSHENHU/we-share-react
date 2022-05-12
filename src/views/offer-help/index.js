import { useState, useEffect } from "react";
import {
  Form,
  Drawer,
  Button,
  Space,
  Table,
  Input,
  Select,
  message,
} from "antd";
const { Option } = Select;
import {} from "@ant-design/icons";
const { Search } = Input;
import { getAskhelp } from "@/api/askhelp";
import { getUserInfo } from "@/utils/auth";
import { getOrganApproved } from "@/api/organ";
import { addGood } from "@/api/good";
export default function index() {
  const [visible, setVisible] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [organs, setOrgans] = useState([]);
  // const [organs, setOrgans] = useState();

  useEffect(() => {
    getAskhelp({}).then((res) => {
      let askhelp = JSON.parse(res.data);
      for (let i = 0; i < askhelp.length; i++) {
        askhelp[i].key = String(i + 1);
      }
      setDataSource(askhelp);
    });
    getOrganApproved({}).then((res) => {
      console.log(res);
      let getOrgans = JSON.parse(res.data);
      for (let i = 0; i < getOrgans.length; i++) {
        getOrgans[i].key = String(i + 1);
        getOrgans[i].value = getOrgans[i].id;
        getOrgans[i].text = getOrgans[i].organname;
      }
      console.log(getOrgans);
      setOrgans(getOrgans);
    });
  }, []);
  const [form] = Form.useForm();
  let userInfo = getUserInfo();
  // 转换成json对象
  userInfo = JSON.parse(userInfo);
  console.log(userInfo);
  console.log(organs);
  const options = organs.map((d) => <Option key={d.value}>{d.text}</Option>);
  // const dataSource = [
  //   {
  //     key: "1",
  //     name: "书",
  //     desc: "科幻书籍",
  //     phone: "18018018010",
  //     address: "川师成龙校区",
  //   },
  //   {
  //     key: "2",
  //     name: "伞",
  //     desc: "一把伞",
  //     phone: "18018018010",
  //     address: "川师成龙",
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
      title: "联系电话",
      dataIndex: "userphone",
      key: "userphone",
    },
    {
      title: "地址",
      dataIndex: "usersddress",
      key: "usersddress",
    },
  ];
  const onSearch = (value) => console.log(value);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onFinish = () => {
    form
      .validateFields()
      .then(() => {
        let good = form.getFieldsValue();
        console.log(good);
        addGood({
          userid: userInfo.id,
          ...good,
          organid: Number(good.organid)
        })
          .then((res) => {
            if (res.msg === "ok") {
              message.success("提交成功");
            } else {
              message.info(res.message);
            }
          })
          .catch(() => {
            message.error("提交失败");
          });
        setVisible(false);
      })
      .catch((errorInfo) => {
        console.log("Failed:", errorInfo);
      });
  };

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onSearchOrgan(val) {
    console.log("search:", val);
  }

  return (
    <div>
      <Button onClick={showDrawer}>提供物资</Button>
      <Search
        placeholder="按物品名查找"
        onSearch={onSearch}
        enterButton
        style={{ width: 304, marginBottom: 20, float: "right" }}
      />
      <Table dataSource={dataSource} columns={columns} scroll={{ y: 450 }} />;
      <Drawer
        title="提供物资"
        placement="right"
        width={500}
        onClose={onClose}
        visible={visible}
        maskClosable={false}
        extra={
          <Space>
            <Button onClick={onClose}>关闭</Button>
            <Button type="primary" onClick={onFinish}>
              确认
            </Button>
          </Space>
        }
      >
        <Form
          form={form}
          name="offerHelpForm"
          onFinish={onFinish}
          preserve={false}
        >
          <Form.Item
            name="goodname"
            label="物资名"
            rules={[
              {
                required: true,
                message: "请输入请求物资!",
              },
            ]}
          >
            <Input type="text" placeholder="请输入物资名" />
          </Form.Item>
          <Form.Item name="desc" label="描述">
            <Input type="text" placeholder="请填写说明" />
          </Form.Item>
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
          <Form.Item
            name="organid"
            label="托管组织"
            rules={[
              {
                required: true,
                message: "请选择托管组织",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="请选择物资托管组织"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearchOrgan}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {options}
            </Select>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
