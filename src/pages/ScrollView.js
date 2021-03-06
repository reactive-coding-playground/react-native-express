import React, { Component } from 'react'

import Page from './Page'
import styles from './styles'
import { WebPlayer, Author } from '../components'

const code = `import React, { Component } from 'react'
import { AppRegistry, ScrollView, View, StyleSheet } from 'react-native'

class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.boxLarge} />
        <ScrollView horizontal>
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
        </ScrollView>
        <View style={styles.boxLarge} />
        <View style={styles.boxSmall} />
        <View style={styles.boxLarge} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
})

AppRegistry.registerComponent('App', () => App)
`

export default class View extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>
            {this.props.title}
            <Author url={'https://twitter.com/devinaabbott'}>
              @devinaabbott
            </Author>
          </div>
          <div style={styles.p}>
            <code>ScrollView</code>s are used for scrollable content. They're well suited for scrolling small quantities of content ({'<'} 30 items). They can scroll horizontally or vertically. For large quantities of items, consider using a <code>ListView</code> for better performance.
          </div>
          <WebPlayer code={code} />
        </div>
      </Page>
    )
  }
}
