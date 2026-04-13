# Unit Converter

A cross-platform unit converter app built with Expo (React Native). Instantly convert between Length, Temperature, and Weight units with a modern UI.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (install globally with `npm install -g expo-cli`)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd unit-converter
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   - Use the Expo Go app on your device, or an emulator/simulator, to preview.

## Project Structure & Implementation

- **Onboarding Screen:**  
   Located at `src/components/screens/onboarding-screen/index.tsx`.  
   Presents the app title, description, and navigation cards for Length, Temperature, and Weight conversions.

# Separation of Concerns

This project follows the principle of **separation of concerns** to ensure maintainability, scalability, and clarity:

- **Screens** (e.g., onboarding, length, temperature, weight) are responsible for UI layout, user interaction, and navigation logic only.
- **UI Components** (like `DisplayCardUnit` and `UnitInput`) are reusable, isolated building blocks for rendering and handling user input, making the UI consistent and easy to update.
- **Conversion Logic** is kept in dedicated utility files (`src/utils/convertLength.ts`, `src/utils/convert-temperature.tsx`, `src/utils/convert-weight.ts`). This means all mathematical and unit conversion logic is separated from the UI, making it easy to test, extend, or modify without touching the interface code.
- **Styling** is handled via utility-first CSS classes (Tailwind/uniwind), keeping style definitions out of business and logic code.

This clear separation allows you to:
- Update or add new units without changing UI code
- Reuse UI components across different screens
- Maintain and test conversion logic independently
- Quickly adapt the UI or logic for new requirements


# Code Structure

```
unit-converter/
├── app.json
├── package.json
├── tsconfig.json
├── assets/
│   └── images/
├── src/
│   ├── global.css
│   ├── uniwind-types.d.ts
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   ├── length.tsx
│   │   ├── temperature.tsx
│   │   └── weight.tsx
│   ├── components/
│   │   ├── screens/
│   │   │   ├── onboarding-screen/
│   │   │   │   └── index.tsx
│   │   │   └── utility-screen/
│   │   │       ├── length.tsx
│   │   │       ├── temperature.tsx
│   │   │       └── weight.tsx
│   │   ├── ui/
│   │   │   ├── card.tsx
│   │   │   └── unit-input.tsx
│   │   └── ui/
│   │       └── screen.tsx
│   ├── utils/
│   │   ├── convert-temperature.tsx
│   │   ├── convert-weight.ts
│   │   └── convertLength.ts
├── ...
```

- **Unit Conversion Screens:**
  - `src/components/screens/utility-screen/length.tsx`
  - `src/components/screens/utility-screen/temperature.tsx`
  - `src/components/screens/utility-screen/weight.tsx`  
    Each screen allows users to input a value, select source and target units, and see the converted result in real time.

- **UI Components:**
  - `DisplayCardUnit` (`src/components/ui/card.tsx`): Renders a styled card for each unit type.
  - `UnitInput` (`src/components/ui/unit-input.tsx`): Handles input and selection of units, used for both input and output fields.

- **Conversion Logic:**
  - `src/utils/convertLength.ts`: Converts between meters, kilometers, centimeters, and millimeters.
  - `src/utils/convert-temperature.tsx`: Converts between Celsius, Fahrenheit, and Kelvin.
  - `src/utils/convert-weight.ts`: Converts between kilograms, grams, milligrams, and pounds.

- **Navigation:**  
   Uses [expo-router](https://expo.dev/router/introduction/) for file-based navigation.

- **Styling:**  
   Uses Tailwind CSS classes via [uniwind](https://www.npmjs.com/package/uniwind) for utility-first styling.

## Scripts

- `npm start` — Start Expo development server
- `npm run android` — Run on Android emulator/device
- `npm run ios` — Run on iOS simulator/device
- `npm run web` — Run in web browser

## Customization

- Add or modify units in the utility files under `src/utils/`.
- Update UI components in `src/components/ui/` for custom design.

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
