# nodecg-components
A components library to use with the NodeCG dashboard.

# Installing
`nodecg install nicnacnic/nodecg-components`

# Loading components
To load components into a dashboard panel, place the following line of HTML code into the head of your document: `<script defer src="/components/<component-name>/<component-name>.js"></script>`

For example, if you would like to load the nodecg-button component, insert the following: `<script defer src="/components/button/button.js"></script>`

# Using components
Simply add a tag with your desired component. A list of components and their functions are below.

`<nodecg-button id="myButton">This is a nodecg-button!</nodecg-button>`

| Name | Function |
| --- | ----------- |
| nodecg-button | Button |
| nodecg-icon-button | Button with icon |
| nodecg-checkbox | Checkbox |
| nodecg-input | Text Input |
| nodecg-select | Select Input |
| nodecg-slider | Slider Input |
| nodecg-textarea | Textarea Input |

More detailed documentation including availiable methods will be coming soon.
