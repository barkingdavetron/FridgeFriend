import React from 'react'; //import react
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'; //import react modules
import { LinearGradient } from 'expo-linear-gradient'; // Import the gradient module

export default function App() {
  return (
    //   Gradient background
    <LinearGradient colors={['#00c6ff', '#0072ff']} style={styles.gradientBackground}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Main content container */}
        <View style={styles.mainContent}>
          {/* Title of the app */}
          <Text style={styles.title}>Fridge Scanner</Text>
          {/* Subtitle of the app */}
          <Text style={styles.subtitle}>Scan your fridge and explore all your food options!</Text>

          {/* Cards Layout */}
          <View style={styles.cardContainer}>
            {/* Card for scanning the fridge */}
            <TouchableOpacity style={styles.card} onPress={() => alert('Scan your fridge')}>
              <Image source={{ uri: '' }} style={styles.cardImage} />
              <Text style={styles.cardText}>Scan Fridge</Text>
            </TouchableOpacity>
            {/* Card for viewing recipes */}
            <TouchableOpacity style={styles.card} onPress={() => alert('View Recipes')}>
              <Image source={{ uri: '' }} style={styles.cardImage} />
              <Text style={styles.cardText}>Recipes</Text>
            </TouchableOpacity>
            {/* Card for shopping list */}
            <TouchableOpacity style={styles.card} onPress={() => alert('Shopping List')}>
              <Image source={{ uri: '' }} style={styles.cardImage} />
              <Text style={styles.cardText}>Shopping List</Text>
            </TouchableOpacity>
            {/* Card for settings */}
            <TouchableOpacity style={styles.card} onPress={() => alert('Settings')}>
              <Image source={{ uri: '' }} style={styles.cardImage} />
              <Text style={styles.cardText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer at the bottom of the screen */}
        <Text style={styles.footer}>© 2024 Fridge Scanner Inc.</Text>
      </ScrollView>
    </LinearGradient>
  );
}

// Styles for the components
const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
    paddingHorizontal: 20, // Horizontal padding for the content
    justifyContent: 'center', // Center content vertically within the LinearGradient container
  },
  container: {
    flexGrow: 1,
    justifyContent: 'space-between', // Ensures that content is spread out vertically and footer sticks to the bottom
    alignItems: 'center', // Centers content horizontally
    paddingBottom: 20, // Adds space at the bottom of the container to prevent footer overlap
  },
  mainContent: {
    flex: 1, // This allows the main content to take up available space
    justifyContent: 'center', // Centers the main content vertically
    alignItems: 'center', // Centers the main content horizontally
  },
  title: {
    fontSize: 38, // Larger font size for the title
    fontWeight: 'bold', // Makes the title bold
    color: '#fff', // White text color
    marginVertical: 20, // Adds vertical space around the title
  },
  subtitle: {
    fontSize: 18, // Smaller font size for the subtitle
    color: '#fff', // White text color
    textAlign: 'center', // Centers the subtitle text
    marginBottom: 30, // Adds space below the subtitle
  },
  cardContainer: {
    flexDirection: 'row', // Displays cards in a row
    flexWrap: 'wrap', // Allows cards to wrap to the next line if there isn't enough space
    justifyContent: 'space-around', // Distributes cards evenly with space in between
    width: '100%', // Ensures the container takes up the full width
    marginBottom: 20, // Adds space below the cards
  },
  card: {
    backgroundColor: '#fff', // White background for each card
    width: '40%', // Each card takes up 40% of the available width
    padding: 20, // Padding inside each card
    margin: 10, // Space between cards
    borderRadius: 12, // Rounded corners for the cards
    shadowColor: '#000', // Shadow color
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 5, // Shadow radius for softness
    shadowOffset: { width: 0, height: 4 }, // Shadow position
    elevation: 5, // Adds elevation for Android devices (shadow effect)
    justifyContent: 'center', // Centers content within the card
    alignItems: 'center', // Centers content within the card horizontally
  },
  cardImage: {
    width: 50, // Fixed width for the card image
    height: 50, // Fixed height for the card image
    marginBottom: 10, // Space between the image and the text
  },
  cardText: {
    fontSize: 18, // Font size for the card text
    color: '#333', // Dark color for card text
    fontWeight: '600', // Semi-bold text for the card title
  },
  footer: {
    fontSize: 14, // Smaller font size for the footer text
    color: '#fff', // White color for footer text
    textAlign: 'center', // Centers the footer text
    paddingBottom: 20, // Adds padding to the bottom of the footer
  },
});
