/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

const CustomSwitch = ({ selectedTab, onTabSelection, option1, option2 }) => {
    const [selectionMode, setSelectionMode] = useState(selectedTab);
    
    const handleTabChange = (value) =>{
        setSelectionMode(value);
        onTabSelection(value)
    }


    return (
        <View style={styles.custom_switch_container}>
            <TouchableOpacity
            activeOpacity={1}
                style={[
                    styles.custom_switch_button,
                    {
                        backgroundColor: selectionMode === 0 ? '#F66074' : '#ccc',
                    }
                ]}
                onPress={()=> handleTabChange(0)}
            >
                <Text
                    style={[
                        styles.custom_button_text,
                        {
                            color: selectionMode === 0 ? '#fff' : '#000'
                        }
                    ]}
                >{option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
            activeOpacity={1}

                style={[
                    styles.custom_switch_button,
                    {
                        backgroundColor: selectionMode === 1 ? '#F66074' : '#ccc',
                    }
                ]}
                onPress={()=> handleTabChange(1)}
            >
                <Text
                    style={[
                        styles.custom_button_text,
                        {
                            color: selectionMode === 1 ? '#fff' : '#000'
                        }
                    ]}
                >{option2}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    custom_switch_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        height: 45,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#ccc'
    },
    custom_switch_button: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    custom_button_text: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default CustomSwitch;
