# 理赔平台与健保通

这一页整理扫描笔记第 16、18、20 页：理赔业务平台、自助上传、健保通平台，以及“预、立、扣费、理算”等关键词。

<div class="source-grid">
  <div class="source-image"><p>原始手写笔记第 16 页</p><img src="https://pic.60004000.xyz/2026/06/342076eddbfc6c35c83a5d3a0917cece.png" alt="原始手写笔记第 16 页"></div>
  <div class="source-image"><p>原始手写笔记第 18 页</p><img src="https://pic.60004000.xyz/2026/06/c351593a8934b5db70faac3fc3809480.png" alt="原始手写笔记第 18 页"></div>
  <div class="source-image"><p>原始手写笔记第 20 页</p><img src="https://pic.60004000.xyz/2026/06/edda27ae721421936b067c5e9d962768.png" alt="原始手写笔记第 20 页"></div>
</div>

## 两类理赔入口

| 模式 | 中文 | 怎么运作 | 我关注什么 |
|---|---|---|---|
| 客户自助上传 | 线上理赔 | 客户通过 App、公众号或线上入口提交理赔申请和材料。 | 材料完整性、影像清晰度、身份和保单匹配。 |
| 健保通 | 医院联动理赔 | 医院与保险端协作，住院客户可在医院端完成直赔或快赔。 | 授权、报案、医院范围、预授权、结算数据、理算结果。 |

<div class="source-grid">
  <div class="source-image"><p>原始手写笔记第 16 页</p><img src="https://pic.60004000.xyz/2026/06/342076eddbfc6c35c83a5d3a0917cece.png" alt="原始手写笔记第 16 页"></div>
  <div class="source-image"><p>原始手写笔记第 18 页</p><img src="https://pic.60004000.xyz/2026/06/c351593a8934b5db70faac3fc3809480.png" alt="原始手写笔记第 18 页"></div>
</div>

## 健保通是什么

根据泰康人寿官网，“健保通医院”中：

- **直赔医院**：客户出院时在医院窗口直接进行费用结算。
- **快赔医院**：客户出院后，泰康支付赔款到客户指定账户。
- 客户入院后需要及时报案，否则可能影响健保通使用。
- 住院免押金场景下，符合条件的客户可向泰康提出申请，审核同意后进行预授权，合作医院在预授权范围内免收住院押金。

泰康相关条款中也将“健保通医院直付”定义为：被保险人在泰康健保通医院住院后，及时报案，出院时即可完成一站式结算的理赔服务模式。

行业研究资料进一步解释，健保通是一种面向医疗险参保人的一站式结算解决方案，通过与医院直连，在住院期间收集授权和理赔资料，出院时在医院窗口完成商保理赔结算，后续由保险公司与医院按约定结算垫付赔款。

官方来源：

- [泰康人寿健保通医院查询](https://www.taikanglife.com/service/searchservice/jbthospital/jbthospital.html)
- [《泰康健保通医院住院津贴医疗保险》条款](https://www.taikanglife.com/uploader/pubProductFile/2023/06/20/6b1c60ca-6f1b-48bc-bbf4-f66fcdf7ca97.pdf)
- [中再寿险：医疗险理赔改革创新的实践与思考](https://www.chinarelife.cn/chinarelife/zyyj/cxyj/2023110310350030037/index.html)

<div class="source-grid">
  <div class="source-image"><p>原始手写笔记第 18 页</p><img src="https://pic.60004000.xyz/2026/06/c351593a8934b5db70faac3fc3809480.png" alt="原始手写笔记第 18 页"></div>
  <div class="source-image"><p>原始手写笔记第 20 页</p><img src="https://pic.60004000.xyz/2026/06/edda27ae721421936b067c5e9d962768.png" alt="原始手写笔记第 20 页"></div>
</div>

## 直赔和快赔

| 项目 | 直赔 | 快赔 |
|---|---|---|
| 客户体验 | 出院窗口直接结算，客户只付剩余自付部分。 | 出院后较快获得赔款，赔款到客户指定账户。 |
| 系统依赖 | 医院和保险端对接程度高。 | 对接要求相对低，可用医疗数据提升审核效率。 |
| 风控重点 | 风险更前置，需要预授权、规则和复核机制。 | 更接近传统理赔，仍可人工审核。 |
| 我的工作重点 | 授权、预审、额度、异常拦截和医院结算数据。 | 材料完整、费用清单、医保结算和理算准确。 |

<div class="source-image"><p>原始手写笔记第 20 页</p><img src="https://pic.60004000.xyz/2026/06/edda27ae721421936b067c5e9d962768.png" alt="原始手写笔记第 20 页"></div>

## 笔记里的平台关键词

| 关键词 | 中文 | 实际含义 |
|---|---|---|
| Pre-check | 预审 | 案件进入正式处理前，先看基础条件是否满足。 |
| Pre-authorization | 预授权 | 住院免押金或直付前，公司对客户资格、保单、医院、额度做初步确认。 |
| Case filing | 立案 | 创建正式理赔案件，绑定客户、保单、事故和材料。 |
| Deduction | 扣费 | 理算时扣除免赔额、已报销金额、欠交保费、保单贷款等。 |
| Adjustment | 理算 | 根据条款公式计算应赔金额。 |
| Review | 审核 | 判断责任、材料、费用和异常点。 |
| Recheck | 复核 | 对审核结论进行再次确认，常见于高额、复杂或异常案件。 |
| Consultation / inquiry | 照会 | 要求客户、医院或内部岗位补充说明或材料。 |
| Settlement | 结案/赔付 | 作出赔付、拒付或其他处理结论。 |

<div class="source-grid">
  <div class="source-image"><p>原始手写笔记第 16 页</p><img src="https://pic.60004000.xyz/2026/06/342076eddbfc6c35c83a5d3a0917cece.png" alt="原始手写笔记第 16 页"></div>
  <div class="source-image"><p>原始手写笔记第 19 页</p><img src="https://pic.60004000.xyz/2026/06/b99691d1360f05804792200c275e9ffc.png" alt="原始手写笔记第 19 页"></div>
</div>

## 健保通典型流程

```text
客户入住合作医院
  -> 入院后及时报案
  -> 客户授权信息采集
  -> 系统识别客户和保单
  -> 预授权或预审
  -> 住院期间收集诊疗和费用信息
  -> 出院窗口进行直赔或触发快赔
  -> 系统理算
  -> 客户支付剩余自付金额或等待赔款到账
  -> 公司与医院对账结算
```

<div class="source-grid">
  <div class="source-image"><p>原始手写笔记第 18 页</p><img src="https://pic.60004000.xyz/2026/06/c351593a8934b5db70faac3fc3809480.png" alt="原始手写笔记第 18 页"></div>
  <div class="source-image"><p>原始手写笔记第 20 页</p><img src="https://pic.60004000.xyz/2026/06/edda27ae721421936b067c5e9d962768.png" alt="原始手写笔记第 20 页"></div>
</div>

## 核赔检查点

| 检查点 | 我问什么 |
|---|---|
| Hospital eligibility | 是否为泰康健保通合作医院？当前名单是否有效？ |
| Claim mode | 本案是直赔、快赔，还是普通线上理赔？ |
| Timely notification | 客户是否按要求及时报案？ |
| Authorization | 客户是否授权调取医疗和结算信息？ |
| Policy status | 保单是否有效，是否过等待期，是否有除外或特别约定？ |
| Medical necessity | 治疗是否与诊断匹配，是否合理必要？ |
| Billing data | 医保结算、费用清单、发票和医院上传数据是否一致？ |
| Deduction | 是否扣除免赔额、医保/公费医疗/其他商保已赔、欠费或贷款？ |
| Risk flags | 是否存在挂床、过度医疗、费用异常、既往症、重复理赔？ |

<div class="source-grid">
  <div class="source-image"><p>原始手写笔记第 16 页</p><img src="https://pic.60004000.xyz/2026/06/342076eddbfc6c35c83a5d3a0917cece.png" alt="原始手写笔记第 16 页"></div>
  <div class="source-image"><p>原始手写笔记第 18 页</p><img src="https://pic.60004000.xyz/2026/06/c351593a8934b5db70faac3fc3809480.png" alt="原始手写笔记第 18 页"></div>
  <div class="source-image"><p>原始手写笔记第 20 页</p><img src="https://pic.60004000.xyz/2026/06/edda27ae721421936b067c5e9d962768.png" alt="原始手写笔记第 20 页"></div>
</div>

## 为什么它对核赔重要

健保通不是单纯“多一个报案入口”，它改变了理赔节奏：

- 传统理赔是出院后客户提交材料，再由公司审核。
- 健保通把部分理赔动作前移到住院期间和出院窗口。
- 直赔提升客户体验，但对系统规则、预授权、实时数据和风控要求更高。
- 快赔在效率和风险控制之间更平衡，仍保留较多人工审核空间。

## 客户、公司、我的视角

| 视角 | 怎么理解健保通 |
|---|---|
| 客户 | 少垫钱、少跑流程，出院时或出院后更快解决赔款问题。 |
| 公司 | 把服务体验做强，但必须用医院名单、授权、预授权、系统规则和复核控制风险。 |
| 我 | 不能因为是健保通就默认能赔，仍然要回到条款、保单状态、医院范围、费用明细和结算数据。 |

<div class="source-image"><p>原始手写笔记第 20 页</p><img src="https://pic.60004000.xyz/2026/06/edda27ae721421936b067c5e9d962768.png" alt="原始手写笔记第 20 页"></div>
