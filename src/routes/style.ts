import { StyleSheet } from "react-native";
import { theme } from '~global';

export const style = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    height: 55,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  plusIcon: {
    width: 50,
    height: 60,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 3,
    top: -30,
    backgroundColor: theme.colors.lightGreen,

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
