const menuList = [
    {
        title:'首页',
        key: '/admin/home'
    },
    {
        title:'UI',
        key: '/admin/ui',
        children: [
            {
                title:'按钮',
                key: '/admin/ui/button',
            }, {
                title:'弹框',
                key: '/admin/ui/modals',
            },{
                title:'加载',
                key: '/admin/ui/loading',
            }, {
                title:'系统通知提醒框',
                key: '/admin/ui/notification',
            },{
                title:'提示',
                key: '/admin/ui/message',
            },{
                title:'叶签',
                key: '/admin/ui/tab',
            },{
                title:'卡片',
                key: '/admin/ui/card',
            },{
                title:'走马灯',
                key: '/admin/ui/carousel',
            }
        ]
    },
    {
        title:'表单',
        key: '/admin/Form',
        children: [
            {
                title:'登录',
                key: '/admin/form/login',
            }, {
                title:'注册',
                key: '/admin/form/registered',
            }
        ]
    },{
        title:'表格',
        key: '/admin/table',
        children: [
            {
                title:'基础',
                key: '/admin/form/table',
            }
        ]
    }
]

export default menuList;