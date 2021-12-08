import React, { useRef, useLayoutEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  TouchableHighlight,
  Image,
  Dimensions
} from "react-native";

const win = Dimensions.get('window');

export default function CaroselHeader(props) {
  const { width: windowWidth } = useWindowDimensions();
  const  item  = props.item;
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          style={styles.scrollViewStyle}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }                
              }
            }
          ],
          {useNativeDriver: false}
          )}
          scrollEventThrottle={1}
        >
          {item.photosArray.map((image, imageIndex) => {
            return (
              
              <View
                style={styles.cardContainer}
                key={imageIndex}
              >
                <ImageBackground source={{ uri: image }} style={styles.card} />
                <View style={styles.indicatorContainer}>
                  {item.photosArray.map((image, imageIndex) => {
                    const width = scrollX.interpolate({
                      inputRange: [
                        windowWidth * (imageIndex - 1),
                        windowWidth * imageIndex,
                        windowWidth * (imageIndex + 1)
                      ],
                      outputRange: [8, 16, 8],
                      extrapolate: "clamp"
                    });
                    return (
                      <Animated.View
                        key={imageIndex}
                        style={[styles.normalDot, { width }]}
                      />
                    );
                  })}
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    height: 260,
    alignItems: "center",
  },
  cardContainer: {
    width: win.width, 
    height: 230
  },
  card: {
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 5,
    backgroundColor: "#FFF",
    marginHorizontal: 4
  },
  indicatorContainer: {
    position:'absolute',
    alignSelf: 'center',
    marginTop: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconeMenu: {
    height: 30,
    width: 35,
    marginLeft: 10,
    borderRadius: 100,
    backgroundColor: "#fafafa",
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconBackArroy: {
    height: 20,
    width: 20,
    padding: 3
  }
});
