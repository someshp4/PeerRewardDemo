import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  GIVE_REWARD_MODAL_HEADER,
  GIVE_REWARD_MODAL_LABELS,
} from '../constants/AppConstants';

const deviceHeight = Dimensions.get('window').height;
const requiredHeight = deviceHeight / 5;

const GiveRewardModal = ({modalVisible, setModalVisible, addToFeedList}) => {
  const [toName, setToName] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({
    toName: false,
    amount: false,
    message: false,
  });

  const onGivePress = () => {
    if (toName && amount && message) {
      addToFeedList({toName, amount, message});
      setModalVisible(false);
    } else {
      setError({
        ...error,
        toName: toName ? false : true,
        amount: amount ? false : true,
        message: message ? false : true,
      });
    }
  };

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={setModalVisible}
      transparent={true}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView style={styles.container}>
          <Pressable
            style={styles.modalContainer}
            onPress={event => {
              if (event.target == event.currentTarget) {
                setModalVisible(false);
              }
            }}>
            <View style={styles.modal}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalHeader}>
                    {GIVE_REWARD_MODAL_HEADER}
                  </Text>
                  <Text style={styles.inputLabel}>
                    {GIVE_REWARD_MODAL_LABELS.to}
                  </Text>
                  <TextInput
                    key="To"
                    style={[styles.input, error.toName ? styles.error : {}]}
                    onChangeText={value => setToName(value)}
                  />
                  <Text style={styles.inputLabel}>
                    {GIVE_REWARD_MODAL_LABELS.amount}
                  </Text>
                  <TextInput
                    key="Amount"
                    style={[styles.input, error.amount ? styles.error : {}]}
                    keyboardType="numeric"
                    onChangeText={value => setAmount(value)}
                  />
                  <Text style={styles.inputLabel}>
                    {GIVE_REWARD_MODAL_LABELS.message}
                  </Text>
                  <TextInput
                    key="Message"
                    multiline={true}
                    numberOfLines={4}
                    style={[styles.textArea, error.message ? styles.error : {}]}
                    onChangeText={value => setMessage(value)}
                  />

                  <TouchableOpacity
                    style={styles.giveButton}
                    onPress={onGivePress}>
                    <Text style={styles.giveButtonText}>
                      {GIVE_REWARD_MODAL_LABELS.giveButton}
                    </Text>
                  </TouchableOpacity>
                  <Text
                    onPress={() => setModalVisible(false)}
                    style={styles.closeButton}>
                    X
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};
export default GiveRewardModal;

const styles = StyleSheet.create({
  container: {flex: 1},
  modalContainer: {flex: 1},
  modal: {
    flex: 1,
    height: deviceHeight - requiredHeight,
    marginTop: requiredHeight,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#000000',
  },
  modalContent: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  modalHeader: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
  },
  input: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'solid',
    color: 'white',
    fontSize: 16,
  },
  textArea: {
    textAlignVertical: 'top',
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  giveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 40,
    borderRadius: 50,
    width: '60%',
    marginBottom: 40,
    marginTop: 10,
    alignSelf: 'center',
  },
  giveButtonText: {color: 'black', fontSize: 18, fontWeight: 'normal'},
  error: {
    borderColor: 'red',
  },
  closeButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    fontSize: 30,
    color: '#ffffff',
  },
});
