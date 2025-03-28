import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';

const PaymentWaiting = () => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount === 0) {
          return 3;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>等待支付结果</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.countdownContainer}>
          <Text style={styles.countdownText}>{countdown}</Text>
          <Text style={styles.secondsText}>秒</Text>
        </View>
        <Text style={styles.tipText}>正在确认支付结果，请稍候...</Text>
      </View>

      <TouchableOpacity style={styles.completeButton}>
        <Text style={styles.completeButtonText}>已完成支付</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
  },
  countdownContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  countdownText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1890ff',
  },
  secondsText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
    marginLeft: 4,
  },
  tipText: {
    fontSize: 14,
    color: '#666',
  },
  completeButton: {
    position: 'absolute',
    bottom: 32,
    left: '50%',
    transform: [{ translateX: -183 }],
    width: 366,
    height: 44,
    backgroundColor: '#1890ff',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default PaymentWaiting;