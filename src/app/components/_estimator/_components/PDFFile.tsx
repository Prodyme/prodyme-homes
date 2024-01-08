import React from 'react'
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { step3Type } from '../_myTypes';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  section2: {
    flexGrow: 1,
    fontSize: "40px",
    color: "#f97316",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  rate: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export const PDFFile: React.FC<step3Type> = ({
  step,
  setStep,
  estimateValue,
  groupedItems,
  setGroupedItems,
  quality,
  rateSum,
}) => {
    
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {groupedItems.map((item, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.itemName}>{item.itemName}</Text>
            {item.items.map((i, subIndex) => {
                if(item.Category === i.Category){
                    return (
                      <View key={subIndex}>
                        <Text style={styles.description}>{i.Description}</Text>
                        <Text style={styles.rate}>
                          INR {i.Rate} {i.Unit}
                        </Text>
                      </View>
                    );
                }
            })}
          </View>
        ))}
        <View style={styles.section}>
          <Text style={styles.section2}>INR {rateSum} per sqft</Text>
          <Text style={styles.rate}>
            Approximately {estimateValue} for your BUA (Built-Up-Area)
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.section2}>Thank You</Text>
        </View>
      </Page>
    </Document>
  );
}
