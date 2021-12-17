// Modules
import React, {useEffect, useMemo} from 'react';
import {ConnectedComponent} from 'react-redux';
import {useDeviceOrientation} from '@react-native-community/hooks';
import {FlatList, TouchableOpacity} from 'react-native';
// Components
import {LoaderMessage} from './components/Loader';
import {Item} from './components/Item';
import {Filter} from './components/Filter';
import {Search} from './components/Search';
// Styles
import {SeparatorWrap, MainWrap, FlatListLastWrap} from './styles';
// Types
import {VideosListType} from './types/VideosList.type';
import {VideoType} from '@interfaces/Video.type';
// Enhancer
import {enhance} from './enhance';

const VideosListComponent = React.memo<VideosListType>(
    ({items, fetchVideosList, isPending, isError, navigation}) => {
        const deviceOrientation = useDeviceOrientation();

        const renderItem = useMemo(
            () =>
                ({item, index}: {item: VideoType; index: number}) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation?.navigate('VideoItem', {item})
                            }
                            key={index}>
                            <Item item={item} />
                        </TouchableOpacity>
                    );
                },
            [navigation],
        );

        useEffect(() => {
            fetchVideosList();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        if (isPending || isError) {
            return <LoaderMessage />;
        }

        return (
            <>
                <Search />
                <MainWrap>
                    <Filter />
                    <FlatList
                        testID="test_flat_list"
                        key={deviceOrientation?.portrait ? 'p' : 'h'}
                        data={items}
                        renderItem={renderItem}
                        keyExtractor={(item: VideoType) => `${item?.id}`}
                        ItemSeparatorComponent={SeparatorWrap}
                        ListFooterComponent={FlatListLastWrap}
                        numColumns={deviceOrientation?.portrait ? 1 : 2}
                    />
                </MainWrap>
            </>
        );
    },
);

export const VideosList = enhance(
    VideosListComponent as ConnectedComponent<React.FunctionComponent, {}>,
);
