import React, {memo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Service} from '../../../domain/entities/service';
import {IdType} from '../../store/types';
import ServiceItem from './service-item';
import {
    pageBackgroundColor,
    pagePaddingHorizontal,
} from '../general/page/styles';
import {ListProps} from '../../../models/list';

const styles = StyleSheet.create({
    container: {
        backgroundColor: pageBackgroundColor,
        flex: 1,
    },
    containerItem: {
        paddingTop: 5,
        marginBottom: 10,
        paddingHorizontal: pagePaddingHorizontal,
    },
});

function keyExtractor(s: Service): IdType {
    return s.id;
}

function renderItem(info: {item: Service}): JSX.Element {
    return (
        <View style={styles.containerItem}>
            <ServiceItem service={info.item} />
        </View>
    );
}

function ServiceList(props: ListProps<Service>): JSX.Element {
    return (
        <FlatList
            keyExtractor={keyExtractor}
            data={props.items}
            renderItem={renderItem}
            maxToRenderPerBatch={6}
            stickyHeaderIndices={[0]}
            ListHeaderComponent={props.header}
            style={[styles.container, props.style]}
            refreshing={props.loading}
            onRefresh={props.onRefresh}
        />
    );
}

export default memo(ServiceList);
