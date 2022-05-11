import { Row, Col, Divider, Statistic } from "antd";

function index() {
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
          <Statistic title="已有用户数" value={4} />
        </Col>
        <Col span={12}>
          <Statistic title="已有组织数" value={1} />
        </Col>
      </Row>
      <Divider />
      <Row>
      <Col span={12}>
          <Statistic title="已有物资总数" value={6} />
        </Col>
        <Col span={12}>
          <Statistic title="共享次数" value={2} />
        </Col>
      </Row>
      <Divider />
      <Row>
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
      </Row>
    </>
  );
}

export default index;
