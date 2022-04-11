// import { useNavigate } from 'react-router-dom'

// export default function Login() {
//   const navigate = useNavigate();
//   const goLayoutHandler = () => {
//     navigate('/layout')
// }
//   return (
//     <>
//     <div>Login</div>
//     <p>这是登录页!  Login</p>
//     <button onClick={goLayoutHandler}>登录</button>
//     </>

//   )
// }

import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox, Card, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { setToken } from "@/utils/auth";
import { loginApi } from "@/api/login";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    if (values) {
      loginApi({
        userName: values.username,
        password: values.password,
      })
        .then((res) => {
          if (res.code === "success") {
            message.success("登录成功");
            setToken(res.token);
            navigate("/admin");
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
    <Card title="用户登录" className="login-form">
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
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
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
  );
}
