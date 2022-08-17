// Menu
export interface Menu {
    path?: string;
    title?: string;
    type?: string;
    megaMenu?: boolean;
    children?: Menu[];
}

export const MENUITEMS: Menu[] = [
    {
        title: 'clothing', type: 'sub', megaMenu: true, children: [
            {
                title: 'mens fashion', type: 'link', children: [
                    { path: '/home/product/collection/all', title: 'sports wear', type: 'link' },
                    { path: '/home/product/collection/all', title: 'top', type: 'link' },
                    { path: '/home/product/collection/all', title: 'bottom', type: 'link' },
                    { path: '/home/product/collection/all', title: 'ethic wear', type: 'link' },
                    { path: '/home/product/collection/all', title: 'sports wear', type: 'link' },
                    { path: '/home/product/collection/all', title: 'shirts', type: 'link' },
                    { path: '/home/product/collection/all', title: 'bottom', type: 'link' },
                    { path: '/home/product/collection/all', title: 'ethic wear', type: 'link' },
                    { path: '/home/product/collection/all', title: 'sports wear', type: 'link' }
                ]
            },
            {
                title: 'women fashion', type: 'link', children: [
                    { path: '/home/product/collection/all', title: 'dresses', type: 'link' },
                    { path: '/home/product/collection/all', title: 'skirts', type: 'link' },
                    { path: '/home/product/collection/all', title: 'westarn wear', type: 'link' },
                    { path: '/home/product/collection/all', title: 'ethic wear', type: 'link' },
                    { path: '/home/product/collection/all', title: 'bottom', type: 'link' },
                    { path: '/home/product/collection/all', title: 'ethic wear', type: 'link' },
                    { path: '/home/product/collection/all', title: 'sports wear', type: 'link' },
                    { path: '/home/product/collection/all', title: 'sports wear', type: 'link' },
                    { path: '/home/product/collection/all', title: 'bottom wear', type: 'link' }
                ]
            },
        ]
    }
]
