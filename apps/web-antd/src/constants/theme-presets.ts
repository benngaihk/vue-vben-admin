/**
 * Theme Presets Configuration
 * Defines the 4 distinct styles for one-click switching
 */

export const themePresets = {
  apple: {
    label: 'Apple Style',
    icon: 'ph:apple-logo',
    config: {
      navigation: {
        styleType: 'sidebar',
        split: false,
        accordion: true,
      },
      sidebar: {
        width: 260,
        collapsed: false,
        expandOnHover: false,
      },
      header: {
        height: 56,
      },
      theme: {
        radius: '0.625', // 10px
        semiDarkSidebar: false,
        semiDarkHeader: false,
        colorPrimary: '#007AFF',
      },
      footer: {
        enable: false,
      },
      breadcrumb: {
        enable: true,
        showIcon: false,
      },
    }
  },
  google: {
    label: 'Google Material 3',
    icon: 'ph:google-logo',
    config: {
      navigation: {
        styleType: 'mixed',
        split: true,
        accordion: false,
      },
      sidebar: {
        width: 256,
        collapsed: false,
        expandOnHover: true,
      },
      header: {
        height: 64,
      },
      theme: {
        radius: '0.75', // 12px
        semiDarkSidebar: false,
        semiDarkHeader: true,
        colorPrimary: '#4285F4',
      },
      footer: {
        enable: true,
        fixed: true,
      },
      breadcrumb: {
        enable: true,
        showIcon: true,
      },
    }
  },
  modern: {
    label: 'Modern SaaS',
    icon: 'ph:monitor',
    config: {
      navigation: {
        styleType: 'sidebar',
        split: false,
      },
      sidebar: {
        width: 240,
        collapsed: true, // Default collapsed
        expandOnHover: true,
      },
      header: {
        height: 48,
      },
      theme: {
        radius: '0.5', // 8px
        semiDarkSidebar: true,
        semiDarkHeader: false,
        colorPrimary: '#6366F1',
      },
      tabbar: {
        persist: true,
      },
      transition: {
        enable: true,
        name: 'fade',
      }
    }
  },
  brutal: {
    label: 'Neo-Brutalism',
    icon: 'ph:lightning',
    config: {
      navigation: {
        styleType: 'sidebar',
        split: false,
      },
      sidebar: {
        width: 280,
      },
      header: {
        height: 64,
      },
      theme: {
        radius: '0', // 0px
        semiDarkSidebar: false,
        semiDarkHeader: false,
        colorPrimary: '#FFD027',
      },
      tabbar: {
        showRefresh: false,
      },
      transition: {
        enable: false, // immediate
      }
    }
  }
};
