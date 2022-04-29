import { Row, Col, Divider, Statistic } from "antd";

function index() {
  const sysinfo = {
    userNum: 12345,
    goodNum: 321654,
  };

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
          <Statistic title="已有用户" value={sysinfo.userNum} />
        </Col>
        <Col span={12}>
          <Statistic title="已有物资" value={sysinfo.goodNum} precision={2} />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Statistic title="系统已运行" value={sysinfo.userNum} />
        </Col>
      </Row>
    </>
  );
}

export default index;
