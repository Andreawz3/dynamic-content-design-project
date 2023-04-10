import styles from './FilterMenu.module.css'

import Button from '@/components/Button';

export default function FilterMenu({filterMenu}) {
    return (
        <>
            <Button
                backgroundColour='var(--color-white)'
                colour='var(--color-black)'
                children='All'
                fontSize='14px'
                fontWeight='400'
                padding='15px 20px'
            />
            {filterMenu.map((data, index) => 
                <Button
                    key={index}
                    children={data.country}
                    backgroundColour='var(--color-white)'
                    colour='var(--color-black)'
                    fontSize='14px'
                    fontWeight='400'
                    padding='15px 40px'
                />
            )}
        </>
    )
}