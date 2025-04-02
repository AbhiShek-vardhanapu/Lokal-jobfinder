# Lokal JobFinder

A modern, user-friendly React Native mobile application built with Expo Router to help users browse, bookmark, and explore job listings seamlessly. This project was developed as part of an assignment to demonstrate proficiency in React Native, TypeScript, and mobile app development best practices.

## Project Overview

Lokal JobFinder is a job search app that allows users to:
- Browse job listings with infinite scroll functionality.
- Bookmark jobs for later reference.
- View detailed job information.
- Navigate through a custom bottom navigation bar with smooth animations.

The app is designed with a professional UI, optimized performance, and a focus on user experience. It leverages modern React Native practices, TypeScript for type safety, and Expo for streamlined development and deployment.

## App Screenshots

### Jobs Tab
![Jobs Tab Screenshot](./assets/screenshots/jobs-tab.png)

### Bookmarks Tab 
![Bookmarks Tab Screenshot](./assets/screenshots/bookmarks-tab.png)

### Job Details
![Job Details Screenshot](./assets/screenshots/job-details.png)

### Navigation Bar
![Navigation Bar Screenshot](./assets/screenshots/navigation-bar.png)

## Features

### Core Features (Assignment Requirements)
- **Job Listings with Infinite Scroll**:
  - Fetches job listings from an API with infinite scroll to load more jobs as the user scrolls.
  - Displays job details in a clean, card-based UI.
- **Bookmark Functionality**:
  - Users can bookmark jobs, which are persisted using AsyncStorage.
  - Bookmarked jobs are displayed in a dedicated Bookmarks tab with a badge indicating the number of bookmarks.
- **Job Details Screen**:
  - A detailed view for each job, accessible by tapping on a job card.
  - Displays additional information such as job description, location, and salary.
- **Custom Bottom Navigation Bar**:
  - Built using Expo Router’s Tabs API.
  - Includes icons and labels for Jobs and Bookmarks tabs, with a hidden route for the Job Details screen.

### Extra Enhancements (Above and Beyond)
To make the app stand out and provide a polished user experience, I added the following enhancements:
- **Animations for a Premium Feel**:
  - Added scale animations to tab icons when tapped using `react-native-reanimated`.
  - Implemented a fade-in and slide-up animation for the header logo and title on app load.
  - Included a smooth active tab indicator (a small dot below the active tab) with fade-in/fade-out transitions.
- **Professional UI Design**:
  - Designed a sleek, modern UI with a consistent color scheme:
    - Navy blue (`#1A2526`) for the header and bottom navigation bar.
    - Gold (`#F2CC8F`) for active states (icons, labels, indicators).
    - Coral (`#E07A5F`) for the bookmark badge to make it pop.
  - Enhanced the bottom navigation bar with rounded corners, shadows, and a subtle border.
  - Added a glowing effect to active tab icons for visual feedback.
- **Optimized Performance**:
  - Used `FlatList` with infinite scroll to efficiently handle large datasets of job listings.
  - Implemented proper error handling in API calls and AsyncStorage operations to prevent crashes.
- **Type Safety with TypeScript**:
  - Defined TypeScript interfaces for job data, API responses, and component props to ensure type safety and reduce runtime errors.
- **Responsive Design**:
  - Ensured the app looks great on both small and large screens by using relative units (e.g., percentages, `StyleSheet` with dynamic sizing).
- **Code Organization**:
  - Structured the project with a clear folder hierarchy (see Project Structure below) for maintainability and scalability.

## Technologies Used

- **React Native**: Core framework for building the mobile app.
- **Expo**: Used for streamlined development, testing, and deployment.
- **Expo Router**: For file-based routing and navigation (Tabs and Stack navigation).
- **TypeScript**: For type safety and better developer experience.
- **React Native Reanimated**: For smooth animations (tab icon scaling, header fade-in).
- **React Native Gesture Handler**: For handling tap gestures on tab icons.
- **AsyncStorage**: For persisting bookmarked jobs locally.
- **Axios**: For making API requests to fetch job listings.
- **Ionicons (via @expo/vector-icons)**: For icons in the navigation bar.
- **React Hooks**: For state management and side effects (`useState`, `useEffect`).
- **FlatList**: For efficient rendering of job listings with infinite scroll.

## Setup Instructions

Follow these steps to run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AbhiShek-vardhanapu/Lokal-jobfinder.git
   cd Lokal-jobfinder

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
