import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { getToken, setToken, setRole } from "@/utils/auth";
import { login } from "@/api/login";
import "./Login.css";

import bgImage from "@/assets/images/bg.gif";

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    let token = getToken();
    if (token == "login") {
      navigate("/layout/dashboard");
    }
  });

  const onFinish = (values) => {
    if (values) {
      login({
        username: values.username,
        pwd: values.password,
      })
        .then((res) => {
          if (res.msg === "ok") {
            message.success("登录成功");
            setToken(res.token);
            setRole(res.role);
            navigate("/layout/dashboard");
          } else {
            message.info(res.message);
          }
        })
        .catch(() => {
          message.error("用户不存在");
        });
    }
  };

  const toRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login" style={{ backgroundImage: `url(${bgImage})` }}>
      <Card title="欢迎来到 We Share, 请登录" className="login-form">
        <Form
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

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
            <Button
              type="primary"
              className="login-form-regist"
              onClick={toRegister}
            >
              注册
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
