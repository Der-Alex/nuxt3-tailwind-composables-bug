<template>
  <button class="rounded-3xl px-6 py-2" :class="buttonTypeStyles">
    <slot></slot>
  </button>
</template>

<script>
import { useButtonTypeStyles } from '~/composables/buttonTypeStyles';
export default {
  props: {
    typeStyle: {
      type: String,
    },
  },
  setup(props) {
    const buttonTypeStyles = useButtonTypeStyles(props.typeStyle);
    return { buttonTypeStyles };
  },
};
</script>

<style></style>
