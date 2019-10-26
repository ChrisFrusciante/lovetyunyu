<template lang='pug'>
.sample-dialog
    q-btn(label='test')
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SampleDialog extends Vue {}
Vue.component('SampleDialog', SampleDialog);
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

.sample-dialog {}
</style>
