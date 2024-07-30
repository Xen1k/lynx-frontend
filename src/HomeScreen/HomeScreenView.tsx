import { StyleSheet, Text, View } from 'react-native'

const HomeScreenView = (): React.JSX.Element => {
    return (
        <View
            style={{
                flex: 1,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
            }}
        >
            <Text style={{ color: 'black' }}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default HomeScreenView
