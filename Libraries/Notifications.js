import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Alert } from 'react-native';

// Define the notification content
const content = {
  title: 'Notification Title',
  body: 'This is the notification body',
};

// Request notification permissions
async function requestNotificationPermissions() {
  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
    console.log(finalStatus);
  }
  if (finalStatus !== 'granted') {
    Alert.alert('Failed to get notification permission');
    return false;
  }
  return true;
}

// Trigger the local notification
export async function triggerNotification() {
  if (await requestNotificationPermissions()) {
    console.log('inside');
    Notifications.scheduleNotificationAsync({
      content,
      trigger: Notifications.Trigger.now(),
    });
  }
}