import { FlatList } from "react-native"

export const scrollTopHandler = (listRef: React.RefObject<FlatList<any>>) => {
    if (listRef.current) {
      listRef.current.scrollToOffset({ offset: 0, animated: true })
    }
  }