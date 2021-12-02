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
  Image
} from "react-native";

export default function CaroselHeader(props) {
  const  item  = props.item;
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();

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
          ])}
          scrollEventThrottle={1}
        >
          {item.photosArray.map((image, imageIndex) => {
            return (
              <View
                style={{ width: windowWidth, height: 230 }}
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
    justifyContent: "center"
  },
  card: {
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 5,
    backgroundColor: "#fafafa",
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
