/**
 * @format
 */

import 'react-native';
import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {VideosList} from './index';
import {render} from '@testing-library/react-native';
// Data
import itemsList from '../../../dataSet.json';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {StatusEnum} from '@enums/Status.enum';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const mockStore = configureStore([]);
const initialState = {
    genresList: {
        items: itemsList?.genres,
        status: StatusEnum.SUCCESS,
    },
    videosList: {
        items: itemsList?.videos,
        filteredItems: itemsList?.videos,
        status: StatusEnum.SUCCESS,
    },
};
const store = mockStore(initialState);

const props = {
    navigation: {navigate: jest.fn(), setOptions: jest.fn()},
};

describe('Videos List screen', () => {
    it('Renders correctly', () => {
        const renderedValue = render(
            <Provider store={store}>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider {...eva} theme={eva.light}>
                    <VideosList {...props} />
                </ApplicationProvider>
            </Provider>,
        );

        expect(renderedValue).toMatchSnapshot();
    });

    it('FlatList loads', async () => {
        const renderedValue = render(
            <Provider store={store}>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider {...eva} theme={eva.light}>
                    <VideosList {...props} />
                </ApplicationProvider>
            </Provider>,
        );

        expect(
            renderedValue.getByTestId('test_flat_list').props?.data?.length,
        ).toEqual(itemsList?.videos.length);
    });

    it('Search input loaded and available', () => {
        const renderedValue = render(
            <Provider store={store}>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider {...eva} theme={eva.light}>
                    <VideosList {...props} />
                </ApplicationProvider>
            </Provider>,
        );

        expect(
            renderedValue.getByTestId('video_list_search_input').props
                .placeholder,
        ).toEqual('Start to type');
    });
});
