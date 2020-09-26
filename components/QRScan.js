import React, { useState } from "react";
import { Linking, Text, TouchableOpacity, Alert, View  ,Dimensions } from "react-native"
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from 'react-native-camera';
// import InAppBrowser from 'react-native-inappbrowser-reborn';
// import { WebView } from 'react-native-webview';

import { useHeaderHeight } from '@react-navigation/stack';

export default function QRScan() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const headerHeight = useHeaderHeight();


    // const [open, setOpen] = useState(true)
    // const [url, setUrl] = useState("")

    let ifScanded = e => {
        console.log(e)

        // setUrl(e.data)

        // setOpen(false)

        // webViews()
        // Linking.openURL(e.data).catch(err =>
        //   Alert.alert("Invalid QRCode", e.data))
    }

    return (
        // (open) ?
        <QRCodeScanner
            containerStyle={{ backgroundColor: "#FFF", height: 100 }}
            flashMode={RNCamera.Constants.FlashMode.auto}  // .....Torch
            onRead={ifScanded}
            reactivate={true}
            permissionDialogMessage="Need Permission To Access Camera"
            reactivateTimeout={10}
            showMarker={true}
            markerStyle={{ borderColor: "#FFF", borderRadius: 10 }}
            bottomContent={
                <TouchableOpacity>
                    <Text style={{ fontSize: 21, marginTop: 50, color: "rgb(0,122,255)" }}>Scan QRCode</Text>
                </TouchableOpacity>
            }
            cameraStyle={{ height:windowHeight-headerHeight, alignItems: "center", justifyContent: "center" }}
            bottomViewStyle={{ display: "none" }}
            topViewStyle={{ display: "none" }}
            // containerStyle={{display:"none"}}

        />
        //   :

        //   <WebView
        //     source={{ uri: url }}
        //     style={{ marginTop: 20 }}
        //   />
    )
}

