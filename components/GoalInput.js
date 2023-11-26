import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";



function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goals.png')}/>
                <TextInput style={styles.textInput} placeholderTextColor="white" placeholder="Vos objectifs" onChangeText={goalInputHandler} value={enteredGoalText}/>
                <View style={styles.viewButtonContainer}>
                    <View style={styles.button}>
                        <Button color="#9BB370" title="Ajouter" onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button color="#9BB370" title="Retour" onPress={props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        backgroundColor: '#2D5366'
      },
      textInput: {
        borderWidth: 1,
        borderRadius: 16,
        borderColor: '#9BB370',
        width: '100%',
        padding: 8,
        color: 'white'
      },
      viewButtonContainer: {
        marginTop: 16,
        flexDirection: 'row'
      },
      button: {
        width: '30%',
        marginHorizontal: 8,
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      }
});