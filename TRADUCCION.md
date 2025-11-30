# Guía de Traducción - Lyo

## 🌍 Sistema de Internacionalización

Tu aplicación ahora tiene soporte completo para múltiples idiomas usando `next-intl`.

## 📁 Archivos de Traducción

Las traducciones están en la carpeta `messages/`:

- `messages/en.json` - Inglés (idioma por defecto)
- `messages/es.json` - Español

## 🔧 Cómo Usar las Traducciones

### En Componentes del Cliente

```tsx
'use client';

import { useTranslations } from 'next-intl';

export default function MiComponente() {
  const t = useTranslations();
  
  return (
    <div>
      <h1>{t('common.appName')}</h1>
      <p>{t('login.title')}</p>
    </div>
  );
}
```

### En Componentes del Servidor

```tsx
import { useTranslations } from 'next-intl';

export default function MiComponente() {
  const t = useTranslations();
  
  return <h1>{t('common.appName')}</h1>;
}
```

### Navegación con i18n

Usa los componentes de `@/i18n/routing` en lugar de `next/navigation`:

```tsx
import { Link, useRouter } from '@/i18n/routing';

// Links
<Link href="/dashboard">Dashboard</Link>

// Navegación programática
const router = useRouter();
router.push('/dashboard');
```

## 📝 Agregar Nuevas Traducciones

### 1. Agrega la clave en inglés (`messages/en.json`):

```json
{
  "dashboard": {
    "welcome": "Welcome to your dashboard",
    "newMessage": "New message"
  }
}
```

### 2. Agrega la traducción en español (`messages/es.json`):

```json
{
  "dashboard": {
    "welcome": "Bienvenido a tu panel",
    "newMessage": "Nuevo mensaje"
  }
}
```

### 3. Usa la traducción en tu componente:

```tsx
const t = useTranslations();
<h1>{t('dashboard.welcome')}</h1>
```

## 🎨 Selector de Idioma

El componente `<LanguageSwitcher />` ya está integrado en el header. Los usuarios pueden cambiar entre inglés y español fácilmente.

## 🌐 URLs

Las URLs se generan automáticamente:

- `/` → Inglés (por defecto)
- `/es` → Español
- `/login` → Login en inglés
- `/es/login` → Login en español
- `/dashboard` → Dashboard en inglés
- `/es/dashboard` → Dashboard en español

## 📋 Estructura Actual de Traducciones

```json
{
  "common": {
    "appName": "Lyo",
    "tagline": "...",
    "backToHome": "...",
    "copyright": "..."
  },
  "login": {
    "title": "...",
    "subtitle": "...",
    "continueWithGoogle": "...",
    "signingIn": "...",
    "secureLogin": "...",
    "agreement": "...",
    "termsOfUse": "...",
    "and": "...",
    "privacyPolicy": "..."
  },
  "landing": {
    "hero": {
      "title": "...",
      "subtitle": "...",
      "cta": "...",
      "secondaryCta": "..."
    }
  }
}
```

## 🚀 Próximos Pasos

1. **Traduce todos los componentes de landing** - Agrega las claves necesarias en `messages/en.json` y `messages/es.json`
2. **Traduce el dashboard** - Agrega secciones para inbox, contacts, calendar, etc.
3. **Traduce mensajes de error** - Agrega una sección `errors` en los archivos de traducción
4. **Traduce formularios** - Agrega validaciones y labels de formularios

## 💡 Ejemplo Completo

```tsx
// components/mi-componente.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export function MiComponente() {
  const t = useTranslations();
  
  return (
    <div>
      <h1>{t('dashboard.welcome')}</h1>
      <Link href="/inbox">
        {t('dashboard.goToInbox')}
      </Link>
    </div>
  );
}
```

## 🔍 Verificar Traducciones

Para verificar que todas las traducciones están correctas:

1. Inicia el servidor: `pnpm dev`
2. Visita `http://localhost:3000` (inglés)
3. Visita `http://localhost:3000/es` (español)
4. Usa el selector de idioma en el header para cambiar entre idiomas

## 📚 Documentación

- [next-intl docs](https://next-intl-docs.vercel.app/)
- Archivo de configuración: `i18n/routing.ts`
- Middleware: `middleware.ts`
