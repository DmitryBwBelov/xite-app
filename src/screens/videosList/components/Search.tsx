// Modules
import React, {useEffect, useState} from 'react';
import {ConnectedComponent} from 'react-redux';
// Types
import {PayloadSearchInterface} from '@interfaces/videosList/PayloadSearch.type';
import {FilterType} from './types/Filter.type';
// Styles
import {SearchInputWrap} from './styles';
// Enhancer
import {enhance} from './enhance';

const SearchComponent = React.memo<FilterType>(({filterVideosList}) => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        filterVideosList({query: searchQuery} as PayloadSearchInterface);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);

    return (
        <SearchInputWrap
            testID="video_list_search_input"
            placeholder="Start to type"
            value={searchQuery}
            onChangeText={nextValue => setSearchQuery(nextValue)}
        />
    );
});

export const Search = enhance(
    SearchComponent as ConnectedComponent<React.FunctionComponent, {}>,
);
