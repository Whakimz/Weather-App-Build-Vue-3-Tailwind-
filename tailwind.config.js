/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{html,vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // กำหนดสีหลักที่เหมาะกับการดูสภาพอากาศ
        'weather-primary': '#00668A', // สีฟ้าเข้ม
        'weather-secondary': '#004E71', // สีน้ำเงินเข้ม
        'weather-sunny': '#FFD700', // สีทองสำหรับสภาพอากาศร้อน/แดด
        'weather-rainy': '#1E90FF', // สีฟ้าอ่อนสำหรับฝน
        'weather-cloudy': '#B0C4DE', // สีเทาสำหรับเมฆ
        'weather-cold': '#00BFFF', // สีน้ำเงินอ่อนสำหรับสภาพอากาศเย็น
        'weather-hot': '#FF6347', // สีแดงสำหรับสภาพอากาศร้อน
      },
      fontFamily: {
        // เปลี่ยนเป็นฟอนต์ Kanit
        Roboto: ['Kanit', 'sans-serif'],
      },
    },
    container: {
      padding: '2rem',
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
    },
  },
  plugins: [daisyui], // ใช้ DaisyUI
}
