import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const PrivacyPolicy = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Button and Title in the same row */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            source={require('../assets/Back.png')} // Replace with the actual image path
            style={styles.backButtonImage}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Privacy Policy</Text>
      </View>

      {/* Scrollable Text Content */}
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.paragraph1}>
        Acceptance of the Privacy Policy
        </Text>
        <Text style={styles.paragraph}>
          Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but
          because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take
          a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage
          from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying
          consequences, or one who avoids a pain that produces no resultant pleasure?
        </Text>
        <Text style={styles.paragraph}>
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        </Text>
        <Text style={styles.paragraph}>
            Nor again is there anyone who loves ohr pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
        </Text>
        {/* Add more content as necessary */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',  // Layout the back button and title in a row
    alignItems: 'center',  // Align items vertically centered
    marginTop: 16,
    marginBottom: 24,
  },
  backButton: {
    marginRight: 8,  // Add some space between the button and the title
  },
  backButtonImage: {
    width: 50,  // Increased size for back button
    height: 50,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  contentContainer: {
    flex: 1,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 24,
    color: '#333',
    marginBottom: 16,
  },
  paragraph1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
});

export default PrivacyPolicy;
