<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <!-- Automatically add CommentSection for all doc pages -->
      <CommentSection v-if="showComments" />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CommentSection from '../../components/CommentSection.vue'

const { page, frontmatter } = useData()

// Only show comments on doc pages (not on home page, etc.)
const showComments = computed(() => {
  // Skip if it's a 404 page
  if (page.value.isNotFound) return false
  
  // Skip if it's the home page
  if (frontmatter.value.layout === 'home') return false
  
  // Skip introduction pages
  if (page.value.relativePath?.includes('introduction')) return false
  
  // Only show on markdown pages
  return page.value.relativePath?.endsWith('.md')
})
</script>

<style scoped>
.layout {
  width: 100%;
}
</style>