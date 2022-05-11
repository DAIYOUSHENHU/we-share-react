// 入参 fmt-格式 date-日期
export default function dateFormat(date) {
  return date.slice(0, 10) + " " + date.slice(11, 19);
}
