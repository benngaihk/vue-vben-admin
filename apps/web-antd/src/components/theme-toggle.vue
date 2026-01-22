<script lang="ts" setup>
import { Dropdown, Menu, MenuItem, Tooltip, MenuDivider } from 'ant-design-vue';
import { themePresets } from '#/constants/theme-presets';
import { updatePreferences } from '@vben/preferences';
import { SkinOutlined, UndoOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';

defineOptions({
  name: 'ThemeToggle',
});

function applyTheme(key: string) {
  const preset = themePresets[key as keyof typeof themePresets];
  if (preset && preset.config) {
    updatePreferences(preset.config as any);
    
    // Clear all theme classes
    document.documentElement.classList.remove('theme-apple', 'theme-google', 'theme-modern', 'theme-brutal');

    // Add specific theme class
    if (['apple', 'google', 'modern', 'brutal'].includes(key)) {
      document.documentElement.classList.add(`theme-${key}`);
    }
    
    message.success(`已应用 ${preset.label} 风格`);
  }
}

function handleReset() {
  document.documentElement.classList.remove('theme-apple', 'theme-google', 'theme-modern', 'theme-brutal');
  updatePreferences({
    navigation: {
      styleType: 'sidebar',
      split: false,
      accordion: true,
    },
    sidebar: {
      width: 224,
      collapsed: false,
      expandOnHover: true,
    },
    header: {
      height: 48,
    },
    theme: {
      radius: '0.375',
      semiDarkSidebar: false,
      semiDarkHeader: false,
      colorPrimary: '#1677ff',
    },
    tabbar: {
      persist: false,
    },
    transition: {
      enable: true,
       name: 'fade-slide',
    }
  } as any);
  message.success('已还原默认风格');
}
</script>

<template>
  <div class="flex items-center">
    <Dropdown placement="bottomRight" :trigger="['click']">
      <div
        class="flex h-full cursor-pointer items-center justify-center px-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
      >
        <Tooltip title="切换主题风格">
          <SkinOutlined class="text-lg" />
        </Tooltip>
      </div>
      <template #overlay>
        <Menu>
          <MenuItem
            v-for="(theme, key) in themePresets"
            :key="key"
            @click="applyTheme(key as string)"
          >
            <div class="flex items-center gap-2">
              <span class="font-medium">{{ theme.label }}</span>
            </div>
          </MenuItem>
          <MenuDivider />
          <MenuItem key="reset" @click="handleReset">
             <div class="flex items-center gap-2 text-red-500">
              <UndoOutlined />
              <span class="font-medium">还原默认 (Reset)</span>
            </div>
          </MenuItem>
        </Menu>
      </template>
    </Dropdown>
  </div>
</template>
