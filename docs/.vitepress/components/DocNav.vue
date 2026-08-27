<script setup>
import { withBase } from 'vitepress'
import { data as groups } from '../navLinks.data.js'
</script>

<template>
  <div class="doc-nav">
    <section v-for="group in groups" :key="group.title" class="doc-nav__group">
      <h3 class="doc-nav__title">{{ group.title }}</h3>
      <ul class="doc-nav__list">
        <li v-for="item in group.links" :key="item.text">
          <a v-if="!item.empty && item.link" :href="withBase(item.link)">
            {{ item.text }}
          </a>
          <span v-else class="doc-nav__empty">{{ item.text }}（暂无文档）</span>
        </li>
      </ul>
    </section>
  </div>
</template>
