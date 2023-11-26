import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
            <View style={styles.viewTextGoal}>
                <Pressable android_ripple={{color: 'red'}} onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed}) => pressed && styles.pressedItem}>
                    <Text style={styles.textGoal}>{props.text}</Text>
                </Pressable>
            </View>    
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    viewTextGoal: {
        margin: 6,
        borderRadius: 6,
        backgroundColor: '#9BB370',
        fontSize: 24,
      },
      pressedItem: {
        borderRadius: 6,
        backgroundColor: 'red'
      },
      textGoal: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 8
      }
});