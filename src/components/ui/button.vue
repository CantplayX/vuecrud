<template>
  <component
    :is="asChild ? 'slot' : 'button'"
    :class="computedClass"
    v-bind="$attrs"
    v-on="$listeners"
    ref="buttonRef"
  >
    <slot></slot>
  </component>
</template>

<script setup>
import { computed, ref } from 'vue'

// Utility function similar to class-variance-authority
function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

function buttonVariants({ variant, size, className }) {
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  }

  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
  }

  return cn(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    variants[variant] || variants.default,
    sizes[size] || sizes.default,
    className
  )
}

// Props
const props = defineProps({
  className: String,
  variant: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'default',
  },
  asChild: {
    type: Boolean,
    default: false,
  },
})

// Refs and computed properties
const buttonRef = ref(null)
const computedClass = computed(() => buttonVariants(props))

</script>
