import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../Styles/HomeStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import { authenticateUser } from '../components/constant';
import Ionicons from 'react-native-vector-icons/Ionicons';

function StatCard({ title, value, subtitle, icon, color }) {
  return (
    <View style={[styles.statCard, { borderLeftColor: color }]}>
      <View style={styles.iconRow}>
        <View style={[styles.iconWrap, { backgroundColor: `${color}20` }]}>
          <Ionicons name={icon} size={22} color={color} />
        </View>
        <Text style={styles.statValue}>{value}</Text>
      </View>

      <Text style={styles.statTitle}>{title}</Text>
      <Text style={styles.statSub}>{subtitle}</Text>
    </View>
  );
}


function TimeBox({ label, value }) {
  return (
    <View style={styles.timeBox}>
      <Text style={styles.timeValue}>{value}</Text>
      <Text style={styles.timeLabel}>{label}</Text>
    </View>
  );
}

function ActionCard({ title }) {
  return (
    <TouchableOpacity style={styles.actionCard}>
      <Text style={styles.actionText}>{title}</Text>
    </TouchableOpacity>
  );
}
const handleCheckIn = async () => {
  try {
    // setLoading(true);

    // 1. Biometric (Face / Fingerprint)
    const authenticated = await authenticateUser();
    if (!authenticated) return;
    console.log(authenticated);
    // 2. Location
    // const location = await getCurrentLocation();

    // 3. API call
    // await api.post('/attendance/check-in', {
    //   latitude: location.latitude,
    //   longitude: location.longitude,
    // });

    Alert.alert('Checked in successfully');
  } catch (err) {
    Alert.alert(err.message || 'Authentication failed');
  } finally {
    // setLoading(false);
  }
};

export default function UserDashboard() {
  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <LinearGradient colors={['#C62828', '#E53935']} style={styles.header}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity>
            <Icon name="menu" size={26} color="#fff" />
          </TouchableOpacity>
          {/* 
    <Image
      source={require('../assets/logos/signInLogo-removebg-preview.png')} // your logo
      style={styles.logo}
      resizeMode="contain"
    /> */}

          <TouchableOpacity>
            <Icon name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* User Info */}
        <View style={styles.userRow}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            style={styles.avatar}
          />
          <View style={{ marginLeft: 16 }}>
            <Text style={styles.name}>Hi, Hari Krishnan</Text>
            <Text style={styles.role}>Software Engineer</Text>
          </View>
        </View>
      </LinearGradient>

      {/* DATE CARD */}
      <View style={styles.card}>
        <Text style={styles.date}>Monday, 12 Apr 2026</Text>
        <Text style={styles.shift}>Shift Timing · 09:00 AM – 06:00 PM</Text>

        <View style={styles.timeRow}>
          <TimeBox label="Check In" value="09:10 AM" />
          <TimeBox label="Check Out" value="06:10 PM" />
          <TimeBox label="Total Hours" value="09h 10m" />
        </View>

        <TouchableOpacity style={styles.checkInBtn} onPress={handleCheckIn}>
          <Text style={styles.checkInText}>CHECK IN</Text>
        </TouchableOpacity>

        <Text style={styles.zoneText}>🟢 You are within the check-in zone</Text>
      </View>

      <View style={styles.statsRow}>
  <StatCard
    title="Present"
    value="18"
    subtitle="This Month"
    icon="checkmark-circle-outline"
    color="#2E7D32"
  />

  <StatCard
    title="WO"
    value="4"
    subtitle="Week Off"
    icon="calendar-outline"
    color="#1565C0"
  />
</View>

<View style={styles.statsRow}>
  <StatCard
    title="LOP"
    value="1"
    subtitle="Loss of Pay"
    icon="alert-circle-outline"
    color="#D32F2F"
  />

  <StatCard
    title="Absent"
    value="2"
    subtitle="Days"
    icon="close-circle-outline"
    color="#6A1B9A"
  />
</View>


      {/* ANNOUNCEMENTS */}
      {/* <View style={styles.announcementHeader}>
        <Text style={styles.sectionTitle}>Announcements</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.announcementTitle}>Eid Holidays</Text>
        <Text style={styles.announcementText}>
          Eid holidays will start from tomorrow until Sunday. We encourage
          everyone to enjoy the festivities with loved ones.
        </Text>
        <Text style={styles.announcementDate}>24/04/2026</Text>
      </View> */}
    </ScrollView>
  );
}
