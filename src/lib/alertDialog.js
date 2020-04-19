import { Alert } from 'react-native';

export default function showAlertDialog(title, message, buttonTitle, callback) {
    Alert.alert(
        title,
        message,
        [
            { text: buttonTitle, onPress: () => callback(), style: 'default' },
        ],
        { cancelable: false },
    );
}
