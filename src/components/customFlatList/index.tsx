import React from 'react';
import { FlatList, FlatListProps, ListRenderItem } from 'react-native';

interface CustomFlatListProps<T> extends FlatListProps<T> {
  ListHeaderComponent: React.ReactElement;
  data: T[];
  renderItem: ListRenderItem<T>;
  ListFooterComponent: React.ReactElement;
  listRef: React.RefObject<FlatList<T>>;
}

const CustomFlatList = <T,>({
  ListHeaderComponent,
  data,
  renderItem,
  ListFooterComponent,
  listRef,
  ...rest
}: CustomFlatListProps<T>) => {
  return (
    <FlatList
      ref={listRef}
      ListHeaderComponent={ListHeaderComponent}
      data={data}
      renderItem={renderItem}
      ListFooterComponent={ListFooterComponent}
      showsVerticalScrollIndicator={false}
      {...rest}
    />
  )
}

export default CustomFlatList
