## What is React-Form : 
![React](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5dLC0TgasQYSj030XB8Yhac92hrXVuNniQ&usqp=CAU)

Form elements behave slightly differently from other DOM elements in React because form elements naturally retain their own internal state. For example, this form in HTML accepts one name:

<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

This form has the same default behavior as HTML forms in terms of going to a new page when the user presses the submit button,
and if you just want this behavior in React it will work fine for you, but in most cases it is more convenient to have a function in JavaScript that handles With submit data and have access to the data entered by the user in the form.
The standard way to achieve this is by using a technique called controlled components.

## Seized components : 
HTML form elements such as <input> , <textarea> , and <select> maintain their own state and update them according to user input. In React, a modifiable state is kept within the components' state property and updated only via the setState() method.

We can combine them by making the React state the only source of truth, so that the React component that renders the form also becomes the controller of what happens in that form as user input cascades. The input element whose value is controlled by React is called the configured component.
