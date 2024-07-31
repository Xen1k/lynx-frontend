import { Image, ScaledSize, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { commonStyles } from '../commonStyles'
import Icon from 'react-native-vector-icons/Ionicons'

interface IHomeScreenViewProps {
    screenDimensions: ScaledSize
}

const HomeScreenView: React.FC<IHomeScreenViewProps> = ({ screenDimensions }): React.JSX.Element => {
    return (
        <View style={commonStyles.pageContainer}>
            <View style={{ flex: 4, alignItems: 'center', width: '100%' }}>
                <Text style={[commonStyles.pageHeader, { marginVertical: '7%' }]}>Мой дом</Text>
                <Image
                    style={{ width: screenDimensions.width / 3, height: screenDimensions.width / 3 }}
                    source={require('../../images/lynx-850-transparent.png')}
                />
                <Text style={commonStyles.labelHeader}>Защита активирована</Text>
                <View style={styles.modeSwitcher}>
                    <Icon name="lock-open-outline" size={30} color="#757575" />
                    <Icon name="home-outline" size={30} color="#757575" />
                    <Icon name="lock-closed-outline" size={30} color="#757575" />
                </View>
                <TouchableOpacity style={{ marginVertical: '4%' }}>
                    <Text style={commonStyles.labelLink}>Добавить новое устройство</Text>
                </TouchableOpacity>
            </View>
            <View style={[commonStyles.infoContainer, { flex: 3, width: '93%', marginBottom: '4%' }]}>
                <View style={[commonStyles.infoContainerHeaderView]}>
                    <Text style={commonStyles.labelHeader}>Последнее обнаружение</Text>
                    <TouchableOpacity>
                        <Text style={commonStyles.secondaryButtonText}>Смотреть все</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Icon name="person-outline" size={110} color="black" />
                </View>
                <View style={commonStyles.infoContainerFooterView}>
                    <Text style={commonStyles.defaultLabel}>Пока что лиц не обнаружено</Text>
                    <TouchableOpacity style={{ marginVertical: '3%' }}>
                        <Text style={[commonStyles.labelLink, { fontWeight: '500' }]}>Список камер</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modeSwitcher: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '3%',
        alignItems: 'center',
        backgroundColor: '#E1E1E1',
        height: 60,
        width: '70%',
        borderRadius: 100,
        marginTop: '4%',
    },
})

export default HomeScreenView
