import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      hello: 'Welcome back',
      scansToday: 'Scans Today',
      successRate: 'Success Rate',
      scanActivity: 'Scan Activity',
      readyToScan: 'Ready to Scan',
      scanPest: 'Scan Pest'
    }
  },
  es: {
    message: {
      hello: 'Bienvenido',
      scansToday: 'Escaneos de Hoy',
      successRate: 'Tasa de Éxito',
      scanActivity: 'Actividad',
      readyToScan: 'Listo para escanear',
      scanPest: 'Escanear Plaga'
    }
  },
  hi: {
    message: {
      hello: 'वापसी पर स्वागत है',
      scansToday: 'आज के स्कैन',
      successRate: 'सफलता दर',
      scanActivity: 'स्कैन गतिविधि',
      readyToScan: 'स्कैन के लिए तैयार',
      scanPest: 'कीट स्कैन करें'
    }
  }
}

export const i18n = createI18n({
  legacy: false, 
  locale: 'en', // default
  fallbackLocale: 'en',
  messages,
})
