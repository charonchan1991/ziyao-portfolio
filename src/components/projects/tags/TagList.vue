<template>
  <v-tooltip top v-if="tag.fullName">
    <v-chip label small
      :class="['grey white--text', 'hover--' + tag.color]"
      slot="activator"
    >
      <v-icon left>label</v-icon>{{ tag.name }}
    </v-chip>
    <span>{{ tag.fullName }}</span>
  </v-tooltip>
  <v-chip v-else
    label
    small
    :class="['grey white--text', 'hover--' + tag.color]"
  >
    <v-icon left>label</v-icon>{{ tag.name }}
  </v-chip>
</template>

<script>
export default {
  props: ['tag']
}
</script>
