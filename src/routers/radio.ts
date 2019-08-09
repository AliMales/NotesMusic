/**
 * 发现音乐
 */
export default [
    {
        path: '/radio/index',
        name: '我的私人电台',
        // <a-icon type="customer-service" />
        // type: 'customer-service',
        type: 'icon-wangyiyunyinle',
        component: () => import('@/views/Radio/pages/Radio.vue'),
        meta: { title: '我的电台', keepAlive: true, permission: ['dashboard'] },
        // children: [
        //   {
        //     path: '/music-detail',
        //     name: '歌单详情',
        //     // <a-icon type="customer-service" />
        //     type: 'customer-service',
        //     component: () => import('@/views/Find/pages/MusicDetail/index.vue'),
        //     meta: { title: '最新音乐', keepAlive: true, permission: ['dashboard'] },
        //   },
        // ],
    },


];