// Modules
import React from 'react';
import {useWindowDimensions} from 'react-native';
import {Spinner} from '@ui-kitten/components';
import {ConnectedComponent} from 'react-redux';
// Styles
import {ButtonWrap, ErrorText, LoaderWrap} from '../styles';
// Types
import {LoaderMessageType} from './types/Loader.type';
// Enhancer
import {enhance} from '../enhance';

const LoaderMessageComponent = React.memo<LoaderMessageType>(
    ({fetchVideosList, isPending, isError}) => {
        const {height} = useWindowDimensions();

        return (
            <LoaderWrap $height={height}>
                {isPending && <Spinner size="large" />}
                {isError && <ErrorText>Something went wrong...</ErrorText>}
                {isError && (
                    <ButtonWrap
                        onPress={() => fetchVideosList()}
                        appearance="ghost">
                        Try again
                    </ButtonWrap>
                )}
            </LoaderWrap>
        );
    },
);

export const LoaderMessage = enhance(
    LoaderMessageComponent as ConnectedComponent<React.FunctionComponent, {}>,
);
