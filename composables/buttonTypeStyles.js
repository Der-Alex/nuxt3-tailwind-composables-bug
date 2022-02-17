import { ref } from 'vue';

export function useButtonTypeStyles(type) {
  const styleClasses = ref('');
  switch (type) {
    case 'primary':
      styleClasses.value = 'bg-primary text-grey-100';
      break;
    case 'secondary':
      styleClasses.value = 'bg-secondary border border-grey-200 text-grey-100';
      break;
    case 'alternative':
      styleClasses.value = 'bg-alternative border border-grey-200 text-grey-200';
      break;
    default:
      break;
  }
  return styleClasses;
}
