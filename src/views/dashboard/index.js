import { useEffect } from "react";
import { getRole } from "@/utils/auth";
import { Divider } from "antd";

export default function index() {
  useEffect(() => {});
  let role = getRole();
  return (
    <div>
      <h2>欢迎来到 We Share</h2>
      <h1>
        本系统为物资共享设计，用户可以通过本系统快速查找自己需要的物资并联系使用；也能查看到他人的需求为他人提供帮助，用户功能包括：
      </h1>
      <ou>
        <li>共享物资</li>
        <h1 style={{ marginLeft: 20 }}>查看系统中正在被共享的物资</h1>
        <li>寻求帮助</li>
        <h1 style={{ marginLeft: 20 }}>
          点击页面中”请求物资“按钮并填写相关信息即可发布需要的物品信息，可被他人查看；也可以查看正在被共享的物资
        </h1>
        <li>提供帮助</li>
        <h1 style={{ marginLeft: 20 }}>
          点击页面中”提供物资“按钮并填写相关信息即可发布提供的物品信息，可被他人查看；也可以查看正在被需要的物资
        </h1>
        <li>个人中心</li>
        <h1 style={{ marginLeft: 20 }}>
          用户的个人信息；也可以在此申请成为组织
        </h1>
      </ou>

      {role == 1 && (
        <>
          <Divider />
          <h1>组织可对物资进行管理，功能包括：</h1>
          <ou>
            <li>物资管理</li>
            <h1 style={{ marginLeft: 20 }}>
              用户的个人信息；也可以在此申请成为组织
            </h1>
          </ou>
        </>
      )}

      {role == 2 && (
        <>
          <Divider />
          <h1>管理员可对系统进行管理，功能包括：</h1>
          <ou>
            <li>用户管理</li>
            <h1 style={{ marginLeft: 20 }}>
              查看用户的个人信息；也可以在此修改用户权限
            </h1>
            <li>组织管理</li>
            <h1 style={{ marginLeft: 20 }}>
              查看组织的个人信息；也可以在此修改组织权限
            </h1>
            <li>日志管理</li>
            <h1 style={{ marginLeft: 20 }}>查看系统日志信息</h1>
            <li>系统信息</li>
            <h1 style={{ marginLeft: 20 }}>查看系统信息</h1>
          </ou>
        </>
      )}
    </div>
  );
}
