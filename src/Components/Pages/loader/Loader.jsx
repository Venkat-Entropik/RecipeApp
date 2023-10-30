import React from 'react'

import styles from './Loader.module.css'
const Loader = () => {
  return (
    <div>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/99cc9360636009.5a5478f09b256.gif" alt="lodigGif" className={styles.loadingGif}/>
    </div>
  )
}

export default Loader