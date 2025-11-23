<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <div class="logo">
        <router-link to="/">
          <span class="logo-text">GRA</span>
        </router-link>
      </div>
      
      <!-- Desktop Navigation -->
      <div class="nav-links">
        <router-link to="/" class="nav-link">HOME</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/news" class="nav-link">News</router-link>
        <router-link to="/featured" class="nav-link">Featured</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </div>
      
      <!-- Mobile Menu Button -->
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <span class="menu-icon"></span>
      </button>
    </div>
    
    <!-- Mobile Navigation -->
    <div class="mobile-nav" v-if="mobileMenuOpen">
      <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">HOME</router-link>
      <router-link to="/about" class="mobile-nav-link" @click="closeMobileMenu">About</router-link>
      <router-link to="/news" class="mobile-nav-link" @click="closeMobileMenu">News</router-link>
      <router-link to="/featured" class="mobile-nav-link" @click="closeMobileMenu">Featured</router-link>
      <router-link to="/contact" class="mobile-nav-link" @click="closeMobileMenu">Contact</router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1rem 0;
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--secondary-color);
  position: relative;
  padding-left: 2rem;
}

.logo-text::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-color: #d4af37;
  border-radius: 50%;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIvPjwvc3ZnPg==');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-icon {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--secondary-color);
  position: relative;
  transition: background-color 0.3s ease;
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: var(--secondary-color);
  transition: transform 0.3s ease;
}

.menu-icon::before {
  top: -6px;
}

.menu-icon::after {
  bottom: -6px;
}

.mobile-nav {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
}

.mobile-nav-link {
  display: block;
  padding: 1rem 2rem;
  font-size: 1rem;
  color: var(--secondary-color);
  text-align: center;
  border-bottom: 1px solid var(--border-color);
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

.mobile-nav-link:hover {
  background-color: #f9f9f9;
  color: var(--primary-color);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .mobile-nav {
    display: block;
  }
  
  .navbar-container {
    padding: 0 1rem;
  }
}
</style>