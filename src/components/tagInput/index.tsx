// Modules
import React, {useCallback, useEffect, useState} from 'react';
import {MainWrap, SearchWrap} from './styles';
import {IndexPath, SelectItem} from '@ui-kitten/components';

interface TagInputInterface {
    setSelectedValues: (values: any[]) => void;
    values: {name: string; id: string | number}[] | [];
}

export const TagInput = React.memo<TagInputInterface>(
    ({values, setSelectedValues}) => {
        const [selected, setSelected] = useState([new IndexPath(-1)]);

        const getTitle = useCallback(() => {
            return selected
                .filter(({row}) => row > -1)
                .map(({row}) => values[row]?.name)
                .join(', ');
        }, [selected, values]);

        useEffect(() => {
            const items = selected.filter(({row}) => row > -1);
            if (items.length >= 1) {
                setSelectedValues(items.map(({row}) => values[row]?.id));
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [selected]);

        return (
            <MainWrap>
                <SearchWrap
                    multiSelect={true}
                    value={getTitle() || 'Select genres'}
                    selectedIndex={selected}
                    onSelect={index => setSelected(index as IndexPath[])}>
                    {values.map(({id, name}) => (
                        <SelectItem key={id} title={name} />
                    ))}
                </SearchWrap>
            </MainWrap>
        );
    },
);
