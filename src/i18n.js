import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    welcome: 'The Local Weather',
    information: 'Information',
    addCity: 'Add City',
    about: 'About',
    aboutText:
      'The Local Weather allows you to track the current and future weather of cities of your choosing.',
    howItWorks: 'How it works',
    searchCity:
      'Search for your city by entering the name into the search bar.',
    selectCity:
      'Select a city within the results, this will take you to the current weather for your selection.',
    trackCity:
      'Track the city by clicking on the "+" icon in the top right. This will save the city to view at a later time on the home page.',
    removingCity: 'Removing a city',
    removeCityText:
      'If you no longer wish to track a city, simply select the city within the home page. At the bottom of the page, there will be an option to delete the city.',
    placeholderSearch: 'Search for a city or state',
    pline15: 'Sorry, something went wrong, please try again.',
    pline19: 'No results match your query, try a different term.',
    pline8:
      'You are currently previewing this city, click the "+" icon to start tracking this city.',
    pline112: 'Remove City',
    feelsLike: 'Feels like',
    dateFormat: {
      weekday: 'short',
      day: '2-digit',
      month: 'long',
    },
    timeFormat: {
      timeStyle: 'short',
    },
    cityLabel: 'City: ',
    h2line51: 'Hourly Weather',
    h2line81: '7 Day Forecast',
    weekday: {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
    },
    pline100: 'H',
    pline101: 'L',
    cityH2line9: 'Loading...',
    cityPline14: 'Please wait while we fetch the data.',
    modalButtonline18: 'Close',
    pcityLine6:
      'No locations added. To start tracking a location, search in the field above.',
  },
  th: {
    welcome: 'The Local Weather',
    information: 'ข้อมูล',
    addCity: 'เพิ่มเมือง',
    about: 'เกี่ยวกับ',
    aboutText:
      'The Local Weather ช่วยให้คุณสามารถติดตามสภาพอากาศปัจจุบันและสภาพอากาศในอนาคตของเมืองที่คุณเลือก',
    howItWorks: 'วิธีใช้',
    searchCity: 'ค้นหาเมืองของคุณโดยการพิมพ์ชื่อเมืองในช่องค้นหา',
    selectCity:
      'เลือกเมืองจากผลลัพธ์ ซึ่งจะพาคุณไปยังสภาพอากาศปัจจุบันของเมืองนั้น',
    trackCity:
      'ติดตามเมืองโดยการคลิกที่ไอคอน "+" ที่มุมขวาบน ซึ่งจะบันทึกเมืองนั้นไว้เพื่อดูในภายหลังที่หน้าหลัก',
    removingCity: 'วิธีลบเมือง',
    removeCityText:
      'หากไม่ต้องการติดตามเมืองนั้น สามารถเลือกเมืองที่ต้องการลบในหน้าหลัก และที่ด้านล่างของหน้าจะมีปุ่มให้ลบเมืองออก',
    placeholderSearch: 'ค้นหาโดยพิมพ์ชื่อเมืองหรือรัฐที่ต้องการ',
    pline15: 'ขออภัย มีบางอย่างผิดพลาด โปรดลองอีกครั้ง',
    pline19: 'ไม่มีผลลัพธ์ที่ตรงกับคำค้นหาของคุณ ลองใช้คำอื่น',
    pline8:
      'คุณกำลังดูตัวอย่างของเมืองนี้อยู่ คลิกที่ไอคอน "+" เพื่อเริ่มติดตามเมืองนี้',
    pline112: 'ลบเมือง',
    feelsLike: 'รู้สึกเหมือน',
    dateFormat: {
      weekday: 'short',
      day: '2-digit',
      month: 'long',
    },
    timeFormat: {
      timeStyle: 'short',
    },
    cityLabel: 'เมือง: ',
    h2line51: 'สภาพอากาศในแต่ละชั่วโมง',
    h2line81: 'พยากรณ์สภาพอากาศใน 7วัน',
    weekday: {
      monday: 'จันทร์',
      tuesday: 'อังคาร',
      wednesday: 'พุธ',
      thursday: 'พฤหัสบดี',
      friday: 'ศุกร์',
      saturday: 'เสาร์',
      sunday: 'อาทิตย์',
    },
    pline100: 'สูง',
    pline101: 'ต่ำ',
    cityH2line9: 'กำลังโหลด...',
    cityPline14: 'โปรดรอสักครู่ในขณะที่เราดึงข้อมูล',
    modalButtonline18: 'ปิด',
    pcityLine6:
      'ไม่มีการเพิ่มสถานที่ หากต้องการเริ่มติดตามตำแหน่ง ให้ค้นหาในช่องด้านบน',
  },
}

const savedLang = localStorage.getItem('language') || 'en' // โหลดภาษาที่เก็บไว้จาก localStorage (ถ้าไม่มีให้ใช้ค่าเริ่มต้น 'en')

const i18n = createI18n({
  locale: savedLang, // ตั้งค่าภาษาจาก localStorage
  messages,
})

export default i18n
