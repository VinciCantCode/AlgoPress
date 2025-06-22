<template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      <li v-for="user in users" :key="user.id">{{ user.email }}</li>
      <li v-for="user in users" :key="user.id">{{ user.created_at }}</li>
    </ul>
  </div>
</template>

<script>
import { supabase } from '../.vitepress/supabase.ts';

export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    const { data, error } = await supabase.from('Users').select('*');
    if (error) {
      console.error('Error fetching users:', error);
    } else {
      this.users = data;
    }
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 8px 16px;
  border-bottom: 1px solid #ddd;
}
</style> 