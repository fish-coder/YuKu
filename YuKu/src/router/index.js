import Vue from 'vue'
import Router from 'vue-router'

import PageNotFound from '@/components/404'

import Main from '@/components/Main'
import UserDataTable from '@/components/BaseServiceManage/UserManage/UserDataTable'
import UserPermission from '@/components/BaseServiceManage/UserManage/UserPermission'
import IllegalReport from '@/components/BaseServiceManage/CustomerServiceManage/IllegalReport'
import NormalQuestion from '@/components/BaseServiceManage/CustomerServiceManage/NormalQuestion'
import Suggest from '@/components/BaseServiceManage/CustomerServiceManage/Suggest'
import ScoreAccumulate from '@/components/BaseServiceManage/ScoreManage/ScoreAccumulate'
import ScoreCheck from '@/components/BaseServiceManage/ScoreManage/ScoreCheck'
import ScoreExchange from '@/components/BaseServiceManage/ScoreManage/ScoreExchange'
import ScoreNotice from '@/components/BaseServiceManage/ScoreManage/ScoreNotice'
import NoticeManage from '@/components/BaseServiceManage/NoticeManage/NoticeManage'
import DataLabelManage from '@/components/BaseServiceManage/DataLabelManage/DataLabelManage'
import TaskRewardManage from '@/components/BaseServiceManage/TaskRewardManage/TaskRewardManage'

import ThirdParty from '@/components/ThirdParty'
import ProvisionManage from '@/components/ThirdPartyDataCoopManage/ProvisionManage/ProvisionManage'
import RequirementManage from '@/components/ThirdPartyDataCoopManage/RequirementManage/RequirementManage'
import BaseDataManage from '@/components/ThirdPartyDataCoopManage/BaseDataManage/BaseDataManage'

import DataCollection from '@/components/DataCollection'
import QuestionBank from '@/components/DataCollectionManage/QuestionBankManage/QuestionBank'
import CustomizedTask from '@/components/DataCollectionManage/TaskListManage/CustomizedTask'
import DataHandle from '@/components/DataCollectionManage/VoiceDataManage/DataHandle'
import VisualData from '@/components/DataCollectionManage/VoiceDataManage/VisualData'

import DataProvision from '@/components/DataProvision'
import DataPreview from '@/components/DataProvisionServiceManage/DataPreviewManage/DataPreview'
import DataAdd from '@/components/DataProvisionServiceManage/DataMaintainManage/DataAdd'
import DataUpdate from '@/components/DataProvisionServiceManage/DataMaintainManage/DataUpdate'
import DataDelete from '@/components/DataProvisionServiceManage/DataMaintainManage/DataDelete'
import DataDownLoadManage from '@/components/DataProvisionServiceManage/DataDownLoadManage/DataDownLoadManage'
import DataCheckManage from '@/components/DataProvisionServiceManage/DataCheckManage/DataCheckManage'
import ProtocolCheck from '@/components/DataProvisionServiceManage/ProtocolManage/ProtocolCheck'
import PendingProtocol from '@/components/DataProvisionServiceManage/ProtocolManage/PendingProtocol'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/404',
      component: PageNotFound,
      name: '',
      hidden: true
    },
    {
      path: '*',
      hidden: 'true',
      redirect: { path: '/404' }
    },
    {
      path: '/',
      component: Main,
      name: '用户管理',
      iconCls: 'fa fa-user fa-fw',
      children: [
        {path: '/user-permission', component: UserPermission, name: '角色权限管理'},
        {path: '/user-data-table', component: UserDataTable, name: '用户基本信息管理'}
      ]
    },
    {
      path: '/',
      component: Main,
      name: '客服交流',
      iconCls: 'fa fa-quora fa-fw',
      children: [
        {path: '/normal-question', component: NormalQuestion, name: '常见问题'},
        {path: '/illegal-report', component: IllegalReport, name: '违规举报'},
        {path: '/suggest', component: Suggest, name: '意见建议'}
      ]
    },
    {
      path: '/',
      component: Main,
      name: '积分管理',
      iconCls: 'fa fa-star fa-fw',
      children: [
        {path: '/score-accumulate', component: ScoreAccumulate, name: '积分累积'},
        {path: '/score-check', component: ScoreCheck, name: '积分查看'},
        {path: '/score-exchange', component: ScoreExchange, name: '积分兑换'},
        {path: '/score-notice', component: ScoreNotice, name: '积分公告'}
      ]
    },
    {
      path: '/',
      component: Main,
      name: '公告管理',
      iconCls: 'fa fa-sticky-note fa-fw',
      leaf: true,
      children: [
        {path: '/notice-manage', component: NoticeManage, name: '公告管理'}
      ]
    },
    {
      path: '/',
      component: Main,
      name: '数据标签管理',
      iconCls: 'fa fa-window-restore fa-fw',
      leaf: true,
      children: [
        {path: '/data-label-manage', component: DataLabelManage, name: '数据标签管理'}
      ]
    },
    {
      path: '/',
      component: Main,
      name: '任务奖励管理',
      iconCls: 'fa fa-lightbulb-o fa-fw',
      leaf: true,
      children: [
        {path: '/task-reward-manage', component: TaskRewardManage, name: '任务奖励管理'}
      ]
    },
    {
      path: '/third-party',
      component: ThirdParty,
      name: '数据供应管理',
      iconCls: 'fa fa-lightbulb-o fa-fw',
      leaf: true,
      children: [
        {path: '/provision-manage', component: ProvisionManage, name: '数据供应管理'}
      ]
    },
    {
      path: '/third-party',
      component: ThirdParty,
      name: '数据需求管理',
      iconCls: 'fa fa-lightbulb-o fa-fw',
      leaf: true,
      children: [
        {path: '/requirement-manage', component: RequirementManage, name: '数据需求管理'}
      ]
    },
    {
      path: '/third-party',
      component: ThirdParty,
      name: '数据供需方基本信息管理',
      iconCls: 'fa fa-lightbulb-o fa-fw',
      leaf: true,
      children: [
        {path: '/base-data-manage', component: BaseDataManage, name: '数据供需方基本信息管理'}
      ]
    },
    {
      path: '/data-collection',
      component: DataCollection,
      name: '题库管理',
      iconCls: 'fa fa-lightbulb-o fa-fw',
      children: [
        {path: '/question-bank', component: QuestionBank, name: '题库列表'}
      ]
    },
    {
      path: '/data-collection',
      component: DataCollection,
      name: '语音资料管理',
      iconCls: 'fa fa-lightbulb-o fa-fw',
      children: [
        {path: '/data-handle', component: DataHandle, name: '数据处理'},
        {path: '/visual-data', component: VisualData, name: '可视化数据'}
      ]
    },
    {
      path: '/data-collection',
      component: DataCollection,
      name: '任务列表',
      iconCls: 'fa fa-lightbulb-o fa-fw',
      children: [
        {path: '/customized-task', component: CustomizedTask, name: '定制数据采集任务'}
      ]
    },
    {
      path: '/data-provision',
      component: DataProvision,
      name: '数据集预览',
      iconCls: 'fa fa-lightbulb-o fa-fw',
      leaf: true,
      children: [
        {path: '/data-preview', component: DataPreview, name: '数据集预览'}
      ]
    },
    {
      path: '/data-provision',
      component: DataProvision,
      name: '数据集维护',
      iconCls: 'fa fa-lightbulb-o fa-fw',
      children: [
        {path: '/data-add', component: DataAdd, name: '新建数据集'},
        {path: '/data-update', component: DataUpdate, name: '修改数据集'},
        {path: '/data-delete', component: DataDelete, name: '删除数据集'}
      ]
    },
    {
      path: '/data-provision',
      component: DataProvision,
      name: '数据集下载',
      iconCls: 'fa fa-lightbulb-o fa-fw',
      leaf: true,
      children: [
        {path: '/data-download-manage', component: DataDownLoadManage, name: '数据集下载'}
      ]
    },
    {
      path: '/data-provision',
      component: DataProvision,
      name: '数据集查看',
      iconCls: 'fa fa-lightbulb-o fa-fw',
      leaf: true,
      children: [
        {path: '/data-check-manage', component: DataCheckManage, name: '数据集查看'}
      ]
    },
    {
      path: '/data-provision',
      component: DataProvision,
      name: '数据提供协议',
      iconCls: 'fa fa-lightbulb-o fa-fw',
      children: [
        {path: '/protocol-check', component: ProtocolCheck, name: '协议查询'},
        {path: '/pending-protocol', component: PendingProtocol, name: '待处理协议'}
      ]
    }
  ]
})
