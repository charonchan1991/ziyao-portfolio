<template>
  <v-subheader v-if="item.header"><v-icon class="pr-2">{{ item.icon }}</v-icon>{{ item.header }}</v-subheader>
  <v-divider v-else-if="item.header"></v-divider>
  <v-list-tile v-else @click="openDialog" :to="item.route">
    <div
      class="preview"
      :style="{
        background: 'url(' + item.preview + ') center center / cover no-repeat'
      }"
    >
    </div>
    <v-list-tile-content>
      <v-list-tile-title>
        {{ item.title }}
        <v-chip
          label
          class="stacks grey white--text hover--blue"
          v-for="(stack, k) in item.stacks"
          :key="k"
        >
          {{ stack }}
        </v-chip>
      </v-list-tile-title>
      <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    openDialog () {
      this.$emit('openDialog')
    }
  }
}
</script>

<style lang="stylus">

  .preview
    min-width: 125px
    min-height: 70px
    margin-right: 15px

  .stacks
    margin: 0 5px
    padding: 1px 8px 0
    height: 18px
    font-size: 12px

</style>
