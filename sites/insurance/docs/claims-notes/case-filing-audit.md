# Case Filing To Audit

这一页整理扫描笔记第 15-19 页：出险后如何从报案进入立案，再进入审核、照会、复核和理算。

<div class="source-grid">
  <div class="source-image"><p>Source: scanned note page 15</p><img src="https://pic.60004000.xyz/2026/06/5d55c6fbbdbc112f6e901c4f7457b373.png" alt="Scanned note page 15"></div>
  <div class="source-image"><p>Source: scanned note page 16</p><img src="https://pic.60004000.xyz/2026/06/342076eddbfc6c35c83a5d3a0917cece.png" alt="Scanned note page 16"></div>
  <div class="source-image"><p>Source: scanned note page 17</p><img src="https://pic.60004000.xyz/2026/06/7f924372fc35b1f1ecb0897a9dbc0f6f.png" alt="Scanned note page 17"></div>
  <div class="source-image"><p>Source: scanned note page 18</p><img src="https://pic.60004000.xyz/2026/06/c351593a8934b5db70faac3fc3809480.png" alt="Scanned note page 18"></div>
  <div class="source-image"><p>Source: scanned note page 19</p><img src="https://pic.60004000.xyz/2026/06/b99691d1360f05804792200c275e9ffc.png" alt="Scanned note page 19"></div>
</div>

## From Policy Service To Claim

```text
回执确认
  -> 保单生效并进入保全服务
  -> 客户发生保险事故
  -> 报案或提交理赔申请
  -> 材料上传或医院端数据传输
  -> 立案
  -> 审核
  -> 理算
  -> 复核/照会/合议
  -> 赔付、拒付或其他处理
```

<div class="source-grid">
  <div class="source-image"><p>Source: scanned note page 15</p><img src="https://pic.60004000.xyz/2026/06/5d55c6fbbdbc112f6e901c4f7457b373.png" alt="Scanned note page 15"></div>
  <div class="source-image"><p>Source: scanned note page 16</p><img src="https://pic.60004000.xyz/2026/06/342076eddbfc6c35c83a5d3a0917cece.png" alt="Scanned note page 16"></div>
  <div class="source-image"><p>Source: scanned note page 17</p><img src="https://pic.60004000.xyz/2026/06/7f924372fc35b1f1ecb0897a9dbc0f6f.png" alt="Scanned note page 17"></div>
</div>

## What Is Case Filing?

立案不是最终赔付结论，而是把一个“客户说自己出险了”的事实变成系统里可处理的案件。

立案时要确认四组信息：

| Group | What To Confirm | Examples |
|---|---|---|
| Person | 人是谁 | 投保人、被保险人、申请人、受益人、代理人或委托人。 |
| Policy | 保单是什么状态 | 保单号、险种、主附险、有效状态、缴费状态、等待期、除外。 |
| Event | 发生了什么 | 疾病、意外、住院、手术、门诊、身故、全残。 |
| Evidence | 材料够不够 | 申请书、身份证件、病历、诊断证明、发票、费用清单、医保结算单。 |

<div class="source-image"><p>Source: scanned note page 17</p><img src="https://pic.60004000.xyz/2026/06/7f924372fc35b1f1ecb0897a9dbc0f6f.png" alt="Scanned note page 17"></div>

## Claim Entry Sources

| Source | Typical Situation | Risk Point |
|---|---|---|
| Customer self-service | 客户在 App/公众号上传材料。 | 影像不清、材料缺失、金额和病历不对应。 |
| Agent assisted | 代理人协助客户报案或提交。 | 要确认客户真实授权和材料原件来源。 |
| Customer service | 客户拨打客服电话报案。 | 报案信息可能不完整，需要后续补充。 |
| 健保通 hospital flow | 合作医院住院，医院端或系统传输数据。 | 要确认授权、医院范围、直赔/快赔模式和结算数据。 |
| Branch counter | 客户到柜面提交材料。 | 要核验原件、复印件和签名。 |

<div class="source-grid">
  <div class="source-image"><p>Source: scanned note page 17</p><img src="https://pic.60004000.xyz/2026/06/7f924372fc35b1f1ecb0897a9dbc0f6f.png" alt="Scanned note page 17"></div>
  <div class="source-image"><p>Source: scanned note page 18</p><img src="https://pic.60004000.xyz/2026/06/c351593a8934b5db70faac3fc3809480.png" alt="Scanned note page 18"></div>
</div>

## Filing Decision

| Result | 中文 | Meaning |
|---|---|---|
| Accept filing | 正常立案 | 基本信息和最低材料满足进入审核条件。 |
| Request supplement | 补件 | 材料不足，要求客户或医院补充。 |
| Merge case | 合并案件 | 同一事故、同一住院或同一治疗周期可能需要合并处理。 |
| Split case | 拆分案件 | 不同责任、不同事故或不同保单需要分别处理。 |
| Reject filing / no claim setup | 不予立案或不进入正式理赔 | 明显无合同、无事故或不符合申请基础条件。 |

<div class="source-image"><p>Source: scanned note page 17</p><img src="https://pic.60004000.xyz/2026/06/7f924372fc35b1f1ecb0897a9dbc0f6f.png" alt="Scanned note page 17"></div>

## Audit Logic

审核阶段可以用“四看一算”：

| Step | Question | Typical Evidence |
|---|---|---|
| 看合同 | 保单是否有效？责任是否存在？ | 保单、条款、批单、核保结论、保全记录。 |
| 看时间 | 出险是否在保险期间、等待期后？ | 生效日、出险日、入院日、诊断日、签收日。 |
| 看事故 | 事故原因是否属于保险责任？ | 病历、诊断证明、检查报告、事故证明。 |
| 看材料 | 材料是否真实、完整、一致？ | 发票、费用清单、医保结算单、病案首页、入出院记录。 |
| 算金额 | 应赔多少？ | 免赔额、比例、限额、已报销金额、剩余额度。 |

<div class="source-grid">
  <div class="source-image"><p>Source: scanned note page 16</p><img src="https://pic.60004000.xyz/2026/06/342076eddbfc6c35c83a5d3a0917cece.png" alt="Scanned note page 16"></div>
  <div class="source-image"><p>Source: scanned note page 19</p><img src="https://pic.60004000.xyz/2026/06/b99691d1360f05804792200c275e9ffc.png" alt="Scanned note page 19"></div>
</div>

## When To Send An Inquiry

照会通常出现在这些情况：

- 材料缺失或影像不清。
- 诊断证明和病历描述不一致。
- 费用清单与发票金额不一致。
- 出险时间可能落在等待期内。
- 住院原因和既往病史有关。
- 医保结算单缺失，无法判断已报销金额。
- 身份、受益人、银行卡或委托授权不清楚。
- 医疗行为合理性存疑，例如挂床、康复疗养、过度检查。

<div class="source-image"><p>Source: scanned note page 19</p><img src="https://pic.60004000.xyz/2026/06/b99691d1360f05804792200c275e9ffc.png" alt="Scanned note page 19"></div>

## When To Recheck Or Escalate

| Trigger | Why It Matters |
|---|---|
| High claim amount | 金额高，赔付风险和财务影响更大。 |
| Possible exclusion | 可能涉及责任免除，需要更严格证据。 |
| Possible non-disclosure | 投保时健康告知可能不真实。 |
| Complex medical condition | 疾病定义、分期、病理或治疗路径复杂。 |
| Fraud signal | 票据、病历、住院行为或费用结构异常。 |
| Complaint risk | 客户预期强烈或解释难度高。 |
| System mismatch | 平台数据与人工材料不一致。 |

<div class="source-grid">
  <div class="source-image"><p>Source: scanned note page 18</p><img src="https://pic.60004000.xyz/2026/06/c351593a8934b5db70faac3fc3809480.png" alt="Scanned note page 18"></div>
  <div class="source-image"><p>Source: scanned note page 19</p><img src="https://pic.60004000.xyz/2026/06/b99691d1360f05804792200c275e9ffc.png" alt="Scanned note page 19"></div>
</div>

## Claim Outcomes

| Outcome | 中文 | Explanation |
|---|---|---|
| Full payment | 全额赔付 | 在责任范围内，且未受免赔额、比例、限额影响或影响后仍足额。 |
| Partial payment | 部分赔付 | 受免赔额、比例、限额、已报销金额或部分费用不合理影响。 |
| Denial | 拒付 | 不属于保险责任，或触发免责、等待期、合同无效等。 |
| Pending | 暂缓 | 等待补件、调查、医学意见、复核或客户回应。 |
| Agreement settlement | 协议处理 | 对复杂争议案件，经授权和流程形成协商结果。 |

<div class="source-grid">
  <div class="source-image"><p>Source: scanned note page 16</p><img src="https://pic.60004000.xyz/2026/06/342076eddbfc6c35c83a5d3a0917cece.png" alt="Scanned note page 16"></div>
  <div class="source-image"><p>Source: scanned note page 18</p><img src="https://pic.60004000.xyz/2026/06/c351593a8934b5db70faac3fc3809480.png" alt="Scanned note page 18"></div>
</div>
