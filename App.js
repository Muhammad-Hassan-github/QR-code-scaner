import React from "react";
import { Linking, Text, TouchableOpacity, Alert } from "react-native"
import QRCodeScanner from "react-native-qrcode-scanner";


export default class App extends React.Component {

  ifScanded = e => {
    Linking.openURL(e.data).catch(err =>
      Alert.alert("Invalid QRCode", e.data))
  }

  render() {
    return (
      <QRCodeScanner
        containerStyle={{ backgroundColor: "#FFF" }}
        onRead={this.ifScanded}
        reactivate={true}
        permissionDialogMessage="Need Permission To Access Camera"
        reactivateTimeout={10}
        showMarker={true}
        markerStyle={{ borderColor: "#FFF", borderRadius: 10 }}
        bottomContent={
          <TouchableOpacity>
            <Text style={{ fontSize: 21,marginTop:50, color:"rgb(0,122,255)" }}>Scan QRCode</Text>
          </TouchableOpacity>
        }
        />
  )
}

}