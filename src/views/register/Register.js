import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { register } from "@/api/register";
import "./Register.css";
import bgImage from "@/assets/images/bg.gif";

export default function Register() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log(values);
    if (values) {
      register({
        username: values.username,
        pwd: values.password,
      })
        .then((res) => {
          if (res.msg === "ok") {
            message.success("注册成功");
            navigate("/login");
          } else {
            message.info("注册失败");
          }
        })
        .catch(() => {
          message.error("注册失败");
        });
    }
  };

  const doCheck = (rule, val, callback) => {
    if (!val) {
      callback("请再次输入密码");
    }
    const value = form.getFieldsValue("passwordCheck");
    let validateResult = val === value.password;
    console.log(validateResult);
    if (!validateResult) {
      callback("两次密码不一致！");
    }
    callback();
  };

  return (
    <div className="login" style={{ backgroundImage: `url(${bgImage})` }}>
      <Card title="用户注册" className="login-form">
        <Form
          form={form}
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "请输入用户名!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item
            name="passwordCheck"
            rules={[
              {
                validator: doCheck,
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="请再次输入密码"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              注册
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
