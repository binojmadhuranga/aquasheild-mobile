# 🌤️ AquaSheild Mobile App

AquaSheild is a smart IoT-based mobile application designed to monitor and control an intelligent, weather-adaptive cloth drying rack system. The app allows users to view real-time rack status and weather conditions, as well as manually control the folding and unfolding of the rack from anywhere.

This application acts as the user-facing control layer of the **AquaSheild Smart Cloth Rack System**, combining automation with manual override for maximum convenience, safety, and flexibility.

---

## 🚀 Key Features

- 📊 **Real-Time Rack Status**
  - View whether the rack is **Folded** or **Unfolded**
  - Monitor system activity and power status

- 🌦️ **Live Weather Monitoring**
  - Rain detection status
  - Sunlight intensity
  - Wind speed and direction
  - Temperature and humidity data

- 🎛️ **Manual Control**
  - Fold the rack manually
  - Unfold the rack manually
  - Emergency stop option

- 🤖 **Auto / Manual Mode Switching**
  - Auto Mode: Rack responds automatically to sensor data
  - Manual Mode: User overrides automatic behavior via the app

- 🔔 **Smart Notifications**
  - Rain detected – rack folded automatically
  - Weather cleared – rack unfolded
  - Low battery or system alerts

---

## 🧠 System Overview

The SkySense mobile app communicates with an IoT controller (ESP32/ESP8266) via cloud services using Wi-Fi and MQTT/REST APIs. Sensor data is processed in real time to provide accurate status updates and enable remote control.

