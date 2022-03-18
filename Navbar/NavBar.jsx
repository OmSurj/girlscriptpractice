import React from 'react'
import styles from './styles/navbar.module.scss';
import Link from "next/link";
//import styles from './styles.'
const index = () => {
export default function NavBar() {
  return (
    <div className={styles.navContainer}>
        <>
        <nav>
    <ul className="menu-bar">
      <li><Link href="/about"><a>About</a>
      </Link>
    </li>
    <li><Link href="/event"><a>Event</a>
    </Link>
    </li>
    <li><Link href="/board"><a>Board</a>
    </Link>
    </li>
    <li><Link href="/join us"><a>Join Up</a>
    </Link>
    </li>
    </ul>
        </nav> 
         
      
    
    <header className="header">
      <div className="brand_box"></div>
    
    <div className="text_box">
    <h1 className="heading_primary">
      <span className="heading_primary_main">
        GIRLSCRIPT MANIPAL
      </span>
      <span>CHAPTER IN MANIPAL PROMOTING DIVERISTY IN TECH</span>
    </h1>
    </div>
    </header>
    </>
      )
     }</div>
  )
}
