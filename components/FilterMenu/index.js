import Link from 'next/link';
import styles from './FilterMenu.module.css'

import Button from '@/components/Button';

export default function FilterMenu({filterMenu, currentCategory, currentPage}) {
    return (
        <>
            <Button
                href={currentPage == 'home' ? '' : `/${currentPage}`}
                backgroundColour={currentCategory == 'all' ? 'var(--color-red)' : 'var(--color-pure-white)'}
                colour={currentCategory == 'all' ? 'var(--color-white)' : 'var(--color-black)'}
                children='All'
                fontSize='14px'
                fontWeight={currentCategory == 'all' ? 600 : 400}
                padding='15px 20px'
                boxShadow
                categoryButton
            />
            {filterMenu.map((data, index) => 
                <Button
                    href={
                        currentPage == 'categories' ?  `/categories/${data.toLowerCase()}` :
                        currentPage == 'home' ? '' : ''
                    }
                    key={index}
                    children={data}
                    backgroundColour= {data == currentCategory ? 'var(--color-red)' : 'var(--color-pure-white)'}
                    colour={data == currentCategory ? 'var(--color-white)' : 'var(--color-black)'}
                    fontSize='14px'
                    fontWeight={data == currentCategory ? 600 : 400}
                    padding='15px 40px'
                    boxShadow
                    categoryButton
                />
            )}
        </>
    )
}