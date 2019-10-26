<template lang='pug'>
#Home
    .main-pane
        .row.justify-center
            .item
                h1.text-h5 栗原陸の濃い占い
                p あなたの運命の人を、私が占っちゃうぞ💘

                q-form.q-mb-sm
                    label.block.q-mb-sm 想い人の誕生日を入れてみて
                    q-date.block(v-model='birthDay')

                q-btn(color='red' @click='inject') 注入💘

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { QForm, QDate, QBtn } from 'quasar';

import RandomUtil from '@/utils/RandomUtil';

@Component({
    components: {
        QForm, QDate, QBtn,
    },
})
export default class Home extends Vue {
    protected ansList = [
        'いまいちかも・・・',
        '頑張ればいける！',
        '最高の相性！！',
        '明日ヤれる！',
    ];

    protected birthDay = '2000/01/01';

    protected inject() {
        const seed = RandomUtil.rand(0, 3);
        this.$qqDialog.alert(this.ansList[seed]);
    }
}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_view.styl';

html
    scroll-view: true;
    // static-view: true;

#Home
    .main-pane
        main-pane();
</style>
