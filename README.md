# boxbox – App móvil (Expo SDK 53)

## Cómo usar
1. Instalar dependencias:
   ```bash
   npm i
   ```
2. Ajustar Firebase en `src/services/firebase.ts` (apiKey, authDomain, etc.).
3. Correr en Android (debug):
   ```bash
   npm run android
   ```
4. Build en la nube (APK/AAB) con EAS:
   ```bash
   npm i -g eas-cli
   expo login
   eas build --platform android --profile preview
   ```

## Estructura
- Splash + arranque en Login
- Tabs: Predicciones, Torneos, Ranking, Perfil
- Auth con Firebase

> Origen web: proyecto detectado en `package.json`.
