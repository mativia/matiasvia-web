# 📧 Configuración de EmailJS para el Formulario de Contacto

## 🚀 Pasos para configurar EmailJS (GRATIS)

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Regístrate con tu email
3. Confirma tu cuenta

### 2. Crear un servicio de email
1. En el dashboard, ve a **"Email Services"**
2. Click **"Add New Service"**
3. Selecciona tu proveedor de email:
   - **Gmail** (recomendado para uso personal)
   - **Outlook**
   - **Yahoo**
   - Otros
4. Conecta tu cuenta de email
5. **Copia el Service ID** que aparece

### 3. Crear template de email
1. Ve a **"Email Templates"**
2. Click **"Create New Template"**
3. Usa este template:

```
Subject: Nuevo mensaje desde tu portfolio - {{subject}}

De: {{name}} ({{email}})
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu portfolio web.
```

4. **Copia el Template ID**

### 4. Obtener Public Key
1. Ve a **"Account"** → **"General"**
2. **Copia tu Public Key**

### 5. Configurar en tu código
Edita el archivo `src/components/Contact.astro` y reemplaza:

```javascript
const EMAIL_SERVICE_ID = 'YOUR_SERVICE_ID'; // ← Pegar tu Service ID
const EMAIL_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // ← Pegar tu Template ID  
const EMAIL_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // ← Pegar tu Public Key
```

### 6. ¡Listo! 🎉
- Los mensajes del formulario llegaran a tu email
- EmailJS es gratis hasta 200 emails/mes
- Los emails llegan instantáneamente

## 🔧 Alternativas si prefieres otro método:

### **Opción 2: Netlify Forms** (si deployeas en Netlify)
- Agregar `netlify` al atributo del form
- Los mensajes aparecen en tu dashboard de Netlify

### **Opción 3: Formspree** 
- Servicio similar a EmailJS
- Gratis hasta 50 envíos/mes

### **Opción 4: Backend propio**
- Crear API con Node.js/Express
- Usar nodemailer para enviar emails
- Más complejo pero mayor control

## 📝 Notas importantes:
- **Los emails llegan a tu bandeja de entrada real**
- **Incluye validación de spam automática**
- **Compatible con todos los proveedores de email**
- **Funciona desde cualquier hosting estático**

¿Necesitas ayuda configurando EmailJS? ¡Solo dime y te guío paso a paso!