import Vue from 'vue';

import '@/assets/styles/quasar/quasar.styl';
import {
    Quasar,
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    Loading,
    Dialog,
    BottomSheet,
    LoadingBar,
    Notify,
    AppFullscreen,
    AppVisibility,
} from 'quasar';

Vue.use(Quasar, {
    config: {},
    components: {
        QLayout,
        QHeader,
        QDrawer,
        QPageContainer,
        QPage,
        QToolbar,
        QToolbarTitle,
        QBtn,
        QIcon,
        QList,
        QItem,
        QItemSection,
        QItemLabel,
    },
    directives: {
    },
    plugins: {
        Loading, Dialog, BottomSheet, LoadingBar, Notify,
        AppFullscreen, AppVisibility,
    },
});
