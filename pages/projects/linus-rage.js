import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../../styles/Linus_Rage.module.css'
import axios from 'axios'

class Linus_Rage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: null,
      hate_level: null
    };

    this.getRant = this.getRant.bind(this);
  }

  getRant() {
    let that = this;
    axios.get('http://api.3hz.io/linus')
      .then((response) => {
        that.setState({
          quote: response.data.text,
          hate_level: response.data.hate
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return(
      <div className={styles.container}>

        <h1 className={styles.header} id="linus-header">

          <div className={styles.splash_container}>
            <img className={styles.splash} src="/linusrage.png"/>
          </div>
        </h1>

        <div className={styles.main}>
          <div className={styles.quote}>
            {this.state.quote}
          </div>
          <div className={styles.avatar}>

          </div>
        </div>

        <div className={styles.button_container}>
          <a className={styles.button} onClick={this.getRant}>
            Rage
          </a>
        </div>
      </div>
    )
  }
}

export default Linus_Rage;