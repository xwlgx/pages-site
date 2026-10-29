export interface Direction {
  title: string;
  desc: string;
}

export interface Post {
  title: string;
  date: string;
  href: string;
}

export const site = {
  name: 'lgx',
  handle: 'xwlgx',
  role: '全栈 · 产品与架构',
  status: '当前专注：Agent 能力在农牧业务场景中的落地',
  headline: '把农牧行业的业务，做成能长期运行的系统',
  intro:
    '长期在做牧场、饲料厂与农牧设备相关的系统：从业务流程梳理、架构设计到上线后的持续维护。关注系统的可用性与可维护性，也关注新技术能否真正降低一线的操作成本。',
  email: '2309203718@qq.com',
  github: 'https://github.com/xwlgx',
  domains: ['Agent 行业落地', '牧场 TMR', '饲料厂 ERP', '农牧设备智能化', '工控联网', 'BI 大屏'],
  directions: [
    {
      title: 'Agent 行业落地',
      desc: '把模型能力接进真实业务流程，先解决流程里的具体环节，再考虑通用化。',
    },
    {
      title: '农牧业务系统',
      desc: '牧场与饲料厂的业务闭环、数据链路与现场执行，重点是计划与实际一致。',
    },
    {
      title: '设备与工控',
      desc: '设备接入、数据采集与可视化，把分散的现场信号汇聚成可判断的指标。',
    },
  ] as Direction[],
  stack: ['Node', 'Vue', 'React', 'Electron', 'Go', 'MySQL'],
  about:
    '负责过产品设计、系统架构与交付落地，习惯先把边界和状态理清楚再动手写代码。这个站点用来记录做过的系统、踩过的坑，以及仍在验证中的想法。',
  posts: [] as Post[],
};
