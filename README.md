# Accessible Forms

This repository includes two forms which are very similar, but one is accessible while the other one is not.

-   https://accessible-form.netlify.app
-   https://inaccessible-form.netlify.app

The accessible form has the following features, which are missing in the inaccessible form:

**Basics**

-   add alt text for images
-   sufficient color contrast

**Form elements**

-   labels for form elements
-   high contrast for input borders
-   add outlines for focussed interactive elements
-   remove placeholders (since they are inaccessible)
-   clear action text on the login button
-   bring the login button close to the input fields

**Semantics**

-   semantic HTML tags (heading, button, form)
-   page regions (header, main, section)
-   inputs of type email and password (not just text inputs)

**Error handling**

-   use aria-live for error messages so that screenreaders will read them
-   accessible asterisk indicators for required fields
-   handle email and password error individually
-   link error messages to their respective fields via aria-describedby

**Misc**

-   link the form description with aria-describedby
-   hide decorative images via aria-hidden
-   rem units instead of pixel units

All this makes the form suitable for keyboard navigation and screenreaders.

This repository will be used for a tutorial on web accessibility.

## Automatically detected issues

I tried out some tools to check if they find all the issues of the inaccessible form.

### Issues found by [Google Lighthouse](https://github.com/GoogleChrome/lighthouse)

-   Images do not have `alt` attributes
-   Background and foreground colors do not have a sufficient contrast ratio.

### Issues found by [Firefox Accessibility checker](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/)

-   Content with images must be labelled
-   Color and contrast
-   Focusable element may be missing focus styling
-   Form elements should have a visible text label
-   Clickable elements must be focusable and should have interactive semantics

### Issues found by [Accessibility Checker](https://www.accessibilitychecker.org/)

-   Background and foreground colors do not have a sufficient contrast ratio
-   Image elements do not have `alt` attributes
-   Form elements do not have associated labels

### Issues found by [WAVE](https://wave.webaim.org/)

-   Missing alternative text
-   Missing form label
-   Very low contrast
-   No heading structure
-   No page regions

### Issues found by [axe DevTools](https://www.deque.com/axe/devtools/)

-   Elements must have sufficient color contrast
-   Images must have an alternative text
-   Document should have one main landmark
-   All page content should be contained by landmarks
-   Page should contain a level-one heading

No tool detected all issues. That being said, manual testing is always necessary.

## Resources

-   Accessibility checklist: https://www.a11yproject.com/checklist/
-   How to Meet WCAG (Quick Reference): https://www.w3.org/WAI/WCAG21/quickref/
-   ARIA Authoring Practices Guide: https://www.w3.org/WAI/ARIA/apg/
