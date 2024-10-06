import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { auth } from '../../firebaseConfig';
import { signOut } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AccountSettingProps {
  icon: string,
  text: string,
}

const AccountSetting = ({ icon, text }: AccountSettingProps) => {
  return (
    <View style={styles.accountSetting}>
      <View style={styles.leftContent}>
        <View style={styles.icon}>
        <FontAwesome6 name={icon} size={24} color="black" />
        </View>
        <Text style={styles.bodyText}>{text}</Text>
      </View>
      <View style={styles.rightContent}>
        <FontAwesome6 name="angle-right" size={24} color="black" />
      </View>
    </View>
  );
}

export default function Tab() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profilePic}>
          <FontAwesome name="user-circle-o" size={50} color="black" />
        </View>
        <View style={styles.containerHeaderText}>
          <Text style={styles.Name}>Jose Perez</Text>
          <Text style={styles.Email}>jose_perez@gmail.com</Text>
        </View>
      </View>
      <View style={styles.containerBody}>
        <AccountSetting icon="truck-ramp-box" text="My orders" />
        <AccountSetting icon="id-card" text="My details" />
        <AccountSetting icon="location-dot" text="Delivery address" />
        <AccountSetting icon="credit-card" text="Payment methods" />
        <AccountSetting icon="ticket" text="Promo Code" />
        <AccountSetting icon="bell" text="Notifications" />
        <AccountSetting icon="circle-question" text="Help" />
        <AccountSetting icon="circle-info" text="About" />
      </View>
      <TouchableOpacity style={styles.logOutButton} onPress={
        async () => {
          await signOut(auth);
          await AsyncStorage.removeItem("@user");
          console.log('Logged out');
        }
      }>
        <View style={styles.iconSignOut}>
          <FontAwesome name="sign-out" size={24} color="white" />
        </View>
        <Text style={styles.logOutButtonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    width: '90%',
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  profilePic: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHeaderText: {
    marginLeft: 20,
  },
  Name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Email: {
    fontSize: 12,
  },
  containerBody: {
    width: '90%',
  },
  accountSetting: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '100%',
    height: 60,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContent: {
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyText: {
    marginLeft: 10,
  },
  logOutButton: {
    backgroundColor: '#DB4444',
    borderRadius: 100,
    width: '70%',
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    position: 'relative',
    height: 50,
  },
  iconSignOut: {
    position: 'absolute',
    left: 20,
    bottom: 12,
  },
  logOutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
