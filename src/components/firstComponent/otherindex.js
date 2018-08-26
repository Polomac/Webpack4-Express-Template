// Importing template
import template2 from './otherindex.html';

// Importing template's style
import './otherindex.scss';

// Exporting local template along with imported one
export default {
  template() {
    let template = document.createElement('div');
    template.innerHTML = '<h4>How are you doing</h4>\
                          <img src="./assets/img/imgOne.png" width="400px">'
                          + template2;
    template.className = 'inner-div';

    return template
  },
};

