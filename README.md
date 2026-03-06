# AquaShield - Smart Cloth Drying System 🌤️

<div align="center">
  <img src="./assets/AquaSheild_logo.png" alt="AquaShield Logo" width="200"/>
  
  <p><strong>Smart drying made simple and efficient</strong></p>
  
  [![React Native](https://img.shields.io/badge/React%20Native-0.81.5-61DAFB?logo=react)](https://reactnative.dev/)
  [![Expo](https://img.shields.io/badge/Expo-~54.0-000020?logo=expo)](https://expo.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

---

## 📱 About The Project

**AquaShield** is an intelligent mobile application designed to control and monitor your smart cloth drying system. With real-time weather analytics and automated system controls, AquaShield ensures your clothes are dried efficiently and effectively, protecting them from moisture damage while saving energy.

### 🎯 Key Features

- **🔐 Authentication System**
  - Secure user login and registration
  - Token-based authentication
  - Persistent sessions with AsyncStorage

- **🎓 Interactive Onboarding**
  - Beautiful welcome screens
  - Feature highlights
  - Easy-to-understand user guide

- **🏠 Smart Home Control**
  - Manual fold/unfold system control
  - Real-time system status monitoring
  - Temperature and humidity tracking
  - Quick action controls

- **📊 Weather Analytics Dashboard**
  - Estimated dry time prediction
  - Wind speed monitoring
  - Humidity levels
  - Sunlight intensity
  - UV index tracking
  - Temperature readings

- **👤 User Profile Management**
  - Profile customization
  - Settings management
  - App preferences
  - Secure logout

---

## 🖼️ Application Screenshots

### Onboarding & Authentication
<div align="center">
  <img src="./screenshots/onboarding.png" alt="Onboarding" width="250"/>
  <img src="./screenshots/login.png" alt="Login" width="250"/>
  <img src="./screenshots/register.png" alt="Register" width="250"/>
</div>

### Main Features
<div align="center">
  <img src="./screenshots/home.png" alt="Home" width="250"/>
  <img src="./screenshots/analytics.png" alt="Analytics" width="250"/>
  <img src="./screenshots/profile.png" alt="Profile" width="250"/>
</div>

> **Note:** Add your application screenshots in the `screenshots/` directory for better documentation.

---

## 🛠️ Tech Stack

### Core Technologies
- **React Native** (0.81.5) - Cross-platform mobile development
- **Expo** (~54.0) - Development platform and framework
- **TypeScript** (5.9.2) - Type-safe JavaScript

### Navigation & Routing
- **Expo Router** (6.0.22) - File-based navigation system
- **React Navigation** - Screen navigation management

### State Management
- **Zustand** (5.0.11) - Lightweight state management
- **AsyncStorage** (2.2.0) - Persistent local storage

### UI & Styling
- **NativeWind** - Tailwind CSS for React Native
- **Expo Linear Gradient** - Gradient backgrounds
- **Ionicons** - Icon library

### Networking
- **Axios** (1.13.4) - HTTP client for API calls

### Development Tools
- **Babel** - JavaScript compiler
- **Metro** - JavaScript bundler

---

## 📁 Project Structure

```
mobile/
├── app/                          # Application screens (Expo Router)
│   ├── _layout.tsx              # Root layout configuration
│   ├── index.tsx                # Entry point / Splash screen
│   ├── (auth)/                  # Authentication screens
│   │   ├── _layout.tsx
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── (tabs)/                  # Main app tabs
│   │   ├── _layout.tsx
│   │   ├── home.tsx             # System control dashboard
│   │   ├── analytics.tsx        # Weather & analytics
│   │   └── profile.tsx          # User profile
│   └── onboarding/              # Onboarding flow
│       ├── _layout.tsx
│       └── index.tsx
├── src/
│   ├── components/              # Reusable UI components
│   ├── context/
│   │   └── AuthContext.tsx      # Authentication context
│   ├── services/
│   │   ├── authService.ts       # Authentication API calls
│   │   └── axiosConfig.ts       # API configuration
│   ├── store/
│   │   └── authStore.ts         # Zustand auth store
│   └── utils/
│       └── storage.ts           # Storage utilities
├── assets/                      # Images and static assets
│   ├── AquaSheild_logo.png
│   └── onboard.png
├── app.json                     # Expo configuration
├── package.json                 # Dependencies
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── babel.config.js             # Babel configuration
```

---

## 🚀 Getting Started

### Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Expo CLI** (installed globally)
- **Android Studio** (for Android development) or **Xcode** (for iOS development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/aquashield-mobile.git
   cd aquashield-mobile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Configure the backend API**
   
   Open `src/services/axiosConfig.ts` and update the API URL:
   
   ```typescript
   // For Android Emulator
   const BASE_URL = 'http://10.0.2.2:5000/api';
   
   // For iOS Simulator
   const BASE_URL = 'http://localhost:5000/api';
   
   // For Physical Device (replace with your computer's IP)
   const BASE_URL = 'http://192.168.1.XXX:5000/api';
   ```

4. **Start the development server**
   ```bash
   npm start
   ```
   or
   ```bash
   npx expo start
   ```

5. **Run on your device**
   - Press `a` for Android
   - Press `i` for iOS
   - Scan QR code with Expo Go app on your phone

---

## 📱 Running the App

### On Android Emulator
```bash
npm run android
```

### On iOS Simulator (Mac only)
```bash
npm run ios
```

### On Web Browser
```bash
npm run web
```

---

## ⚙️ Configuration

### Environment Setup

Configure the following for your environment:

1. **Backend API URL** - Update in `src/services/axiosConfig.ts`
2. **App Name** - Modify in `app.json`
3. **App Icons** - Replace images in `assets/` directory
4. **Color Scheme** - Customize in `tailwind.config.js`

### Finding Your Local IP Address

**Windows:**
```bash
ipconfig
```
Look for "IPv4 Address" under your active network adapter.

**Mac/Linux:**
```bash
ifconfig
```
Look for "inet" address under your active network interface.

---

## 🔧 Build for Production

### Android (APK)
```bash
eas build --platform android --profile preview
```

### iOS (IPA)
```bash
eas build --platform ios --profile preview
```

### App Store Builds
```bash
eas build --platform all --profile production
```

---

## 🎨 Customization

### Modifying Colors
Edit the gradient colors in each screen's `LinearGradient` component:
```typescript
<LinearGradient
  colors={['#1e1b4b', '#312e81', '#1e1b4b', '#0f172a']}
  style={styles.background}
>
```

### Changing App Theme
Update Tailwind configuration in `tailwind.config.js` and global styles in `global.css`.

### Adding New Screens
Create a new file in `app/` directory - Expo Router will automatically add it to navigation.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

- **Development Team** - Skysense Development
- **Contact** - [Your Email](mailto:your.email@example.com)
- **Website** - [Your Website](https://yourwebsite.com)

---

## 🐛 Known Issues & Troubleshooting

### Common Issues:

**1. Cannot connect to backend**
- Verify your backend is running
- Check the IP address in `axiosConfig.ts`
- Ensure your device and computer are on the same network

**2. Metro bundler errors**
```bash
npx expo start -c
```

**3. Dependency issues**
```bash
rm -rf node_modules
npm install
```

**4. iOS Simulator not starting**
```bash
npx expo run:ios --clean
```

---

## 📚 Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Router Documentation](https://expo.github.io/router/docs/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)

---

## 🌟 Acknowledgments

- Icons by [Ionicons](https://ionic.io/ionicons)
- UI inspiration from modern mobile design patterns
- Weather data integration concepts

---

<div align="center">
  <p>Made with ❤️ by the Skysense Team</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>

