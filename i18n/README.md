# Internacionalización (i18n)

Este proyecto usa `next-intl` para la internacionalización.

## Idiomas soportados

- 🇺🇸 Inglés (en) - idioma por defecto
- 🇪🇸 Español (es)

## Estructura

```
i18n/
├── request.ts      # Configuración de next-intl
├── routing.ts      # Configuración de rutas y navegación
messages/
├── en.json         # Traducciones en inglés
└── es.json         # Traducciones en español
```

## Uso en componentes

### Componentes del servidor

```tsx
import { useTranslations } from 'next-intl';

export default function ServerComponent() {
  const t = useTranslations();
  
  return <h1>{t('common.appName')}</h1>;
}
```

### Componentes del cliente

```tsx
'use client';

import { useTranslations } from 'next-intl';

export default function ClientComponent() {
  const t = useTranslations();
  
  return <h1>{t('common.appName')}</h1>;
}
```

## Navegación

Usa los componentes de navegación de `@/i18n/routing` en lugar de `next/navigation`:

```tsx
import { Link, useRouter, usePathname } from '@/i18n/routing';

// Link
<Link href="/dashboard">Dashboard</Link>

// Router
const router = useRouter();
router.push('/dashboard');

// Pathname
const pathname = usePathname();
```

## Cambiar idioma

Usa el componente `<LanguageSwitcher />` que se encuentra en `components/language-switcher.tsx`.

## Agregar nuevas traducciones

1. Agrega la clave en `messages/en.json`
2. Agrega la traducción en `messages/es.json`
3. Usa la clave con `t('tu.clave')`

## URLs

Las URLs se generan automáticamente:
- `/` - Inglés (idioma por defecto)
- `/es` - Español
- `/es/login` - Login en español
