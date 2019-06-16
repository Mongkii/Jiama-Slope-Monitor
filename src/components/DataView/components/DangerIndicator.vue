<template>
  <i :class="['DangerIndicator-style'].concat(getStatusClass())"></i>
</template>

<script>
  import { STATUS_SAFE, STATUS_WARN, STATUS_DANGER } from '../../../assets/refer.js';

  const createNoti = (title, options) => () => {
    const noti = new Notification(title, options);
    setTimeout(noti.close.bind(noti), 3000);
  };

  export default {
    data() {
      return {
        alert_noti_timer: undefined
      }
    },
    props: {
      status: {
        type: String,
        required: true
      }
    },
    methods: {
      getStatusClass() {
        switch (this.status) {
          case STATUS_SAFE:
            return ['el-icon-success', 'safe'];
          case STATUS_WARN:
            return ['el-icon-warning', 'warn'];
          case STATUS_DANGER:
            return ['el-icon-error', 'danger'];
          default:
            return;
        }
      }
    },
    updated() {
      clearInterval(this.alert_noti_timer);
      switch (this.status) {
        case STATUS_WARN: {
          const noti = createNoti('边坡可能出现危险。', { body: '当前边坡稳定安全系数触发黄色预警' });
          noti();
          this.alert_noti_timer = setInterval(noti, 30000);
          break;
        }
        case STATUS_DANGER: {
          const noti = createNoti('边坡已经失稳！', { body: '当前边坡稳定安全系数触发红色预警' });
          noti();
          this.alert_noti_timer = setInterval(noti, 10000);
          break;
        }
        default:
          break;
      }
    },
    destroyed() {
      clearInterval(this.alert_noti_timer);
    }
  };
</script>

<style lang="scss">
  .DangerIndicator-style {
    margin-left: 10px;
    font-size: 2rem;

    &.safe {
      color: #60d0b0;
    }

    &.warn {
      color: #ffa500;
    }

    &.danger {
      color: #dc143c;
    }
  }
</style>
