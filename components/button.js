import React, { useState }  from 'react'

import styles from './button.module.css'

export default ({children}) => <button className={styles.button}>{children}</button>