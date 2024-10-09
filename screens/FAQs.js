import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const FAQs = () => {
  const navigation = useNavigation(); // Hook to access navigation

  // State to handle which FAQ is open and the search query
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqData = [
    { question: "Is installation offered for all services?", answer: "Answer for installation services." },
    { question: "Are there any hidden charges?", answer: "Answer for hidden charges." },
    { question: "Can I cancel a booking?", answer: "Answer for booking cancellation." },
    { question: "Do you also sell products?", answer: "Answer for selling products." },
    { question: "How can I reach to your help center?", answer: "Answer for help center." },
    { question: "How can I change my booking?", answer: "Answer for changing booking." },
    { question: "Can I trust on service providers?", answer: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness." }
  ];

  // Toggle FAQ open/close
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Filter FAQs based on search query
  const filteredFAQs = faqData.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header with back button and title */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/Back.png')} style={styles.backImage} />
        </TouchableOpacity>
        <Text style={styles.title}>FAQs</Text>
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <Image source={require('../assets/icons/Type=Search.png')} style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)} // Update search query on change
        />
      </View>

      {/* FAQ List */}
      <ScrollView style={styles.faqList}>
        {filteredFAQs.map((item, index) => (
          <View key={index} style={styles.faqItem}>
            <TouchableOpacity style={styles.faqQuestion} onPress={() => toggleFAQ(index)}>
              <Text style={styles.questionText}>{item.question}</Text>
              <Image
                source={
                  openFAQ === index
                    ? require('../assets/icons/up.png') // If FAQ is open, show the "up" arrow
                    : require('../assets/icons/next.png') // If FAQ is closed, show the "down" arrow
                }
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            {openFAQ === index && (
              <Text style={styles.answerText}>{item.answer}</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  backImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    height: 45,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#999',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  faqList: {
    flex: 1,
  },
  faqItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    paddingVertical: 20,
  },
  faqQuestion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  arrowIcon: {
    width: 25,
    height: 25,
    tintColor: '#999',
  },
  answerText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
});

export default FAQs;
