import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          longitude: 30.423393788659745,
          latitude: 50.50072663417127,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{
            longitude: 30.423393788659745,
            latitude: 50.50072663417127,
          }}
          title="travel photo"
          pinColor="blue"
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
