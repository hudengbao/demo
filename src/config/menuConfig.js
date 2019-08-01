const menuList = [
    {
        title:'首页',
        url: '/admin/home',
        key: 1
    },
    {
        title:'UI',
        url: '/admin/ui',
        key: 2,
        children: [
            {
                title:'按钮',
                url: '/admin/ui/button',
                key: 1
            },
            {
                title:'弹框',
                url: '/admin/ui/modals',
                key: 1
            }
        ]
    }
]

export default menuList;