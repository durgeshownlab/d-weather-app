import React, { useContext, useRef } from 'react'
import styles from './Header.module.css'

import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import weatherContext from '../../context/context'

const Header = () => {

    const {inputField, setInputField}=useContext(weatherContext)

    const menubar=useRef(null)
    const searchRef=useRef(null)
    

    const searchHandler=()=>{
        const searchText=searchRef.current.value
        console.log('hii', searchText)
        if(searchText!='')
        {
            setInputField(searchText)
        }
        else{
            setInputField("delhi")
        }

    }

    const toggleMenu=()=>{
        console.log('button clicked', menubar.current)
        if(menubar.current.style.display=='flex')
        menubar.current.style.display='none';
        else
        menubar.current.style.display='flex';
    }

    return (
        <>
            <nav className={styles.navbarContainer}>
                <div className={styles.menuContainer}>
                    <ul className={styles.menuItems} ref={menubar}>
                        <li><NavLink to="/" className={(e)=>{return `${e.isActive?styles.active:''}`}}>Home</NavLink></li>
                        <li><NavLink to="/About" className={(e)=>{return `${e.isActive?styles.active:''}`}}>Aboout</NavLink></li>
                    </ul>
                    <button className={styles.menuToggleButton} onClick={toggleMenu}>
                        <FontAwesomeIcon className={`${styles.fontIcon} ${styles.menuIcon}`} icon={faBars} />
                    </button>
                </div>

                <div className={styles.searchBar}>
                    <input type="text" ref={searchRef} className={styles.searchInput} placeholder='Search City, Area, Pincode' />
                    {/* <input type="text" onChange={(e)=>setInputField(e.target.value)} className={styles.searchInput} placeholder='Search City, Area, Pincode' /> */}
                    <button className={styles.searchButton} onClick={(e)=>searchHandler()}>
                        <FontAwesomeIcon className={`${styles.fontIcon} ${styles.searchIcon}`} icon={faMagnifyingGlass} />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header
