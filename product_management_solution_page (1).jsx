import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  ShieldCheck,
  BarChart3,
  Boxes,
  Workflow,
  FileSearch,
  Store,
  ArrowRight,
  CheckCircle2,
  Layers3,
  Gauge,
  Users,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const painPoints = [
  {
    icon: Layers3,
    title: "商品信息分散",
    desc: "商品基础信息、价格、库存、资质、图片与类目属性分散在不同系统，口径不一致，运营协同成本高。",
  },
  {
    icon: Workflow,
    title: "上新与变更效率低",
    desc: "新商品上线依赖人工表格流转，配置链路长、审批链路慢，导致供给接入和活动响应不及时。",
  },
  {
    icon: ShieldCheck,
    title: "审核标准不统一",
    desc: "商家资质、商品规则、展示规范和风控校验缺少统一机制，容易出现漏审、错审和重复审核。",
  },
  {
    icon: BarChart3,
    title: "缺乏经营反馈闭环",
    desc: "只能看到商品数量，无法看清什么商品好卖、什么信息影响转化、哪些供给该扶持或淘汰。",
  },
];

const modules = [
  {
    icon: Database,
    title: "统一商品底座",
    points: ["统一商品主数据", "标准类目 / 属性模型", "多业务共享同一商品对象"],
  },
  {
    icon: Boxes,
    title: "商品配置中心",
    points: ["模板化建品", "多品类字段扩展", "价格 / 库存 / 标签统一管理"],
  },
  {
    icon: FileSearch,
    title: "审核治理中心",
    points: ["基础审核", "规则校验", "资质校验与异常预警"],
  },
  {
    icon: Gauge,
    title: "供给经营诊断",
    points: ["供给覆盖度", "动销 / 转化表现", "问题商品识别与优化建议"],
  },
];

const valueCards = [
  {
    title: "提升接入效率",
    value: "标准化建品",
    desc: "通过统一模板、字段规则和流程配置，让新业务、新商家、新品类接入更快。",
  },
  {
    title: "提升管理质量",
    value: "规则化治理",
    desc: "让商品审核从人工经验变为系统规则，降低错误率，提升线上信息一致性。",
  },
  {
    title: "提升经营效果",
    value: "数据驱动选品",
    desc: "围绕曝光、点击、转化、动销表现形成商品经营闭环，指导选品与投放。",
  },
  {
    title: "支撑多业务扩张",
    value: "平台化复用",
    desc: "同一套商品能力支持不同业务线、不同商家模式和不同渠道页面快速复制。",
  },
];

const journey = [
  {
    step: "01",
    title: "统一基础信息",
    desc: "沉淀商品主数据、类目、属性、品牌、图片与规则，建立统一商品底座。",
  },
  {
    step: "02",
    title: "标准化建品与变更",
    desc: "按品类模板快速创建商品，支持批量导入、字段校验、版本管理与变更留痕。",
  },
  {
    step: "03",
    title: "审核发布",
    desc: "通过资质校验、规则审核、内容审核与人工复核联动，保障商品可售与合规。",
  },
  {
    step: "04",
    title: "经营诊断与优化",
    desc: "围绕供给丰富度、动销率、转化率、问题商品识别持续优化商品池。",
  },
];

const capabilities = [
  {
    id: "product-center",
    title: "商品中心",
    summary: "围绕商品全生命周期，统一管理商品信息、状态与操作动作。",
    desc: "解决商品分散管理、批量处理低效和商品状态不可追踪的问题，让运营和商家都围绕同一商品对象协作。",
    items: ["商品列表与详情", "SPU / SKU 管理", "多渠道商品映射", "批量操作"],
    scenes: ["统一查看在售 / 待审 / 下架商品", "支持批量上架、下架、改价、打标", "支持商品版本与变更留痕"],
  },
  {
    id: "category-center",
    title: "类目与属性中心",
    summary: "通过标准类目和属性模板，支撑多品类商品快速配置。",
    desc: "解决不同业务、不同商家、不同品类字段不统一的问题，让新增商品类型时无需重新开发整套后台。",
    items: ["类目树管理", "属性模板", "必填规则", "前台展示字段配置"],
    scenes: ["新增商品类型时快速复用模板", "按类目定义必填字段和校验规则", "前后台字段统一映射，减少展示错误"],
  },
  {
    id: "merchant-collab",
    title: "商家协同",
    summary: "让商家入驻后的建品、提审、反馈与修改都在线协同完成。",
    desc: "解决商家通过表格、IM、邮件反复沟通的问题，减少审核来回，提高商家接入效率和平台治理效率。",
    items: ["商家建品入口", "待审池", "驳回反馈", "规则说明与操作日志"],
    scenes: ["商家按模板提交商品", "平台审核后直接反馈问题字段", "商家可根据规则说明快速修改后二次提交"],
  },
  {
    id: "analytics-board",
    title: "经营看板",
    summary: "从商品数量管理，升级到商品经营分析与问题诊断。",
    desc: "解决只能看商品规模、看不到经营质量的问题，帮助业务识别什么品好卖、什么信息影响转化、哪些商品需要优化。",
    items: ["供给覆盖度", "热销商品识别", "低质商品预警", "选品优化建议"],
    scenes: ["识别高曝光低转化商品", "定位信息缺失或质量差商品", "指导运营调整选品、补充供给和优化展示信息"],
  },
];

const productScreens = [
  {
    id: "list",
    title: "商品列表页",
    summary: "统一查看商品状态、价格、库存、商家与审核进度，支持筛选与批量操作。",
    highlights: ["多维筛选", "批量上架/下架", "商品状态统一管理"],
  },
  {
    id: "editor",
    title: "商品编辑页",
    summary: "通过标准模板维护商品基础信息、类目属性、图片与销售配置，支持字段校验。",
    highlights: ["模板化建品", "必填规则校验", "多模块分步配置"],
  },
  {
    id: "review",
    title: "审核工作台",
    summary: "集中处理待审商品，查看驳回原因、异常字段和商家修改记录。",
    highlights: ["待审池", "规则命中提示", "审核意见回流商家"],
  },
  {
    id: "dashboard",
    title: "经营看板",
    summary: "围绕曝光、点击、转化、动销和低质商品识别，形成商品经营闭环。",
    highlights: ["核心指标总览", "问题商品预警", "热销/低效商品识别"],
  },
];

function SectionTitle({ badge, title, desc }: { badge: string; title: string; desc: string }) {
  return (
    <div className="max-w-3xl">
      <Badge variant="secondary" className="mb-4 rounded-full px-3 py-1 text-xs">
        {badge}
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
      <p className="mt-3 text-base md:text-lg leading-7 text-slate-600">{desc}</p>
    </div>
  );
}

export default function ProductManagementSolutionPage() {
  const [activeCapability, setActiveCapability] = useState(capabilities[0]);
  const [activeScreen, setActiveScreen] = useState(productScreens[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_30%),radial-gradient(circle_at_left,rgba(99,102,241,0.10),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div>
              <Badge className="mb-5 rounded-full px-3 py-1 text-xs">商品管理解决方案</Badge>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
                用一套统一的商品管理平台，
                <span className="text-slate-500">解决上新慢、信息乱、审核重、经营弱</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                面向平台招商、电商零售与多商家业务场景，打造覆盖商品底座、配置管理、审核治理、供给诊断与经营分析的一体化商品管理平台，
                让商品从“能管理”升级为“能经营”。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="rounded-2xl px-6">
                  查看解决方案
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl px-6">
                  核心能力概览
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "统一商品主数据",
                  "模板化建品",
                  "规则化审核",
                  "供给诊断",
                  "经营数据闭环",
                ].map((item) => (
                  <Badge key={item} variant="secondary" className="rounded-full px-3 py-1">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid gap-4"
            >
              <Card className="rounded-3xl border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Store className="h-5 w-5" />
                    方案总览
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {modules.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <div className="flex items-start gap-3">
                            <div className="rounded-2xl bg-white p-2 shadow-sm border border-slate-200">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="font-semibold">{item.title}</div>
                              <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600">
                                {item.points.map((point) => (
                                  <span key={point} className="rounded-full bg-white px-2 py-1 border border-slate-200">
                                    {point}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          badge="业务痛点"
          title="为什么需要统一的商品管理平台"
          desc="当商品规模、商家数量和业务形态不断增长，传统依赖人工和分散系统的方式会越来越难支撑效率、质量与经营目标。"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Card className="h-full rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            badge="解决方案"
            title="一套平台，打通商品从接入、治理到经营的全链路"
            desc="核心不是单纯做一个商品后台，而是把商品作为平台中的统一经营对象，形成可复用、可扩展、可度量的标准体系。"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {modules.map((module, idx) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <Card className="h-full rounded-3xl border-slate-200 bg-white shadow-sm">
                    <CardHeader>
                      <div className="mb-3 inline-flex w-fit rounded-2xl border border-slate-200 bg-slate-50 p-3">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {module.points.map((point) => (
                          <div key={point} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          badge="核心能力"
          title="既能支撑日常管理，也能支撑平台化扩张"
          desc="围绕商品对象建立标准能力中心，让运营、商家、审核、经营分析都围绕同一套商品体系协作。点击左侧能力模块，可查看详细说明、场景与具体能力。"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[360px_1fr]">
          <Card className="rounded-3xl border-slate-200 shadow-sm">
            <CardContent className="p-4">
              <div className="space-y-3">
                {capabilities.map((block) => {
                  const isActive = activeCapability.id === block.id;
                  return (
                    <button
                      key={block.id}
                      onClick={() => setActiveCapability(block)}
                      className={`w-full rounded-2xl border p-4 text-left transition-all ${
                        isActive
                          ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                          : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`rounded-2xl p-2 ${
                              isActive ? "bg-white/10" : "border border-slate-200 bg-slate-50"
                            }`}
                          >
                            <Sparkles className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-semibold">{block.title}</div>
                            <div className={`mt-1 text-xs leading-5 ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                              {block.summary}
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <motion.div
            key={activeCapability.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardContent className="p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{activeCapability.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{activeCapability.desc}</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_1fr]">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">包含能力</div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {activeCapability.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-900">典型场景</div>
                    <div className="mt-4 space-y-3">
                      {activeCapability.scenes.map((scene) => (
                        <div key={scene} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                          <div className="text-sm leading-6 text-slate-700">{scene}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          badge="功能界面示意"
          title="不仅讲清楚能力，也展示产品界面会长什么样"
          desc="通过几个典型后台页面示意，帮助更直观地理解商品管理平台如何承载日常运营、审核治理与经营分析。"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr]">
          <Card className="rounded-3xl border-slate-200 shadow-sm">
            <CardContent className="p-4">
              <div className="space-y-3">
                {productScreens.map((screen) => {
                  const isActive = activeScreen.id === screen.id;
                  return (
                    <button
                      key={screen.id}
                      onClick={() => setActiveScreen(screen)}
                      className={`w-full rounded-2xl border p-4 text-left transition-all ${
                        isActive
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white hover:bg-slate-50"
                      }`}
                    >
                      <div className="font-semibold">{screen.title}</div>
                      <div className={`mt-2 text-xs leading-5 ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                        {screen.summary}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {screen.highlights.map((item) => (
                          <span
                            key={item}
                            className={`rounded-full px-2 py-1 text-[11px] ${
                              isActive ? "bg-white/10 text-slate-200" : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <motion.div
            key={activeScreen.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Card className="overflow-hidden rounded-3xl border-slate-200 shadow-sm">
              <CardContent className="p-0">
                <div className="border-b border-slate-200 bg-slate-100 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <div className="ml-3 text-sm font-medium text-slate-600">{activeScreen.title} · 页面示意</div>
                  </div>
                </div>

                {activeScreen.id === "list" && (
                  <div className="bg-white p-6">
                    <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                      <div>
                        <div className="text-xl font-semibold">商品管理</div>
                        <div className="mt-1 text-sm text-slate-500">统一管理在售、待审、下架商品</div>
                      </div>
                      <div className="flex gap-2">
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm">批量导入</div>
                        <div className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white">新建商品</div>
                      </div>
                    </div>
                    <div className="mt-5 grid gap-3 md:grid-cols-4">
                      {[
                        ["在售商品", "12,480"],
                        ["待审核", "248"],
                        ["已下架", "1,032"],
                        ["异常商品", "86"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <div className="text-xs text-slate-500">{label}</div>
                          <div className="mt-2 text-2xl font-bold">{value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="grid gap-3 md:grid-cols-5">
                        {["商品名称", "商家", "商品状态", "类目", "审核状态"].map((item) => (
                          <div key={item} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500">
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 space-y-3">
                        {[
                          ["特斯拉 Model Y 后驱版", "特选车旗舰店", "在售", "新能源SUV", "已通过"],
                          ["宝马 3系 2024款", "安心优选店", "待发布", "燃油轿车", "审核中"],
                          ["理想 L7 Pro", "官方直营网点", "在售", "新能源SUV", "需补充信息"],
                        ].map((row, idx) => (
                          <div key={idx} className="grid gap-3 md:grid-cols-5">
                            {row.map((cell) => (
                              <div key={cell} className="rounded-xl bg-white px-3 py-3 text-sm text-slate-700 border border-slate-200">
                                {cell}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeScreen.id === "editor" && (
                  <div className="bg-white p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xl font-semibold">新建商品</div>
                        <div className="mt-1 text-sm text-slate-500">按类目模板完成商品信息配置</div>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm">保存草稿</div>
                    </div>
                    <div className="mt-5 grid gap-6 xl:grid-cols-[220px_1fr]">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="space-y-3 text-sm">
                          {[
                            "1. 基础信息",
                            "2. 类目属性",
                            "3. 销售配置",
                            "4. 图片与详情",
                            "5. 提审发布",
                          ].map((step, idx) => (
                            <div
                              key={step}
                              className={`rounded-xl px-3 py-2 ${idx === 0 ? "bg-slate-900 text-white" : "bg-white text-slate-600 border border-slate-200"}`}
                            >
                              {step}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="grid gap-4 md:grid-cols-2">
                          {[
                            "商品名称",
                            "所属品牌",
                            "一级类目",
                            "二级类目",
                            "指导价",
                            "库存数量",
                          ].map((field) => (
                            <div key={field}>
                              <div className="mb-2 text-sm text-slate-500">{field}</div>
                              <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-400">请输入或选择</div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4">
                          <div className="mb-2 text-sm text-slate-500">商品卖点</div>
                          <div className="h-28 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-400">
                            支持填写商品亮点、核心配置、差异化优势
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <div className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm">上一步</div>
                          <div className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white">下一步</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeScreen.id === "review" && (
                  <div className="bg-white p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xl font-semibold">审核工作台</div>
                        <div className="mt-1 text-sm text-slate-500">集中处理待审核商品与异常信息</div>
                      </div>
                      <div className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white">批量通过</div>
                    </div>
                    <div className="mt-5 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="text-sm font-semibold">待审商品池</div>
                        <div className="mt-4 space-y-3">
                          {[
                            ["特斯拉 Model 3", "图片不完整", "高优先级"],
                            ["奔驰 C260L", "价格异常", "中优先级"],
                            ["问界 M7", "资质待补充", "高优先级"],
                          ].map((item, idx) => (
                            <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-4">
                              <div className="flex items-center justify-between gap-3">
                                <div>
                                  <div className="font-medium">{item[0]}</div>
                                  <div className="mt-1 text-sm text-slate-500">命中问题：{item[1]}</div>
                                </div>
                                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{item[2]}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="text-sm font-semibold">审核详情</div>
                        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                          <div className="text-sm font-medium">问题字段</div>
                          <div className="mt-3 space-y-2 text-sm text-slate-600">
                            <div className="rounded-xl bg-slate-50 px-3 py-2">主图缺少45°外观图</div>
                            <div className="rounded-xl bg-slate-50 px-3 py-2">指导价低于类目阈值，请确认</div>
                            <div className="rounded-xl bg-slate-50 px-3 py-2">商家营业资质未上传最新版本</div>
                          </div>
                          <div className="mt-4">
                            <div className="mb-2 text-sm font-medium">审核意见</div>
                            <div className="h-24 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-400">请输入审核意见</div>
                          </div>
                          <div className="mt-4 flex gap-2">
                            <div className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm">驳回并通知</div>
                            <div className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white">审核通过</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeScreen.id === "dashboard" && (
                  <div className="bg-white p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xl font-semibold">商品经营看板</div>
                        <div className="mt-1 text-sm text-slate-500">围绕商品供给、动销与转化做经营诊断</div>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm">近30天</div>
                    </div>
                    <div className="mt-5 grid gap-3 md:grid-cols-4">
                      {[
                        ["供给覆盖率", "82%"],
                        ["动销率", "64%"],
                        ["高曝光低转化商品", "126"],
                        ["低质商品数", "39"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <div className="text-xs text-slate-500">{label}</div>
                          <div className="mt-2 text-2xl font-bold">{value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="text-sm font-semibold">趋势示意</div>
                        <div className="mt-4 flex h-56 items-end gap-3 rounded-2xl bg-white p-4 border border-slate-200">
                          {[48, 62, 58, 76, 70, 88, 94, 86].map((h, idx) => (
                            <div key={idx} className="flex-1 rounded-t-xl bg-slate-300" style={{ height: `${h}%` }} />
                          ))}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="text-sm font-semibold">问题商品预警</div>
                        <div className="mt-4 space-y-3">
                          {[
                            "12个商品曝光高但点击低，建议优化封面与标题",
                            "9个商品点击高但留资低，建议补充卖点与价格说明",
                            "18个商品属性缺失，影响搜索召回与前台展示",
                          ].map((warning) => (
                            <div key={warning} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                              {warning}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            badge="业务流程"
            title="把商品管理从“后台动作”升级成“经营闭环”"
            desc="通过标准对象、标准流程和标准指标，把商品接入、治理、展示和优化串成一条连续链路。"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {journey.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="relative"
              >
                <Card className="h-full rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="text-sm font-semibold text-slate-400">STEP {item.step}</div>
                    <div className="mt-2 text-xl font-semibold">{item.title}</div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                  </CardContent>
                </Card>
                {idx < journey.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block">
                    <ArrowRight className="h-5 w-5 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          badge="业务价值"
          title="最终带来的，不只是一个系统，而是一套商品经营方法"
          desc="商品管理平台的目标不是把流程搬到线上，而是帮助业务真正实现供给可控、效率可提、质量可管、增长可看。"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {valueCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
            >
              <Card className="h-full rounded-3xl border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="text-sm text-slate-500">{card.title}</div>
                  <div className="mt-3 text-2xl font-bold tracking-tight">{card.value}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
