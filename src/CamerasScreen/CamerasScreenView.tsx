import { Image, ScaledSize, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { commonStyles } from '../commonStyles'
import Icon from 'react-native-vector-icons/Ionicons'
import { Camera } from './camera'

interface ICamerasScreenViewProps {
    screenDimensions: ScaledSize
    cameras: Camera[]
}

const CamerasScreenView: React.FC<ICamerasScreenViewProps> = ({ screenDimensions, cameras }): React.JSX.Element => (
    <View style={commonStyles.pageContainer}>
        <Text style={commonStyles.pageHeader}>Камеры</Text>
        <ScrollView style={styles.camerasScroll} contentContainerStyle={{ alignItems: 'center' }}>
            {cameras.map((camera: Camera) => (
                <TouchableOpacity key={camera.id} style={[commonStyles.infoContainer, { aspectRatio: 2, width: '93%', marginBottom: '5%' }]}>
                    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="videocam-off-outline" size={62} color="black" />
                        <Text style={[commonStyles.defaultLabel, { fontSize: 13 }]}>Камера выключена</Text>
                    </View>
                    <View style={styles.cameraContainerFooter}>
                        <View style={{ flexDirection: 'row', height: '100%', alignItems: 'center' }}>
                            <Icon name="camera-outline" size={24} color="black" />
                            <Text style={[commonStyles.defaultLabel, { fontSize: 13, paddingLeft: '4%' }]}>{camera.name}</Text>
                        </View>
                        <Text style={{ fontSize: 13 }}>Обнаружений нет</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    </View>
)

const styles = StyleSheet.create({
    camerasScroll: {
        flex: 1,
        width: '100%',
    },
    cameraContainerFooter: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
    },
})

export default CamerasScreenView
