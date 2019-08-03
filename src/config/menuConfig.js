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
                title:'message',
                key: '/admin/ui/message',
            },{
                title:'tab',
                key: '/admin/ui/tab',
            },{
                title:'card',
                key: '/admin/ui/card',
            }
        ]
    }
]

export default menuList;