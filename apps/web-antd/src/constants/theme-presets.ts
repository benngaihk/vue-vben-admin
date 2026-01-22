/**
 * Theme Presets Configuration
 * Defines the 4 distinct styles for one-click switching
 */

export const themePresets = {
  apple: {
    label: 'Apple Style',
    icon: 'ph:apple-logo',
    config: {
      app: {
        layout: 'header-sidebar-nav'
      },
      navigation: {
        split: false,
        accordion: true,
      },
      sidebar: {
        width: 250, // Standard macOS sidebar width
        collapsed: false,
        expandOnHover: true,
      },
      header: {
        height: 52, // Slightly shorter, more compact like native toolbar
      },
      theme: {
        radius: '0.75', // 12px
        semiDarkSidebar: false,
        semiDarkHeader: false,
        colorPrimary: '#007AFF', // iOS Blue
      },
      footer: {
        enable: false,
      },
      breadcrumb: {
        enable: false,
        showIcon: false,
      },
      tabbar: {
        enable: false,
      }
    }
  },
  google: {
    label: 'Google Material 3',
    icon: 'ph:google-logo',
    config: {
      app: {
        layout: 'header-sidebar-nav'
      },
      navigation: {
        styleType: 'sidebar', // M3 usually uses a sidebar drawer
        split: false,
        accordion: true,
      },
      sidebar: {
        width: 300, // M3 Navigation Drawer is wider (standard 360dp on tablet, but 300 is good for web)
        collapsed: false,
        expandOnHover: true,
      },
      header: {
        height: 64, // Standard M3 Top App Bar height
      },
      theme: {
        radius: '1.0', // 16px (M3 Large rounded)
        semiDarkSidebar: false, // CSS handles the surface color, avoid JS forcing contrast
        semiDarkHeader: true,   // Keep this to ensure text contrast logic works for the dark header
        colorPrimary: '#0b57d0', // M3 Blue
      },
      footer: {
        enable: true,
        fixed: true,
      },
      breadcrumb: {
        enable: true,
        showIcon: true,
      },
      tabbar: {
        enable: false,
      }
    }
  },
  modern: {
    label: 'Modern SaaS',
    icon: 'ph:monitor',
    config: {
      app: {
        layout: 'header-sidebar-nav'
      },
      navigation: {
        styleType: 'sidebar',
        split: false,
        accordion: true,
      },
      sidebar: {
        width: 240,
        collapsed: true, // Default collapsed for "Focus" mode
        expandOnHover: true,
      },
      header: {
        height: 48, // Dense
      },
      theme: {
        radius: '0.375', // 6px
        semiDarkSidebar: false, // Crucial: This triggers the dark sidebar variables in Vben
        semiDarkHeader: false,
        colorPrimary: '#6366F1', // Zinc-900 (Black) - Matches CSS
        colorSuccess: '#10b981', // Emerald
        colorWarning: '#f59e0b', // Amber
        colorError: '#ef4444',   // Red
      },
      footer: {
        enable: false,
      },
      breadcrumb: {
        enable: true,
        showIcon: false,
      },
      tabbar: {
        enable: false,
        persist: true,
        styleType: 'brisk', // Minimalist tabs
      },
      transition: {
        enable: true,
        name: 'fade-slide', // Technical transition
      }
    }
  },
  brutal: {
    label: 'Neo-Brutalism',
    icon: 'ph:lightning',
    config: {
      app: {
        layout: 'sidebar-nav'  // 标准侧边栏布局
      },
      navigation: {
        styleType: 'sidebar',
        split: false,
        accordion: false, // Neo-Brutalism 不使用手风琴折叠
      },
      sidebar: {
        width: 280,
        collapsed: false,
        expandOnHover: false,
      },
      header: {
        height: 72, // Chunky header
      },
      theme: {
        radius: '0', // 0px Hard edges
        semiDarkSidebar: false,
        semiDarkHeader: false,
        colorPrimary: '#00f0ff', // Cyan (High Contrast) - Matches CSS selection
        colorSuccess: '#00ff88', // Neon Green
        colorWarning: '#ffff00', // Bright Yellow
        colorError: '#ff3366',   // Hot Pink
      },
      footer: {
        enable: true,
      },
      breadcrumb: {
        enable: true,
        showIcon: true,
      },
      tabbar: {
        enable: true,
        showRefresh: false,
        styleType: 'chrome', // Blocky tabs
      },
      transition: {
        enable: false, // NO transition is part of the brutalist aesthetic
      }
    }
  }
};
