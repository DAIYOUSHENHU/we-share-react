import { useState, useEffect } from "react";
import { Row, Col, Divider, Statistic } from "antd";

import { sysInfo } from "@/api/login";

function index() {
  const [user, setUser] = useState(0);
  const [organ, setOrgan] = useState(0);
  const [good, setGood] = useState(0);
  const [share, setShare] = useState(0);

  useEffect(() => {
    sysInfo().then((res) => {
      let date = JSON.parse(res.data);
      setUser(date.usertotal);
      setOrgan(date.organtotal);
      setGood(date.goodtotal);
      setShare(date.sharetotal);
    });
  }, []);

  return (
    <>
      <Row>
        <Col span={24}>
          <h2>系统信息</h2>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Statistic title="已有用户数" value={user} />
        </Col>
        <Col span={12}>
          <Statistic title="已有组织数" value={organ} />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Statistic title="已有物资总数" value={good} />
        </Col>
        <Col span={12}>
          <Statistic title="共享次数" value={share} />
        </Col>
      </Row>
      <Divider />
      {/* <Row>
        <Col span={12}>
          <Statistic
            title="系统已运行"
            value={"1 天 23 时 58 分 43 秒"}
            valueStyle={{ color: "#3f8600" }}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="出现错误"
            value={0}
            valueStyle={{ color: "#cf1322" }}
          />
        </Col>
      </Row> */}
    </>
  );
}

export default index;
