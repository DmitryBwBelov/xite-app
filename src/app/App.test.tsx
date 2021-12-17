/**
 * @format
 */

import 'react-native';
import React from 'react';
import {App} from './index';
import {render} from '@testing-library/react-native';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@react-navigation/native/lib/commonjs/useLinking.native', () => ({
    default: () => ({getInitialState: {then: jest.fn()}}),
    __esModule: true,
}));
jest.mock('@react-navigation/native/lib/commonjs/useBackButton');

describe('Application', () => {
    it('renders correctly', async () => {
        const app = render(<App />);
        expect(app).toMatchSnapshot();
    });
});
