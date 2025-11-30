# 🤖 Chat Interface con AI Elements

## ✅ Implementación Completa

Se ha implementado una interfaz de chat profesional usando los componentes de **Vercel AI Elements** con funcionalidad mockup.

## 🎨 Características

### ✅ Componentes AI Elements Utilizados

1. **Conversation** - Contenedor principal de mensajes
2. **Message** - Mensajes individuales con soporte para:
   - Múltiples versiones (branches)
   - Sources (fuentes de información)
   - Reasoning (razonamiento del AI)
   - Tools (herramientas utilizadas)
3. **PromptInput** - Input avanzado con:
   - Adjuntar archivos (drag & drop)
   - Botón de micrófono
   - Búsqueda web
   - Selector de modelos
4. **ModelSelector** - Selector de modelos AI:
   - OpenAI (GPT-4o, GPT-4o Mini)
   - Anthropic (Claude 4 Opus, Claude 4 Sonnet)
   - Google (Gemini 2.0 Flash)
5. **Suggestions** - Sugerencias de prompts

### ✅ Funcionalidad Mockup

- ✅ **Streaming de respuestas** simulado
- ✅ **Múltiples versiones** de mensajes (branches)
- ✅ **Respuestas automáticas** con delay realista
- ✅ **Sugerencias interactivas** clickeables
- ✅ **Selector de modelos** funcional
- ✅ **Adjuntar archivos** con toast notification
- ✅ **Botones de herramientas** (Mic, Search)

## 📁 Estructura

```
app/[locale]/(dashboard)/dashboard/agent/
└── page.tsx                    # Página principal con AI Elements

components/ai-elements/         # Componentes de Vercel AI SDK
├── conversation/
├── message/
├── prompt-input/
├── model-selector/
├── reasoning/
├── sources/
└── suggestion/
```

## 🚀 Cómo Usar

### 1. Acceder a la Interfaz

```bash
pnpm dev
```

Navega a: `http://localhost:3000/dashboard/agent`

### 2. Interactuar con el Chat

- **Escribir mensaje**: Escribe en el textarea y presiona Enter o click en enviar
- **Sugerencias**: Click en cualquier sugerencia para enviarla
- **Cambiar modelo**: Click en el selector de modelo (ej: "GPT-4o")
- **Adjuntar archivos**: Click en el botón de adjuntar o drag & drop
- **Activar búsqueda**: Click en el botón "Search"
- **Activar micrófono**: Click en el botón de micrófono

## 🎯 Características Principales

### Mensajes con Branches

Los mensajes pueden tener múltiples versiones:

```tsx
{
  key: "msg-1",
  from: "user",
  versions: [
    { id: "v1", content: "Primera versión" },
    { id: "v2", content: "Segunda versión" },
    { id: "v3", content: "Tercera versión" },
  ]
}
```

Navega entre versiones con los botones Previous/Next.

### Sources (Fuentes)

Los mensajes del asistente pueden incluir fuentes:

```tsx
sources: [
  {
    href: "https://react.dev/reference/react",
    title: "React Documentation",
  },
]
```

### Reasoning (Razonamiento)

Muestra el proceso de razonamiento del AI:

```tsx
reasoning: {
  content: "El usuario está preguntando sobre...",
  duration: 10,
}
```

### Tools (Herramientas)

Muestra las herramientas que el AI utilizó:

```tsx
tools: [
  {
    name: "mcp",
    description: "Searching React documentation",
    status: "input-available",
    parameters: { query: "React hooks" },
    result: "...",
  },
]
```

## 🎨 Personalización

### Agregar Más Modelos

Edita el array `models`:

```tsx
const models = [
  {
    id: "tu-modelo",
    name: "Tu Modelo",
    chef: "Proveedor",
    chefSlug: "proveedor",
    providers: ["proveedor"],
  },
  // ...
];
```

### Cambiar Sugerencias

Edita el array `suggestions`:

```tsx
const suggestions = [
  "Tu sugerencia personalizada",
  "Otra sugerencia",
  // ...
];
```

### Modificar Respuestas Mockup

Edita el array `mockResponses`:

```tsx
const mockResponses = [
  "Tu respuesta personalizada...",
  // ...
];
```

## 🔧 Funcionalidad Mockup

### Streaming Simulado

```tsx
const streamResponse = useCallback(async (messageId: string, content: string) => {
  const words = content.split(" ");
  for (let i = 0; i < words.length; i++) {
    // Simula streaming palabra por palabra
    await new Promise((resolve) => 
      setTimeout(resolve, Math.random() * 100 + 50)
    );
  }
}, []);
```

### Respuestas Automáticas

```tsx
const addUserMessage = useCallback((content: string) => {
  // Agrega mensaje del usuario
  setMessages((prev) => [...prev, userMessage]);
  
  // Simula respuesta del asistente después de 500ms
  setTimeout(() => {
    const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
    streamResponse(assistantMessageId, randomResponse);
  }, 500);
}, []);
```

## 📊 Componentes AI Elements

### Conversation

```tsx
<Conversation>
  <ConversationContent>
    {/* Mensajes aquí */}
  </ConversationContent>
  <ConversationScrollButton />
</Conversation>
```

### Message

```tsx
<Message from="user" | "assistant">
  <MessageContent>
    <MessageResponse>{content}</MessageResponse>
  </MessageContent>
</Message>
```

### PromptInput

```tsx
<PromptInput onSubmit={handleSubmit}>
  <PromptInputHeader>
    <PromptInputAttachments />
  </PromptInputHeader>
  
  <PromptInputBody>
    <PromptInputTextarea />
  </PromptInputBody>
  
  <PromptInputFooter>
    <PromptInputTools>
      {/* Botones de herramientas */}
    </PromptInputTools>
    <PromptInputSubmit />
  </PromptInputFooter>
</PromptInput>
```

### ModelSelector

```tsx
<ModelSelector open={open} onOpenChange={setOpen}>
  <ModelSelectorTrigger>
    <ModelSelectorLogo provider="openai" />
    <ModelSelectorName>GPT-4o</ModelSelectorName>
  </ModelSelectorTrigger>
  
  <ModelSelectorContent>
    <ModelSelectorInput />
    <ModelSelectorList>
      {/* Items aquí */}
    </ModelSelectorList>
  </ModelSelectorContent>
</ModelSelector>
```

## 🎯 Ventajas de AI Elements

### ✅ Componentes Pre-construidos
- No necesitas crear UI desde cero
- Diseño profesional y consistente
- Optimizados para AI chat

### ✅ Funcionalidades Avanzadas
- Message branches (múltiples versiones)
- Sources y reasoning
- Tool calling visualization
- Drag & drop para archivos

### ✅ Responsive
- Funciona en mobile, tablet y desktop
- Adaptación automática de layout

### ✅ Accesible
- ARIA labels
- Keyboard navigation
- Screen reader support

## 🚀 Próximos Pasos

### Para Conectar con API Real

1. **Instalar SDK de AI**:
```bash
pnpm add @ai-sdk/openai
```

2. **Crear API Route**:
```tsx
// app/api/chat/route.ts
import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

export async function POST(req: Request) {
  const { messages } = await req.json()
  
  const result = streamText({
    model: openai('gpt-4-turbo'),
    messages,
  })
  
  return result.toDataStreamResponse()
}
```

3. **Usar useChat Hook**:
```tsx
import { useChat } from 'ai/react'

const { messages, input, handleSubmit } = useChat({
  api: '/api/chat'
})
```

## 📚 Recursos

- [AI Elements Docs](https://ai-sdk.dev/elements)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)
- [OpenAI API](https://platform.openai.com/docs)

## 💡 Tips

### Performance
- Los componentes AI Elements están optimizados
- El streaming simulado es eficiente
- No hay re-renders innecesarios

### UX
- Las sugerencias ayudan a los usuarios a empezar
- El streaming hace la experiencia más natural
- Los branches permiten explorar diferentes respuestas

### Personalización
- Todos los componentes aceptan className
- Puedes sobrescribir estilos con Tailwind
- Los colores se adaptan al tema (dark/light)

---

**¡Tu interfaz de chat con AI Elements está lista! 🎉**

Esta es una implementación mockup perfecta para desarrollo y demos. Cuando estés listo, puedes conectarla con una API real siguiendo los pasos en "Próximos Pasos".
