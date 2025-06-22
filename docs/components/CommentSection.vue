<template>
  <div class="comment-section">
    <h3>Comments</h3>
    <form @submit.prevent="handleSubmit" class="comment-form">
      <div class="form-group">
        <!-- <label for="author-name">Nickname</label> -->
        <input id="author-name" v-model="newComment.name" placeholder="Your nickname" required />
      </div>
      <div class="form-group">
        <!-- <label for="comment-content">Comment</label> -->
        <textarea id="comment-content" v-model="newComment.content" placeholder="Enter a friendly comment..." required rows="4"></textarea>
      </div>
      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Submitting...' : 'Post Comment' }}
      </button>
    </form>

    <div class="comments-list" v-if="comments.length > 0">
      <h4>{{ comments.length }} {{ comments.length === 1 ? 'Comment' : 'Comments' }}</h4>
      <ul>
        <li v-for="comment in comments" :key="comment.id">
          <div class="comment-header">
            <strong>{{ comment.name }}</strong>
            <span>{{ new Date(comment.created_at).toLocaleString() }}</span>
          </div>
          <p class="comment-content">{{ comment.content }}</p>
        </li>
      </ul>
    </div>
    <div class="no-comments" v-else>
      <p>No comments yet. Be the first to comment!</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../.vitepress/supabase';
import { useData } from 'vitepress';

// Get page-specific data from VitePress
const { page } = useData();
const pageSlug = page.value.relativePath;

const comments = ref([]);
const newComment = ref({
  name: '',
  content: '',
  page_slug: pageSlug,
});
const isSubmitting = ref(false);

async function fetchComments() {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('page_slug', pageSlug)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching comments:', error);
  } else {
    comments.value = data;
  }
}

async function handleSubmit() {
  if (isSubmitting.value) return;
  isSubmitting.value = true;

  const { error } = await supabase.from('comments').insert([{
    name: newComment.value.name,
    content: newComment.value.content,
    page_slug: newComment.value.page_slug,
  }]);

  if (error) {
    console.error('Error adding comment:', error);
    alert(`Failed to post comment: ${error.message}`);
  } else {
    newComment.value.name = '';
    newComment.value.content = '';
    await fetchComments();
  }
  isSubmitting.value = false;
}

onMounted(fetchComments);
</script>

<style scoped>
.comment-section {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}

.comment-section h3 {
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.comment-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.form-group label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}
.form-group input,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}
.form-group textarea {
  resize: vertical;
}
button {
  align-self: flex-start;
  padding: 0.75rem 1.5rem;
  border: none;
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}
button:hover {
  background-color: var(--vp-c-brand-2);
}
button:disabled {
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-text-3);
  cursor: not-allowed;
}
.comments-list ul {
  list-style: none;
  padding: 0;
}
.comments-list li {
  padding: 1rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
}
.comments-list li:last-child {
  border-bottom: none;
}
.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.comment-header strong {
  color: var(--vp-c-brand-1);
}
.comment-header span {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
.comment-content {
  margin: 0;
  white-space: pre-wrap;
  color: var(--vp-c-text-1);
  line-height: 1.7;
}
.no-comments {
  color: var(--vp-c-text-2);
  text-align: center;
  padding: 2rem 0;
}
</style> 