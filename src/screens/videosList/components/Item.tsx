// Modules
import React from 'react';
import {useDeviceOrientation} from '@react-native-community/hooks';
import {useWindowDimensions} from 'react-native';
// Styles
import {
    AuthorWrapText,
    DescriptionWrap,
    ImageWrap,
    MainWrap,
    TitleWrapText,
} from './styles';
// Types
import {ItemType} from './types/Item.type';

export const Item = React.memo<ItemType>(({item}) => {
    const {title, artist, image_url} = item;
    const {width} = useWindowDimensions();
    const deviceOrientation = useDeviceOrientation();

    return (
        <MainWrap $isLandscape={deviceOrientation?.landscape}>
            <ImageWrap
                source={{uri: image_url}}
                $isLandscape={deviceOrientation?.landscape}
                $width={width}
            />
            <DescriptionWrap>
                <TitleWrapText>{title}</TitleWrapText>
                <AuthorWrapText>{artist}</AuthorWrapText>
            </DescriptionWrap>
        </MainWrap>
    );
});
