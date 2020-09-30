const fs = require('fs');
const path = require('path');
const assert = require('chai').assert;
const parse5 = require('parse5');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;


describe('BookForm.vue', () => {
  it('should contain a form with submit call to bookSubmit @book-list-will-contain-submit-with-prevent-and-method-call', () => {
    let file;
    try {
      file = fs.readFileSync(path.join(process.cwd(), 'src/components/BookForm.vue'), 'utf8');
    } catch (e) {
      assert(false, 'The BookForm.vue file does not exist');
    }

    // Parse document
    const doc = parse5.parseFragment(file.replace(/\n/g, ''), { locationInfo: true });
    const nodes = doc.childNodes;

    // Parse for HTML in template
    const template = nodes.filter(node => node.nodeName === 'template');
    if (template.length == 0) {
      assert(false, "The BookForm component does not contain a template tag")
    }

    const content = parse5.serialize(template[0].content);
    const dom = new JSDOM(content, { includeNodeLocations: true, SVG_LCASE: true });
    const document = dom.window.document;

    // Test for for form existance
    const results = document.querySelector('form');

    assert(results != null, 'The BookForm template does not contain a `form` tag');
    assert(results.length > 0, 'The BookForm template does not contain a `form` tag');

    if (results.innerHTML.includes('submit.prevent')) {
      assert(false, 'You need to add the submit event to the form tag.');
    } else if (results.outerHTML.includes('@submit.prevent')) {
      
    } else if (results.outerHTML.includes('submit.prevent')) {
      if (results.outerHTML.includes(' :submit.prevent')) {
        assert(false, 'You need to add the submit event with the `v-on` tag.');
      }
    } else {
      assert(results.outerHTML.includes('submit.prevent'), 'The `form` tag in the BookForm template does not include `v-on` with `submit.prevent` modifier.');
    }

    let re = /bookSubmit\(bookTitle\s*\,\s*bookAuthor\)/
    let match = results.outerHTML.match(re)
    assert(match != null && match.length == 1, 'The `v-on` with `submit.prevent` modifier called in BookForm\'s `form` tag does not call the `bookSubmit()` method');
    
  });
});
