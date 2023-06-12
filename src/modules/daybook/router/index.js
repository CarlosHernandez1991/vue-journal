export default {
    name: 'daybook',
    component: () => import('@/modules/daybook/layouts/DayBookLayouts.vue'),
    children: [
        {
            path: '',
            name: 'noselected',
            component: () => import('@/modules/daybook/view/NoEntrySelected.vue')
        },
        {
            path: ':id',
            name: 'entryview',
            component: () => import('@/modules/daybook/view/EntryView.vue')
        }
    ]
}