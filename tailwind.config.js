/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          colors: {
            primary: '#EC008C',
            coral: '#FF6B9D',
            teal: '#2DD4BF',
            purple: '#7F3F98',
            orange: '#F7941D',
            dark: '#1F2937',
            'dark-light': '#374151',
            light: '#F9FAFB',
            'light-gray': '#E5E7EB',
            bg: '#FEF2F8',
            'bg-alt': '#F3E8FF',
            text: '#1F2937',
            muted: '#6B7280',
            // Vibrant gradient colors
            'vibrant-pink': '#FCE7F3',
            'vibrant-purple': '#E9D5FF',
            'vibrant-teal': '#CCFBF1',
            'vibrant-orange': '#FFEDD5',
          },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #EC008C 0%, #FF6B9D 50%, #2DD4BF 100%)',
        'gradient-warm': 'linear-gradient(135deg, #F7941D 0%, #EC008C 100%)',
        'gradient-cool': 'linear-gradient(135deg, #7F3F98 0%, #2DD4BF 100%)',
        'gradient-radial': 'radial-gradient(circle at top right, #EC008C, #FF6B9D, #2DD4BF)',
        'gradient-vibrant-pink': 'linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 50%, #F9A8D4 100%)',
        'gradient-vibrant-purple': 'linear-gradient(135deg, #E9D5FF 0%, #DDD6FE 50%, #C4B5FD 100%)',
        'gradient-vibrant-teal': 'linear-gradient(135deg, #CCFBF1 0%, #99F6E4 50%, #5EEAD4 100%)',
        'gradient-vibrant-orange': 'linear-gradient(135deg, #FFEDD5 0%, #FED7AA 50%, #FDBA74 100%)',
        'gradient-animated-1': 'linear-gradient(135deg, #EC008C 0%, #FF6B9D 25%, #2DD4BF 50%, #7F3F98 75%, #F7941D 100%)',
        'gradient-animated-2': 'linear-gradient(135deg, #7F3F98 0%, #EC008C 25%, #F7941D 50%, #2DD4BF 75%, #FF6B9D 100%)',
        'mixed-vibrant-1': 'linear-gradient(135deg, #FCE7F3 0%, #E9D5FF 30%, #CCFBF1 60%, #FFEDD5 100%)',
        'mixed-vibrant-2': 'linear-gradient(135deg, #CCFBF1 0%, #FCE7F3 30%, #FFEDD5 60%, #E9D5FF 100%)',
        'mixed-vibrant-3': 'linear-gradient(135deg, #E9D5FF 0%, #CCFBF1 30%, #FCE7F3 60%, #FFEDD5 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(236, 0, 140, 0.3)',
        'glow-lg': '0 0 40px rgba(236, 0, 140, 0.4)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
