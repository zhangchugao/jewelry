<template>
  <div class="featured-detail">
    <!-- 钻石背景横幅 -->
    <div class="diamond-banner">
      <img 
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMCIgd2lkdGg9IjEwMDAiIGhlaWdodD0iMTAwIj4KICA8cmVjdCB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiLz4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjEpIi8+CiAgPHJlY3QgeD0iMjUwIiB5PSI0MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjIpIi8+CiAgPHJlY3QgeD0iMTUwIiB5PSIzMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjMpIi8+CiAgPHJlY3QgeD0iMTAwIiB5PSI1MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjQpIi8+CiAgPHJlY3QgeD0iMjAwIiB5PSIyMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjUpIi8+CiAgPHJlY3QgeD0iMzAwIiB5PSI0MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjYpIi8+CiAgPHJlY3QgeD0iNDAwIiB5PSIyMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjcpIi8+CiAgPHJlY3QgeD0iNDUwIiB5PSI1MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjgpIi8+CiAgPHJlY3QgeD0iMzUwIiB5PSI3MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjlpIi8+CiAgPHJlY3QgeD0iNTAwIiB5PSI0MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjEwKSIvPgogIDxyZWN0IHg9IjU1MCIgeT0iNjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iNSIgZmlsbD0idXJsKCNmaWx0ZXIxMSkiLz4KICA8cmVjdCB4PSI2MDAiIHk9IjMwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjUiIGZpbGw9InVybCgjZmlsdGVyMTIpIi8+CiAgPHJlY3QgeD0iNjUwIiB5PSI1MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjEzKSIvPgogIDxyZWN0IHg9IjUwMCIgeT0iMjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iNSIgZmlsbD0idXJsKCNmaWx0ZXIxNCkiLz4KICA8cmVjdCB4PSI3MDAiIHk9IjQwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjUiIGZpbGw9InVybCgjZmlsdGVyMTUpIi8+CiAgPHJlY3QgeD0iNzUwIiB5PSI2MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjE2KSIvPgogIDxyZWN0IHg9Ijg1MCIgeT0iMzAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iNSIgZmlsbD0idXJsKCNmaWx0ZXIxNykiLz4KICA8cmVjdCB4PSI4MDAiIHk9IjUwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjUiIGZpbGw9InVybCgjZmlsdGVyMTgpIi8+CiAgPHJlY3QgeD0iOTAwIiB5PSI0MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjE5KSIvPgogIDxyZWN0IHg9Ijc1MCIgeT0iMjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iNSIgZmlsbD0idXJsKCNmaWx0ZXIyMCkiLz4KICA8ZmlsdGVyIGlkPSJmaWx0ZXIxIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjIiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGZpbHRlcj0idXJsKCNmaWx0ZXIxKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGwtb3BhY2l0eT0iMC4xNSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9IiNmZmYiLz4KICA8ZmlsdGVyIGlkPSJmaWx0ZXIzIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBvcGFjaXR5PSIwLjEiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSIjZmZmIi8+CiAgPGZpbHRlcj0idXJsKCNmaWx0ZXI0KSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGwtb3BhY2l0eT0iMC4xMyIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9IiNmZmYiLz4KICA8ZmlsdGVyIGlkPSJmaWx0ZXI1IiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBvcGFjaXR5PSIwLjAyIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIvPgogIDxmZXR1cmUgY29sb3I9IiNmZmYiIGZpbHRlcj0idXJsKCNmaWx0ZXI2KSIgb3BhY2l0eT0iMC4wOCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8ZmlsdGVyIGlkPSJmaWx0ZXI3IiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBvcGFjaXR5PSIwLjA5IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIvPgogIDxmZXR1cmUgY29sb3I9IiNmZmYiIGZpbHRlcj0idXJsKCNmaWx0ZXI4KSIgb3BhY2l0eT0iMC4xMiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8ZmlsdGVyIGlkPSJmaWx0ZXI5aSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbHRlcj0idXJsKCNmaWx0ZXI5aSkiIG9wYWNpdHk9IjAuMDciIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSIjZmZmIi8+CiAgPGZpbHRlcj0idXJsKCNmaWx0ZXIxMCkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBvcGFjaXR5PSIwLjA1IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIvPgogIDxmZXR1cmUgY29sb3I9IiNmZmYiIGZpbHRlcj0idXJsKCNmaWx0ZXIxMSkiIG9wYWNpdHk9IjAuMDciIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGZpbHRlcj0idXJsKCNmaWx0ZXIxMikiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBvcGFjaXR5PSIwLjA2IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIvPgogIDxmZXR1cmUgY29sb3I9IiNmZmYiIGZpbHRlcj0idXJsKCNmaWx0ZXIxMykiIG9wYWNpdHk9IjAuMDUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGZpbHRlcj0idXJsKCNmaWx0ZXIxNikiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBvcGFjaXR5PSIwLjA0IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIvPgogIDxmZXR1cmUgY29sb3I9IiNmZmYiIGZpbHRlcj0idXJsKCNmaWx0ZXIxNSkiIG9wYWNpdHk9IjAuMDMiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGZpbHRlcj0idXJsKCNmaWx0ZXIxNikiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBvcGFjaXR5PSIwLjA2IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIvPgogIDxmZXR1cmUgY29sb3I9IiNmZmYiIGZpbHRlcj0idXJsKCNmaWx0ZXIxNikiIG9wYWNpdHk9IjAuMDUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGZpbHRlcj0idXJsKCNmaWx0ZXIxOikiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBvcGFjaXR5PSIwLjA0IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIvPgogIDxmZXR1cmUgY29sb3I9IiNmZmYiIGZpbHRlcj0idXJsKCNmaWx0ZXIxOikiIG9wYWNpdHk9IjAuMDMiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGZpbHRlcj0idXJsKCNmaWx0ZXIyMikiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBvcGFjaXR5PSIwLjAyIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=
        " 
        alt="Diamonds Background" 
        class="diamond-bg"
      >
    </div>

    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <span>Your current location:</span>
      <router-link to="/" class="breadcrumb-link">HOME</router-link>
      <span class="breadcrumb-separator">></span>
      <router-link to="/featured" class="breadcrumb-link">Featured</router-link>
      <span class="breadcrumb-separator">></span>
      <span class="breadcrumb-current">{{ currentGem?.name }}</span>
    </div>

    <!-- 宝石详情内容 -->
    <div class="gem-detail-content">
      <h1 class="gem-title">{{ currentGem?.name }}</h1>
      
      <!-- 宝石信息和图片区域 -->
      <div class="gem-info-section">
        <div class="gem-main-image">
          <img :src="currentGem?.imageUrl" :alt="currentGem?.name" class="gem-img">
        </div>
        
        <div class="gem-meta">
          <p class="gem-time">Time: {{ currentGem?.time }}</p>
        </div>
      </div>

      <!-- 宝石描述内容 -->
      <div class="gem-description-section">
        <div class="gem-description-text">
          <p>{{ currentGem?.description }}</p>
          <p v-if="currentGem?.fullContent">{{ currentGem?.fullContent }}</p>
        </div>
      </div>
    </div>

    <!-- 返回按钮 -->
    <div class="back-button-container">
      <button @click="goBack" class="back-button">
        ← Back to Featured List
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// 模拟宝石数据
const gemData = [
  {
    id: '1',
    name: 'Kunzite',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwLDAgTDIwMCwxMDAgTDEwMCwyMDAgTDAxMDAgWiIgZmlsbD0iI2VjYTllNCIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=',
    description: 'Kunzite is the best-known variety of the mineral spodumene. It\'s named after George Frederick Kunz, the Tiffany & Co. gemologist who first identified it as a distinct variety of spodumene in 1902.',
    fullContent: 'Kunzite crystals are typically light to medium pink in color, though they can range from near-colorless to a rich, intense pink. The color comes from traces of manganese in the crystal structure. Kunzite is notable for its pleochroism, which means it can show different colors when viewed from different angles. When viewed down the length of the crystal, kunzite often appears lighter, sometimes almost colorless, while across the crystal it shows its characteristic pink hue.',
    time: '2024-09-01 14:30:45'
  },
  {
    id: '2',
    name: 'AQUAMARINE',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwLDAgTDIwMCwxMDAgTDEwMCwyMDAgTDAxMDAgWiIgZmlsbD0iIzM3YjZhZSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=',
    description: 'Aquamarine\'s name comes from the Latin seawater. It was said to calm waves and keep sailors safe at sea. Today, it continues to be associated with the ocean and with serenity.',
    fullContent: 'Aquamarine is a variety of the mineral beryl, which also includes emerald and morganite. Its color ranges from a very faint, almost colorless blue to a rich, deep blue-green. The most valuable aquamarines are a vibrant medium-blue color. Unlike some gemstones, aquamarine often forms large, clean crystals, which allows for impressive faceted gems and carvings. The largest aquamarine ever found weighed over 110 kg!',
    time: '2024-09-02 10:15:22'
  },
  {
    id: '3',
    name: 'EMERALD',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwLDAgTDIwMCwxMDAgTDEwMCwyMDAgTDAxMDAgWiIgZmlsbD0iIzE5NzQwMCIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=',
    description: 'Gem experts differ on the degree of green that makes one stone an emerald another stone a less-expensive green beryl. Most gemologists, gemological laboratories, colored stone dealers call a stone green beryl when its color is "too light" to be classified as emerald.',
    fullContent: 'Emerald is the most valuable variety of the mineral beryl, prized for its rich green color. The color comes from trace amounts of chromium and/or vanadium in the crystal structure. Emeralds typically have numerous inclusions and fractures, which are often called "jardin" (French for garden) in the gem trade. These inclusions are actually considered part of the emerald\'s character and are used to distinguish natural emeralds from synthetic ones.',
    time: '2024-09-04 15:44:45'
  },
  {
    id: '4',
    name: 'Citrine',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwLDAgTDIwMCwxMDAgTDEwMCwyMDAgTDAxMDAgWiIgZmlsbD0iI2Y0ODAzMiIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=',
    description: 'Citrine is rare in nature. In the days before modern gemology, its tawny color caused it to be confused with topaz. Today, most commercial citrine is actually amethyst or smoky quartz that has been heat-treated to produce the characteristic yellow to orange color.',
    fullContent: 'Natural citrine gets its color from traces of iron in the quartz crystal structure. It ranges in color from pale yellow to golden-orange to deep amber. Citrine is the November birthstone and is associated with warmth, energy, and creativity. Unlike many other gemstones, citrine is generally clean and free of inclusions, which makes it popular for all types of jewelry settings.',
    time: '2024-09-05 09:25:10'
  },
  {
    id: '5',
    name: 'Blue Sapphire',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwLDAgTDIwMCwxMDAgTDEwMCwyMDAgTDAxMDAgWiIgZmlsbD0iIzM0NDRmOSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=',
    description: 'Blue sapphires are perhaps the most sought-after of all sapphire varieties, known for their rich, deep blue color. The finest blue sapphires are often described as "cornflower blue" - a medium-deep blue with a slight violet undertone.',
    fullContent: 'Sapphire is a variety of the mineral corundum, the same mineral as ruby. Blue sapphire gets its color from trace amounts of iron and titanium in the crystal structure. Sapphires are extremely hard (9 on the Mohs scale), second only to diamonds, making them excellent for everyday wear in jewelry. The largest sapphire ever found is the Logan Sapphire, which weighs 423 carats and is on display at the Smithsonian Institution.',
    time: '2024-09-06 16:40:33'
  },
  {
    id: '6',
    name: 'Pink Sapphire',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwLDAgTDIwMCwxMDAgTDEwMCwyMDAgTDAxMDAgWiIgZmlsbD0iI2RkNTlkYSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=',
    description: 'Pink sapphires range from delicate pastel to vivid hot pink, with the most valuable stones having intense, saturated color. The color in pink sapphire comes from trace amounts of chromium, the same element that gives rubies their red color.',
    fullContent: 'Pink sapphire is often considered the "little sister" of ruby, as they are both varieties of corundum and get their color from chromium. The boundary between pink sapphire and ruby is somewhat arbitrary, with some gemological laboratories using specific color saturation thresholds to distinguish between the two. Pink sapphires are highly prized in jewelry, particularly for engagement rings and other fine jewelry pieces.',
    time: '2024-09-07 11:15:55'
  },
  {
    id: '7',
    name: 'Green Garnet',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwLDAgTDIwMCwxMDAgTDEwMCwyMDAgTDAxMDAgWiIgZmlsbD0iIzM2MjMxYSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=',
    description: 'Green garnets come in several varieties, with tsavorite being the most famous and valuable. Tsavorite was first discovered in Tanzania in 1967 and named after Tsavo National Park, near where it was found.',
    fullContent: 'Tsavorite is a variety of grossular garnet that gets its vivid green color from vanadium and chromium. It is prized for its exceptional brilliance, high clarity, and intense green color that rivals emerald. Unlike emerald, tsavorite typically has few inclusions and doesn\'t require treatment. Other green garnet varieties include demantoid (the most valuable garnet variety overall) and merelani mint garnet, a rare mint-green variety discovered in Tanzania in the 1990s.',
    time: '2024-09-08 14:22:18'
  },
  {
    id: '8',
    name: 'Spessartite',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwLDAgTDIwMCwxMDAgTDEwMCwyMDAgTDAxMDAgWiIgZmlsbD0iIzVlMWJhYSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=',
    description: 'Spessartite is a rare orange to reddish-orange garnet that gets its name from the Spessart district in Germany, where it was first discovered in the early 19th century.',
    fullContent: 'Spessartite garnet gets its characteristic orange color from manganese. The finest specimens have a vibrant, saturated orange-red color reminiscent of tangerines or mandarin oranges. Madagascar is currently the most important source of gem-quality spessartite, producing stones with exceptional color and clarity. Spessartite is sometimes called "mandarin garnet" in the gem trade, particularly for stones with a bright orange color.',
    time: '2024-09-09 10:05:42'
  }
];

// 根据路由参数获取当前宝石数据
const currentGem = computed(() => {
  const id = route.params.id as string;
  return gemData.find(gem => gem.id === id) || gemData[0]; // 默认返回第一个宝石
});

// 返回上一页
const goBack = () => {
  router.push('/featured');
};
</script>

<style scoped>
.featured-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  animation: fadeIn 0.5s ease-in;
}

/* 钻石背景横幅 */
.diamond-banner {
  width: 100%;
  height: 120px;
  overflow: hidden;
  margin-bottom: 2rem;
  border-radius: 8px;
}

.diamond-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 面包屑导航 */
.breadcrumb {
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #000;
}

.breadcrumb-link {
  color: #000;
  text-decoration: none;
  font-weight: 400;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: #666;
}

.breadcrumb-separator {
  color: #000;
  margin: 0 0.5rem;
  font-size: 1rem;
}

.breadcrumb-current {
  color: #000;
  font-weight: bold;
}

/* 宝石详情内容 */
.gem-detail-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: slideIn 0.6s ease-out;
}

.gem-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

/* 宝石信息和图片区域 */
.gem-info-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.gem-main-image {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.gem-img {
  width: 280px;
  height: 280px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.gem-img:hover {
  transform: scale(1.05);
}

.gem-meta {
  text-align: center;
}

.gem-time {
  font-size: 1rem;
  color: #666;
  margin: 0;
}

/* 宝石描述内容 */
.gem-description-section {
  background-color: #f9f9f9;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.gem-description-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.gem-description-text p {
  margin-bottom: 1.5rem;
}

.gem-description-text p:last-child {
  margin-bottom: 0;
}

/* 返回按钮 */
.back-button-container {
  display: flex;
  justify-content: flex-start;
  margin-top: 3rem;
}

.back-button {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #666;
  background-color: #f8f8f8;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.back-button:hover {
  background-color: #e0e0e0;
  color: #333;
  transform: translateX(-3px);
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 响应式设计 */
@media (max-width: 992px) {
  .featured-detail {
    padding: 1.5rem;
  }
  
  .gem-title {
    font-size: 2rem;
  }
  
  .gem-img {
    width: 240px;
    height: 240px;
  }
  
  .gem-description-section {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .featured-detail {
    padding: 1.2rem;
  }
  
  .diamond-banner {
    height: 100px;
  }
  
  .gem-title {
    font-size: 1.8rem;
  }
  
  .gem-img {
    width: 200px;
    height: 200px;
  }
  
  .gem-description-text {
    font-size: 1rem;
  }
  
  .breadcrumb {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .featured-detail {
    padding: 1rem;
  }
  
  .diamond-banner {
    height: 80px;
    margin-bottom: 1.5rem;
  }
  
  .gem-title {
    font-size: 1.5rem;
  }
  
  .gem-main-image {
    padding: 1.5rem;
  }
  
  .gem-img {
    width: 180px;
    height: 180px;
  }
  
  .gem-description-section {
    padding: 1.5rem;
  }
  
  .breadcrumb {
    font-size: 0.75rem;
    margin-bottom: 1.5rem;
  }
  
  .breadcrumb-separator {
    margin: 0 0.3rem;
  }
  
  .back-button {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>