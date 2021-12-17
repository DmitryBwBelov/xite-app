// Modules
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ConnectedComponent} from 'react-redux';
import {useWindowDimensions} from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks';
// Types
import {ScreenType} from '@interfaces/Screen.type';
import {StackType} from '@interfaces/Stack.type';
// Styles
import {
    MainWrap,
    ImageWrap,
    DescriptionWrap,
    TitleWrap,
    ArtistWrap,
    GenreWrap,
    YearWrap,
} from './styles';
// Enhancer
import {enhance} from './enhance';

type Props = ScreenType & NativeStackScreenProps<StackType, 'VideoItem'>;

const VideoItemComponent = React.memo<Props>(({route}) => {
    const {image_url, release_year, artist, title, genre} = route?.params?.item;
    const {width} = useWindowDimensions();
    const deviceOrientation = useDeviceOrientation();

    return (
        <MainWrap>
            <ImageWrap
                testID="test_video_item_image"
                $width={width}
                $isLandscape={deviceOrientation?.landscape}
                source={{uri: image_url}}
            />
            <DescriptionWrap>
                <TitleWrap>{title}</TitleWrap>
                <ArtistWrap>{artist}</ArtistWrap>
                <YearWrap>{release_year}</YearWrap>
                <GenreWrap>{genre?.name}</GenreWrap>
            </DescriptionWrap>
        </MainWrap>
    );
});

export const VideoItem = enhance(
    VideoItemComponent as ConnectedComponent<React.FunctionComponent, {}>,
);
