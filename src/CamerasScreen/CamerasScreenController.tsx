import { Dimensions } from 'react-native'
import CamerasScreenView from './CamerasScreenView'
import { Camera } from './camera'
import { useState } from 'react'

const CamerasScreenController = (): React.JSX.Element => {
    const screenDimensions = Dimensions.get('screen')
    const [cameras, setCameras] = useState([new Camera()])

    return <CamerasScreenView cameras={cameras} screenDimensions={screenDimensions} />
}

export default CamerasScreenController
