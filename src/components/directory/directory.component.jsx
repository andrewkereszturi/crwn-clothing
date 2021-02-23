import React from 'react';
import './directory.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import MenuItem from '../menu-item/menu-item.component'

const  Directory = () => (
  <div className="directory-menu">
    {
      this.state.sections.map(({id, ...otherSectionProps})=> (
        <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);