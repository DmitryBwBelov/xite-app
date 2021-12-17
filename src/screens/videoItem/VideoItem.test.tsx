/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {store} from '@redux/store';
import {VideoItem} from './index';
import {render} from '@testing-library/react-native';
// Data
import itemsList from '../../../dataset.json';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const testItem = itemsList?.videos[0];

const props = {
    navigation: {navigate: jest.fn(), setOptions: jest.fn()},
    route: {params: {item: testItem}},
};

describe('Video Item screen', () => {
    it('Renders correctly', () => {
        const renderedValue = render(
            <Provider store={store}>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider {...eva} theme={eva.light}>
                    <VideoItem {...props} />
                </ApplicationProvider>
            </Provider>,
        );

        expect(renderedValue).toMatchSnapshot();
    });

    it('Image renders correctly', () => {
        const renderedValue = render(
            <Provider store={store}>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider {...eva} theme={eva.light}>
                    <VideoItem {...props} />
                </ApplicationProvider>
            </Provider>,
        );

        const image = renderedValue.getByTestId('test_video_item_image');
        expect(image?.props?.source?.uri).toEqual(testItem.image_url);
    });
});
