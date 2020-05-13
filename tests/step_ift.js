var util = require('../util/CommUtil.js')

step({"初始化场景参数","初始化案例参数"}), async () => {
    console.info("初始化场景参数")
    let uuid = util.guid()
    gauge.dataStore.scenarioStore.put("case_id", uuid)
});

step("保存场景结果", async () => {
    console.info("保存案例参数")
});

step("构建交易 <tradeName>", async (tradeName) => {

    let case_id  = gauge.dataStore.scenarioStore.get("case_id")
    console.info("构建交易 "+ tradeName)
    console.info("案例id" + case_id)
});

step("组织报文 <tradeName>", async (tradeName) => {
    console.info("组织报文 "+ tradeName)
});

step("发送 <tradeName>", async (tradeName) => {
    console.info("发送 "+ tradeName)
});

step("断言 <tradeName>", async (tradeName) => {
    gauge.dataStore.scenarioStore.get("");
    console.info("断言 "+ tradeName)
});